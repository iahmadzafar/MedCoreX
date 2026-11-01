#!/usr/bin/env python3
"""
tools/design-choices.py — regenerate tools/design-choices.json from the live codebase.
Reads: studyverse.css, studyverse.js, systems-manifest.json, House Rules.md, AGENTS.md.
Run: python3 tools/design-choices.py
"""
import json, re
from pathlib import Path

REPO = Path(__file__).resolve().parent.parent
kit_css = (REPO / "site/assets/studyverse.css").read_text()
kit_js = (REPO / "site/assets/studyverse.js").read_text()
sys_m = json.loads((REPO / "tools/systems-manifest.json").read_text())
pal = sys_m["files"]["cardiology"]["palette"]
fonts_url = sys_m["files"]["cardiology"]["fonts"]

def grab(pattern, text, default=None):
    m = re.search(pattern, text, re.M)
    return m.group(1).strip() if m else default

kit_tokens = {}
for root in re.finditer(r":root\s*\{(.*?)\}", kit_css, re.S):
    for m in re.finditer(r"(--[a-zA-Z0-9-]+)\s*:\s*([^;]+);", root.group(1)):
        kit_tokens[m.group(1)] = m.group(2).strip()

doc = {
    "_doc": "MedCoreX design choices — extracted from the live codebase. Regenerate: python3 tools/design-choices.py",
    "kit": {
        "css": "site/assets/studyverse.css",
        "js": "site/assets/studyverse.js",
        "tokens": kit_tokens,
        "fonts_url": grab(r"@import url\('([^']+)'\)", kit_css),
        "components": sorted(set(re.findall(r"^\.([a-z0-9-]+)", kit_css, re.M))),
        "patterns": ["dots", "grid", "stripes", "checks", "waves", "plain"],
        "dark_mode_token": "--on-accent stays #0d0d0d (dark text on accent fills, both modes)",
    },
    "engine": {
        "schemes": ["Triadic", "Complementary", "Split", "Analogous", "Tetradic", "Candy"],
        "hue_range": [0, 360],
        "saturation_range": [74, 96],
        "bg_lightness_range": [93, 96],
        "surface_lightness_range": [98.5, 99.5],
        "ink_lightness_range": [9, 15],
        "display_pools": re.findall(r"f:'([^']+)'", kit_js),
        "body_pools": re.findall(r"'([A-Z][^']+)',", grab(r"const BODY=\[(.*?)\];", kit_js, "")),
        "shadow_patterns": re.findall(r"\['([^']+)'", kit_js),
        "adj_pool": re.findall(r"'([A-Z][a-z]+)'", grab(r"const ADJ=\[(.*?)\];", kit_js, "")),
        "noun_pool": re.findall(r"'([A-Z][a-z]+)'", grab(r"const NOUN=\[(.*?)\];", kit_js, "")),
    },
    "systems": {
        "files": list(sys_m["files"].keys()),
        "palette": pal,
        "fonts_url": fonts_url,
        "page_geometry": {"width": "210mm", "height": "297mm", "margin": "18mm"},
        "shared_classes": [
            "cover", "page", "page-header", "page-footer", "page-num", "band", "stripe",
            "bbody", "section-label", "section-num", "mcq", "mcq-stem", "mcq-options",
            "opt", "ansbox", "correct-line", "kill", "alert-strip", "buzzword",
            "algorithm", "two-col", "toc-title", "toc-list", "toc-num", "toc-text",
        ],
    },
    "standing_rules": {
        "no_ibm_plex": True,
        "no_file_counts_or_sizes": True,
        "progress_key_prefix": "medcore.",
        "theme_prefs": ["mx-lock", "mx-mode"],
        "design_kit_path": ["site/assets/studyverse.css", "site/assets/studyverse.js"],
        "systems_tool": "tools/systems-kit.py",
        "bottom_breathing_room": True,
        "text_is_stark": True,
    },
}

out = REPO / "tools/design-choices.json"
out.write_text(json.dumps(doc, indent=2, ensure_ascii=False) + "\n")
print(f"written: {out}")
print(f"kit tokens: {len(kit_tokens)} · components: {len(doc['kit']['components'])} · systems files: {len(doc['systems']['files'])}")
