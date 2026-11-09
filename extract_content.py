#!/usr/bin/env python3
"""
MedCoreX Content Extractor
==========================
Extracts all semantic content from MedCoreX HTML modules into a
theme-agnostic database folder on the Desktop.

Output structure:
  ~/Desktop/MedCoreX_Content_DB/
    catalog.json          # Master index of all modules + shell pages
    modules/              # One folder per content module
      <module-slug>/
        meta.json         # Module metadata (title, desc, category, file, type)
        content.json      # Extracted semantic content (headings, sections, text)
        mcqs.json         # MCQs (if any)
    hub-data/             # Copy of site/hub-data/ (already structured)
    shell/                # Shell page content (index, about, faq, library, 404)
"""

import json
import os
import re
import shutil
import html
from html.parser import HTMLParser
from pathlib import Path
from datetime import datetime

# ── paths ──────────────────────────────────────────────────────────────────
REPO = Path("/Users/ahmdzafr/Library/Mobile Documents/com~apple~CloudDocs/MedCoreX")
SITE = REPO / "site"
RESOURCES = SITE / "resources"
HUB_DATA = SITE / "hub-data"
DESKTOP = Path("/Users/ahmdzafr/Desktop")
OUT = DESKTOP / "MedCoreX_Content_DB"

# ── catalog ────────────────────────────────────────────────────────────────
with open(REPO / "catalog.json") as f:
    CATALOG = json.load(f)

# Build a lookup: filename → catalog entry
FILE_TO_ENTRY = {}
for item in CATALOG["items"]:
    FILE_TO_ENTRY[item["f"]] = item


class ContentParser(HTMLParser):
    """
    Extracts semantic content from HTML: headings, paragraphs, list items,
    details/summary blocks, and text nodes. Ignores presentation (classes,
    inline styles, layout divs).
    """

    def __init__(self):
        super().__init__()
        self.sections = []
        self._stack = []
        self._text_buffer = []
        self._in_script = False
        self._in_style = False
        self._capture = True

    def handle_starttag(self, tag, attrs):
        attr_dict = dict(attrs)
        if tag in ("script", "style"):
            self._in_script = tag
            self._capture = False
            return
        if not self._capture:
            return

        if tag in ("h1", "h2", "h3", "h4", "h5", "h6", "p", "li", "dt", "dd",
                   "summary", "blockquote", "pre", "table", "tr", "td", "th"):
            self._flush_text()

        if tag in ("h1", "h2", "h3", "h4", "h5", "h6"):
            level = int(tag[1])
            self._stack.append({"kind": "heading", "level": level})
        elif tag == "details":
            self._stack.append({"kind": "detail"})
        elif tag == "summary":
            self._stack.append({"kind": "summary"})
        elif tag == "p":
            self._stack.append({"kind": "paragraph"})
        elif tag == "li":
            self._stack.append({"kind": "list-item"})
        elif tag == "div":
            cls = attr_dict.get("class", "")
            if "band" in cls:
                self._stack.append({"kind": "band"})
            elif "alert-strip" in cls:
                self._stack.append({"kind": "alert"})
            elif "mcq" in cls or "question" in cls:
                self._stack.append({"kind": "mcq-container"})
            elif "option" in cls:
                self._stack.append({"kind": "option"})

    def handle_endtag(self, tag):
        if tag in ("script", "style"):
            self._in_script = False
            self._capture = True
            return
        if not self._capture:
            return

        self._flush_text()

        closing_kinds = {
            "h1": "heading", "h2": "heading", "h3": "heading", "h4": "heading",
            "h5": "heading", "h6": "heading",
            "details": "detail", "summary": "summary",
            "p": "paragraph", "li": "list-item",
        }
        if tag in closing_kinds and self._stack:
            node = self._stack.pop()
            self._flush_text_into(node)
            if self._stack:
                self._stack[-1].setdefault("children", []).append(node)
            else:
                self.sections.append(node)
        elif tag == "div" and self._stack:
            # Pop the most recent div-based section if it matches
            node = self._stack.pop()
            self._flush_text_into(node)
            if self._stack:
                self._stack[-1].setdefault("children", []).append(node)
            else:
                self.sections.append(node)

    def handle_data(self, data):
        if not self._capture or self._in_script:
            return
        text = data.strip()
        if text:
            self._text_buffer.append(text)

    def handle_entityref(self, name):
        if self._capture and not self._in_script:
            self._text_buffer.append("&" + name + ";")

    def handle_charref(self, name):
        if self._capture and not self._in_script:
            self._text_buffer.append("&#" + name + ";")

    def _flush_text(self):
        if self._text_buffer:
            text = " ".join(self._text_buffer)
            text = html.unescape(text)
            if text and self._stack:
                self._stack[-1].setdefault("text", [])
                self._stack[-1]["text"].append(text)
            self._text_buffer = []

    def _flush_text_into(self, node):
        if self._text_buffer:
            text = " ".join(self._text_buffer)
            text = html.unescape(text)
            if text:
                node.setdefault("text", []).append(text)
            self._text_buffer = []


