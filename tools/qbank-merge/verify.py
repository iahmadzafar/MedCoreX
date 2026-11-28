"""Proof gates. Any message returned means the merge is not safe to serve."""

from __future__ import annotations

import json
import re

import constants as C
from match import jaccard, normalize_options, normalize_stem

_PROSE = re.compile(r"\(\s*\d+\s*MCQs\s*\)", re.IGNORECASE)


def _served_field_names(served_text: str) -> set[str] | None:
    """Every JSON key in the served payload, or None when it is not JSONL.

    Field names are the real leak risk; the same word inside a stem is just
    prose ("works at the blood bank") and must not fail the gate.
    """
    names: set[str] = set()
    for line in served_text.split("\n"):
        line = line.strip()
        if not line:
            continue
        try:
            row = json.loads(line)
        except json.JSONDecodeError:
            return None
        if isinstance(row, dict):
            names.update(row.keys())
    return names


def _served_signature(rec: dict) -> tuple:
    return (
        rec.get("stem"),
        tuple(rec.get("options") or []),
        rec.get("answer"),
        tuple(sorted((rec.get("layers") or {}).items())),
    )


def run_gates(original: list[dict], merged: list[dict], served_text: str) -> list[str]:
    """Return a list of failures; empty means every gate passed."""
    errors: list[str] = []

    originals = {rec["id"]: rec for rec in original}
    merged_by_id = {}
    for rec in merged:
        merged_by_id.setdefault(rec["id"], rec)

    missing = sorted(set(originals) - set(merged_by_id))
    if missing:
        errors.append(f"missing original questions: {len(missing)} e.g. {missing[:5]}")

    altered = []
    for qid, before in originals.items():
        after = merged_by_id.get(qid)
        if after is None:
            continue
        if _served_signature(before) != _served_signature(after):
            altered.append(qid)
    if altered:
        errors.append(f"original questions altered: {len(altered)} e.g. {altered[:5]}")

    ids = [rec["id"] for rec in merged]
    duplicates = sorted({i for i in ids if ids.count(i) > 1}) if len(ids) != len(set(ids)) else []
    if duplicates:
        errors.append(f"duplicate ids: {len(duplicates)} e.g. {duplicates[:5]}")

    valid_subjects = {rec["subject_id"] for rec in original} if original else set()
    valid_systems = {rec["system"] for rec in original} if original else set()

    bad_subject = [r["id"] for r in merged if valid_subjects and r["subject_id"] not in valid_subjects]
    if bad_subject:
        errors.append(f"unknown subject ids: {len(bad_subject)} e.g. {bad_subject[:5]}")

    bad_system = [r["id"] for r in merged if valid_systems and r["system"] not in valid_systems]
    if bad_system:
        errors.append(f"unknown system codes: {len(bad_system)} e.g. {bad_system[:5]}")

    # Originals are exempt: the bank ships some 3-option and single-answer
    # items already, and this merge must not touch them (anti-goal 2).
    bad_answer = []
    for rec in merged:
        if rec["id"] in originals:
            continue
        options = rec.get("options") or []
        answer = rec.get("answer")
        if len(options) < 4 or not isinstance(answer, int) or not (0 <= answer < len(options)):
            bad_answer.append(rec["id"])
    if bad_answer:
        errors.append(f"answer out of range or too few options: {len(bad_answer)} e.g. {bad_answer[:5]}")

    field_names = _served_field_names(served_text)
    for token in C.FORBIDDEN_TOKENS:
        if field_names is None:
            leaked = token in served_text
        else:
            leaked = any(token in name for name in field_names)
        if leaked:
            errors.append(f"forbidden token in served text: {token}")

    if _PROSE.search(served_text):
        errors.append("prose subject label leaked into served text: '(NN MCQs)'")

    original_stems = {normalize_stem(rec["stem"]) for rec in original}
    new_records = [rec for rec in merged if rec["id"] not in originals]

    def _toks(text: str) -> set[str]:
        return {t for t in text.split() if len(t) > 2}

    seen_stems: dict[str, str] = {}
    seen_option_sets: dict[tuple, list[set[str]]] = {}
    for rec in original:
        opts = normalize_options(rec.get("options"))
        if len(opts) >= 3:
            seen_option_sets.setdefault(opts, []).append(_toks(normalize_stem(rec["stem"])))

    stem_collisions = []
    option_collisions = []
    for rec in new_records:
        stem = normalize_stem(rec["stem"])
        if stem in original_stems or stem in seen_stems:
            stem_collisions.append(rec["id"])
        seen_stems[stem] = rec["id"]

        # A shared option list is legitimate ("what is the next step" appears in
        # hundreds of questions). It only proves duplication together with a
        # near-identical stem.
        opts = normalize_options(rec.get("options"))
        toks = _toks(stem)
        if len(opts) >= 3:
            repeated = False
            for other_toks in seen_option_sets.get(opts, []):
                if jaccard(toks, other_toks) >= C.JACCARD_THRESHOLD:
                    repeated = True
                    break
            if repeated:
                option_collisions.append(rec["id"])
            seen_option_sets.setdefault(opts, []).append(toks)

    if stem_collisions:
        errors.append(f"duplicate stem among additions: {len(stem_collisions)} e.g. {stem_collisions[:5]}")
    if option_collisions:
        errors.append(
            f"duplicate option set among additions: {len(option_collisions)} e.g. {option_collisions[:5]}"
        )

    return errors
