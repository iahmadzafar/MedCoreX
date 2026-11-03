#!/usr/bin/env python3
"""Harvest MCQs (+explanations) from the NRE 50 WorkBook .docx source folder.

Reads every *Solved* workbook in the source folder, parses the strict layout
(question number -> stem -> options A-D -> ANSWER -> EXPLANATION -> EXAM TRAP
-> FUTURE ALERT) and appends each distinct question set as a bank in
hub-data/mcq_index.jsonl, registering banks in mcq_banks.json.
site/hub-data/ and the root hub-data/ mirror are kept in sync.

Usage: python3 tools/harvest_workbook.py "<source folder>"
"""
import glob
import json
import os
import re
import sys
import zipfile

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SITE_HUB = os.path.join(ROOT, "site", "hub-data")
ROOT_HUB = os.path.join(ROOT, "hub-data")

# Set identity per workbook index (workbook 1 == archive mini-mock content).
SET_META = {
    1: ("WB50-1", "NRE 50 WorkBook — mini-mock set 1 (worked explanations)"),
    2: ("WB50-2", "NRE 50 WorkBook — mini-mock set 2 (worked explanations)"),
    3: ("WB50-3", "NRE 50 WorkBook — mini-mock set 3 (worked explanations)"),
    4: ("WB50-4", "NRE 50 WorkBook — mini-mock set 4 (worked explanations)"),
    0: ("WB50-1", "NRE 50 WorkBook — mini-mock set 1 (worked explanations)"),  # archive twin of 1
}

SECTION_HEADS = [
    "Medicine & Allied", "Surgery & Allied", "Obstetrics & Gynaecology",
    "Paediatrics", "Ophthalmology", "ENT", "Applied Pathology",
    "Applied Anatomy", "Applied Physiology", "Clinical Pharmacology",
    "Applied Biochemistry", "Community Medicine", "Forensic Medicine",
    "Psychiatry",
]

# coarse topic guess: ordered keyword bank, first match wins
TOPIC_RULES = [
    ("Cardiovascular", r"\bECG|STEMI|myocardial infarction|heart failure|hypertension crisis|aortic dissection|pericarditis|cardiac tamponade|atrial fibrillation|endocarditis"),
    ("Respiratory", r"pneumonia|asthma|pleural effusion|PEFR|pneumothorax|pulmonary embolism|tubercul|COPD|haemoptysis|interstitial|pulse oximet|oxygen sat|respiratory "),
    ("Neurology", r"\bseizure|stroke|encephalitis|meningitis|Guillain|myasthenia|Parkinson|headache|migraine|subarachnoid|consciousness|Glasgow|neuropath"),
    ("Endocrine", r"diabet|thyroid|thyrotoxic|adrenal|Cushing|Addison|hypercalcaemia|hypoglycaem|HbA1c|insulin|pituitary"),
    ("Nephrology", r"renal|kidney|creatinine|dialysis|nephrotic|nephritic|urinal|electrolyte|hyperkalaemia|hyponatraemia|AKI"),
    ("Gastroenterology", r"liver|hepat|jaundice|gastr|oesophag|varice|colon|appendic|pancreat|cholecyst|diarrhoea|coeliac|malabsorp|bil"),
    ("Haematology", r"anaemia|anemia|platelet|leukaemia|lymphoma|clotting|INR|warfarin|anticoagul|transfusion|sickle|thalassae|thalasse"),
    ("Infectious Disease", r"antibiotic|malaria|dengue|sepsis|abscess|infection|measles|typhoid|meningococc|fever"),
    ("Dermatology", r"rash|psorias|eczema|purpura|erythema|skin lesion|prurit"),
    ("Obstetrics & Gynaecology", r"pregnan|labour|labo[u]r|placenta|eclampsia|pre-eclampsia|obstetric|caesarean|ovar|uterus|menstru|contracept|cervical"),
    ("Paediatrics", r"child|infant|paediatric|pediatric|neonat|newborn|vaccin|growth|milestone"),
    ("Pharmacology", r"dose of|drug|digoxin|statin|ACE inhibitor|beta.block|calcium channel|pharmacokinet|cad?verse|toxicity of"),
    ("Urology", r"prostate|testic|scrotal|urinar[ry] (?:retention|calculi)|renal stone|haematuria"),
    ("Orthopaedics", r"fracture|dislocat|joint pain|back pain|osteoarthritis|rheumatoid arthritis|osteoarthritis|rheumatoid|join pain|JOINT|knee|hip|osteomyelitis|gout|carpal|ulnar|radial nerve"),
    ("Genetics", r"autosomal|mutation|syndrome—genetic|chromosom"),
    ("Psychiatry", r"psychiat|depression|schizophren|suicid|anxiety disorder"),
    ("Community Medicine", r"epidemi|outbreak|notification|vaccination coverage|incidence|prevalence"),
    ("Forensic Medicine", r"post-mortem|forensic|poisoning death|gunshot|drowning|asphyxia|rape medical"),
]


