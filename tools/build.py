#!/usr/bin/env python3
"""MedCoreX chrome builder — the nav bar, footer, auth slots and theme engine
mount exist ONCE, in site/chrome/ *. This tool stitches them into every page
between the <!--NAV-->/<!--/NAV--> and <!--FOOTER-->/<!--/FOOTER--> regions.

Law: pages never hand-edit their chrome regions. Per-page differences are
options declared here (which nav item is active), not forks of the markup.

Usage:
  python3 tools/build.py          # fill/refresh chrome regions on every page
  python3 tools/build.py check    # verify all pages are up to date (CI-safe)
"""
import pathlib, sys, re

ROOT = pathlib.Path(__file__).resolve().parent.parent
SITE = ROOT / "site"
CHROME = ROOT / "chrome"
NAV_S, NAV_E = "<!--NAV-->", "<!--/NAV-->"
F_S, F_E = "<!--FOOTER-->", "<!--/FOOTER-->"

# page file -> active nav href (None = no active item)
PAGES = {
    "index.html": "/",
    "library.html": "/library",
}

def render(active):
    """Current chrome, with the per-page active nav item applied."""
    header = (CHROME / "header.part").read_text(encoding="utf-8")
    footer = (CHROME / "footer.part").read_text(encoding="utf-8")
    if active:
        needle = f'<a href="{active}"'
        assert needle in header, f"active link {active} not in header chrome"
        header = header.replace(needle, needle + ' aria-current="page"', 1)
    return header, footer

def page_report(name, active, mode):
    p = SITE / name
    s = p.read_text(encoding="utf-8")
    a, b = s.find(NAV_S), s.find(NAV_E)
    c, d = s.find(F_S), s.find(F_E)
    if -1 in (a, b, c, d) or not a < b < c < d:
        return f"MISSING REGIONS", False
    h, foot = render(active)
    want_nav, want_foot = "\n" + h + "\n", "\n" + foot + "\n"
    cur_nav = s[a + len(NAV_S):b]
    cur_foot = s[c + len(F_S):d]
    drift = cur_nav != want_nav or cur_foot != want_foot
    if mode == "check":
        return ("UP TO DATE" if not drift else "OUT OF DATE — run build"), drift
    if not drift:
        return "kept", False
    out = s[:c + len(F_S)] + want_foot + s[d:]     # footer first (later in doc)
    a, b = out.find(NAV_S), out.find(NAV_E)
    out = out[:a + len(NAV_S)] + want_nav + out[b:]  # then nav (earlier) — indices still valid
    p.write_text(out, encoding="utf-8")
    return "regenerated", False

def main():
    mode = sys.argv[1] if len(sys.argv) > 1 else "build"
    if mode not in ("build", "check"):
        print(__doc__); return 2
    lines, fail = [], False
    for name, active in PAGES.items():
        msg, bad = page_report(name, active, mode)
        lines.append(f"  {name}: {msg}")
        fail = fail or bad
    print(("chrome check" if mode == "check" else "chrome build") + ":")
    print("\n".join(lines))
    if mode == "check" and fail:
        print("  ✗ drift — chrome regions were hand-edited. Run build to regenerate.")
        return 1
    return 0

if __name__ == "__main__":
    sys.exit(main())
