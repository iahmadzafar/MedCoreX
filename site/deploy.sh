#!/usr/bin/env bash
# Deploy the MedCORE Hub to Cloudflare Pages (project: medcorehub).
# Requires a Pages:Edit API token in CLOUDFLARE_API_TOKEN.
# Dev-only harnesses are excluded from the upload.
set -euo pipefail

HERE="$(cd "$(dirname "$0")" && pwd)"
STAGE="$(mktemp -d)"
trap 'rm -rf "$STAGE"' EXIT

rsync -a --delete \
  --exclude '.git' --exclude '.github' --exclude '.wrangler' \
  --exclude '*.bak-*' --exclude '.DS_Store' \
  --exclude 'verify.js' --exclude 'prooflocal.js' --exclude 'domproof.js' \
  --exclude 'bankproof.js' --exclude 'prodcheck.js' --exclude 'serve.js' --exclude 'deploy.sh' \
  "$HERE/" "$STAGE/"

echo "staged $(find "$STAGE" -type f | wc -l | tr -d ' ') files (dev harnesses excluded)"
# Run from the staged dir so wrangler reads the staged wrangler.toml (D1 binding) + functions/
( cd "$STAGE" && npx --yes wrangler@latest pages deploy . \
  --project-name medcorehub --branch=main --commit-dirty=true )
