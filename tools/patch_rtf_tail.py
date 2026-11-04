#!/usr/bin/env python3
"""Patch the ALL MCQs RTF export tail (sections 2-5) to match the fixed
Study Book module: keyed unkeyed drills, wrong drill keys (PPD, deep ring),
repair clipped option texts. Uses the book module's data.js (escaped JSON)
as the source of truth for stems/options/data-correct.

Usage: python3 tools/patch_rtf_tail.py <export.rtf>
"""
import json
import os
import re
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
BOOK = os.path.join(ROOT, "site", "resources",
                    "medcore-production-master-html-medcore-master-book", "data.js")

CLIPS = [
    ("iabetes insipidus", "Diabetes insipidus"),
    ("iabetic ketoacidosis", "Diabetic ketoacidosis"),
    ("ssential hypertension", "Essential hypertension"),
    ("iarrhea", "Diarrhea"),
    ("thanol", "Ethanol"),
    ("enzodiazepines", "Benzodiazepines"),
    ("cetaminophen", "Acetaminophen"),
    ("nxiety-induced", "Anxiety-induced"),
    ("iuretic use", "Diuretic use"),
    ("cetazolamide", "Acetazolamide"),
    ("onn syndrome", "Conn syndrome"),
    ("ushing syndrome", "Cushing syndrome"),
    ("artter syndrome", "Bartter syndrome"),
    ("cidemia", "Acidemia"),
    ("cidosis", "Acidosis"),
    ("naemia", "Anaemia"),
    ("ompensated", "Compensated"),
    ("oncurrent", "Concurrent"),
    ("hronic", "Chronic"),
    ("cute asthma", "Acute asthma"),
    ("cute ", "Acute "),
    ("ecreased", "Decreased"),
    ("nd-diastolic", "End-diastolic"),
    ("fterload", "Afterload"),
    ("ontractility", "Contractility"),
    ("ccessory", "Accessory"),
    ("pithelial", "Epithelial"),
    ("inding", "Binding"),
    ("xocytosis", "Exocytosis"),
    ("iffusion", "Diffusion"),
    ("lveolar", "Alveolar"),
    ("entral diabetes", "Central diabetes"),
    ("levated", "Elevated"),
    ("crodermatitis", "Acrodermatitis"),
    ("utoimmune", "Autoimmune"),
    ("ietary", "Dietary"),
    ("acterial", "Bacterial"),
    ("ystathionine", "Cystathionine"),
    ("ranched-chain", "Branched-chain"),
    ("lkaptonuria", "Alkaptonuria"),
    ("hlers-Danlos", "Ehlers-Danlos"),
    ("ori disease", "Cori disease"),
    ("ndersen", "Andersen"),
    ("eferoxamine", "Deferoxamine"),
    ("opper", "Copper"),
    ("nticipation", "Anticipation"),
    ("iotin", "Biotin"),
    ("obalamin", "Cobalamin"),
    ("trial contraction", "Atrial contraction"),
    ("ctivation", "Activation"),
    ("irect opening", "Direct opening"),
    ("utosomal", "Autosomal"),
    ("ll zones", "All zones"),
    ("lbd arthritis", "IBD arthritis"),
]
LEGIT = ("c-ANCA", "p-ANCA", "p40", "β", "α", "von ", "pH ")


def decode_rtf(raw):
    def byte(m):
        try:
            return bytes([int(m.group(1), 16)]).decode('cp1252')
        except Exception:
            return '?'
    t = re.sub(r"\\'([0-9a-fA-F]{2})", byte, raw)
    t = re.sub(r'\\u(-?\d{1,6})\s*\??', lambda m: chr(abs(int(m.group(1)))), t)
    t = re.sub(r'\\[a-zA-Z]+-?[0-9]* ?', '', t)
    return t.replace('{', '').replace('}', '')


def esc(text):
    out = []
    for ch in text:
        if ch == "\\":
            out.append("\\\\")
        elif ch in "{}":
            out.append("\\" + ch)
        elif ord(ch) < 128:
            out.append(ch)
        else:
            try:
                byte = ch.encode("cp1252")[0]
            except Exception:
                out.append("\\u%d?" % (ord(ch) if ord(ch) < 32768 else ord(ch) - 65536))
            else:
                out.append("\\'%02x" % byte)
    return "".join(out)


