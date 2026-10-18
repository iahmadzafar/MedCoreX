import { json, bad, options, cors, hashPassword, validUsername, getUser } from './_util.js';

export const onRequestOptions = () => options();

// PATCH /api/account  { action: 'username' | 'password', ... }
export async function onRequestPatch({ request, env }) {
  const u = await getUser(request, env);
  if (!u) return bad('Not signed in.', 401);

  let body;
  try { body = await request.json(); } catch { return bad('invalid JSON'); }
  const action = body && body.action;

  if (action === 'username') {
    const username = (body.username || '').trim().toLowerCase();
    if (!validUsername(username)) return bad('Username must be 3–24 lowercase letters, numbers or dashes.');
    const RESERVED = new Set(['admin','administrator','librarian','moderator','medlib','medlibx','staff','support','root','system','official','contact','help','account','accounts','login','logout','register','signup','signin','library','about','faq','terms','privacy','profile','user','users']);
    if (RESERVED.has(username)) return bad('That username is reserved. Pick another.', 409);
    const taken = await env.medlibx_db.prepare('SELECT id FROM users WHERE username=?').bind(username).first();
    if (taken && taken.id !== u.id) return bad('That username is already taken.', 409);
    await env.medlibx_db.prepare('UPDATE users SET username=? WHERE id=?').bind(username, u.id).run();
    return json({ ok: true, username }, 200, cors());
  }

  if (action === 'password') {
    const current = body.current_password || '', next = body.new_password || '';
    if (next.length < 6) return bad('New password must be at least 6 characters.');
    const row = await env.medlibx_db.prepare('SELECT pass_hash, salt FROM users WHERE id=?').bind(u.id).first();
    if (!row) return bad('Account not found.', 404);
    const h = await hashPassword(current, row.salt);
    if (h !== row.pass_hash) return bad('Current password is incorrect.', 403);
    const salt = crypto.randomUUID().replace(/-/g, '').slice(0, 16);
    const pass_hash = await hashPassword(next, salt);
    await env.medlibx_db.prepare('UPDATE users SET pass_hash=?, salt=? WHERE id=?').bind(pass_hash, salt, u.id).run();
    return json({ ok: true }, 200, cors());
  }

  return bad('Unknown action. Use "username" or "password".');
}

export async function onRequestGet({ request, env }) {
  const u = await getUser(request, env);
  if (!u) return bad('Not signed in.', 401);
  return json({ ok: true, user: { id: u.id, email: u.email, username: u.username, created_at: u.created_at } }, 200, cors());
}

