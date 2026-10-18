#!/usr/bin/env bash
# Bootstrap + deploy MedLib X (project: medlibx) — completely separate from MedCORE Hub.
# Requires a Pages:Edit (and D1:Edit) API token: CLOUDFLARE_API_TOKEN=... ./deploy.sh
# First run creates the D1 database and applies schema; later runs just deploy.
set -euo pipefail

HERE="$(cd "$(dirname "$0")" && pwd)"
cd "$HERE"

PROJECT="medlibx"
DB="medlibx-db"

if [ -z "${CLOUDFLARE_API_TOKEN:-}" ]; then
  # No env token: OAuth login (`wrangler login`) is fine instead — it lives in
  # ~/.wrangler and never passes through chat. Only fail if neither exists.
  if ! npx --yes wrangler@latest whoami 2>/dev/null | grep -q "You are logged in"; then
    echo "No CLOUDFLARE_API_TOKEN and wrangler is not logged in."
    echo "Either: CLOUDFLARE_API_TOKEN=xxxx ./deploy.sh"
    echo "Or:     npx wrangler login   (approve in your browser) then re-run."
    exit 1
  fi
  echo "using wrangler OAuth login (no env token)"
fi

# 1. First-run bootstrap: create the D1 database if we don't have its id yet.
if grep -q "REPLACED_BY_BOOTSTRAP" wrangler.toml; then
  echo "first run — checking D1 database ${DB}…"
  OUT="$(npx --yes wrangler@latest d1 create "$DB" 2>&1 || true)"
  # Real wrangler output prints the uuid only in quoted form: database_id = "uuid"
  ID="$(printf '%s' "$OUT" | sed -n 's/.*database_id *= *"\([a-f0-9][a-f0-9-]*\)".*/\1/p' | head -1)"
  if [ -z "$ID" ]; then
    echo "create failed (probably already exists) — resolving id from d1 list…"
    ID="$(npx --yes wrangler@latest d1 list --json 2>/dev/null | python3 -c "
import json,sys
try:
    rows=json.load(sys.stdin)
    print(next((r['uuid'] for r in rows if r.get('name')=='${DB}'),''))
except Exception:
    print('')")"
  fi
  if [ -z "$ID" ]; then echo "could not resolve database_id for ${DB}. wrangler said:"; echo "$OUT"; exit 1; fi
  sed -i.bak-d1 "s|REPLACED_BY_BOOTSTRAP|${ID}|" wrangler.toml && rm -f wrangler.toml.bak-d1
  echo "d1 database resolved: ${ID}"
fi

# 1b. Pages project must exist before first upload (no-op afterwards beyond a few ms).
npx --yes wrangler@latest pages project list 2>/dev/null | grep -q "medlibx" || \
  npx --yes wrangler@latest pages project create medlibx --production-branch=main

# 2. Schema (idempotent — CREATE IF NOT EXISTS).
npx --yes wrangler@latest d1 execute "$DB" --remote --file schema.sql

# 3. Stage the upload (dev harnesses and repo furniture excluded).
STAGE="$(mktemp -d)"
trap 'rm -rf "$STAGE"' EXIT
rsync -a --delete \
  --exclude '.git' --exclude '.github' --exclude '.wrangler' \
  --exclude '*.bak-*' --exclude '.DS_Store' \
  --exclude 'deploy.sh' --exclude 'schema.sql' --exclude 'README.md' --exclude 'SERVE.md' \
  "$HERE/" "$STAGE/"

echo "staged $(find "$STAGE" -type f | wc -l | tr -d ' ' | sed 's/^ *//') files"
# Run from the staged dir so wrangler reads the staged wrangler.toml (D1 binding) + functions/
( cd "$STAGE" && npx --yes wrangler@latest pages deploy . \
  --project-name ${PROJECT} --branch=main --commit-dirty=true )
