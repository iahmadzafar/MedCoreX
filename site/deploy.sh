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
  echo "CLOUDFLARE_API_TOKEN is not set — export your Pages:Edit token first:"
  echo "  CLOUDFLARE_API_TOKEN=xxxx ./deploy.sh"
  exit 1
fi
export CLOUDFLARE_API_TOKEN

# 1. First-run bootstrap: create the D1 database if we don't have its id yet.
if grep -q "REPLACED_BY_BOOTSTRAP" wrangler.toml; then
  echo "first run — creating D1 database ${DB}…"
  OUT="$(npx --yes wrangler@latest d1 create "$DB")"
  ID="$(printf '%s' "$OUT" | grep -io 'database_id = "[a-f0-9-]*"\|[a-f0-9]\{8\}-[a-f0-9]\{4\}-[a-f0-9]\{4\}-[a-f0-9]\{4\}-[a-f0-9]\{12\}' | grep -E '^[a-f0-9]{8}-' | head -1)"
  if [ -z "$ID" ]; then echo "could not read database_id from wrangler output:"; echo "$OUT"; exit 1; fi
  sed -i.bak-d1 "s|REPLACED_BY_BOOTSTRAP|${ID}|" wrangler.toml && rm -f wrangler.toml.bak-d1
  echo "d1 database created: ${ID}"
fi

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
