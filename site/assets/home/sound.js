/* ============================================================
   MedCoreX · device sound · sound.js

   The sound effects are real recordings from SFX Jar's CC0 1.0
   hospital set (https://sfxjar.com/hospital/). CC0 needs no
   attribution, but the source is credited here anyway.

   Recorded files, loaded only when sound is switched on:
     synth-ekg-72.mp3    bed / case change
     0456.mp3            alarm tone
     2504.mp3            blood pressure cuff
     synth-ekg-flatline  standby

   Two tiny effects stay synthesised because no recording in the pack
   fits them: the tap click and the per-beat pulse beep, which follows
   the heart rate shown on the display.

   Sound never starts by itself: browsers block autoplay, and the
   visitor has to switch it on.
   ============================================================ */

var BASE = '/assets/home/audio/';
var FILES = {
  case: 'synth-ekg-72.mp3',
  alarm: '0456.mp3',
  cuff: '2504.mp3',
  standby: 'synth-ekg-flatline.mp3'
};

var on = false;
var players = {};
var timers = {};
var ctx = null;

function ensurePlayers() {
  if (Object.keys(players).length) return;
  Object.keys(FILES).forEach(function (k) {
    var a = new Audio(BASE + FILES[k]);
    a.preload = 'auto';
    a.volume = k === 'cuff' ? 0.5 : 0.65;
    players[k] = a;
  });
}

/* play a named sample for at most `dur` seconds */
function play(name, dur, vol) {
  if (!on) return;
  ensurePlayers();
  var a = players[name];
  if (!a) return;
  try {
    a.pause();
    a.currentTime = 0;
    if (typeof vol === 'number') a.volume = vol;
    var p = a.play();
    if (p && p.catch) p.catch(function () {});
    clearTimeout(timers[name]);
    if (dur) timers[name] = setTimeout(function () { try { a.pause(); } catch (e) {} }, dur * 1000);
  } catch (e) {}
}

export function isOn() { return on; }

export function setOn(v) {
  on = !!v;
  if (on) ensurePlayers();
  else {
    Object.keys(players).forEach(function (k) {
      try { players[k].pause(); players[k].currentTime = 0; } catch (e) {}
      clearTimeout(timers[k]);
    });
  }
  return on;
}

/* a short, soft key click: pressed on every control (too small for a file) */
function tone(freq, dur, type, peak, delay) {
  if (!on) return;
  try {
    var AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    if (!ctx) ctx = new AC();
    var t0 = ctx.currentTime + (delay || 0);
    var o = ctx.createOscillator();
    var g = ctx.createGain();
    o.type = type || 'sine';
    o.frequency.setValueAtTime(freq, t0);
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(peak || 0.4, t0 + 0.005);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    o.connect(g).connect(ctx.destination);
    o.start(t0);
    o.stop(t0 + dur + 0.02);
  } catch (e) {}
}

export function click() { tone(1500, 0.022, 'square', 0.05); }
export function beat() { tone(1020, 0.055, 'sine', 0.28); }

/* moving to another bed or case: a stretch of the recorded 72 bpm monitor */
export function chirp() { play('case', 1.4, 0.5); }

/* the blood pressure cuff, trimmed to the length of a measurement */
export function cuff() { play('cuff', 3.2, 0.55); }

/* an alarm is breached: two bursts of the recorded ECG beep */
export function alarm() {
  play('alarm', 1.2, 0.5);
  setTimeout(function () { play('alarm', 1.2, 0.5); }, 1600);
}

/* monitor goes into standby */
export function standby() { play('standby', 2.2, 0.45); }

export function confirm() {
  tone(784, 0.1, 'sine', 0.18);
  tone(1175, 0.16, 'sine', 0.18, 0.1);
}
