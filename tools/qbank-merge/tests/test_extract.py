from extract import load_canonical, load_legacy, is_wellformed


def test_is_wellformed_rejects_single_option():
    assert not is_wellformed({"options": ["Ankylosing spondylitis"], "answer": 0})


def test_is_wellformed_rejects_out_of_range_answer():
    assert not is_wellformed({"options": ["a", "b", "c", "d"], "answer": 9})


def test_is_wellformed_accepts_four_options():
    assert is_wellformed({"options": ["a", "b", "c", "d"], "answer": 3})


def test_load_canonical_keeps_the_key_conflict_flag(tmp_path):
    import json

    payload = {
        "groups": [],
        "tips": [],
        "subjects": [
            {
                "id": "MED",
                "name": "Medicine & Allied",
                "group": "medicine",
                "questions": [
                    {"id": "MEDCNS01", "sys": "CNS", "topic": "t", "q": "s",
                     "options": ["a", "b", "c", "d"], "answer": 0, "layers": {}, "kc": 1}
                ],
            }
        ],
    }
    path = tmp_path / "canonical.json"
    path.write_text(json.dumps(payload))
    assert load_canonical(path)[0]["kc"] == 1
