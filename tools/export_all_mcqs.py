#!/usr/bin/env python3
"""Export/refresh MedCoreX "ALL MCQs, PLAIN TEXT" RTF to reflect the live
Question Bank store (site/resources/medcore-question-bank/data.js).

Strategy: sections 2-5 (Study Book drills, Recalled papers, Prediction exam,
Case ladder) are untouched by data.js changes, so we keep the existing RTF's
tail bytes verbatim and only renumber their question markers (+N shift).
Section 1 is regenerated from the current data.js SUBJECTS array and grafted
in, and the header summary + global total are corrected.

Usage: python3 tools/export_all_mcqs.py <existing-export.rtf>
"""
import json
import os
import re
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA_JS = os.path.join(ROOT, "site", "resources",
                       "medcore-question-bank", "data.js")

GROUP_TITLES = {
    "medicine": "MEDICINE & ALLIED",
    "surgery": "SURGERY & ALLIED",
    "eye-ent": "EYE & ENT",
    "obgyn": "OBSTETRICS & GYNAECOLOGY",
    "paeds": "PAEDIATRICS",
    "basic": "BASIC SCIENCES",
}


def rtf_esc(text):
    """Escape a plain string into RTF body text."""
    out = []
    for ch in text:
        if ch == "\\":
            out.append("\\\\")
        elif ch in "{}":
            out.append("\\" + ch)
        elif ord(ch) < 128:
            out.append(ch)
        else:
            try:
                byte = ch.encode("cp1252")[0]
            except (UnicodeEncodeError, IndexError):
                out.append("\\u%d?" % (ord(ch) if ord(ch) < 32768
                                       else ord(ch) - 65536))
            else:
                out.append("\\'%02x" % byte)
    return "".join(out)


def load_subjects():
    src = open(DATA_JS, encoding="utf-8").read()
    start = src.index("[", src.index("SUBJECTS"))
    depth = 0
    end = None
    for i in range(start, len(src)):
        c = src[i]
        if c == "[":
            depth += 1
        elif c == "]":
            depth -= 1
            if depth == 0:
                end = i
                break
    return json.loads(src[start:end + 1])


def build_section1(subs, start_n=1):
    lines = []
    n = start_n - 1
    total = sum(len(s["questions"]) for s in subs)
    div = "=" * 78
    lines.append(div)
    lines.append("SECTION 1 %s MEDCORE QUESTION BANK %s %s MCQs (6 subjects, "
                 "seven-layer breakdowns)" % ("\\'b7", "\\'97", f"{total:,}"))
    lines.append(div)
    lines.append("")
    for s in subs:
        title = GROUP_TITLES[s["id"]]
        lines.append("--- %s %s %d ---" % (title, "\\'97", len(s["questions"])))
        lines.append("")
        for q in s["questions"]:
            n += 1
            stem = q.get("q", "")
            lines.append("[%d] %s" % (n, stem))
            opts = q.get("options", [])
            ans = q.get("answer")
            for oi, o in enumerate(opts):
                lines.append("    %c) %s" % (65 + oi, o))
            if isinstance(ans, int) and 0 <= ans < len(opts):
                lines.append("    ANSWER: %c) %s" % (65 + ans, opts[ans]))
            lines.append("")
    return "\\\n".join(l.replace("\n", "") for l in
                       (rtf_esc(x) for x in lines)) + "\\\n"


def main():
    export_path = sys.argv[1].strip() if len(sys.argv) > 1 else ""
    if not export_path or not os.path.isfile(export_path):
        sys.exit(f"export file not found: {export_path!r}")

    raw = open(export_path, "rb").read().decode("utf-8", "ignore")

    subs = load_subjects()
    counts = {s["id"]: len(s["questions"]) for s in subs}
    new_total_qb = sum(counts.values())

    # locate the export's current section-2 anchor
    m = re.search(r"SECTION 2 ", raw)
    if not m:
        sys.exit("SECTION 2 marker not found in export")
    sec2 = m.start()

    head = raw[:sec2]
    tail = raw[sec2:]

    # tail question markers shift by the section-1 growth
    tail_nums = [int(x) for x in re.findall(r"\[(\d{1,5})\]", tail)]
    # old section-1 size: from its header line "… BANK \'97 5,299 MCQs (…)"
    mq = re.search(r"QUESTION BANK \\\'97 ([\d,]+) MCQs", head)
    if not mq:
        sys.exit("cannot read old Section-1 size from export header")
    old_qb = int(mq.group(1).replace(",", ""))
    shift = new_total_qb - old_qb
    tail = re.sub(r"\[(\d{1,5})\]",
                  lambda mm: "[%d]" % (int(mm.group(1)) + shift), tail)

    # header summary block fixes
    exp_total = new_total_qb + len(tail_nums)
    head = re.sub(r"(Question Bank\s+)\d+", lambda mm: mm.group(1)
                  + str(new_total_qb), head, count=1)
    head = re.sub(r"(TOTAL\s+)\d+", lambda mm: mm.group(1) + str(exp_total),
                  head, count=1)
    head = head.replace("[%d]" % old_qb, "[%d]" % exp_total, 1)

    # section 1 header count embedded in head — replaced by regeneration
    i1 = head.find("SECTION 1 ")
    new_s1 = build_section1(subs)
    out = head[:i1] + new_s1 + "\\\n\\\n" + tail

    with open(export_path, "wb") as fh:
        fh.write(out.encode("utf-8"))

    print(f"section 1: {old_qb} -> {new_total_qb}")
    print("groups:", counts)
    print(f"global total: {exp_total}")
    print("tail markers renumbered:", len(tail_nums), f"(+{shift})")


if __name__ == "__main__":
    main()
