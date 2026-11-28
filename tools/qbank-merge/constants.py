"""Paths and thresholds for the MedCoreX question-bank merge."""

from pathlib import Path

HERE = Path(__file__).resolve().parent
REPO_ROOT = HERE.parent.parent

DATA_JS = REPO_ROOT / "site" / "resources" / "medcore-question-bank" / "data.js"
DATA_DIR = HERE / "data"
CANONICAL_JSON = DATA_DIR / "canonical.json"
LEGACY_JSONL = DATA_DIR / "legacy_index.jsonl"
OUT_DIR = DATA_DIR / "out"

FORBIDDEN_TOKENS = (
    "source_file",
    "uid",
    "src_ref",
    "restored",
    "evidence",
    "bank",
    "MOCKBNK",
    "PRED26",
    "MOCK200",
    "MCORE-",
)

JACCARD_THRESHOLD = 0.75
OPTION_OVERLAP_THRESHOLD = 0.5
MIN_CONFIDENCE = 0.80
