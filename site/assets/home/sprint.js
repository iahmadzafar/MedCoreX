/* ============================================================
   MedCoreX · 60-second sprint · sprint.js (lazy, on click)
   Five quick MCQs against one clock (60 seconds, monitor-styled
   countdown). Ends with the score, time used, best score and
   "your misses": each miss gets a box to write the discriminator
   in your own words (Rule 03). Loads content/questions.json.
   For study only, not clinical guidance.
   ============================================================ */
import { recordAnswer, saveBest, saveNote } from './streak.js';

var DUR = 60;

function el(tag, attrs, text) {
  var n = document.createElement(tag);
  if (attrs) Object.keys(attrs).forEach(function (k) { n.setAttribute(k, attrs[k]); });
  if (text != null) n.textContent = text;
  return n;
}
function slugify(s) { return s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''); }

export async function start(opts) {
  var slot = opts.slot;
  if (!slot) return;
  slot.innerHTML = '';

  var data;
  try {
    data = await (await fetch('/content/questions.json', { cache: 'no-cache' })).json();
  } catch (e) {
    slot.appendChild(el('p', { class: 'study-note', style: 'margin-top:12px' }, 'The sprint could not load. The rest of the page works.'));
    return;
  }
  var qs = data.questions.slice(0, 5);

  var card = el('section', { class: 'game', 'aria-labelledby': 'sprintH' });
  slot.appendChild(card);

  var timerEl = null, barEl = null, timerId = null, startAt = 0, qIndex = 0, score = 0, locked = false, finished = false;
  var misses = [];

  function clock() {
    var elapsed = (performance.now() - startAt) / 1000;
    return Math.max(0, DUR - elapsed);
  }

  function header(right) {
    var head = el('header', { class: 'game-head' });
    head.appendChild(el('span', null, '60-second sprint'));
    head.appendChild(el('span', null, right));
    return head;
  }

  function intro() {
    card.innerHTML = '';
    card.appendChild(header('5 questions'));
    card.appendChild(el('h3', { id: 'sprintH', tabindex: '-1' }, 'Sixty seconds. Five questions.'));
    card.appendChild(el('p', { class: 'lead' }, 'The clock starts when you press start. Answer what you know. Every miss is written down.'));
    var b = el('button', { class: 'btn btn-primary btn-small', type: 'button', style: 'margin-top:14px' }, 'Start the clock');
    b.addEventListener('click', begin);
    card.appendChild(b);
    card.querySelector('h3').focus({ preventScroll: true });
  }

  function begin() {
    qIndex = 0; score = 0; misses = []; finished = false; locked = false;
    startAt = performance.now();
    card.innerHTML = '';
    card.appendChild(header('running'));
    var clockRow = el('div', { style: 'display:flex;justify-content:space-between;align-items:flex-end;gap:12px;margin-top:14px' });
    timerEl = el('div', { class: 'timer', role: 'timer', 'aria-live': 'off', 'aria-label': 'Seconds remaining' }, String(DUR));
    clockRow.appendChild(timerEl);
    card.appendChild(clockRow);
    var track = el('div', { class: 'timer-bar' });
    barEl = el('span', null);
    track.appendChild(barEl);
    card.appendChild(track);
    card.appendChild(el('div', { id: 'sprintQ' }));
    timerId = setInterval(tick, 100);
    tick();
    ask();
  }

  function tick() {
    var left = clock();
    timerEl.textContent = String(Math.ceil(left));
    barEl.style.transform = 'scaleX(' + (left / DUR).toFixed(4) + ')';
    var low = left <= 10;
    timerEl.classList.toggle('low', low);
    barEl.parentNode.classList.toggle('low', low);
    if (left <= 0) finish(true);
  }

  function ask() {
    var q = qs[qIndex];
    var box = card.querySelector('#sprintQ');
    box.innerHTML = '';
    if (!q) { finish(false); return; }
    box.appendChild(el('p', { style: 'margin-top:14px;font-weight:600' }, (qIndex + 1) + '/' + qs.length + '  ' + q.stem));
    var opts = el('div', { class: 'options' });
    q.options.forEach(function (text, k) {
      var b = el('button', { class: 'opt', type: 'button' }, text);
      b.addEventListener('click', function () {
        if (locked) return;
        locked = true;
        var right = k === q.answer;
        if (right) score++;
        opts.querySelectorAll('button').forEach(function (x, kk) {
          x.disabled = true;
          if (kk === q.answer) x.classList.add('right');
          else if (kk === k) x.classList.add('wrong');
        });
        var at = recordAnswer({ kind: 'sprint', id: q.id, correct: right, stem: q.stem, picked: text, right: q.options[q.answer], why: q.why, cat: q.category });
        if (!right) misses.push({ at: at, stem: q.stem, picked: text, right: q.options[q.answer], why: q.why, cat: q.category });
        qIndex++;
        setTimeout(function () {
          if (finished) return;
          locked = false;
          if (qIndex >= qs.length) finish(false); else ask();
        }, 650);
      });
      opts.appendChild(b);
    });
    box.appendChild(opts);
  }

  function finish(timedOut) {
    if (finished) return;
    finished = true;
    clearInterval(timerId);
    timerId = null;
    locked = false;
    /* questions the clock ran out on count as misses: the question returns */
    for (var i = qIndex; i < qs.length && timedOut; i++) {
      var q = qs[i];
      var at = recordAnswer({ kind: 'sprint', id: q.id, correct: false, stem: q.stem, picked: '(no answer in time)', right: q.options[q.answer], why: q.why, cat: q.category });
      misses.push({ at: at, stem: q.stem, picked: '(no answer in time)', right: q.options[q.answer], why: q.why, cat: q.category });
    }
    var used = Math.min(DUR, Math.round((performance.now() - startAt) / 1000));
    var best = saveBest(score);

    card.innerHTML = '';
    card.appendChild(header('result'));
    card.appendChild(el('h3', { id: 'sprintH', tabindex: '-1' }, timedOut ? 'Time is up.' : 'Sprint complete.'));
    var stats = el('div', { style: 'display:flex;gap:24px;flex-wrap:wrap;margin-top:12px' });
    stats.appendChild(statBox(score + '/' + qs.length, 'Score'));
    stats.appendChild(statBox(used + 's', 'Time used'));
    stats.appendChild(statBox(best + '/' + qs.length, 'Best'));
    card.appendChild(stats);

    card.appendChild(el('p', { class: 'lead', style: 'margin-top:14px' },
      misses.length ? 'Your misses. Write the discriminator in your own words. The question returns and takes the mark if you skip it.' : 'No misses. Keep the standard: every answer you give has a reason you can name.'));

    if (misses.length) {
      var ul = el('ul', { class: 'misses' });
      misses.forEach(function (m) {
        var li = el('li', null);
        li.appendChild(el('div', null, m.stem));
        li.appendChild(el('div', { class: 'muted', style: 'margin-top:6px' }, 'You picked: ' + m.picked));
        li.appendChild(el('div', { style: 'margin-top:4px' }, 'Right: ' + m.right));
        var lbl = el('label', { for: 'note' + m.at }, 'In your own words: the discriminator');
        li.appendChild(lbl);
        var ta = el('textarea', { id: 'note' + m.at, placeholder: 'The one thing that separated the right answer…' });
        ta.addEventListener('change', function () { saveNote(m.at, ta.value); });
        li.appendChild(ta);
        li.appendChild(el('p', { class: 'study-note', style: 'margin-top:6px' }, m.why));
        li.appendChild(el('a', { class: 'verdict cat', href: '/library#' + slugify(m.cat), style: 'display:inline-block;margin-top:6px;font-family:var(--f-mono);font-size:.8rem;text-transform:uppercase;letter-spacing:.06em;color:var(--ecg)' }, 'Study this in: ' + m.cat + ' ↗'));
        ul.appendChild(li);
      });
      card.appendChild(ul);
    }

    var row = el('div', { class: 'game-foot' });
    var again = el('button', { class: 'btn btn-ghost btn-small', type: 'button' }, 'Run it again');
    again.addEventListener('click', function () { start(opts); });
    var close = el('button', { class: 'game-dismiss', type: 'button' }, 'Close ×');
    close.addEventListener('click', function () { slot.innerHTML = ''; });
    row.appendChild(again); row.appendChild(close);
    card.appendChild(row);
    card.querySelector('h3').focus({ preventScroll: true });
  }

  function statBox(value, label) {
    var d = el('div', null);
    d.appendChild(el('div', { class: 'result-big' }, value));
    d.appendChild(el('div', { class: 'study-note' }, label));
    return d;
  }

  intro();
}
