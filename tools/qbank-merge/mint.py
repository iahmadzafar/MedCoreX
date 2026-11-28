"""Mint IDs for the additions in the bank's existing SUBJECT+SYSTEM+NN scheme.

The canonical bank's sequence suffix is base-36 two-character (`MEDCNS01` …
`MEDCNS0A` … `MEDCNS2M`), so minting continues in the same radix rather than
inventing a parallel decimal namespace.
"""

from __future__ import annotations

import re

_ID = re.compile(r"^([A-Z]{3})([A-Z]{3})([0-9A-Z]{2,3})$")
_DIGITS = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"


def to_base36(value: int, width: int = 2) -> str:
    if value < 0:
        raise ValueError("sequence must be non-negative")
    digits = ""
    remaining = value
    while remaining:
        remaining, rem = divmod(remaining, 36)
        digits = _DIGITS[rem] + digits
    digits = digits or "0"
    return digits.rjust(width, "0")


def parse_id(question_id: str) -> tuple[str, str, int] | None:
    match = _ID.match(question_id or "")
    if not match:
        return None
    subject, system, seq = match.groups()
    try:
        return subject, system, int(seq, 36)
    except ValueError:
        return None


def next_sequence(canonical: list[dict]) -> dict[tuple[str, str], int]:
    """Highest existing sequence per (subject, system) bucket, plus one."""
    buckets: dict[tuple[str, str], int] = {}
    for rec in canonical:
        parsed = parse_id(rec.get("id", ""))
        if parsed is None:
            continue
        subject, system, seq = parsed
        key = (subject, system)
        buckets[key] = max(buckets.get(key, 0), seq)
    return {key: value + 1 for key, value in buckets.items()}


def mint_ids(additions: list[dict], canonical: list[dict]) -> list[dict]:
    """Assign an `id` to every addition, deterministically and without collision."""
    counters = next_sequence(canonical)
    existing = {rec["id"] for rec in canonical}
    ordered = sorted(
        enumerate(additions), key=lambda pair: (pair[1]["subject"], pair[1]["system"], pair[0])
    )

    minted: dict[int, str] = {}
    for index, rec in ordered:
        key = (rec["subject"], rec["system"])
        seq = counters.get(key, 1)
        candidate = f"{key[0]}{key[1]}{to_base36(seq)}"
        while candidate in existing:
            seq += 1
            candidate = f"{key[0]}{key[1]}{to_base36(seq)}"
        existing.add(candidate)
        counters[key] = seq + 1
        minted[index] = candidate

    result = [{**rec, "id": minted[index]} for index, rec in enumerate(additions)]

    ids = [rec["id"] for rec in result]
    if len(set(ids)) != len(ids):
        duplicates = sorted({i for i in ids if ids.count(i) > 1})
        raise SystemExit(f"FATAL: minted ids collide: {duplicates[:10]}")
    return result
