/* ============================================================
   MedCoreX · landing page · streak.js (lazy, idle)
   The study record: daily streak, scenarios read, best sprint and
   the error log. All saved in localStorage under medcore.* keys
   (the kit's naming rule; medcore-sync.js may mirror them to the
   account). Dismissible corner widget. Never blocks content.
   For study only, not clinical guidance.
   ============================================================ */

var KEY = {
  streak: 'medcore.streak',       // { last: 'YYYY-MM-DD', days: n }
  scen: 'medcore.scenarios',      // { [id]: 'right' | 'wrong' }
  best: 'medcore.sprintBest',     // number, out of 5
  misses: 'medcore.misses',       // [{ id, kind, stem, picked, right, why, cat, at, note }]
  widget: 'medcore.widget'        // 'open' | 'closed'
};

function load(k, d) {
  try { var v = JSON.parse(localStorage.getItem(k)); return v == null ? d : v; } catch (e) { return d; }
}
function save(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
function pad(n) { return (n < 10 ? '0' : '') + n; }
function dayKey(d) { return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate()); }
function today() { return dayKey(new Date()); }
function yesterday() { return dayKey(new Date(Date.now() - 86400000)); }

/* counts an activity for today, extends or restarts the streak */
export function activity() {
  var s = load(KEY.streak, { last: '', days: 0 });
  var t = today();
  if (s.last === t) return s;
  s.days = s.last === yesterday() ? s.days + 1 : 1;
  s.last = t;
  save(KEY.streak, s);
  return s;
}

/* records one answer. Wrong answers enter the error log (Rule 03). */
export function recordAnswer(a) {
  activity();
  var at = Date.now();
  if (a.kind === 'scenario') {
    var sc = load(KEY.scen, {});
    sc[a.id] = a.correct ? 'right' : 'wrong';
    save(KEY.scen, sc);
  }
  if (!a.correct) {
    var list = load(KEY.misses, []);
    list.unshift({ id: a.id, kind: a.kind, stem: a.stem, picked: a.picked, right: a.right, why: a.why, cat: a.cat, at: at, note: '' });
    save(KEY.misses, list.slice(0, 120));
  }
  refresh();
  return at;
}

export function saveNote(at, text) {
  var list = load(KEY.misses, []);
  list.forEach(function (m) { if (m.at === at) m.note = text; });
  save(KEY.misses, list);
}

export function saveBest(score) {
  var best = load(KEY.best, 0);
  if (score > best) { save(KEY.best, score); }
  refresh();
  return Math.max(best, score);
}

export function stats() {
  var s = load(KEY.streak, { last: '', days: 0 });
  var streak = (s.last === today() || s.last === yesterday()) ? s.days : 0;
  var sc = load(KEY.scen, {});
  return {
    streak: streak,
    read: Object.keys(sc).length,
    right: Object.keys(sc).filter(function (k) { return sc[k] === 'right'; }).length,
    best: load(KEY.best, 0),
    misses: load(KEY.misses, [])
  };
}

var root, openBtn;

function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }

function render() {
  if (!root) return;
  var st = stats();
  var dl = root.querySelector('[data-stats]');
  dl.innerHTML =
    '<div><dt>Day streak</dt><dd>' + st.streak + '</dd></div>' +
    '<div><dt>Scenarios read</dt><dd>' + st.read + '/10</dd></div>' +
    '<div><dt>Best sprint</dt><dd>' + st.best + '/5</dd></div>' +
    '<div><dt>Misses logged</dt><dd>' + st.misses.length + '</dd></div>';
  if (!root.querySelector('[data-review-body]').hidden) renderReview();
}

function renderReview() {
  var body = root.querySelector('[data-review-body]');
  var misses = stats().misses.slice(0, 20);
  if (!misses.length) {
    body.innerHTML = '<p class="study-note" style="margin-top:12px">No misses yet. Every miss you make lands here.</p>';
    return;
  }
  body.innerHTML = '<ul class="misses">' + misses.map(function (m) {
    return '<li><div>' + esc(m.stem) + '</div>' +
      '<div class="muted" style="margin-top:6px">You picked: ' + esc(m.picked || 'nothing') + '</div>' +
      '<div style="margin-top:4px">Right: ' + esc(m.right) + '</div>' +
      '<label for="n' + m.at + '" style="margin-top:8px">In your own words: the discriminator</label>' +
      '<textarea id="n' + m.at + '" data-at="' + m.at + '" placeholder="The one thing that separated the right answer…">' + esc(m.note || '') + '</textarea></li>';
  }).join('') + '</ul>';
  body.querySelectorAll('textarea').forEach(function (ta) {
    ta.addEventListener('change', function () { saveNote(Number(ta.dataset.at), ta.value); });
  });
}

function setOpen(open) {
  root.hidden = !open;
  openBtn.hidden = open;
  save(KEY.widget, open ? 'open' : 'closed');
}

export function mount() {
  root = document.getElementById('streak');
  openBtn = document.getElementById('streakOpen');
  if (!root || !openBtn) return;

  root.innerHTML =
    '<div class="streak-head"><span>Study record</span>' +
    '<button class="game-dismiss" type="button" data-dismiss aria-label="Dismiss the study record">Dismiss ×</button></div>' +
    '<dl data-stats></dl>' +
    '<div class="streak-actions"><button class="btn btn-ghost btn-small" type="button" data-review-toggle aria-expanded="false" aria-controls="reviewBody">Review misses</button></div>' +
    '<div data-review-body id="reviewBody" hidden style="max-height:44vh;overflow:auto"></div>';

  var saved = null;
  try { saved = localStorage.getItem(KEY.widget); } catch (e) {}
  /* open by default on desktop only, so it never sits over the monitor on smaller screens */
  var startOpen = saved ? saved === 'open' : window.innerWidth >= 1100;
  root.hidden = !startOpen;
  openBtn.hidden = startOpen;

  root.querySelector('[data-dismiss]').addEventListener('click', function () { setOpen(false); openBtn.focus(); });
  openBtn.addEventListener('click', function () { setOpen(true); root.querySelector('[data-dismiss]').focus(); });

  var toggle = root.querySelector('[data-review-toggle]');
  var body = root.querySelector('[data-review-body]');
  toggle.addEventListener('click', function () {
    var show = body.hidden;
    body.hidden = !show;
    toggle.setAttribute('aria-expanded', String(show));
    toggle.textContent = show ? 'Hide misses' : 'Review misses';
    if (show) renderReview();
  });

  document.addEventListener('mx:stats', refresh);
  render();
}

function refresh() { render(); }
