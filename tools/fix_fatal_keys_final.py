#!/usr/bin/env python3
"""Fatal-issue fixer, 2026-11-03 audit. Final integrated version.

  data.js   : wrong keys (femoral / pancreatitis / Down avsd) + layer rewrites
              + all clipped first-letter options
  master book: 2 wrong drill keys (PPD -> Type IV, deep ring -> indirect),
              all clipped option spans, 37 unkeyed drills keyed
              (manual clinical keys first, then safe text-remapped twins)
  mcq_index.jsonl (site + root): wrong-keyed / clipped twins harmonized

Safety:
  - every repair located by normalized stem / option TEXT (order-proof)
  - layers rewritten only when the key actually changes
  - never reorders options, never touches by-design review-loop content
  - aborts if data.js changes mid-run (concurrent agent guard)

Usage:  python3 tools/fix_fatal_keys_final.py [--dry]
"""
import json
import os
import re
import collections
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA_JS = os.path.join(ROOT, "site", "resources", "medcore-question-bank", "data.js")
BOOK = os.path.join(ROOT, "site", "resources",
                    "medcore-production-master-html-medcore-master-book", "data.js")
INDEX_SITE = os.path.join(ROOT, "site", "hub-data", "mcq_index.jsonl")
INDEX_ROOT = os.path.join(ROOT, "hub-data", "mcq_index.jsonl")
DRY = "--dry" in sys.argv
REPORT = collections.OrderedDict()


def norm(s):
    return re.sub(r"[^a-z0-9]+", " ", s.lower()).strip()


KEY_FIXES = [
    dict(tag="femoral",
         stem_sub="small reducible groin lump below the pubic tubercle",
         correct_opt="urgent surgical consult",
         concept="Femoral hernia — repair, observation is not safe",
         trap="Reducibility does not make a femoral hernia safe to watch",
         rule="Groin lump below & lateral to the pubic tubercle = femoral hernia → surgical repair: the narrow femoral channel has the highest strangulation risk of all groin hernias. Observation or truss is the wrong answer.",
         highyield="Femoral hernia (below pubic tubercle), even reducible and painless → repair without delay; truss/watchful waiting risks strangulation."),
    dict(tag="pancreatitis-day10",
         stem_sub="pancreatitis develops fever and leukocytosis",
         correct_opt="infected pancreatic necrosis",
         concept="Infected pancreatic necrosis (day 10 post-AP, fever + leukocytosis)",
         trap="Abscess vs infected necrosis vs pseudocyst — the timing discriminator",
         rule="Week 1-3 of acute pancreatitis + fever + leukocytosis with a peripancreatic collection on CT = INFECTED pancreatic necrosis. Pancreatic abscess is the older (4-6 week) walled-off purulent term; pseudocyst is uninfected.",
         highyield="AP, day 10, fever + leukocytosis + collection on CT = infected necrosis → antibiotics + drainage/debridement."),
    dict(tag="down-chd",
         stem_sub="congenital heart defects is most commonly associated with down syndrome",
         correct_opt="atrioventricular septal defect",
         concept="Atrioventricular septal defect (endocardial cushion) — Down syndrome",
         trap="VSD is the population-commonest CHD — but Down syndrome keys AVSD",
         rule="Down syndrome's most associated CHD = AV septal defect (endocardial cushion defect); VSD is the population-common decoy.",
         highyield="MCQ staple: commonest CHD in Down syndrome = AVSD (40-50%), then VSD."),
]

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
LEGIT_LOWER = ("c-ANCA", "p-ANCA", "p40", "β", "α", "von ", "pH ")

BOOK_KEY_FIXES = [
    ("ppd-drill",
     "Which type of hypersensitivity reaction is responsible for the PPD skin test",
     "Type IV (delayed cell-mediated)"),
    ("deepring-drill",
     "fingers can feel the cough impulse at the deep ring after reduction",
     "Indirect inguinal hernia"),
]

