"""Decide which legacy records duplicate a canonical question.

Three passes, cheapest first: exact normalized stem, identical normalized
option set, then fuzzy stem similarity blocked by an inverted token index so
the comparison stays tractable at 6,689 x 5,735.
"""

from __future__ import annotations

import re

import constants as C

_PREFIX = re.compile(r"^[a-z]{0,3}\d{1,3}\s+")
_NON_ALNUM = re.compile(r"[^a-z0-9]+")


def normalize_stem(text: str | None) -> str:
    """Lowercase, drop a leading `a41`-style label, keep only alphanumerics."""
    lowered = (text or "").lower().strip()
    lowered = _PREFIX.sub("", lowered)
    return _NON_ALNUM.sub(" ", lowered).strip()


def normalize_options(options: list[str] | None) -> tuple[str, ...]:
    """Normalized, deduped, sorted option texts — order-independent."""
    cleaned = {_NON_ALNUM.sub(" ", (o or "").lower()).strip() for o in (options or [])}
    return tuple(sorted(x for x in cleaned if x))


def jaccard(a: set, b: set) -> float:
    if not a or not b:
        return 0.0
    return len(a & b) / len(a | b)


def _tokens(normalized: str) -> set[str]:
    return {t for t in normalized.split() if len(t) > 2}


def _answer_text(rec: dict) -> str:
    """The keyed option's normalized text, or '' when the record is malformed."""
    options = rec.get("options") or []
    index = rec.get("answer")
    if not isinstance(index, int) or not (0 <= index < len(options)):
        return ""
    return normalize_stem(options[index])


def link(canonical: list[dict], legacy: list[dict]) -> dict:
    """Match legacy records to canonical ones; return indices and pass counts."""
    stem_index: dict[str, int] = {}
    stem_answers: dict[str, set[str]] = {}
    option_index: dict[tuple[str, ...], int] = {}
    canon_tokens: list[set[str]] = []
    df: dict[str, int] = {}

    for i, rec in enumerate(canonical):
        key = normalize_stem(rec.get("stem"))
        stem_index.setdefault(key, i)
        stem_answers.setdefault(key, set()).add(_answer_text(rec))
        opts = normalize_options(rec.get("options"))
        if len(opts) >= 3:
            option_index.setdefault(opts, i)
        toks = _tokens(key)
        canon_tokens.append(toks)
        for tok in toks:
            df[tok] = df.get(tok, 0) + 1

    inverted: dict[str, list[int]] = {}
    for i, toks in enumerate(canon_tokens):
        for tok in toks:
            inverted.setdefault(tok, []).append(i)

    linked: list[tuple[int, int]] = []
    unmatched: list[int] = []
    ambiguous: list[int] = []
    by_exact = by_options = by_fuzzy = 0

    for li, rec in enumerate(legacy):
        normalized = normalize_stem(rec.get("stem"))

        hit = stem_index.get(normalized)
        if hit is not None:
            legacy_answer = _answer_text(rec)
            canonical_answer = _answer_text(canonical[hit])
            if (
                legacy_answer
                and canonical_answer
                and legacy_answer != canonical_answer
                and legacy_answer not in stem_answers.get(normalized, set())
            ):
                ambiguous.append(li)
            else:
                linked.append((hit, li))
                by_exact += 1
            continue

        opts = normalize_options(rec.get("options"))
        if len(opts) >= 3:
            hit = option_index.get(opts)
            if hit is not None:
                linked.append((hit, li))
                by_options += 1
                continue

        toks = _tokens(normalized)
        if len(toks) < 3:
            unmatched.append(li)
            continue

        ranked = sorted(toks, key=lambda t: df.get(t, 0))
        candidates: list[int] = []
        seen: set[int] = set()
        for tok in ranked[:6]:
            for ci in inverted.get(tok, ()):
                if ci not in seen:
                    seen.add(ci)
                    candidates.append(ci)
        if len(candidates) > 400:
            candidates = candidates[:400]

        opt_set = set(opts)
        best_index = -1
        best_score = 0.0
        for ci in candidates:
            score = jaccard(toks, canon_tokens[ci])
            if score < C.JACCARD_THRESHOLD:
                continue
            if opt_set:
                overlap = jaccard(opt_set, set(normalize_options(canonical[ci].get("options"))))
                if overlap < C.OPTION_OVERLAP_THRESHOLD:
                    continue
            if score > best_score:
                best_score = score
                best_index = ci

        if best_index >= 0:
            linked.append((best_index, li))
            by_fuzzy += 1
        else:
            unmatched.append(li)

    return {
        "linked": linked,
        "unmatched": unmatched,
        "ambiguous": ambiguous,
        "by_exact": by_exact,
        "by_options": by_options,
        "by_fuzzy": by_fuzzy,
    }
