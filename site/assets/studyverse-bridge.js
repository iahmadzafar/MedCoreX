/* ============================================================
   MedCoreX · Studyverse BRIDGE (JS) — site/assets/studyverse-bridge.js
   The behaviour half of the legacy-page bridge. studyverse.js
   owns the engine (theme paint, chips, blobs, toast, remix,
   mx-lock/mx-mode); this file only retires the page's own
   machinery so exactly one system remains:

   1. mlx-theme → mx-mode one-time migration (kit mode carries).
   2. Legacy floating toggles (.mlx-toggle) removed — the chip
      below replaces them.
   3. A floating engine chip for pages without a kit engine slot.

   Loaded AFTER studyverse.js (kitify order). Test-only styles
   live in studyverse-bridge.css. */
(function () {
'use strict';

/* ── 1 · storage migration: retire mlx-theme, kit owns mx-mode ── */
try {
  var legacy = localStorage.getItem('mlx-theme');
  if (legacy === 'dark' || legacy === 'light') {
    if (!localStorage.getItem('mx-mode')) localStorage.setItem('mx-mode', legacy);
    localStorage.removeItem('mlx-theme');
  }
} catch (e) { /* storage unavailable: engine falls back to prefers-color-scheme */ }

/* ── 2+3 · chips and legacy toggles, on DOM ready ── */
function wire() {
  /* legacy floating toggles out (CSS already hides them) */
  document.querySelectorAll('.mlx-toggle').forEach(function (b) { b.remove(); });

  /* floating engine chip when the page has no kit engine slot */
  if (!document.querySelector('[data-sv-engine]')) {
    var eng = document.createElement('div');
    eng.setAttribute('data-sv-engine', '');
    eng.className = 'svb-engine';
    document.body.appendChild(eng);
  }
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', wire);
else wire();
})();
