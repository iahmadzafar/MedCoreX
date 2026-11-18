/* ============================================================
   MedCoreX · the bedside monitor · device.js
   Simulated, not live. For study only, not clinical guidance.

   Every control on the device, and what it does:
     Reading (HR, SpO₂, Resp, Temp, NIBP)  focus its trace, show its meaning
     Trace on the screen                   focus its reading
     Lead label (ECG II)                   cycle II, V1, V5, aVF
     Bed button (Bed 0N)                   move to the next bed (next case)
     Reveal case                           show the case and its ECG features
     Measure BP                            run a cuff measurement (about 3 s)
     Trend strip                           cycle HR, SpO₂ and RR over 60 min
     Alarm LED                             lit when a limit is breached;
                                           tap to silence for 60 s
     Power LED                             standby on or off

   Physiology: each case has target vitals. Values ease toward their
   targets over a few seconds. Coupling: low SpO₂ raises the respiratory
   rate and the heart rate; fever raises the heart rate; low pressure
   weakens the pulse wave.
   ============================================================ */

var TAU = Math.PI * 2;
var PX_PER_SEC = 110;
var TREND_LEN = 60;

function frac(x) { return x - Math.floor(x); }
function gauss(x, m, s) { var d = (x - m) / s; return Math.exp(-0.5 * d * d); }
function sig(x) { return 1 / (1 + Math.exp(-x)); }
function plateau(p, a, b, s) { return sig((p - a) / s) * sig((b - p) / s); }
function hash(i, seed) { return frac(Math.sin(i * 12.9898 + seed * 78.233) * 43758.5453) - 0.5; }

/* the five cases, in bed order. Bed 01 is the reference: normal sinus rhythm */
var CASES = [
  { bed: 'Bed 01', id: 'sinus', ecg: 'sinus', hr: 72, spo2: 98, rr: 16, temp: 36.8, sys: 118, dia: 76, pleth: 1.0,
    name: 'Normal sinus rhythm',
    why: 'Regular rhythm with a P wave before each QRS complex, a narrow QRS and a steady rate. This is the reference: every other bed is a departure from it.',
    category: 'Core Books' },
  { bed: 'Bed 02', id: 'stemi', ecg: 'stemi', hr: 96, spo2: 93, rr: 22, temp: 36.9, sys: 98, dia: 62, pleth: 0.7,
    name: 'STEMI (ST-elevation myocardial infarction)',
    why: 'ST elevation in contiguous leads with a broad, hyperacute T wave. This is an emergency: the target is reperfusion as fast as possible, and the timing is the treatment.',
    category: 'Quick Reference' },
  { bed: 'Bed 03', id: 'nstemi', ecg: 'nstemi', hr: 88, spo2: 95, rr: 20, temp: 37.0, sys: 132, dia: 84, pleth: 0.9,
    name: 'NSTEMI (non-ST-elevation myocardial infarction)',
    why: 'ST depression and T-wave inversion without persistent ST elevation. Troponin and a risk score decide the pathway, not the ECG alone.',
    category: 'Core Books' },
  { bed: 'Bed 04', id: 'flutter', ecg: 'flutter', hr: 150, spo2: 94, rr: 22, temp: 37.1, sys: 110, dia: 70, pleth: 0.85,
    name: 'Atrial flutter with 2:1 conduction',
    why: 'Saw-tooth flutter waves at about 300 a minute, with every second one conducted. The ventricular rate is about 150 and regular, which is why it is easy to mistake for supraventricular tachycardia.',
    category: 'Core Books' },
  { bed: 'Bed 05', id: 'af', ecg: 'af', hr: 118, spo2: 94, rr: 22, temp: 37.0, sys: 104, dia: 66, pleth: 0.6,
    name: 'Atrial fibrillation',
    why: 'No organised P waves, a fibrillating baseline and an irregularly irregular rhythm. The pulse deficit on the pleth is often larger than the ECG suggests. Rate control and stroke-risk assessment follow.',
    category: 'Quick Reference' }
];

