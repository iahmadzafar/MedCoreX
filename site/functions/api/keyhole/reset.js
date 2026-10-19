import { json, bad, options, cors, keyholeOk, hashPassword } from '../_util.js';

export const onRequestOptions = () => options();

// POST /api/keyhole/reset  { username, password? }
// Librarian-arranged password reset. Without a password, a readable one is
// picked and shown exactly once in this response — hand it over, never store it.
const SYL = ['ayn','bar','col','dur','ens','far','gul','hal','ish','jam','kal','lam','mar','nas','pal','qad','rah','sar','tar','umar','zar'];

function humanPassword() {
  const pick = () => SYL[Math.floor(Math.random() * SYL.length)];
  return pick() + pick() + pick() + '-' + (100 + Math.floor(Math.random() * 900));
}

export async function onRequestPost({ request, env }) {
  if (!keyholeOk(request, env)) return bad('Not the librarian.', 401);
  let body;
  try { body = await request.json(); } catch { return bad('invalid JSON'); }

  const username = (body.username || '').trim().toLowerCase();
  if (!username) return bad('Whose name at the desk?');
  const u = await env.medlibx_db.prepare('SELECT id FROM users WHERE username=?').bind(username).first();
  if (!u) return bad('No such name at the desk.', 404);

  let password = (body.password || '').trim();
  if (password && password.length < 6) return bad('Password must be at least 6 characters.');
  const shown = !password;
  if (!password) password = humanPassword();

  const salt = crypto.randomUUID().replace(/-/g, '').slice(0, 16);
  const pass_hash = await hashPassword(password, salt);
  await env.medlibx_db.prepare('UPDATE users SET pass_hash=?, salt=? WHERE id=?').bind(pass_hash, salt, u.id).run();
  // every seat is emptied — the new password is the only key that opens
  await env.medlibx_db.prepare('DELETE FROM sessions WHERE user_id=?').bind(u.id).run();

  const out = { ok: true, username, sessions_killed: true };
  if (shown) out.password = password; // exactly once
  return json(out, 200, cors());
}

export async function onRequestGet({ request, env }) {
  if (!keyholeOk(request, env)) return bad('Not the librarian.', 401);
  return bad('Reset is actioned with POST.', 405);
}

