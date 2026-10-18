# MedLib X — House Rules

> The polish language of the house. Nothing in any file moves until you've read this and corrected it.
> Where a rule disagrees with something already built, the rule wins once you've approved it.

---

## 1 · Foundations

### 1.1 — Type voice
- **Headlines: serif.** Instrument Serif on the public pages; DM Serif Display inside the books (each shelf keeps its own serif — both italic-capable). Titles never bold — the serif carries the weight.
- **Body: sans.** Newsreader stays as the reading voice on public pages; books keep Inter / DM Sans for content. Line-height **1.7** for body, **1.25** for UI labels.
- **Labels, indexes, meta: mono** (IBM Plex Mono / JetBrains Mono, 10–11px, small-caps or letterspaced caps). An index number or a meta line is always mono — that's how you recognize it at a glance.
- No board names anywhere. No emojis anywhere — glyphs are inline SVG only.

### 1.2 — Color
- The ground is the library's dark teal family (`#0C171A → #122428 → #172D31`) or its warm-paper light twin. Everything else rides on **one accent — amber `#F5A524`** (dark) / dark amber `#9A5B10` (light).
- **Semantic color is spent, not applied:** mint = correct / recognition path; coral = wrong / trap / never-do; warn = caution. Anything else is neutral.
- Category chips (concept / task / trap / rule…) keep their hues — they carry meaning in the breakdowns. Proportion rule: a colored element is *small* (a label, a rail, a chip) sitting on a *quiet* surface. Full-width solid slabs are banned. A hero is ground, never the accent.

### 1.3 — Space
- **Airy rhythm:** generous but not gauzy. Section gaps ~72px on pages / ~48px in books; line-height 1.7; every box gets at least 16px inner padding, 20px for anything holding prose.
- No element sits inside another without air: nested boxes increase padding, not shrink it.
- Max reading width: ~72 characters of prose. Reading width is a rule, not a habit.

### 1.4 — Surface · soft material (locked: "more present")
- His pick — the most material end of the range: **clearly visible soft depth everywhere, buttons included.**
- Shadow tokens: base contact `0 1px 2px`, ambient `0 14px 34px -16px` (dark) / `0 14px 34px -20px rgba(23,17,10,.20)` (light). Every card, box, panel and button carries both — no exceptions.
- Hover deepens the ambient layer slightly (no translate jumps). On-state keeps full depth with flat amber fill.
- Surfaces stack three deep max: ground → panel → leaf. Each step slightly lighter/softer; hairline borders (`#1E3338` family) mark the seams.
- Corner radius: the house is sharp (2px max on public pages; books are boxy). Soft material comes from shadows and layering, **not** rounding.
- Dark and light are equals: every surface, rail, shadow and chip has a light-mode twin from the same token. Nothing exists in dark only.

### 1.5 — Detail · rich
- Micro-labels everywhere: mono small-caps index numbers on sections (`01`, `1.1`), tick rules before box titles, hairline dividers that mean a boundary.
- Small SVG glyphs at 13–15px where an icon aids scanning, matched to the token palette.
- Every state is designed: hover (border or fill shifts to accent — no jumping translate), focus (amber outline, offset), active/select (flat amber fill, dark text), running (warn tone).
- Footers: every page carries the house footer — brand line, nav, `© 2026 MedLib X. All rights reserved.` + personal-use license note. Print hides the chassis, keeps the content.

---

## 2 · Component rules (the recurring furniture)

| Element | Rule |
|---|---|
| Topbar | One height (46px public / 46px book), **every control 30px tall**, same padding basis, same font metric. Controls never shrink; on narrow screens convenience controls yield in value order (font → width → study → toggle), nothing overlaps. |
| Buttons | Flat; hover = border+fill to amber; on-state = flat amber fill, dark text; radius = house; no animations beyond 150ms fades. |
| Cards/boxes | card surface, hairline seam, 16–20px padding, semantic left rail 3px when typed (core/recog/trap/power/never). |
| Headings | Serif; h1 44–76px, h2 ~34px, h3 ~26px; never bold; never all-caps (all-caps is reserved for mono micro-labels). |
| Tables | Flat header band in accent (amber), hairline row seams, hover = tint, no zebra noise beyond the soft even-row shade. |
| Forms | Single metric: 38px fields, mono labels above, amber focus border, error in coral with plain-English copy. |
| Toasts | card2 surface, hairline, auto-dismiss; never colored slabs. |
| Dividers | Hairline; a divider inside a box means a *real* threshold — if it doesn't mean one, it isn't there. |

---

## 3 · Where the rules bite first

1. **Chassis (global):** the four public pages + account + 404 adopt soft material (layered surfaces on the band/photo areas, richer detail on footers/headers). Catalog cards gain the rail/label discipline.
2. **Cardiology (the model book):** full pass — spacing, heading rhythm, box styling, header controls, MCQ session furniture — becomes the template every other book is measured by.
3. **Books 2–10:** inherit the template; per-file probes verify before each goes live.

---

## 4 · Standing agreements (unchanged)
- Existing site and deploy pipeline untouched by this queue; MedLib X on its own host.
- Forgot-password stays "by the librarian" unless you say otherwise. Charts are yours — I don't draw.
- I ask when a rule is unclear; you correct; nothing ships uncorrected.
