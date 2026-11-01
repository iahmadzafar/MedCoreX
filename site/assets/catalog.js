/* ============================================================
   MedCoreX · site/assets/catalog.js
   The ONE list of library resources. index.html and library.html
   both read it. Add, rename or move a resource here only.
   Load in <head> right after /assets/studyverse.js.
   t = title · d = description · c = category · f = file · k = size (KB, never shown)
   ============================================================ */
const CATS=["Core Books","Mocks & Drills","Past Papers & Answer Keys","Exam Intelligence & Strategy","Quick Reference","Frameworks & Interactive","MedCORE Systems"]
const HUES={'Core Books':'var(--c1)','Mocks & Drills':'var(--c3)','Past Papers & Answer Keys':'var(--c2)','Exam Intelligence & Strategy':'var(--c4)','Quick Reference':'var(--c1)','Frameworks & Interactive':'var(--c3)','MedCORE Systems':'var(--c2)'}
const Items=[

{t:"MedCORE Study Book",d:"Every system, one volume",c:"Core Books",f:"medcore-production-master-html-medcore-master-book.html",k:9306.5},
{t:"MCQ Architecture",d:"How the exam actually sets questions",c:"Core Books",f:"standalone-htmls-800-plus-mcq-architecture.html",k:525.9},
{t:"Forge Cards",d:"100 high-yield cards",c:"Core Books",f:"standalone-htmls-forge-master.html",k:1181.4},
{t:"Memory Master",d:"Recall-first core file",c:"Core Books",f:"medcore-memory-master-core.html",k:510},
{t:"Logic-First Bank",d:"Clinical reasoning, high-yield only",c:"Core Books",f:"qbank-logic-first-high-yield-logic-first-high-yield-bank.html",k:46.3},
{t:"MedCORE Question Bank",d:"Test series + main bank merged · six subject groups",c:"Mocks & Drills",f:"medcore-question-bank.html",k:5301.1},
{t:"Past Paper Hub",d:"All recalled past papers",c:"Past Papers & Answer Keys",f:"medcore-past-paper-hub.html",k:202.5},
{t:"June 2025",d:"Verified key + distractor analysis",c:"Past Papers & Answer Keys",f:"standalone-htmls-june-2025-answer-key.html",k:111.4},
{t:"June 2024",d:"Self-scoring",c:"Past Papers & Answer Keys",f:"standalone-htmls-june-2024-answer-key.html",k:108.6},
{t:"December 2024",d:"Self-scoring",c:"Past Papers & Answer Keys",f:"standalone-htmls-dec-2024-answer-key.html",k:145.6},
{t:"December 2025",d:"Full paper · 200 MCQs · explained",c:"Past Papers & Answer Keys",f:"standalone-htmls-dec-2025-answer-key.html",k:153.5},
{t:"Dec 2025 Recalled",d:"187-question recall set",c:"Past Papers & Answer Keys",f:"standalone-htmls-dec-2025-recalled-key.html",k:87.8},
{t:"May 2026",d:"Topic breakdown",c:"Past Papers & Answer Keys",f:"standalone-htmls-may-2026-mcq-breakdown.html",k:98.9},
{t:"Prediction Exam 2026",d:"Full sitting · 14 subjects · key + explanations",c:"Past Papers & Answer Keys",f:"medcore-prediction-exam.html",k:135.2},
{t:"2026 Prediction Intel",d:"What the paper will test",c:"Exam Intelligence & Strategy",f:"medcore-prediction-intelligence-report.html",k:51.9},
{t:"Full Picture Report",d:"Whole-system map · one view of everything",c:"Exam Intelligence & Strategy",f:"medcore-system-full-picture-report.html",k:160.7},
{t:"Pattern Analysis",d:"Four papers decoded · recurring patterns",c:"Exam Intelligence & Strategy",f:"medcore-pattern-analysis.html",k:19.6},
{t:"High-Yield Topic Pool",d:"Where to spend your time",c:"Exam Intelligence & Strategy",f:"standalone-htmls-prediction-sheet-1-high-yield-topic-pool.html",k:73.1},
{t:"60-Day Battle Plan",d:"Day-by-day route to exam day",c:"Exam Intelligence & Strategy",f:"standalone-htmls-60-day-battle-plan.html",k:53.6},
{t:"Battle LMS",d:"Command centre · schedule, drills, tracking",c:"Exam Intelligence & Strategy",f:"planner-medcore-battle-lms.html",k:86.5},
{t:"Cheat Card",d:"One-page recall sheet",c:"Quick Reference",f:"medcore-cheat-card.html",k:24.9},
{t:"Magic Table",d:"Licensing thresholds · memorise once",c:"Quick Reference",f:"standalone-htmls-magic-table-medical-licensing.html",k:207.2},
{t:"Medical Quick Ref",d:"Numerics and ranges",c:"Quick Reference",f:"standalone-htmls-medical-quick-reference-combined.html",k:2.9},
{t:"Symptom Clusters",d:"Symptom to differential, grouped",c:"Quick Reference",f:"standalone-htmls-disease-symptom-clusters.html",k:62.1},
{t:"Last Day Sheet",d:"Final night · highest-yield only",c:"Quick Reference",f:"side-projects-last-day-revision-sheet.html",k:62.8},
{t:"Repeat Offenders",d:"The NRE recall vault — questions that keep coming back",c:"Quick Reference",f:"nre-recall-sheets-repeat-offenders.html",k:53.6},{t:"Case Ladder",d:"Interactive clinical case practice",c:"Frameworks & Interactive",f:"standalone-htmls-case-ladder-interactive.html",k:119.1},
{t:"Cardiology",d:"Complete system book",c:"MedCORE Systems",f:"medcore-systems-cardiology-cardiology-medcore.html",k:408.9},
{t:"Neurology",d:"Complete system book",c:"MedCORE Systems",f:"medcore-systems-neurology-neurology-medcore.html",k:725.5},
{t:"Respiratory",d:"Complete system book",c:"MedCORE Systems",f:"medcore-systems-respiratory-respiratory-medcore.html",k:710.1},
{t:"Dermatology",d:"Complete system book",c:"MedCORE Systems",f:"medcore-systems-dermatology-dermatology-medcore.html",k:600.2},
{t:"Urology",d:"Complete system book",c:"MedCORE Systems",f:"medcore-systems-urology-urology-medcore.html",k:687},
{t:"Gynaecology",d:"Complete system book",c:"MedCORE Systems",f:"medcore-systems-gynecology-gynecology-medcore.html",k:682},
{t:"Obstetrics",d:"Complete system book",c:"MedCORE Systems",f:"medcore-systems-obstetrics-obstetrics-medcore.html",k:468.3},
{t:"Paediatrics",d:"Complete system book",c:"MedCORE Systems",f:"medcore-systems-pediatrics-pediatrics-medcore.html",k:432.8},
{t:"ENT",d:"Complete system book",c:"MedCORE Systems",f:"medcore-systems-ent-ent-medcore.html",k:639},
{t:"Ophthalmology",d:"Complete system book",c:"MedCORE Systems",f:"medcore-systems-ophthalmology-ophthalmology-medcore.html",k:641.2}

];
