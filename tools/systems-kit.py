#!/usr/bin/env python3
"""
tools/systems-kit.py — content-aware toolkit for the 10 MedCORE Systems templates
===================================================================================
Owner contract (AGENTS.md → "Systems templates"): any restyle, theme, or layout
change to the 10 MedCORE Systems files goes THROUGH THIS TOOL. Never hand-edit
their <style> blocks; never touch their <body>.

Content-level model of these files (verified, all 10 share it):
  <head>   meta + ONE Google-Fonts link + ONE <style> block   ← presentation layer
  <body>   cover, toc, .page × N (A4), .band/.stripe/.bbody content,
           .mcq blocks, tables, subject extras                  ← content layer

Safety model:
  * BODY-FROZEN: the <body>…</body> segment is fingerprinted (sha256) before and
    after every mutation. Any command that would alter it aborts, atomically,
    with no file written.
  * ALL-OR-NOTHING: mutations validate every target file first, write only after
    all pass (temp file + os.replace).
  * MANIFEST: tools/systems-manifest.json records each file's content fingerprint,
    structure counts, palette and fonts — the standing content-level understanding.
    `check` re-verifies live files against it; future sessions read it instead of
    re-deriving.

Commands:
  inspect [--file SLUG] [--json]     structure + palette inventory (writes manifest
                                     only with --write-manifest)
  check [--update]                   verify all 10 against the manifest
  theme show [--json]                current shared palette / fonts
  theme export PATH                  save current palette as a reusable JSON preset
  theme apply PATH                   apply a palette preset (values only)
  theme set --TOKEN=value ...        set raw token values (--accent=#c0392b)
  theme fonts --css2 "family=..."    rewrite the Google-Fonts link (families query)
  css get "selector"                 show every rule for a selector
  css set "selector" prop value      patch property in ALL rules for selector
                                     (--dry-run shows the plan)

Every mutation ends with an automatic `check`.
"""

import argparse
import hashlib
import json
import os
import re
import sys
import tempfile
from pathlib import Path

REPO = Path(__file__).resolve().parent.parent
RESOURCES = REPO / "site" / "resources"
MANIFEST = REPO / "tools" / "systems-manifest.json"

# slug → subject dir name in the owner's source folder (informational)
FILES = {
    "cardiology":     "medcore-systems-cardiology-cardiology-medcore.html",
    "dermatology":    "medcore-systems-dermatology-dermatology-medcore.html",
    "ent":            "medcore-systems-ent-ent-medcore.html",
    "gynecology":     "medcore-systems-gynecology-gynecology-medcore.html",
    "neurology":      "medcore-systems-neurology-neurology-medcore.html",
    "obstetrics":     "medcore-systems-obstetrics-obstetrics-medcore.html",
    "ophthalmology":  "medcore-systems-ophthalmology-ophthalmology-medcore.html",
    "pediatrics":     "medcore-systems-pediatrics-pediatrics-medcore.html",
    "respiratory":    "medcore-systems-respiratory-respiratory-medcore.html",
    "urology":        "medcore-systems-urology-urology-medcore.html",
}

# design tokens the template actually uses (from :root)
COLOR_TOKENS = [
    "navy", "accent", "accent-soft", "teal", "amber", "never", "blue-soft",
    "gray-50", "gray-100", "gray-200", "gray-300", "gray-400", "gray-500",
    "gray-600", "gray-700", "body", "body-bg",
]
FONT_TOKENS = ["font-body", "font-display", "font-mono"]
GEOM_TOKENS = ["page-w", "page-h", "margin"]

# structure counters → regex over the body segment
STRUCTURE = {
    "pages":        r'<div class="page[" ]',
    "bands":        r'<div class="band[" ]',
    "stripes":      r'<div class="stripe[" ]',
    "bodies":       r'<div class="bbody[" ]',
    "mcqs":         r'<div class="mcq[" ]',
    "tables":       r"<table",
    "toc_entries":  r'<div class="toc-text[" ]',
    "buzzwords":    r'<div class="buzzword[" ]',
    "algorithms":   r'<div class="algorithm[" ]',
    "alert_strips": r'<div class="alert-strip[" ]',
    "cover":        r'<div class="cover[" ]',
}


