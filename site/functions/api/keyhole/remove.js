import { json, bad, options, cors, keyholeOk } from '../_util.js';

export const onRequestOptions = () => options();

// POST /api/keyhole/remove  { username }
// Cancels an account by name: the user row and every session of that seat.
// Targeted only — the librarian removes a name, never the ledger.
export async function onRequestPost({ request, env }) {
  if (!keyholeOk(request, env)) return bad('Not the librarian.', 401);
  let body;
  try { body = await request.json(); } catch { return bad('invalid JSON'); }
  const username = (body.username || '').trim().toLowerCase();
  if (!username) return bad('Whose name leaves the desk?');
  const u = await env.medlibx_db.prepare('SELECT id FROM users WHERE username=?').bind(username).first();
  if (!u) return bad('No such name at the desk.', 404);
  await env.medlibx_db.prepare('DELETE FROM sessions WHERE user_id=?').bind(u.id).run();
  await env.medlibx_db.prepare('DELETE FROM users WHERE id=?').bind(u.id).run();
  return json({ ok: true, removed: username }, 200, cors());
}

export async function onRequestGet({ request, env }) {
  if (!keyholeOk(request, env)) return bad('Not the librarian.', 401);
  return bad('Removal is actioned with POST.', 405);
}
