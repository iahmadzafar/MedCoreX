from classify import classify

SYS = {
    "CNS",
    "CVS",
    "END",
    "ENT",
    "EYE",
    "GEN",
    "GIT",
    "HEM",
    "INF",
    "MSK",
    "PSY",
    "REN",
    "REP",
    "RSP",
    "SKN",
    "TOX",
}


def test_prose_subject_label_maps_to_code():
    r = classify(
        {
            "subject_label": "Medicine (75 MCQs)",
            "topic_label": "Unclassified",
            "stem": "A man with chest pain",
            "options": [],
        },
        SYS,
    )
    assert r["subject"] == "MED"


def test_prose_label_never_reaches_topic():
    r = classify(
        {
            "subject_label": "Medicine (75 MCQs)",
            "topic_label": "Unclassified",
            "stem": "A man with chest pain",
            "options": [],
        },
        SYS,
    )
    assert "MCQs" not in r["topic"] and "MCQs" not in r["system"]


def test_topic_hint_is_kept_when_present():
    r = classify(
        {"subject_label": "Medicine", "topic_label": "Liver / Hepatitis", "stem": "x", "options": []},
        SYS,
    )
    assert r["topic"] == "Liver / Hepatitis"
    assert r["confidence"] >= 0.80


def test_unclassified_topic_lowers_confidence():
    r = classify(
        {"subject_label": "Medicine", "topic_label": "Unclassified", "stem": "x", "options": []},
        SYS,
    )
    assert r["confidence"] < 0.80


def test_unknown_system_falls_back_to_confidence_zero():
    r = classify(
        {"subject_label": "Nonsense", "topic_label": "Unclassified", "stem": "zzz", "options": []},
        SYS,
    )
    assert r["confidence"] < 0.80


def test_untrusted_label_is_overridden_by_stem_evidence():
    r = classify(
        {
            "subject_label": "ENT",
            "topic_label": "Unclassified",
            "stem": "A man with chest pain and a murmur",
            "options": [],
        },
        SYS,
        trust_label=False,
    )
    assert r["subject"] == "MED" and r["system"] == "CVS"


def test_untrusted_label_without_stem_evidence_is_withheld():
    r = classify(
        {
            "subject_label": "ENT",
            "topic_label": "Unclassified",
            "stem": "A severely malnourished patient has to undergo surgery",
            "options": [],
        },
        SYS,
        trust_label=False,
    )
    assert r["confidence"] < 0.80


def test_trusted_label_without_stem_evidence_is_withheld():
    r = classify(
        {
            "subject_label": "Medicine",
            "topic_label": "Unclassified",
            "stem": "A 45-year-old man presents with fatigue",
            "options": [],
        },
        SYS,
    )
    assert r["confidence"] < 0.80
