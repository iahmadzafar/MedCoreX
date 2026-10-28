import { json, bad, options, cors, getUser } from './_util.js';

export const onRequestOptions = () => options();

// GET /api/progress → { ok, data: {…} }  (the account's saved progress blob)
export async function onRequestGet({ request, env }) {
  const u = await getUser(request, env);
  if (!u) return bad('Not signed in.', 401);
  const row = await env.medcore_db.prepare('SELECT data, updated_at FROM progress WHERE user_id=?').bind(u.id).first();
  let data = {};
  if (row && row.data) { try { data = JSON.parse(row.data); } catch {} }
  return json({ ok: true, data, updated_at: row ? row.updated_at : 0 }, 200, cors());
}

// PUT /api/progress  body: { data: {…} }  → merge + save
export async function onRequestPut({ request, env }) {
  const u = await getUser(request, env);
  if (!u) return bad('Not signed in.', 401);
  let body;
  try { body = await request.json(); } catch { return bad('invalid json'); }
  const incoming = body && body.data;
  if (!incoming || typeof incoming !== 'object') return bad('data must be an object.');

  const row = await env.medcore_db.prepare('SELECT data FROM progress WHERE user_id=?').bind(u.id).first();
  let existing = {};
  if (row && row.data) { try { existing = JSON.parse(row.data); } catch {} }
  // deep merge per key: JSON objects merge (union + max) instead of last-writer-wins replacement
  const merged = { ...existing };
  for (const k of Object.keys(incoming)) {
    if (k in existing && typeof existing[k] === 'string' && typeof incoming[k] === 'string') {
      let a = null, b = null;
      try { a = JSON.parse(existing[k]); } catch {}
      try { b = JSON.parse(incoming[k]); } catch {}
      if (a && b && typeof a === 'object' && typeof b === 'object' && !Array.isArray(a) && !Array.isArray(b)) {
        merged[k] = JSON.stringify(deepMerge(a, b));
        continue;
      }
    }
    merged[k] = incoming[k];
  }
  const text = JSON.stringify(merged);
  if (text.length > 900000) return bad('progress payload too large.', 413);

  await env.medcore_db.prepare(
    'INSERT INTO progress (user_id,data,updated_at) VALUES (?,?,?) ON CONFLICT(user_id) DO UPDATE SET data=excluded.data, updated_at=excluded.updated_at'
  ).bind(u.id, text, Date.now()).run();

  return json({ ok: true, updated_at: Date.now() }, 200, cors());
}
