#!/usr/bin/env python3
"""Sync the shared MedCoreX site shell across public and resource pages.

Usage:
  python3 tools/sync_site_shell.py          # rewrite pages in place
  python3 tools/sync_site_shell.py --check   # exit 1 if any page drifts

Each page owns marked regions:
  <!--NAV--> ... <!--/NAV-->
  <!--FOOTER--> ... <!--/FOOTER-->
and optionally:
  <!--CRUMB--> ... <!--/CRUMB-->
The tool replaces those regions with canonical partials from
tools/site_shell/. NAV placeholders and breadcrumb content are supplied per
page; every other byte is identical everywhere.
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
BREADCRUMB = (SHELL / "breadcrumb.fragment").read_text(encoding="utf-8").rstrip()

# path -> (current top-level destination, section href, section label, breadcrumb tuple or None)
PAGES = {
    "site/404.html": (None, "/about", "About", None),
    "site/about.html": ("/about", "/about", "About", None),
    "site/account.html": (None, "/about", "About", None),
    "site/index.html": ("/", "/about", "About", None),
    "site/library.html": ("/library", "/about", "About", None),
    "site/login.html": (None, "/about", "About", None),
    "site/signup.html": (None, "/about", "About", None),
    "site/stats.html": ("/stats", "/about", "About", None),
    "site/resources/medcore-question-bank/index.html": (None, "/library#mocks-drills", "Mocks & Drills", ("Mocks & Drills", "MedCORE Question Bank")),
    "site/resources/grand-mock-five-layer-breakdowns/index.html": (None, "/library#mocks-drills", "Mocks & Drills", ("Mocks & Drills", "Grand Mock Five Layer Breakdowns")),
}
AREA_CURRENT = ' aria-current="page"'


def nav_for(current, section_href, section_label) -> str:
    repl = {dest: "" for dest in ("/", "/library", "/about", "/stats")}
    if current:
        repl[current] = AREA_CURRENT
    html = NAV.replace("{{SECTION_HREF}}", section_href).replace("{{SECTION_LABEL}}", section_label)
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


def breadcrumb_for(crumb):
    if not crumb:
        return None
    parent, module = crumb
    portal_id = parent.lower().replace(" & ", "-").replace(" ", "-")
    if portal_id == "mocks-drills":
        portal_id = "mocks-drills"
    html = BREADCRUMB.replace("{{PORTAL_ID}}", portal_id).replace("{{PARENT_LABEL}}", parent).replace("{{MODULE_LABEL}}", module)
    leftover = re.findall(r"{{[A-Z_]+}}", html)
    if leftover:
        raise RuntimeError(f"unresolved breadcrumb placeholders: {leftover}")
    return f"<!--CRUMB-->\n{html.rstrip()}\n<!--/CRUMB-->"


def footer_shell() -> str:
    return f"<!--FOOTER-->\n{FOOTER.rstrip()}\n<!--/FOOTER-->"


def replace_marked(text: str, start: str, end: str, body: str) -> str:
    pattern = re.compile(re.escape(start) + r"[\s\S]*?" + re.escape(end), re.M)
    m = pattern.search(text)
    if not m:
        raise ValueError(f"missing marked region {start} ... {end}")
    return text[: m.start()] + body + text[m.end() :]


def strip_crumb(text: str) -> str:
    text = re.sub(r"<!--CRUMB-->[\s\S]*?<!--/CRUMB-->\n*", "", text, count=0)
    text = re.sub(r"<nav class=\"crumbline\"[\s\S]*?</nav>\n*", "", text, count=0)
    return text


def render(path: Path, spec):
    current, section_href, section_label, crumb = spec
    src = path.read_text(encoding="utf-8")
    src = replace_marked(src, "<!--NAV-->", "<!--/NAV-->", nav_for(current, section_href, section_label))
    if "<!--FOOTER-->" in src:
        src = replace_marked(src, "<!--FOOTER-->", "<!--/FOOTER-->", footer_shell())
    else:
        footer_block = footer_shell() + "\n"
        idx = src.rfind("</body>")
        if idx < 0:
            src = src + "\n" + footer_block
        else:
            src = src[:idx] + footer_block + src[idx:]
    src = strip_crumb(src)
    crumb_block = breadcrumb_for(crumb)
    if crumb_block:
        nav_end = src.index("<!--/NAV-->") + len("<!--/NAV-->")
        src = src[:nav_end] + "\n" + crumb_block + "\n" + src[nav_end:].lstrip("\n")
    return src


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--check", action="store_true", help="exit 1 when any page is out of sync")
    args = ap.parse_args()

    drift = []
    for rel, spec in PAGES.items():
        path = ROOT / rel
        try:
            rendered = render(path, spec)
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
