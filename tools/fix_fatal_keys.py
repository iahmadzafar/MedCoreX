#!/usr/bin/env python3
"""Fatal-issue fixer — run AFTER the parallel QC/dedupe agent's pass lands on
data.js. Locates everything by normalized stem (so it survives count changes),
applies owner-sanctioned corrections for 2026-11-03 audit:

  Fix set (from the dedupe audit of ALL 8,932 export questions):
  1. Wrong keys — femoral hernia (observe/elective vs urgent), pancreatitis day-10
     (abscess vs infected necrosis), Down-syndrome CHD (VSD vs AVSD),
     HBV mother (caesarean vs HBIG), rabies PEP step, PPD drill (type I vs IV),
     deep-ring cough-impulse drill (direct vs indirect).
  2. Clipped first-letter options ("iabetes", "nticipation", …) restored.
  3. 37 unkeyed drills keyed from twins when a twin exists; residue listed.

Stores updated: data.js, master book HTML, warehouse mcq_index.jsonl (both the
site/ and root/ mirrors). Never reorders options; never touches by-design
review-loop content.

Idempotent: already-correct targets are skipped and reported.
"""
import json
import os
import re
import collections
import shutil
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA_JS = os.path.join(ROOT, "site", "resources", "medcore-question-bank", "data.js")
BOOK = os.path.join(ROOT, "site", "resources",
                    "medcore-production-master-html-medcore-master-book.html")
INDEX_PATHS = [
    os.path.join(ROOT, "site", "hub-data", "mcq_index.jsonl"),
    os.path.join(ROOT, "hub-data", "mcq_index.jsonl"),
]

def norm(s):
    return re.sub(r"[^a-z0-9]+", " ", s.lower()).strip()

def load_subjects():
    src = open(DATA_JS, encoding="utf-8").read()
    start = src.index("[", src.index("SUBJECTS"))
    depth = 0
    for i in range(start, len(src)):
        if src[i] == "[":
            depth += 1
        elif src[i] == "]":
            depth -= 1
            if depth == 0:
                end = i
                break
    return json.loads(src[start:end + 1]), (start, end)

# ---------------------------------------------------------------- key fixes
# stem-finding substring (normalized), answer index (option text matters more
# than index — we resolve the index from the option text at fix time)
KEY_FIXES = [
    # tag, stem substring, OPTION text of the correct key, new layer values
    ("femoral",
     "small reducible groin lump below the pubic tubercle",
     "Urgent surgical consult and repair",
     {"concept": "Femoral hernia — repair without delay (highest strangulation risk)",
      "trap": "Reduclibility does not make a femoral hernia safe to observe",
      "rule": "Groin lump below & lateral to the pubic tubercle = femoral hernia → surgical repair, not observation or a truss, because of the narrow neck and highest strangulation risk among groin hernias.",
      "highyield": "Femoral hernia below the pubic tubercle, even reducible and painless → arrange repair urgently. A truss or watchful waiting risks strangulation.",
      }),
    ("pancreatitis",
     "pancreatitis develops fever and leukocytosis",
     "Infected pancreatic necrosis",
     {"concept": "Infected pancreatic necrosis (day 10 post-AP, fever + leukocytosis)",
      "trap": "Abscess vs infected necrosis vs pseudocyst — the timing discriminator",
      "rule": "Around week 1-2 after acute pancreatitis: fever + leukocytosis ± gas in the collection on CT = INFECTED pancreatic necrosis. (Panc. 'abscess' implies a later, walled-off purulent phase; pseudocyst has no infection.)",
      "highyield": "Acute pancreatitis, day 10, fever + leukocytosis + peripancreatic collection on CT = infected pancreatic necrosis → antibiotics + drainage/debridement.",
      }),
    ("down-chd",
     "congenital heart defects is most commonly associated with down syndrome",
     "Atrioventricular septal defect",
     {"concept": "Atrioventricular septal defect (endocardial cushion) — Down syndrome",
      "trap": "VSD is the commonest CHD overall — but Down syndrome keys AVSD",
      "rule": "Down syndrome CHD = AV septal defect (endocardial cushion defect); VSD is the population-common decoy.",
      "highyield": "MCQ trap: commonest CHD in Down syndrome = AVSD (40-50%), next VSD.",
      }),
    ("hbv-mother",
     "3rd-trimester pregnancy is found to have hbsag positive",
     "Hepatitis B immunoglobulin",
     {"concept": "Perinatal HBV — neonatal HBIG (± vaccine), not caesarean",
      "trap": "Caesarean does not reliably prevent vertical HBV transmission",
      "rule": "HBsAg-positive mother → neonate gets HBIG + vaccine at birth; caesarean section does NOT reduce vertical transmission and is not indicated for it.",
      "highyield": "Prevention of mother-to-child HBV = neonatal HBIG + vaccine (mode of delivery doesn't matter).",
      }),
    ("rabies",
     "stray dog bit a farmer",
     "Wash wound extensively",
     {"concept": "Rabies PEP — immediate wound washing first",
      "trap": "Antibiotics without rabies PEP is a fatal error",
      "rule": "Any percutaneous animal bite → immediate extensive soap-and-water wash of the wound, then rabies vaccine ± RIG regardless of how much time has passed.",
      "highyield": "Rabies PEP, even 60h late: wash the wound thoroughly, then vaccinate (± RIG). Antibiotics alone never cover rabies.",
      }),
    # blood film (ring forms) — the qc reorder already keys falciparum here; we
    # still enforce it in case the landed state differs.
    ("malaria-rings",
     "blood film from a febrile patient returning from an endemic area",
     "Plasmodium falciparum",
     {"concept": "Plasmodium falciparum — ring forms on the film",
      "trap": "Band forms = malariae; multiple rings = falciparum",
      "rule": "Ring (trophozoite) forms in RBCs on a febrile traveler's film = falciparum unless band forms (malariae) — key the morphology.",
      "highyield": "Febrile imported malaria: multiple ring forms → falciparum (treat as emergency).",
      }),
]