def guess_topic(stem, subject=""):
    # subject-anchored topics trump keyword guesses for sectioned sciences
    anchored = {
        "Applied Pathology": "Pathology|Unclassified",
        "Applied Anatomy": "Anatomy|Unclassified",
        "Applied Physiology": "Physiology|Unclassified",
        "Clinical Pharmacology": "Pharmacology|Unclassified",
        "Applied Biochemistry": "Biochemistry|Unclassified",
        "Community Medicine": "Community Medicine|Unclassified",
        "Forensic Medicine": "Forensic Medicine|Unclassified",
        "Obstetrics & Gynaecology": "Obstetrics & Gynaecology|Unclassified",
        "Paediatrics": "Paediatrics|Unclassified",
        "Ophthalmology": "Ophthalmology|Unclassified",
        "ENT": "ENT|Unclassified",
    }
    if subject in anchored:
        return anchored[subject], "low"
    for domain, pat in TOPIC_RULES:
        if re.search(pat, stem, re.I):
            return f"{domain}|Unclassified", "low"
    return "Unclassified|Unclassified", "low"


def docx_paras(path):
    z = zipfile.ZipFile(path)
    xml = z.read("word/document.xml").decode("utf8")
    xml = re.sub(r"<w:p[ >]", "\n<w:p ", xml)
    paras = []
    for p in xml.split("\n"):
        t = "".join(re.findall(r"<w:t[^>]*>([^<]*)</w:t>", p))
        for a, b in (("&amp;", "&"), ("&lt;", "<"), ("&gt;", ">"),
                     ("&quot;", '"'), ("&#39;", "'")):
            t = t.replace(a, b)
        paras.append(t)
    return paras


def parse_set(paras):
    """Parse question blocks in document order, then sort by question number.

    The source docx is an HTML two-column export: the left column's questions
    (1..28) and the right column's (29..50) are interleaved block-wise in the
    XML, so numeric sequence cannot be assumed. Parse by number tokens
    (a bare 1-2 digit line followed by a long stem line) and sort at the end.
    Subject comes from the section header preceding the question's flat
    position (this reproduces the doc's own score-table counts exactly)."""
    blocks = []          # question dicts keyed by number
    cur = None
    stage = None
    subject = ""

    def flush():
        nonlocal cur
        if cur and (not cur["stem"] or len(cur["opts"]) != 4 or not cur["ans"]
                    or not cur["expl"] or not cur["trap"] or not cur["alert"]):
            miss = [k for k in ("stem", "opts", "ans", "expl", "trap", "alert")
                    if k == "opts" and len(cur["opts"]) != 4 or not cur[k]]
            print(f"  !! dropped Q{cur.get('n')}, missing: {miss}")
        if cur and cur["stem"] and len(cur["opts"]) == 4 and cur["ans"] \
                and cur["expl"] and cur["trap"] and cur["alert"]:
            blocks.append(cur)
        cur = None

    for pos, raw in enumerate(paras):
        line = raw.strip()
        if line in SECTION_HEADS and pos > 90:
            subject = line
            flush()          # keep any completed pending block, don't discard it
            stage = None
            continue
        if re.match(r"^\d+:\s*[A-D]", line):
            continue
        m = re.fullmatch(r"(\d{1,2})", line)
        if m and pos + 1 < len(paras) and len(paras[pos + 1].strip()) > 60:
            nxt = paras[pos + 1].strip()
            if re.match(r"^([A-D])[.)]", nxt) or nxt.startswith("ANSWER"):
                continue
            flush()
            cur = {"n": int(m.group(1)), "subject": subject, "stem": "",
                   "opts": [], "ans": None, "expl": [], "trap": [], "alert": []}
            stage = "stem"
            continue
        if cur is None or not line:
            continue
        mo = re.match(r"^([A-D])[.)]\s*(.+)$", line)
        if mo and stage in ("stem", "opts"):
            stage, _ = "opts", cur["opts"].append(mo.group(2))
            continue
        if line.startswith("ANSWER"):
            ma = re.match(r"^ANSWER\s*:\s*([A-D])", line)
            cur["ans"] = ma.group(1) if ma else cur["ans"]
            stage = None
            continue
        if line.startswith("EXPLANATION"):
            stage = "expl"
            continue
        if line.startswith("EXAM TRAP"):
            stage = "trap"
            continue
        if line.startswith("FUTURE ALERT"):
            stage = "alert"
            continue
        if stage == "stem":
            cur["stem"] = (cur["stem"] + " " + line).strip()
        elif stage == "opts" and cur["opts"]:
            cur["opts"][-1] += " " + line
        elif stage == "expl":
            cur["expl"].append(line)
        elif stage == "trap":
            cur["trap"].append(line)
        elif stage == "alert":
            cur["alert"].append(line)
    flush()

    qs = sorted(blocks, key=lambda b: b["n"])
    nums = [b["n"] for b in qs]
    if nums != list(range(1, 51)):
        print("  !! numbers wrong:", nums)
    return qs