def extract_meta_from_html(filepath):
    """Extract title, description, and other metadata from an HTML file's head."""
    with open(filepath, encoding="utf-8", errors="replace") as f:
        content = f.read()

    meta = {}
    m_title = re.search(r"<title>(.*?)</title>", content, re.DOTALL | re.IGNORECASE)
    if m_title:
        meta["title"] = html.unescape(m_title.group(1).strip())

    m_desc = re.search(
        r'<meta[^>]+name=["\']description["\'][^>]+content=["\'](.*?)["\']',
        content, re.DOTALL | re.IGNORECASE,
    )
    if m_desc:
        meta["description"] = html.unescape(m_desc.group(1).strip())

    has_json_bank = bool(re.search(r"var\s+DATA\s*=", content))
    has_json_parse = bool(re.search(r"JSON\.parse\(", content))
    meta["has_embedded_json"] = has_json_bank or has_json_parse
    meta["uses_studyverse"] = "studyverse.css" in content
    meta["uses_custom_fonts"] = bool(re.search(r'fonts\.googleapis\.com', content))
    meta["hardcoded_dark_mode"] = 'data-mode="dark"' in content
    meta["h1_count"] = len(re.findall(r"<h1[^>]*>", content, re.IGNORECASE))
    meta["h2_count"] = len(re.findall(r"<h2[^>]*>", content, re.IGNORECASE))
    meta["h3_count"] = len(re.findall(r"<h3[^>]*>", content, re.IGNORECASE))
    meta["details_count"] = len(re.findall(r"<details[^>]*>", content, re.IGNORECASE))

    hex_colors = set(re.findall(r"#([0-9a-fA-F]{3,8})\b", content))
    meta["hex_colors_used"] = sorted(hex_colors)[:20]

    return meta, content


def extract_mcqs_from_jsonl(bank_code):
    """Extract MCQs for a given bank code from mcq_index.jsonl."""
    mcqs = []
    jsonl_path = HUB_DATA / "mcq_index.jsonl"
    if not jsonl_path.exists():
        return mcqs
    with open(jsonl_path, encoding="utf-8") as f:
        for line in f:
            line = line.strip()
            if not line:
                continue
            try:
                record = json.loads(line)
                if record.get("bank") == bank_code:
                    mcqs.append({
                        "uid": record.get("uid"),
                        "stem": record.get("stem"),
                        "opts": record.get("opts", []),
                        "correct_index": record.get("c"),
                        "correct_letter": record.get("correct_letter"),
                        "subject": record.get("subject"),
                        "topic": record.get("topic"),
                        "topic_confidence": record.get("topic_confidence"),
                        "evidence": record.get("evidence"),
                        "source_file": record.get("source_file"),
                    })
            except json.JSONDecodeError:
                continue
    return mcqs


