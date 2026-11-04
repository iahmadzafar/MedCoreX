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