var LEADS = [
  { label: 'II', gain: 1.0 },
  { label: 'V1', gain: 0.78 },
  { label: 'V5', gain: 1.12 },
  { label: 'aVF', gain: 0.86 }
];

/* ── waveform shapes ─────────────────────────────────────── */
function qrs(p) {
  return -0.12 * gauss(p, 0.19, 0.008) + 1.0 * gauss(p, 0.225, 0.0065) - 0.2 * gauss(p, 0.262, 0.009);
}
function pwave(p) { return 0.1 * gauss(p, 0.12, 0.025); }
function shape(kind, p) {
  switch (kind) {
    case 'stemi':
      return pwave(p) + qrs(p) + 0.22 * plateau(p, 0.29, 0.37, 0.01) + 0.42 * gauss(p, 0.4, 0.06);
    case 'nstemi':
      return pwave(p) + qrs(p) - 0.14 * plateau(p, 0.29, 0.37, 0.01) - 0.2 * gauss(p, 0.42, 0.05);
    case 'flutter':
    case 'af':
      return qrs(p) + 0.24 * gauss(p, 0.42, 0.05);
    default: /* sinus */
      return pwave(p) + qrs(p) + 0.26 * gauss(p, 0.42, 0.05);
  }
}
function pleth(p) { return 0.95 * gauss(p, 0.2, 0.085) + 0.36 * gauss(p, 0.46, 0.07); }

function ecgSample(kind, tx, phase, beatIdx, seed, gain) {
  var v = shape(kind, phase);
  if (kind === 'flutter') v += 0.06 * (2 * frac(tx * 5) - 1);           /* F waves, 300 a minute */
  if (kind === 'af') v += 0.035 * (Math.sin(tx * 29.3) + 0.6 * Math.sin(tx * 41.7 + 1.3));
  v += 0.012 * Math.sin(tx * 47.1) + 0.02 * Math.sin(tx * 0.9 + seed);  /* noise and baseline wander */
  return v * gain;
}