class KitError(Exception):
    pass


def path_for(slug):
    p = RESOURCES / FILES[slug]
    if not p.exists():
        raise KitError(f"{slug}: file missing at {p}")
    return p


def split(text):
    """→ (head, style_css, body, style_span, body_span). Exactly one <style> required."""
    styles = list(re.finditer(r"<style[^>]*>(.*?)</style>", text, re.S))
    if len(styles) != 1:
        raise KitError(f"expected exactly one <style> block, found {len(styles)}")
    st = styles[0]
    b = re.search(r"<body[^>]*>.*</body>", text, re.S)
    if not b:
        raise KitError("no <body> segment")
    return {
        "head": text[:st.start(1)],
        "style": st.group(1),
        "style_span": (st.start(1), st.end(1)),
        "body": b.group(0),
        "body_span": (b.start(), b.end()),
        "raw": text,
    }


def body_hash(text):
    return hashlib.sha256(split(text)["body"].encode("utf-8")).hexdigest()


def visible_text_len(body):
    t = re.sub(r"<(script|style)[^>]*>.*?</\1>", " ", body, flags=re.S)
    t = re.sub(r"<[^>]+>", " ", t)
    t = re.sub(r"\s+", " ", t)
    return len(t.strip())


def structure_of(body):
    out = {k: len(re.findall(rx, body)) for k, rx in STRUCTURE.items()}
    out["text_chars"] = visible_text_len(body)
    return out


def palette_of(style):
    root = re.search(r":root\s*\{(.*?)\}", style, re.S)
    if not root:
        return {}
    return {
        m.group(1): m.group(2).strip()
        for m in re.finditer(r"(--[a-zA-Z0-9-]+)\s*:\s*([^;]+);", root.group(1))
    }


def fonts_link_of(head):
    m = re.search(r'<link href="(https://fonts\.googleapis\.com/css2\?[^"]+)"', head)
    return m.group(1) if m else None


def classes_of(body):
    """sorted union of class names used in the body"""
    names = set()
    for m in re.finditer(r'class="([^"]*)"', body):
        names.update(x for x in m.group(1).split() if x)
    return sorted(names)


def read(slug):
    p = path_for(slug)
    text = p.read_text(encoding="utf-8", newline="")
    d = split(text)
    d["slug"] = slug
    d["path"] = p
    return d


# ── write path: body must be byte-identical, all-or-nothing ─────────────────

def stage_mutations(mutations, allow_content=False):
    """mutations: list of (slug, new_text). Validates all, then writes all."""
    for slug, new in mutations:
        old = path_for(slug).read_text(encoding="utf-8", newline="")
        if body_hash(new) != body_hash(old) and not allow_content:
            raise KitError(
                f"{slug}: ABORT — mutation would alter <body> content "
                f"(body is frozen; content changes go through CN notes, not this tool)"
            )
    # all validated → write atomically
    written = []
    for slug, new in mutations:
        p = path_for(slug)
        fd, tmp = tempfile.mkstemp(dir=str(p.parent), prefix=".syskit-")
        with os.fdopen(fd, "w", encoding="utf-8", newline="") as f:
            f.write(new)
        os.replace(tmp, p)
        written.append(slug)
    return written


# ── css rule surgery (inside the <style> block only) ───────────────────────

def find_rules(css, selector):
    """Yield (start, end) spans of every `selector { … }` rule (incl. nested
    @media contexts)."""
    spans = []
    for m in re.finditer(re.escape(selector) + r"\s*\{", css):
        i = m.end()          # just after '{'
        depth = 1
        while i < len(css) and depth:
            if css[i] == "{":
                depth += 1
            elif css[i] == "}":
                depth -= 1
            i += 1
        spans.append((m.start(), i))
    return spans


def css_get(css, selector):
    spans = find_rules(css, selector)
    if not spans:
        raise KitError(f"selector not found: {selector}")
    return [css[a:b] for a, b in spans]


