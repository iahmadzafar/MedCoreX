/* ============================================================
   MedCoreX · auth-nav — who is at the desk
   Loaded by every shell + stats. Swaps the nav "Sign in"
   anchor (#navAuth) for the member chip (hover / tap menu:
   Stats · Your seat · Sign out) and the footer anchor
   (#footAuth) for "Your seat" — only when /api/me says a
   session exists. Self-styled; the kit owns nothing here.
   ============================================================ */
(function () {
  var esc = function (s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  };

  var CSS = [
    '.navme{position:relative;display:inline-flex}',
    '.navme-btn{display:flex;align-items:center;gap:8px;cursor:pointer;border:2px solid var(--ink);border-radius:999px;background:var(--surface);padding:.45em .95em;font-weight:800;font-size:.9rem;color:var(--ink);transition:transform .18s ease,box-shadow .18s ease}',
    '.navme-btn:hover{transform:translateY(-2px);box-shadow:3px 3px 0 var(--ink)}',
    '.navme-dot{width:10px;height:10px;border-radius:50%;background:var(--ok);border:2px solid var(--ink);flex:0 0 auto}',
    '.navme-btn i{font-style:normal;font-size:.65em;opacity:.75}',
    '.navme-menu{position:absolute;right:0;top:calc(100% + 9px);min-width:190px;background:var(--surface);border:var(--bw,var(--bw,3px)) solid var(--ink);border-radius:var(--radius,18px);box-shadow:var(--shadow,6px 6px 0 var(--ink));overflow:hidden;z-index:70;display:none;flex-direction:column;text-transform:none;letter-spacing:normal}',
    '.navme:hover .navme-menu,.navme:focus-within .navme-menu,.navme.open .navme-menu{display:flex}',
    '.navme-menu a,.navme-menu button{margin:0;padding:12px 16px;text-align:left;text-decoration:none;font-weight:700;font-size:.92rem;font-family:inherit;background:none;border:0;border-bottom:1px solid var(--line,rgba(0,0,0,.12));color:var(--ink);cursor:pointer;line-height:1.3}',
    '.navme-menu a:last-child,.navme-menu button:last-child{border-bottom:0}',
    '.navme-menu a:hover,.navme-menu button:hover{background:color-mix(in srgb,var(--c2) 45%,var(--surface))}',
    '.navme-menu .out{color:var(--bad)}',
    '.navme-menu .meta{padding:10px 16px 4px;font-size:.75rem;font-weight:800;text-transform:uppercase;letter-spacing:.08em;opacity:.7;border-bottom:1px solid var(--line,rgba(0,0,0,.12))}'
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
        '<a href="/stats" role="menuitem">Stats &amp; progress</a>' +
        '<a href="/account" role="menuitem">Your seat — name &amp; password</a>' +
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
    if (foot) { foot.textContent = 'Your seat'; foot.setAttribute('href', '/account'); }
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
