# MedCoreX — Design Choices

> Authoritative reference: every design decision the owner has approved, extracted from
> the codebase. Machine-readable copy: `tools/design-choices.json`.
> Regenerate with: `python3 tools/design-choices.py`

---

## 1 · Design systems in the codebase

There are **two** design systems, both owner-approved:

| System | Where | Purpose |
|---|---|---|
| **Studyverse Kit** | `site/assets/studyverse.css` + `site/assets/studyverse.js` | The main site (hub, library, bank, auth, stats) — a soft, colorful, remixable system with dark/light twins |
| **Systems (A4 templates)** | `site/resources/medcore-systems-*.html` | The 10 medical system documents — a crisp, print-first system with a fixed palette |

---

## 2 · Studyverse Kit (the site's design system)

### Tokens (from `studyverse.css :root`)

```
--bg:         #fff4e0       warm cream ground
--surface:    #fffdf8       card / panel surface
--ink:        #1d1433       text, borders, hard shadows
--c1:         #ff6b9a       pink accent
--c2:         #ffd34d       amber/gold accent
--c3:         #4cc9d8       cyan accent
--c4:         #9b7bff       violet accent
--ok:         #2fbf71       correct / success
--bad:        #f2385a       wrong / danger
--muted:      color-mix(ink 68%, transparent)   secondary text
--line:       color-mix(ink 14%, transparent)   hairline dividers
--radius:     18px          base corner radius
--bw:         3px           base border width
--shadow:     6px 6px 0 var(--ink)              hard offset shadow
--shadow-hover: 10px 10px 0 var(--ink)
--title-shadow: 3px 3px 0 var(--c2)
--tilt:       -1deg         hover card rotation
--ease:       cubic-bezier(.34,1.56,.64,1)     springy overshoot
--pill:       min(var(--radius),999px)
--on-accent:  #0d0d0d in BOTH modes — text on accent fills (accents stay light; dark text stays readable)
```

### Fonts (from `studyverse.css` + `studyverse.js`)

```
--font-display:  Futura, "Century Gothic", "Trebuchet MS", sans-serif
--font-body:     "Avenir Next", "Segoe UI", sans-serif
--font-mono:     "Geist Mono", ui-monospace, Menlo, Consolas, monospace
```

The engine remixes display/body from curated pools:

```
DISPLAY pools: Futura, Rockwell, American Typewriter, Marker Felt, Chalkboard SE,
               Didot, Copperplate, Impact, Avenir Next Condensed, Cooper Black
BODY pools:    Avenir Next, Gill Sans, Optima, Georgia, Menlo, Baskerville, Trebuchet MS
```

### Engine (from `studyverse.js`)

```
Color schemes: Triadic, Complementary, Split, Analogous, Tetradic, Candy
Hue base:      0–360° random per remix
Saturation:    74–96%
Lightness:     bg 93–96%, surface 98.5–99.5%, ink 9–15%, accents 60–74%
Background patterns: dots, grid, stripes, checks, waves, plain
Theme names:   [ADJ] [NOUN] — Electric Notebook, Cosmic Riot, Turbo Atlas…
ADJ pool:      Electric, Bubblegum, Cosmic, Retro, Sour, Velvet, Jazzy, Turbo,
               Lemon, Neon, Groovy, Fizzy, Disco, Cherry, Tropical, Glitter, Mango, Pixel
NOUN pool:     Notebook, Riot, Library, Sundae, Lab, Arcade, Atlas, Mixtape,
               Garden, Comet, Parade, Studio, Lagoon, Cassette, Carnival, Orbit
```

### Components (from `studyverse.css`)

```
Navigation:    .nav, .logo, .logo-mark, .links, .engine, .icon-btn
Cards:         .card, .card.hov
Buttons:       .btn, .btn.alt (cyan), .btn.ghost, .btn.sm
Chips:         .chip, .chip[aria-pressed]
Fields:        .field
Hero:          .hero, .mega, .lede, .hero-art, .sticker, .shape (.s1 .s2 .s3)
Marquee:       .marquee, .track
Section:       .section-head
Toast:         .toast, .confetti
Options:       .opt, .opt.correct (green), .opt.wrong (red), .opt.dim, .opt.sel (violet)
Progress:      .prog, .bar
Dialog:        dialog (max-width 980px, max-height 90vh)
Reveal:        .rv (rise animation), staggered via --i
Patterns:      html[data-pattern] → dots/grid/stripes/checks/waves/plain
Dark mode:     html[data-theme=dark] — tokens flip; --on-accent stays #0d0d0d (never white-on-pastel)
```

---

## 3 · Systems Templates (the 10 A4 medical documents)

### Palette (from `tools/systems-manifest.json`, identical across all 10)

```
--navy:        #1a2744       primary dark
--accent:      #c0392b       red accent
--accent-soft: #e74c3c       lighter red
--teal:        #1a8a7d       teal accent
--amber:       #d4880f       amber/gold accent
--never:       #991b1b       deep red (never-do)
--blue-soft:   #edf4fc       soft blue background
--gray-50:     #f8f9fb       lightest gray
--gray-100:    #f1f3f6
--gray-200:    #e2e6ec
--gray-300:    #c9cfd8
--gray-400:    #9aa2b1
--gray-500:    #6b7280
--gray-600:    #4b5563
--gray-700:    #374151
--body:        #1e2a3a       body text
--body-bg:     #ffffff       page background
```