def css_set(css, selector, prop, value):
    spans = find_rules(css, selector)
    decl = f"{prop}: {value};"
    if not spans:
        # append a brand-new rule at the end of the style block
        return css.rstrip() + f"\n{selector} {{ {decl} }}\n", 0
    out = []
    last = 0
    patched = 0
    for a, b in spans:
        rule = css[a:b]
        if re.search(r"(?m)^\s*" + re.escape(prop) + r"\s*:", rule):
            rule = re.sub(
                r"(?m)^(\s*)" + re.escape(prop) + r"\s*:[^;]+;",
                lambda m: f"{m.group(1)}{decl}",
                rule,
                count=1,
            )
        else:
            # insert before final }
            idx = rule.rindex("}")
            rule = rule[:idx].rstrip() + f"\n  {decl}\n" + rule[idx:]
        out.append(css[last:a])
        out.append(rule)
        last = b
        patched += 1
    out.append(css[last:])
    return "".join(out), patched


# ── theme ops (inside :root of the <style> block; fonts may touch head link) ─

def theme_set(css, updates):
    unknown = [k for k in updates if k not in COLOR_TOKENS + FONT_TOKENS + GEOM_TOKENS]
    if unknown:
        raise KitError(
            f"unknown tokens: {', '.join(unknown)}\n"
            f"known: {', '.join(COLOR_TOKENS + FONT_TOKENS + GEOM_TOKENS)}"
        )
    root = re.search(r"(:root\s*\{)(.*?)(\})", css, re.S)
    if not root:
        raise KitError("no :root block in style")
    body = root.group(2)
    for k, v in updates.items():
        pat = r"(--" + re.escape(k) + r"\s*:\s*)[^;]+;"
        if re.search(pat, body):
            body = re.sub(pat, lambda m: m.group(1) + v + ";", body, count=1)
        else:
            body = body.rstrip() + f"\n    --{k}: {v};\n  "
    return css[: root.start(2)] + body + css[root.end(2):]


def fonts_set(head, css2_query):
    """css2_query like: family=Inter:wght@400;600&family=Playfair+Display"""
    url = f"https://fonts.googleapis.com/css2?{css2_query}&display=swap"
    new_head, n = re.subn(
        r'<link href="https://fonts\.googleapis\.com/css2\?[^"]+"',
        f'<link href="{url}"',
        head,
        count=1,
    )
    if not n:
        raise KitError("no Google-Fonts link found in head")
    return new_head


# ── commands ────────────────────────────────────────────────────────────────

def inventory(slug):
    d = read(slug)
    return {
        "slug": slug,
        "file": FILES[slug],
        "content_sha256": body_hash(d["raw"]),
        "structure": structure_of(d["body"]),
        "palette": palette_of(d["style"]),
        "fonts": fonts_link_of(d["head"]),
        "classes": classes_of(d["body"]),
        "style_lines": d["style"].count("\n") + 1,
    }


def cmd_inspect(args):
    slugs = [args.file] if args.file else list(FILES)
    inv = [inventory(s) for s in slugs]
    if args.json:
        print(json.dumps(inv, indent=2, ensure_ascii=False))
        return
    for e in inv:
        st = e["structure"]
        print(f"\n── {e['slug']}  ({e['file']})")
        print(
            f"   content: sha256={e['content_sha256'][:12]}  "
            f"pages={st['pages']}  bands={st['bands']}  mcqs={st['mcqs']}  "
            f"tables={st['tables']}  toc={st['toc_entries']}  "
            f"buzzwords={st['buzzwords']}  alerts={st['alert_strips']}  "
            f"text={st['text_chars']}ch"
        )
        pal = e["palette"]
        print(
            f"   palette: navy={pal.get('--navy')}  accent={pal.get('--accent')}  "
            f"teal={pal.get('--teal')}  amber={pal.get('--amber')}  body-bg={pal.get('--body-bg')}"
        )
        print(f"   fonts:   {e['fonts']}")
    if args.write_manifest:
        write_manifest([inventory(s) for s in FILES])
        print(f"\nmanifest written → {MANIFEST}")


def write_manifest(entries):
    MANIFEST.parent.mkdir(parents=True, exist_ok=True)
    doc = {
        "_doc": (
            "Standing content-level understanding of the 10 MedCORE Systems "
            "templates. content_sha256 covers the full <body> segment — any "
            "restyle/theme change must leave it identical. Regenerate with: "
            "python3 tools/systems-kit.py inspect --write-manifest"
        ),
        "files": {e["slug"]: e for e in entries},
    }
    MANIFEST.write_text(json.dumps(doc, indent=1, ensure_ascii=False) + "\n", encoding="utf-8")


