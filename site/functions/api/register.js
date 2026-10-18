import { json, bad, options, cors, hashPassword, newId, newToken, validEmail, validUsername, createSession, setSessionCookie, getUser } from './_util.js';

export const onRequestOptions = () => options();

// Assign a unique username derived from the email's local part.
// Sanitised to [a-z0-9-]; if the base is taken, numeric suffixes are tried,
// then a random hex tail. Reserved words are locked out (staff-flavoured names).
const RESERVED = new Set(['admin','administrator','librarian','moderator','medlib','medlibx','staff','support','root','system','official','contact','help','account','accounts','login','logout','register','signup','signin','library','about','faq','terms','privacy','profile','user','users']);

function baseFromEmail(email) {
  let b = email.split('@')[0].toLowerCase()
    .replace(/[._]+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
    .replace(/-+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 18);
  if (b.length < 3 || RESERVED.has(b)) b = 'reader';
  return b;
}

async function assignUsername(env, email) {
  const base = baseFromEmail(email);
  const claim = async (u) => {
    const hit = await env.medlibx_db.prepare('SELECT id FROM users WHERE username=?').bind(u).first();
    return hit ? null : u;
  };
  let name = await claim(base);
  if (name) return name;
  for (let i = 2; i <= 99; i++) { name = await claim(base + '-' + i); if (name) return name; }
  for (let t = 0; t < 25; t++) {
    const tail = newToken().slice(0, 10).toLowerCase().replace(/[^a-z0-9]/g, '').slice(0, 8);
    if (tail.length < 4) continue;
    name = await claim((base + '-' + tail).slice(0, 24));
    if (name) return name;
  }
  return null;
}

export async function onRequestPost({ request, env }) {
  let body;
  try { body = await request.json(); } catch { return bad('invalid JSON'); }
  const email = (body.email || '').trim().toLowerCase();
  const password = body.password || '';
  if (!validEmail(email)) return bad('Enter a valid email address.');
  if (password.length < 6) return bad('Password must be at least 6 characters.');
  // Optional: let a reader propose their own seat name at signup.
  const wanted = (body.username || '').trim().toLowerCase();
  if (wanted && !validUsername(wanted)) return bad('Username must be 3–24 lowercase letters, numbers or dashes.');
  if (wanted && RESERVED.has(wanted)) return bad('That username is reserved. Pick another.');

  const existing = await env.medlibx_db.prepare('SELECT id FROM users WHERE email=?').bind(email).first();
  if (existing) return bad('That email is already registered.', 409);

  let username = wanted || null;
  if (username) {
    const taken = await env.medlibx_db.prepare('SELECT id FROM users WHERE username=?').bind(username).first();
    if (taken) username = null; // fall through to auto-assignment rather than fail
  }
  if (!username) {
    username = await assignUsername(env, email);
    if (!username) return bad('Could not assign a username. Try again.', 503);
  }

  const id = newId();
  const salt = newToken().slice(0, 16);
  const pass_hash = await hashPassword(password, salt);
  await env.medlibx_db.prepare('INSERT INTO users (id,email,username,pass_hash,salt,created_at) VALUES (?,?,?,?,?,?)')
    .bind(id, email, username, pass_hash, salt, Date.now()).run();

  const token = await createSession(env, id);
  return json({ ok: true, user: { id, email, username } }, 200, { 'Set-Cookie': setSessionCookie(token), ...cors() });
}

// GET /api/register is invalid — point to the front desk.
export async function onRequestGet({ request, env }) {
  const u = await getUser(request, env);
  if (u) return json({ ok: true, user: u }, 200, cors());
  return bad('Create an account from the front desk (POST /api/register).', 405);
}
