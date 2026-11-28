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


def test_load_legacy_strips_embedded_question_labels(tmp_path):
    import json

    rows = [
        json.dumps({"stem": "A49 : A 30-year-old woman with hot flushes", "opts": ["a", "b", "c", "d"], "c": 0, "topic": "", "bank": "MOCKBNK"}),
        json.dumps({"stem": "A 4-year-old child with fever", "opts": ["a", "b", "c", "d"], "c": 0, "topic": "", "bank": "MOCKBNK"}),
        json.dumps({"stem": "Q12: Which drug causes gingival hyperplasia", "opts": ["a", "b", "c", "d"], "c": 0, "topic": "", "bank": "MOCK200"}),
    ]
    path = tmp_path / "legacy.jsonl"
    path.write_text("\n".join(rows))
    stems = [r["stem"] for r in load_legacy(path)]
    assert stems[0] == "A 30-year-old woman with hot flushes"
    assert stems[1] == "A 4-year-old child with fever"
    assert stems[2] == "Which drug causes gingival hyperplasia"
