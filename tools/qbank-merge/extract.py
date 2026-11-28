"""Read both question sources into one flat record shape.

Canonical records keep the `data.js` field names (`subject_id`, `system`,
`stem`, `answer`). Legacy records are normalized once here — `opts` becomes
`options`, `c` becomes `answer` — so no later module ever sees legacy names.
"""

from __future__ import annotations

import json
import re
from pathlib import Path

_LABEL = re.compile(r"^\s*[A-Za-z]\d{1,3}\s*[:：]\s*")


def load_canonical(path: Path) -> list[dict]:
    """Flatten canonical.json's subjects[].questions[] into records."""
    data = json.loads(Path(path).read_text())
    records: list[dict] = []
    for subject in data["subjects"]:
        for q in subject["questions"]:
            records.append(
                {
                    "id": q["id"],
                    "subject_id": subject["id"],
                    "group": subject["group"],
                    "name": subject["name"],
                    "system": q["sys"],
                    "topic": q["topic"],
                    "stem": q["q"],
                    "options": list(q["options"]),
                    "answer": q["answer"],
                    "layers": dict(q.get("layers") or {}),
                    "kc": q.get("kc"),
                }
            )
    return records


def _split_labels(raw_topic: str | None) -> tuple[str, str]:
    """Legacy `topic` is `A|B` where A is a system or a prose subject label."""
    text = (raw_topic or "").strip()
    if "|" in text:
        left, right = text.split("|", 1)
        return left.strip(), right.strip()
    return text, ""


def _strip_label(stem: str) -> str:
    """Remove an embedded source-file label such as `A49 :` or `Q12:`.

    Legacy stems sometimes carry the question number of the file they were
    scraped from. It is a scraping artifact, not content — and because the
    fallback topic is built from the stem's first clause, leaving it in would
    put `A49 :` on the site as a topic chip.
    """
    return _LABEL.sub("", stem)


def load_legacy(path: Path) -> list[dict]:
    """Read the legacy JSONL index and normalize it to the canonical names."""
    records: list[dict] = []
    with Path(path).open(encoding="utf-8") as handle:
        for line in handle:
            line = line.strip()
            if not line:
                continue
            raw = json.loads(line)
            subject_label, topic_label = _split_labels(raw.get("topic"))
            records.append(
                {
                    "stem": _strip_label(raw.get("stem") or ""),
                    "options": list(raw.get("opts") or []),
                    "answer": raw.get("c"),
                    "subject_label": subject_label,
                    "topic_label": topic_label,
                    "bank": raw.get("bank") or "",
                    "evidence": raw.get("evidence") or "",
                    "uid": raw.get("uid") or "",
                    "source_file": raw.get("source_file") or "",
                    "src_ref": raw.get("src_ref") or "",
                    "restored": bool(raw.get("restored")),
                }
            )
    return records


def is_wellformed(rec: dict) -> bool:
    """A record is usable as an MCQ: at least four options, answer in range."""
    options = rec.get("options") or []
    answer = rec.get("answer")
    if not isinstance(answer, int):
        return False
    return len(options) >= 4 and 0 <= answer < len(options)