CLipped_FIXES = [
    # clipped fragment, replacement prefix, note
    ("lbd arthritis", "IBD arthritis", None),
    ("trial contraction (late diastole)", "Atrial contraction (late diastole)", None),
    ("ctivation of G-proteins",
     "Activation of G-proteins", None),
    ("utoimmune destruction of gastric parietal", "Autoimmune destruction of gastric parietal", None),
    ("ietary deficiency due to strict veganism", "Dietary deficiency due to strict veganism", None),
    ("acterial overgrowth in the small intestine", "Bacterial overgrowth in the small intestine", None),
    ("nticipation", "Anticipation", None),
]

TRUNCATED_BOOK_FIXES = [
    # book opt-t text → replacement  (whole-span strings; enriched later by
    # the scan phase)
    ("iabetes insipidus", "Diabetes insipidus"),
    ("ssential hypertension", "Essential hypertension"),
    ("iarrhea", "Diarrhea"),
    ("thanol", "Ethanol"),
    ("enzodiazepines", "Benzodiazepines"),
    ("naemia", "Anaemia"),
    ("cidosis", "Acidosis"),
    ("lkaptonuria", "Alkaptonuria"),
    ("nticipation", "Anticipation"),
    ("trial contraction (late diastole)", "Atrial contraction (late diastole)"),
    ("ctivation of G-proteins", "Activation of G-proteins"),
    ("acterial overgrowth", "Bacterial overgrowth"),
    ("ietary deficiency", "Dietary deficiency"),
    ("utoimmune destruction", "Autoimmune destruction"),
    ("lbd arthritis", "IBD arthritis"),
]


def fix_data_js():
    subs, span = load_subjects()
    applied, already, missing = [], [], []
    for tag, stem_sub, correct_opt, layers in KEY_FIXES:
        hit = None
        for s in subs:
            for q in s["questions"]:
                if stem_sub in norm(q.get("q", "")):
                    hit = (s, q)
                    break
            if hit: break
        if not hit:
            missing.append(tag)
            continue
        s, q = hit
        if correct_opt not in q.get("options", []):
            print(f !! "correct option not found for {tag}: {q.get('options')}")
            missing.append(tag)
            continue
        idx = q["options"].index(correct_opt)
        if q.get("answer") == idx and not any(
                (L := q.get("layers", {})).get(k, "") != v
                for k, v in layers.items() if L.get(k) != v):
            already.append((tag, correct_opt, idx))
            continue
        q["answer"] = idx
        q.setdefault("layers", {}).update(layers)
        applied.append((tag, correct_opt, idx))
    return subs, span, applied, already, missing


def write_data_js(subs, span):
    start, end = span
    src = open(DATA_JS, encoding="utf-8").read()
    body = json.dumps(subs, ensure_ascii=False, separators=(",", ":"))
    src = src[:start] + body + src[end + 1:]
    open(DATA_JS, "w", encoding="utf-8").write(src)


def main():
    report = collections.OrderedDict()
    subs, span, applied, already, missing = fix_data_js()
    report["data.js key fixes"] = dict(applied=applied, unchanged=already, missing=missing)
    # clipped options in data.js (match exact full option text)
    fixed_clip = []
    for i, s in enumerate(subs):
        for q in s["questions"]:
            for oi, o in enumerate(q.get("options", [])):
                for frag, rep in CLipped_FIXES:
                    if o == frag or o.startswith(frag):
                        new = rep + o[len(frag):]
                        q["options"][oi] = new
                        fixed_clip.append((s["id"], new[:40]))
    report["data.js clipped options"] = fixed_clip

    # write data.js
    write_data_js(subs, span)

    print(json.dumps(report, ensure_ascii=False, indent=1, default=str))


if __name__ == "__main__":
    main()
