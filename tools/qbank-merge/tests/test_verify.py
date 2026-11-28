from verify import run_gates


def _q(i, subject="MED", system="CNS"):
    return {
        "id": i,
        "subject_id": subject,
        "system": system,
        "stem": "s",
        "options": ["a", "b", "c", "d"],
        "answer": 0,
        "topic": "t",
    }


def test_gate_passes_on_unchanged_originals():
    o = [_q("MEDCNS01")]
    assert run_gates(o, o, '{"id":"MEDCNS01"}') == []


def test_gate_fails_when_an_original_id_disappears():
    o = [_q("MEDCNS01")]
    errs = run_gates(o, [], "")
    assert any("missing" in e for e in errs)


def test_gate_fails_on_forbidden_token_in_served_text():
    o = [_q("MEDCNS01")]
    errs = run_gates(o, o, '{"source_file":"f.html"}')
    assert any("source_file" in e for e in errs)


def test_gate_fails_on_duplicate_id():
    o = [_q("MEDCNS01")]
    errs = run_gates(o, o + o, "")
    assert any("duplicate" in e for e in errs)


def test_gate_fails_on_prose_subject_label():
    o = [_q("MEDCNS01")]
    errs = run_gates(o, o, '{"topic":"Medicine (75 MCQs)"}')
    assert any("MCQs" in e for e in errs)


def test_gate_fails_on_answer_out_of_range():
    o = [_q("MEDCNS01")]
    bad = dict(_q("MEDCNS99"), answer=9)
    errs = run_gates(o, o + [bad], "")
    assert any("answer" in e for e in errs)


def test_gate_allows_originals_with_fewer_than_four_options():
    o = [dict(_q("MEDCNS01"), options=["a", "b", "c"], answer=2)]
    assert run_gates(o, o, "") == []


def test_gate_ignores_forbidden_words_in_question_prose():
    o = [_q("MEDCNS01")]
    served = '{"id":"MEDCNS01","q":"A man works at the blood bank and cannot evidence his uid"}'
    assert run_gates(o, o, served) == []


def test_gate_fails_when_an_original_question_is_altered():
    o = [_q("MEDCNS01")]
    changed = dict(o[0], stem="different")
    errs = run_gates(o, [changed], "")
    assert any("altered" in e for e in errs)


def test_gate_fails_when_an_addition_repeats_a_canonical_stem():
    o = [_q("MEDCNS01")]
    dup = dict(_q("MEDCNS99"), stem="s")
    errs = run_gates(o, o + [dup], "")
    assert any("duplicate stem" in e for e in errs)


def test_gate_fails_on_unknown_system():
    o = [_q("MEDCNS01")]
    bad = dict(_q("MEDCNS98"), system="ZZZ")
    errs = run_gates(o, o + [bad], "")
    assert any("system" in e for e in errs)


def test_gate_allows_additions_that_only_share_an_option_list():
    o = [_q("MEDCNS01")]
    a = dict(_q("MEDCNS90"), stem="A 41-year-old man with a compound tibial fracture after a crash")
    b = dict(_q("MEDCNS91"), stem="A 20-year-old man with a fracture of the acromion after a fall")
    opts = ["Debridement and fixation", "Cast", "Traction", "Amputation"]
    a["options"] = list(opts)
    b["options"] = list(opts)
    assert run_gates(o, o + [a, b], "") == []


def test_gate_fails_on_two_additions_that_are_the_same_question():
    o = [_q("MEDCNS01")]
    a = dict(_q("MEDCNS90"), stem="A 45-year-old alcoholic male presents with severe abdominal pain radiating to the back for 12 hours")
    b = dict(_q("MEDCNS91"), stem="A 45-year-old alcoholic male presents to the emergency department with severe abdominal pain radiating to the back for 12 hours")
    opts = ["ERCP", "CT", "US", "Amylase"]
    a["options"] = list(opts)
    b["options"] = list(opts)
    errs = run_gates(o, o + [a, b], "")
    assert any("duplicate option set" in e for e in errs)


def test_gate_survives_unicode_line_separators_in_prose():
    o = [_q("MEDCNS01")]
    served = '{\"id\":\"MEDCNS01\",\"layers\":{\"rule\":\"Papilledema swelling of the disc\"}}\n'
    assert run_gates(o, o, served) == []
