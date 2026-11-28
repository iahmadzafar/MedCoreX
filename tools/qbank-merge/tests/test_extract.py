from extract import load_canonical, load_legacy, is_wellformed


def test_is_wellformed_rejects_single_option():
    assert not is_wellformed({"options": ["Ankylosing spondylitis"], "answer": 0})


def test_is_wellformed_rejects_out_of_range_answer():
    assert not is_wellformed({"options": ["a", "b", "c", "d"], "answer": 9})


def test_is_wellformed_accepts_four_options():
    assert is_wellformed({"options": ["a", "b", "c", "d"], "answer": 3})