def book_drills():
    src = open(BOOK, encoding="utf-8").read()
    ms = [m.start() for m in re.finditer(r'<div class=\\\"?q\\\"?', src)]
    drills = []
    for i, st in enumerate(ms):
        nxt = ms[i + 1] if i + 1 < len(ms) else len(src)
        inner = src[st:nxt]
        m = re.search(r'<div class=\\\\?"q-stem\\\\">(.*?)</div>', inner, re.S)
        if not m:
            m2 = re.search(r'q-stem\\">(.*?)</div>', inner, re.S)
            m = m2
        if not m:
            continue
        stem = m.group(1).replace('\\"', '"').replace('&gt;', '>').replace(
            '&lt;', '<').replace('&amp;', '&').replace('&amp;', '&').replace('&#39;', "'")
        opts_raw = re.findall(r'<span class=\\+"opt-t\\+">(.*?)'+ '</span>', inner)
        opts = [o.replace('\\"', '"').replace('&gt;', '>').replace('&lt;', '<')
                .replace('&amp;', '&').replace('&#39;', "'") for o in opts_raw]
        cm = re.search(r'data-correct=\\\\?"(-?\d+)\\\\?"', inner)
        key = int(cm.group(1)) if cm else None
        drills.append(dict(stem=stem, opts=opts, key=key))
    return drills


def main():
    path = sys.argv[1].strip()
    raw = open(path, encoding='utf-8', errors='ignore').read()
    sec2 = raw.find('SECTION 2 ')
    if sec2 < 0:
        sys.exit('SECTION 2 not found')
    head, tail = raw[:sec2], raw[sec2:]
    plain = decode_rtf(tail)
    lines = plain.split('\n')

    drills = book_drills()
    print('DBG2 drills:', len(drills), file=sys.stderr)
    by_stem = {}
    for d in drills:
        by_stem[d["stem"][:80]] = d
    print('DBG2 by_stem:', len(by_stem), file=sys.stderr)

    patched = keyed = clipn = 0
    dbg = dict(markers=0, ma=0, dhit=0, keyable=0, applied=0)
    i = 0
    while i < len(lines):
        line = lines[i]
        m = re.match(r'^\[(\d{1,5})\]\s*(.*)$', line)
        if not m:
            i += 1
            continue
        dbg['markers'] += 1
        stem = m.group(2)
        # gather the block extent: consecutive lines until next [n] marker
        j = i + 1
        blk = []
        while j < len(lines) and not re.match(r'^\[\d{1,5}\]\s', lines[j]):
            blk.append(j)
            j += 1
        # drill match: longest common normalized prefix, prefer keyed drills
        a = normline(stem)
        d_hit = None
        bestlen = 0
        for stem80, d in by_stem.items():
            b = normline(stem80)
            n = 0
            m_ = min(len(a), len(b))
            while n < m_ and a[n] == b[n]:
                n += 1
            if n > bestlen and (d["key"] is not None or bestlen == 0):
                dbg['dhit'] = dbg.get('dhit', 0) + 1
                if d["key"] is not None or d_hit is None:
                    d_hit, bestlen = d, n
        if 'MUDPILES' in stem:
            print('DBG', dbg['markers'], repr(stem[:44]),
                  'd_hit_key=', None if d_hit is None else d_hit['key'],
                  'optslen=', None if d_hit is None else len(d_hit['opts']), file=sys.stderr)
        for k in blk:
            L = lines[k]
            # option lines: clipped repair
            mo = re.match(r'^(\s*)([A-E]\)) (.*)$', L)
            if mo:
                L = mo.group(1) + mo.group(2) + ' ' + mo.group(3)
                o = mo.group(3)
                for frag, full in CLIPS:
                    if o.startswith(frag) and not o.startswith(LEGIT):
                        lines[k] = mo.group(1) + mo.group(2) + ' ' + full + o[len(frag):]
                        clipn += 1
                        break
                continue
            # ANSWER lines
            ma = re.match(r'^(\s*)ANSWER:\s*(.*)$', L)
            if ma:
                dbg['ma'] += 1
            if ma:
                dbg['ma'] += 1
            if ma and d_hit and d_hit["key"] is not None and len(d_hit["opts"]) > d_hit["key"]:
                want_line = ma.group(1) + "ANSWER: %s) %s" % (chr(65 + d_hit["key"]), d_hit["opts"][d_hit["key"]])
                dbg['keyable'] += 1
                if normline(ma.group(2)) != normline("%s) %s" % (chr(65 + d_hit["key"]), d_hit["opts"][d_hit["key"]])):
                    lines[k] = want_line
                    keyed += 1
                    dbg['applied'] += 1
        i = j

    # rewrite tail (re-encode)
    new_plain = '\n'.join(lines)
    new_tail = '\\\n'.join(new_plain.split('\n'))
    if not new_tail.endswith('\\\\\n') and not new_tail.endswith('\\\\'):
        pass
    out = head + new_tail
    with open(path, 'w', encoding='utf-8') as fh:
        fh.write(out)
    print('clip repairs:', clipn, '| answer lines fixed:', keyed, '| dbg:', {k: v for k, v in dbg.items()})


def normline(s):
    return re.sub(r'[^a-z0-9]+', ' ', s.lower()).strip()


if __name__ == '__main__':
    main()
