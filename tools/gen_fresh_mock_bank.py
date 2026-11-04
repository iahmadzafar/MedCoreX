#!/usr/bin/env python3
"""Generate site/resources/medcore-fresh-mock-bank/data.js from the NRE Prep 25MCQs fresh mock sets."""
import json, re, glob, os

SRC = "/Users/ahmdzafr/Library/Mobile Documents/com~apple~CloudDocs/NRE Prep/25MCQs"
OUT = "/Users/ahmdzafr/Documents/MedCoreX/site/resources/medcore-fresh-mock-bank/data.js"

TIPS = [
    "Syllabus is the spine", "MCQs are the bloodstream", "The error log is sacred",
    "Name the discriminator", "Read the last line first", "Commit before you check",
    "Wrong answers are data", "Space for next, 1 to 5 to answer", "Concept before recall",
    "Trap is in the wording", "Rule out before ruling in", "High-yield links compound",
]

def decode(s):
    return (s or "").replace("&amp;", "&").replace("&lt;", "<").replace("&gt;", ">").replace("&quot;", '"').replace("&#39;", "'").replace("&nbsp;", " ")

def base_id(fname):
    b = os.path.basename(fname)
    b = re.sub(r"-set mcq 25\.html$", "", b, flags=re.I)
    b = re.sub(r"^(?:01[-_])?", "", b)
    b = re.sub(r"[-_]set$", "", b, flags=re.I)
    b = b.strip()
    return re.sub(r"[^a-z0-9]+", "-", b.lower()).strip("-")

# Entries renamed on the basis of TOPICS only (dominant clinical content per set),
# not the broad subject/specialty. Each set spans multiple sub-topics, so these are
# the representative topic names; adjust here if a different label is preferred.
TOPIC_MAP = {
    "diabetes": "MODY — Maturity-Onset Diabetes of the Young",
    "ent": "Meniere's Disease",
    "electrolytes": "Hyponatremia — Hypovolemic & Cerebral Salt Wasting",
    "endocrine": "Subacute Thyroiditis (de Quervain)",
    "endocrinesurgery": "Thyroglossal Duct Cyst & Sistrunk Resection",
    "gi-emergencies": "Upper GI Bleeding — Variceal vs Non-Variceal",
    "haematology": "Autoimmune Haemolytic Anaemia",
    "hepatology": "Hepatic Encephalopathy",
    "neuro": "Subarachnoid Haemorrhage — LP for Xanthochromia",
    "nutrition-malabsorption": "Malabsorption Syndromes",
    "oncology-genpath": "Metaplasia — Barrett's Oesophagus",
    "ophthalmology": "Vernal Keratoconjunctivitis",
    "psych": "Schizophrenia — Persecutory Delusions",
    "renal": "Acute Interstitial Nephritis",
    "urology": "Renal Stones — Calcium Oxalate Nephrolithiasis",
    "pe-dvt": "Acute Pulmonary Embolism & DVT",
}

def build(fname):
    s = open(fname, encoding="utf-8").read()
    d = json.loads(re.search(r"const DATA = (\{.*?\});", s, re.S).group(1))
    sid = base_id(os.path.basename(fname))
    name = TOPIC_MAP.get(sid) or (d.get("subject") or "Practice Set").split(" (")[0]
    qs = []
    for q in d.get("questions", []):
        opts = sorted((q.get("options") or []), key=lambda o: o.get("letter", "A"))
        texts = [decode(o.get("text")) for o in opts]
        letters = [o.get("letter", "") for o in opts]
        ans_idx = [i for i, L in enumerate(letters) if L == (q.get("correct") or "")]
        ans_idx = ans_idx[0] if ans_idx else 0
        layers = {}
        def add(k, v):
            v = decode(v or "").strip()
            if v: layers[k] = v
        add("concept", q.get("testedConcept") or q.get("whyCorrect"))
        add("discriminator", q.get("discriminator"))
        add("trap", q.get("trapType"))
        add("rule", q.get("correctRule"))
        add("highyield", q.get("reviseTopic") or q.get("syllabusTopic") or q.get("testedConcept"))
        add("hook", q.get("futureAlert") or q.get("whyCorrect"))
        distr = {}
        for k, v in (q.get("distractors") or {}).items():
            if v: distr[k] = decode(v)
        if distr: layers["others"] = distr
        qs.append({"q": decode(q.get("stem")), "options": texts, "answer": ans_idx, "layers": layers})
    return {"id": sid, "name": name, "questions": qs}

flat = [build(f) for f in sorted(glob.glob(os.path.join(SRC, "*.html"))) if os.path.basename(f) != "25MCQs — 400 Practice.html"]
out = "/* MedCORE Fresh Mock Bank · data — generated from the NRE Prep 25MCQs fresh mock sets */\nconst SUBJECTS = " + json.dumps(flat, indent=2, ensure_ascii=False) + ";\n\nconst TIPS = " + json.dumps(TIPS, indent=2, ensure_ascii=False) + ";\n"
os.makedirs(os.path.dirname(OUT), exist_ok=True)
open(OUT, "w", encoding="utf-8").write(out)

n = sum(len(s["questions"]) for s in flat)
print("subjects:", len(flat), "questions:", n)
for s in flat:
    print(" ", s["id"], "|", s["name"], "| n=", len(s["questions"]))
