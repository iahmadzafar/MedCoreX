/* MedCORE account + progress sync (account is source of truth; localStorage is the cache).
   Self-contained: works on every page. Include it with a deferred script tag: src="/medcore-sync.js". */
(function () {
  'use strict';
  var API = '/api';
  var PREFIXES = ['ts-prog-2', 'ts-session-2', 'medcore.', 'adversary.'];
  function syncable(k) { for (var i = 0; i < PREFIXES.length; i++) if (k === PREFIXES[i] || k.indexOf(PREFIXES[i]) === 0) return true; return false; }

  var MED = window.MEDCORE = window.MEDCORE || {};
  MED.user = null;

  function collect() {
    var d = {};
    for (var i = 0; i < localStorage.length; i++) {
      var k = localStorage.key(i);
      if (k && syncable(k)) d[k] = localStorage.getItem(k);
    }
    return d;
  }

  var pushT = null;
  function push() {
    if (!MED.user) return;
    var data = collect();
    if (!Object.keys(data).length) return;
    return fetch(API + '/progress', {
      method: 'PUT', credentials: 'include',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ data: data })
    }).catch(function () {});
  }
  function schedulePush() { clearTimeout(pushT); pushT = setTimeout(push, 1500); }

  // Auto-push whenever a progress key is written (wrap setItem; fall back cleanly).
  try {
    var _set = localStorage.setItem.bind(localStorage);
    localStorage.setItem = function (k, v) { _set(k, v); if (syncable(k)) schedulePush(); };
  } catch (e) {}

  // Push on leave / tab-hide too.
  window.addEventListener('pagehide', push);
  document.addEventListener('visibilitychange', function () { if (document.hidden) push(); });
  // Backstop: guaranteed periodic sync even if the setItem wrap is unavailable.
  setInterval(function () { if (MED.user) push(); }, 15000);

  function pull() {
    return fetch(API + '/progress', { credentials: 'include' })
      .then(function (r) { return r.json(); })
      .then(function (p) {
        if (!p || !p.ok || !p.data) return;
        for (var k in p.data) { try { localStorage.setItem(k, p.data[k]); } catch (e) {} }
        document.dispatchEvent(new CustomEvent('medcore:synced'));
      }).catch(function () {});
  }

  function checkAuth() {
    return fetch(API + '/me', { credentials: 'include' })
      .then(function (r) { return r.json(); })
      .then(function (j) {
        if (j && j.ok && j.user) {
          MED.user = j.user;
          // First sign-in: if the account is empty, seed it from local progress (migration).
          return fetch(API + '/progress', { credentials: 'include' }).then(function (r) { return r.json(); }).then(function (p) {
            if (!p || !p.data || !Object.keys(p.data).length) return push();
            return pull();
          }).then(function () { renderBtn(); });
        }
        renderBtn();
      }).catch(function () { renderBtn(); });
  }

  function signIn(email, password, isNew) {
    return fetch(API + (isNew ? '/register' : '/login'), {
      method: 'POST', credentials: 'include',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ email: email, password: password })
    }).then(function (r) { return r.json(); }).then(function (j) {
      if (!j.ok) throw new Error(j.error || 'Failed');
      MED.user = j.user;
      return push(); // push local → account, then adopt account state
    }).then(function () { return pull(); });
  }
  function signOut() {
    return fetch(API + '/logout', { method: 'POST', credentials: 'include' }).then(function () { MED.user = null; });
  }

  // ── account UI (self-contained, theme-agnostic) ──
  var btn, modal;
  function el(tag, css, html) { var e = document.createElement(tag); e.style.cssText = css; if (html != null) e.innerHTML = html; return e; }
  function renderBtn() {
    if (!btn) return;
    btn.textContent = MED.user ? '●' : 'Sign in';
    btn.title = MED.user ? (MED.user.email + ' — signed in') : 'Sign in to sync your progress';
    btn.style.background = MED.user ? 'var(--ok, #4E9A6A)' : 'var(--a1, var(--amber, #B58AD6))';
  }
  function buildUI() {
    if (document.getElementById('medcore-acct')) return;
    var cssBtn = 'position:fixed;right:16px;bottom:16px;z-index:2147483000;appearance:none;border:0;cursor:pointer;' +
      'font:600 12px/1 "JetBrains Mono",ui-monospace,monospace;letter-spacing:.04em;color:#0B0C0E;padding:11px 15px;border-radius:0;' +
      'box-shadow:0 6px 24px rgba(0,0,0,.35)';
    btn = el('button', cssBtn); btn.id = 'medcore-acct';
    document.body.appendChild(btn);
    btn.addEventListener('click', function () { openModal(); });

    var cssWrap = 'position:fixed;inset:0;z-index:2147483600;display:none;align-items:center;justify-content:center;' +
      'background:rgba(0,0,0,.55);font-family:"Plus Jakarta Sans",-apple-system,sans-serif';
    modal = el('div', cssWrap); modal.id = 'medcore-acct-modal';
    modal.innerHTML =
      '<div style="width:min(380px,92vw);background:var(--panel, #141619);border:1px solid var(--line, #23262B);color:var(--chalk, #EDEFF2);padding:24px">' +
        '<div style="font:700 15px/1.2 inherit;margin-bottom:4px" id="mcTitle">Sign in</div>' +
        '<div style="font-size:13px;color:var(--muted, #8A919B);margin-bottom:16px">Your progress syncs to your account — sign in on any device and continue where you left off.</div>' +
        '<a id="mcGoogle" href="#" style="display:flex;align-items:center;justify-content:center;gap:9px;text-decoration:none;background:#fff;color:#1a1a1a;font:600 14px/1 inherit;padding:12px;border:1px solid #dadce0;margin-bottom:14px">' +
          '<svg width="16" height="16" viewBox="0 0 48 48" aria-hidden="true"><path fill="#4285F4" d="M45 24c0-1.6-.1-3.1-.4-4.5H24v8.5h11.8C35.3 30.9 33.2 33.4 30.3 35v4h4.8C40.7 34.4 45 29.7 45 24z"/><path fill="#34A853" d="M24 46c5.4 0 9.9-1.8 13.2-4.9l-4.8-4c-1.4.9-3.2 1.5-5.4 1.5-4.2 0-7.7-2.8-9-6.6H13v4.1C16.2 41.6 19.8 46 24 46z"/><path fill="#FBBC05" d="M15 31.9c-.5-1.4-.8-2.9-.8-4.4s.3-3 .8-4.4V19H13c-1.3 2.6-2 5.6-2 8.9s.7 6.3 2 8.9l2-4.9z"/><path fill="#EA4335" d="M24 13.6c2.9 0 5.5 1 7.6 2.9l5.4-5.4C33.9 7.7 29.4 6 24 6c-4.2 0-7.8 2.4-9.6 6l4.8 4c1.3-3.8 4.8-6.4 9-6.4z"/></svg>' +
          'Continue with Google</a>' +
        '<div style="text-align:center;font-size:11px;color:var(--muted, #8A919B);letter-spacing:.1em;text-transform:uppercase;margin-bottom:12px">or</div>' +
        '<input id="mcEmail" type="email" placeholder="Email" autocomplete="username" style="width:100%;box-sizing:border-box;padding:11px 12px;margin-bottom:8px;background:var(--ground, #0B0C0E);border:1px solid var(--line-2, #2B2F35);color:inherit;font:inherit;font-size:14px;border-radius:0">' +
        '<input id="mcPass" type="password" placeholder="Password" autocomplete="current-password" style="width:100%;box-sizing:border-box;padding:11px 12px;margin-bottom:6px;background:var(--ground, #0B0C0E);border:1px solid var(--line-2, #2B2F35);color:inherit;font:inherit;font-size:14px;border-radius:0">' +
        '<div id="mcErr" style="color:var(--coral, #C05A5A);font-size:12.5px;min-height:16px;margin:4px 0 10px"></div>' +
        '<button id="mcGo" style="width:100%;appearance:none;border:0;cursor:pointer;background:var(--a1, var(--amber, #B58AD6));color:#0B0C0E;font:700 14px/1 inherit;padding:13px;border-radius:0">Sign in</button>' +
        '<div style="display:flex;justify-content:space-between;align-items:center;margin-top:14px;font-size:12.5px">' +
          '<a href="#" id="mcToggle" style="color:var(--a1, var(--amber, #B58AD6));text-decoration:none">Create an account</a>' +
          '<a href="#" id="mcClose" style="color:var(--muted, #8A919B);text-decoration:none">Close</a>' +
        '</div>' +
        '<div id="mcOut" style="display:none;margin-top:16px;border-top:1px solid var(--line, #23262B);padding-top:14px">' +
          '<div id="mcWho" style="font-size:13px;color:var(--muted, #8A919B);margin-bottom:10px"></div>' +
          '<button id="mcSignOut" style="appearance:none;border:1px solid var(--line-2, #2B2F35);background:transparent;color:inherit;cursor:pointer;font:600 13px/1 inherit;padding:10px 14px;border-radius:0">Sign out</button>' +
        '</div>' +
      '</div>';
    document.body.appendChild(modal);

    var isNew = false;
    function setMode(nw) {
      isNew = nw;
      modal.querySelector('#mcTitle').textContent = nw ? 'Create account' : 'Sign in';
      modal.querySelector('#mcGo').textContent = nw ? 'Create account' : 'Sign in';
      modal.querySelector('#mcToggle').textContent = nw ? 'I already have an account' : 'Create an account';
      modal.querySelector('#mcPass').setAttribute('autocomplete', nw ? 'new-password' : 'current-password');
      modal.querySelector('#mcErr').textContent = '';
    }
    modal.querySelector('#mcGoogle').addEventListener('click', function (e) {
      e.preventDefault();
      location.href = '/api/google/start?return=' + encodeURIComponent(location.pathname + location.search);
    });
    modal.querySelector('#mcToggle').addEventListener('click', function (e) { e.preventDefault(); setMode(!isNew); });
    modal.querySelector('#mcClose').addEventListener('click', function (e) { e.preventDefault(); closeModal(); });
    modal.querySelector('#mcSignOut').addEventListener('click', function () { signOut().then(function () { renderBtn(); closeModal(); }); });
    modal.querySelector('#mcGo').addEventListener('click', function () {
      var email = modal.querySelector('#mcEmail').value.trim();
      var pass = modal.querySelector('#mcPass').value;
      var err = modal.querySelector('#mcErr');
      err.textContent = '';
      if (!email || !pass) { err.textContent = 'Enter email and password.'; return; }
      modal.querySelector('#mcGo').disabled = true;
      signIn(email, pass, isNew).then(function () { renderBtn(); closeModal(); toast(MED.user ? 'Signed in — progress synced.' : ''); })
        .catch(function (e) { err.textContent = e.message || 'Failed'; })
        .then(function () { modal.querySelector('#mcGo').disabled = false; });
    });
    modal.addEventListener('keydown', function (e) { if (e.key === 'Enter') modal.querySelector('#mcGo').click(); if (e.key === 'Escape') closeModal(); });
  }
  function openModal() {
    if (!modal) return;
    var signedIn = !!MED.user;
    modal.querySelector('#mcOut').style.display = signedIn ? 'block' : 'none';
    modal.querySelector('#mcEmail').style.display = signedIn ? 'none' : 'block';
    modal.querySelector('#mcPass').style.display = signedIn ? 'none' : 'block';
    modal.querySelector('#mcGo').style.display = signedIn ? 'none' : 'block';
    modal.querySelector('#mcToggle').style.display = signedIn ? 'none' : 'inline';
    if (signedIn) modal.querySelector('#mcWho').textContent = 'Signed in as ' + MED.user.email;
    modal.style.display = 'flex';
  }
  function closeModal() { if (modal) modal.style.display = 'none'; }
  function toast(msg) {
    if (!msg) return;
    var t = el('div', 'position:fixed;left:50%;bottom:70px;transform:translateX(-50%);z-index:2147483601;background:var(--chalk, #EDEFF2);color:var(--ground, #0B0C0E);font:600 12px/1 "JetBrains Mono",monospace;padding:10px 16px', msg);
    document.body.appendChild(t); setTimeout(function () { t.remove(); }, 2600);
  }

  function start() { buildUI(); renderBtn(); checkAuth(); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
})();