def wb_number(path):
    m = re.search(r"WorkBook (\d)", path)
    return int(m.group(1)) if m else 0


def main():
    src = (sys.argv[1].strip() if len(sys.argv) > 1 else "").replace("\\ ", " ").rstrip("/")
    if not src or not os.path.isdir(src):
        sys.exit(f"source folder not found: {src!r}")

    files = sorted(glob.glob(os.path.join(src, "**", "*Solved*.docx"),
                             recursive=True), key=wb_number)
    if len(files) < len(SET_META):
        sys.exit(f"expected at least {len(SET_META)} solved workbooks, found "
                 + ", ".join(map(os.path.basename, files)))

    sets = []
    for f in files:
        qs = parse_set(docx_paras(f))
        print(os.path.basename(f), "->", len(qs), "questions")
        sets.append((f, qs))

    # Collapse content duplicates (workbook 1 == archive mini-mock) by
    # comparing stems of the two preceding sets.
    unique = []
    for f, qs in sets:
        pref = {q["stem"][:70] for q in qs}
        if unique and pref == unique[-1][2]:
            print("  (content duplicate of previous set, skipping):", os.path.basename(f))
            continue
        unique.append((f, qs, pref))

    index_path = os.path.join(SITE_HUB, "mcq_index.jsonl")
    banks_path = os.path.join(SITE_HUB, "mcq_banks.json")

    with open(index_path) as fh:
        existing = [json.loads(l) for l in fh if l.strip()]

    def norm(s):
        return re.sub(r"[^a-z0-9]+", " ", s.lower()).strip()

    seen = {(norm(d["stem"]), norm(" ".join(d["opts"]))) for d in existing}
    n_before = len(existing)

    rel = os.path.relpath(src, ROOT)
    banks_pending = []
    for f, qs, _ in unique:
        bank, name = SET_META[wb_number(f)]
        added = 0
        for i, q in enumerate(qs, 1):
            key = (norm(q["stem"]), norm(" ".join(q["opts"][:4])))
            if key in seen:
                print(f"  {bank}: Q{i} duplicate of existing bank, keeping only the twin")
                continue
            seen.add(key)
            topic, conf = guess_topic(q["stem"], q["subject"])
            existing.append({
                "stem": q["stem"],
                "opts": q["opts"][:4],
                "c": "ABCD".index(q["ans"]),
                "correct_letter": q["ans"],
                "subject": q["subject"],
                "src_ref": f"Q{i}",
                "evidence": "AUTH",
                "defect": False,
                "restored": False,
                "source_file": rel,
                "uid": f"{bank}/{added + 1:04d}",
                "bank": bank,
                "topic": topic,
                "topic_confidence": conf,
                "expl": " ".join(q["expl"]),
                "trap": " ".join(q["trap"]),
                "alert": " ".join(q["alert"]),
            })
            added += 1
        print(f"{bank}: {added} new questions ({name})")
        banks_pending.append((bank, name, added))

    with open(index_path, "w") as fh:
        for d in existing:
            fh.write(json.dumps(d, ensure_ascii=False) + "\n")

    # register banks (idempotent)
    with open(banks_path) as fh:
        banks_data = json.load(fh)
    for bank, name, added in banks_pending:
        banks_data["included"][bank] = {"name": name, "kind": "authored",
                                        "tier": "AUTH", "n": added,
                                        "title": "NRE mini-mock (worked explanations)"}
    data = json.dumps(banks_data, ensure_ascii=False, indent=1) + "\n"
    with open(banks_path, "w") as fh:
        fh.write(data)

    # mirror to root hub-data
    for fn in ("mcq_index.jsonl", "mcq_banks.json"):
        with open(os.path.join(SITE_HUB, fn), "rb") as s:
            body = s.read()
        with open(os.path.join(ROOT_HUB, fn), "wb") as d:
            d.write(body)
        print("mirrored:", fn)

    print(f"total added: {len(existing) - n_before} "
          f"({n_before} -> {len(existing)})")


if __name__ == "__main__":
    main()
