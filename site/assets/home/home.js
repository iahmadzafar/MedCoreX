/* ============================================================
   MedCoreX · landing page · home.js (always loaded, ~always small)
   Theme, scroll reveals, the one-at-a-time rules, catalogue tabs
   with keyboard support, reading explanations. Heavy parts load
   lazily: monitor.js when the monitor is in view, games on demand,
   streak.js when the browser is idle.
   ============================================================ */
(function () {
  'use strict';

  var doc = document, root = doc.documentElement;
  root.classList.add('js');
  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)');

  /* ── theme: dark is the default; light is opt-in and remembered ── */
  var MODE_KEY = 'mx-mode';
  try { if (localStorage.getItem(MODE_KEY) === 'light') root.dataset.theme = 'light'; } catch (e) {}
  var themeBtn = doc.getElementById('themeBtn');
  function syncTheme() {
    var dark = root.dataset.theme !== 'light';
    themeBtn.setAttribute('aria-pressed', String(dark));
    themeBtn.textContent = dark ? 'Light mode' : 'Dark mode';
  }
  themeBtn.addEventListener('click', function () {
    var next = root.dataset.theme === 'light' ? 'dark' : 'light';
    root.dataset.theme = next;
    try { localStorage.setItem(MODE_KEY, next); } catch (e) {}
    syncTheme();
    doc.dispatchEvent(new CustomEvent('mx:theme'));
  });
  syncTheme();

  /* ── scroll reveals: 550ms opacity and rise, once per element ── */
  if ('IntersectionObserver' in window) {
    var revealIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); revealIO.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    doc.querySelectorAll('.rv').forEach(function (el) { revealIO.observe(el); });
  } else {
    doc.querySelectorAll('.rv').forEach(function (el) { el.classList.add('in'); });
  }

  /* ── the standard: rules switch on one at a time as they pass the centre ── */
  var rules = [].slice.call(doc.querySelectorAll('[data-rule]'));
  var ruleBar = doc.getElementById('ruleBar');
  function updateBar() {
    var on = rules.filter(function (r) { return r.classList.contains('is-on'); }).length;
    if (ruleBar) ruleBar.style.width = Math.round((on / rules.length) * 100) + '%';
  }
  if ('IntersectionObserver' in window && root.classList.contains('js')) {
    var ruleIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('is-on'); }
      });
      updateBar();
    }, { rootMargin: '-42% 0px -42% 0px' });
    rules.forEach(function (r) { ruleIO.observe(r); });
  } else {
    rules.forEach(function (r) { r.classList.add('is-on'); });
    updateBar();
  }

  /* ── the monitor: readings, explanations, and the lazy canvas ── */
  var monitor = doc.getElementById('monitor');
  var screen = doc.getElementById('screen');
  var explain = doc.getElementById('explain');
  var defaultExplain = explain.textContent;
  var readings = [].slice.call(doc.querySelectorAll('.reading'));

  function setPressed(btn) {
    readings.forEach(function (b) { b.setAttribute('aria-pressed', String(b === btn)); });
  }
  function focusReading(btn) {
    var pressed = btn.getAttribute('aria-pressed') === 'true';
    if (pressed) {
      setPressed(null);
      explain.textContent = defaultExplain;
      doc.dispatchEvent(new CustomEvent('mx:focus', { detail: { trace: '' } }));
      return;
    }
    setPressed(btn);
    explain.textContent = btn.getAttribute('data-why');
    doc.dispatchEvent(new CustomEvent('mx:focus', { detail: { trace: btn.getAttribute('data-trace') || '' } }));
  }
  readings.forEach(function (btn) {
    btn.addEventListener('click', function () { focusReading(btn); });
  });
  doc.addEventListener('mx:pick', function (e) {
    var btn = doc.querySelector('.reading[data-trace="' + e.detail.trace + '"]');
    if (btn) focusReading(btn);
  });

  /* scenarios push vitals into the readings as text, so the numbers stay real */
  var scnTag = doc.getElementById('scnTag');
  doc.addEventListener('mx:vitals', function (e) {
    var v = e.detail;
    if (!v) {
      monitor.classList.remove('in-scenario');
      scnTag.textContent = '';
      readings.forEach(function (btn) {
        var main = btn.querySelector('[data-main]');
        var unit = btn.querySelector('[data-unit]');
        main.textContent = btn.getAttribute('data-default');
        if (unit) unit.textContent = '(90)';
      });
      return;
    }
    monitor.classList.add('in-scenario');
    scnTag.textContent = ' · SCENARIO';
    readings.forEach(function (btn) {
      var key = btn.getAttribute('data-vital');
      var main = btn.querySelector('[data-main]');
      var unit = btn.querySelector('[data-unit]');
      if (key === 'nibp') {
        main.textContent = v.vitals.sys + '/' + v.vitals.dia;
        if (unit) unit.textContent = '(' + Math.round((v.vitals.sys + 2 * v.vitals.dia) / 3) + ')';
      } else {
        main.textContent = String(v.vitals[key]);
      }
    });
  });

  /* ── lazy: start the canvas only once the monitor is in view ── */
  if ('IntersectionObserver' in window && screen) {
    var monIO = new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting) {
        monIO.disconnect();
        import('./monitor.js').then(function (m) { m.start(screen); }).catch(function () {});
      }
    }, { rootMargin: '200px 0px' });
    monIO.observe(screen);
  }

  /* ── games: loaded on demand, never on the critical path ── */
  var openBtn = doc.getElementById('openScenario');
  var scnSlot = doc.getElementById('scenarioSlot');
  openBtn.addEventListener('click', function () {
    import('./scenarios.js').then(function (m) { m.start({ slot: scnSlot, dispatch: function (d) { doc.dispatchEvent(new CustomEvent('mx:vitals', { detail: d })); } }); });
  });

  var sprintBtn = doc.getElementById('startSprint');
  var sprintSlot = doc.getElementById('sprintSlot');
  sprintBtn.addEventListener('click', function () {
    import('./sprint.js').then(function (m) { m.start({ slot: sprintSlot }); });
  });

  /* the corner record widget mounts when the browser is idle */
  var idle = window.requestIdleCallback || function (fn) { return setTimeout(fn, 1200); };
  idle(function () { import('./streak.js').then(function (m) { m.mount(); }).catch(function () {}); });

  /* ── catalogue: tabs, indicator, filter, list from catalog.js ── */
  var tablist = doc.getElementById('tablist');
  var tabs = [].slice.call(tablist.querySelectorAll('[role="tab"]'));
  var panels = tabs.map(function (t) { return doc.getElementById(t.getAttribute('aria-controls')); });
  var indicator = doc.getElementById('tabIndicator');
  var filter = doc.getElementById('filter');
  var nores = doc.getElementById('nores');
  var current = 0;

  function slugify(s) { return s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''); }
  function hrefFor(f) { return '/resources/' + encodeURIComponent(String(f).replace(/\.html$/i, '')); }
  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }

  /* fill each panel's list and count from catalog.js (the one resource list) */
  var catItems = (typeof Items !== 'undefined' && Items) ? Items : [];
  tabs.forEach(function (tab, i) {
    var cat = tab.getAttribute('data-cat');
    var list = panels[i].querySelector('[data-list]');
    var items = catItems.filter(function (it) { return it.c === cat; });
    panels[i].querySelectorAll('[data-count]').forEach(function (n) { n.textContent = items.length; });
    tab.querySelector('.count').textContent = items.length;
    list.innerHTML = items.map(function (it) {
      return '<li><a href="' + hrefFor(it.f) + '"><span><span class="t">' + esc(it.t) + '</span><span class="d">' + esc(it.d || '') + '</span></span><span class="arrow" aria-hidden="true">↗</span></a></li>';
    }).join('');
    if (!items.length) list.innerHTML = '<li class="nores">Nothing filed here yet.</li>';
  });

  function select(i, opts) {
    opts = opts || {};
    if (i === current && !opts.force) return;
    current = i;
    tabs.forEach(function (t, k) {
      var on = k === i;
      t.setAttribute('aria-selected', String(on));
      t.tabIndex = on ? 0 : -1;
    });
    panels.forEach(function (p, k) { p.hidden = k !== i; });
    var p = panels[i];
    p.classList.remove('enter'); void p.offsetWidth; p.classList.add('enter');
    placeIndicator(i, !!opts.instant);
    applyFilter();
    if (!opts.instant) { try { localStorage.setItem('mx-shelf', tabs[i].getAttribute('data-cat')); } catch (e) {} }
  }
  function placeIndicator(i, instant) {
    var t = tabs[i];
    if (!t) return;
    indicator.classList.toggle('no-anim', !!instant || !!(reduce && reduce.matches));
    indicator.style.width = t.offsetWidth + 'px';
    indicator.style.top = (t.offsetTop + t.offsetHeight - 2) + 'px';
    indicator.style.transform = 'translateX(' + t.offsetLeft + 'px)';
    /* keep the active tab visible inside the horizontal strip, without moving the page */
    var strip = tablist, sl = t.offsetLeft - 16, sr = t.offsetLeft + t.offsetWidth + 16;
    if (sl < strip.scrollLeft) strip.scrollLeft = sl;
    else if (sr > strip.scrollLeft + strip.clientWidth) strip.scrollLeft = sr - strip.clientWidth;
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { select(i); });
  });
  tablist.addEventListener('keydown', function (e) {
    var n = null;
    if (e.key === 'ArrowRight') n = (current + 1) % tabs.length;
    else if (e.key === 'ArrowLeft') n = (current - 1 + tabs.length) % tabs.length;
    else if (e.key === 'Home') n = 0;
    else if (e.key === 'End') n = tabs.length - 1;
    if (n === null) return;
    e.preventDefault();
    tabs[n].focus();
    select(n);
  });

  function applyFilter() {
    var term = (filter.value || '').trim().toLowerCase();
    var shown = 0;
    var rows = panels[current].querySelectorAll('.panel-list li');
    rows.forEach(function (li) {
      var hit = !term || li.textContent.toLowerCase().indexOf(term) >= 0;
      li.hidden = !hit;
      if (hit) shown++;
    });
    nores.hidden = !(term && shown === 0);
  }
  filter.addEventListener('input', applyFilter);

  /* restore the last category, and a Continue link to the last file opened */
  try {
    var saved = localStorage.getItem('mx-shelf');
    var idx = tabs.findIndex(function (t) { return t.getAttribute('data-cat') === saved; });
    if (idx > 0) select(idx, { instant: true, force: true });
  } catch (e) {}
  try {
    var last = JSON.parse(localStorage.getItem('mx-last') || '[]');
    if (last.length && last[0].f) {
      var resume = doc.getElementById('resume');
      resume.href = hrefFor(last[0].f);
      resume.textContent = 'Continue — ' + (last[0].t || 'last file');
      resume.hidden = false;
    }
  } catch (e) {}

  placeIndicator(current, true);
  window.addEventListener('resize', function () { placeIndicator(current, true); });
})();
