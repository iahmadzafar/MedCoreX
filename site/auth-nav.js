/* ============================================================
   MedCoreX · auth-nav — the signed-in menu
   Loaded by every shell + stats. Swaps the nav "Sign in"
   anchor (#navAuth) for the member chip (hover / tap menu:
   Progress · Account · Sign out) and the footer anchor
   (#footAuth) for "Account" — only when /api/me says a
   session exists. Its styles use the shared Graphite and Ember tokens.
   ============================================================ */
(function () {
  var esc = function (s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  };

  var CSS = [
    '.navme{position:relative;display:inline-flex}',
    '.navme-btn{display:flex;align-items:center;gap:8px;cursor:pointer;border:1px solid var(--line-strong);border-radius:var(--radius);background:var(--surface);padding:8px 10px;font-family:var(--font-body);font-weight:600;font-size:var(--fs-small);letter-spacing:normal;text-transform:none;color:var(--ink);transition:border-color .2s var(--ease),background-color .2s var(--ease),color .2s var(--ease)}',
    '.navme-btn b{font:inherit;letter-spacing:normal;text-transform:none}',
    '.navme-btn:hover,.navme-btn[aria-expanded="true"]{border-color:var(--accent)}',
    '.navme-dot{width:9px;height:9px;border-radius:50%;background:var(--ok);border:1px solid var(--line-strong);flex:0 0 auto}',
    '.navme-btn i{font-style:normal;font-size:.7em;color:var(--muted)}',
    '.navme-menu{position:absolute;right:0;top:calc(100% + 4px);min-width:190px;background:var(--surface);border:1px solid var(--line);border-radius:var(--radius);box-shadow:none;overflow:hidden;z-index:70;display:none;flex-direction:column;text-transform:none;letter-spacing:normal}',
    '.navme:hover .navme-menu,.navme:focus-within .navme-menu,.navme.open .navme-menu{display:flex}',
    '.navme-menu a,.navme-menu button{margin:0;padding:11px 14px;text-align:left;text-decoration:none;font-weight:600;font-size:var(--fs-small);font-family:var(--font-body);text-transform:none;letter-spacing:normal;background:transparent;border:0;border-bottom:1px solid var(--line);color:var(--ink);cursor:pointer;line-height:1.35}',
    '.navme-menu a:last-child,.navme-menu button:last-child{border-bottom:0}',
    '.navme-menu a:hover,.navme-menu button:hover{background:color-mix(in srgb,var(--ink) 6%,var(--surface));box-shadow:none}',
    '.navme-menu .out{color:var(--accent)}',
    '.navme-menu .meta{padding:10px 14px 8px;font-family:var(--font-mono);font-size:var(--fs-label);font-weight:500;text-transform:uppercase;letter-spacing:.06em;color:var(--muted);border-bottom:1px solid var(--line)}'
  ].join('');

  function style() {
    if (document.getElementById('authNavCss')) return;
    var s = document.createElement('style');
    s.id = 'authNavCss';
    s.textContent = CSS;
    document.head.appendChild(s);
  }

  function build(user) {
    var nav = document.getElementById('navAuth');
    if (nav) {
      var wrap = document.createElement('span');
      wrap.className = 'navme';
      wrap.tabIndex = 0;
      wrap.innerHTML =
        '<button class="navme-btn" aria-haspopup="true" aria-expanded="false">' +
        '<span class="navme-dot"></span><b>' + esc(user.username || 'member') + '</b><i>&#9662;</i></button>' +
        '<div class="navme-menu" role="menu">' +
        '<span class="meta">Signed in</span>' +
        '<a href="/stats" role="menuitem">Progress</a>' +
        '<a href="/account" role="menuitem">Account</a>' +
        '<a href="/library" role="menuitem">Library</a>' +
        '<button class="out" type="button" role="menuitem">Sign out</button>' +
        '</div>';
      nav.replaceWith(wrap);
      var btn = wrap.querySelector('.navme-btn');
      btn.addEventListener('click', function () {
        var open = wrap.classList.toggle('open');
        btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      });
      wrap.querySelector('.out').addEventListener('click', function (e) {
        e.preventDefault();
        fetch('/api/logout', { method: 'POST' }).then(function () { location.href = '/'; });
      });
    }
    var foot = document.getElementById('footAuth');
    if (foot) { foot.textContent = 'Account'; foot.setAttribute('href', '/account'); }
  }

  function go() {
    style();
    fetch('/api/me').then(function (r) { return r.json(); }).then(function (j) {
      if (j && j.ok && j.user) build(j.user);
    }).catch(function () {});
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', go);
  else go();
})();