MANUAL_DRILL_KEYS = [
    ("abg-normal-ph", "volunteers for an arterial blood gas", "7.35-7.45"),
    ("mudpiles", "MUDPILES mnemonic", "Uremia"),
    ("caO2", "arterial oxygen content (CaO2)", "1.34"),
    ("dka-complete", "most complete acid-base diagnosis", "appropriate respiratory compensation"),
    ("rickets-labs", "cupping and fraying of the distal metaphyses", "elevated PTH"),
    ("coenzyme-a", "structural component of coenzyme A", "Pantothenic acid"),
    ("inh-b6", "ringed sideroblasts on bone marrow biopsy", "Pyridoxine"),
    ("sjogren-rta", "Sjögren syndrome presents with hypokalemia", "5.5"),
    ("met-alk-cl8", "urine chloride is 8 mEq/L", "Vomiting"),
    ("cirrhosis-sepsis", "ascites is admitted with sepsis",
     "high AG metabolic acidosis (lactic)"),
    ("angular-cheilitis", "painful cracks at the corners", "Riboflavin"),
    ("pellagra", "photosensitive rash on sun-exposed", "Pellagra"),
    ("scurvy", "ecchymoses over his arms and legs", "Vitamin C (ascorbic acid)"),
    ("homocystinuria-ectopia", "confirms deep vein thrombosis", "Homocystinuria"),
    ("angelman", "severe intellectual disability, absence of speech",
     "maternally expressed genes lost"),
]


def load_subjects():
    src = open(DATA_JS, encoding="utf-8").read()
    start = src.index("[", src.index("SUBJECTS"))
    # string-aware bracket matching: skip quoted strings (with \" escapes)
    i = start
    depth = 0
    in_str = False
    esc = False
    end = None
    while i < len(src):
        c = src[i]
        if in_str:
            if esc:
                esc = False
            elif c == "\\":
                esc = True
            elif c == '"':
                in_str = False
        else:
            if c == '"':
                in_str = True
            elif c == "[":
                depth += 1
            elif c == "]":
                depth -= 1
                if depth == 0:
                    end = i
                    break
        i += 1
    if end is None:
        raise SystemExit("SUBJECTS array end not found")
    return json.loads(src[start:end + 1]), (start, end), src


def fix_data_js():
    subs, span, src = load_subjects()
    index = {}
    for s in subs:
        for qi, q in enumerate(s["questions"]):
            index.setdefault(norm(q.get("q", "")), (s["id"], qi, q))

    keylog = []
    for fx in KEY_FIXES:
        hit = next(((sid, qi, q) for k, (sid, qi, q) in index.items()
                    if fx["stem_sub"] in k), None)
        if not hit:
            keylog.append((fx["tag"], "STEM NOT FOUND", ""))
            continue
        sid, qi, q = hit
        opts = q.get("options", [])
        cq = norm(fx["correct_opt"])
        matches = [o for o in opts if norm(o).startswith(cq)]
        if len(matches) != 1:
            keylog.append((fx["tag"], f"{sid}#{qi} {len(matches)} prefix matches",
                           " | ".join(o[:26] for o in opts)[:110]))
            continue
        idx = opts.index(matches[0])
        changes = []
        old = q.get("answer")
        if old != idx:
            changes.append(f"answer {old} -> {chr(65+idx)}")
            L = q.setdefault("layers", {})
            for name, val in (("concept", fx["concept"]), ("trap", fx["trap"]),
                              ("rule", fx["rule"]), ("highyield", fx["highyield"])):
                if L.get(name) != val:
                    L[name] = val
                    changes.append(name)
        else:
            keylog.append((fx["tag"], f"{sid}#{qi}", "key already correct"))
            continue
        keylog.append((fx["tag"], f"{sid}#{qi}", "; ".join(changes)))

    cliplog = []
    for s in subs:
        for qi, q in enumerate(s["questions"]):
            for oi, o in enumerate(q.get("options", [])):
                if o.startswith(LEGIT_LOWER):
                    continue
                for frag, full in CLIPS:
                    if o.startswith(frag) and o != full:
                        new = full + o[len(frag):]
                        q["options"][oi] = new
                        cliplog.append((s["id"], qi, oi, o[:34], new[:40]))
                        break
    return subs, span, src, keylog, cliplog


