from match import normalize_stem, normalize_options, jaccard, link


def test_normalize_stem_strips_id_prefix():
    assert normalize_stem("A41 A 52 year old woman with a uterus") == normalize_stem(
        "A 52 year old woman with a uterus"
    )


def test_normalize_stem_ignores_punctuation_and_case():
    assert normalize_stem("Hb 9 g/dL, microcytic!") == normalize_stem("hb 9 g dl microcytic")


def test_jaccard_identical_sets_is_one():
    assert jaccard({"a b"}, {"a b"}) == 1.0


def test_link_matches_exact_stem_even_with_reordered_options():
    c = [
        {
            "stem": "Sacroiliitis seen in?",
            "options": ["Ankylosing spondylitis", "Psoriasis", "Reiter", "Behcet"],
            "answer": 0,
        }
    ]
    l = [
        {
            "stem": "SACROILIITIS SEEN IN?",
            "options": ["Reiter", "Behcet", "Ankylosing spondylitis", "Psoriasis"],
            "answer": 2,
        }
    ]
    r = link(c, l)
    assert r["linked"] == [(0, 0)] and r["unmatched"] == [] and r["by_exact"] == 1


def test_link_matches_reworded_stem_by_option_set():
    c = [
        {
            "stem": "A man with fever and rusty sputum",
            "options": ["Pneumonia", "TB", "PE", "Asthma"],
            "answer": 0,
        }
    ]
    l = [
        {
            "stem": "A patient presents with rusty sputum and fever",
            "options": ["TB", "PE", "Asthma", "Pneumonia"],
            "answer": 3,
        }
    ]
    r = link(c, l)
    assert r["linked"] == [(0, 0)] and r["by_options"] == 1


def test_link_flags_same_stem_different_key_as_ambiguous():
    c = [
        {
            "stem": "A 45-year-old has recurrent episodes of vertigo",
            "options": ["Labyrinthitis", "Menieres", "BPPV", "Stroke"],
            "answer": 0,
        }
    ]
    l = [
        {
            "stem": "A 45-year-old has recurrent episodes of vertigo",
            "options": ["Menieres", "Labyrinthitis", "BPPV", "Stroke"],
            "answer": 0,
        }
    ]
    r = link(c, l)
    assert r["ambiguous"] == [0]
    assert r["linked"] == []


def test_link_accepts_same_stem_when_the_answer_variant_already_exists():
    c = [
        {
            "stem": "A 45-year-old has recurrent episodes of vertigo",
            "options": ["Labyrinthitis", "Menieres", "BPPV", "Stroke"],
            "answer": 0,
        },
        {
            "stem": "A 45-year-old has recurrent episodes of vertigo",
            "options": ["Labyrinthitis", "Menieres", "BPPV", "Stroke"],
            "answer": 1,
        },
    ]
    l = [
        {
            "stem": "A 45-year-old has recurrent episodes of vertigo",
            "options": ["Menieres", "Labyrinthitis", "BPPV", "Stroke"],
            "answer": 0,
        }
    ]
    r = link(c, l)
    assert r["ambiguous"] == [] and len(r["linked"]) == 1


def test_link_rejects_unrelated_question():
    c = [
        {
            "stem": "A man with fever and rusty sputum",
            "options": ["Pneumonia", "TB", "PE", "Asthma"],
            "answer": 0,
        }
    ]
    l = [
        {
            "stem": "Which imaging study evaluates bladder injury",
            "options": ["CT", "MRI", "US", "XR"],
            "answer": 0,
        }
    ]
    r = link(c, l)
    assert r["unmatched"] == [0] and r["linked"] == []
