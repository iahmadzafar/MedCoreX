"""Place each legacy addition into the canonical subject / system / topic frame.

The legacy corpus labels itself with prose — `Medicine (75 MCQs)`,
`Neurology`, `Liver / Hepatitis` — so classification is a lookup plus a
keyword fallback. Every result carries a confidence; the pipeline withholds
anything under the threshold rather than guessing.
"""

from __future__ import annotations

import re

SUBTLE_RE = re.compile(r"\([^)]*\)")

SUBJECT_LABELS = {
    "medicine": "MED",
    "surgery": "SRG",
    "ophthalmology": "EYE",
    "dermatology": "DRM",
    "ent": "ENT",
    "gynecology": "ONG",
    "gynaecology": "ONG",
    "obstetrics": "ONG",
    "obstetrics & gynaecology": "ONG",
    "neurology": "MED",
    "pediatrics": "PED",
    "paediatrics": "PED",
    "urology": "SRG",
    "respiratory": "MED",
    "cardiology": "MED",
    "psychiatry": "PSY",
    "hematology": "HEM",
    "haematology": "HEM",
    "anatomy": "ANT",
    "physiology": "PHY",
    "pharmacology": "PHM",
    "pathology": "PTH",
    "biochemistry": "BCH",
    "microbiology": "CMM",
    "forensic": "FRM",
}

SYSTEM_ALIASES = {
    "neurology": "CNS",
    "psychiatry": "PSY",
    "cardiology": "CVS",
    "cardiovascular": "CVS",
    "respiratory": "RSP",
    "pulmonology": "RSP",
    "gastroenterology": "GIT",
    "hepatology": "GIT",
    "gastrointestinal": "GIT",
    "renal": "REN",
    "nephrology": "REN",
    "urology": "REN",
    "endocrinology": "END",
    "endocrine": "END",
    "hematology": "HEM",
    "haematology": "HEM",
    "dermatology": "SKN",
    "skin": "SKN",
    "ent": "ENT",
    "otolaryngology": "ENT",
    "ophthalmology": "EYE",
    "obstetrics": "REP",
    "gynecology": "REP",
    "gynaecology": "REP",
    "obstetrics & gynaecology": "REP",
    "infectious": "INF",
    "microbiology": "INF",
    "toxicology": "TOX",
    "musculoskeletal": "MSK",
    "orthopedics": "MSK",
    "rheumatology": "MSK",
    "medicine": "GEN",
    "surgery": "GEN",
    "general": "GEN",
}

# Longer phrases first so "chest pain" beats "pain".
SYSTEM_KEYWORDS = (
    ("CVS", ("chest pain", "murmur", "hypertension", "myocardial", "heart failure", "ecg",
             "palpitation", "aortic", "cardiac", "angina", "arrhythmia")),
    ("RSP", ("sputum", "dyspnea", "dyspnoea", "asthma", "copd", "pneumonia", "pleural",
             "tuberculosis", "wheeze", "hypoxia", "hemoptysis", "haemoptysis", "cough")),
    ("CNS", ("seizure", "stroke", "headache", "vertigo", "neuropathy", "meningitis",
             "dementia", "ataxia", "coma", "paralysis", "papilledema", "cranial nerve")),
    ("GIT", ("abdominal", "liver", "jaundice", "hepatitis", "diarrhea", "diarrhoea",
             "vomiting", "bowel", "gastric", "pancreatitis", "cirrhosis", "dysphagia",
             "hematemesis", "melena")),
    ("REN", ("renal", "kidney", "creatinine", "dialysis", "hematuria", "haematuria",
             "proteinuria", "electrolyte", "potassium", "sodium", "oliguria", "uremia")),
    ("END", ("diabetes", "thyroid", "insulin", "cortisol", "adrenal", "pituitary",
             "hypercalcemia", "obesity", "hypoglycemia", "ketoacidosis")),
    ("HEM", ("anemia", "anaemia", "platelet", "clotting", "hemoglobin", "haemoglobin",
             "lymphoma", "leukemia", "leukaemia", "transfusion", "coagulation")),
    ("MSK", ("joint", "arthritis", "fracture", "back pain", "bone", "ligament",
             "sacroiliitis", "myopathy")),
    ("SKN", ("rash", "skin", "pigmented", "psoriasis", "eczema", "vesicle", "alopecia")),
    ("ENT", ("throat", "laryngeal", "sinus", "tonsil", "hearing", "epistaxis", "hoarseness")),
    ("EYE", ("vision", "retina", "pupil", "glaucoma", "cataract", "optic", "diplopia")),
    ("INF", ("fever", "infection", "sepsis", "malaria", "antibiotic", "organism",
             "culture", "immunization")),
    ("TOX", ("poisoning", "overdose", "toxin", "ingestion", "organophosphate", "envenomation")),
    ("PSY", ("depression", "anxiety", "psychosis", "suicide", "schizophrenia", "mania")),
    ("REP", ("pregnancy", "labour", "labor", "delivery", "menstrual", "ovarian",
             "uterine", "infertility", "postpartum", "antenatal")),
)