### Fonts (single Google Fonts request per file)

```
--font-body:    "DM Sans", -apple-system, sans-serif
--font-display: "DM Serif Display", Georgia, serif
--font-mono:    "JetBrains Mono", "SF Mono", monospace
```

### Page geometry (A4 print-first)

```
--page-w: 210mm
--page-h: 297mm
--margin: 18mm
```

### Content structure (all 10 files)

```
Cover section:  .cover, .cover-badge, .cover-meta, .cover-subtitle,
                .cover-divider, .cover-disclaimer, .doc-title
TOC:            .toc-title, .toc-list, .toc-num, .toc-text
Pages:          .page, .page-header, .page-footer, .page-num
Content bands:  .band, .stripe, .bbody, .section-label, .section-num
MCQ blocks:     .mcq, .mcq-stem, .mcq-options, .opt
Answer boxes:   .ansbox, .correct-line, .kill
Special:        .alert-strip, .buzzword, .algorithm, .two-col
Icons:          .sfi-* (SVG icon classes), .navy (navy-colored variant)
```

---

## 4 · House Rules (design law)

> **Scope.** House Rules do not set the look of pages that load the Studyverse
> Kit (`site/assets/studyverse.css` + `studyverse.js`). Kit pages follow §2 of
> this document: remixable display fonts, uppercase headings, hard offset
> shadows and springy hovers are intended, not violations. Content rules still
> apply everywhere: no emojis, no file counts/sizes in student-facing text,
> `medcore.` progress keys, bottom breathing room.

### Type voice (§1.1)
- Display: Bricolage Grotesque — 800 hero/h1, 700 sections, tracking −0.02em
- Body: Plus Jakarta Sans — line-height 1.7 body, 1.25 UI labels
- Mono labels: Geist Mono — 10–11px, small-caps or letterspaced caps
- Weight ladder: 800 / 700 / 600 / 400
- No board names. No emojis — glyphs are inline SVG only.

### Color (§1.2)
- Text: pure `#FFFFFF` on dark, pure `#000000` on light (owner ruling)
- Secondary text: 64% / 58% opacity of the same
- Ground: dark navy family `#0B0D12 → #14171E → #1A1E28`; light twin `#FFFFFF → #F4F5F7`
- Accents (semantic): mint `#34D399` (correct), coral `#FF6EA9` (wrong), sunshine `#FFC53D`, violet `#8B7CFF`
- Proportion rule: colored element is small, sits on quiet surface. Full-width slabs banned.

### Space (§1.3)
- Section gaps: ~72px pages, ~48px books
- Line-height: 1.7 body
- Inner padding: ≥16px boxes, 20px prose
- Bottom breathing: footerless sections `padding-bottom:120px`; footer pages ≥48px footer padding
- Max reading width: ~72 characters

### Surface (§1.4)
- Clearly visible soft depth everywhere, buttons included
- Shadow: base `0 1px 2px` + ambient `0 14px 34px -16px` (dark) / `0 14px 34px -20px rgba(23,17,10,.20)` (light)
- Surfaces stack max three deep: ground → panel → leaf
- Corner radius: cards 16–22px, controls 12–14px, chips/pills 999px

### Detail (§1.5)
- Micro-labels: mono small-caps index numbers (`01`, `1.1`)
- Every state designed: hover, focus (amber outline), active (flat amber fill), running (warn)
- Footers: every page carries the house footer
- Print hides chassis, keeps content

### Components (§2)
- Topbar: one height, every control 30px tall
- Buttons: flat; hover border+fill to amber; on-state = flat amber fill
- Cards: hairline seam, 16–20px padding, semantic left rail 3px when typed
- Headings: serif; h1 44–76px, h2 ~34px, h3 ~26px; never bold; never all-caps
- Tables: flat header band in accent (amber), hairline row seams
- Forms: 38px fields, mono labels above, amber focus border
- Toasts: card surface, hairline, auto-dismiss
- Dividers: hairline; real thresholds only

---

## 5 · Standing rules

- **No IBM Plex anywhere** — owner ruling, replaced by Plus Jakarta Sans
- **No file counts or sizes** in user-facing copy — owner ruling
- **`medcore.*` progress keys** — saved-progress starts with `medcore.` (e.g., `medcore.qb`, `medcore.book`)
- **Theme prefs** — `mx-lock` (locked theme) and `mx-mode` (light/dark)
- **Design kit rule** — all shared design lives in `site/assets/studyverse.css` + `studyverse.js`; never paste theme styles into a page
- **Systems kit rule** — any restyle/theme/layout change to the 10 systems files goes through `python3 tools/systems-kit.py`; body is frozen; `check` + `scriptproof` before commit
- **Bottom breathing room** — no content touches the bottom edge on any page
