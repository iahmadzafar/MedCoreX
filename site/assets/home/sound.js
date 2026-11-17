/* ============================================================
   MedCoreX · device sound · sound.js
   Every effect is synthesised with the Web Audio API, so there are
   no audio files and no licence to track. Sound starts only after a
   visitor interacts (browsers block autoplay), and it is off until
   the visitor turns it on. Mute is always one tap away.
   ============================================================ */

let ctx = null;
let master = null;
let on = false;
let noiseBuf = null;

function ensure() {
  if (ctx) return ctx;
  var AC = window.AudioContext || window.webkitAudioContext;
  if (!AC) return null;
  ctx = new AC();
  master = ctx.createGain();
  master.gain.value = 0.5;
  master.connect(ctx.destination);
  noiseBuf = ctx.createBuffer(1, ctx.sampleRate * 1.5, ctx.sampleRate);
  var d = noiseBuf.getChannelData(0);
  for (var i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
  return ctx;
}

export function isOn() { return on; }

export function setOn(v) {
  on = !!v;
  if (on) { ensure(); if (ctx && ctx.state === 'suspended') ctx.resume(); }
  return on;
}

/* one shaped tone: frequency, duration, type, peak level, start delay */
function tone(freq, dur, type, peak, delay) {
  if (!on || !ensure()) return;
  var t0 = ctx.currentTime + (delay || 0);
  var o = ctx.createOscillator();
  var g = ctx.createGain();
  o.type = type || 'sine';
  o.frequency.setValueAtTime(freq, t0);
  g.gain.setValueAtTime(0.0001, t0);
  g.gain.exponentialRampToValueAtTime(peak || 0.4, t0 + 0.005);
  g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
  o.connect(g).connect(master);
  o.start(t0);
  o.stop(t0 + dur + 0.02);
}

/* a short, soft key click: pressing any control */
export function click() {
  tone(1500, 0.022, 'square', 0.06);
}

/* the pulse tone: one short beep on each heartbeat */
export function beat(strong) {
  tone(strong ? 1040 : 980, 0.06, 'sine', strong ? 0.35 : 0.25);
}

/* a double chirp: moving to another bed or case */
export function chirp() {
  tone(660, 0.06, 'sine', 0.22);
  tone(990, 0.09, 'sine', 0.22, 0.09);
}

/* the blood pressure cuff: a filtered noise sweep while it inflates */
export function cuff() {
  if (!on || !ensure()) return;
  var t0 = ctx.currentTime;
  var src = ctx.createBufferSource();
  src.buffer = noiseBuf;
  var bp = ctx.createBiquadFilter();
  bp.type = 'bandpass';
  bp.Q.value = 3;
  bp.frequency.setValueAtTime(260, t0);
  bp.frequency.linearRampToValueAtTime(520, t0 + 2.6);
  var g = ctx.createGain();
  g.gain.setValueAtTime(0.0001, t0);
  g.gain.exponentialRampToValueAtTime(0.16, t0 + 0.3);
  g.gain.linearRampToValueAtTime(0.16, t0 + 2.4);
  g.gain.exponentialRampToValueAtTime(0.0001, t0 + 3.0);
  src.connect(bp).connect(g).connect(master);
  src.start(t0);
  src.stop(t0 + 3.05);
}

/* the alarm: two alternating tones, a few cycles, then it stops */
export function alarm(cycles) {
  var n = cycles || 3;
  for (var i = 0; i < n; i++) {
    tone(880, 0.22, 'square', 0.12, i * 0.5);
    tone(660, 0.22, 'square', 0.12, i * 0.5 + 0.25);
  }
}

/* the reading is recorded: a soft confirm tone */
export function confirm() {
  tone(784, 0.1, 'sine', 0.2);
  tone(1175, 0.16, 'sine', 0.2, 0.1);
}
