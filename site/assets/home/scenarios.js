/* ============================================================
   MedCoreX · "Read the monitor" · scenarios.js (lazy, on click)
   Puts the monitor into a clinical scenario, asks which reading
   pattern it shows (4 options), then explains the answer and ties
   it to a library category. Loads content/scenarios.json.
   Nothing is saved: scores live only for this visit.
   For study only, not clinical guidance.
   ============================================================ */
function slugify(s) { return s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''); }

function el(tag, attrs, text) {
  var n = document.createElement(tag);
  if (attrs) Object.keys(attrs).forEach(function (k) { n.setAttribute(k, attrs[k]); });
  if (text != null) n.textContent = text;
  return n;
}

export async function start(opts) {
  var slot = opts.slot;
  var dispatch = opts.dispatch;
  if (!slot) return;
  slot.innerHTML = '';

  var data;
  try {
    data = await (await fetch('/content/scenarios.json', { cache: 'no-cache' })).json();
  } catch (e) {
    slot.appendChild(el('p', { class: 'study-note', style: 'margin-top:12px' }, 'Scenarios could not load. The monitor still works.'));
    return;
  }

  var list = data.scenarios.slice();
  for (var i = list.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var tmp = list[i]; list[i] = list[j]; list[j] = tmp;
  }
  var pos = 0;
  var correct = 0;
  var answered = 0;

  var card = el('section', { class: 'game', 'aria-labelledby': 'scnTitle' });
  slot.appendChild(card);

  function close() {
    dispatch(null);
    slot.innerHTML = '';
  }

  function render() {
    var s = list[pos];
    dispatch({ vitals: s.vitals, rhythm: s.rhythm, pleth: s.pleth, title: s.title });

    card.innerHTML = '';
    var head = el('header', { class: 'game-head' });
    head.appendChild(el('span', null, 'Read the monitor'));
    head.appendChild(el('span', null, (pos + 1) + ' of ' + list.length));
    card.appendChild(head);

    var h = el('h3', { id: 'scnTitle', tabindex: '-1' }, s.title);
    card.appendChild(h);
    card.appendChild(el('p', { class: 'lead' }, 'This is what the monitor shows. Which pattern fits?'));

    var opts = el('div', { class: 'options', role: 'group', 'aria-label': 'Answer options' });
    var done = false;
    s.options.forEach(function (text, k) {
      var b = el('button', { class: 'opt', type: 'button' }, text);
      b.addEventListener('click', function () {
        if (done) return;
        done = true;
        answered++;
        var right = k === s.answer;
        if (right) correct++;
        opts.querySelectorAll('button').forEach(function (x, kk) {
          x.disabled = true;
          if (kk === s.answer) x.classList.add('right');
          else if (kk === k) x.classList.add('wrong');
        });
        showVerdict(right, k);
      });
      opts.appendChild(b);
    });
    card.appendChild(opts);
    card.appendChild(el('div', { class: 'verdict', hidden: '', 'aria-live': 'polite' }));

    var foot = el('div', { class: 'game-foot' });
    var lbl = el('span', { class: 'study-note' }, 'For study only, not clinical guidance');
    var actions = el('div', { style: 'display:flex;gap:8px;flex-wrap:wrap' });
    var closeBtn = el('button', { class: 'game-dismiss', type: 'button' }, 'Close ×');
    closeBtn.addEventListener('click', close);
    actions.appendChild(closeBtn);
    foot.appendChild(lbl);
    foot.appendChild(actions);
    card.appendChild(foot);

    function showVerdict(right, k) {
      var v = card.querySelector('.verdict');
      v.hidden = false;
      v.className = 'verdict' + (right ? '' : ' bad');
      v.innerHTML = '';
      v.appendChild(el('strong', null, right ? 'Correct.' : 'Not quite. The answer is: ' + s.options[s.answer]));
      v.appendChild(el('p', { style: 'margin-top:6px' }, s.why));
      var link = el('a', { class: 'cat', href: '/library#' + slugify(s.category) }, 'Study this in: ' + s.category + ' ↗');
      v.appendChild(link);

      var nextBtn = el('button', { class: 'btn btn-primary btn-small', type: 'button' },
        pos + 1 < list.length ? 'Next scenario →' : 'See the score');
      nextBtn.addEventListener('click', function () {
        if (pos + 1 < list.length) { pos++; render(); }
        else { summary(); }
      });
      foot.insertBefore(nextBtn, actions);
      nextBtn.focus();
    }
  }

  function summary() {
    card.innerHTML = '';
    var head = el('header', { class: 'game-head' });
    head.appendChild(el('span', null, 'Read the monitor'));
    head.appendChild(el('span', null, 'complete'));
    card.appendChild(head);
    card.appendChild(el('h3', { id: 'scnTitle', tabindex: '-1' }, 'You read ' + correct + ' of ' + answered + ' right.'));
    card.appendChild(el('p', { class: 'lead' }, 'Go back over the cases you missed and work out what you should have seen.'));
    var row = el('div', { class: 'game-foot' });
    var again = el('button', { class: 'btn btn-ghost btn-small', type: 'button' }, 'Run the cases again');
    again.addEventListener('click', function () { start(opts); });
    var closeBtn = el('button', { class: 'game-dismiss', type: 'button' }, 'Close ×');
    closeBtn.addEventListener('click', close);
    row.appendChild(again); row.appendChild(closeBtn);
    card.appendChild(row);
    dispatch(null);
    card.querySelector('h3').focus();
  }

  render();
  card.querySelector('h3').focus({ preventScroll: true });
}