def infer_bank_code(filename, cat_entry):
    """Try to infer the MCQ bank code from a filename."""
    fname_upper = filename.upper()
    # Known bank codes
    known_banks = [
        "JUN24", "DEC24", "DEC25", "MAY26", "JUN25", "PRED26",
        "MCORE", "MOCKBNK", "MOCK200",
        "TS1", "TS2", "TS3", "TS4", "TS5", "TS6", "TS7", "TS8", "TS9",
        "DRILL-DIABETES", "DRILL-ELECTROLYTES", "DRILL-ENDOCRINE",
        "DRILL-ENDOCRINESURGERY", "DRILL-ENT", "DRILL-GI",
        "DRILL-HAEMATOLOGY", "DRILL-HEPATOLOGY", "DRILL-NEURO",
        "DRILL-NUTRITION", "DRILL-ONCOLOGY", "DRILL-OPHTHALMOLOGY",
        "DRILL-PSYCH", "DRILL-RENAL", "DRILL-UROLOGY",
    ]
    for bank in known_banks:
        if bank in fname_upper:
            return bank
    # Try to match category + keyword
    if cat_entry:
        cat = cat_entry.get("c", "").upper()
        title = cat_entry.get("t", "").upper()
        if "PAST PAPER" in cat or "ANSWER KEY" in cat:
            # Try to extract date from title
            m = re.search(r"(JUNE|DECEMBER|MAY)\s*(\d{4})", title)
            if m:
                month = {"JUNE": "JUN", "DECEMBER": "DEC", "MAY": "MAY"}[m.group(1)]
                year = m.group(2)[-2:]
                return f"{month}{year}"
        if "PREDICTION" in title:
            return "PRED26"
    return None


def slugify(name):
    return re.sub(r"[^a-z0-9]+", "-", name.lower()).strip("-")


def process_module(filepath, cat_entry, used_slugs):
    """Process a single module HTML file and return extracted data."""
    rel_path = filepath.relative_to(REPO).as_posix()
    fname = filepath.name
    meta, content = extract_meta_from_html(filepath)

    # Build slug, handling duplicates
    base_slug = slugify(cat_entry["t"] if cat_entry else fname.replace(".html", ""))
    slug = base_slug
    counter = 1
    while slug in used_slugs:
        slug = f"{base_slug}-{counter}"
        counter += 1
    used_slugs.add(slug)

    # Parse HTML content
    parser = ContentParser()
    parser.feed(content)

    # Extract MCQs from embedded JSON first
    # (both shapes exist on the site: `var DATA = { qs: [...], notes: [...] }`
    #  and the older `var DATA = [ ... ]` — json.raw_decode handles either)
    mcqs = []
    m_data = re.search(r"var\s+DATA\s*=\s*", content)
    if m_data:
        try:
            data, _ = json.JSONDecoder().raw_decode(content, m_data.end())
            items = data.get("qs", []) if isinstance(data, dict) else data
            if isinstance(items, list):
                for item in items:
                    if isinstance(item, dict) and ("stem" in item or "question" in item):
                        mcqs.append(item)
        except json.JSONDecodeError:
            pass

    # If no embedded MCQs, try hub-data match by bank code
    if not mcqs and cat_entry:
        bank_code = infer_bank_code(fname, cat_entry)
        if bank_code:
            mcqs = extract_mcqs_from_jsonl(bank_code)

    return {
        "slug": slug,
        "file": rel_path,
        "catalog": cat_entry or {},
        "meta": meta,
        "content": parser.sections,
        "mcqs": mcqs,
        "mcq_count": len(mcqs),
    }


def process_shell_page(filepath):
    """Process a shell page (index, about, etc.)"""
    meta, content = extract_meta_from_html(filepath)
    parser = ContentParser()
    parser.feed(content)
    return {
        "file": filepath.relative_to(SITE).as_posix(),
        "meta": meta,
        "content": parser.sections,
        "mcqs": [],
        "mcq_count": 0,
    }


