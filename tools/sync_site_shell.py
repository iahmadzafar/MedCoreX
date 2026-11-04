#!/usr/bin/env python3
"""Sync the shared MedCoreX site shell across public pages.

Usage:
  python3 tools/sync_site_shell.py          # rewrite pages in place
  python3 tools/sync_site_shell.py --check   # exit 1 if any page drifts

Each public page owns two marked regions:
  <!--NAV--> ... <!--/NAV-->
  <!--FOOTER--> ... <!--/FOOTER-->
The tool replaces those regions with the canonical partials from
tools/site_shell/. aria-current is injected per page; every other byte is
identical everywhere.
"""
from __future__ import annotations

import argparse
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SHELL = Path(__file__).resolve().parent / "site_shell"
NAV = (SHELL / "nav.fragment").read_text(encoding="utf-8").rstrip()
FOOTER = (SHELL / "footer.fragment").read_text(encoding="utf-8").rstrip()

# path -> current top-level destination (None = no current page highlight)
PAGES = {
    "site/404.html": None,
    "site/about.html": "/about",
    "site/account.html": None,
    "site/index.html": "/",
    "site/library.html": "/library",
    "site/login.html": None,
    "site/signup.html": None,
    "site/stats.html": "/stats",
}
AREA_CURRENT = ' aria-current="page"'


def nav_for(current: str | None) -> str:
    repl = {dest: "" for dest in ("/", "/library", "/about", "/stats")}
    if current:
        repl[current] = AREA_CURRENT
    html = NAV
    for dest, marker in (
        ("/", "{{HOME}}"),
        ("/library", "{{LIBRARY}}"),
        ("/about", "{{ABOUT}}"),
        ("/stats", "{{STATS}}"),
    ):
        html = html.replace(marker, repl[dest])
    leftover = re.findall(r"{{[A-Z_]+}}", html)
    if leftover:
        raise RuntimeError(f"unresolved nav placeholders: {leftover}")
    return f"<!--NAV-->\n{html.rstrip()}\n<!--/NAV-->"


def footer_shell() -> str:
    return f"<!--FOOTER-->\n{FOOTER.rstrip()}\n<!--/FOOTER-->"


def replace_marked(text: str, start: str, end: str, body: str) -> str:
    pattern = re.compile(re.escape(start) + r"[\s\S]*?" + re.escape(end), re.M)
    m = pattern.search(text)
    if not m:
        raise ValueError(f"missing marked region {start} ... {end}")
    return text[: m.start()] + body + text[m.end() :]


def render(path: Path, current: str | None) -> str:
    src = path.read_text(encoding="utf-8")
    src = replace_marked(src, "<!--NAV-->", "<!--/NAV-->", nav_for(current))
    src = replace_marked(src, "<!--FOOTER-->", "<!--/FOOTER-->", footer_shell())
    return src


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--check", action="store_true", help="exit 1 when any page is out of sync")
    args = ap.parse_args()

    drift = []
    for rel, current in PAGES.items():
        path = ROOT / rel
        try:
            rendered = render(path, current)
        except (ValueError, RuntimeError) as exc:
            print(f"error {rel}: {exc}", file=sys.stderr)
            return 2
        if path.read_text(encoding="utf-8") != rendered:
            drift.append(rel)
            if not args.check:
                path.write_text(rendered, encoding="utf-8")

    if args.check:
        if drift:
            for rel in drift:
                print(f"drift {rel}")
            return 1
        print(f"site shell in sync across {len(PAGES)} pages")
        return 0

    print(f"site shell synced across {len(PAGES)} pages" + (f" (changed {', '.join(drift)})" if drift else ""))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