def fix_book():
    src = open(BOOK, encoding="utf-8").read()
    ms = [m for m in re.finditer(r'<div class="q" id="q-[^"]+"[^>]*>', src)]
    divs = []
    for i, m in enumerate(ms):
        nxt = ms[i + 1].start() if i + 1 < len(ms) else len(src)
        divs.append(dict(start=m.start(), end=nxt,
                         inner=src[m.start():nxt]))

    subs, _, _ = load_subjects()
    dj_twins = {}
    for s in subs:
        for q in s["questions"]:
            key = (norm(q.get("q", "")),
                   tuple(norm(o) for o in q.get("options", [])))
            dj_twins.setdefault(key, q)

    # 1) wrong drill keys
    keylog = []
    for tag, stem_sub, correct_opt in BOOK_KEY_FIXES:
        done = False
        for d in divs:
            m = re.search(r'<div class="q-stem">([^<]+)</div>', d["inner"])
            if not m or stem_sub.lower() not in m.group(1).lower():
                continue
            opts = re.findall(r'<span class="opt-t">([^<]*)</span>', d["inner"])
            target = next((oi for oi, o in enumerate(opts)
                           if norm(o).startswith(norm(correct_opt))), None)
            if target is None:
                keylog.append((tag, "OPTION NOT FOUND",
                               " | ".join(o[:24] for o in opts)[:100]))
                done = True
                break
            cm = re.search(r'data-correct="?(-?\d)"?', d["inner"])
            cur = cm.group(1) if cm else "?"
            if cur == str(target):
                keylog.append((tag, m.group(1)[:56], "already correct"))
            else:
                d["inner"] = d["inner"].replace(cm.group(0),
                                                f'data-correct="{target}"', 1)
                keylog.append((tag, m.group(1)[:56],
                               f"data-correct {cur} -> {target} ({chr(65+target)})"))
            done = True
            break
        if not done:
            keylog.append((tag, "STEM NOT FOUND", ""))

    # 2) clipped option spans (span-start anchored)
    cliplog = []
    for d in divs:
        inner = d["inner"]
        new_inner = inner
        for frag, full in CLIPS:
            pat = re.compile(r'<span class="opt-t">' + re.escape(frag))
            mm = pat.search(new_inner)
            if mm:
                pos = mm.start()
                new_inner = (new_inner[:pos] + '<span class="opt-t">' + full
                             + new_inner[pos + len('<span class="opt-t">' + frag):])
                qid = re.match(r'<div class="q" id="(q-[^"]+)"', inner)
                cliplog.append(((qid.group(1)[2:24] if qid else "?"),
                                frag[:20], full[:26]))
        if new_inner != inner:
            d["inner"] = new_inner

    # 3) unkeyed drills -> keys
    keyed, residue = [], []
    for d in divs:
        if 'data-correct="-1"' not in d["inner"]:
            continue
        m = re.search(r'<div class="q-stem">([^<]+)</div>', d["inner"])
        if not m:
            continue
        stem = m.group(1)
        opts = re.findall(r'<span class="opt-t">([^<]*)</span>', d["inner"])
        nstem = norm(stem)
        ans_idx = ans_txt = None

        for tag, sub, want in MANUAL_DRILL_KEYS:
            if sub.lower() in stem.lower():
                cands = [oi for oi, o in enumerate(opts) if want.lower() in o.lower()]
                if len(cands) == 1:
                    ans_idx, ans_txt = cands[0], opts[cands[0]]
                break
        if ans_idx is None:
            tw = dj_twins.get((nstem, tuple(norm(o) for o in opts)))
            if tw is not None and isinstance(tw.get("answer"), int) \
                    and 0 <= tw["answer"] < len(opts):
                ans_idx, ans_txt = tw["answer"], opts[tw["answer"]]
        if ans_idx is None:
            cands = [k for k in dj_twins
                     if sorted(k[1]) == sorted(norm(o) for o in opts) and
                     (k[0] == nstem or k[0] in nstem or nstem in k[0])]
            if len(cands) == 1:
                tw = dj_twins[cands[0]]
                if isinstance(tw.get("answer"), int) and 0 <= tw["answer"] < len(opts):
                    ans_idx, ans_txt = tw["answer"], opts[tw["answer"]]
        if ans_idx is None:
            residue.append((stem[:60], " | ".join(o[:18] for o in opts)[:96]))
            continue
        d["inner"] = d["inner"].replace('data-correct="-1"',
                                        f'data-correct="{ans_idx}"', 1)
        keyed.append((stem[:48], f"-> {chr(65+ans_idx)} {ans_txt[:34]}"))

    out, cur = [], 0
    for d in divs:
        out.append(src[cur:d["start"]])
        out.append(d["inner"])
        cur = d["end"]
    logit = dict(keys=keylog, clipped=cliplog, keyed=keyed, residue=residue)
    return "".join(out), logit