def main():
    # ── create output folders ─────────────────────────────────────────
    OUT.mkdir(parents=True, exist_ok=True)
    (OUT / "modules").mkdir(exist_ok=True)
    (OUT / "hub-data").mkdir(exist_ok=True)
    (OUT / "shell").mkdir(exist_ok=True)

    print(f"Output directory: {OUT}\n")

    # ── process all modules ───────────────────────────────────────────
    module_index = []
    used_slugs = set()
    html_files = sorted(RESOURCES.rglob("*.html"))

    for filepath in html_files:
        fname = filepath.name
        cat_entry = FILE_TO_ENTRY.get(fname)

        # Skip admin keyhole page
        if "keyhole" in fname.lower():
            print(f"  SKIP (admin): {fname}")
            continue

        print(f"  Extracting: {fname}")
        data = process_module(filepath, cat_entry, used_slugs)
        slug = data["slug"]
        mod_out = OUT / "modules" / slug
        mod_out.mkdir(exist_ok=True)

        # Write module files (keep content and mcqs separate from meta)
        with open(mod_out / "meta.json", "w", encoding="utf-8") as f:
            json.dump({
                "slug": data["slug"],
                "file": data["file"],
                "catalog": data["catalog"],
                "meta": data["meta"],
                "mcq_count": data["mcq_count"],
            }, f, indent=2, ensure_ascii=False)

        with open(mod_out / "content.json", "w", encoding="utf-8") as f:
            json.dump(data["content"], f, indent=2, ensure_ascii=False)

        with open(mod_out / "mcqs.json", "w", encoding="utf-8") as f:
            json.dump(data["mcqs"], f, indent=2, ensure_ascii=False)

        module_index.append({
            "slug": slug,
            "title": cat_entry.get("t", "") if cat_entry else fname,
            "category": cat_entry.get("c", "") if cat_entry else "",
            "file": data["file"],
            "mcq_count": data["mcq_count"],
            "uses_studyverse": data["meta"].get("uses_studyverse", False),
            "hex_colors_count": len(data["meta"].get("hex_colors_used", [])),
        })

    # ── process shell pages ───────────────────────────────────────────
    shell_index = []
    for shell_name in ["index.html", "about.html", "faq.html", "library.html", "404.html"]:
        filepath = SITE / shell_name
        if filepath.exists():
            slug = shell_name.replace(".html", "")
            print(f"  Extracting shell: {shell_name}")
            data = process_shell_page(filepath)
            with open(OUT / "shell" / f"{slug}.json", "w", encoding="utf-8") as f:
                json.dump(data, f, indent=2, ensure_ascii=False)
            shell_index.append({
                "slug": slug,
                "file": data["file"],
                "title": data["meta"].get("title", ""),
                "description": data["meta"].get("description", ""),
            })

    # ── copy hub-data ─────────────────────────────────────────────────
    if HUB_DATA.exists():
        for f in sorted(HUB_DATA.iterdir()):
            if f.is_file():
                shutil.copy2(f, OUT / "hub-data" / f.name)
                print(f"  Copied hub-data: {f.name}")

    # ── write master catalog ──────────────────────────────────────────
    total_mcqs = sum(m["mcq_count"] for m in module_index)
    master = {
        "generated_at": datetime.now().isoformat(),
        "source_repo": str(REPO),
        "total_modules": len(module_index),
        "total_shell_pages": len(shell_index),
        "total_mcqs_extracted": total_mcqs,
        "categories": CATALOG["cats"],
        "modules": module_index,
        "shell_pages": shell_index,
    }
    with open(OUT / "catalog.json", "w", encoding="utf-8") as f:
        json.dump(master, f, indent=2, ensure_ascii=False)

    print(f"\n✓ Extraction complete: {OUT}")
    print(f"  Modules: {len(module_index)}")
    print(f"  Shell pages: {len(shell_index)}")
    print(f"  Total MCQs extracted: {total_mcqs}")


if __name__ == "__main__":
    main()