/* ── the device ──────────────────────────────────────────── */
export function start(root) {
  var screen = root.querySelector('#screen');
  var explain = root.querySelector('#explain');
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
  var canvas = document.createElement('canvas');
  canvas.setAttribute('aria-hidden', 'true');
  screen.appendChild(canvas);
  var ctx = canvas.getContext('2d');
  var W = 1, H = 1, dpr = 1, raf = 0, visible = false, T0 = performance.now();
  var col = { trace: '#f2ede4', dim: '#8f8a80' };

  /* state */
  var bedIndex = 0, leadIndex = 0, trendMetric = 0, focus = '', power = true;
  var override = null;            /* a scenario from the game, or null */
  var silencedUntil = 0, measuring = false, revealed = false;
  var caseStart = 0, caseSeed = 1, beats = [], lastBeatIdx = -1;
  var V = { hr: 72, spo2: 98, rr: 16, temp: 36.8, sys: 118, dia: 76, pleth: 1 };
  var T = { hr: 72, spo2: 98, rr: 16, temp: 36.8, sys: 118, dia: 76, pleth: 1 };
  var nibp = { sys: 118, dia: 76 };
  var hist = { hr: [], spo2: [], rr: [] };

  var $ = function (sel) { return root.querySelector(sel); };
  var readings = [].slice.call(root.querySelectorAll('.reading'));
  var leadBtn = $('#leadBtn'), bedBtn = $('#bedBtn'), bedState = $('#bedState'), leadState = $('#leadState');
  var ledPower = $('#ledPower'), ledAlarm = $('#ledAlarm'), alarmText = $('#alarmText');
  var btnMeasure = $('#btnMeasure'), btnReveal = $('#btnReveal'), revealBox = $('#revealBox');
  var trend = $('#trend'), trendLabel = $('#trendLabel'), trendPath = $('#trendPath');
  var scnTag = $('#scnTag');

  function active() {
    if (override) return override;
    return CASES[bedIndex];
  }
  function current() { return active(); }

  /* ── beats: the R-peak timeline for the current case ───── */
  function resetBeats(now) {
    caseStart = now;
    caseSeed += 1;
    beats = [now - 0.3];
    lastBeatIdx = -1;
  }
  function periodFor(kind, i) {
    var hr = Math.max(30, V.hr);
    if (kind === 'flutter') return 60 / hr;                                  /* regular */
    if (kind === 'af') return (60 / hr) * (1 + 0.3 * 2 * hash(i, caseSeed));  /* irregular */
    return (60 / hr) * (1 + 0.035 * 2 * hash(i, caseSeed));                  /* slight variation */
  }
  function ensureBeats(t) {
    var kind = active().ecg;
    while (beats[beats.length - 1] < t + 2) {
      var i = beats.length;
      beats.push(beats[i - 1] + periodFor(kind, i));
    }
  }
  function locate(t) {
    var lo = 0, hi = beats.length - 2;
    if (t <= beats[0]) return { i: 0, phase: frac((t - beats[0]) / Math.max(0.2, beats[1] - beats[0])) };
    while (lo < hi) {
      var mid = (lo + hi + 1) >> 1;
      if (beats[mid] <= t) lo = mid; else hi = mid - 1;
    }
    var len = beats[lo + 1] - beats[lo];
    return { i: lo, phase: (t - beats[lo]) / len };
  }

  /* ── vitals: targets, easing, coupling, alarms ─────────── */
  function setTargets() {
    var c = active();
    var low = Math.max(0, 92 - c.spo2);
    T.spo2 = c.spo2;
    T.rr = c.rr + low * 1.2;
    T.hr = c.hr + low * 0.8 + Math.max(0, c.temp - 37) * 10;
    T.temp = c.temp;
    T.sys = c.sys;
    T.dia = c.dia;
    T.pleth = c.pleth * (V.sys < 90 ? 0.6 : 1);
  }
  function ease() {
    ['hr', 'spo2', 'rr', 'temp', 'sys', 'dia', 'pleth'].forEach(function (k) {
      V[k] += (T[k] - V[k]) * 0.05;
    });
  }
  function alarmReason() {
    var r = [];
    if (V.spo2 < 90) r.push('SpO₂ low');
    if (V.hr > 130) r.push('HR high');
    if (V.hr < 45) r.push('HR low');
    if (V.rr > 24) r.push('RR high');
    if (V.rr < 10) r.push('RR low');
    if (V.sys < 90) r.push('BP low');
    if (V.temp >= 38) r.push('Temp high');
    return r;
  }
  function fmt(k) {
    if (k === 'temp') return V.temp.toFixed(1);
    return String(Math.round(V[k]));
  }
  function paintReadings() {
    readings.forEach(function (btn) {
      var key = btn.getAttribute('data-vital');
      var main = btn.querySelector('[data-main]');
      var unit = btn.querySelector('[data-unit]');
      if (!power) { main.textContent = '--'; if (unit) unit.textContent = ''; return; }
      if (key === 'nibp') {
        main.textContent = measuring ? 'Measuring…' : Math.round(nibp.sys) + '/' + Math.round(nibp.dia);
        if (unit) unit.textContent = measuring ? '' : '(' + Math.round((nibp.sys + 2 * nibp.dia) / 3) + ')';
      } else {
        main.textContent = fmt(key === 'spo2' ? 'spo2' : key);
      }
    });
  }
  function paintAlarm() {
    var reasons = power ? alarmReason() : [];
    var silenced = Date.now() < silencedUntil;
    var active = reasons.length > 0;
    root.classList.toggle('alarm-active', active && !silenced);
    ledAlarm.setAttribute('aria-pressed', String(active && !silenced));
    if (!active) alarmText.textContent = 'Alarm: none';
    else if (silenced) alarmText.textContent = 'Alarm silenced · ' + reasons.join(', ');
    else alarmText.textContent = 'Alarm · ' + reasons.join(', ');
  }
  function sampleNow() {
    hist.hr.push(V.hr); hist.spo2.push(V.spo2); hist.rr.push(V.rr);
    ['hr', 'spo2', 'rr'].forEach(function (k) { if (hist[k].length > TREND_LEN) hist[k].shift(); });
  }

  function tick() {
    setTargets();
    ease();
    if (!power) { paintReadings(); return; }
    paintReadings();
    paintAlarm();
    if (power) {
      var now = (performance.now() - T0) / 1000;
      ensureBeats(now);
      var idx = locate(now).i;
      if (lastBeatIdx < 0) lastBeatIdx = idx;
    }
  }

  /* ── drawing ───────────────────────────────────────────── */
  function resize() {
    var r = screen.getBoundingClientRect();
    W = Math.max(1, Math.floor(r.width));
    H = Math.max(1, Math.floor(r.height));
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(W * dpr);
    canvas.height = Math.round(H * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    draw((performance.now() - T0) / 1000);
  }
  function draw(t) {
    ctx.clearRect(0, 0, W, H);
    if (!power) return;
    ensureBeats(t);
    var c = active();
    var gain = LEADS[leadIndex].gain;
    var bands = [
      { key: 'ecg', y0: 0, h: H * 0.52, base: H * 0.36 },
      { key: 'pleth', y0: H * 0.54, h: H * 0.26, base: H * 0.54 + H * 0.26 * 0.86 },
      { key: 'resp', y0: H * 0.82, h: H * 0.17, base: H * 0.82 + H * 0.085, amp: H * 0.07 }
    ];
    bands.forEach(function (b) {
      var dim = !!focus && focus !== b.key;
      ctx.save();
      ctx.globalAlpha = dim ? 0.26 : 1;
      ctx.strokeStyle = col.trace;
      ctx.lineWidth = focus === b.key ? 2.6 : 1.6;
      ctx.lineJoin = 'round';
      ctx.beginPath();
      for (var x = 0; x <= W; x += 2) {
        var tx = t - (W - x) / PX_PER_SEC;
        var y;
        if (b.key === 'resp') {
          y = b.base - Math.sin(TAU * tx * V.rr / 60) * b.amp;
        } else {
          var L = locate(tx);
          if (b.key === 'ecg') {
            y = b.base - ecgSample(c.ecg, tx, L.phase, L.i, caseSeed, gain) * H * 0.21;
          } else {
            var deficit = c.ecg === 'af' ? 0.75 + 0.5 * (hash(L.i, caseSeed) + 0.5) : 1;
            y = b.base - pleth(L.phase) * H * 0.19 * deficit * (V.pleth / 1.0);
          }
        }
        if (x === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
      }
      ctx.stroke();
      ctx.restore();
    });
  }

  var rafOn = false;
  function frame() {
    if (!rafOn) return;
    draw((performance.now() - T0) / 1000);
    raf = requestAnimationFrame(frame);
  }
  function runLoop() {
    if (rafOn || reduce.matches || !visible || !power || document.hidden) return;
    rafOn = true;
    raf = requestAnimationFrame(frame);
  }
  function stopLoop() { rafOn = false; if (raf) cancelAnimationFrame(raf); raf = 0; }

  /* ── trend strip ───────────────────────────────────────── */
  var TREND = [
    { key: 'hr', label: 'Heart rate · 60 min', lo: 40, hi: 160, unit: 'bpm' },
    { key: 'spo2', label: 'SpO₂ · 60 min', lo: 85, hi: 100, unit: '%' },
    { key: 'rr', label: 'Resp rate · 60 min', lo: 6, hi: 30, unit: '/min' }
  ];
  function paintTrend() {
    var m = TREND[trendMetric];
    var data = hist[m.key];
    trendLabel.textContent = m.label;
    var d = '';
    data.forEach(function (v, i) {
      var x = data.length < 2 ? 0 : (i / (TREND_LEN - 1)) * 300;
      var y = 36 - ((v - m.lo) / (m.hi - m.lo)) * 32;
      d += (i === 0 ? 'M' : 'L') + x.toFixed(1) + ' ' + y.toFixed(1) + ' ';
    });
    trendPath.setAttribute('d', d);
  }

  /* ── controls ──────────────────────────────────────────── */
  function setFocus(trace) {
    focus = trace || '';
    readings.forEach(function (b) {
      b.setAttribute('aria-pressed', String(!!trace && b.getAttribute('data-trace') === trace));
    });
    if (reduce.matches) draw((performance.now() - T0) / 1000);
  }
  function describe(btn) {
    var k = btn.getAttribute('data-vital');
    return btn.getAttribute('data-why') || '';
  }

  readings.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var on = btn.getAttribute('aria-pressed') === 'true';
      if (on) { setFocus(''); explain.textContent = 'Tap a reading or a trace to see what it shows.'; return; }
      setFocus(btn.getAttribute('data-trace'));
      explain.textContent = describe(btn);
    });
  });

  canvas.addEventListener('click', function (e) {
    var r = canvas.getBoundingClientRect();
    var y = e.clientY - r.top;
    var trace = y < H * 0.54 ? 'ecg' : y < H * 0.8 ? 'pleth' : 'resp';
    var btn = root.querySelector('.reading[data-trace="' + trace + '"]');
    if (btn) btn.click();
  });

  leadBtn.addEventListener('click', function () {
    leadIndex = (leadIndex + 1) % LEADS.length;
    leadBtn.textContent = 'ECG ' + LEADS[leadIndex].label;
    leadState.textContent = 'Lead ' + LEADS[leadIndex].label;
    explain.textContent = 'Lead ' + LEADS[leadIndex].label + ' is on screen. Each lead views the heart from a different angle.';
    if (reduce.matches) draw((performance.now() - T0) / 1000);
  });

  function setBed(index, announce) {
    bedIndex = index;
    override = null;
    scnTag.hidden = true;
    var c = CASES[bedIndex];
    bedBtn.textContent = c.bed;
    bedState.textContent = 'Demo';
    revealed = false;
    revealBox.hidden = true;
    btnReveal.setAttribute('aria-expanded', 'false');
    resetBeats((performance.now() - T0) / 1000);
    if (announce) {
      explain.textContent = c.bed + ' is loaded. Read the waveform and the vitals, then reveal the case.';
    }
    measureNow(true);
  }
  bedBtn.addEventListener('click', function () {
    setBed((bedIndex + 1) % CASES.length, true);
  });

  btnReveal.addEventListener('click', function () {
    revealed = !revealed;
    var c = CASES[bedIndex];
    revealBox.hidden = !revealed;
    btnReveal.setAttribute('aria-expanded', String(revealed));
    btnReveal.textContent = revealed ? 'Hide the case' : 'Reveal the case';
    if (revealed) {
      revealBox.innerHTML = '';
      var h = document.createElement('p'); h.className = 'reveal-name'; h.textContent = c.name;
      var w = document.createElement('p'); w.className = 'reveal-why'; w.textContent = c.why;
      var s = document.createElement('p'); s.className = 'reveal-study'; s.textContent = 'For study only, not clinical guidance.';
      revealBox.appendChild(h); revealBox.appendChild(w); revealBox.appendChild(s);
    }
  });

  function measureNow(auto) {
    if (measuring || !power) return;
    measuring = true;
    paintReadings();
    explain.textContent = auto ? 'Automatic blood pressure reading in progress.' : 'Measuring blood pressure. Keep still.';
    setTimeout(function () {
      var c = active();
      nibp.sys = Math.round(V.sys + (Math.random() * 6 - 3));
      nibp.dia = Math.round(V.dia + (Math.random() * 4 - 2));
      measuring = false;
      paintReadings();
      explain.textContent = 'Blood pressure ' + nibp.sys + '/' + nibp.dia + ' mmHg, mean about ' + Math.round((nibp.sys + 2 * nibp.dia) / 3) + '.';
    }, 3200);
  }
  $('#btnMeasure').addEventListener('click', function () { measureNow(false); });

  trend.addEventListener('click', function () {
    trendMetric = (trendMetric + 1) % TREND.length;
    paintTrend();
  });

  ledAlarm.addEventListener('click', function () {
    if (!alarmReason().length) { explain.textContent = 'No limit is breached right now.'; return; }
    silencedUntil = Date.now() + 60000;
    paintAlarm();
    explain.textContent = 'Alarm silenced for 60 seconds. It returns if the condition is still present.';
  });

  ledPower.addEventListener('click', function () {
    power = !power;
    root.classList.toggle('standby', !power);
    ledPower.setAttribute('aria-pressed', String(power));
    bedState.textContent = power ? 'Demo' : 'Standby';
    if (power) { resetBeats((performance.now() - T0) / 1000); runLoop(); draw((performance.now() - T0) / 1000); }
    explain.textContent = power ? 'Monitor on.' : 'Standby. Traces and readings are paused.';
  });


  /* a scenario from the game drives the same device */
  document.addEventListener('mx:vitals', function (e) {
    var d = e.detail;
    if (!d) {
      override = null;
      root.classList.remove('in-scenario');
      scnTag.hidden = true;
      bedState.textContent = 'Demo';
      setBed(bedIndex, false);
      return;
    }
    var v = d.vitals;
    override = {
      bed: 'Scenario', id: 'scenario', ecg: d.rhythm === 'irregular' ? 'af' : 'sinus',
      hr: v.hr, spo2: v.spo2, rr: v.rr, temp: v.temp, sys: v.sys, dia: v.dia,
      pleth: typeof d.pleth === 'number' ? d.pleth : 1, caseRef: null
    };
    override.caseRef = override;
    root.classList.add('in-scenario');
    scnTag.hidden = false;
    bedState.textContent = 'Scenario';
    revealed = false; revealBox.hidden = true;
    resetBeats((performance.now() - T0) / 1000);
    nibp.sys = v.sys; nibp.dia = v.dia;
  });

  /* ── start ─────────────────────────────────────────────── */
  var seeded = CASES[0];
  V.hr = seeded.hr; V.spo2 = seeded.spo2; V.rr = seeded.rr; V.temp = seeded.temp;
  V.sys = seeded.sys; V.dia = seeded.dia; V.pleth = seeded.pleth;
  T = Object.assign({}, V);
  nibp.sys = seeded.sys; nibp.dia = seeded.dia;
  for (var k = 0; k < TREND_LEN; k++) { hist.hr.push(V.hr); hist.spo2.push(V.spo2); hist.rr.push(V.rr); }
  resetBeats(0);
  paintTrend();
  paintReadings();

  window.addEventListener('resize', resize);
  if ('ResizeObserver' in window) new ResizeObserver(resize).observe(screen);
  resize();

  setInterval(tick, 200);
  setInterval(function () { sampleNow(); paintTrend(); }, 1000);
  setInterval(function () { if (power && !measuring && Date.now() % 60000 < 200) measureNow(true); }, 1000);

  if ('IntersectionObserver' in window) {
    new IntersectionObserver(function (entries) {
      visible = entries[0].isIntersecting;
      if (visible) runLoop(); else stopLoop();
    }).observe(screen);
  } else { visible = true; runLoop(); }

  reduce.addEventListener && reduce.addEventListener('change', function () {
    stopLoop();
    if (reduce.matches) draw((performance.now() - T0) / 1000); else runLoop();
  });
  document.addEventListener('visibilitychange', function () { if (document.hidden) stopLoop(); else runLoop(); });

  /* the bed button and the read-out start from the reference case */
  bedBtn.textContent = CASES[0].bed;
  leadBtn.textContent = 'ECG ' + LEADS[0].label;
  leadState.textContent = 'Lead ' + LEADS[0].label;
  ledPower.setAttribute('aria-pressed', 'true');
  ledAlarm.setAttribute('aria-pressed', 'false');
  btnReveal.textContent = 'Reveal the case';
}

/* load on the page: a single module, started once the device exists */
var root = document.getElementById('monitor');
if (root) start(root);
