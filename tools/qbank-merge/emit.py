"""Write the served bank and the provenance sidecar.

Served rows use exactly the `data.js` shape, so the site keeps reading the same
fields. Provenance never enters a served file.
"""

from __future__ import annotations

import json
from pathlib import Path

SERVED_KEYS = ("id", "subject_id", "sys", "topic", "q", "options", "answer", "layers")


def _served_row(rec: dict, subject_id: str) -> dict:
    return {
        "id": rec["id"],
        "subject_id": subject_id,
        "sys": rec["system"],
        "topic": rec["topic"],
        "q": rec["stem"],
        "options": list(rec["options"]),
        "answer": rec["answer"],
        "layers": dict(rec.get("layers") or {}),
    }


def _grouped_rows(canonical: list[dict], additions: list[dict]) -> list[dict]:
    order: list[str] = []
    by_subject: dict[str, list[dict]] = {}
    for rec in canonical:
        sid = rec["subject_id"]
        if sid not in by_subject:
            by_subject[sid] = []
            order.append(sid)
        by_subject[sid].append(rec)

    extra: dict[str, list[dict]] = {}
    for rec in additions:
        sids = []
        if rec.get("subject_id"):
            sids = [rec["subject_id"]]
        elif rec.get("subject"):
            sids = [rec["subject"]]
        for sid in sids:
            extra.setdefault(sid, []).append(rec)

    rows: list[dict] = []
    for sid in order:
        rows.extend(_served_row(rec, sid) for rec in by_subject[sid])
        for rec in sorted(extra.pop(sid, []), key=lambda r: r["id"]):
            rows.append(_served_row(rec, sid))
    for sid, recs in extra.items():
        for rec in sorted(recs, key=lambda r: r["id"]):
            rows.append(_served_row(rec, sid))
    return rows


def write_questions_jsonl(canonical: list[dict], additions: list[dict], out: Path) -> int:
    rows = _grouped_rows(canonical, additions)
    out = Path(out)
    out.parent.mkdir(parents=True, exist_ok=True)
    with out.open("w", encoding="utf-8") as handle:
        for row in rows:
            handle.write(json.dumps(row, ensure_ascii=False) + "\n")
    return len(rows)


def write_provenance(additions: list[dict], out: Path) -> None:
    out = Path(out)
    out.parent.mkdir(parents=True, exist_ok=True)
    with out.open("w", encoding="utf-8") as handle:
        for rec in additions:
            handle.write(
                json.dumps(
                    {
                        "id": rec["id"],
                        "bank": rec.get("bank", ""),
                        "evidence": rec.get("evidence", ""),
                        "uid": rec.get("uid", ""),
                        "source_file": rec.get("source_file", ""),
                        "src_ref": rec.get("src_ref", ""),
                        "restored": bool(rec.get("restored")),
                        "subject": rec.get("subject", ""),
                        "system": rec.get("system", ""),
                        "topic": rec.get("topic", ""),
                        "confidence": rec.get("confidence"),
                    },
                    ensure_ascii=False,
                )
                + "\n"
            )


def write_data_js(
    canonical: list[dict],
    additions: list[dict],
    groups: list[dict],
    tips: list[str],
    out: Path,
) -> None:
    """Render the same GROUPS/TIPS/SUBJECTS shape the site already loads."""
    rows = _grouped_rows(canonical, additions)

    subjects: list[dict] = []
    index: dict[str, dict] = {}
    for rec in canonical:
        sid = rec["subject_id"]
        if sid not in index:
            index[sid] = {
                "id": sid,
                "name": rec["name"],
                "group": rec["group"],
                "questions": [],
            }
            subjects.append(index[sid])

    by_id = {rec["id"]: rec for rec in canonical}
    for row in rows:
        sid = row["subject_id"]
        if sid not in index:
            index[sid] = {"id": sid, "name": sid, "group": "medicine", "questions": []}
            subjects.append(index[sid])
        source = by_id.get(row["id"])
        if source is not None:
            question = {
                "id": row["id"],
                "sys": row["sys"],
                "topic": row["topic"],
                "q": row["q"],
                "options": row["options"],
                "answer": row["answer"],
                "layers": row["layers"],
            }
        else:
            question = {
                "id": row["id"],
                "sys": row["sys"],
                "topic": row["topic"],
                "q": row["q"],
                "options": row["options"],
                "answer": row["answer"],
                "layers": {
                    "concept": "",
                    "hook": "",
                    "trap": "",
                    "rule": "",
                },
            }
        if source is not None and source.get("kc"):
            question["kc"] = source["kc"]
        index[sid]["questions"].append(question)

    total = sum(len(s["questions"]) for s in subjects)
    header = (
        "/* MedCORE Question Bank · data — THE ONE TRUE BANK.\n"
        f"   {len(canonical)} canonical questions + {len(additions)} merged additions "
        f"= {total} · {len(subjects)} subjects.\n"
        "   Merged by tools/qbank-merge/merge.py from the canonical data.js and the\n"
        "   nre-legacy index. Provenance lives in hub-data/merged/provenance.jsonl.\n"
        "   Question shape: { id, sys, topic, q, options, answer, layers }.\n"
        "   Generated file — do not hand-edit. */\n"
    )
    body = (
        f"const GROUPS = {json.dumps(groups, ensure_ascii=False)};\n"
        f"const TIPS = {json.dumps(tips, ensure_ascii=False)};\n"
        f"const SUBJECTS = {json.dumps(subjects, ensure_ascii=False)};\n"
    )
    out = Path(out)
    out.parent.mkdir(parents=True, exist_ok=True)
    out.write_text(header + body, encoding="utf-8")