def _clean_label(raw: str | None) -> str:
    return SUBTLE_RE.sub("", raw or "").strip().lower()


def _keyword_system(text: str) -> str | None:
    lowered = (text or "").lower()
    for code, words in SYSTEM_KEYWORDS:
        for word in words:
            if re.search(rf"\b{re.escape(word)}\b", lowered):
                return code
    return None


SUBJECT_FOR_SYSTEM = {
    "CNS": "MED",
    "CVS": "MED",
    "END": "MED",
    "GEN": "MED",
    "GIT": "SRG",
    "HEM": "HEM",
    "INF": "MED",
    "MSK": "MSK",
    "PSY": "PSY",
    "REN": "REN",
    "REP": "ONG",
    "RSP": "MED",
    "SKN": "DRM",
    "TOX": "PHM",
    "ENT": "ENT",
    "EYE": "EYE",
}

# Banks whose subject label matches their stems in practice.
TRUSTED_LABEL_BANKS = ("PRED26", "MCORE", "JUN24", "DEC24", "DEC25", "JUN25", "MAY26")


def label_is_trusted(bank: str) -> bool:
    """The label column is reliable for some legacy banks and junk for others."""
    name = (bank or "").split("-")[0].upper()
    return name in TRUSTED_LABEL_BANKS or name.startswith("DRILL")


def classify(rec: dict, valid_systems: set[str], trust_label: bool = True) -> dict:
    """Return {subject, system, topic, confidence} for one legacy record.

    Confidence is built from evidence, not shaved off 1.0: the subject tab and
    the system chip each need positive evidence, and a synthesized topic counts
    for less because the canonical bank's topics are free-form anyway.
    """
    subject_label = _clean_label(rec.get("subject_label"))
    topic_label = (rec.get("topic_label") or "").strip()
    stem = (rec.get("stem") or "").strip()

    haystack = f"{topic_label} {stem}"
    system = SYSTEM_ALIASES.get(_clean_label(topic_label))
    if system is None and trust_label:
        system = SYSTEM_ALIASES.get(subject_label)
    if system is None:
        system = _keyword_system(topic_label) or _keyword_system(haystack)
    system_evidence = system is not None and system != "GEN" and system in valid_systems
    if system is None or system not in valid_systems:
        system = "GEN" if "GEN" in valid_systems else (sorted(valid_systems)[0] if valid_systems else "")
        system_evidence = False

    label_subject = SUBJECT_LABELS.get(subject_label)
    if trust_label and label_subject:
        subject = label_subject
        subject_evidence = True
    elif system_evidence and system in SUBJECT_FOR_SYSTEM:
        subject = SUBJECT_FOR_SYSTEM[system]
        subject_evidence = True
    else:
        subject = ""
        subject_evidence = False

    topic_is_real = topic_label.lower() not in ("", "unclassified")
    if topic_is_real:
        topic = topic_label
    else:
        topic = re.sub(r"\s+", " ", stem.split(".")[0]).strip()[:80]

    confidence = (
        0.5
        + (0.2 if subject_evidence else 0.0)
        + (0.2 if system_evidence else 0.0)
        + (0.1 if topic_is_real else 0.0)
    )

    return {"subject": subject, "system": system, "topic": topic, "confidence": round(confidence, 4)}