def load_manifest():
    if not MANIFEST.exists():
        raise KitError(f"manifest missing — run: {sys.argv[0]} inspect --write-manifest")
    return json.loads(MANIFEST.read_text(encoding="utf-8"))


def cmd_check(args):
    man = load_manifest()["files"]
    failures = []
    for slug in FILES:
        try:
            e = inventory(slug)
        except KitError as ex:
            failures.append(str(ex))
            continue
        base = man.get(slug)
        if not base:
            failures.append(f"{slug}: not in manifest")
            continue
        if e["content_sha256"] != base["content_sha256"]:
            failures.append(
                f"{slug}: CONTENT CHANGED (body sha {base['content_sha256'][:12]} → "
                f"{e['content_sha256'][:12]})"
            )
        for k, v in base["structure"].items():
            if e["structure"].get(k) != v:
                failures.append(
                    f"{slug}: structure drift in {k}: {v} → {e['structure'].get(k)}"
                )
    if failures:
        print("systems-kit check: FAILED")
        for f in failures:
            print("  ✗ " + f)
        return 1
    print(f"systems-kit check: OK — {len(FILES)} files, body fingerprints + structure match manifest")
    if args.update:
        write_manifest([inventory(s) for s in FILES])
        print("  manifest re-baselined (--update)")
    return 0


def select(args_file):
    if args_file:
        if args_file not in FILES:
            raise KitError(f"unknown slug '{args_file}'. known: {', '.join(FILES)}")
        return [args_file]
    return list(FILES)


def parse_kv(pairs):
    out = {}
    for p in pairs:
        if "=" not in p:
            raise KitError(f"expected TOKEN=value, got: {p}")
        k, v = p.split("=", 1)
        k = k.lstrip("-")
        out[k] = v
    return out


