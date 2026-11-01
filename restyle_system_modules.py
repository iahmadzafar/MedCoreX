#!/usr/bin/env python3
"""
Studyverse Restyle Script for MedCORE Systems Modules
====================================================
Replaces custom CSS in all 10 MedCORE Systems modules with Studyverse
design-system tokens. Removes custom fonts, forced dark mode, A4 page
layout, and hardcoded hex colors.

Modules restyled:
  Cardiology, Neurology, Respiratory, Dermatology, Urology,
  Gynaecology, Obstetrics, Paediatrics, ENT, Ophthalmology
"""

import re
from pathlib import Path

REPO = Path("/Users/ahmdzafr/Documents/MedCoreX")
RESOURCES = REPO / "site" / "resources"

MODULES = [
    "medcore-systems-cardiology-cardiology-medcore.html",
    "medcore-systems-neurology-neurology-medcore.html",
    "medcore-systems-respiratory-respiratory-medcore.html",
    "medcore-systems-dermatology-dermatology-medcore.html",
    "medcore-systems-urology-urology-medcore.html",
    "medcore-systems-gynecology-gynecology-medcore.html",
    "medcore-systems-obstetrics-obstetrics-medcore.html",
    "medcore-systems-pediatrics-pediatrics-medcore.html",
    "medcore-systems-ent-ent-medcore.html",
    "medcore-systems-ophthalmology-ophthalmology-medcore.html",
]

