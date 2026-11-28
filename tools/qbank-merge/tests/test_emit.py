import json

from emit import write_questions_jsonl, write_provenance, write_data_js


def _canon(qid="MEDCNS01", subject="MED"):
    return {
        "id": qid,
        "subject_id": subject,
        "group": "medicine",
        "name": "Medicine & Allied",
        "system": "CNS",
        "topic": "t",
        "stem": "s",
        "options": ["a", "b", "c", "d"],
        "answer": 0,
        "layers": {},
    }


def _add(qid="MEDCNS02", subject="MED"):
    return {
        "id": qid,
        "subject": subject,
        "system": "CNS",
        "topic": "t2",
        "stem": "s2",
        "options": ["a", "b", "c", "d"],
        "answer": 1,
        "layers": {},
    }


def test_additions_are_appended_after_canonical_in_their_subject(tmp_path):
    out = tmp_path / "q.jsonl"
    write_questions_jsonl([_canon()], [_add()], out)
    rows = [json.loads(line) for line in out.read_text().splitlines()]
    assert [r["id"] for r in rows] == ["MEDCNS01", "MEDCNS02"]


def test_served_rows_carry_no_provenance(tmp_path):
    add = {
        **_add(),
        "source_file": "Standalone HTMLs/June 2024.html",
        "uid": "JUN24/0001",
    }
    out = tmp_path / "q.jsonl"
    write_questions_jsonl([], [add], out)
    text = out.read_text()
    assert "source_file" not in text and "JUN24" not in text and '"uid"' not in text


def test_served_rows_use_the_data_js_shape(tmp_path):
    out = tmp_path / "q.jsonl"
    write_questions_jsonl([], [_add()], out)
    row = json.loads(out.read_text().splitlines()[0])
    assert set(row) == {"id", "subject_id", "sys", "topic", "q", "options", "answer", "layers"}


def test_provenance_keeps_the_trail(tmp_path):
    add = {
        **_add(),
        "bank": "MOCKBNK",
        "evidence": "AUTH",
        "uid": "x/1",
        "source_file": "f.html",
        "src_ref": "Q1",
        "restored": False,
        "confidence": 1.0,
    }
    out = tmp_path / "p.jsonl"
    write_provenance([add], out)
    row = json.loads(out.read_text().splitlines()[0])
    assert row["id"] == "MEDCNS02" and row["bank"] == "MOCKBNK"


def test_write_data_js_declares_three_constants(tmp_path):
    out = tmp_path / "data.js"
    subjects = [
        {
            "id": "MED",
            "name": "Medicine & Allied",
            "group": "medicine",
            "questions": [
                {"id": "MEDCNS01", "sys": "CNS", "topic": "t", "q": "s",
                 "options": ["a", "b", "c", "d"], "answer": 0, "layers": {}}
            ],
        }
    ]
    write_data_js([_canon()], [_add()], [{"id": "medicine", "name": "Medicine & Allied", "subjects": ["MED"]}], ["tip"], out)
    text = out.read_text()
    assert "const GROUPS" in text and "const TIPS" in text and "const SUBJECTS" in text
    assert "MEDCNS02" in text