def cmd_theme(args):
    if args.action == "show" or args.action is None:
        pal = None
        for slug in FILES:
            d = read(slug)
            p = palette_of(d["style"])
            if pal is None:
                pal = p
            elif p != pal:
                print(f"note: {slug} palette differs from cardiology (shared-system assumption broken)")
        if args.json:
            print(json.dumps(pal, indent=2, ensure_ascii=False))
        else:
            for k, v in pal.items():
                print(f"  {k}: {v}")
            print(f"  fonts: {fonts_link_of(read('cardiology')['head'])}")
        return 0

    if args.action == "export":
        pal = palette_of(read("cardiology")["style"])
        doc = {"palette": pal, "fonts": fonts_link_of(read("cardiology")["head"])}
        Path(args.path).write_text(json.dumps(doc, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
        print(f"preset exported → {args.path}")
        return 0

    if args.action == "apply":
        doc = json.loads(Path(args.path).read_text(encoding="utf-8"))
        updates = doc.get("palette", {})
        unknown = [k for k in updates if k.lstrip('-') not in COLOR_TOKENS + FONT_TOKENS + GEOM_TOKENS]
        if unknown:
            raise KitError(f"preset has unknown tokens: {unknown}")
        updates = {k.lstrip("-"): v for k, v in updates.items()}
        mutations = []
        for slug in select(None):
            d = read(slug)
            new_style = theme_set(d["style"], updates)
            mutations.append((slug, d["raw"][: d["style_span"][0]] + new_style + d["raw"][d["style_span"][1]:]))
        if args.dry_run:
            print(f"dry-run: palette would update {len(mutations)} files ({len(updates)} tokens)")
            return 0
        stage_mutations(mutations)
        print(f"palette applied to {len(mutations)} files ({len(updates)} tokens)")
        return cmd_check(args)

    if args.action == "set":
        updates = parse_kv(args.pairs)
        mutations = []
        for slug in select(args.file):
            d = read(slug)
            new_style = theme_set(d["style"], updates)
            mutations.append((slug, d["raw"][: d["style_span"][0]] + new_style + d["raw"][d["style_span"][1]:]))
        if args.dry_run:
            print(f"dry-run: would set on {len(mutations)} files: {updates}")
            return 0
        stage_mutations(mutations)
        print(f"theme set on {len(mutations)} files: {updates}")
        return cmd_check(args)

    if args.action == "fonts":
        if not args.css2:
            raise KitError('fonts needs --css2 "family=…&family=…"')
        mutations = []
        for slug in select(None):
            d = read(slug)
            new_head = fonts_set(d["head"], args.css2)
            mutations.append((slug, new_head + d["raw"][len(d["head"]):]))
        if args.dry_run:
            print(f"dry-run: fonts link would change on {len(mutations)} files")
            return 0
        stage_mutations(mutations)
        print(f"fonts updated on {len(mutations)} files")
        return cmd_check(args)


def cmd_css(args):
    if args.action == "get":
        for slug in select(args.file):
            rules = css_get(read(slug)["style"], args.selector)
            print(f"── {slug}:")
            for r in rules:
                print("   " + r.replace("\n", "\n   "))
        return 0
    if args.action == "set":
        updates_prop = args.prop
        mutations = []
        for slug in select(args.file):
            d = read(slug)
            new_style, n = css_set(d["style"], args.selector, updates_prop, args.value)
            mutations.append((slug, d["raw"][: d["style_span"][0]] + new_style + d["raw"][d["style_span"][1]:]))
            if args.dry_run:
                print(f"   {slug}: {n} rule(s) would patch")
        if args.dry_run:
            print(f"dry-run: css set {args.selector} {updates_prop}={args.value} — no files written")
            return 0
        stage_mutations(mutations)
        n_total = sum(1 for _ in mutations)
        print(f"css set applied across {n_total} files: {args.selector} {{ {updates_prop}: {args.value} }}")
        return cmd_check(args)
    raise KitError("css needs get or set")


def build_parser():
    ap = argparse.ArgumentParser(prog="systems-kit", description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    sub = ap.add_subparsers(dest="cmd", required=True)

    p = sub.add_parser("inspect", help="structure + palette inventory")
    p.add_argument("--file", choices=list(FILES), help="single slug")
    p.add_argument("--json", action="store_true")
    p.add_argument("--write-manifest", action="store_true")
    p.set_defaults(fn=cmd_inspect)

    p = sub.add_parser("check", help="verify files against manifest")
    p.add_argument("--update", action="store_true", help="re-baseline manifest after intentional content edits")
    p.set_defaults(fn=cmd_check)

    p = sub.add_parser("theme", help="palette / fonts operations")
    p.add_argument("action", nargs="?", choices=["show", "set", "apply", "export", "fonts"], default="show")
    p.add_argument("pairs", nargs="*", help="TOKEN=value for 'set'")
    p.add_argument("--file", choices=list(FILES))
    p.add_argument("--path", help="preset file for export/apply")
    p.add_argument("--css2", help="google fonts families query for 'fonts'")
    p.add_argument("--json", action="store_true")
    p.add_argument("--dry-run", action="store_true")
    p.set_defaults(fn=cmd_theme)

    p = sub.add_parser("css", help="rule-level surgery inside the style block")
    p.add_argument("action", choices=["get", "set"])
    p.add_argument("selector")
    p.add_argument("prop", nargs="?")
    p.add_argument("value", nargs="?")
    p.add_argument("--file", choices=list(FILES))
    p.add_argument("--dry-run", action="store_true")
    p.set_defaults(fn=cmd_css)
    return ap


def main():
    ap = build_parser()
    args = ap.parse_args()
    try:
        if args.cmd == "css" and args.action == "set" and (not args.prop or not args.value):
            raise KitError("css set needs: selector prop value")
        if args.cmd == "theme" and args.action == "set" and not args.pairs:
            raise KitError("theme set needs TOKEN=value pairs")
        if args.cmd == "theme" and args.action in ("export", "apply") and not args.path:
            raise KitError(f"theme {args.action} needs PATH")
        rc = args.fn(args)
        sys.exit(rc or 0)
    except KitError as ex:
        print(f"systems-kit: {ex}", file=sys.stderr)
        sys.exit(1)


if __name__ == "__main__":
    main()
