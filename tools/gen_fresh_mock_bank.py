#!/usr/bin/env python3
"""Generate site/resources/medcore-fresh-mock-bank/data.js from the NRE Prep 400 MCQs set.

Source is the consolidated single file (NRE Prep/400 MCQs/400 MCQs.html), which carries
all 400 questions as `const SETS = [...]`. Each set object has: slug, name, chapter,
title, questions[]; each question has id, stem, options[{letter,text}], correct,
testedConcept, cognitiveTask, discriminator, whyCorrect, trapType, futureAlert,
reviseTopic, syllabusTopic, correctRule, distractors{}.

Subject ids and display names are pinned by SLUG_TO_ID + TOPIC_MAP so the site keeps
stable localStorage keys across regenerations.
"""
import json, sys, os

SRC = "/Users/ahmdzafr/Library/Mobile Documents/com~apple~CloudDocs/NRE Prep/400 MCQs/400 MCQs.html"
OUT = "/Users/ahmdzafr/Documents/MedCoreX/site/resources/medcore-fresh-mock-bank/data.js"

TIPS = [
    "Syllabus is the spine", "MCQs are the bloodstream", "The error log is sacred",
    "Name the discriminator", "Read the last line first", "Commit before you check",
    "Wrong answers are data", "Space for next, 1 to 5 to answer", "Concept before recall",
    "Trap is in the wording", "Rule out before ruling in", "High-yield links compound",
]

# slug in the consolidated file -> stable subject id used by the site
SLUG_TO_ID = {
    "01-Diabetes-Set": "diabetes",
    "ENT-Fresh-Set-2": "ent",
    "01-Electrolytes-Set": "electrolytes",
    "01-Endocrine-Set": "endocrine",
    "01-EndocrineSurgery-Set": "endocrinesurgery",
    "01-GI-Emergencies-Set": "gi-emergencies",
    "Haematology-Set": "haematology",
    "01-Hepatology-Set": "hepatology",
    "01-Neuro-Set": "neuro",
    "01-Nutrition-Malabsorption-Set": "nutrition-malabsorption",
    "Oncology-GenPath-Set": "oncology-genpath",
    "Ophthalmology-Set": "ophthalmology",
    "PE-DVT-Set": "pe-dvt",
    "01-Psych-Set": "psych",
    "01-Renal-Set": "renal",
    "01-Urology-Set": "urology",
}

TOPIC_MAP = {
    "diabetes": "Diabetes Mellitus & Complications",
    "ent": "ENT",
    "electrolytes": "Electrolytes & Acid-Base",
    "endocrine": "Endocrinology",
    "endocrinesurgery": "Endocrine Surgery",
    "gi-emergencies": "GI Emergencies",
    "haematology": "Haematology",
    "hepatology": "Hepatology",
    "neuro": "Neurology",
    "nutrition-malabsorption": "Nutrition & Malabsorption",
    "oncology-genpath": "Oncology",
    "ophthalmology": "Ophthalmology",
    "pe-dvt": "Acute Pulmonary Embolism & DVT",
    "psych": "Psychiatry",
    "renal": "Renal — AKI / CKD / Glomerular",
    "urology": "Urology",
}

def decode(s):
    return (s or "").replace("&amp;", "&").replace("&lt;", "<").replace("&gt;", ">").replace("&quot;", '"').replace("&#39;", "'").replace("&nbsp;", " ")

def extract_sets(src):
    """Pull the `const SETS = [...]` literal out of the page, string-aware."""
    key = "const SETS = "
    i = src.index(key) + len(key)
    if src[i] != "[":
        raise ValueError("const SETS is not followed by an array")
    start, depth, in_str, esc = i, 0, False, False
    while i < len(src):
        c = src[i]
        if in_str:
            if esc:
                esc = False
            elif c == "\\":
                esc = True
            elif c == '"':
                in_str = False
        else:
            if c == '"':
                in_str = True
            elif c in "[{":
                depth += 1
            elif c in "]}":
                depth -= 1
                if depth == 0:
                    return json.loads(src[start:i + 1])
        i += 1
    raise ValueError("unterminated const SETS literal")

def build(st):
    sid = SLUG_TO_ID[st["slug"]]
    qs, problems = [], []
    for q in st.get("questions", []):
        opts = sorted((q.get("options") or []), key=lambda o: o.get("letter", "A"))
        texts = [decode(o.get("text")) for o in opts]
        letters = [o.get("letter", "") for o in opts]
        correct = q.get("correct") or ""
        if correct not in letters:
            problems.append("%s: correct=%r not in options" % (q.get("id"), correct))
            continue
        ans_idx = letters.index(correct)
        layers = {}
        def add(k, v):
            v = decode(v or "").strip()
            if v:
                layers[k] = v
        add("concept", q.get("testedConcept") or q.get("whyCorrect"))
        add("discriminator", q.get("discriminator"))
        add("trap", q.get("trapType"))
        add("rule", q.get("correctRule"))
        qs.append({"q": decode(q.get("stem")), "options": texts, "answer": ans_idx, "layers": layers})
    return {"id": sid, "name": TOPIC_MAP.get(sid) or st.get("name") or "Practice Set", "questions": qs}, problems

def main():
    sets = extract_sets(open(SRC, encoding="utf-8").read())

    flat, problems = [], []
    for st in sets:
        subj, prob = build(st)
        flat.append(subj)
        problems.extend(prob)

    if problems:
        print("PROBLEMS:", file=sys.stderr)
        for p in problems:
            print("  " + p, file=sys.stderr)
        sys.exit(1)

    out = ("/* MedCORE Fresh Mock Bank · data — generated from the NRE Prep 400 MCQs fresh mock sets */\n"
           "const SUBJECTS = " + json.dumps(flat, indent=2, ensure_ascii=False)
           + ";\n\nconst TIPS = " + json.dumps(TIPS, indent=2, ensure_ascii=False) + ";\n")
    os.makedirs(os.path.dirname(OUT), exist_ok=True)
    open(OUT, "w", encoding="utf-8").write(out)

    n = sum(len(s["questions"]) for s in flat)
    print("subjects:", len(flat), "questions:", n)
    for s in flat:
        print(" ", s["id"], "|", s["name"], "| n=", len(s["questions"]))

if __name__ == "__main__":
    main()