def fix_warehouse():
    recs = [json.loads(l) for l in open(INDEX_SITE, encoding="utf-8") if l.strip()]
    stems = collections.defaultdict(list)
    for r in recs:
        stems[norm(r.get("stem", ""))].append(r)
    changes = []
    fx_list = [dict(tag=f["tag"], stem_sub=f["stem_sub"],
                    correct_opt=f["correct_opt"]) for f in KEY_FIXES]
    fx_list.append(dict(tag="ppd", stem_sub="ppd skin test",
                        correct_opt="Type IV (delayed cell-mediated)"))
    fx_list.append(dict(tag="deepring", stem_sub="deep ring after reduction",
                        correct_opt="Indirect inguinal hernia"))
    for fx in fx_list:
        for k, rs in stems.items():
            if fx["stem_sub"] not in k:
                continue
            for r in rs:
                opts = r.get("opts", [])
                idx = next((oi for oi, o in enumerate(opts)
                            if norm(o).startswith(norm(fx["correct_opt"]))), None)
                if idx is None:
                    continue
                want = "ABCDE"[idx]
                if r.get("correct_letter") != want:
                    changes.append(f"{r['uid']}: key {r.get('correct_letter')} -> {want}")
                    r["correct_letter"] = want
                    r["c"] = idx
    for r in recs:
        for oi, o in enumerate(r.get("opts", [])):
            if o.startswith(LEGIT_LOWER):
                continue
            for frag, full in CLIPS:
                if o.startswith(frag) and o != full:
                    r["opts"][oi] = full + o[len(frag):]
                    changes.append(f"{r['uid']}: opts[{oi}] -> {full[:20]}")
                    break
    return recs, changes


def main():
    marker = (os.path.getmtime(DATA_JS), os.path.getsize(DATA_JS))

    subs, span, src, keylog, cliplog = fix_data_js()
    REPORT["data.js keys"] = keylog
    REPORT["data.js clipped"] = cliplog

    newbook, blog = fix_book()
    REPORT["book keys"] = blog["keys"]
    REPORT["book clipped"] = blog["clipped"]
    REPORT["book unkeyed -> keyed"] = blog["keyed"]
    REPORT["book unkeyed residue"] = blog["residue"]

    recs, wchanges = fix_warehouse()
    REPORT["warehouse"] = wchanges

    print(json.dumps(REPORT, ensure_ascii=False, indent=1, default=str))

    if DRY:
        print("DRY RUN — no writes")
        return

    if (os.path.getmtime(DATA_JS), os.path.getsize(DATA_JS)) != marker:
        sys.exit("ABORT: data.js changed under us (concurrent agent) — rerun")

    start, end = span
    body = json.dumps(subs, ensure_ascii=False, separators=(",", ":"))
    with open(DATA_JS, "w", encoding="utf-8") as fh:
        fh.write(src[:start] + body + src[end + 1:])
    with open(BOOK, "w", encoding="utf-8") as fh:
        fh.write(newbook)
    for p in (INDEX_SITE, INDEX_ROOT):
        with open(p, "w", encoding="utf-8") as fh:
            for r in recs:
                fh.write(json.dumps(r, ensure_ascii=False) + "\n")
    print("WRITES DONE")


if __name__ == "__main__":
    main()
