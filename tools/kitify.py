#!/usr/bin/env python3
"""
MedCoreX · kitify — put legacy pages on the Studyverse bridge
============================================================
The ONE sanctioned way a non-kit HTML page gets the home theme.
NEVER inject the tags by hand: run this, review the diff, commit.

For every target page it (idempotently):
  1. tags <html> with data-sv-map="<family>"  (names the page's
     token vocabulary; a matching block lives in the bridge CSS)
  2. inserts before </head>:
       <link rel="stylesheet" href="/assets/studyverse-bridge.css">
       <script src="/assets/studyverse.js"></script>
       <script src="/assets/studyverse-bridge.js"></script>
The bridge loads AFTER the page's own styles, so its !important
aliases win the cascade; the kit engine paints theme tokens
inline on <html>, so the page follows remix/lock/dark mode.

Usage:
  python3 tools/kitify.py                 # the standalone pages
  python3 tools/kitify.py --with-systems  # + the 10 systems books
  python3 tools/kitify.py --dry-run       # list, no writes
Exit 0 on success; files already bridged are skipped, not errors.
"""
import re
import sys
from pathlib import Path

REPO = Path(__file__).resolve().parent.parent

FAMILIES = {  # family signature table — one line per page, new family = new block in studyverse-bridge.css
    "medcore-cheat-card.html":                                    "zephyr",
    "standalone-htmls-forge-master.html":                          "zephyr",
    "qbank-logic-first-high-yield-logic-first-high-yield-bank.html": "zephyr",
    "medcore-recall-sheets-repeat-offenders.html":                  "zephyr",
    "nre-recall-sheets-repeat-offenders.html":                      "zephyr",
    "medcore-memory-master-core.html":                              "navy",
    "medcore-pattern-analysis.html":                                "nexus",
    "medcore-prediction-intelligence-report.html":                  "nexus",
    "standalone-htmls-800-plus-mcq-architecture.html":              "arch",
    "standalone-htmls-disease-symptom-clusters.html":               "table",
    "standalone-htmls-prediction-sheet-1-high-yield-topic-pool.html": "table",
}
SYSTEMS = "medcore-systems-"  # prefix of the 10 systems books (family: systems)

TAGS = (
    '<link rel="stylesheet" href="/assets/studyverse-bridge.css">\n'
    '<script src="/assets/studyverse.js"></script>\n'
    '<script src="/assets/studyverse-bridge.js"></script>'
)


def targets(with_systems):
    out = [(site / "resources" / name, fam) for name, fam in FAMILIES.items()]
    if with_systems:
        for f in sorted((site / "resources").glob(f"{SYSTEMS}*.html")):
            out.append((f, "systems"))
    return out


site = REPO / "site"

def main():
    args = sys.argv[1:]
    dry = "--dry-run" in args
    with_systems = "--with-systems" in args
    done = failed = skipped = 0

    for path, family in targets(with_systems):
        if not path.exists():
            print(f"  ✗ {path.relative_to(REPO)}: MISSING on disk")
            failed += 1
            continue
        text = path.read_text(encoding="utf-8")
        if "studyverse-bridge.css" in text:
            print(f"  · skipped (already bridged): {path.name}")
            skipped += 1
            continue
        if "studyverse.css" in text:  # kit page: never touches it
            print(f"  · skipped (kit page): {path.name}")
            skipped += 1
            continue
        if "</head>" not in text:
            print(f"  ✗ {path.name}: no </head> — report, don't guess")
            failed += 1
            continue
        # tag <html>
        new, n = re.subn(r'(<html[^>]*?)>', rf'\1 data-sv-map="{family}">', text, count=1)
        if n != 1:
            print(f"  ✗ {path.name}: no <html> tag — report, don't guess")
            failed += 1
            continue
        new = new.replace("</head>", TAGS + "\n</head>", 1)
        if not dry:
            path.write_text(new, encoding="utf-8")
        done += 1
        print((":dry " if dry else "") + f"  ✓ {family:8} {path.name}")

    verdict = f"bridged={done} skipped={skipped} failed={failed}"
    print(f"\nkitify: {verdict}" + (" (dry run — nothing written)" if dry else ""))
    return 1 if failed else 0


if __name__ == "__main__":
    sys.exit(main())
