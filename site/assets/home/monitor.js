/* ============================================================
   MedCoreX · landing page · monitor.js (lazy)
   Canvas renderer for the simulated bedside monitor. Loaded only
   when the monitor scrolls into view. Draws ECG, pleth and
   respiration at display refresh rate (60fps on a normal screen),
   pauses when off-screen or the tab is hidden, and under
   prefers-reduced-motion draws one static frame instead.
   The readings themselves are real text in the page: this file
   only draws the traces. Simulated, not live. For study only.
   ============================================================ */

var TAU = Math.PI * 2;
var PX_PER_SEC = 120;           // sweep speed of the trace
var SAMPLE_PX = 2;              // one point every two CSS pixels

function gauss(x, m, s) { var d = (x - m) / s; return Math.exp(-0.5 * d * d); }
function frac(x) { return x - Math.floor(x); }
function jitter(n) { return frac(Math.sin(n * 127.1) * 43758.5453) - 0.5; }

/* one cardiac cycle, phase p in [0,1): PQRST shape, value roughly -0.3..1 */
function ecgAt(p) {
  return 0.10 * gauss(p, 0.12, 0.025)
       - 0.12 * gauss(p, 0.19, 0.008)
       + 1.00 * gauss(p, 0.225, 0.0065)
       - 0.20 * gauss(p, 0.262, 0.009)
       + 0.26 * gauss(p, 0.42, 0.05);
}
/* pulse oximeter plethysmograph: systolic peak, dicrotic notch, 0..1 */
function plethAt(p) {
  return 0.95 * gauss(p, 0.20, 0.085) + 0.36 * gauss(p, 0.46, 0.07);
}

export function start(screen) {
  if (!screen || screen.querySelector('canvas')) return;

  var canvas = document.createElement('canvas');
  canvas.setAttribute('aria-hidden', 'true');
  screen.appendChild(canvas);
  var ctx = canvas.getContext('2d');

  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
  var beat = null; /* the device has no pulse LED; the trace carries the rhythm */
  var W = 0, H = 0, dpr = 1, raf = 0, visible = false, T0 = performance.now();

  var state = { hr: 72, rr: 16, rhythm: 'regular', pleth: 1, focus: '' };
  var col = {};

  /* Direction 2: one bright trace colour for every wave; focus is shown by
     dimming the others, not by colour, so the instrument stays monochrome */
  function readColours() {
    var cs = getComputedStyle(document.documentElement);
    col.trace = cs.getPropertyValue('--trace').trim() || '#f2ede4';
    col.dim = cs.getPropertyValue('--trace-dim').trim() || '#8f8a80';
  }

  function resize() {
    var r = screen.getBoundingClientRect();
    W = Math.max(1, Math.floor(r.width));
    H = Math.max(1, Math.floor(r.height));
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(W * dpr);
    canvas.height = Math.round(H * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    if (reduce.matches) draw(2.0);
  }

  /* bands: ECG top half, pleth middle, respiration bottom */
  function bands() {
    return [
      { key: 'ecg',   y0: 0,          h: H * 0.52, colour: col.trace, label: 'ECG II' },
      { key: 'pleth', y0: H * 0.54,   h: H * 0.26, colour: col.trace, label: 'SpO₂ PLETH' },
      { key: 'resp',  y0: H * 0.82,   h: H * 0.17, colour: col.trace, label: 'RESP' }
    ];
  }

  function sample(key, tx) {
    var hr = state.hr / 60;
    if (key === 'resp') return Math.sin(TAU * tx * state.rr / 60);
    var x = tx * hr;
    var n = Math.floor(x);
    var p = frac(x);
    if (state.rhythm === 'irregular') p = frac(p + 0.22 * jitter(n));
    return key === 'ecg' ? ecgAt(p) : plethAt(p);
  }

  function draw(t) {
    ctx.clearRect(0, 0, W, H);
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    bands().forEach(function (b) {
      var focused = state.focus === b.key;
      var dim = !!state.focus && !focused;
      var yBase = b.key === 'resp' ? b.y0 + b.h * 0.5 : b.y0 + b.h * 0.86;
      var amp = b.key === 'ecg' ? b.h * 0.44
              : b.key === 'pleth' ? b.h * 0.8 * state.pleth
              : b.h * 0.44;

      ctx.save();
      ctx.globalAlpha = dim ? 0.26 : 1;
      ctx.strokeStyle = b.colour;
      ctx.lineWidth = focused ? 2.6 : 1.6;
      ctx.beginPath();
      for (var x = 0; x <= W; x += SAMPLE_PX) {
        var tx = t - (W - x) / PX_PER_SEC;
        var v = sample(b.key, tx);
        var y = yBase - v * amp;
        if (x === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
      }
      ctx.stroke();
      ctx.restore();

    });
  }

  function frame() {
    raf = requestAnimationFrame(frame);
    draw((performance.now() - T0) / 1000);
  }
  function run() {
    if (raf || reduce.matches || !visible || document.hidden) return;
    raf = requestAnimationFrame(frame);
  }
  function stop() {
    if (raf) cancelAnimationFrame(raf);
    raf = 0;
  }

  function syncBeat() {
    if (!beat) return;
    beat.style.animationDuration = (60 / state.hr).toFixed(3) + 's';
  }

  /* events from home.js (readings, focus) and the scenario module */
  document.addEventListener('mx:focus', function (e) {
    state.focus = e.detail.trace || '';
    if (reduce.matches) draw(2.0);
  });
  document.addEventListener('mx:vitals', function (e) {
    var v = e.detail;
    if (!v) {
      state.hr = 72; state.rr = 16; state.rhythm = 'regular'; state.pleth = 1;
    } else {
      state.hr = v.vitals.hr;
      state.rr = v.vitals.rr;
      state.rhythm = v.rhythm || 'regular';
      state.pleth = typeof v.pleth === 'number' ? v.pleth : 1;
    }
    syncBeat();
    if (reduce.matches) draw(2.0);
  });
  document.addEventListener('mx:theme', function () {
    readColours();
    if (reduce.matches) draw(2.0);
  });
  document.addEventListener('visibilitychange', function () {
    if (document.hidden) stop(); else run();
  });

  /* clicking a band selects its reading, the same as tapping the reading */
  canvas.addEventListener('click', function (e) {
    var r = canvas.getBoundingClientRect();
    var y = e.clientY - r.top;
    var trace = y < H * 0.54 ? 'ecg' : y < H * 0.8 ? 'pleth' : 'resp';
    document.dispatchEvent(new CustomEvent('mx:pick', { detail: { trace: trace } }));
  });

  readColours();
  resize();
  syncBeat();
  if (beat && !reduce.matches) beat.classList.add('is-beating');

  if ('ResizeObserver' in window) {
    new ResizeObserver(resize).observe(screen);
  } else {
    window.addEventListener('resize', resize);
  }

  if ('IntersectionObserver' in window) {
    new IntersectionObserver(function (entries) {
      visible = entries[0].isIntersecting;
      if (visible) run(); else stop();
    }).observe(screen);
  } else {
    visible = true;
    run();
  }

  reduce.addEventListener && reduce.addEventListener('change', function () {
    stop();
    if (beat) beat.classList.toggle('is-beating', !reduce.matches);
    if (reduce.matches) draw(2.0); else run();
  });
}