# Studyverse replacement CSS — targets the existing HTML class names
# but uses Studyverse design tokens exclusively.
STUDYVERSE_CSS = """  /* ═══ Studyverse restyle — MedCORE Systems ═══
     All presentation uses /assets/studyverse.css tokens only.
     No hex colours, no custom fonts, no forced dark mode. ═══ */

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  html { font-size: 100%; -webkit-font-smoothing: antialiased; }

  body {
    font-family: var(--font-body);
    color: var(--ink);
    background: var(--bg);
    line-height: 1.55;
    min-height: 100vh;
  }

  /* Layout — replaces .page A4 print layout with Studyverse .wrap container */
  .wrap { width: min(1180px, 100% - 32px); margin-inline: auto; }

  .nx-shell { display: grid; grid-template-columns: 264px 1fr; gap: 28px; padding: 26px 0 60px; align-items: start; }
  .nx-side {
    position: sticky;
    top: var(--stick-h, 130px);
    max-height: calc(100dvh - var(--stick-h, 130px) - 24px);
    overflow-y: auto;
    background: var(--surface);
    border: var(--bw) solid var(--ink);
    border-radius: var(--radius);
    box-shadow: var(--shadow);
    padding: 18px 16px;
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
  .nx-side-head {
    font-family: var(--font-mono);
    font-size: 0.6rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--faint);
    border-bottom: 2px solid var(--line);
    padding: 0 2px 10px;
    margin-bottom: 10px;
  }
  .nx-side ul { list-style: none; display: flex; flex-direction: column; gap: 4px; flex: 1; }
  .nx-side li { border-radius: calc(var(--radius) * 0.6); }
  .nx-side a {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 0 10px;
    align-items: baseline;
    text-decoration: none;
    color: inherit;
    padding: 8px 10px;
    border: 2px solid transparent;
    transition: color 0.2s, border-color 0.2s, background 0.2s;
  }
  .nx-side a:hover { background: var(--well); border-color: var(--hair); }
  .nx-side a:global(.active), .nx-side a[aria-current="true"] {
    border-color: var(--ink);
    background: var(--lad-soft, var(--c1));
  }
  .nx-side a:global(.active) .n, .nx-side a[aria-current="true"] .n {
    color: var(--lad, var(--c1));
    font-weight: 700;
  }
  .nx-side .n {
    font-family: var(--font-mono);
    font-size: 0.66rem;
    color: var(--faint);
    font-variant-numeric: tabular-nums;
  }
  .nx-side-drag { display: none; }

  .nx-main { min-width: 0; }

  /* Hero / cover — replaces .cover A4 layout */
  .nx-hero {
    background: var(--surface);
    border: var(--bw) solid var(--ink);
    border-radius: var(--radius);
    box-shadow: var(--shadow);
    padding: 34px 28px;
    margin-bottom: 28px;
    display: flex;
    flex-direction: column;
    gap: 14px;
  }
  .cover-badge {
    font-family: var(--font-mono);
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.14em;
    font-weight: 700;
    color: var(--c1);
    border: 2px solid var(--c1);
    border-radius: var(--pill);
    padding: 0.35em 0.9em;
    display: inline-block;
    width: fit-content;
  }
  .cover-subtitle {
    color: var(--muted);
    font-size: 0.95rem;
    line-height: 1.5;
    max-width: 56ch;
  }
  .cover-divider {
    width: 48px;
    height: 3px;
    background: var(--c2);
    border-radius: 999px;
    margin: 0;
  }
  .cover-meta {
    display: flex;
    gap: 16px;
    font-size: 0.85rem;
    color: var(--muted);
    flex-wrap: wrap;
  }
  .cover-meta strong { color: var(--ink); font-weight: 700; }
  .cover-disclaimer {
    font-size: 0.8rem;
    color: var(--muted);
    font-style: italic;
    border-top: 1px solid var(--line);
    padding-top: 12px;
    margin-top: 14px;
  }

  /* Sections */
  .nx-section { margin-bottom: 40px; }
  .nx-sec-num {
    font-family: var(--font-mono);
    font-size: 0.75rem;
    font-weight: 700;
    color: var(--c1);
    text-transform: uppercase;
    letter-spacing: 0.1em;
    display: block;
    margin-bottom: 4px;
  }

  h1 { font-family: var(--font-display); font-weight: var(--dw); text-transform: var(--case); font-size: clamp(1.8rem, 4vw, 2.6rem); line-height: 1.15; margin: 0 0 8px; letter-spacing: var(--track); }
  h2 { font-family: var(--font-display); font-weight: var(--dw); text-transform: var(--case); font-size: clamp(1.5rem, 3vw, 2rem); line-height: 1.2; margin: 30px 0 10px; padding-bottom: 4px; border-bottom: var(--bw) solid var(--ink); letter-spacing: var(--track); }
  h3 { font-family: var(--font-display); font-weight: var(--dw); text-transform: var(--case); font-size: clamp(1.2rem, 2.5vw, 1.5rem); line-height: 1.3; margin: 24px 0 8px; letter-spacing: var(--track); }
  h4 { font-family: var(--font-display); font-weight: 700; font-size: 1rem; margin: 18px 0 6px; color: var(--ink); letter-spacing: var(--track); }

  p { margin: 0 0 10px; color: var(--ink); }
  ul, ol { margin: 0 0 10px; padding-left: 22px; }
  li { margin-bottom: 4px; color: var(--ink); }
  strong { color: var(--ink); font-weight: 800; }

  /* Boxes — replaces .box / .band / .bbody / .stripe */
  .box {
    background: var(--surface);
    border: var(--bw) solid var(--ink);
    border-radius: var(--radius);
    box-shadow: var(--shadow);
    padding: 20px;
    margin-bottom: 16px;
    overflow: hidden;
  }
  .box.core { border-left: 4px solid var(--c3); }
  .box.recog { border-left: 4px solid var(--c2); }
  .band {
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: 700;
    font-size: 0.85rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--ink);
    margin-bottom: 10px;
  }
  .bbody { color: var(--ink); line-height: 1.55; }
  .stripe { height: 3px; background: var(--c2); border-radius: 999px; margin: 12px 0 0; width: 48px; }

  /* Icons — .sficon already consolidated to 16px */
  .sficon { width: 16px; height: 16px; }

  /* Alert strips */
  .alert-strip {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 12px 16px;
    border-radius: var(--radius);
    border: var(--bw) solid var(--ink);
    background: var(--surface);
    box-shadow: var(--shadow);
    margin-bottom: 16px;
  }
  .alert-strip.red { border-left-color: var(--c1); background: color-mix(in srgb, var(--c1) 8%, var(--surface)); }
  .alert-strip.amber { border-left-color: var(--c2); background: color-mix(in srgb, var(--c2) 8%, var(--surface)); }

  /* Algorithm steps */
  .algorithm { margin: 16px 0; padding-left: 22px; }
  .step, .option { margin: 6px 0; color: var(--ink); }
  .highlight { font-weight: 800; color: var(--c1); }

  /* Tables */
  table {
    width: 100%;
    border-collapse: collapse;
    margin: 16px 0;
    font-size: 0.9rem;
  }
  th, td {
    border: 1px solid var(--line);
    padding: 10px 12px;
    text-align: left;
    color: var(--ink);
  }
  th { background: var(--surface); font-weight: 800; text-transform: uppercase; font-size: 0.75rem; letter-spacing: 0.08em; }

  hr.section-divider {
    border: 0;
    border-top: var(--bw) solid var(--ink);
    margin: 30px 0;
  }

  /* Toolbar overrides — keep functional, theme-aware */
  .nx-searchwrap { display: flex; align-items: center; gap: 8px; margin-bottom: 10px; }
  .nx-sicon { color: var(--muted); }
  input#nxSearch, select#nxFont { font: inherit; border: var(--bw) solid var(--ink); border-radius: var(--pill); padding: 6px 12px; background: var(--surface); color: var(--ink); }
  button.nx-iconbtn, button.nx-mode, button.nx-answers, button.nx-sizebtn {
    border: var(--bw) solid var(--ink);
    border-radius: var(--pill);
    background: var(--surface);
    color: var(--ink);
    padding: 6px 12px;
    font: inherit;
    cursor: pointer;
  }
  button.nx-iconbtn:hover, button.nx-mode:hover, button.nx-answers:hover { background: var(--c2); }
  .nx-fam { display: flex; gap: 6px; flex-wrap: wrap; margin-top: 10px; }
  .nx-fam button { font-size: 0.75rem; padding: 5px 10px; }
  .nx-spacer { flex: 1; }

  /* Print */
  @media print {
    .nx-side, .nx-searchwrap, .nx-fam, button { display: none !important; }
    .box { box-shadow: none; border: 1px solid var(--line); break-inside: avoid; }
  }

  @media (max-width: 900px) {
    .nx-shell { grid-template-columns: 1fr; }
    .nx-side { position: static; max-height: none; order: 2; margin-top: 24px; }
    .nx-main { order: 1; }
  }
"""

