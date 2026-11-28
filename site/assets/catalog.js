/* ============================================================
   MedCoreX · site/assets/catalog.js
   The ONE list of library resources. index.html and library.html
   both read it. Add, rename or move a resource here only.
   Load in <head> right after /assets/studyverse.js.
   t = title · d = description · c = category · f = file · k = size (KB, never shown)
   ============================================================ */
const CATS=["Core Books","Mocks & Drills","Past Papers & Answer Keys","Exam Intelligence & Strategy","Quick Reference","Frameworks & Interactive","MedCORE Systems"]
const HUES={'Core Books':'var(--c1)','Mocks & Drills':'var(--c4)','Past Papers & Answer Keys':'var(--c1)','Exam Intelligence & Strategy':'var(--c4)','Quick Reference':'var(--c1)','Frameworks & Interactive':'var(--c4)','MedCORE Systems':'var(--c1)'}
const Items=[

{t:"MCQ Architecture",d:"How the exam is built, and how its questions are written",c:"Core Books",f:"standalone-htmls-800-plus-mcq-architecture.html",k:525.9},
{t:"Forge Cards",d:"100 high-yield cards",c:"Core Books",f:"standalone-htmls-forge-master.html",k:1181.4},
{t:"Memory Master",d:"Core file: learn it by recalling it, not rereading it",c:"Core Books",f:"medcore-memory-master-core.html",k:510},
{t:"Logic-First Bank",d:"Clinical reasoning questions on high-yield topics only",c:"Core Books",f:"qbank-logic-first-high-yield-logic-first-high-yield-bank.html",k:46.3},
{t:"MedCORE Question Bank",d:"The main question bank: 18 subjects, with a breakdown for every question",c:"Mocks & Drills",f:"medcore-question-bank.html",k:6330.1},
{t:"June 2025",d:"140 questions, a checked answer key, and why each wrong option is wrong",c:"Past Papers & Answer Keys",f:"standalone-htmls-june-2025-answer-key.html",k:111.4},
{t:"December 2025",d:"200 questions, with the answer key and explanations",c:"Past Papers & Answer Keys",f:"standalone-htmls-dec-2025-answer-key.html",k:153.5},
{t:"Dec 2025 Recalled",d:"187 questions, rebuilt from candidate recall",c:"Past Papers & Answer Keys",f:"standalone-htmls-dec-2025-recalled-key.html",k:87.8},
{t:"May 2026",d:"Full paper: 200 questions, each one explained",c:"Past Papers & Answer Keys",f:"standalone-htmls-may-2026-mcq-breakdown.html",k:207.9},
{t:"Pattern Analysis",d:"Four papers analysed for patterns that repeat",c:"Exam Intelligence & Strategy",f:"medcore-pattern-analysis.html",k:19.6},
{t:"High-Yield Topic Pool",d:"Which topics to spend your time on",c:"Exam Intelligence & Strategy",f:"standalone-htmls-prediction-sheet-1-high-yield-topic-pool.html",k:73.1},
{t:"Cheat Card",d:"One page to recall from",c:"Quick Reference",f:"medcore-cheat-card.html",k:24.9},
{t:"Magic Table",d:"Licensing thresholds. Learn them once.",c:"Quick Reference",f:"standalone-htmls-magic-table-medical-licensing.html",k:207.2},
{t:"Symptom Clusters",d:"Symptoms grouped with the diagnoses they point to",c:"Quick Reference",f:"standalone-htmls-disease-symptom-clusters.html",k:62.1},
{t:"Repeat Offenders",d:"Questions that keep coming back in past papers",c:"Quick Reference",f:"nre-recall-sheets-repeat-offenders.html",k:53.6},{t:"Case Ladder",d:"Interactive cases, one step at a time",c:"Frameworks & Interactive",f:"standalone-htmls-case-ladder-interactive.html",k:119.1},
{t:"Cardiology",d:"Complete specialty book",c:"MedCORE Systems",f:"medcore-systems-cardiology-cardiology-medcore.html",k:408.9},
{t:"Neurology",d:"Complete specialty book",c:"MedCORE Systems",f:"medcore-systems-neurology-neurology-medcore.html",k:725.5},
{t:"Respiratory",d:"Complete specialty book",c:"MedCORE Systems",f:"medcore-systems-respiratory-respiratory-medcore.html",k:710.1},
{t:"Dermatology",d:"Complete specialty book",c:"MedCORE Systems",f:"medcore-systems-dermatology-dermatology-medcore.html",k:600.2},
{t:"Urology",d:"Complete specialty book",c:"MedCORE Systems",f:"medcore-systems-urology-urology-medcore.html",k:687},
{t:"Gynaecology",d:"Complete specialty book",c:"MedCORE Systems",f:"medcore-systems-gynecology-gynecology-medcore.html",k:682},
{t:"Obstetrics",d:"Complete specialty book",c:"MedCORE Systems",f:"medcore-systems-obstetrics-obstetrics-medcore.html",k:468.3},
{t:"Paediatrics",d:"Complete specialty book",c:"MedCORE Systems",f:"medcore-systems-pediatrics-pediatrics-medcore.html",k:432.8},
{t:"ENT",d:"Complete specialty book",c:"MedCORE Systems",f:"medcore-systems-ent-ent-medcore.html",k:639},
{t:"Ophthalmology",d:"Complete specialty book",c:"MedCORE Systems",f:"medcore-systems-ophthalmology-ophthalmology-medcore.html",k:641.2}

];
