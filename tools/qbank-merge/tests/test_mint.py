from mint import next_sequence, mint_ids, parse_id


def test_parse_id_reads_a_base36_suffix():
    assert parse_id("MEDCNS0A") == ("MED", "CNS", 10)
    assert parse_id("MEDCNS2M") == ("MED", "CNS", 94)


def test_next_sequence_counts_base36_suffixes():
    canon = [
        {"id": "MEDCNS01", "subject_id": "MED", "system": "CNS"},
        {"id": "MEDCNS0A", "subject_id": "MED", "system": "CNS"},
    ]
    assert next_sequence(canon)[("MED", "CNS")] == 11


def test_mint_ids_continue_past_a_base36_suffix():
    canon = [{"id": "MEDCNS0A", "subject_id": "MED", "system": "CNS"}]
    adds = [{"subject": "MED", "system": "CNS", "stem": "x"}]
    assert mint_ids(adds, canon)[0]["id"] == "MEDCNS0B"


def test_next_sequence_reads_existing_numbers():
    canon = [
        {"id": "MEDCNS01", "subject_id": "MED", "system": "CNS"},
        {"id": "MEDCNS07", "subject_id": "MED", "system": "CNS"},
    ]
    assert next_sequence(canon)[("MED", "CNS")] == 8


def test_mint_ids_continue_the_bucket_sequence():
    canon = [{"id": "MEDCNS01", "subject_id": "MED", "system": "CNS"}]
    adds = [{"subject": "MED", "system": "CNS", "stem": "x"}]
    assert mint_ids(adds, canon)[0]["id"] == "MEDCNS02"


def test_mint_ids_are_unique_across_additions():
    canon = [{"id": "MEDCNS01", "subject_id": "MED", "system": "CNS"}]
    adds = [
        {"subject": "MED", "system": "CNS", "stem": "a"},
        {"subject": "MED", "system": "CNS", "stem": "b"},
    ]
    ids = [r["id"] for r in mint_ids(adds, canon)]
    assert len(set(ids)) == 2


def test_mint_ids_never_collide_with_canonical():
    canon = [
        {"id": "MEDCNS01", "subject_id": "MED", "system": "CNS"},
        {"id": "MEDCNS02", "subject_id": "MED", "system": "CNS"},
    ]
    adds = [{"subject": "MED", "system": "CNS", "stem": "a"}]
    assert mint_ids(adds, canon)[0]["id"] not in {c["id"] for c in canon}
