#!/usr/bin/env python3
"""MedCoreX chrome builder — the nav bar, footer, auth slots and theme engine
mount exist ONCE, in chrome/*.part. This tool stitches them into every page
between the <!--NAV-->/<!--/NAV--> and <!--FOOTER-->/<!--/FOOTER--> regions.

Law: pages never hand-edit their chrome regions. Per-page differences are
options declared in PAGES (which nav item is active, which header variant,
which footer variant) — variants, not forks.

Header variants: site · slim (account) · magic · qb · fresh · papers · pred
Footer variants: site (auth slot) · noauth (account)
Usage:
  python3 tools/build.py          # fill/refresh chrome regions
  python3 tools/build.py check    # verify every page is up to date (CI-safe)
"""
import pathlib, sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
SITE = ROOT / "site"
CHROME = ROOT / "chrome"
NAV_S, NAV_E = "<!--NAV-->", "<!--/NAV-->"
F_S, F_E = "<!--FOOTER-->", "<!--/FOOTER-->"

# page file -> {variant, active(href or None), footer(footer-variant or None = page has no footer)}
PAGES = {
    "index.html":   {"v": "site", "active": "/",        "f": "site"},
    "library.html": {"v": "site", "active": "/library", "f": "site"},
    "about.html":   {"v": "site", "active": "/about",   "f": "site"},
    "stats.html":   {"v": "site", "active": "/stats",   "f": "site"},
    "login.html":   {"v": "site", "active": None,       "f": "site"},
    "signup.html":  {"v": "site", "active": None,       "f": "site"},
    "404.html":     {"v": "site", "active": "/library", "f": "site"},
    "account.html": {"v": "slim", "active": None,       "f": "noauth"},
    "admin/keyhole.html": {"v": "site", "active": None, "f": "site"},
    "resources/medcore-production-master-html-medcore-master-book/index.html":
                    {"v": "site", "active": None,       "f": "site"},
    "resources/standalone-htmls-case-ladder-interactive.html":
                    {"v": "site", "active": None,       "f": "site"},
    "resources/standalone-htmls-magic-table-medical-licensing.html":
                    {"v": "magic", "active": None,      "f": "site"},
    "resources/medcore-question-bank/index.html":
                    {"v": "qb",    "active": None,      "f": None},
    "resources/medcore-fresh-mock-bank/index.html":
                    {"v": "fresh", "active": None,      "f": "site"},
    "resources/medcore-past-paper-hub-practice/index.html":
                    {"v": "papers","active": None,      "f": "site"},
    "resources/medcore-prediction-exam-practice.html":
                    {"v": "pred",  "active": None,      "f": None},
}

def render(active, variant, fvariant):
    header = (CHROME / f"header.{variant}.part").read_text(encoding="utf-8")
    footer = (CHROME / f"footer.{fvariant}.part").read_text(encoding="utf-8") if fvariant else None
    if active:
        needle = f'<a href="{active}"'
        assert needle in header, f"active link {active} not in header.{variant}.part"
        header = header.replace(needle, needle + ' aria-current="page"', 1)
    return header, footer

def page_report(name, cfg, mode):
    p = SITE / name
    s = p.read_text(encoding="utf-8")
    healed = False
    # self-heal: a collision-flushed file loses its markers but keeps the
    # standard blocks — re-wrap so the build converges without manual rescue
    if -1 in (s.find(NAV_S), s.find(NAV_E)):
        ha = s.find('<header class="nav">')
        if ha == -1:
            return "NAV region missing (no standard header either)", True
        hb = s.find('</header>') + len('</header>')
        s = s[:ha] + NAV_S + s[ha:hb] + NAV_E + s[hb:]
        healed = True
    if cfg["f"] is not None and -1 in (s.find(F_S), s.find(F_E)):
        fc = s.find('<footer class="foot">')
        if fc == -1:
            return "FOOTER region missing (no standard footer either)", True
        fd = s.rfind('</footer>') + len('</footer>')
        s = s[:fc] + F_S + s[fc:fd] + F_E + s[fd:]
        healed = True
    a, b = s.find(NAV_S), s.find(NAV_E)
    h, foot = render(cfg["active"], cfg["v"], cfg["f"])
    want_nav = "\n" + h + "\n"
    drift = False
    if a + len(NAV_S) >= b or s[a + len(NAV_S):b] != want_nav:
        drift = True
    if foot is not None:
        want_foot = "\n" + foot + "\n"
        c, d = s.find(F_S), s.find(F_E)
        if -1 in (c, d):
            return "FOOTER region missing", True
        if s[c + len(F_S):d] != want_foot:
            drift = True
    if mode == "check":
        if healed: drift = True
        return ("UP TO DATE" if not drift else "OUT OF DATE — run build"), drift or healed
    if foot is not None:
        out = s[:c + len(F_S)] + want_foot + s[d:]
    else:
        out = s
    a, b = out.find(NAV_S), out.find(NAV_E)
    out = out[:a + len(NAV_S)] + want_nav + out[b:]
    p.write_text(out, encoding="utf-8")
    return ("healed + regenerated" if healed else "regenerated"), False

def main():
    mode = sys.argv[1] if len(sys.argv) > 1 else "build"
    if mode not in ("build", "check"):
        print(__doc__); return 2
    lines, fail = [], False
    for name, cfg in PAGES.items():
        msg, bad = page_report(name, cfg, mode)
        lines.append(f"  {name}: {msg}")
        fail = fail or bad
    print(("chrome check" if mode == "check" else "chrome build") + ":")
    print("\n".join(lines))
    if fail:
        print("  ✗ problems found" + (" — run build" if mode == "check" else ""))
        return 1
    return 0

if __name__ == "__main__":
    sys.exit(main())