def restyle_module(filepath):
    """Replace the <head> font imports and <style> block with Studyverse CSS."""
    with open(filepath, encoding="utf-8", errors="replace") as f:
        content = f.read()

    # ── 1. Replace font links with studyverse.css ─────────────────────────
    # Remove all Google Fonts <link> tags
    content = re.sub(
        r'<link rel="preconnect" href="https://fonts\.gstatic\.com" crossorigin="">\n',
        '', content
    )
    content = re.sub(
        r'<link href="https://fonts\.googleapis\.com/css2\?[^"]*" rel="stylesheet">\n',
        '', content
    )
    # Add studyverse.css link after charset/viewport
    content = content.replace(
        '<meta charset="UTF-8">\n<meta name="viewport" content="width=device-width, initial-scale=1.0">',
        '<meta charset="UTF-8">\n<meta name="viewport" content="width=device-width, initial-scale=1.0">\n<link rel="stylesheet" href="/assets/studyverse.css">'
    )
    # Also handle the variant with color-scheme meta
    content = content.replace(
        '<meta charset="UTF-8">\n<meta name="color-scheme" content="light dark">\n<meta name="viewport" content="width=device-width, initial-scale=1.0">',
        '<meta charset="UTF-8">\n<meta name="color-scheme" content="light dark">\n<meta name="viewport" content="width=device-width, initial-scale=1.0">\n<link rel="stylesheet" href="/assets/studyverse.css">'
    )

    # ── 2. Replace entire <style> block ───────────────────────────────────
    # Find and replace from <style> to </style>
    content = re.sub(
        r'<style>.*?</style>',
        '<style>\n' + STUDYVERSE_CSS + '\n  </style>',
        content,
        flags=re.DOTALL
    )

    # ── 3. Remove data-mode="dark" (already done, but ensure) ─────────────
    content = content.replace('data-mode="dark"', '')

    # ── 4. Remove localStorage theme override script ──────────────────────
    content = re.sub(
        r'<script>try\{var __f=localStorage\.getItem\("medcore\.banktheme"\)\|\|"[^"]*",__t=localStorage\.getItem\("medcore\.theme"\)\|\|"[^"]*"\);document\.documentElement\.setAttribute\("data-banktheme",__f\);document\.documentElement\.setAttribute\("data-mode",__t\);\}catch\(e\)\{\}</script>\n',
        '',
        content
    )

    with open(filepath, "w", encoding="utf-8") as f:
        f.write(content)

    return True


def main():
    for mod in MODULES:
        path = RESOURCES / mod
        if not path.exists():
            print(f"  SKIP (not found): {mod}")
            continue
        try:
            restyle_module(path)
            print(f"  Restyled: {mod}")
        except Exception as e:
            print(f"  ERROR on {mod}: {e}")

    print(f"\n✓ Restyled {len(MODULES)} MedCORE Systems modules")


if __name__ == "__main__":
    main()
