/* MedCORE Fresh Mock Bank · data — generated from the NRE Prep 400 MCQs fresh mock sets */
const SUBJECTS = [
  {
    "id": "diabetes",
    "name": "Diabetes Mellitus & Complications",
    "questions": [
      {
        "q": "A 19-year-old non-obese woman with a strong family history of diabetes (autosomal dominant) presents with mild hyperglycaemia. She is not ketosis-prone and her C-peptide is normal. Which feature best fits maturity-onset diabetes of the young (MODY)?",
        "options": [
          "Obesity with insulin resistance",
          "Autoantibodies positive, prone to ketoacidosis",
          "Young onset, lean, autosomal dominant inheritance, often sulfonylurea-responsive",
          "Pancreatic exocrine insufficiency"
        ],
        "answer": 2,
        "layers": {
          "concept": "MODY — young, lean, AD inheritance, sulfonylurea-responsive",
          "discriminator": "Young lean diabetic + autosomal dominant family history + C-peptide intact = MODY (not T1/T2)",
          "trap": "Clinical Mimic — MODY (young, lean, AD, C-peptide+) vs type 1 (autoimmune) / type 2 (obese)",
          "rule": "MODY: young, lean, autosomal dominant, C-peptide positive; often sulfonylurea-responsive (HNF1A)"
        }
      },
      {
        "q": "A 28-year-old pregnant woman undergoes a 75 g oral glucose tolerance test at 26 weeks. Her results are: fasting 95 mg/dL, 1-hour 175 mg/dL, 2-hour 150 mg/dL. What is the diagnosis and management implication?",
        "options": [
          "Normal glucose tolerance — no follow-up",
          "Pre-existing type 2 diabetes",
          "Impaired glucose tolerance only — observe",
          "Gestational diabetes (OGTT thresholds met) — diet then insulin if needed"
        ],
        "answer": 3,
        "layers": {
          "concept": "Gestational diabetes — OGTT thresholds (fasting ≥92, 1h ≥180, 2h ≥153)",
          "discriminator": "Pregnancy OGTT meeting ANY threshold (92/180/153) = GDM → diet, insulin if targets unmet",
          "trap": "Population-specific — GDM OGTT thresholds (92/180/153), screen 24-28w",
          "rule": "Gestational diabetes: 75g OGTT (fasting ≥92, 1h ≥180, 2h ≥153); diet ± insulin; postpartum test"
        }
      },
      {
        "q": "A 45-year-old man presents with apparently new type 2 diabetes and seems to require insulin within 1 year despite initial oral therapy. He is not obese. Glutamic acid decarboxylase (GAD) antibodies are positive. What does this indicate?",
        "options": [
          "Typical type 2 diabetes",
          "MODY",
          "Latent autoimmune diabetes in adults (LADA)",
          "Type 3c (pancreatogenic) diabetes"
        ],
        "answer": 2,
        "layers": {
          "concept": "LADA — adult T2 phenotype but autoimmune (GAD+), progresses to insulin",
          "discriminator": "Adult 'T2DM' phenotype + GAD antibodies + early insulin requirement = LADA (slow autoimmune)",
          "trap": "Classification trap — LADA (autoimmune, GAD+) vs type 2 (antibody-negative) vs MODY",
          "rule": "LADA: adult-onset autoimmune diabetes (GAD+), T2-like onset, progresses to insulin; not MODY"
        }
      },
      {
        "q": "A 50-year-old man with 12 years of type 2 diabetes has visual blurring and floaters. Fundoscopy shows neovascularisation of the disc and vitreous haemorrhage. What is the most urgent intervention?",
        "options": [
          "Topical antibiotics",
          "Cataract surgery",
          "Observation and repeat in 6 months",
          "Panretinal photocoagulation (laser) + urgent ophthalmology review"
        ],
        "answer": 3,
        "layers": {
          "concept": "Diabetic retinopathy — proliferative stage: neovascularisation → panretinal laser",
          "discriminator": "Neovascularisation/vitreous haemorrhage = proliferative diabetic retinopathy → panretinal laser",
          "trap": "One-word discriminator — neovascularisation = proliferative → panretinal laser",
          "rule": "Proliferative diabetic retinopathy: neovascularisation → panretinal photocoagulation; screen annually"
        }
      },
      {
        "q": "A 60-year-old diabetic has numbness, tingling, and loss of vibration and ankle reflexes in a stocking-glove distribution, with preserved strength. What is the most likely neuropathy?",
        "options": [
          "Distal symmetric sensorimotor (peripheral) neuropathy",
          "Mononeuritis multiplex",
          "Acute inflammatory demyelinating polyneuropathy",
          "Myasthenia gravis"
        ],
        "answer": 0,
        "layers": {
          "concept": "Diabetic peripheral neuropathy — symmetric stocking sensory loss, reduced reflexes",
          "discriminator": "Symmetric stocking sensory loss + absent ankle jerks + preserved power = distal symmetric neuropathy",
          "trap": "Clinical Mimic — symmetric stocking neuropathy (DM) vs B12 deficiency vs GBS",
          "rule": "Distal symmetric sensorimotor neuropathy: stocking loss + absent ankle jerks; foot care prevents ulcers"
        }
      },
      {
        "q": "A 55-year-old diabetic develops sudden severe unilateral periorbital pain with ptosis, a normal-sized reactive pupil, and an inability to move the eye upward or inward. Which feature points to a diabetic mononeuritis rather than a posterior communicating artery aneurysm?",
        "options": [
          "The pupil is always dilated and fixed in diabetic palsy",
          "Pupil-sparing is typical of diabetic CN III palsy (sparse parasympathetic fibres spared)",
          "Painless onset favours diabetes",
          "Bilateral involvement is usual"
        ],
        "answer": 1,
        "layers": {
          "concept": "Diabetic CN III palsy — pupil-sparing, painful, ischemic (vs aneurysm which fixes pupil)",
          "discriminator": "Painful CN III palsy WITH pupil-sparing = diabetic ischemic mononeuritis; aneurysm fixes the pupil",
          "trap": "Clinical Mimic — diabetic CN III palsy (pupil-sparing) vs aneurysm (fixed dilated pupil)",
          "rule": "Diabetic CN III palsy: painful, pupil-sparing (ischaemic); aneurysm = fixed dilated pupil (emergency)"
        }
      },
      {
        "q": "A 40-year-old diabetic woman has recurrent early satiety, nausea, vomiting of undigested food, and bloating, with glycaemic instability. Gastroscopy is normal. What is the most likely mechanism?",
        "options": [
          "Peptic ulcer disease",
          "Autonomic (vagal) neuropathy causing gastroparesis",
          "Mechanical gastric outlet obstruction",
          "Pancreatic exocrine insufficiency"
        ],
        "answer": 1,
        "layers": {
          "concept": "Diabetic gastroparesis — autonomic neuropathy, delayed gastric emptying",
          "discriminator": "Nausea/vomiting undigested food + normal endoscopy + DM = gastroparesis (vagal neuropathy)",
          "trap": "Clinical Mimic — gastroparesis (autonomic neuropathy) vs mechanical obstruction/PUD",
          "rule": "Diabetic gastroparesis: vagal autonomic neuropathy → delayed emptying; normal endoscopy; prokinetics"
        }
      },
      {
        "q": "A 55-year-old diabetic with peripheral neuropathy presents with a warm, red, swollen midfoot and a 'rocker-bottom' deformity. X-ray shows fractures and joint dislocation. There is no history of major trauma. What is the diagnosis?",
        "options": [
          "Cellulitis",
          "Deep vein thrombosis",
          "Charcot neuroarthropathy",
          "Gout"
        ],
        "answer": 2,
        "layers": {
          "concept": "Charcot neuroarthropathy — painless red swollen foot, rocker-bottom, offloading",
          "discriminator": "Neuropathic foot + warm/swollen + rocker-bottom + fractures = Charcot (not infection)",
          "trap": "Clinical Mimic — Charcot (neuropathic, no trauma, rocker-bottom) vs cellulitis/DVT",
          "rule": "Charcot foot: neuropathic, warm/swollen, rocker-bottom deformity; strict offloading (not antibiotics)"
        }
      },
      {
        "q": "A diabetic man has a painless plantar ulcer with a warm foot and easily palpable pedal pulses. A second patient has a painful, cool foot with absent pulses and rest pain. How do these ulcers differ?",
        "options": [
          "Both are purely infectious",
          "Both are venous",
          "First is arterial, second is neuropathic",
          "First is neuropathic (sensory loss, good perfusion); second is ischaemic (poor perfusion)"
        ],
        "answer": 3,
        "layers": {
          "concept": "Diabetic foot ulcer — neuropathic (warm, pulses) vs ischaemic (cool, absent pulses)",
          "discriminator": "Painless + warm + palpable pulses = neuropathic ulcer; painful + cool + absent pulses = ischaemic",
          "trap": "Opposite — neuropathic (warm, pulses present) vs ischaemic (cold, pulses absent)",
          "rule": "Neuropathic foot ulcer: painless, warm, palpable pulses; ischaemic: painful, cool, absent pulses (PAD)"
        }
      },
      {
        "q": "A 50-year-old man with chronic pancreatitis has steatorrhoea, weight loss, and new-onset diabetes requiring insulin. C-peptide is low and faecal elastase is reduced. What is the diabetes type?",
        "options": [
          "Type 3c (pancreatogenic) diabetes",
          "Type 1 diabetes",
          "Type 2 diabetes",
          "MODY"
        ],
        "answer": 0,
        "layers": {
          "concept": "Type 3c diabetes — pancreatic disease (chronic pancreatitis/CF) + exocrine insufficiency",
          "discriminator": "Diabetes + steatorrhoea + low faecal elastase = type 3c (pancreatogenic), not T1/T2",
          "trap": "Clinical Mimic — type 3c (DM + steatorrhoea/exocrine failure) vs type 1/2",
          "rule": "Type 3c diabetes: pancreatic disease + exocrine insufficiency (steatorrhoea, low elastase); needs insulin"
        }
      },
      {
        "q": "A 60-year-old woman started on high-dose oral prednisolone for polymyalgia rheumatica develops fasting hyperglycaemia and glucosuria after 2 weeks. She has no prior diabetes. What is the most likely cause?",
        "options": [
          "Type 1 diabetes",
          "Steroid-induced (glucocorticoid) diabetes",
          "Type 2 diabetes newly diagnosed",
          "Phaeochromocytoma"
        ],
        "answer": 1,
        "layers": {
          "concept": "Steroid-induced diabetes — glucocorticoids raise glucose (hepatic output, insulin resistance)",
          "discriminator": "New hyperglycaemia after starting glucocorticoids = steroid-induced diabetes",
          "trap": "Clinical Mimic — hyperglycemia after starting steroids (steroid diabetes) vs new-onset T1/T2",
          "rule": "Glucocorticoids → hepatic glucose output + insulin resistance → steroid-induced diabetes; monitor glucose"
        }
      },
      {
        "q": "A diabetic man on metformin and a sulfonylurea is scheduled for elective abdominal surgery. What is the most appropriate perioperative glycaemic management?",
        "options": [
          "Hold metformin (lactic acidosis risk with fasting/contrast) and use a variable IV insulin infusion",
          "Continue all oral agents including metformin throughout",
          "Stop insulin if already on it",
          "Give double the sulfonylurea dose pre-op"
        ],
        "answer": 0,
        "layers": {
          "concept": "Perioperative diabetes — hold metformin, use IV insulin sliding scale",
          "discriminator": "Periop: hold metformin (fasting/contrast/ischaemia → lactic acidosis), use IV insulin",
          "trap": "Treatment misdirection — continuing metformin/sulfonylurea perioperatively (hypo/lactic acidosis)",
          "rule": "Perioperative: hold metformin (lactic acidosis risk) + sulfonylurea (hypo); IV insulin infusion"
        }
      },
      {
        "q": "A 48-year-old overweight man has a fasting glucose of 110 mg/dL and a 2-hour post-glucose value of 150 mg/dL on OGTT. HbA1c is 5.9%. What is the correct classification and first step?",
        "options": [
          "Diabetes mellitus — start metformin",
          "Normal — no action needed",
          "Gestational diabetes",
          "Prediabetes (impaired fasting glucose / impaired glucose tolerance) — lifestyle modification"
        ],
        "answer": 3,
        "layers": {
          "concept": "Prediabetes — IFG (fasting 100-125) / IGT (2h 140-199); lifestyle first",
          "discriminator": "Fasting 110 (IFG) + 2h 150 (IGT) + HbA1c 5.9% = prediabetes → lifestyle, not metformin yet",
          "trap": "Unit/Number — IFG 100-125, IGT 2h 140-199, HbA1c 5.7-6.4% = prediabetes",
          "rule": "Prediabetes: IFG (100-125), IGT (2h 140-199), HbA1c 5.7-6.4%; lifestyle modification first-line"
        }
      },
      {
        "q": "A 30-year-old type 1 diabetic has frequent asymptomatic nocturnal hypoglycaemic episodes and drives for a living. Which technology most improves her safety?",
        "options": [
          "More frequent fasting fingersticks only",
          "Continuous glucose monitoring (CGM) with hypo-alarm/alerts",
          "Stopping insulin",
          "Switching to once-daily long-acting only"
        ],
        "answer": 1,
        "layers": {
          "concept": "Diabetes technology — CGM for hypoglycaemia unawareness / nocturnal hypo",
          "discriminator": "Recurrent asymptomatic (nocturnal) hypoglycaemia → CGM with alerts improves safety",
          "trap": "Treatment ladder — CGM (hypo unawareness) > fingersticks; never stop insulin",
          "rule": "CGM: real-time glucose + trend alarms; key for hypoglycaemia unawareness/nocturnal lows"
        }
      },
      {
        "q": "A 52-year-old obese man with type 2 diabetes and BMI 34 is started on a GLP-1 receptor agonist. Which effect is expected and requires counselling?",
        "options": [
          "Weight loss with nausea/vomiting; benefits obesity and CV risk",
          "Weight gain and hypoglycaemia as the main effects",
          "Immediate insulin requirement increase",
          "Severe hepatotoxicity requiring monitoring"
        ],
        "answer": 0,
        "layers": {
          "concept": "GLP-1 receptor agonists — weight loss, GI side effects, CV benefit",
          "discriminator": "GLP-1 RA: weight loss + GI (nausea) side effects + CV/renal benefit; low hypo risk",
          "trap": "Treatment ladder — GLP-1 RA for obesity/T2DM: weight loss + nausea, low hypo risk",
          "rule": "GLP-1 RA: glucose-dependent insulin release + satiety → weight loss; GI nausea; CV/renal benefit"
        }
      },
      {
        "q": "A 64-year-old man on long-term metformin for type 2 diabetes develops numbness and a macrocytic anaemia with low-normal B12. Which association is correct?",
        "options": [
          "Metformin long-term use can cause B12 deficiency",
          "Metformin raises B12 levels",
          "B12 deficiency here is unrelated to metformin",
          "The anaemia is iron-deficiency from metformin"
        ],
        "answer": 0,
        "layers": {
          "concept": "Metformin adverse effect — long-term B12 malabsorption/deficiency",
          "discriminator": "Chronic metformin → reduced B12 absorption → deficiency (neuropathy, macrocytic anaemia)",
          "trap": "Severity under-recognition — chronic metformin → B12 deficiency (neuropathy mimic)",
          "rule": "Chronic metformin: B12 malabsorption → deficiency (anaemia/neuropathy); check B12 periodically"
        }
      },
      {
        "q": "A 50-year-old man with type 2 diabetes and no history of cardiovascular disease has an LDL of 110 mg/dL. According to current guidance, what is indicated?",
        "options": [
          "No statin — only treat if LDL >190",
          "Fibrate first-line",
          "Statin therapy for primary CVD prevention (all diabetics ≥40 typically benefit)",
          "Nothing until he has a heart attack"
        ],
        "answer": 2,
        "layers": {
          "concept": "Diabetes + CVD risk — statin for primary prevention in most T2DM",
          "discriminator": "T2DM is a CVD risk equivalent — statin indicated for primary prevention (not LDL alone)",
          "trap": "Treatment misdirection — withholding statin in diabetes awaiting LDL threshold/event",
          "rule": "Diabetes: statin for primary CVD prevention (risk equivalent); LDL target reduction, not treat-only-if-high"
        }
      },
      {
        "q": "A 40-year-old type 1 diabetic asks how often her urine should be screened for early kidney disease. She has normal creatinine and no proteinuria on dipstick. What is recommended?",
        "options": [
          "Annual urinary albumin-to-creatinine ratio (screen for microalbuminuria)",
          "Only if dipstick becomes positive",
          "Every 5 years",
          "Renal biopsy now"
        ],
        "answer": 0,
        "layers": {
          "concept": "Diabetic nephropathy — annual albuminuria screening (ACR) for early detection",
          "discriminator": "Annual urine albumin:creatinine ratio screens for microalbuminuria before creatinine rises",
          "trap": "One-word discriminator — annual ACR (microalbuminuria) screening, dipstick misses early",
          "rule": "Diabetic nephropathy: annual ACR (albumin:creatinine) + eGFR; ACEi for microalbuminuria (renoprotection)"
        }
      },
      {
        "q": "An 82-year-old frail woman with type 2 diabetes on a sulfonylurea has had two falls and a hypoglycaemic episode. What is the most appropriate adjustment?",
        "options": [
          "Intensify with insulin to tighten control",
          "Add a second sulfonylurea",
          "De-intensify therapy (stop sulfonylurea, relax targets) to avoid hypoglycaemia",
          "Aim for HbA1c < 6.0%"
        ],
        "answer": 2,
        "layers": {
          "concept": "Diabetes in the elderly — de-intensify to avoid hypoglycaemia/falls",
          "discriminator": "Frail elderly + sulfonylurea hypo/falls = de-intensify (avoid hypo); relaxed targets",
          "trap": "Treatment misdirection — intensifying/tight targets in frail elderly (hypo/falls harm)",
          "rule": "Elderly/frail diabetes: de-intensify, relaxed HbA1c (~8%), avoid sulfonylurea/insulin-induced hypo"
        }
      },
      {
        "q": "A 60-year-old diabetic man develops painful, asymmetric weakness and wasting of the thigh muscles over weeks, with weight loss but preserved sensation. What is the most likely diagnosis?",
        "options": [
          "Stroke",
          "Diabetic amyotrophy (lumbosacral radiculoplexus neuropathy)",
          "Polymyositis",
          "Spinal cord compression"
        ],
        "answer": 1,
        "layers": {
          "concept": "Diabetic amyotrophy — painful asymmetric proximal thigh weakness/wasting",
          "discriminator": "Painful asymmetric thigh weakness/wasting in DM = diabetic amyotrophy (radiculoplexus)",
          "trap": "Clinical Mimic — diabetic amyotrophy (asymmetric proximal) vs stroke/PM/cord",
          "rule": "Diabetic amyotrophy: subacute painful asymmetric proximal leg weakness/wasting; improves with control"
        }
      },
      {
        "q": "A 65-year-old diabetic woman with poor glycaemic control has fever, flank pain, and gas visible within the renal parenchyma on CT. Urine grows E. coli. What is the diagnosis and concern?",
        "options": [
          "Simple cystitis",
          "Renal calculus without infection",
          "Pyelonephritis resolving with oral antibiotics",
          "Emphysematous pyelonephritis — gas-forming infection, urological emergency"
        ],
        "answer": 3,
        "layers": {
          "concept": "Emphysematous pyelonephritis — gas-forming infection in diabetic kidney",
          "discriminator": "Diabetic + flank pain + gas in renal parenchyma on CT = emphysematous pyelonephritis (emergency)",
          "trap": "Severity under-recognition — gas on renal CT in diabetic = emphysematous pyelonephritis (emergency)",
          "rule": "Emphysematous pyelonephritis: diabetic, gas-forming renal infection on CT; emergency drainage + antibiotics"
        }
      },
      {
        "q": "A 58-year-old type 2 diabetic has persistent fasting hyperglycaemia on maximal oral therapy. Which insulin regimen is most appropriate to start?",
        "options": [
          "Three-times-daily prandial rapid-acting only",
          "Stop all oral agents and start biphasic twice daily immediately",
          "IV insulin infusion as outpatient",
          "Once-daily basal (long-acting, e.g. glargine) to target fasting glucose"
        ],
        "answer": 3,
        "layers": {
          "concept": "Insulin initiation — start basal (long-acting) for fasting hyperglycaemia",
          "discriminator": "Persistently high fasting glucose on orals → add once-daily basal (glargine) first",
          "trap": "Treatment ladder — start basal (glargine) for fasting hyperglycaemia, not MDI first",
          "rule": "Insulin start: once-daily basal (long-acting) for fasting hyperglycaemia; prandial added later"
        }
      },
      {
        "q": "A diabetic on basal insulin has consistently elevated morning glucose but normal glucose at 3 a.m. (no nocturnal hypoglycaemia). What does this represent?",
        "options": [
          "Dawn phenomenon (early-morning hormonal surge), not Somogyi",
          "Somogyi phenomenon (rebound from nocturnal hypo)",
          "Incorrect CGM",
          "Brittle diabetes requiring pump immediately"
        ],
        "answer": 0,
        "layers": {
          "concept": "Dawn phenomenon — morning hyperglycemia WITHOUT nocturnal hypoglycemia",
          "discriminator": "Normal 3am glucose + high morning glucose = dawn phenomenon (cortisol/GH surge), not Somogyi",
          "trap": "Opposite — dawn (no nocturnal hypo) vs Somogyi (nocturnal hypo → rebound high)",
          "rule": "Dawn phenomenon: AM hyperglycaemia with normal 3am glucose (hormonal surge); Somogyi has nocturnal hypo"
        }
      },
      {
        "q": "A 55-year-old diabetic has several round, atrophic, hyperpigmented plaques on the shins. They are asymptomatic. Which skin manifestation is this?",
        "options": [
          "Necrobiosis lipoidica",
          "Diabetic dermopathy (shin spots)",
          "Cellulitis",
          "Pyoderma gangrenosum"
        ],
        "answer": 1,
        "layers": {
          "concept": "Diabetic dermopathy — asymptomatic atrophic pigmented shin plaques",
          "discriminator": "Atrophic pigmented round plaques on shins in DM = diabetic dermopathy (shin spots)",
          "trap": "Clinical Mimic — diabetic dermopathy (shin spots) vs necrobiosis lipoidica vs infection",
          "rule": "Diabetic dermopathy: asymptomatic atrophic pigmented shin plaques (benign); necrobiosis lipoidica is ulcerating/yellow"
        }
      },
      {
        "q": "A 30-year-old woman with pre-existing type 1 diabetes plans pregnancy. What is the most important pre-conceptional intervention to reduce congenital malformation risk?",
        "options": [
          "Stop insulin during pregnancy",
          "Start oral hypoglycaemics",
          "Achieve tight glycaemic control (HbA1c near normal) before conception",
          "Begin aspirin only"
        ],
        "answer": 2,
        "layers": {
          "concept": "Pre-existing diabetes in pregnancy — tighten glycemia pre-conception to cut malformations",
          "discriminator": "Pre-existing DM + pregnancy: congenital malformation risk tracks glycaemic control → tighten pre-conception",
          "trap": "Severity under-recognition — congenital malformation risk is glycaemic-control dependent",
          "rule": "Pre-existing diabetes + pregnancy: congenital malformation risk ∝ glycaemic control; tighten before conception"
        }
      }
    ]
  },
  {
    "id": "ent",
    "name": "ENT",
    "questions": [
      {
        "q": "A 45-year-old has recurrent episodes of vertigo lasting 30-40 minutes, fluctuating sensorineural hearing loss, tinnitus and a sense of aural fullness in one ear. Between episodes he is well. Dix-Hallpike and neurological examination are normal. Diagnosis?",
        "options": [
          "Benign paroxysmal positional vertigo",
          "Meniere's disease",
          "Vestibular schwannoma",
          "Labyrinthitis"
        ],
        "answer": 1,
        "layers": {
          "concept": "Meniere's disease - episodic vertigo + fluctuating SNHL + tinnitus + aural fullness",
          "discriminator": "Episodic vertigo (minutes to hours) + fluctuating SNHL/tinnitus/aural fullness = Meniere's; normal Dix-Hallpike excludes BPPV",
          "trap": "Choosing BPPV because Dix-Hallpike is mentioned - but negative Dix-Hallpike plus fullness/fluctuating HL favours Meniere",
          "rule": "Meniere's: recurrent vertigo (20min-hours) + fluctuating SNHL + tinnitus + fullness; negative Dix-Hallpike; salt restriction/diuretics, betahistine."
        }
      },
      {
        "q": "A 3-year-old has a 2-day history of fever and ear pain. Otoscopy shows a bulging, erythematous tympanic membrane with restricted mobility and loss of the light reflex. Most appropriate first-line treatment?",
        "options": [
          "Oral amoxicillin and analgesics",
          "Immediate myringotomy",
          "Topical antibiotic drops",
          "Watchful waiting with no treatment in all cases"
        ],
        "answer": 0,
        "layers": {
          "concept": "Acute otitis media - bulging TM; first-line amoxicillin",
          "discriminator": "Fever + ear pain + bulging erythematous TM = AOM; treat with amoxicillin (plus analgesia); topical drops have no trans-tympanic role",
          "trap": "Prescribing topical drops for a bulging intact TM (they cannot penetrate)",
          "rule": "AOM: bulging hyperaemic TM + fever/pain; treat oral amoxicillin + analgesia. Refer for myringotomy only if complications (facial palsy, mastoiditis)."
        }
      },
      {
        "q": "A child has right ear pain and tenderness when the ear is pulled, with no fever. Examination shows an inflamed, edematous ear canal with scanty yellow discharge and normal tympanic membrane. Diagnosis and first-line treatment?",
        "options": [
          "Acute otitis media; oral amoxicillin",
          "Acute otitis externa; topical antibiotic/antiseptic ear drops and keep the ear dry",
          "Mastoiditis; IV antibiotics",
          "Furunculosis of the pinna; incision and drainage"
        ],
        "answer": 1,
        "layers": {
          "concept": "Acute otitis externa - tender pinna/canal, normal TM; topical drops + dry ear",
          "discriminator": "Ear pain with pinna/canal tenderness, edematous canal, normal TM, no fever = otitis externa; treat topical drops + dry care",
          "trap": "Calling it otitis media - the key discriminator is pinna/canal tenderness with a normal TM",
          "rule": "AOE: otalgia worsened by pinna traction, edematous canal, normal TM; treat topical antibiotic/antiseptic drops + dry care."
        }
      },
      {
        "q": "A passenger develops ear pain and fullness during aircraft descent. Otoscopy shows a retracted, congested tympanic membrane with a middle-ear effusion. Most likely diagnosis?",
        "options": [
          "Otitis media with effusion",
          "Otitic barotrauma (aerotitis)",
          "Cholesteatoma",
          "Acute mastoiditis"
        ],
        "answer": 1,
        "layers": {
          "concept": "Otitic barotrauma - ear pain/fullness on descent, retracted congested TM",
          "discriminator": "Pain/fullness on airplane descent + retracted congested TM + effusion = barotrauma (Eustachian tube can't equilibrate)",
          "trap": "Confusing barotrauma with AOM or OME - the airplane-descent trigger and retracted congested TM are key",
          "rule": "Barotrauma: pain/fullness on descent, retracted congested TM, effusion; decongestants + autoinflation to equalize pressure."
        }
      },
      {
        "q": "A 35-year-old has a long history of chronic, often offensive ear discharge and progressive conductive hearing loss. Otoscopy shows retraction of the pars flaccida with pearly-white keratin debris and a marginal perforation. What is important about this condition?",
        "options": [
          "It is benign and self-limiting; no treatment needed",
          "It is an erosive keratinising lesion that can destroy middle-ear structures; surgical excision is needed",
          "It is managed with topical antibiotics alone",
          "It is a pre-cancerous lesion of the ear canal skin"
        ],
        "answer": 1,
        "layers": {
          "concept": "Cholesteatoma - erosive keratinising lesion; surgical treatment",
          "discriminator": "Chronic offensive discharge + pearly keratin in pars flaccida retraction/Marginal perforation = cholesteatoma; erosive, needs surgery",
          "trap": "Treating cholesteatoma with drops only - it is erosive and needs surgery",
          "rule": "Cholesteatoma: keratinising squamous epithelium eroding bone/ossicles; offensive discharge + progressive HL; needs surgical excision, not just drops."
        }
      },
      {
        "q": "A 75-year-old reports slowly progressive difficulty hearing in both ears, especially in noisy environments, with normal ears on otoscopy. Pure-tone audiometry shows symmetric high-frequency sensorineural hearing loss. Most likely diagnosis?",
        "options": [
          "Otosclerosis",
          "Presbycusis",
          "Acoustic neuroma",
          "Noise-induced hearing loss"
        ],
        "answer": 1,
        "layers": {
          "concept": "Presbycusis - age-related symmetric high-frequency SNHL",
          "discriminator": "Bilateral high-frequency SNHL + old age + normal otoscopy = presbycusis",
          "trap": "Confusing presbycusis with noise-induced HL (4 kHz dip) or otosclerosis (conductive)",
          "rule": "Presbycusis: age-related symmetric high-frequency SNHL; hearing aids. Differentiate from noise dip (4 kHz, younger) and otosclerosis (conductive)."
        }
      },
      {
        "q": "On tuning-fork testing, a patient has Weber lateralizing to the LEFT ear, and Rinne is NEGATIVE on the left (BC > AC) but POSITIVE on the right. Which statement is correct?",
        "options": [
          "Left otosclerosis (conductive hearing loss)",
          "Right sensorineural hearing loss",
          "Left sensorineural hearing loss",
          "Bilateral normal hearing"
        ],
        "answer": 0,
        "layers": {
          "concept": "Tuning fork - Weber to affected side in conductive loss; Rinne negative",
          "discriminator": "Weber lateralizes to the LEFT + Rinne negative on LEFT = LEFT conductive loss (e.g. otosclerosis, OME)",
          "trap": "Confusing conductive and sensorineural tuning-fork results",
          "rule": "Conductive loss: Weber lateralizes to the affected ear, Rinne negative there. Sensorineural: Weber to the better ear, Rinne positive. Apply to interpret sidedness."
        }
      },
      {
        "q": "A patient has chronic purulent otorrhoea with an attic (marginal) perforation and a foul smell. Which statement is most important?",
        "options": [
          "This is a safe ear; topical drops are curative",
          "An attic/marginal perforation is an 'unsafe' ear, at risk of cholesteatoma and intracranial complications; needs surgical assessment",
          "It is always malignant otitis externa",
          "It will resolve spontaneously with oral antibiotics"
        ],
        "answer": 1,
        "layers": {
          "concept": "CSOM - safe vs unsafe (marginal/attic perforation)",
          "discriminator": "Attic/marginal perforation + foul discharge = unsafe CSOM (cholesteatoma risk); needs surgery, not just drops",
          "trap": "Treating an unsafe (marginal/attic) ear as safe with drops only",
          "rule": "Central tubotympanic perforation = safe ear. Attic/marginal perforation = unsafe (cholesteatoma, complications); needs mastoid surgery."
        }
      },
      {
        "q": "A 3-year-old has a persistent, unilateral, foul-smelling, blood-stained nasal discharge from the right nostril for 2 weeks. What is the most likely diagnosis and appropriate next step?",
        "options": [
          "Acute rhinosinusitis; nasal saline irrigation",
          "Nasal foreign body; careful anterior rhinoscopy and removal under proper visualization",
          "Antrochoanal polyp; surgical excision",
          "Allergic rhinitis; antihistamines"
        ],
        "answer": 1,
        "layers": {
          "concept": "Nasal foreign body - unilateral foul-smelling/blood-stained discharge in a child",
          "discriminator": "Unilateral foul-smelling, blood-stained nasal discharge in a child = retained nasal foreign body; remove under visualization",
          "trap": "Diagnosing sinusitis or polyp - the unilateral, foul, blood-stained discharge in a child is a foreign body until proven otherwise",
          "rule": "Child with persistent unilateral foul/blood-stained rhinorrhoea = nasal foreign body till proven otherwise; remove carefully under visualization (risk of aspiration)."
        }
      },
      {
        "q": "A patient has a 'double worsening' of cold symptoms: nasal congestion and purulent discharge that TRANSIENTLY improved then worsened, with facial pain, no improvement in 10 days. Which feature most strongly supports bacterial (rather than viral) rhinosinusitis?",
        "options": [
          "Clear watery nasal discharge",
          "Symptoms that worsened after initially improving, or persist beyond 10 days with purulence and facial pain ('double worsening')",
          "Isolated sneezing and itchy eyes",
          "Normal sense of smell"
        ],
        "answer": 1,
        "layers": {
          "concept": "Acute bacterial rhinosinusitis - 'double worsening' / persistence criteria",
          "discriminator": "Purulent discharge + facial pain + double worsening or >10 days = bacterial rhinosinusitis; antibiotics",
          "trap": "Treating all colds with antibiotics - use the double-worsening/persistence criteria for bacterial infection",
          "rule": "Bacterial rhinosinusitis: double worsening, >10 days, purulence + facial pain; antibiotics. Viral: clear/watery, improves in ~1 week."
        }
      },
      {
        "q": "A 60-year-old on aspirin has a brisk anterior nosebleed from Little's area that is ongoing. Gentle pressure, decongestant and cautery have controlled the bleeding. However he is at risk of rebleeding. Which measure is most important for initial management?",
        "options": [
          "Immediate posterior nasal packing in all cases",
          "Maintain pressure: sit upright, lean forward, pinch the cartilaginous nose for 10-20 minutes, and treat the bleeding point (silver nitrate/coagulation), plus avoid nasal trauma",
          "Routine hospital admission for every patient",
          "Start broad-spectrum IV antibiotics prophylactically"
        ],
        "answer": 1,
        "layers": {
          "concept": "Epistaxis management - anterior packing/pressure + cautery, first aid",
          "discriminator": "Anterior Little's area bleed: sit forward, pinch nose 10-20 min, then cauterize/coagulate visible point; avoid re-trauma",
          "trap": "Jumping to posterior packing/admission for a controllable anterior bleed",
          "rule": "Anterior epistaxis: sit forward, pinch cartilaginous nose 10-20 min, cauterize visible point (silver nitrate); posterior packing/admission if uncontrolled."
        }
      },
      {
        "q": "A 25-year-old has seasonal sneezing, itchy watery eyes and clear rhinorrhoea. Which is first-line maintenance treatment for allergic rhinitis?",
        "options": [
          "Oral antihistamines alone in all cases",
          "Topical intranasal corticosteroid, with oral/topical antihistamines for symptom relief",
          "Long-term oral corticosteroids",
          "Topical decongestants used daily"
        ],
        "answer": 1,
        "layers": {
          "concept": "Allergic rhinitis - first-line intranasal corticosteroid",
          "discriminator": "Seasonal allergic rhinoconjunctivitis = first-line intranasal corticosteroid (more effective than antihistamines alone for congestion)",
          "trap": "Using daily topical decongestants (rebound) or long-term oral steroids; forget the INCS first line",
          "rule": "Allergic rhinitis: first-line intranasal corticosteroid; antihistamines for itch/sneeze. Avoid daily decongestants (rebound) and long-term oral steroids."
        }
      },
      {
        "q": "A patient sustains nasal trauma and later develops a bilateral nasal obstruction with pain and a bulging, fluctuant septal swelling. This was not drained. Months later she presents with a saddle nose deformity. What best explains the outcome and the initial correct management?",
        "options": [
          "Missed septal hematoma: the septal cartilage lost its blood supply and resorbed; an early hematoma should be drained/I&D and the nose splinted",
          "This is normal healing and needs no treatment",
          "It is caused by an untreated allergy; give antihistamines",
          "It is a septal fracture that always needs immediate open reduction"
        ],
        "answer": 0,
        "layers": {
          "concept": "Septal hematoma - can cause saddle nose via cartilage necrosis; evacuate promptly",
          "discriminator": "Post-trauma septal hematoma, if undrained, causes avascular necrosis/cartilage resorption -> saddle nose; treat by I&D + splint",
          "trap": "Treating a septal hematoma conservatively or confusing it with allergy/fracture",
          "rule": "Septal hematoma: urgent I&D + splint to prevent avascular necrosis and saddle nose deformity. Differentiate from fracture and allergy."
        }
      },
      {
        "q": "A 10-year-old with acute sinusitis develops eyelid swelling, proptosis, pain on eye movement, restricted eye movements and fever. What is the emergency and next step?",
        "options": [
          "Preseptal cellulitis; oral antibiotics at home",
          "Orbital cellulitis; urgent IV antibiotics and imaging (CT) to exclude orbital abscess",
          "Allergic eyelid oedema; antihistamines",
          "Cavernous sinus thrombosis; intensive care and anticoagulation"
        ],
        "answer": 1,
        "layers": {
          "concept": "Orbital cellulitis - complication of sinusitis; urgent IV antibiotics + CT",
          "discriminator": "Sinusitis + proptosis + painful/restricted eye movement + fever = orbital cellulitis (postseptal); urgent IV abx + CT",
          "trap": "Treating orbital cellulitis as preseptal (outpatient oral antibiotics)",
          "rule": "Orbital cellulitis: proptosis, painful ophthalmoplegia, fever after sinusitis -> urgent IV antibiotics + CT (exclude abscess)."
        }
      },
      {
        "q": "A 45-year-old of East Asian origin presents with a painless neck mass and unilateral conductive hearing loss from a middle-ear effusion on the same side. He has blood-stained nasal discharge. Which is the most important next investigation?",
        "options": [
          "MRI/endoscopy with biopsy of the nasopharynx",
          "Neck ultrasound only",
          "Chest X-ray only",
          "Thyroid function tests"
        ],
        "answer": 0,
        "layers": {
          "concept": "Nasopharyngeal carcinoma - unilateral OME + neck mass in endemic patient; nasopharyngeal biopsy",
          "discriminator": "Unilateral serous OME + neck mass + blood-stained nasal discharge in an East Asian adult = NPC; nasopharyngoscopy + biopsy",
          "trap": "Biopsying the neck node or ultrasound only - confirm via endoscopic nasopharyngeal biopsy",
          "rule": "NPC (EBV, endemic): painless neck node + unilateral serous OME + blood-stained nasal discharge; diagnosis by nasopharyngoscopy + biopsy."
        }
      },
      {
        "q": "A 4-year-old has a high fever, severe sore throat, drooling, difficulty swallowing, a muffled voice, and sits in a tripod position. What is the MOST appropriate immediate action?",
        "options": [
          "Examine the throat with a tongue depressor",
          "Secure the airway (senior anaesthetist/ENT; do NOT agitate or examine the throat)",
          "Give oral antibiotics and discharge",
          "Perform a throat swab first"
        ],
        "answer": 1,
        "layers": {
          "concept": "Epiglottitis - airway first; do not examine the throat",
          "discriminator": "Fever + drooling + tripod + muffled voice = epiglottitis; airway priority, minimal stimulation",
          "trap": "Trying to examine the throat or swab - precipitates obstruction; airway first",
          "rule": "Epiglottitis: tripod posture, drooling, muffled voice -> protect airway immediately; avoid throat examination/agitation. Hib vaccination reduces incidence."
        }
      },
      {
        "q": "A 25-year-old has severe unilateral sore throat, 'hot potato' voice, trismus, and deviation of the soft palate with the uvula pushed to the opposite side. What is the likely diagnosis and most appropriate management?",
        "options": [
          "Acute tonsillitis; oral antibiotics and discharge",
          "Peritonsillar abscess (quinsy); ENT referral for aspiration/incision and drainage plus antibiotics and analgesia",
          "Retropharyngeal abscess; immediate intubation",
          "Glossitis; mouthwash"
        ],
        "answer": 1,
        "layers": {
          "concept": "Peritonsillar abscess - trismus + uvula deviation; aspiration/I+D + antibiotics",
          "discriminator": "Unilateral severe sore throat + trismus + soft palate/uvula deviation = quinsy; ENT drainage + antibiotics",
          "trap": "Treating a quinsy as simple tonsillitis with antibiotics alone",
          "rule": "Quinsy: severe unilateral sore throat, trismus, uvula deviation -> ENT aspiration/incision + antibiotics + analgesia."
        }
      },
      {
        "q": "A 60-year-old heavy smoker with hoarseness for over 3 weeks and progressive voice change is referred. What is the most appropriate next step?",
        "options": [
          "Reassure that it is a viral laryngitis and review in 6 months",
          "Refer for direct (flexible) laryngoscopy +/- biopsy to exclude laryngeal carcinoma",
          "Start oral steroids",
          "Prescribe voice rest only"
        ],
        "answer": 1,
        "layers": {
          "concept": "Laryngeal carcinoma - hoarseness >3 weeks in a smoker warrants specialist evaluation",
          "discriminator": "Persistent hoarseness >3 weeks (esp. smoker) = laryngeal carcinoma until proven otherwise; direct laryngoscopy +/- biopsy",
          "trap": "Reassuring persistent hoarseness in a smoker as simple laryngitis",
          "rule": "Persistent hoarseness >3 weeks, especially in a smoker, needs direct laryngoscopy to exclude laryngeal carcinoma."
        }
      },
      {
        "q": "A patient who has just undergone thyroid surgery develops hoarseness and a breathy voice. Which nerve is most likely affected?",
        "options": [
          "Recurrent laryngeal nerve",
          "Hypoglossal nerve",
          "Facial nerve",
          "Trigeminal nerve"
        ],
        "answer": 0,
        "layers": {
          "concept": "Vocal cord paralysis - recurrent laryngeal nerve injury in thyroid surgery",
          "discriminator": "Thyroid surgery + hoarse/breathy voice = recurrent laryngeal nerve injury (vocal cord paralysis)",
          "trap": "Attributing post-thyroid hoarseness to the wrong cranial nerve",
          "rule": "Recurrent laryngeal nerve injury (thyroid surgery) -> vocal cord paralysis, hoarse/breathy voice; key consent point in thyroidectomy."
        }
      },
      {
        "q": "A 2-year-old has a barking 'seal-like' cough, low-grade fever, hoarseness and inspiratory stridor that worsens at night. There is NO drooling and the child is not toxic. Most likely diagnosis and management?",
        "options": [
          "Epiglottitis; urgent airway management",
          "Croup (laryngotracheobronchitis); oral steroid (dexamethasone) and nebulized adrenaline if severe",
          "Foreign body aspiration; bronchoscopy",
          "Bacterial tracheitis; IV antibiotics"
        ],
        "answer": 1,
        "layers": {
          "concept": "Croup - barking cough + stridor, not toxic; dexamethasone",
          "discriminator": "Barking cough + low-grade fever + non-toxic, no drooling = croup; dexamethasone (nebulized adrenaline if severe)",
          "trap": "Confusing croup with epiglottitis - the toxic drooling child is epiglottitis, the barking cough is croup",
          "rule": "Croup: barking cough, low-grade fever, stridor, non-toxic -> dexamethasone (+ nebulized adrenaline if severe). Distinguish from epiglottitis (toxic, drooling)."
        }
      },
      {
        "q": "A 10-year-old has fever, sore throat and exudative tonsils with painful cervical lymphadenopathy and no cough. Rapid antigen test is positive for Group A streptococcus. Which is the most important reason to treat with antibiotics?",
        "options": [
          "To shorten the illness and prevent acute rheumatic fever and suppurative complications",
          "To prevent viral spread to contacts",
          "To avoid tonsillectomy in adulthood",
          "It is not needed because it is a virus"
        ],
        "answer": 0,
        "layers": {
          "concept": "GAS tonsillitis - antibiotics to prevent rheumatic fever",
          "discriminator": "GAS + exudative tonsillitis/adenopathy = treat antibiotics to prevent acute rheumatic fever and local suppuration",
          "trap": "Thinking antibiotics are only for symptom duration, not rheumatic-fever prevention",
          "rule": "Treat GAS tonsillitis (positive rapid test, exudates, tender nodes, no cough) with antibiotics to prevent acute rheumatic fever and quinsy."
        }
      },
      {
        "q": "A nursing-home resident on an inhaled steroid for COPD develops difficulty eating with a red oropharynx and white, curd-like, removable plaques. Most likely diagnosis?",
        "options": [
          "Oropharyngeal candidiasis",
          "Herpes simplex pharyngitis",
          "Hairy leukoplakia",
          "Leukoedema"
        ],
        "answer": 0,
        "layers": {
          "concept": "Oropharyngeal candidiasis - steroid inhaler + white curd-like plaques",
          "discriminator": "White curd-like removable plaques + steroid inhaler usage = oral candidiasis; antifungal",
          "trap": "Confusing removable curd-like plaques with adherent lesions (leukoplakia/hairy leukoplakia)",
          "rule": "Oral candidiasis: white curd-like removable plaques (steroid use, immunocompromise) -> antifungal. Distinguish from adherent leukoplakia."
        }
      },
      {
        "q": "A 40-year-old has recurrent painful swelling below the right jaw (submandibular region) that worsens at mealtimes. The swelling resolves between meals and a painful mass is felt in Wharton's duct. Which gland and management?",
        "options": [
          "Parotid; total parotidectomy",
          "Submandibular gland; sialolithiasis - manage with sialogogues, massage, or ductal removal/ectomy if recurrent",
          "Sublingual; antibiotics only",
          "Parotid; radiotherapy"
        ],
        "answer": 1,
        "layers": {
          "concept": "Sialolithiasis - submandibular stone, worse at meals; sialogogues/removal",
          "discriminator": "Painful glandular swelling worse at mealtimes + ductal mass = sialolithiasis; most common in submandibular gland",
          "trap": "Assuming parotid or giving antibiotics for a ductal stone",
          "rule": "Sialolithiasis: submandibular stone causing pain/swelling with meals; sialogogues/hydration/massage; surgical removal if recurrent."
        }
      },
      {
        "q": "A 45-year-old develops sudden onset of inability to close the right eye, drooping of the right corner of the mouth and forehead flattening on the right, over 24 hours. There is no other neurological deficit. Most likely diagnosis and treatment?",
        "options": [
          "Stroke; urgent thrombolysis",
          "Bell's palsy; oral corticosteroids (with eye protection)",
          "Ramsay Hunt syndrome; acyclovir",
          "Acoustic neuroma; surgery"
        ],
        "answer": 1,
        "layers": {
          "concept": "Bell's palsy - sudden lower motor neuron facial palsy; oral corticosteroids",
          "discriminator": "Acute unilateral facial weakness sparing no zone (forehead involved) without other deficit = Bell's palsy (LMN); oral prednisolone",
          "trap": "Calling a fore-head-involving LMN palsy a stroke (UMN would spare the forehead)",
          "rule": "Bell's palsy: acute LMN facial palsy (forehead involved) -> oral prednisolone + eye protection. Stroke (UMN) spares the forehead."
        }
      },
      {
        "q": "A 50-year-old awakens with sudden hearing loss in one ear (no vertigo, no ear pain). Audiometry shows moderate unilateral sensorineural hearing loss. What is the most appropriate management?",
        "options": [
          "Oral corticosteroids started promptly; urgent audiologic/ENT evaluation",
          "Topical antibiotic drops",
          "Reassurance and review in 6 months",
          "Mastoid surgery immediately"
        ],
        "answer": 0,
        "layers": {
          "concept": "Sudden sensorineural hearing loss - urgent oral corticosteroid",
          "discriminator": "Sudden unilateral SNHL = otologic emergency; prompt oral corticosteroids + urgent ENT/audiologic assessment",
          "trap": "Treating sudden SNHL as an infection or delaying reassurance",
          "rule": "Sudden SNHL (<72h): prompt oral corticosteroid (improve recovery) + urgent ENT/audiogram; exclude acoustic neuroma."
        }
      }
    ]
  },
  {
    "id": "electrolytes",
    "name": "Electrolytes & Acid-Base",
    "questions": [
      {
        "q": "A 70-year-old woman on a thiazide diuretic for hypertension presents with confusion. Serum sodium is 122 mmol/L. She is clinically volume-depleted. Which mechanism best explains the hyponatremia?",
        "options": [
          "Syndrome of inappropriate ADH (SIADH)",
          "Cerebral salt wasting",
          "Thiazide-induced volume depletion with impaired free-water excretion",
          "Adrenal insufficiency"
        ],
        "answer": 2,
        "layers": {
          "concept": "Hypovolemic hyponatremia — thiazide causes Na loss and volume depletion",
          "discriminator": "Thiazide + volume depletion + low U Na = hypovolemic hyponatremia (not SIADH, which is euvolemic)",
          "trap": "Clinical Mimic — thiazide hyponatremia (hypovolemic) vs SIADH (euvolemic, high U Na)",
          "rule": "Thiazide hyponatremia = volume depletion; SIADH = euvolemic with high urine Na"
        }
      },
      {
        "q": "A 55-year-old man develops hyponatremia 4 days after a subarachnoid haemorrhage. He is clinically volume-depleted with a high urine sodium. Which diagnosis is most likely?",
        "options": [
          "SIADH",
          "Hypothyroidism",
          "Nephrogenic diabetes insipidus",
          "Cerebral salt wasting"
        ],
        "answer": 3,
        "layers": {
          "concept": "Cerebral salt wasting — SAH + hyponatremia + volume depletion",
          "discriminator": "SAH + hyponatremia + VOLUME DEPLETION = cerebral salt wasting (vs SIADH which is euvolemic)",
          "trap": "Opposite — CSW (hypovolemic) vs SIADH (euvolemic)",
          "rule": "CSW = natriuresis after CNS injury with volume depletion; SIADH is euvolemic"
        }
      },
      {
        "q": "A patient's serum sodium measured by flame photometry is 118 mmol/L, but direct ion-selective electrode (after ultracentrifugation) is normal. The patient has severe hypertriglyceridaemia. What explains this?",
        "options": [
          "Pseudohyponatremia (lab artifact from lipids)",
          "True severe hyponatremia",
          "SIADH",
          "Hyperglycemia-induced shift"
        ],
        "answer": 0,
        "layers": {
          "concept": "Pseudohyponatremia — lab artifact in hyperlipidemia/hyperproteinemia",
          "discriminator": "Marked lipid/protein elevation dilutes Na in the sample → pseudohyponatremia (measured low, true normal)",
          "trap": "One-word discriminator — pseudohyponatremia (artifact, true Na normal)",
          "rule": "Pseudohyponatremia = lab artifact from lipids/protein; true Na is normal (direct ISE)"
        }
      },
      {
        "q": "A 30-year-old man has polyuria and thirst with hypernatremia and dilute urine. After water deprivation, desmopressin is given and urine osmolality rises markedly. What does this indicate?",
        "options": [
          "Nephrogenic diabetes insipidus",
          "Central (neurogenic) diabetes insipidus",
          "Psychogenic polydipsia",
          "SIADH"
        ],
        "answer": 1,
        "layers": {
          "concept": "Central vs nephrogenic DI — desmopressin causes concentration in central DI",
          "discriminator": "Desmopressin → urine concentration = CENTRAL DI (kidney responds); no response = nephrogenic",
          "trap": "Opposite — central DI (responds to DDAVP) vs nephrogenic (no response)",
          "rule": "Central DI responds to desmopressin (urine concentrates); nephrogenic does not"
        }
      },
      {
        "q": "A 48-year-old woman with chronic hyponatremia (Na 112 mmol/L) is corrected too rapidly to 132 mmol/L within 12 hours. Two days later she develops dysarthria, dysphagia, and a locked-in-like state. What is the cause?",
        "options": [
          "Osmotic demyelination syndrome",
          "Wernicke encephalopathy",
          "Acute ischemic stroke",
          "Central pontine myelinolysis from hypoglycemia"
        ],
        "answer": 0,
        "layers": {
          "concept": "Osmotic demyelination syndrome — over-rapid Na correction",
          "discriminator": "Chronic hyponatremia + rapid overcorrection + delayed dysarthria/locked-in = osmotic demyelination",
          "trap": "Severity under-recognition — rapid correction of chronic hyponatremia",
          "rule": "Over-rapid correction of chronic hyponatremia → osmotic demyelination (correct slowly, ~6 mmol/L/24h)"
        }
      },
      {
        "q": "A 2-month-old infant exclusively on formula with inadequate water intake presents with lethargy and a serum sodium of 160 mmol/L. Urine osmolality is high (concentrated). What is the most likely mechanism?",
        "options": [
          "Extrarenal free-water loss (insensible/insufficient intake)",
          "Diabetes insipidus",
          "Hyperaldosteronism",
          "Salt poisoning"
        ],
        "answer": 0,
        "layers": {
          "concept": "Hypernatremia — free-water deficit from inadequate intake / insensible loss",
          "discriminator": "Infant + hypernatremia + inadequate water intake = free-water deficit (not DI, which is ADH-related)",
          "trap": "Clinical Mimic — hypernatremia from water deficit vs DI (urine osmolality discriminates)",
          "rule": "Infant hypernatremia = free-water deficit (inadequate intake); DI shows persistent dilute urine"
        }
      },
      {
        "q": "A patient on furosemide with vomiting and metabolic alkalosis has serum potassium of 2.8 mmol/L. Which combination of mechanisms explains the hypokalemia?",
        "options": [
          "Only dietary deficiency",
          "Only transcellular shift from insulin",
          "Magnesium excess",
          "Renal K loss (diuretic) + GI loss (vomiting) + shift into cells (alkalosis)"
        ],
        "answer": 3,
        "layers": {
          "concept": "Hypokalemia — multifactorial (renal + GI loss + alkalosis shift)",
          "discriminator": "Diuretic + vomiting + alkalosis = combined renal/GI K loss plus intracellular shift",
          "trap": "Treatment misdirection — replacing K without addressing the cause",
          "rule": "Hypokalemia = renal loss (diuretics) + GI loss (vomiting) + shift (alkalosis/insulin)"
        }
      },
      {
        "q": "A 22-year-old man of Asian descent has recurrent episodes of proximal muscle weakness after heavy carbohydrate meals. Between episodes he is well with normal exam. What is the most likely diagnosis?",
        "options": [
          "Guillain-Barre syndrome",
          "Hypokalemic periodic paralysis",
          "Myasthenia gravis",
          "Polymyositis"
        ],
        "answer": 1,
        "layers": {
          "concept": "Hypokalemic periodic paralysis — episodic weakness after carbs/exercise",
          "discriminator": "Episodic flaccid weakness + low K after carbohydrate load/exercise = hypokalemic periodic paralysis",
          "trap": "Clinical Mimic — periodic paralysis (episodic, normal between) vs GBS (ascending, persistent)",
          "rule": "Hypokalemic periodic paralysis = episodic weakness after carbs/exercise + low K"
        }
      },
      {
        "q": "A patient with CKD has a potassium of 7.0 mmol/L. The ECG shows peaked T waves and a prolonged PR interval. Which progression indicates impending catastrophe?",
        "options": [
          "Shortening of the QT interval",
          "ST elevation in anterior leads",
          "Widening of the QRS complex toward a sine wave",
          "T-wave inversion"
        ],
        "answer": 2,
        "layers": {
          "concept": "Hyperkalemia ECG progression — peaked T → widened QRS → sine wave",
          "discriminator": "HyperK ECG: peaked T → prolonged PR → widened QRS → sine wave (pre-arrest)",
          "trap": "Severity under-recognition — QRS widening = pre-arrest in hyperkalemia",
          "rule": "HyperK ECG: peaked T → widened QRS → sine wave; QRS widening is pre-arrest"
        }
      },
      {
        "q": "A 68-year-old man with no renal disease has a reported potassium of 6.9 mmol/L, but he is asymptomatic with a normal ECG. Repeat testing after a drawing technique change shows 4.4 mmol/L. What happened?",
        "options": [
          "True hyperkalemia now resolved",
          "Laboratory error in calibration",
          "Medication-induced shift",
          "Pseudohyperkalemia from hemolysis/fist clenching"
        ],
        "answer": 3,
        "layers": {
          "concept": "Pseudohyperkalemia — artifact from hemolysis or prolonged tourniquet/fist clenching",
          "discriminator": "Asymptomatic 'hyperkalemia' + normal ECG + normal repeat = pseudohyperkalemia (artifact)",
          "trap": "One-word discriminator — pseudohyperkalemia (artifact, asymptomatic)",
          "rule": "Pseudohyperkalemia = artifact (hemolysis/fist clench); true hyperK is rarely asymptomatic at 6.9"
        }
      },
      {
        "q": "A 60-year-old man with CKD and a potassium of 6.6 mmol/L has peaked T waves but no QRS widening. Which is the MOST appropriate immediate step?",
        "options": [
          "IV insulin + dextrose only",
          "IV calcium gluconate to stabilise the myocardium",
          "Oral sodium polystyrene sulfonate only",
          "Watch and repeat in 6 hours"
        ],
        "answer": 1,
        "layers": {
          "concept": "Hyperkalemia — calcium first for cardiac membrane stabilisation when ECG changes present",
          "discriminator": "Any hyperK ECG change (even peaked T) → IV calcium FIRST for cardioprotection, then shift agents",
          "trap": "Treatment ladder — calcium (cardioprotection) before shift/removal",
          "rule": "HyperK + ECG changes: calcium FIRST (cardioprotect), then shift (insulin/salbutamol), then remove"
        }
      },
      {
        "q": "A 64-year-old man with weight loss and bone pain has calcium 12.8 mg/dL, phosphate low, and PTH suppressed (<10 pg/mL). What is the most likely mechanism?",
        "options": [
          "Malignancy (PTHrP-mediated humoral hypercalcemia)",
          "Primary hyperparathyroidism",
          "Vitamin D intoxication",
          "Sarcoidosis"
        ],
        "answer": 0,
        "layers": {
          "concept": "Hypercalcemia of malignancy — suppressed PTH (PTHrP), vs primary HPT (high PTH)",
          "discriminator": "Hypercalcemia + LOW/normal PTH = malignancy (PTHrP) or vitamin D; HIGH PTH = primary HPT",
          "trap": "Opposite — malignancy (low PTH) vs primary HPT (high PTH) for hypercalcemia",
          "rule": "Hypercalcemia: low PTH = malignancy (PTHrP)/vit D; high PTH = primary HPT"
        }
      },
      {
        "q": "A 50-year-old alcoholic man has tetany and a corrected calcium of 6.8 mg/dL. Despite IV calcium, the calcium remains low. Magnesium is 1.0 mg/dL. Why is calcium replacement failing?",
        "options": [
          "Hypomagnesemia prevents PTH secretion and action",
          "Vitamin D deficiency",
          "Pseudohypoparathyroidism",
          "Hungry bone syndrome"
        ],
        "answer": 0,
        "layers": {
          "concept": "Hypocalcemia — hypomagnesemia causes refractory hypocalcemia",
          "discriminator": "Low Mg → impaired PTH secretion/action → calcium replacement fails until Mg corrected",
          "trap": "Treatment misdirection — calcium without magnesium in refractory hypocalcemia",
          "rule": "Hypomagnesemia → impaired PTH secretion/action → refractory hypocalcemia (replace Mg)"
        }
      },
      {
        "q": "Which of the following is a recognised cause of hypomagnesemia?",
        "options": [
          "Primary hyperparathyroidism",
          "Hypothyroidism",
          "Chronic alcohol use with poor intake",
          "Hyperaldosteronism treated with spironolactone"
        ],
        "answer": 2,
        "layers": {
          "concept": "Hypomagnesemia — causes (alcohol, diuretics, diarrhoea, TPN, aminoglycosides)",
          "discriminator": "Hypomagnesemia causes: alcohol, loop/thiazide diuretics, diarrhoea, TPN, aminoglycosides, PPI",
          "trap": "Clinical Mimic — Mg loss causes vs conditions that raise or spare Mg",
          "rule": "Hypomagnesemia: alcohol, loop/thiazide diuretics, diarrhoea, TPN, aminoglycosides, PPI"
        }
      },
      {
        "q": "A 40-year-old woman in the third trimester develops seizures. Her blood pressure is 160/100 and she has proteinuria. Which magnesium preparation is the treatment of choice for seizure prophylaxis?",
        "options": [
          "Calcium gluconate",
          "Magnesium oxide orally",
          "Potassium chloride",
          "Magnesium sulfate"
        ],
        "answer": 3,
        "layers": {
          "concept": "Magnesium sulfate — eclampsia / pre-eclampsia seizure prophylaxis",
          "discriminator": "Pre-eclampsia/eclampsia seizures → IV magnesium sulfate (not calcium)",
          "trap": "Treatment ladder — magnesium sulfate for eclampsia; calcium is the ANTIDOTE",
          "rule": "Eclampsia seizures → IV magnesium sulfate; calcium gluconate is the antidote for Mg toxicity"
        }
      },
      {
        "q": "A patient with CKD stage 4 has an elevated phosphate and low calcitriol. Which complication results from this derangement?",
        "options": [
          "Hypoparathyroidism",
          "Secondary hyperparathyroidism (renal osteodystrophy)",
          "Osteoporosis from excess vitamin D",
          "Adynamic bone disease from high calcium"
        ],
        "answer": 1,
        "layers": {
          "concept": "CKD-MBD — hyperphosphatemia + low calcitriol → secondary hyperparathyroidism",
          "discriminator": "CKD: high PO4 + low calcitriol → low Ca → PTH rises = secondary hyperparathyroidism",
          "trap": "Opposite — secondary HPT (high turnover) vs adynamic bone disease (low turnover)",
          "rule": "CKD: hyperphosphatemia + low calcitriol → secondary hyperparathyroidism/renal osteodystrophy"
        }
      },
      {
        "q": "A 25-year-old woman has recurrent renal stones, hypokalemia, and a normal anion gap metabolic acidosis despite a normal GFR. What is the most likely diagnosis?",
        "options": [
          "Type 2 (proximal) RTA",
          "Type 4 RTA",
          "Type 1 (distal) renal tubular acidosis",
          "Chronic diarrhea"
        ],
        "answer": 2,
        "layers": {
          "concept": "Type 1 distal RTA — normal AG acidosis + hypokalemia + stones/nephrocalcinosis",
          "discriminator": "Normal AG metabolic acidosis + hypokalemia + calcium stones = distal (type 1) RTA",
          "trap": "Opposite — distal RTA (hypoK) vs type 4 RTA (hyperK)",
          "rule": "Distal (type 1) RTA = normal AG acidosis + hypokalemia + calcium stones"
        }
      },
      {
        "q": "A child has proximal muscle weakness, rickets, and glucosuria with a normal plasma glucose. Urine shows phosphaturia, aminoaciduria, and bicarbonate wasting. What syndrome does this represent?",
        "options": [
          "Distal RTA type 1",
          "Fanconi syndrome (proximal RTA type 2)",
          "Bartter syndrome",
          "Gitelman syndrome"
        ],
        "answer": 1,
        "layers": {
          "concept": "Fanconi syndrome — proximal tubular dysfunction (type 2 RTA + glycosuria/phosphaturia/aminoaciduria)",
          "discriminator": "Generalized proximal tubule loss (glucose/phosphate/amino acids/bicarbonate) = Fanconi syndrome",
          "trap": "Clinical Mimic — Fanconi (proximal, generalized) vs distal RTA (isolated acidification)",
          "rule": "Fanconi = proximal tubulopathy: bicarbonaturia + glycosuria + phosphaturia + aminoaciduria"
        }
      },
      {
        "q": "A 60-year-old man with long-standing diabetes has a normal anion gap metabolic acidosis and a potassium of 5.8 mmol/L. Which mechanism is most likely?",
        "options": [
          "Diarrhea",
          "Salicylate overdose",
          "Hypoaldosteronism / distal H+ and K+ secretion defect (type 4 RTA)",
          "Methanol ingestion"
        ],
        "answer": 2,
        "layers": {
          "concept": "Type 4 RTA — hyperkalemic distal RTA from hypoaldosteronism",
          "discriminator": "Normal AG acidosis + HYPERkalemia = type 4 RTA (aldosterone deficiency/resistance)",
          "trap": "Opposite — type 4 RTA (hyperK) vs types 1/2 (hypoK)",
          "rule": "Type 4 RTA = normal AG acidosis + hyperkalemia (aldosterone defect); types 1/2 are hypokalemic"
        }
      },
      {
        "q": "A 70-year-old man with septic shock has a high anion gap metabolic acidosis, elevated lactate (8 mmol/L), and low bicarbonate. Which is the primary mechanism?",
        "options": [
          "Type B lactic acidosis from metformin",
          "Ketoacidosis",
          "Methanol ingestion",
          "Type A lactic acidosis from tissue hypoperfusion"
        ],
        "answer": 3,
        "layers": {
          "concept": "Lactic acidosis — type A from hypoperfusion/shock (MUDPILES 'L')",
          "discriminator": "Shock + high AG acidosis + high lactate = type A lactic acidosis (hypoperfusion)",
          "trap": "Severity under-recognition — lactate as perfusion marker in shock",
          "rule": "Type A lactic acidosis = hypoperfusion/shock (treat perfusion); type B = metformin/toxins"
        }
      },
      {
        "q": "A 19-year-old with poorly controlled diabetes vomits repetitively and is found with pH 7.30, HCO3 18, and an elevated anion gap. What best describes the acid-base state?",
        "options": [
          "Pure high anion-gap metabolic acidosis",
          "Pure metabolic alkalosis",
          "High anion-gap metabolic acidosis (DKA) with concurrent metabolic alkalosis (vomiting)",
          "Respiratory acidosis"
        ],
        "answer": 2,
        "layers": {
          "concept": "Mixed acid-base disorder — DKA (high AG acidosis) + vomiting (metabolic alkalosis)",
          "discriminator": "High AG + low HCO3 that is LESS low than expected + vomiting = mixed high-AG acidosis + alkalosis",
          "trap": "Classification trap — mixed disorder (two metabolic processes)",
          "rule": "Mixed disorder: high-AG acidosis (DKA) + metabolic alkalosis (vomiting) raises HCO3 above expected"
        }
      },
      {
        "q": "A patient has a normal anion-gap metabolic acidosis. The urine anion gap is positive (urine Na+K − Cl is positive), indicating low urinary ammonium. What is the most likely diagnosis?",
        "options": [
          "Renal tubular acidosis (impaired NH4+ excretion)",
          "Diarrhea",
          "Salicylate overdose",
          "Methanol ingestion"
        ],
        "answer": 0,
        "layers": {
          "concept": "Normal AG acidosis — positive urine anion gap = RTA (low NH4 excretion); negative = diarrhea",
          "discriminator": "Normal AG acidosis: POSITIVE urine anion gap = RTA; NEGATIVE (high NH4) = GI/diarrhea loss",
          "trap": "One-word discriminator — urine anion gap (positive = RTA, negative = GI loss)",
          "rule": "Urine anion gap: positive = RTA (low NH4); negative = diarrhea/GI bicarbonate loss"
        }
      },
      {
        "q": "A malnourished chronic alcoholic presents after a binge with abdominal pain, a high anion-gap metabolic acidosis, elevated lactate, and ketonuria, but a normal blood glucose. Which diagnosis fits best?",
        "options": [
          "Alcoholic ketoacidosis",
          "Diabetic ketoacidosis",
          "Lactic acidosis only",
          "Salicylate overdose"
        ],
        "answer": 0,
        "layers": {
          "concept": "Alcoholic ketoacidosis — high AG acidosis, ketones + lactate, euglycemic",
          "discriminator": "Alcoholic + high AG acidosis + ketones + elevated lactate + NORMAL glucose = alcoholic ketoacidosis",
          "trap": "Clinical Mimic — alcoholic ketoacidosis (euglycemic) vs DKA (hyperglycemic)",
          "rule": "Alcoholic ketoacidosis: high AG acidosis + ketones + lactate + NORMAL glucose (vs DKA hyperglycemia)"
        }
      },
      {
        "q": "A 17-year-old with normal kidney function receives a rapid intravenous infusion of isotonic normal saline. After osmotic equilibrium, which best describes the distribution?",
        "options": [
          "Increased ECF and ICF, decreased sodium",
          "Increased ECF volume, unchanged ICF volume, unchanged plasma sodium",
          "Increased ECF, increased ICF, unchanged sodium",
          "Unchanged ECF, increased ICF, increased sodium"
        ],
        "answer": 1,
        "layers": {
          "concept": "Isotonic saline distribution — stays in ECF, no ICF shift, sodium concentration unchanged",
          "discriminator": "Isotonic fluid expands ECF only; no osmotic gradient so ICF unchanged; [Na] stays same",
          "trap": "Opposite — isotonic (ECF only, [Na] unchanged) vs free water (ICF expands) vs hypertonic (raises [Na])",
          "rule": "Isotonic saline stays in ECF (no ICF shift); plasma [Na] unchanged"
        }
      },
      {
        "q": "A 78-year-old woman on digoxin presents with nausea, bradycardia, and a potassium of 6.4 mmol/L. Which is the most appropriate acute management?",
        "options": [
          "IV calcium gluconate immediately",
          "Insulin and dextrose alone",
          "Potassium supplementation",
          "Digoxin-specific antibody fragments (Fab); avoid giving calcium"
        ],
        "answer": 3,
        "layers": {
          "concept": "Digoxin toxicity — hyperkalemia is a marker; treat with Digoxin-Fab, avoid calcium",
          "discriminator": "Digoxin toxicity hyperkalemia = give Digoxin-Fab; AVOID calcium (risk of 'stone heart')",
          "trap": "Treatment misdirection — giving calcium in digoxin toxicity (harmful)",
          "rule": "Digoxin toxicity hyperkalemia → Digoxin-Fab; avoid calcium (risk of 'stone heart')"
        }
      }
    ]
  },
  {
    "id": "endocrine",
    "name": "Endocrinology",
    "questions": [
      {
        "q": "A 40-year-old woman presents with a 1-week history of severe anterior neck pain radiating to the ear, fever, and transient palpitations. The thyroid is tender and firm. She recently had a viral upper respiratory infection. What is the most likely diagnosis?",
        "options": [
          "Subacute (de Quervain) thyroiditis",
          "Graves disease",
          "Hashimoto thyroiditis",
          "Acute bacterial thyroiditis"
        ],
        "answer": 0,
        "layers": {
          "concept": "Subacute thyroiditis — painful thyroid after viral illness, transient thyrotoxicosis",
          "discriminator": "PAINFUL thyroid + fever + post-viral + transient thyrotoxicosis = de Quervain (subacute) thyroiditis",
          "trap": "Clinical Mimic — painful thyroid (de Quervain) vs painless (Graves/Hashimoto)",
          "rule": "De Quervain (subacute) thyroiditis: painful tender thyroid + viral prodrome + transient thyrotoxicosis; NSAIDs/steroids"
        }
      },
      {
        "q": "A 60-year-old man on amiodarone for atrial fibrillation develops thyrotoxicosis with a low uptake on radioactive iodine scan. What is the most likely mechanism?",
        "options": [
          "Type 1 (iodine-induced excess synthesis)",
          "Graves disease",
          "Type 2 amiodarone-induced thyroiditis (destructive)",
          "Subacute thyroiditis"
        ],
        "answer": 2,
        "layers": {
          "concept": "Amiodarone thyroid — type 2 = destructive thyroiditis (low uptake), steroids",
          "discriminator": "Amiodarone + thyrotoxicosis + LOW RAI uptake = type 2 (destructive); type 1 (high uptake) = iodine excess",
          "trap": "Opposite — type 1 (high uptake, antithyroid) vs type 2 (low uptake, steroids)",
          "rule": "Amiodarone thyroid: type 2 = destructive (low uptake) → steroids; type 1 = iodine excess (high uptake) → antithyroid"
        }
      },
      {
        "q": "A 35-year-old woman with Graves disease and proptosis develops worsening eye pain, periorbital oedema, and diplopia. She is a smoker. Which factor worsens her orbital disease and what is the mainstay of urgent treatment for severe disease?",
        "options": [
          "Hypothyroidism worsens it; start thyroxine",
          "Smoking worsens it; high-dose steroids / orbital decompression for severe disease",
          "Radioiodine alone cures it",
          "Levothyroxine suppression prevents progression"
        ],
        "answer": 1,
        "layers": {
          "concept": "Thyroid eye disease — smoking worsens; steroids/decompression for severe",
          "discriminator": "Graves exophthalmos + smoking + severe eye involvement = thyroid eye disease → steroids/decompression",
          "trap": "Severity under-recognition — exophthalmos needs steroids/decompression, not just thyroxine",
          "rule": "Thyroid eye disease: smoking worsens; severe (optic compression) → steroids/orbital decompression"
        }
      },
      {
        "q": "A 50-year-old woman has an elevated TSH (8.5 mIU/L) with a normal free T4 on routine screening. She is asymptomatic. Which management is most appropriate?",
        "options": [
          "Start high-dose levothyroxine immediately",
          "Refer urgently for thyroid scan",
          "Start antithyroid drugs",
          "Observe and repeat; treat if TSH >10 or symptoms/TPO antibodies develop"
        ],
        "answer": 3,
        "layers": {
          "concept": "Subclinical hypothyroidism — observe unless TSH>10 or symptoms/antibodies",
          "discriminator": "Elevated TSH + normal T4 + asymptomatic = subclinical hypothyroidism → observe unless TSH>10",
          "trap": "Treatment misdirection — overtreating mild/subclinical hypothyroidism",
          "rule": "Subclinical hypothyroidism: treat if TSH>10 or symptomatic/TPO+; otherwise observe"
        }
      },
      {
        "q": "A 70-year-old woman with a long-standing multinodular goitre develops palpitations, weight loss, and atrial fibrillation. There is no exophthalmos. What distinguishes this from Graves disease and guides therapy?",
        "options": [
          "Graves — start antithyroid drugs first",
          "Thyroiditis — observe only",
          "Thyroid cancer — urgent surgery",
          "Toxic multinodular goitre — nodular goitre, no exophthalmos; treat with radioiodine"
        ],
        "answer": 3,
        "layers": {
          "concept": "Toxic multinodular goitre — elderly, nodular goitre, no exophthalmos; radioiodine",
          "discriminator": "Elderly + nodular goitre + thyrotoxicosis WITHOUT exophthalmos = toxic MNG (vs Graves)",
          "trap": "Clinical Mimic — TMG (nodular, no exophthalmos) vs Graves (diffuse + exophthalmos)",
          "rule": "Toxic MNG: elderly + nodular goitre + thyrotoxicosis, NO exophthalmos; treat with radioiodine"
        }
      },
      {
        "q": "A 45-year-old woman had a total thyroidectomy for papillary thyroid carcinoma and is on thyroxine. Three months later, while on thyroxine, her thyroglobulin is undetectable but anti-thyroglobulin antibodies are negative. What does this indicate?",
        "options": [
          "Definite metastatic recurrence",
          "Inadequate thyroxine dose",
          "No evidence of residual/recurrent disease",
          "Need for repeat surgery now"
        ],
        "answer": 2,
        "layers": {
          "concept": "Differentiated thyroid Ca — thyroglobulin as tumour marker (undetectable = no disease)",
          "discriminator": "Post-thyroidectomy: undetectable thyroglobulin (+ negative antibodies) = no residual disease",
          "trap": "One-word discriminator — thyroglobulin = differentiated thyroid Ca tumour marker",
          "rule": "Differentiated thyroid Ca: thyroglobulin = tumour marker; undetectable (no Ab) = no recurrence"
        }
      },
      {
        "q": "A newborn girl is noted to have ambiguous genitalia and, at 2 weeks, develops vomiting, dehydration, and hypotension. Serum electrolytes show hyponatraemia and hyperkalaemia. What is the most likely diagnosis?",
        "options": [
          "Primary hyperaldosteronism",
          "Congenital adrenal hypoplasia",
          "Turner syndrome",
          "Congenital adrenal hyperplasia (21-hydroxylase deficiency)"
        ],
        "answer": 3,
        "layers": {
          "concept": "21-hydroxylase deficiency CAH — salt-wasting + virilization + hypoNa/hyperK",
          "discriminator": "Female infant + ambiguous genitalia + salt-wasting crisis (hypoNa/hyperK) = 21-OH deficiency CAH",
          "trap": "Clinical Mimic — CAH (salt-wasting + virilization) vs other causes of ambiguous genitalia",
          "rule": "21-OH deficiency CAH: ambiguous genitalia + salt-wasting crisis (hypoNa/hyperK) + ↑17-OH progesterone"
        }
      },
      {
        "q": "A 50-year-old man with fatigue and hypotension has hyponatraemia but a normal potassium. He has pale skin with no pigmentation. Which statement is correct?",
        "options": [
          "Findings confirm PRIMARY adrenal insufficiency",
          "Findings suggest SECONDARY adrenal insufficiency (no hyperkalaemia/pigmentation)",
          "Hyperkalaemia is expected",
          "Skin pigmentation is expected"
        ],
        "answer": 1,
        "layers": {
          "concept": "Primary vs secondary adrenal insufficiency — hyperkalaemia + pigmentation only in PRIMARY",
          "discriminator": "Adrenal insufficiency WITHOUT hyperkalaemia/pigmentation = secondary (pituitary); primary has both",
          "trap": "Opposite — primary (hyperK + pigmentation) vs secondary (normoK, no pigmentation)",
          "rule": "Primary AI: low cortisol + low aldosterone → hypoNa + hyperK + pigmentation. Secondary: cortisol only → hypoNa, normal K, no pigment"
        }
      },
      {
        "q": "A woman who had bilateral adrenalectomy for Cushing disease 5 years ago now presents with progressive visual field loss and a rapidly enlarging pituitary mass. What is the diagnosis?",
        "options": [
          "Pituitary apoplexy",
          "Craniopharyngioma",
          "Nelson syndrome",
          "Metastatic lung cancer"
        ],
        "answer": 2,
        "layers": {
          "concept": "Nelson syndrome — pituitary tumour enlargement after bilateral adrenalectomy for Cushing",
          "discriminator": "Bilateral adrenalectomy for Cushing + enlarging pituitary mass + visual loss = Nelson syndrome",
          "trap": "Severity under-recognition — post-bilateral-adrenalectomy pituitary tumour = Nelson",
          "rule": "Nelson syndrome: pituitary macroadenoma after bilateral adrenalectomy for Cushing (loss of feedback)"
        }
      },
      {
        "q": "A 55-year-old man has an adrenal mass (3 cm) found incidentally on CT for renal colic. He is hypertensive with hypokalaemia. What is the most appropriate next step?",
        "options": [
          "Immediate adrenalectomy",
          "Observe without testing",
          "Endocrine workup (exclude Cushing, pheochromocytoma, Conn) before any surgery",
          "Chemotherapy"
        ],
        "answer": 2,
        "layers": {
          "concept": "Adrenal incidentaloma — exclude hormonal hyperfunction before considering surgery",
          "discriminator": "Incidental adrenal mass → biochemical workup (Cushing/pheo/Conn) before surgery",
          "trap": "Treatment misdirection — operating on an incidentaloma without endocrine workup",
          "rule": "Adrenal incidentaloma: exclude Cushing/pheochromocytoma/Conn biochemically before surgery; most observed"
        }
      },
      {
        "q": "A 45-year-old man presents with coarse facial features, enlarged hands and feet, and worsening glucose intolerance. Which screening test is most appropriate first?",
        "options": [
          "Random growth hormone level",
          "Serum IGF-1 level",
          "MRI pituitary immediately",
          "Oral glucose tolerance test alone"
        ],
        "answer": 1,
        "layers": {
          "concept": "Acromegaly — IGF-1 screening; GH excess from pituitary adenoma",
          "discriminator": "Coarse features + enlarging hands/feet + glucose intolerance = acromegaly → check IGF-1 first",
          "trap": "Clinical Mimic — acromegaly (coarse features, enlarging ring/shoe size) vs normal ageing",
          "rule": "Acromegaly: GH adenoma → screen with IGF-1 (stable), confirm with OGTT GH suppression"
        }
      },
      {
        "q": "A 60-year-old man with a known pituitary macroadenoma suddenly develops a severe headache, bilateral visual loss, and hypotension with hypoglycaemia. What is the urgent diagnosis and action?",
        "options": [
          "Pituitary apoplexy — give glucocorticoids and arrange urgent surgery",
          "Migraine — analgesia and observe",
          "Subarachnoid haemorrhage — wait for CT",
          "Pituitary adenoma benign — no action"
        ],
        "answer": 0,
        "layers": {
          "concept": "Pituitary apoplexy — acute haemorrhage/infarction; steroids + urgent decompression",
          "discriminator": "Pituitary macroadenoma + sudden HA + visual loss + hypotension/hypoglycaemia = apoplexy (emergency)",
          "trap": "Severity under-recognition — apoplexy = sudden HA + visual loss + adrenal crisis",
          "rule": "Pituitary apoplexy: acute HA + visual loss + cortisol-deficiency shock → IV steroids + urgent decompression"
        }
      },
      {
        "q": "A 9-year-old boy has slowed growth, bitemporal hemianopia, and a calcified suprasellar mass on CT. What is the most likely diagnosis?",
        "options": [
          "Pituitary adenoma",
          "Meningioma",
          "Glioma of the optic nerve",
          "Craniopharyngioma"
        ],
        "answer": 3,
        "layers": {
          "concept": "Craniopharyngioma — child, calcified suprasellar mass, bitemporal hemianopia",
          "discriminator": "Child + calcified suprasellar mass + bitemporal hemianopia + growth failure = craniopharyngioma",
          "trap": "Clinical Mimic — craniopharyngioma (calcified suprasellar, child) vs pituitary adenoma",
          "rule": "Craniopharyngioma: child + calcified suprasellar mass + bitemporal hemianopia + hormone deficits"
        }
      },
      {
        "q": "A 30-year-old woman on an antipsychotic for schizophrenia develops galactorrhoea and amenorrhoea. Prolactin is markedly elevated. What should be considered before assuming a prolactinoma?",
        "options": [
          "Drug-induced hyperprolactinemia (antipsychotic/metoclopramide) — review the medication",
          "Prolactinoma confirmed — refer for transsphenoidal surgery",
          "Primary hypothyroidism",
          "Pregnancy is the only cause"
        ],
        "answer": 0,
        "layers": {
          "concept": "Drug-induced hyperprolactinemia — antipsychotics/D2 blockers before prolactinoma",
          "discriminator": "Hyperprolactinemia on antipsychotic/metoclopramide = drug-induced; review drug before imaging",
          "trap": "Treatment misdirection — assuming prolactinoma without checking drug causes",
          "rule": "Drug-induced hyperprolactinemia: antipsychotics/metoclopramide (D2 blockade); review drug before prolactinoma workup"
        }
      },
      {
        "q": "A 28-year-old woman in the postpartum period presents with headache, bitemporal hemianopia, and mild diabetes insipidus. MRI shows a homogenously enhancing pituitary mass. What is the most likely diagnosis?",
        "options": [
          "Craniopharyngioma",
          "Lymphocytic hypophysitis",
          "Pituitary adenoma",
          "Metastasis"
        ],
        "answer": 1,
        "layers": {
          "concept": "Lymphocytic hypophysitis — postpartum pituitary mass with DI",
          "discriminator": "Postpartum woman + pituitary mass + diabetes insipidus = lymphocytic (autoimmune) hypophysitis",
          "trap": "Clinical Mimic — lymphocytic hypophysitis (postpartum + DI) vs pituitary adenoma",
          "rule": "Lymphocytic hypophysitis: postpartum/late-pregnancy pituitary mass + DI; steroids first-line"
        }
      },
      {
        "q": "A 7-year-old boy is below the 3rd centile for height with a height velocity below the 25th centile, but normal body proportions. Bone age is delayed. What is the most likely underlying issue if GH deficiency is confirmed?",
        "options": [
          "Growth hormone deficiency causing proportionate short stature with delayed bone age",
          "Achondroplasia",
          "Turner syndrome",
          "Constitutional growth delay"
        ],
        "answer": 0,
        "layers": {
          "concept": "Growth hormone deficiency — proportionate short stature + reduced growth velocity + delayed bone age",
          "discriminator": "Child: short stature + low growth velocity + delayed bone age + normal proportions = GH deficiency",
          "trap": "Clinical Mimic — GH deficiency (proportionate, low velocity) vs achondroplasia/Turner/constitutional",
          "rule": "GH deficiency: proportionate short stature + reduced growth velocity + delayed bone age; stim test confirms"
        }
      },
      {
        "q": "A 40-year-old woman has galactorrhoea and amenorrhoea. MRI shows an empty sella with a thin pituitary stalk displaced, but no discrete adenoma. Prolactin is mildly elevated. What explains the hyperprolactinemia?",
        "options": [
          "Prolactin-secreting macroadenoma",
          "Primary hypothyroidism",
          "Stalk effect — interrupted dopamine inhibition from stalk compression",
          "Renal failure"
        ],
        "answer": 2,
        "layers": {
          "concept": "Stalk effect — hyperprolactinemia from interrupted dopamine (stalk compression)",
          "discriminator": "No adenoma but high prolactin + stalk compression = stalk effect (lost dopamine inhibition)",
          "trap": "Classification trap — stalk effect (no adenoma) vs prolactinoma (mass)",
          "rule": "Stalk effect: stalk compression interrupts hypothalamic dopamine → hyperprolactinemia without prolactinoma"
        }
      },
      {
        "q": "A 55-year-old man has recurrent episodes of confusion and diaphoresis relieved by eating, occurring fasting or post-exercise. A 72-hour fast reproduces symptoms with a low glucose, elevated insulin, and detectable C-peptide. What is the diagnosis?",
        "options": [
          "Factitious hypoglycaemia (exogenous insulin)",
          "Addison disease",
          "Reactive postprandial hypoglycaemia",
          "Insulinoma"
        ],
        "answer": 3,
        "layers": {
          "concept": "Insulinoma — endogenous hyperinsulinaemic fasting hypoglycaemia (Whipple triad)",
          "discriminator": "Fasting hypoglycaemia + HIGH insulin + C-peptide = insulinoma (endogenous); low C-peptide = factitious",
          "trap": "Severity under-recognition — fasting hypoglycaemia + high insulin/C-peptide = insulinoma",
          "rule": "Insulinoma: fasting hypoglycaemia + inappropriately high insulin + C-peptide (Whipple triad); surgery"
        }
      },
      {
        "q": "A 65-year-old man has bone pain and an elevated alkaline phosphatase with normal calcium and phosphate. X-ray of the pelvis shows cortical thickening and a 'cotton-wool' appearance. What is the diagnosis?",
        "options": [
          "Paget disease of bone",
          "Osteomalacia",
          "Osteoporosis",
          "Multiple myeloma"
        ],
        "answer": 0,
        "layers": {
          "concept": "Paget disease — elevated ALP, normal Ca/PO4, 'cotton-wool' bone on X-ray",
          "discriminator": "Bone pain + high ALP + normal Ca/PO4 + cotton-wool bone = Paget disease",
          "trap": "One-word discriminator — elevated ALP + normal Ca/PO4 + cotton-wool bone = Paget",
          "rule": "Paget disease: high ALP, normal Ca/PO4, cortical thickening/cotton-wool bone; bisphosphonates"
        }
      },
      {
        "q": "A 68-year-old postmenopausal woman has a DEXA T-score of -3.0 at the lumbar spine after a low-trauma wrist fracture. What is the most appropriate first-line treatment to reduce fracture risk?",
        "options": [
          "Calcium alone",
          "Bisphosphonate (e.g., alendronate)",
          "Thyroid hormone",
          "High-dose vitamin D only"
        ],
        "answer": 1,
        "layers": {
          "concept": "Postmenopausal osteoporosis — bisphosphonate first-line for fracture prevention",
          "discriminator": "Postmenopausal osteoporosis (T-score ≤-2.5 + fragility fracture) → bisphosphonate first-line",
          "trap": "Treatment ladder — bisphosphonate first-line (not calcium/vit D alone)",
          "rule": "Postmenopausal osteoporosis (T≤-2.5 or fragility fracture): bisphosphonate first-line + Ca/vit D"
        }
      },
      {
        "q": "A 40-year-old man is found to have asymptomatic hypercalcaemia with a normal PTH and a low urine calcium/creatinine ratio. He has a family history of 'high calcium' with no stones or fractures. What is the likely diagnosis?",
        "options": [
          "Primary hyperparathyroidism",
          "Malignancy (PTHrP)",
          "Familial hypocalciuric hypercalcaemia (FHH)",
          "Sarcoidosis"
        ],
        "answer": 2,
        "layers": {
          "concept": "FHH — benign familial hypercalcemia with LOW urine calcium (not primary HPT)",
          "discriminator": "Asymptomatic hypercalcemia + low urine Ca + family history + no complications = FHH (benign)",
          "trap": "Clinical Mimic — FHH (low urine Ca, benign) vs primary HPT (high urine Ca, operative)",
          "rule": "FHH: benign familial hypercalcemia, low urine Ca/creatinine ratio; no surgery (vs primary HPT)"
        }
      },
      {
        "q": "A 45-year-old man has recurrent renal stones and is found to have primary hyperparathyroidism, a pituitary macroadenoma, and multiple gastric ulcerations. Which syndrome does this represent?",
        "options": [
          "Multiple endocrine neoplasia type 1 (MEN1)",
          "MEN type 2A",
          "MEN type 2B",
          "von Hippel-Lindau"
        ],
        "answer": 0,
        "layers": {
          "concept": "MEN1 — parathyroid + pituitary + pancreatic (3 Ps)",
          "discriminator": "Parathyroid + pituitary + pancreatic tumours = MEN1 (vs MEN2 = thyroid/pheo/parathyroid)",
          "trap": "Classification trap — MEN1 (parathyroid+pituitary+pancreas) vs MEN2 (thyroid+pheo+parathyroid)",
          "rule": "MEN1 = parathyroid + pituitary + pancreatic (3 Ps); MEN2 = medullary thyroid Ca + pheochromocytoma"
        }
      },
      {
        "q": "A 50-year-old woman has a 1.5 cm thyroid nodule. Ultrasound shows microcalcifications, irregular margins, marked hypoechoic echotexture, and a taller-than-wide shape. What is the most appropriate next step?",
        "options": [
          "Repeated ultrasound in 1 year",
          "Total thyroidectomy without biopsy",
          "Radioiodine ablation",
          "Fine-needle aspiration (FNA) biopsy"
        ],
        "answer": 3,
        "layers": {
          "concept": "Thyroid nodule — suspicious sonographic features warrant FNA",
          "discriminator": "Nodule with microcalcification/irregular margin/hypoechoic/taller-than-wide = suspicious → FNA",
          "trap": "One-word discriminator — microcalcification/irregular margin/taller-than-wide = suspicious nodule → FNA",
          "rule": "Thyroid nodule: microcalcification + irregular margin + taller-than-wide = suspicious → FNA biopsy"
        }
      },
      {
        "q": "A 70-year-old man in the ICU with severe sepsis has a low free T3, a normal TSH, and a normal free T4. He is clinically euthyroid. What explains these thyroid tests?",
        "options": [
          "Primary hypothyroidism",
          "Non-thyroidal illness (euthyroid sick syndrome)",
          "Central hypothyroidism",
          "Hyperthyroidism"
        ],
        "answer": 1,
        "layers": {
          "concept": "Non-thyroidal illness — low T3, normal TSH/fT4 in acute illness; do not treat",
          "discriminator": "Acute severe illness + low T3 + normal TSH/T4 + euthyroid = euthyroid sick syndrome",
          "trap": "Clinical Mimic — euthyroid sick (low T3, normal TSH) vs true hypothyroidism",
          "rule": "Euthyroid sick syndrome: low T3, normal TSH/fT4 in severe illness; recovers; no thyroid treatment"
        }
      },
      {
        "q": "A 25-year-old East Asian man with untreated hyperthyroidism presents with acute symmetric proximal muscle weakness and a potassium of 2.6 mmol/L during an attack. What is the mechanism and association?",
        "options": [
          "Thyrotoxic periodic paralysis — hyperthyroidism triggers hypokalaemic paralysis",
          "Hypokalaemic periodic paralysis without thyroid disease",
          "Hyperkalaemic periodic paralysis",
          "Myasthenia gravis"
        ],
        "answer": 0,
        "layers": {
          "concept": "Thyrotoxic periodic paralysis — hyperthyroidism → hypokalaemic paralysis (Asian males)",
          "discriminator": "Hyperthyroid + acute hypokalaemic weakness (Asian male) = thyrotoxic periodic paralysis",
          "trap": "Clinical Mimic — thyrotoxic periodic paralysis (hyperthyroid) vs familial hypokalemic PP",
          "rule": "Thyrotoxic periodic paralysis: hyperthyroidism (Graves, Asian males) → hypokalaemic weakness; treat thyroid"
        }
      }
    ]
  },
  {
    "id": "endocrinesurgery",
    "name": "Endocrine Surgery",
    "questions": [
      {
        "q": "A 6-year-old child has a midline neck swelling that moves upward on protrusion of the tongue and on swallowing. It is non-tender and cystic. What is the diagnosis and management?",
        "options": [
          "Branchial cleft cyst — simple excision",
          "Thyroid nodule — hemithyroidectomy",
          "Thyroglossal duct cyst — Sistrunk procedure (cyst + tract + hyoid)",
          "Lymphadenopathy — antibiotics"
        ],
        "answer": 2,
        "layers": {
          "concept": "Thyroglossal duct cyst — midline, moves on tongue protrusion; Sistrunk resection",
          "discriminator": "Midline neck cyst moving on tongue protrusion = thyroglossal duct cyst → Sistrunk (tract + hyoid)",
          "trap": "Clinical Mimic — thyroglossal (midline, moves on protrusion) vs branchial (lateral)",
          "rule": "Thyroglossal duct cyst: midline, moves on tongue protrusion; Sistrunk = excise cyst + tract + hyoid"
        }
      },
      {
        "q": "A 20-year-old presents with a painless, fluctuant swelling in the anterior triangle of the neck, anterior to the sternocleidomastoid. It has been present since childhood and does not move with tongue protrusion. What is it?",
        "options": [
          "Thyroglossal duct cyst",
          "Thyroid adenoma",
          "Branchial (pharyngeal) cleft cyst",
          "Carotid body tumour"
        ],
        "answer": 2,
        "layers": {
          "concept": "Branchial cleft cyst — lateral neck (anterior triangle), no movement on protrusion",
          "discriminator": "Lateral neck cyst anterior to SCM, no tongue-protrusion movement = branchial cleft cyst",
          "trap": "Clinical Mimic — branchial (lateral) vs thyroglossal (midline, moves on protrusion)",
          "rule": "Branchial cleft cyst: lateral neck (anterior triangle), no movement on tongue protrusion; excision"
        }
      },
      {
        "q": "A singer undergoes thyroid lobectomy and afterwards reports difficulty hitting high notes and a change in vocal pitch, but no breathiness or hoarseness at rest. Which nerve was most likely injured?",
        "options": [
          "Recurrent laryngeal nerve",
          "Vagus nerve",
          "Hypoglossal nerve",
          "External branch of the superior laryngeal nerve"
        ],
        "answer": 3,
        "layers": {
          "concept": "External laryngeal nerve injury — loss of pitch/high notes (not hoarseness); RLN = hoarseness",
          "discriminator": "Loss of pitch/high-note control (not hoarseness) = external laryngeal nerve (SLN external) injury",
          "trap": "Opposite — external laryngeal (pitch loss) vs RLN (hoarseness/breathiness)",
          "rule": "External laryngeal (SLN external) injury: loss of pitch/high-note control, no hoarseness; RLN = hoarseness"
        }
      },
      {
        "q": "After a total thyroidectomy, a patient develops immediate stridor, respiratory distress, and a fixed midline (paramedian) cord bilaterally. What is the emergency and management?",
        "options": [
          "Hypocalcaemic laryngospasm — give calcium",
          "Bilateral recurrent laryngeal nerve injury — airway obstruction; urgent tracheostomy/intubation",
          "Wound haematoma — open at bedside",
          "Unilateral RLN injury — observe"
        ],
        "answer": 1,
        "layers": {
          "concept": "Bilateral RLN injury — airway emergency (bilateral cord fixation) → tracheostomy",
          "discriminator": "Bilateral RLN injury → both cords paramedian → airway obstruction → urgent airway (tracheostomy)",
          "trap": "Severity under-recognition — bilateral RLN = airway emergency (tracheostomy), not just hoarseness",
          "rule": "Bilateral RLN injury: both cords paramedian → airway obstruction → urgent tracheostomy/intubation"
        }
      },
      {
        "q": "A 38-year-old woman has a 2.5 cm papillary thyroid carcinoma with no distant metastases but with a 0.5 cm suspicious central compartment node. What is the recommended initial surgery?",
        "options": [
          "Lobectomy alone",
          "Radioiodine without surgery",
          "Total thyroidectomy with central compartment lymph node dissection",
          "External beam radiotherapy"
        ],
        "answer": 2,
        "layers": {
          "concept": "Papillary thyroid Ca — total thyroidectomy + central compartment dissection for ≥1 cm / nodal disease",
          "discriminator": "Papillary Ca ≥1 cm or with central nodes → total thyroidectomy + central neck dissection",
          "trap": "Treatment ladder — total thyroidectomy + central dissection (not lobectomy) for larger/nodal papillary Ca",
          "rule": "Papillary thyroid Ca: total thyroidectomy + central neck dissection for tumours ≥1cm or nodal disease"
        }
      },
      {
        "q": "After total thyroidectomy for a 3 cm follicular variant papillary carcinoma with extrathyroidal extension, which adjuvant therapy is indicated?",
        "options": [
          "External beam radiotherapy",
          "Chemotherapy",
          "No further treatment",
          "Radioiodine (RAI) ablation of residual tissue"
        ],
        "answer": 3,
        "layers": {
          "concept": "Differentiated thyroid Ca — adjuvant radioiodine after thyroidectomy",
          "discriminator": "Post-thyroidectomy for higher-risk differentiated Ca (size/extension) → RAI ablation",
          "trap": "Treatment ladder — RAI ablation after thyroidectomy for higher-risk differentiated Ca",
          "rule": "Adjuvant RAI after thyroidectomy for intermediate/high-risk differentiated thyroid Ca (size/ETE/nodes)"
        }
      },
      {
        "q": "A 60-year-old woman with long-standing Hashimoto thyroiditis develops a rapidly enlarging, painful thyroid mass with compressive symptoms over 2 weeks. Fine-needle aspiration shows atypical lymphoid cells. What is the likely diagnosis and management?",
        "options": [
          "Primary thyroid lymphoma — requires excisional biopsy + chemo/radiotherapy",
          "Anaplastic carcinoma — immediate surgery",
          "Medullary carcinoma",
          "Simple nodular goitre — observe"
        ],
        "answer": 0,
        "layers": {
          "concept": "Thyroid lymphoma — rapid enlargement in Hashimoto; excisional biopsy + chemo/RT",
          "discriminator": "Rapid painful thyroid enlargement in Hashimoto + lymphoid cells = primary thyroid lymphoma",
          "trap": "Clinical Mimic — thyroid lymphoma (rapid in Hashimoto) vs anaplastic Ca vs nodular goitre",
          "rule": "Thyroid lymphoma: rapid enlargement in Hashimoto; excisional biopsy; chemo/radiotherapy (not thyroidectomy)"
        }
      },
      {
        "q": "A patient requires reoperation for recurrent thyroid nodules after a previous partial thyroidectomy. Which complication risk is substantially higher than at first surgery?",
        "options": [
          "Recurrent laryngeal nerve and parathyroid injury (distorted planes)",
          "Carotid artery injury",
          "Tracheal perforation",
          "Chyle leak"
        ],
        "answer": 0,
        "layers": {
          "concept": "Reoperative thyroid surgery — higher RLN and parathyroid injury risk",
          "discriminator": "Reoperative neck surgery → scarred distorted planes → higher RLN/parathyroid injury",
          "trap": "Severity under-recognition — reoperative thyroid = higher RLN/parathyroid injury (plan accordingly)",
          "rule": "Reoperative thyroid/parathyroid: scarred planes → higher RLN + parathyroid injury; use monitoring"
        }
      },
      {
        "q": "A 34-year-old woman with Graves disease and a large multinodular goitre has compressive symptoms and declining response to antithyroid drugs. She is planned for total thyroidectomy. Which pre-operative step is essential to avoid a thyroid storm?",
        "options": [
          "Operate immediately regardless of thyroid state",
          "Achieve euthyroid state with antithyroid drugs + beta-blocker ± Lugol iodine",
          "Start high-dose levothyroxine",
          "Only give steroids"
        ],
        "answer": 1,
        "layers": {
          "concept": "Graves surgery — must be euthyroid pre-op (ATD + beta-blocker ± iodine) to prevent storm",
          "discriminator": "Graves thyroidectomy needs euthyroid prep (ATD, beta-blocker, sometimes Lugol) to avoid storm",
          "trap": "Treatment ladder — euthyroid prep (ATD + beta-blocker ± iodine) before Graves thyroidectomy",
          "rule": "Graves surgery indicated for compressive/malignant/failed-medical; must be euthyroid pre-op (avoid storm)"
        }
      },
      {
        "q": "A patient with primary hyperparathyroidism has a single enlarged parathyroid gland on sestamibi scan and normal other glands on exploration. What is the lesion and procedure?",
        "options": [
          "Solitary parathyroid adenoma — minimally invasive parathyroidectomy",
          "Four-gland hyperplasia — total parathyroidectomy",
          "Parathyroid carcinoma — en bloc resection",
          "Thyroid adenoma — hemithyroidectomy"
        ],
        "answer": 0,
        "layers": {
          "concept": "Parathyroid adenoma — solitary > MIP; hyperplasia needs 3.5-gland/subtotal",
          "discriminator": "Single adenoma on localization = minimally invasive parathyroidectomy; 4-gland disease = different",
          "trap": "Clinical Mimic — solitary adenoma (MIP) vs 4-gland hyperplasia (subtotal/total)",
          "rule": "Solitary parathyroid adenoma: MIP; 4-gland hyperplasia: subtotal/total + autotransplant; carcinoma: en bloc"
        }
      },
      {
        "q": "A patient with long-standing CKD on dialysis develops progressively rising PTH and calcium despite medical therapy and is being evaluated for transplant. What is the underlying process?",
        "options": [
          "Primary hyperparathyroidism from an adenoma",
          "Tertiary hyperparathyroidism — autonomous parathyroid hyperplasia from CKD",
          "Vitamin D toxicity",
          "Sarcoidosis"
        ],
        "answer": 1,
        "layers": {
          "concept": "Tertiary hyperparathyroidism — CKD-driven parathyroid hyperplasia becomes autonomous",
          "discriminator": "CKD + refractory high PTH/high Ca = tertiary HPT (autonomous hyperplasia); surgery if severe",
          "trap": "Clinical Mimic — tertiary (CKD, autonomous hyperplasia) vs primary (adenoma) HPT",
          "rule": "Tertiary HPT: CKD → parathyroid hyperplasia becomes autonomous; surgery if refractory/pre-transplant"
        }
      },
      {
        "q": "A patient with primary hyperparathyroidism suddenly develops severe hypercalcaemia (Ca 15 mg/dL) with confusion, abdominal pain, and dehydration. What is the most urgent definitive treatment if medical measures fail?",
        "options": [
          "Observation",
          "Urgent parathyroidectomy (after stabilisation)",
          "Long-term bisphosphonate only",
          "Thyroidectomy"
        ],
        "answer": 1,
        "layers": {
          "concept": "Parathyroid crisis — severe symptomatic hypercalcaemia → urgent parathyroidectomy after stabilisation",
          "discriminator": "Symptomatic severe hyperCa from HPT = parathyroid crisis → urgent parathyroidectomy (after resuscitation)",
          "trap": "Severity under-recognition — severe symptomatic hyperCa in HPT = parathyroid crisis (urgent surgery)",
          "rule": "Parathyroid crisis: severe symptomatic HPT hyperCa → stabilise (fluids/bisphosphonate) then urgent parathyroidectomy"
        }
      },
      {
        "q": "During thyroid lobectomy, the surgeon must ligate the inferior thyroid artery. Why is careful dissection at this site critical for parathyroid preservation?",
        "options": [
          "It supplies the recurrent laryngeal nerve directly",
          "It is the only blood supply to the thyroid",
          "It carries parathyroid venous drainage",
          "The inferior thyroid artery supplies the inferior parathyroids; ligate laterally to preserve them"
        ],
        "answer": 3,
        "layers": {
          "concept": "Inferior thyroid artery — supplies inferior parathyroids; ligate laterally to preserve them",
          "discriminator": "Inferior thyroid artery gives branches to inferior parathyroids; ligate distal/lateral to avoid devascularising them",
          "trap": "One-word discriminator — inferior thyroid artery supplies inferior parathyroids (ligate lateral)",
          "rule": "Inferior thyroid artery supplies inferior parathyroids; ligate laterally to preserve parathyroid viability"
        }
      },
      {
        "q": "A 58-year-old has a 5 cm adrenal mass found incidentally. Biochemical workup excludes Cushing, pheochromocytoma, and aldosteronism. What is the recommendation?",
        "options": [
          "Surgical resection (size >4 cm raises malignancy concern)",
          "No further action, benign",
          "Observe with no follow-up",
          "Chemotherapy"
        ],
        "answer": 0,
        "layers": {
          "concept": "Adrenal incidentaloma — resect if >4 cm or functioning; else observe",
          "discriminator": "Incidental adrenal mass >4 cm (or any functioning) → resection for malignancy risk",
          "trap": "Treatment ladder — adrenalectomy if >4 cm or functioning; observe if small/benign",
          "rule": "Adrenal incidentaloma: resect if >4 cm or functioning (malignancy risk); else observe"
        }
      },
      {
        "q": "A 45-year-old with a 3 cm aldosterone-producing adrenal adenoma and refractory hypertension is planned for surgery. What is the preferred approach?",
        "options": [
          "Open laparotomy routinely",
          "Partial nephrectomy",
          "Percutaneous ablation",
          "Laparoscopic adrenalectomy (after medical optimisation)"
        ],
        "answer": 3,
        "layers": {
          "concept": "Adrenalectomy — laparoscopic approach for Conn/pheo/Ca after optimisation",
          "discriminator": "Benign adrenal tumours (Conn, pheo, cortisol) → laparoscopic adrenalectomy (minimally invasive)",
          "trap": "Treatment ladder — laparoscopic adrenalectomy for Conn/pheo/cortisol tumours (optimise first)",
          "rule": "Adrenal tumour (Conn/pheo/cortisol): laparoscopic adrenalectomy; alpha-block first if phaeochromocytoma"
        }
      },
      {
        "q": "A patient develops clear rhinorrhoea and a headache 3 days after transsphenoidal pituitary surgery. What is the most likely complication?",
        "options": [
          "Normal post-operative oedema",
          "Meningitis without leak",
          "Recurrent tumour bleeding",
          "CSF leak from an unsealed sella/sphenoid sinus"
        ],
        "answer": 3,
        "layers": {
          "concept": "Transsphenoidal pituitary surgery — CSF leak (rhinorrhoea) is a key complication",
          "discriminator": "Clear rhinorrhoea after transsphenoidal surgery = CSF leak → bed rest/positioning, may need repair",
          "trap": "Severity under-recognition — clear rhinorrhoea post-TSS = CSF leak (meningitis risk)",
          "rule": "Transsphenoidal pituitary surgery: CSF leak → watery rhinorrhoea; bed-up, lumbar drain, repair if persistent"
        }
      },
      {
        "q": "A patient with clinical Cushing syndrome and a normal pituitary MRI is being evaluated before transsphenoidal surgery. Which test helps confirm the source is pituitary (Cushing disease) rather than ectopic ACTH?",
        "options": [
          "Bilateral inferior petrosal sinus sampling (BIPSS) showing central:peripheral ACTH gradient",
          "Low-dose dexamethasone suppression test",
          "24-hour urinary free cortisol",
          "Plasma metanephrines"
        ],
        "answer": 0,
        "layers": {
          "concept": "Cushing disease — BIPSS confirms pituitary source before transsphenoidal surgery",
          "discriminator": "Pituitary MRI normal in Cushing → BIPSS (central:peripheral ACTH gradient) confirms pituitary source",
          "trap": "Classification trap — BIPSS confirms pituitary (Cushing disease) vs ectopic ACTH before TSS",
          "rule": "Cushing disease: BIPSS (central:peripheral ACTH gradient) confirms pituitary source before transsphenoidal surgery"
        }
      },
      {
        "q": "Before parathyroidectomy for primary hyperparathyroidism, which pre-operative localisation study is most commonly used to identify the abnormal gland?",
        "options": [
          "Technetium-99m sestamibi scan (with ultrasound)",
          "CT chest",
          "PET scan",
          "MRI brain"
        ],
        "answer": 0,
        "layers": {
          "concept": "Primary HPT — sestamibi (+US) localises adenoma before parathyroidectomy",
          "discriminator": "Pre-parathyroidectomy localisation = sestamibi scan ± neck ultrasound to find the adenoma",
          "trap": "One-word discriminator — sestamibi (+US) localises parathyroid adenoma pre-op",
          "rule": "Primary HPT: sestamibi scan ± neck US localises the adenoma pre-operatively (guides MIP)"
        }
      },
      {
        "q": "A patient with Graves disease is prepared for thyroidectomy. In the days before surgery, Lugol's iodine solution is administered. What is its purpose?",
        "options": [
          "Ablate the thyroid with radioiodine",
          "Treat the eye disease",
          "Replace thyroid hormone",
          "Reduce thyroid vascularity and hormone release (easier, safer surgery)"
        ],
        "answer": 3,
        "layers": {
          "concept": "Pre-thyroidectomy iodine (Lugol) — reduces vascularity/hormone release",
          "discriminator": "Pre-op Lugol iodine in Graves → reduces gland vascularity and hormone leak at surgery",
          "trap": "Treatment misdirection — pre-op Lugol iodine = reduce vascularity (not RAI/thyroxine)",
          "rule": "Pre-op Lugol iodine in Graves: reduces thyroid vascularity/hormone release for safer thyroidectomy"
        }
      },
      {
        "q": "A patient develops hypocalcaemia with tingling and a positive Chvostek sign on postoperative day 1 after total thyroidectomy, which resolves with calcium. Another has permanent hypocalcaemia requiring lifetime supplements. What explains the difference?",
        "options": [
          "Different surgeons",
          "One had Graves, one had cancer",
          "Temporary hypocalcaemia from parathyroid stunning/ischaemia vs permanent from parathyroid excision",
          "Vitamin D deficiency only"
        ],
        "answer": 2,
        "layers": {
          "concept": "Post-thyroidectomy hypocalcaemia — transient (ischaemia/stunning) vs permanent (excised)",
          "discriminator": "Early transient hypoCa (recovers) = parathyroid ischaemia/stunning; permanent = gland excised/infarcted",
          "trap": "Opposite — transient (ischaemia/stunning, recovers) vs permanent (gland lost) hypocalcaemia",
          "rule": "Post-thyroidectomy hypoCa: transient (ischaemia/stunning) recovers; permanent = gland excised/infarcted"
        }
      },
      {
        "q": "What is the single most important preventive measure against thyroid storm in a patient undergoing thyroidectomy for hyperthyroidism?",
        "options": [
          "Prophylactic antibiotics",
          "Operating only when the patient is biochemically euthyroid",
          "High-dose steroids alone",
          "Immediate surgery regardless of thyroid state"
        ],
        "answer": 1,
        "layers": {
          "concept": "Thyroid storm — prevented by operating only in euthyroid state (storm prophylaxis)",
          "discriminator": "Thyroid storm prevention = euthyroid at surgery (ATD + beta-blocker + iodine prep)",
          "trap": "Severity under-recognition — operate only euthyroid to prevent thyroid storm",
          "rule": "Thyroid storm prevention: thyroidectomy only when euthyroid (ATD+beta-blocker+iodine prep); never uncontrolled"
        }
      },
      {
        "q": "During total parathyroidectomy for tertiary hyperparathyroidism, the surgeon implants parathyroid tissue into the forearm muscle. What is the purpose?",
        "options": [
          "Treat thyroid disease",
          "Mark the recurrent laryngeal nerve",
          "Preserve parathyroid function and allow future access if needed",
          "Prevent chyle leak"
        ],
        "answer": 2,
        "layers": {
          "concept": "Parathyroid autotransplantation — preserves function; forearm site allows re-exploration",
          "discriminator": "Autotransplant parathyroid into forearm = preserve function + accessible if graft hyperfunctions",
          "trap": "Treatment ladder — autotransplant parathyroid (forearm) to preserve function + easy access",
          "rule": "Parathyroid autotransplant (forearm): preserves function; superficial site allows re-exploration if recurrent"
        }
      },
      {
        "q": "A 65-year-old with a long-standing goitre develops exertional dyspnoea, orthopnoea, and cough, with a mediastinal mass on chest X-ray extending below the sternal notch. What is the diagnosis and indication?",
        "options": [
          "Thymoma",
          "Lymphoma",
          "Substernal (retrosternal) goitre — compressive; surgery indicated",
          "Simple cervical goitre — observe"
        ],
        "answer": 2,
        "layers": {
          "concept": "Substernal goitre — compressive mediastinal extension; surgery indicated",
          "discriminator": "Goitre extending retrosternally with compressive symptoms = substernal goitre → surgery",
          "trap": "Clinical Mimic — substernal goitre (compressive, below sternal notch) vs thymoma/lymphoma",
          "rule": "Substernal goitre: thyroid extending retrosternally with compressive symptoms → thyroidectomy"
        }
      },
      {
        "q": "A 70-year-old with a large non-toxic multinodular goitre has progressive dysphagia and tracheal deviation but is euthyroid. What is the most appropriate management?",
        "options": [
          "Total or subtotal thyroidectomy for compressive symptoms",
          "Radioiodine ablation",
          "Observation only",
          "Levothyroxine suppression long-term"
        ],
        "answer": 0,
        "layers": {
          "concept": "Non-toxic MNG — surgery for compressive symptoms (dysphagia/tracheal deviation)",
          "discriminator": "Non-toxic MNG with compressive symptoms (dysphagia/tracheal deviation) → thyroidectomy",
          "trap": "Treatment ladder — non-toxic MNG with compression → thyroidectomy (not just observe/RAI)",
          "rule": "Non-toxic MNG: operate for compressive symptoms (dysphagia/tracheal deviation); RAI for toxic; no long-term suppression"
        }
      },
      {
        "q": "A 50-year-old man has severe hypercalcaemia (Ca 17 mg/dL), a hard, fixed neck mass, and a very high PTH. Imaging shows local invasion. What is the diagnosis and surgery?",
        "options": [
          "Benign parathyroid adenoma — minimally invasive resection",
          "Parathyroid carcinoma — en bloc resection with ipsilateral thyroid lobe",
          "Medullary thyroid carcinoma",
          "Thyroid adenoma"
        ],
        "answer": 1,
        "layers": {
          "concept": "Parathyroid carcinoma — hard fixed invasive mass + very high Ca/PTH → en bloc resection",
          "discriminator": "Hard fixed invasive parathyroid mass + severe hyperCa/PTH = carcinoma → en bloc resection",
          "trap": "Clinical Mimic — parathyroid carcinoma (hard/fixed/invasive, very high Ca) vs benign adenoma",
          "rule": "Parathyroid carcinoma: hard fixed invasive mass + severe hyperCa/PTH → en bloc resection + ipsilateral lobe"
        }
      }
    ]
  },
  {
    "id": "gi-emergencies",
    "name": "GI Emergencies",
    "questions": [
      {
        "q": "A 42-year-old woman reports progressive difficulty swallowing both liquids and solids for 2 years, with regurgitation of undigested food and a 4 kg weight loss. Barium swallow shows a smooth tapered 'bird-beak' narrowing at the gastro-oesophageal junction. What is the most appropriate definitive management?",
        "options": [
          "Botulinum toxin injection",
          "Proton pump inhibitor trial",
          "Laparoscopic Heller myotomy",
          "Oesophagectomy"
        ],
        "answer": 2,
        "layers": {
          "concept": "Achalasia — definitive management (myotomy vs botox)",
          "discriminator": "Dysphagia to BOTH liquids and solids + bird-beak on barium = achalasia; definitive = pneumatic dilation or Heller myotomy",
          "trap": "Treatment ladder — botox as definitive when it is only temporary",
          "rule": "Achalasia = bird-beak + liquids>solids → pneumatic dilation or Heller myotomy (botox is temporary)"
        }
      },
      {
        "q": "A 60-year-old man who smokes and drinks alcohol reports progressive dysphagia — first to solids, now to liquids — with a 6 kg weight loss over 3 months. What is the most likely diagnosis?",
        "options": [
          "Achalasia",
          "Oesophageal carcinoma",
          "Peptic stricture",
          "Plummer-Vinson syndrome"
        ],
        "answer": 1,
        "layers": {
          "concept": "Oesophageal carcinoma — solids-then-liquids dysphagia",
          "discriminator": "Progressive dysphagia starting with SOLIDS then liquids + weight loss + smoking = mechanical obstruction = carcinoma",
          "trap": "Opposite — solids-then-liquids (carcinoma) vs liquids-then-solids (achalasia)",
          "rule": "Solids-then-liquids dysphagia + weight loss = carcinoma; liquids-from-start = achalasia"
        }
      },
      {
        "q": "A 55-year-old man with alcohol-related cirrhosis presents with haematemesis. Upper GI endoscopy reveals tortuous dilated veins in the distal oesophagus. What is the first-line therapeutic intervention?",
        "options": [
          "Sclerotherapy",
          "Endoscopic band ligation",
          "Octreotide infusion alone",
          "Transjugular intrahepatic portosystemic shunt (TIPS)"
        ],
        "answer": 1,
        "layers": {
          "concept": "Oesophageal varices — first-line treatment of acute haemorrhage",
          "discriminator": "Cirrhosis + haematemesis + distal oesophageal varices → endoscopic band ligation is first-line",
          "trap": "Treatment misdirection — sclerotherapy/octreotide over banding",
          "rule": "Acute variceal bleed → endoscopic band ligation first-line; TIPS is rescue"
        }
      },
      {
        "q": "A 38-year-old man presents after several episodes of forceful vomiting following a binge, followed by small-volume bright-red haematemesis. He is haemodynamically stable. What is the most likely diagnosis?",
        "options": [
          "Boerhaave syndrome",
          "Oesophageal varices",
          "Peptic ulcer disease",
          "Mallory-Weiss tear"
        ],
        "answer": 3,
        "layers": {
          "concept": "Mallory-Weiss tear — mucosal tear after retching",
          "discriminator": "Haematemesis AFTER repeated forceful vomiting, in a stable patient = Mallory-Weiss mucosal tear",
          "trap": "Clinical Mimic — Mallory-Weiss (mucosal) vs Boerhaave (transmural)",
          "rule": "Post-vomiting haematemesis (stable) = Mallory-Weiss; full-thickness rupture with emphysema = Boerhaave"
        }
      },
      {
        "q": "A 45-year-old man develops sudden severe lower chest pain and shortness of breath immediately after a bout of violent vomiting. On examination he is febrile with subcutaneous emphysema felt in the neck. What is the most appropriate next step?",
        "options": [
          "Barium swallow",
          "Electrocardiogram and troponins",
          "Water-soluble contrast oesophagogram",
          "Plain chest X-ray and reassurance"
        ],
        "answer": 2,
        "layers": {
          "concept": "Boerhaave syndrome — diagnosis with water-soluble contrast",
          "discriminator": "Violent vomiting + chest pain + subcutaneous emphysema = oesophageal rupture → water-soluble (Gastrografin) contrast, NOT barium",
          "trap": "Investigation hierarchy — barium (contraindicated) vs water-soluble contrast",
          "rule": "Boerhaave = post-emetic transmural rupture → water-soluble contrast (barium contraindicated)"
        }
      },
      {
        "q": "A 50-year-old man with a long history of NSAID use presents with sudden severe epigastric pain. His abdomen is rigid and board-like, and an erect chest X-ray shows free gas under the diaphragm. What is the most appropriate definitive management?",
        "options": [
          "Exploratory laparotomy with repair",
          "High-dose IV proton pump inhibitor",
          "Urgent upper GI endoscopy",
          "Nasogastric decompression and observation"
        ],
        "answer": 0,
        "layers": {
          "concept": "Perforated peptic ulcer — definitive surgical management",
          "discriminator": "Sudden pain + board-like rigidity + free air under diaphragm = perforation → laparotomy (NEVER endoscopy or PPI alone)",
          "trap": "Partial Truth — PPI correct for PUD but not definitive for perforation",
          "rule": "Pneumoperitoneum + peritonitis → resuscitate then laparotomy (barium/endoscopy contraindicated)"
        }
      },
      {
        "q": "A 40-year-old man reports recurrent epigastric pain that is relieved by eating but wakes him at night. Endoscopy shows a duodenal ulcer. Which pain pattern best characterises his condition?",
        "options": [
          "Pain relieved by food",
          "Pain worsened by food",
          "Retrosternal burning after meals",
          "Right upper quadrant pain after fatty meals"
        ],
        "answer": 0,
        "layers": {
          "concept": "Duodenal ulcer pain — relieved by food, nocturnal",
          "discriminator": "Duodenal ulcer pain is relieved by food and recurs at night; gastric ulcer pain is worsened by food",
          "trap": "Opposite — duodenal (relieved by food) vs gastric (worsened by food)",
          "rule": "Duodenal ulcer pain relieved by food; gastric ulcer pain worsened by food"
        }
      },
      {
        "q": "A 60-year-old man presents with melaena and is haemodynamically stable after initial fluid resuscitation. What is the single most appropriate next step?",
        "options": [
          "Barium meal",
          "Urgent upper GI endoscopy",
          "CT angiography",
          "Observation with serial haemoglobin"
        ],
        "answer": 1,
        "layers": {
          "concept": "Upper GI bleed — endoscopy is diagnostic AND therapeutic",
          "discriminator": "Stable upper GI bleed after resuscitation → early endoscopy (diagnostic + therapeutic), always first",
          "trap": "Priority inversion — imaging before endoscopy",
          "rule": "Endoscopy is both diagnostic and therapeutic in UGIB — always first"
        }
      },
      {
        "q": "A 70-year-old woman presents with right upper quadrant pain, fever with rigors, and jaundice. What is the most appropriate initial management?",
        "options": [
          "Elective laparoscopic cholecystectomy",
          "IV fluids and observation",
          "IV antibiotics and urgent biliary drainage (ERCP)",
          "Percutaneous liver biopsy"
        ],
        "answer": 2,
        "layers": {
          "concept": "Ascending cholangitis — Charcot triad → antibiotics + urgent ERCP",
          "discriminator": "RUQ pain + fever + jaundice = Charcot triad = ascending cholangitis → antibiotics + urgent biliary decompression (ERCP)",
          "trap": "Clinical Mimic — Charcot triad vs Murphy's sign (cholecystitis)",
          "rule": "Charcot triad = ascending cholangitis → antibiotics + urgent ERCP (add hypotension/AMS = Reynolds pentad)"
        }
      },
      {
        "q": "A 68-year-old diabetic man presents with fever, right upper quadrant pain, and vomiting. CT shows gas within the gallbladder wall. What is the most appropriate management?",
        "options": [
          "Outpatient oral antibiotics",
          "Elective cholecystectomy in 6 weeks",
          "Analgesia and observation",
          "Urgent cholecystectomy with broad-spectrum antibiotics"
        ],
        "answer": 3,
        "layers": {
          "concept": "Emphysematous cholecystitis — gas in GB wall in a diabetic → urgent surgery",
          "discriminator": "Diabetic + gas within gallbladder wall = emphysematous cholecystitis → urgent cholecystectomy",
          "trap": "Severity under-recognition — downgrading a necrotising infection in a diabetic",
          "rule": "Gas in GB wall (diabetic) = emphysematous cholecystitis → urgent cholecystectomy"
        }
      },
      {
        "q": "A 74-year-old woman presents with colicky abdominal pain, vomiting, and constipation. Abdominal X-ray shows small-bowel obstruction, air in the biliary tree (pneumobilia), and a calcified opacity in the right iliac fossa. What is the most likely diagnosis?",
        "options": [
          "Adhesive small-bowel obstruction",
          "Gallstone ileus",
          "Sigmoid volvulus",
          "Caecal carcinoma"
        ],
        "answer": 1,
        "layers": {
          "concept": "Gallstone ileus — Rigler's triad",
          "discriminator": "SBO + pneumobilia + ectopic calcified gallstone (Rigler's triad) = gallstone ileus",
          "trap": "Pattern recognition — Rigler's triad overlooked as simple adhesions",
          "rule": "Rigler's triad (SBO + pneumobilia + ectopic gallstone) = gallstone ileus"
        }
      },
      {
        "q": "A 6-year-old boy presents with painless passage of dark red blood per rectum and iron-deficiency anaemia. Which of the following is the most likely cause?",
        "options": [
          "Intussusception",
          "Juvenile polyp",
          "Meckel's diverticulum",
          "Ulcerative colitis"
        ],
        "answer": 2,
        "layers": {
          "concept": "Meckel's diverticulum — rule of 2s, painless PR bleed in a child",
          "discriminator": "Painless PR bleeding in a young child = Meckel's (rule of 2s: 2% population, 2 feet from ileocaecal valve, 2 inches, anti-mesenteric)",
          "trap": "Clinical Mimic — Meckel's (painless) vs intussusception (painful, currant-jelly)",
          "rule": "Meckel's = painless PR bleed in a child, anti-mesenteric, rule of 2s"
        }
      },
      {
        "q": "A 72-year-old man with atrial fibrillation presents with sudden severe diffuse abdominal pain that is out of proportion to his near-normal examination. He has a lactate of 5 mmol/L. What is the most likely diagnosis?",
        "options": [
          "Acute mesenteric ischaemia",
          "Acute pancreatitis",
          "Perforated peptic ulcer",
          "Renal colic"
        ],
        "answer": 0,
        "layers": {
          "concept": "Acute mesenteric ischaemia — AF + pain out of proportion",
          "discriminator": "AF + severe pain out of proportion to exam + raised lactate = acute mesenteric ischaemia (SMA embolism)",
          "trap": "Severity under-recognition — 'pain out of proportion' is the giveaway",
          "rule": "Pain out of proportion + AF + lactic acidosis = acute mesenteric ischaemia"
        }
      },
      {
        "q": "A 9-month-old boy has episodes of sudden crying, drawing up his legs, and passage of red 'currant jelly' stool. A sausage-shaped mass is palpable in the right upper quadrant. What is the most appropriate first-line management?",
        "options": [
          "Immediate laparotomy",
          "Intravenous antibiotics",
          "Air or contrast enema reduction",
          "Observation and oral rehydration"
        ],
        "answer": 2,
        "layers": {
          "concept": "Intussusception — air enema reduction in a stable infant",
          "discriminator": "Infant + colicky pain + currant-jelly stool + sausage mass = intussusception → air enema reduction (if stable, no peritonitis)",
          "trap": "Age-appropriate differential — adult appendicitis reflex in an infant",
          "rule": "Intussusception (stable) → air/contrast enema reduction; laparotomy if peritonitis/perforation"
        }
      },
      {
        "q": "A 70-year-old woman presents with vomiting, abdominal distension, and a tender irreducible lump in the right groin below and lateral to the pubic tubercle. The overlying skin is warm and red. What is the most appropriate management?",
        "options": [
          "Attempt manual reduction in clinic",
          "Elective hernia repair in 2 weeks",
          "Antibiotics and observation",
          "Urgent surgical exploration"
        ],
        "answer": 3,
        "layers": {
          "concept": "Strangulated femoral hernia — urgent surgery",
          "discriminator": "Irreducible tender groin lump + obstruction + erythema = strangulated femoral hernia → urgent surgery",
          "trap": "Severity under-recognition — treating strangulation as a reducible hernia",
          "rule": "Femoral hernia = below/lateral to pubic tubercle; irreducible + tender + obstruction = strangulated → urgent surgery"
        }
      },
      {
        "q": "A 75-year-old man presents with painless, large-volume bright red bleeding per rectum. He is otherwise well and haemodynamically stable. What is the most likely diagnosis?",
        "options": [
          "Diverticulitis",
          "Colorectal carcinoma",
          "Diverticulosis",
          "Internal haemorrhoids"
        ],
        "answer": 2,
        "layers": {
          "concept": "Diverticulosis — painless bleeding in the elderly",
          "discriminator": "Painless large-volume PR bleed in an elderly patient = diverticulosis (no fever, no LIF pain)",
          "trap": "Clinical Mimic — diverticulosis (painless bleed) vs diverticulitis (inflamed)",
          "rule": "Diverticulosis = painless bleeding; diverticulitis = fever + LIF pain"
        }
      },
      {
        "q": "A 60-year-old woman presents with fever, left lower quadrant pain, and leukocytosis. Diverticulitis is suspected. What is the most appropriate imaging to confirm the diagnosis?",
        "options": [
          "CT abdomen with IV contrast",
          "Barium enema",
          "Colonoscopy",
          "Abdominal ultrasound"
        ],
        "answer": 0,
        "layers": {
          "concept": "Acute diverticulitis — CT diagnosis (barium/colonoscopy contraindicated)",
          "discriminator": "Fever + LIF pain → diverticulitis → CT (barium enema and colonoscopy contraindicated in acute phase)",
          "trap": "\"What NOT to do\" — barium enema in acute diverticulitis",
          "rule": "Acute diverticulitis → CT; barium enema and colonoscopy are contraindicated acutely"
        }
      },
      {
        "q": "A 68-year-old woman with hypertension presents with sudden crampy left-sided abdominal pain followed by bloody diarrhoea. She has no history of atrial fibrillation. CT shows segmental colonic wall thickening at the splenic flexure. What is the most likely diagnosis?",
        "options": [
          "Acute mesenteric ischaemia",
          "Ulcerative colitis",
          "Infectious colitis",
          "Ischaemic colitis"
        ],
        "answer": 3,
        "layers": {
          "concept": "Ischaemic colitis — watershed splenic flexure, non-occlusive",
          "discriminator": "Elderly + sudden LIF pain + bloody diarrhoea + splenic flexure (watershed) thickening = ischaemic colitis",
          "trap": "Clinical Mimic — ischaemic colitis vs acute mesenteric ischaemia",
          "rule": "Ischaemic colitis = watershed splenic flexure, pain then bloody diarrhoea, usually self-limited"
        }
      },
      {
        "q": "A 78-year-old nursing-home resident presents with gross abdominal distension, constipation, and vomiting. Abdominal X-ray shows a massively dilated loop of colon with a 'coffee bean' appearance. What is the most appropriate initial management?",
        "options": [
          "Endoscopic (sigmoidoscopic) detorsion",
          "Immediate laparotomy",
          "Barium enema",
          "Intravenous antibiotics and observation"
        ],
        "answer": 0,
        "layers": {
          "concept": "Sigmoid volvulus — coffee-bean sign → endoscopic detorsion",
          "discriminator": "Elderly + massive distension + coffee-bean sign = sigmoid volvulus → endoscopic detorsion first (if no peritonitis)",
          "trap": "Investigation hierarchy — sigmoidoscopy (therapeutic) vs barium",
          "rule": "Coffee-bean sign = sigmoid volvulus → endoscopic detorsion first (laparotomy if gangrene/peritonitis)"
        }
      },
      {
        "q": "A 30-year-old woman reports severe tearing pain during defecation with a few drops of bright red blood on the toilet paper. She is otherwise well. What is the most likely diagnosis?",
        "options": [
          "Internal haemorrhoids",
          "Anal fistula",
          "Colorectal carcinoma",
          "Anal fissure"
        ],
        "answer": 3,
        "layers": {
          "concept": "Anal fissure — tearing pain + fresh blood on wiping",
          "discriminator": "Tearing pain on defecation + fresh blood on paper = anal fissure (haemorrhoids are painless)",
          "trap": "Clinical Mimic — anal fissure (painful) vs haemorrhoids (painless)",
          "rule": "Anal fissure = tearing pain + fresh bleeding; haemorrhoids = painless bleeding"
        }
      },
      {
        "q": "A 45-year-old man presents with painless bright red bleeding per rectum and a lump that prolapses on defecation but reduces spontaneously. What is the diagnosis?",
        "options": [
          "External haemorrhoids",
          "Second-degree internal haemorrhoids",
          "Third-degree internal haemorrhoids",
          "Anal fissure"
        ],
        "answer": 1,
        "layers": {
          "concept": "Haemorrhoids — grading of internal haemorrhoids",
          "discriminator": "Painless bleeding + prolapse that reduces spontaneously = second-degree internal haemorrhoids",
          "trap": "Opposite — internal (painless) vs external (painful) haemorrhoids",
          "rule": "Internal haemorrhoids = painless (above dentate line); external = painful when thrombosed"
        }
      },
      {
        "q": "A 35-year-old man presents with a tender, fluctuant swelling beside the anus, with fever. What is the most appropriate management?",
        "options": [
          "Oral antibiotics alone",
          "Incision and drainage",
          "Topical antibiotics",
          "Observation with warm compresses"
        ],
        "answer": 1,
        "layers": {
          "concept": "Perianal abscess — incision and drainage",
          "discriminator": "Fluctuant perianal swelling + fever = abscess → incision and drainage (antibiotics alone fail)",
          "trap": "Treatment misdirection — antibiotics instead of drainage",
          "rule": "Perianal abscess → incision and drainage; recurrent abscess → look for fistula"
        }
      },
      {
        "q": "A 72-year-old woman with aortic stenosis presents with recurrent episodes of intermittent, painless bright red bleeding per rectum and iron-deficiency anaemia. Colonoscopy is normal. What is the most likely diagnosis?",
        "options": [
          "Angiodysplasia",
          "Diverticulosis",
          "Colorectal carcinoma",
          "Haemorrhoids"
        ],
        "answer": 0,
        "layers": {
          "concept": "Angiodysplasia — right-colon vascular ectasia (Heyde syndrome)",
          "discriminator": "Elderly + aortic stenosis + recurrent painless bleed + normal colonoscopy = angiodysplasia (often right colon)",
          "trap": "Clinical Mimic — angiodysplasia (right colon, subtle) vs diverticulosis (left, brisk)",
          "rule": "Angiodysplasia = right colon, intermittent painless bleed, linked to aortic stenosis (Heyde)"
        }
      },
      {
        "q": "A 65-year-old woman develops profuse watery diarrhoea 7 days after completing a course of clindamycin. Sigmoidoscopy shows yellow-white adherent plaques. What is the most appropriate treatment?",
        "options": [
          "Oral vancomycin",
          "Intravenous ceftriaxone",
          "Loperamide",
          "Oral amoxicillin-clavulanate"
        ],
        "answer": 0,
        "layers": {
          "concept": "Pseudomembranous colitis — C. difficile → oral vancomycin",
          "discriminator": "Post-antibiotic watery diarrhoea + pseudomembranes = C. difficile → oral vancomycin (or fidaxomicin)",
          "trap": "Guideline Version — metronidazole reflex when vancomycin is now first-line",
          "rule": "C. difficile colitis → stop offending antibiotic + oral vancomycin/fidaxomicin (avoid loperamide)"
        }
      },
      {
        "q": "A 28-year-old man with known ulcerative colitis presents with fever, tachycardia, abdominal distension, and dilated colon (>6 cm) on abdominal X-ray. What is the most appropriate initial management?",
        "options": [
          "Oral loperamide",
          "Oral mesalazine and discharge",
          "Barium enema",
          "IV fluids, IV corticosteroids, and surgical review"
        ],
        "answer": 3,
        "layers": {
          "concept": "Toxic megacolon — complication of UC",
          "discriminator": "UC + fever + tachycardia + colonic dilatation >6 cm = toxic megacolon → IV steroids + resuscitation + surgical review",
          "trap": "Severity under-recognition — 'just diarrhoea' downgrade in a UC patient",
          "rule": "Toxic megacolon (UC) → resuscitate + IV steroids + early colectomy if no response"
        }
      }
    ]
  },
  {
    "id": "haematology",
    "name": "Haematology",
    "questions": [
      {
        "q": "A 45-year-old with fatigue and jaundice has laboratory evidence of haemolysis and a positive direct Coombs (antiglobulin) test. This immune haemolytic anaemia is best classified under which type of hypersensitivity reaction?",
        "options": [
          "Type II (antibody/cytotoxic)",
          "Type I (anaphylactic)",
          "Type III (immune complex)",
          "Type IV (delayed cell-mediated)"
        ],
        "answer": 0,
        "layers": {
          "concept": "Autoimmune haemolytic anaemia - Type II hypersensitivity (Coombs positive)",
          "discriminator": "Positive Coombs test + haemolysis = antibody against self RBCs = Type II cytotoxic hypersensitivity",
          "trap": "Assigning AIHA to immune complex (III) or cell-mediated (IV) hypersensitivity",
          "rule": "AIHA (positive Coombs) is a Type II antibody-mediated hypersensitivity with extravascular haemolysis."
        }
      },
      {
        "q": "Which of the following findings indicates that haemolysis is the cause of a neonate's hyperbilirubinaemia?",
        "options": [
          "Low reticulocyte count",
          "Increased unconjugated (indirect) bilirubin",
          "Negative direct Coombs test",
          "Increased conjugated (direct) bilirubin"
        ],
        "answer": 1,
        "layers": {
          "concept": "Neonatal hyperbilirubinaemia - haemolysis gives unconjugated (indirect) rise",
          "discriminator": "Haemolysis (e.g. Rh/ABO) raises unconjugated bilirubin (pre-hepatic); a high reticulocyte count would support it",
          "trap": "Choosing conjugated bilirubin or low reticulocytes - haemolysis is unconjugated with reticulocytosis",
          "rule": "Haemolytic jaundice raises unconjugated (indirect) bilirubin with reticulocytosis; conjugated hyperbilirubinaemia is hepatic/cholestatic."
        }
      },
      {
        "q": "A patient with thrombotic thrombocytopenic purpura (TTP) has microangiopathic haemolytic anaemia, thrombocytopenia and neurological features. What is the most common cause of death in TTP?",
        "options": [
          "Intracranial haemorrhage",
          "Myocardial infarction",
          "Pulmonary embolism",
          "Hepatic failure"
        ],
        "answer": 0,
        "layers": {
          "concept": "TTP - most common cause of death is intracranial haemorrhage",
          "discriminator": "TTP: intracranial haemorrhage is the most common cause of death (thrombocytopenia + microangiopathy)",
          "trap": "Attributing TTP death to cardiac emboli - intracranial bleed is the leading cause",
          "rule": "TTP (MAHA, thrombocytopenia, neuro/renal signs): intracranial haemorrhage is the main cause of death; plasma exchange is definitive."
        }
      },
      {
        "q": "A 26-year-old with transfusion-dependent beta-thalassaemia major develops leg oedema and exertional dyspnoea despite regular transfusions. Which is the most likely culpable process?",
        "options": [
          "Chronic renal failure",
          "Dilated cardiomyopathy from transfusional iron overload",
          "Liver cirrhosis alone",
          "Pulmonary embolism"
        ],
        "answer": 1,
        "layers": {
          "concept": "Thalassaemia major - iron overload cardiomyopathy from repeated transfusions",
          "discriminator": "Transfused thalassaemia major + oedema/dyspnoea = iron-overload dilated cardiomyopathy (ferritin/LIC)",
          "trap": "Blaming renal or hepatic causes - cardiac iron overload is the classic lethal complication",
          "rule": "Transfusion iron overload in thalassaemia causes dilated cardiomyopathy (HF); use iron chelation to prevent organ damage."
        }
      },
      {
        "q": "A 60-year-old with a urinary tract infection develops fever (40 C), cold peripheries, tachycardia and confusion. WBC is 2100/mm3 and PT/INR is prolonged. What is the most likely diagnosis?",
        "options": [
          "Uncomplicated UTI",
          "Septic shock with disseminated intravascular coagulation (DIC)",
          "Cardiogenic shock",
          "Massive pulmonary embolism"
        ],
        "answer": 1,
        "layers": {
          "concept": "Septic shock + DIC - fever, leucopenia, coagulopathy",
          "discriminator": "Source of sepsis + hypotension/confusion + low WBC + prolonged PT = septic shock with DIC",
          "trap": "Reading the prolonged PT/INR as an isolated liver problem or missing DIC in sepsis",
          "rule": "DIC complicates sepsis: prolonged PT/aPTT, thrombocytopenia, low fibrinogen, high D-dimer; treat the underlying sepsis."
        }
      },
      {
        "q": "A 9-month-old breastfed-and-goat's-milk-fed infant has progressive pallor. Hb 6 g/dL, MCV 106 fL, MCHC 39. Which dietary deficiency is most likely?",
        "options": [
          "Iron",
          "Folic acid",
          "Vitamin B12",
          "Vitamin C"
        ],
        "answer": 1,
        "layers": {
          "concept": "Folate deficiency - goat's milk (low folate) causes macrocytic anaemia in infants",
          "discriminator": "Goat's milk is low in folate; macrocytic anaemia (MCV 106) in an infant = folate deficiency",
          "trap": "Choosing B12 or iron - goat's milk causes folate deficiency and MCV is high (macrocytic)",
          "rule": "Goat's milk is folate-poor; an exclusively goat's-milk-fed infant gets megaloblastic (folate-deficiency) anaemia - macrocytic."
        }
      },
      {
        "q": "A 14-year-old girl has Hb 9 g/dL, MCV 70 fL, serum ferritin 8 ng/mL and TIBC 450 ug/dL. What is the most likely diagnosis?",
        "options": [
          "Iron deficiency anaemia",
          "Thalassaemia minor",
          "Sickle cell anaemia",
          "Vitamin B12 deficiency"
        ],
        "answer": 0,
        "layers": {
          "concept": "Iron deficiency anaemia - microcytic, low ferritin, high TIBC",
          "discriminator": "Microcytic (MCV 70) + low ferritin + high TIBC = iron deficiency (ferritin is diagnostic if low)",
          "trap": "Choosing thalassaemia minor - ferritin 8 (low) and high TIBC confirm iron deficiency, not thalassaemia",
          "rule": "Iron deficiency: microcytic, low ferritin, low iron, high TIBC. Ferritin is the discriminator vs thalassaemia minor."
        }
      },
      {
        "q": "A 61-year-old woman has low-grade fever, anaemia, abdominal pain, gum hyperplasia, and circulating blasts with Auer rods; myeloperoxidase (MPO) is positive and WBC is 42,000. Most probable diagnosis?",
        "options": [
          "Chronic lymphocytic leukaemia",
          "Acute lymphoblastic leukaemia",
          "Chronic myeloid leukaemia",
          "Acute myeloid leukaemia"
        ],
        "answer": 3,
        "layers": {
          "concept": "Acute myeloid leukaemia - Auer rods + MPO positive + gum infiltration",
          "discriminator": "Blasts + Auer rods + MPO positive = AML; gum hyperplasia is classic for monocytic AML",
          "trap": "Choosing CLL/ALL - Auer rods + MPO positivity are specific for myeloid (AML)",
          "rule": "AML: myeloblasts with Auer rods, MPO positive, gum/skin infiltration, older adults; M4/M5 monocytic. Distinct from ALL and CML."
        }
      },
      {
        "q": "A 45-year-old woman receiving chemo-radiotherapy for breast cancer presents with fatigue. FBC shows Hb 10 g/dL with low serum iron but normal/high ferritin. Which is the most likely cause of her anaemia?",
        "options": [
          "Iron deficiency anaemia",
          "Anaemia of chronic disease",
          "Vitamin B12 deficiency",
          "Haemolytic anaemia"
        ],
        "answer": 1,
        "layers": {
          "concept": "Anaemia of chronic disease - low iron but normal/high ferritin (functional block)",
          "discriminator": "Chronic illness + low serum iron + normal/high ferritin = anaemia of chronic disease (hepcidin blocks iron release)",
          "trap": "Calling it iron deficiency - the normal/high ferritin with chronic illness favours ACD",
          "rule": "ACD: low iron, normal/high ferritin (hepcidin blocks store release), normocytic, in inflammation/malignancy. Ferritin distinguishes from iron deficiency."
        }
      },
      {
        "q": "A patient on warfarin (INR 9) presents with a nosebleed. In addition to withholding the warfarin, which is the most appropriate immediate treatment?",
        "options": [
          "Vitamin K",
          "Protamine sulphate",
          "Desmopressin",
          "Platelet transfusion"
        ],
        "answer": 0,
        "layers": {
          "concept": "Warfarin overdose - vitamin K antidote",
          "discriminator": "Warfarin (vitamin K antagonist) reversal = vitamin K; protamine reverses heparin",
          "trap": "Using protamine (which reverses heparin, not warfarin)",
          "rule": "Warfarin (vitamin K antagonist) is reversed with vitamin K (PCC if life-threatening); protamine reverses heparin."
        }
      },
      {
        "q": "A 60-year-old vegetarian has progressive fatigue, glossitis and peripheral paraesthesia with an unsteady gait. FBC shows macrocytosis (MCV 115 fL) and hypersegmented neutrophils. What is the most likely diagnosis?",
        "options": [
          "Iron deficiency anaemia",
          "Vitamin B12 deficiency (megaloblastic)",
          "Thalassaemia minor",
          "Anaemia of chronic disease"
        ],
        "answer": 1,
        "layers": {
          "concept": "B12 deficiency - macrocytic + glossitis + neuropathy (subacute combined degeneration)",
          "discriminator": "Macrocytosis + glossitis + peripheral neuropathy/gait = B12 deficiency (also causes neurological signs)",
          "trap": "Choosing iron (microcytic) - macrocytosis with neuropathy clearly indicates B12, not iron",
          "rule": "B12 deficiency: macrocytic (MCV high), hypersegmented neutrophils, glossitis, neuropathy/SCD; treat with B12 - folate alone would not correct neurology."
        }
      },
      {
        "q": "A 55-year-old has fatigue, weight loss, massive splenomegaly and a very high WBC with a left shift, basophilia and thrombocytosis. Peripheral blood cytogenetics show the Philadelphia chromosome. Which is the most likely diagnosis?",
        "options": [
          "Acute myeloid leukaemia",
          "Chronic myeloid leukaemia",
          "Chronic lymphocytic leukaemia",
          "Myelofibrosis"
        ],
        "answer": 1,
        "layers": {
          "concept": "Chronic myeloid leukaemia - Philadelphia chromosome (t9;22 BCR-ABL), massive splenomegaly",
          "discriminator": "High WBC + left shift + basophilia + splenomegaly + Philadelphia chromosome = CML (BCR-ABL)",
          "trap": "Confusing CML (chronic, Ph+, splenomegaly) with AML (acute blasts) or CLL (mature lymphocytosis)",
          "rule": "CML: t(9;22) BCR-ABL (Philadelphia), leucocytosis with basophilia, splenomegaly; treat with TKI (imatinib)."
        }
      },
      {
        "q": "A 20-year-old has lifelong mild jaundice, gallstones, splenomegaly and a spherocytosis on the blood film with raised MCHC. Which is the most likely diagnosis and definitive management?",
        "options": [
          "Iron deficiency; iron replacement",
          "Hereditary spherocytosis; splenectomy if severe",
          "G6PD deficiency; avoid triggers",
          "Sickle cell disease; hydroxyurea"
        ],
        "answer": 1,
        "layers": {
          "concept": "Hereditary spherocytosis - spherocytes, splenomegaly, gallstones; splenectomy if severe",
          "discriminator": "Spherocytes + splenomegaly + gallstones + raised MCHC = hereditary spherocytosis; splenectomy for severe disease",
          "trap": "Confusing spherocytosis (membrane, Coombs negative) with AIHA (Coombs positive) or G6PD (trigger-related)",
          "rule": "Hereditary spherocytosis: spherocytes, splenomegaly, gallstones, raised MCHC, negative Coombs; splenectomy for severe disease."
        }
      },
      {
        "q": "A 12-year-old with sickle cell disease has severe pain in the hands and back, fever 38 C and no localizing chest/abdominal signs. What is the most appropriate initial management of a vaso-occlusive crisis?",
        "options": [
          "Analgesia (paracetamol/NSAIDs/opioids), hydration, oxygen if hypoxic, and detect/prevent complications",
          "Blood transfusion for all crises",
          "Prophylactic antibiotics only",
          "Immediate splenectomy"
        ],
        "answer": 0,
        "layers": {
          "concept": "Sickle cell vaso-occlusive crisis - analgesia, hydration, oxygen",
          "discriminator": "Painful crisis in sickle cell = analgesia, hydration, oxygen; transfusion only for specific complications (e.g. stroke, chest syndrome)",
          "trap": "Transfusing all crises - reserved for complications (chest syndrome, stroke, splenic sequestration)",
          "rule": "Vaso-occlusive crisis: analgesia, hydration, oxygen, treat infection/trigger. Transfuse only for complications (acute chest syndrome, stroke, sequestration)."
        }
      },
      {
        "q": "A young adult has pancytopenia (anaemia, leucopenia, thrombocytopenia) with a hypocellular bone marrow on trephine biopsy and no evidence of infiltration or fibrosis. What is the most likely diagnosis?",
        "options": [
          "Aplastic anaemia",
          "Acute myeloid leukaemia",
          "Multiple myeloma",
          "Iron deficiency anaemia"
        ],
        "answer": 0,
        "layers": {
          "concept": "Aplastic anaemia - pancytopenia + hypocellular marrow",
          "discriminator": "Pancytopenia with a HYPOCELLULAR marrow (no blasts/fibrosis) = aplastic anaemia",
          "trap": "Choosing AML (which would show blasts) - the hypocellular empty marrow without blasts is aplastic anaemia",
          "rule": "Aplastic anaemia: pancytopenia, hypocellular marrow without blasts/fibrosis; immunosuppression or transplant."
        }
      },
      {
        "q": "A boy develops acute jaundice and dark urine a day after taking an antimalarial and eating fava beans, with a normal blood film except for bite cells and Heinz bodies. Which is the most likely diagnosis?",
        "options": [
          "Glucose-6-phosphate dehydrogenase (G6PD) deficiency",
          "Hereditary spherocytosis",
          "Autoimmune haemolytic anaemia",
          "Thalassaemia major"
        ],
        "answer": 0,
        "layers": {
          "concept": "G6PD deficiency - X-linked, oxidative haemolysis after fava/primaquine, Heinz bodies",
          "discriminator": "Triggers (fava beans, oxidant drugs) + acute haemolysis + Heinz bodies = G6PD deficiency (X-linked)",
          "trap": "Confusing G6PD (trigger-related X-linked) with spherocytosis (membrane) or AIHA (Coombs positive)",
          "rule": "G6PD deficiency: X-linked, acute oxidative haemolysis with fava/oxidant drugs, Heinz bodies; avoid triggers, supportive care."
        }
      },
      {
        "q": "A boy has recurrent bleeding into his knees/elbows and easy bruising since early childhood, and his maternal uncle has a similar bleeding disorder. Which factor deficiency is most likely and how is it inherited?",
        "options": [
          "Factor VIII deficiency; X-linked recessive",
          "Factor IX deficiency; autosomal dominant",
          "von Willebrand factor deficiency; autosomal recessive",
          "Vitamin K-dependent factors; autosomal recessive"
        ],
        "answer": 0,
        "layers": {
          "concept": "Haemophilia A - factor VIII deficiency, X-linked recessive, joint bleeds",
          "discriminator": "Recurrent haemarthroses + maternal lineage = haemophilia A (factor VIII, X-linked recessive)",
          "trap": "Choosing factor IX (haemophilia B) or VWD - factor VIII with X-linked pattern is haemophilia A",
          "rule": "Haemophilia A: X-linked factor VIII deficiency, haemarthroses; replace factor VIII. Haemophilia B = factor IX."
        }
      },
      {
        "q": "A 30-year-old previously well person develops petechiae and bruising and has an isolated severe thrombocytopenia (platelets 15,000) with an otherwise normal FBC and blood film. No lymphadenopathy or splenomegaly. What is the most likely diagnosis and first-line treatment?",
        "options": [
          "Immune thrombocytopenia (ITP); corticosteroids are first line",
          "TTP; plasma exchange",
          "Acute leukaemia; chemotherapy",
          "Vitamin K deficiency; vitamin K"
        ],
        "answer": 0,
        "layers": {
          "concept": "Immune thrombocytopenia - isolated thrombocytopenia; first-line steroids",
          "discriminator": "Isolated severe thrombocytopenia, normal film, no splenomegaly = ITP; first-line corticosteroids",
          "trap": "Choosing TTP or leukaemia - isolated thrombocytopenia without anaemia, schistocytes or blasts favours ITP",
          "rule": "ITP: isolated thrombocytopenia, normal film, no splenomegaly; first-line corticosteroids (IVIg if severe)."
        }
      },
      {
        "q": "A 60-year-old has headache, pruritus after a hot shower, ruddy complexion and an elevated haemoglobin (Hct 60%) with normal oxygen saturation. Which is the most likely diagnosis and genetic marker?",
        "options": [
          "Secondary polycythaemia; low EPO",
          "Polycythaemia vera; JAK2 V617F mutation",
          "Chronic hypoxia; high EPO with lung disease",
          "Iron deficiency; low MCV"
        ],
        "answer": 1,
        "layers": {
          "concept": "Polycythaemia vera - JAK2V617F, aquagenic pruritus, high Hct with normal SpO2",
          "discriminator": "Erythrocytosis + aquagenic pruritus + normal SpO2 = polycythaemia vera (JAK2 mutation)",
          "trap": "Confusing PV (primary, JAK2, normal SpO2) with secondary polycythaemia (low SpO2/high EPO)",
          "rule": "PV: high Hct with normal SpO2, aquagenic pruritus, JAK2 V617F; venesection + aspirin (+ cytoreduction)."
        }
      },
      {
        "q": "A 70-year-old incidentally has a markedly raised lymphocyte count (WBC 95,000) with a mature lymphocytosis and smudge cells on the film, mild lymphadenopathy, and no anaemia or thrombocytopenia. Most likely diagnosis?",
        "options": [
          "Chronic lymphocytic leukaemia",
          "Acute lymphoblastic leukaemia",
          "Hairy cell leukaemia",
          "Follicular lymphoma"
        ],
        "answer": 0,
        "layers": {
          "concept": "Chronic lymphocytic leukaemia - mature lymphocytosis + smudge cells in elderly",
          "discriminator": "Elderly + high mature lymphocyte count + smudge cells = CLL",
          "trap": "Confusing CLL (mature lymphocytosis, elderly) with ALL (blasts, children) or hairy cell (pancytopenia + hairy cells)",
          "rule": "CLL: mature lymphocytosis with smudge cells in the elderly, lymphadenopathy; treat if symptomatic/cytopenic."
        }
      },
      {
        "q": "A woman with placental abruption develops generalized oozing from venepuncture sites. Laboratories show prolonged PT and aPTT, low fibrinogen, thrombocytopenia and a markedly raised D-dimer. Which is the most appropriate description and treatment?",
        "options": [
          "Disseminated intravascular coagulation; treat the underlying cause and support with blood products",
          "Haemophilia; give factor VIII",
          "Immune thrombocytopenia; corticosteroids",
          "Vitamin K deficiency; vitamin K"
        ],
        "answer": 0,
        "layers": {
          "concept": "DIC - consumption coagulopathy; treat the cause + supportive products",
          "discriminator": "Placental abruption + bleeding + low fibrinogen/platelets + high D-dimer = DIC; treat cause + supportive",
          "trap": "Treating DIC as a single-factor deficiency - it is a consumption process needing cause control + products",
          "rule": "DIC: consumption of factors/platelets after tissue-factor release (abruption, sepsis); low fibrinogen, high D-dimer; treat cause + blood products."
        }
      },
      {
        "q": "A 65-year-old has bone pain, pathological vertebral fractures, anaemia and renal impairment. Serum shows a monoclonal paraprotein with rouleaux on the film and elevated serum calcium. What is the most likely diagnosis?",
        "options": [
          "Multiple myeloma",
          "Chronic lymphocytic leukaemia",
          "Metastatic prostate cancer",
          "Polycythaemia vera"
        ],
        "answer": 0,
        "layers": {
          "concept": "Multiple myeloma - CRAB (hypercalcaemia, renal, anaemia, bone) + monoclonal paraprotein + rouleaux",
          "discriminator": "Bone pain/fractures + anaemia + renal failure + hypercalcaemia + monoclonal protein + rouleaux = myeloma (CRAB)",
          "trap": "Choosing metastatic malignancy - the paraprotein + rouleaux + renocrania distinctive of myeloma",
          "rule": "Myeloma: CRAB + monoclonal paraprotein + rouleaux; marrow plasma cells; manage with antimyeloma therapy and hypercalcaemia."
        }
      },
      {
        "q": "A patient with malabsorption and prolonged antibiotic use develops a bleeding tendency. Coagulation tests show a prolonged prothrombin time (PT) with a normal platelet count and aPTT is only mildly prolonged. Which deficiency is most likely?",
        "options": [
          "Vitamin K (affecting factors II, VII, IX, X)",
          "Factor VIII",
          "Von Willebrand factor",
          "Platelet dysfunction (thrombocytopenia)"
        ],
        "answer": 0,
        "layers": {
          "concept": "Vitamin K deficiency - prolonged PT (factor VII first) in malabsorption",
          "discriminator": "Malabsorption/antibiotics + prolonged PT + normal platelets = vitamin K deficiency (factors II, VII, IX, X)",
          "trap": "Blaming factor VIII/VWD (which prolong aPTT more) - vitamin K deficiency prolongs PT",
          "rule": "Vitamin K deficiency (malabsorption/antibiotics/liver) prolongs PT via factors II, VII, IX, X; treat with vitamin K."
        }
      },
      {
        "q": "On a peripheral blood film, which single finding best supports a megaloblastic (B12/folate) anaemia?",
        "options": [
          "Hypersegmented neutrophils (and macro-ovalocytes)",
          "Microcytes and target cells",
          "Spherocytes",
          "Sickle-shaped cells"
        ],
        "answer": 0,
        "layers": {
          "concept": "Megaloblastic anaemia - hypersegmented neutrophils + macro-ovalocytes",
          "discriminator": "Hypersegmented neutrophils + macrocytosis = megaloblastic (B12/folate) anaemia",
          "trap": "Choosing microcytic or hemolytic film changes - hypersegmented neutrophils are specific for megaloblastic anaemia",
          "rule": "Megaloblastic film: macro-ovalocytes and hypersegmented neutrophils; MCV elevated. Seen in B12/folate deficiency."
        }
      },
      {
        "q": "Halfway through a blood transfusion a patient develops fever, chills, loin/back pain, dark urine and hypotension. What is the most appropriate immediate action?",
        "options": [
          "Stop the transfusion immediately, keep the line open, and manage as a transfusion reaction",
          "Continue the transfusion at a slower rate",
          "Give paracetamol and continue",
          "Stop and discard the unit but disconnect the line"
        ],
        "answer": 0,
        "layers": {
          "concept": "Acute haemolytic transfusion reaction - STOP transfusion immediately, keep line, manage reaction",
          "discriminator": "Fever/back pain/dark urine during transfusion = haemolytic reaction; stop the blood, keep IV access, manage supportively",
          "trap": "Slowing or continuing the transfusion - the unit must be stopped immediately",
          "rule": "Suspected haemolytic transfusion reaction: stop the transfusion, keep IV access, support BP/renal function, and investigate."
        }
      }
    ]
  },
  {
    "id": "hepatology",
    "name": "Hepatology",
    "questions": [
      {
        "q": "A 55-year-old man with cirrhosis presents with confusion and asterixis. Serum ammonia is elevated. In the liver, ammonia is detoxified by combining with which molecule to form glutamine?",
        "options": [
          "Aspartate",
          "Alanine",
          "Glutamate",
          "Pyruvate"
        ],
        "answer": 2,
        "layers": {
          "concept": "Hepatic encephalopathy — ammonia detoxification via glutamine synthetase",
          "discriminator": "Ammonia + glutamate → glutamine (glutamine synthetase) is the liver's detoxification pathway",
          "trap": "Synonym Swap — glutamate vs glutamine vs aspartate",
          "rule": "NH3 detoxified to glutamine via glutamine synthetase (glutamate is the acceptor)"
        }
      },
      {
        "q": "A 60-year-old man with ascites due to cirrhosis presents with fever and abdominal pain. Diagnostic paracentesis shows an ascitic fluid polymorphonuclear (PMN) count of 350 cells/mm³. What is the most appropriate treatment?",
        "options": [
          "Oral ciprofloxacin alone",
          "High-dose furosemide",
          "Observation with repeat paracentesis",
          "IV cefotaxime plus IV albumin"
        ],
        "answer": 3,
        "layers": {
          "concept": "Spontaneous bacterial peritonitis — PMN >250 → cefotaxime + albumin",
          "discriminator": "Ascites + fever + PMN >250 cells/mm³ = SBP → cefotaxime + IV albumin (prevents hepatorenal syndrome)",
          "trap": "Unit/Number — PMN >250 threshold + albumin add-on missed",
          "rule": "SBP = ascitic PMN >250 → cefotaxime + IV albumin (albumin prevents HRS)"
        }
      },
      {
        "q": "A 58-year-old man with decompensated cirrhosis and ascites develops oliguria and a creatinine rising from 1.0 to 2.6 mg/dL over 2 weeks. Urine sediment is bland and urine sodium is 8 mmol/L. He has received no nephrotoxic drugs and there is no shock or proteinuria. What is the most likely diagnosis?",
        "options": [
          "Hepatorenal syndrome",
          "Acute tubular necrosis",
          "Pre-renal failure from hypovolaemia",
          "IgA nephropathy"
        ],
        "answer": 0,
        "layers": {
          "concept": "Hepatorenal syndrome — functional renal failure in cirrhosis",
          "discriminator": "Cirrhosis + progressive creatinine rise + low urine Na (<10) + bland sediment + no shock = hepatorenal syndrome (type 1)",
          "trap": "Clinical Mimic — HRS vs prerenal failure vs ATN (urine Na discriminates)",
          "rule": "HRS = functional AKI in cirrhosis, urine Na <10, bland sediment → terlipressin + albumin"
        }
      },
      {
        "q": "A 52-year-old man with compensated cirrhosis develops new-onset abdominal distension and shifting dullness. He is otherwise stable with normal renal function. What is the first-line treatment?",
        "options": [
          "Large-volume paracentesis",
          "Transjugular intrahepatic portosystemic shunt (TIPS)",
          "Loop diuretic (furosemide) alone",
          "Sodium restriction and spironolactone"
        ],
        "answer": 3,
        "layers": {
          "concept": "Ascites — first-line medical management",
          "discriminator": "New uncomplicated ascites → sodium restriction + spironolactone (aldosterone antagonist) first",
          "trap": "Treatment ladder — invasive paracentesis/TIPS over first-line diuretics",
          "rule": "Ascites first-line = sodium restriction + spironolactone (add furosemide if inadequate)"
        }
      },
      {
        "q": "A 55-year-old man with chronic liver disease attends for routine review and is found to have a prolonged prothrombin time. Which supplement most directly addresses this coagulation defect?",
        "options": [
          "Folic acid",
          "Vitamin B12",
          "Vitamin C",
          "Vitamin K"
        ],
        "answer": 3,
        "layers": {
          "concept": "Vitamin K deficiency in chronic liver disease",
          "discriminator": "Prolonged PT in chronic liver disease → vitamin K (fat-soluble vitamin needed for factors II, VII, IX, X)",
          "trap": "Opposite — vitamin K vs other vitamins for coagulopathy",
          "rule": "Vitamin K corrects PT prolongation from factor II/VII/IX/X deficiency in CLD"
        }
      },
      {
        "q": "A 45-year-old man with hepatitis B-related cirrhosis is under surveillance. What is the most appropriate screening strategy for hepatocellular carcinoma?",
        "options": [
          "Annual CT abdomen",
          "Six-monthly MRI liver",
          "Six-monthly ultrasound with alpha-fetoprotein",
          "Annual ultrasound alone"
        ],
        "answer": 2,
        "layers": {
          "concept": "Hepatocellular carcinoma — surveillance in cirrhosis",
          "discriminator": "Cirrhosis (HBV) → 6-monthly ultrasound + AFP for HCC surveillance",
          "trap": "Unit/Number — 6-monthly interval + US over CT/MRI for screening",
          "rule": "HCC surveillance in cirrhosis = 6-monthly ultrasound (+AFP)"
        }
      },
      {
        "q": "A 30-year-old woman presents with ascites, tender hepatomegaly, and right upper quadrant pain of 3 weeks duration. Doppler ultrasound shows thrombosis of the hepatic veins. What is the most likely underlying diagnosis?",
        "options": [
          "Portal vein thrombosis",
          "Budd-Chiari syndrome",
          "Alcoholic cirrhosis",
          "Right-sided heart failure"
        ],
        "answer": 1,
        "layers": {
          "concept": "Budd-Chiari syndrome — hepatic vein thrombosis",
          "discriminator": "Ascites + hepatomegaly + hepatic vein thrombosis = Budd-Chiari syndrome (outflow obstruction)",
          "trap": "Clinical Mimic — Budd-Chiari vs portal vein thrombosis vs cardiac ascites",
          "rule": "Budd-Chiari = hepatic vein outflow obstruction → ascites + hepatomegaly → anticoagulate"
        }
      },
      {
        "q": "A 48-year-old man with heavy alcohol use presents with jaundice, tender hepatomegaly, and a Maddrey discriminant function of 40. He has no gastrointestinal bleeding or sepsis. What is the most appropriate treatment?",
        "options": [
          "Pentoxifylline",
          "Observation alone",
          "Immediate liver transplant",
          "Prednisolone"
        ],
        "answer": 3,
        "layers": {
          "concept": "Alcoholic hepatitis — Maddrey DF >32 → corticosteroids",
          "discriminator": "Alcoholic hepatitis + Maddrey DF >32 (severe) → prednisolone (reduces mortality)",
          "trap": "Unit/Number — Maddrey >32 threshold for steroids",
          "rule": "Severe alcoholic hepatitis (Maddrey >32) → prednisolone; screen for infection/bleed first"
        }
      },
      {
        "q": "Which of the following is the most common cause of acute viral hepatitis in children?",
        "options": [
          "Hepatitis B",
          "Hepatitis A",
          "Hepatitis C",
          "Hepatitis D"
        ],
        "answer": 1,
        "layers": {
          "concept": "Hepatitis A — most common acute hepatitis in children",
          "discriminator": "Hepatitis A is the most common cause of acute viral hepatitis in children (fecal-oral spread)",
          "trap": "Overthinking — obvious answer (Hep A) second-guessed toward B/C",
          "rule": "Hepatitis A = most common acute viral hepatitis in children, fecal-oral, no carrier state"
        }
      },
      {
        "q": "A pregnant woman with chronic hepatitis B (HBsAg positive) delivers a baby. After giving hepatitis B immunoglobulin, what additional step most effectively prevents transmission?",
        "options": [
          "First dose of hepatitis B vaccine within 12-24 hours of birth",
          "Breastfeeding avoidance",
          "Caesarean delivery",
          "Defer vaccination until 6 weeks"
        ],
        "answer": 0,
        "layers": {
          "concept": "Hepatitis B — vertical transmission prevention",
          "discriminator": "HBsAg+ mother → HBIG + first vaccine dose within 12-24 hours of birth",
          "trap": "Unit/Number — timing (12-24h) is the discriminator",
          "rule": "Hep B vertical: HBIG + first vaccine dose within 12-24h of birth"
        }
      },
      {
        "q": "A 35-year-old man is found to have the following serology: HBsAg positive, anti-HBc IgG positive, anti-HBs negative, HBeAg negative, with normal ALT. What does this profile indicate?",
        "options": [
          "Immunity from vaccination",
          "Acute hepatitis B infection",
          "Chronic hepatitis B infection",
          "Resolved hepatitis B infection"
        ],
        "answer": 2,
        "layers": {
          "concept": "Hepatitis B serology — chronic infection profile",
          "discriminator": "HBsAg+ + anti-HBc IgG+ + anti-HBs− = chronic infection (HBsAg persists >6 months)",
          "trap": "Synonym Swap — chronic vs resolved vs vaccinated serology",
          "rule": "Chronic HBV = HBsAg+ (>6mo), anti-HBc IgG+, anti-HBs−"
        }
      },
      {
        "q": "A 28-year-old pregnant woman in her third trimester presents with acute jaundice, malaise, and markedly elevated aminotransferases. She had recently travelled to a region with poor sanitation. Which hepatitis virus carries the highest mortality in this setting?",
        "options": [
          "Hepatitis E",
          "Hepatitis A",
          "Hepatitis B",
          "Hepatitis C"
        ],
        "answer": 0,
        "layers": {
          "concept": "Hepatitis E — fulminant hepatitis in pregnancy",
          "discriminator": "Pregnancy + acute hepatitis (fecal-oral, travel) = hepatitis E → highest mortality in 3rd trimester",
          "trap": "Clinical Mimic — Hep E vs Hep A (pregnancy severity discriminates)",
          "rule": "Hepatitis E = fulminant hepatitis in pregnancy (3rd trimester), high mortality"
        }
      },
      {
        "q": "A 22-year-old woman presents 24 hours after ingesting a large overdose of paracetamol with jaundice, coagulopathy, and grade 2 hepatic encephalopathy. What is the most appropriate antidote?",
        "options": [
          "Flumazenil",
          "Vitamin K",
          "N-acetylcysteine",
          "Activated charcoal"
        ],
        "answer": 2,
        "layers": {
          "concept": "Fulminant hepatic failure — paracetamol antidote",
          "discriminator": "Paracetamol overdose + hepatic failure = N-acetylcysteine (replenishes glutathione)",
          "trap": "Priority inversion — charcoal over NAC (charcoal only within 1h, NAC is the antidote)",
          "rule": "Paracetamol hepatotoxicity → N-acetylcysteine (glutathione repletion)"
        }
      },
      {
        "q": "A 50-year-old man presents with fatigue, joint pain, new-onset diabetes, and slate-grey skin pigmentation. Serum ferritin is markedly elevated with a transferrin saturation of 65%. What is the definitive treatment?",
        "options": [
          "Iron supplementation",
          "Therapeutic phlebotomy",
          "Deferoxamine",
          "Corticosteroids"
        ],
        "answer": 1,
        "layers": {
          "concept": "Hereditary hemochromatosis — phlebotomy",
          "discriminator": "Diabetes + skin pigmentation + raised transferrin saturation (>45%) = hemochromatosis → phlebotomy",
          "trap": "Clinical Mimic — hemochromatosis vs secondary iron overload / diabetes",
          "rule": "Hemochromatosis = transferrin saturation >45% + iron overload → phlebotomy"
        }
      },
      {
        "q": "A 17-year-old boy presents with a tremor, dysarthria, and deteriorating school performance. Examination shows Kayser-Fleischer rings, and serum ceruloplasmin is low. What is the most appropriate first-line treatment?",
        "options": [
          "Iron chelation with deferoxamine",
          "Gluten-free diet",
          "D-penicillamine",
          "Cholestyramine"
        ],
        "answer": 2,
        "layers": {
          "concept": "Wilson disease — copper chelation with penicillamine",
          "discriminator": "Adolescent + tremor + Kayser-Fleischer rings + low ceruloplasmin = Wilson disease → penicillamine",
          "trap": "Clinical Mimic — Wilson vs hemochromatosis (copper vs iron overload)",
          "rule": "Wilson = KF rings + low ceruloplasmin → copper chelation (penicillamine/trientine)"
        }
      },
      {
        "q": "A 35-year-old non-smoker presents with emphysema predominantly in the lung bases and mild transaminitis. Liver biopsy shows PAS-positive, diastase-resistant globules in hepatocytes. What is the most likely diagnosis?",
        "options": [
          "Chronic obstructive pulmonary disease from smoking",
          "Cystic fibrosis",
          "Non-alcoholic fatty liver disease",
          "Alpha-1 antitrypsin deficiency"
        ],
        "answer": 3,
        "layers": {
          "concept": "Alpha-1 antitrypsin deficiency — PAS+ globules, basal emphysema",
          "discriminator": "Non-smoker + basal emphysema + PAS-positive diastase-resistant globules = alpha-1 antitrypsin deficiency",
          "trap": "Clinical Mimic — alpha-1 vs smoking-related COPD (basal vs apical emphysema)",
          "rule": "Alpha-1 antitrypsin deficiency = basal emphysema + PAS+ diastase-resistant hepatic globules"
        }
      },
      {
        "q": "A 22-year-old man is found to have an isolated raised unconjugated bilirubin (40 µmol/L) on routine testing. His haemoglobin, reticulocyte count, and liver enzymes are normal, and there are no symptoms. What is the most likely diagnosis?",
        "options": [
          "Haemolytic anaemia",
          "Gilbert syndrome",
          "Dubin-Johnson syndrome",
          "Obstructive jaundice"
        ],
        "answer": 1,
        "layers": {
          "concept": "Gilbert syndrome — benign unconjugated hyperbilirubinemia",
          "discriminator": "Isolated unconjugated hyperbilirubinemia + normal Hb/reticulocytes/LFTs = Gilbert syndrome (benign)",
          "trap": "Opposite — benign Gilbert vs worrying haemolysis/obstruction",
          "rule": "Gilbert = isolated unconjugated hyperbilirubinemia with normal Hb/reticulocytes/LFTs"
        }
      },
      {
        "q": "A 48-year-old woman presents with pruritus and fatigue. Liver biochemistry shows a markedly raised alkaline phosphatase, and anti-mitochondrial antibodies are positive. What is the first-line treatment?",
        "options": [
          "Ursodeoxycholic acid",
          "Prednisolone",
          "Penicillamine",
          "Cholecystectomy"
        ],
        "answer": 0,
        "layers": {
          "concept": "Primary biliary cholangitis — AMA positive → UDCA",
          "discriminator": "Middle-aged woman + pruritus + raised ALP + AMA+ = PBC → ursodeoxycholic acid",
          "trap": "Clinical Mimic — PBC (AMA+, cholestatic) vs autoimmune hepatitis (ASMA+, hepatocellular)",
          "rule": "PBC = pruritus + raised ALP + AMA+ → ursodeoxycholic acid"
        }
      },
      {
        "q": "A 24-year-old woman presents with jaundice and fatigue. Liver enzymes show a marked hepatocellular pattern (AST 900, ALT 850), IgG is elevated, and anti-smooth muscle antibody is positive. What is the most appropriate initial treatment?",
        "options": [
          "Ursodeoxycholic acid",
          "Interferon",
          "Corticosteroids",
          "Alcohol abstinence only"
        ],
        "answer": 2,
        "layers": {
          "concept": "Autoimmune hepatitis — anti-SMA+ → corticosteroids",
          "discriminator": "Young female + hepatocellular injury + elevated IgG + anti-SMA = autoimmune hepatitis → corticosteroids",
          "trap": "Age-appropriate differential — AIH vs viral hepatitis in a young woman",
          "rule": "Autoimmune hepatitis = young woman + hepatocellular pattern + anti-SMA → corticosteroids"
        }
      },
      {
        "q": "A 60-year-old man with a history of chronic alcohol-related pancreatitis presents with steatorrhoea and weight loss. Deficiency of which pancreatic enzyme most directly explains the steatorrhoea?",
        "options": [
          "Lipase",
          "Amylase",
          "Trypsin",
          "Chymotrypsin"
        ],
        "answer": 0,
        "layers": {
          "concept": "Chronic pancreatitis — exocrine insufficiency (lipase → steatorrhoea)",
          "discriminator": "Steatorrhoea in chronic pancreatitis = lipase deficiency (fat maldigestion)",
          "trap": "One-word discriminator — lipase (fat) vs amylase (starch) vs trypsin (protein)",
          "rule": "Chronic pancreatitis steatorrhoea = lipase deficiency (fat maldigestion appears first)"
        }
      },
      {
        "q": "A 40-year-old man had acute pancreatitis 6 weeks ago and now presents with a firm epigastric mass and early satiety. CT shows a well-defined cystic lesion in the lesser sac. What is the most likely diagnosis?",
        "options": [
          "Pancreatic pseudocyst",
          "Pancreatic abscess",
          "Pancreatic adenocarcinoma",
          "Pancreatic ascites"
        ],
        "answer": 0,
        "layers": {
          "concept": "Pancreatic pseudocyst — 4-6 weeks after pancreatitis",
          "discriminator": "Epigastric mass 4-6 weeks after acute pancreatitis = pancreatic pseudocyst (walled-off fluid)",
          "trap": "Unit/Number — 4-6 week timing distinguishes pseudocyst from acute fluid collection",
          "rule": "Pseudocyst = walled-off collection 4-6 weeks after pancreatitis; drain only if symptomatic/large"
        }
      },
      {
        "q": "A 65-year-old man presents with painless jaundice and a palpable non-tender gallbladder. What is the most likely diagnosis?",
        "options": [
          "Choledocholithiasis",
          "Acute cholecystitis",
          "Hepatocellular carcinoma",
          "Carcinoma of the head of the pancreas"
        ],
        "answer": 3,
        "layers": {
          "concept": "Courvoisier's law — painless jaundice + palpable gallbladder",
          "discriminator": "Painless jaundice + palpable gallbladder = malignant obstruction (pancreatic head), NOT stones",
          "trap": "Opposite — painless (malignant) vs painful (stones) jaundice with a palpable GB",
          "rule": "Courvoisier's law: painless jaundice + palpable GB = malignant obstruction"
        }
      },
      {
        "q": "A 26-year-old man presents with fever, right upper quadrant pain, and a tender liver. Ultrasound shows a single 6 cm abscess in the right lobe. What is the most appropriate management?",
        "options": [
          "Laparotomy and drainage",
          "Metronidazole plus ultrasound-guided aspiration",
          "Oral antibiotics alone with observation",
          "Laparoscopic cholecystectomy"
        ],
        "answer": 1,
        "layers": {
          "concept": "Amoebic liver abscess — metronidazole + aspiration if large",
          "discriminator": "Single large (6 cm) liver abscess in a young man = amoebic → metronidazole + aspiration",
          "trap": "Treatment misdirection — laparotomy over percutaneous aspiration",
          "rule": "Amoebic liver abscess: metronidazole ± aspiration (if >5cm or threatening rupture)"
        }
      },
      {
        "q": "A patient's liver function tests show an alkaline phosphatase of 900 U/L with near-normal AST and ALT. Which pattern of liver injury does this represent?",
        "options": [
          "Cholestatic pattern",
          "Hepatocellular pattern",
          "Isolated unconjugated hyperbilirubinemia",
          "Normal liver function"
        ],
        "answer": 0,
        "layers": {
          "concept": "Liver biochemistry — cholestatic vs hepatocellular pattern",
          "discriminator": "Marked ALP elevation with near-normal aminotransferases = cholestatic (biliary) pattern",
          "trap": "Pattern recognition — cholestatic (ALP) vs hepatocellular (AST/ALT)",
          "rule": "Cholestatic = ALP/GGT predominant; hepatocellular = AST/ALT predominant"
        }
      },
      {
        "q": "A 30-year-old man with a 5-year history of ulcerative colitis presents with fatigue, pruritus, and a persistently raised alkaline phosphatase. MRCP shows multifocal strictures and dilatations of the intrahepatic and extrahepatic bile ducts ('beaded' appearance). What is the most likely diagnosis?",
        "options": [
          "Primary biliary cholangitis",
          "Primary sclerosing cholangitis",
          "Choledocholithiasis",
          "Autoimmune hepatitis"
        ],
        "answer": 1,
        "layers": {
          "concept": "Primary sclerosing cholangitis — UC + beaded strictures",
          "discriminator": "UC + cholestatic enzymes + multifocal beaded strictures on MRCP = primary sclerosing cholangitis",
          "trap": "Clinical Mimic — PSC (beaded strictures, UC) vs PBC (AMA+, no strictures)",
          "rule": "PSC = UC association + multifocal beaded bile duct strictures (ALP raised, AMA negative)"
        }
      }
    ]
  },
  {
    "id": "neuro",
    "name": "Neurology",
    "questions": [
      {
        "q": "A 45-year-old woman presents with the 'worst headache of her life' of sudden onset 4 hours ago, vomiting and neck stiffness. Non-contrast CT brain is normal. What is the next best step?",
        "options": [
          "Lumbar puncture to look for xanthochromia",
          "Discharge home with simple analgesia after 24 h observation",
          "MRI of the brain as an outpatient",
          "Start prophylactic nimodipine and observe"
        ],
        "answer": 0,
        "layers": {
          "concept": "Subarachnoid haemorrhage: normal CT does NOT exclude it — proceed to LP",
          "discriminator": "Thunderclap headache + normal CT = still rule out SAH with LP",
          "trap": "False reassurance from a 'normal' CT",
          "rule": "Any thunderclap headache; if CT is negative, do an LP looking for xanthochromia before excluding SAH."
        }
      },
      {
        "q": "A 28-year-old woman on combined oral contraceptives, 3 weeks postpartum, has progressive bifrontal headache, blurred vision with papilloedema, and a focal seizure. CT shows a haemorrhagic venous infarct. What is the most likely diagnosis?",
        "options": [
          "Cerebral venous sinus thrombosis",
          "Subarachnoid haemorrhage from berry aneurysm",
          "Hypertensive intracerebral haemorrhage",
          "Brain tumour with haemorrhagic degeneration"
        ],
        "answer": 0,
        "layers": {
          "concept": "Cerebral venous sinus thrombosis (CVST) recognition",
          "discriminator": "Young woman on OCP/postpartum + venous infarct/haemorrhage + papilloedema",
          "trap": "Attributing haemorrhagic infarct to arterial hypertension or tumour",
          "rule": "In a young woman with headache+papilloedema+seizure on OCP/postpartum and a haemorrhagic infarct, suspect CVST; anticoagulate after excluding haemorrhage."
        }
      },
      {
        "q": "A 68-year-old man has sudden right hemiparesis, right hemisensory loss, right homonymous hemianopia and expressive (Broca) aphasia. Which vessel is most likely occluded?",
        "options": [
          "Right middle cerebral artery",
          "Basilar artery",
          "Left posterior cerebral artery",
          "Left middle cerebral artery"
        ],
        "answer": 3,
        "layers": {
          "concept": "Middle cerebral artery occlusion syndrome localisation",
          "discriminator": "Aphasia = dominant hemisphere = LEFT MCA; contralateral hemiparesis+hemisensory+hemianopia",
          "trap": "Choosing the side of the lesion by the motor deficit instead of by the speech",
          "rule": "Aphasia + contralateral hemiparesis/hemisensory/hemianopia = dominant (left) MCA occlusion; the side is named by the SPEECH, not the weak limb."
        }
      },
      {
        "q": "A 60-year-old hypertensive diabetic man wakes with isolated right hemiparesis involving face, arm and leg equally. There are NO cortical signs (no aphasia, no neglect, no visual field defect). MRI shows a small deep infarct. This is best described as:",
        "options": [
          "Lacunar stroke from small-vessel disease",
          "Large artery atherosclerotic stroke",
          "Cardioembolic stroke",
          "Watershed (border-zone) infarction"
        ],
        "answer": 0,
        "layers": {
          "concept": "Lacunar stroke recognition (pure motor, small vessel)",
          "discriminator": "Absence of cortical signs despite dense hemiparesis = subcortical lacunar infarct",
          "trap": "Assuming any hemiparesis is a large-vessel/cortical stroke",
          "rule": "Absence of cortical signs (aphasia/neglect/hemianopia) with a pure motor or sensory deficit = lacunar small-vessel infarct, not large-artery or embolic."
        }
      },
      {
        "q": "A 59-year-old man has acute left-sided weakness of 2 h duration from an ischaemic stroke. His BP is 190/115 mmHg. Before considering IV thrombolysis, what must be done with the blood pressure?",
        "options": [
          "Give thrombolysis immediately regardless of BP",
          "Lower BP to <120/80 mmHg then give thrombolysis",
          "Gently lower BP to ≤185/110 mmHg before thrombolysis",
          "Withhold thrombolysis permanently if BP cannot be lowered"
        ],
        "answer": 2,
        "layers": {
          "concept": "BP threshold for IV thrombolysis in ischaemic stroke",
          "discriminator": "SBP must be ≤185 mmHg and DBP ≤110 mmHg before alteplase",
          "trap": "Lowering BP too aggressively (elevated BP may be protective); or giving tPA at an unsafe high BP",
          "rule": "Before IV tPA, BP must be SBP ≤185 and DBP ≤110; lower gently with labetalol/nicardipine if needed, and do not over-lower to normotensive range."
        }
      },
      {
        "q": "A 55-year-old hypertensive man has sudden vertigo, vomiting, ataxia and headache. He is drowsy. CT shows a cerebellar haemorrhage (3 cm) with early obstructive hydrocephalus. What is the most appropriate management?",
        "options": [
          "Medical observation with serial imaging",
          "IV thrombolysis",
          "Urgent posterior fossa surgical decompression",
          "Intravenous steroids and observation"
        ],
        "answer": 2,
        "layers": {
          "concept": "Cerebellar haemorrhage — surgical decompression for mass effect",
          "discriminator": "Cerebellar bleed + drowsiness/hydrocephalus = surgical emergency",
          "trap": "Treating a haemorrhage 'medically' as if it were ischaemic, or awaiting resolution",
          "rule": "Cerebellar haemorrhage with hydrocephalus, mass effect or reduced consciousness needs urgent posterior fossa decompression; do not delay with observation."
        }
      },
      {
        "q": "A 40-year-old man is 'awake' with eyes open after a large ventral pontine infarct. He cannot speak or move his limbs, but he can reliably move his eyes vertically to command. What is the most likely diagnosis?",
        "options": [
          "Persistent vegetative state",
          "Brain death",
          "Coma due to bilateral hemispheric damage",
          "Locked-in syndrome"
        ],
        "answer": 3,
        "layers": {
          "concept": "Locked-in syndrome — preserved vertical eye movement + intact consciousness",
          "discriminator": "Intact consciousness + voluntary vertical eye movement only = locked-in",
          "trap": "Calling a conscious, locking-in patient 'vegetative' or 'comatose'",
          "rule": "Preserved conscious awareness with only vertical eye movement = locked-in syndrome (ventral pons), NOT vegetative state, coma or brain death."
        }
      },
      {
        "q": "Which combination best satisfies the clinical criteria for brain (brainstem) death?",
        "options": [
          "Deep coma with preserved pupillary light reflex and spontaneous respiration",
          "Deep coma, absent pupillary/corneal/oculocephalic reflexes, absent gag/cough, and a positive apnoea test",
          "Persistent vegetative state with intact brainstem reflexes",
          "Coma with decerebrate posturing to noxious stimuli"
        ],
        "answer": 1,
        "layers": {
          "concept": "Brainstem death — clinical criteria (coma + absent brainstem reflexes + apnoea)",
          "discriminator": "Absence of ALL brainstem reflexes + apnoea = brainstem death (plus established cause, no sedatives/hypothermia)",
          "trap": "Ticking off coma and a single reflex as 'brain death'",
          "rule": "Brainstem death requires: no reversible cause, deep coma, absent ALL brainstem reflexes, and a positive apnoea test."
        }
      },
      {
        "q": "A 70-year-old man with cirrhosis continues to seize 10 minutes after receiving a benzodiazepine for status epilepticus. Which second-line agent is preferred here?",
        "options": [
          "Phenytoin",
          "Fosphenytoin IV bolus",
          "Valproate",
          "Levetiracetam"
        ],
        "answer": 3,
        "layers": {
          "concept": "Second-line agent for status epilepticus — levetiracetam in hepatic impairment",
          "discriminator": "Cirrhosis (hepatic impairment) + status = prefer levetiracetam (not hepatically metabolised)",
          "trap": "Reaching for phenytoin/valproate automatically without considering hepatic status",
          "rule": "After benzodiazepine failure in status epilepticus, use levetiracetam when hepatic impairment exists; phenytoin/fosphenytoin and valproate are less ideal in cirrhosis."
        }
      },
      {
        "q": "A 34-year-old adult has a FIRST unprovoked generalised tonic-clonic seizure. EEG shows generalised epileptiform activity and MRI is normal. Which factor most strongly supports starting a long-term antiepileptic drug now?",
        "options": [
          "Epileptiform abnormalities on EEG and an abnormal neurologic examination",
          "The single unprovoked seizure with a normal MRI",
          "A normal sleep-deprived EEG",
          "Absence of any provoking factor and normal imaging"
        ],
        "answer": 0,
        "layers": {
          "concept": "First unprovoked seizure — high recurrence risk (epileptiform EEG, abnormal exam) justifies AED",
          "discriminator": "Epileptiform EEG + abnormal neuro exam = high recurrence risk -> treat",
          "trap": "Withholding treatment after any single seizure, or treating every single seizure automatically",
          "rule": "Start an AED after a first unprovoked seizure when recurrence risk is high — epileptiform EEG, abnormal neurologic exam, structural lesion, or remote symptomatic cause."
        }
      },
      {
        "q": "A 16-year-old girl has brief myoclonic jerks of her arms on waking and occasional generalised tonic-clonic seizures in the morning. Which is the most appropriate first-line antiseizure medication?",
        "options": [
          "Sodium valproate",
          "Ethosuximide",
          "Lamotrigine",
          "Carbamazepine"
        ],
        "answer": 2,
        "layers": {
          "concept": "Juvenile myoclonic epilepsy — first-line AED avoiding valproate in a girl",
          "discriminator": "JME is photosensitive/myoclonic-on-awakening; avoid valproate in a female of reproductive age",
          "trap": "Choosing valproate (the classic JME drug) without weighing teratogenicity",
          "rule": "JME (myoclonic jerks on awakening, often photosensitive) is valproate-responsive, but in a female of reproductive age use lamotrigine/levetiracetam first-line."
        }
      },
      {
        "q": "A 7-year-old girl has frequent brief episodes of staring and unresponsiveness with rapid blinking, during which she does not fall, lasting 5–10 seconds, occurring dozens of times a day. EEG shows 3 Hz spike-and-wave. What is the most effective first choice?",
        "options": [
          "Ethosuximide",
          "Carbamazepine",
          "Phenytoin",
          "Phenobarbital"
        ],
        "answer": 0,
        "layers": {
          "concept": "Typical absence epilepsy — ethosuximide first-line",
          "discriminator": "Brief staring + 3 Hz spike-and-wave = absence; ethosuximide is first-line",
          "trap": "Treating absence seizures with carbamazepine/phenytoin (which can exacerbate them)",
          "rule": "Brief staring with 3 Hz spike-and-wave = typical absence; ethosuximide is first-line (carbamazepine can worsen it)."
        }
      },
      {
        "q": "A 22-year-old collapsed with twitching movements of all limbs for about 20 seconds after standing up quickly, then quickly recovered with full orientation. Which feature most strongly suggests SYNCOPE rather than a seizure?",
        "options": [
          "Rapid full recovery of consciousness within seconds with no post-ictal confusion",
          "Biting the lateral border of the tongue",
          "Confusion and drowsiness for 30 minutes afterwards",
          "Urinary incontinence during the event"
        ],
        "answer": 0,
        "layers": {
          "concept": "Syncope vs seizure — post-ictal confusion and recovery distinguish them",
          "discriminator": "Rapid alert recovery without post-ictal confusion = syncope (not seizure)",
          "trap": "Judging by the brief twitching alone rather than the return-to-baseline phase",
          "rule": "Rapid full recovery without post-ictal confusion favours syncope; prolonged confusion, lateral tongue-biting and true automatisms favour seizure."
        }
      },
      {
        "q": "A 32-year-old man has severe, strictly unilateral, tearing and nasal-stuffy headache around the same eye, occurring in clusters every night and making him pace the floor. During an acute attack, the most effective first-line treatment is:",
        "options": [
          "Bed rest in a dark quiet room with simple analgesics",
          "High-flow oxygen therapy and subcutaneous sumatriptan",
          "Oral propranolol at the time of the attack",
          "Carbamazepine"
        ],
        "answer": 1,
        "layers": {
          "concept": "Cluster headache — acute attack treatment (high-flow O2 + SC sumatriptan)",
          "discriminator": "Unilateral periorbital pain + autonomic features + restlessness = cluster; high-flow O2 + SC sumatriptan",
          "trap": "Treating cluster like migraine (dark quiet room) or using oral analgesics that are too slow",
          "rule": "Acute cluster attacks are treated with high-flow oxygen and subcutaneous sumatriptan; sufferers are restless, unlike the migraineur who lies still."
        }
      },
      {
        "q": "A 38-year-old woman with migraine takes sumatriptan or ibuprofen on most days (roughly 18 days per month) and now has a daily, dull, diffuse headache that improves transiently with analgesics. What is the most likely diagnosis and key management?",
        "options": [
          "New daily persistent headache — start prophylactic amitriptyline only",
          "Intracranial tumour — urgent MRI is mandatory",
          "Chronic tension headache — increase analgesic frequency briefly",
          "Medication-overuse headache — withdraw the overused analgesic/abortive and re-educate"
        ],
        "answer": 3,
        "layers": {
          "concept": "Medication-overuse headache — recognition and withdrawal",
          "discriminator": "Daily headache + >10–15 abortive/analgesic days/month = medication overuse; stop the culprit drug",
          "trap": "Adding preventives and continuing overuse, or panicking about tumour without alarm features",
          "rule": "Daily headache with acute analgesic/abortive use >10–15 days/month is medication-overuse headache; management is withdrawal of the overused drug plus prevention."
        }
      },
      {
        "q": "A 68-year-old woman has a new severe temporal headache, jaw claudication while chewing, scalp tenderness, and an ESR of 90 mm/h. What is the most appropriate immediate action?",
        "options": [
          "Wait for the temporal artery biopsy result before any treatment",
          "Start high-dose corticosteroids now, and arrange temporal artery biopsy",
          "Prescribe simple analgesics and review in 2 weeks",
          "Start antibiotics for presumed cellulitis of the temple"
        ],
        "answer": 1,
        "layers": {
          "concept": "Giant cell arteritis — urgent steroids before biopsy to prevent blindness",
          "discriminator": "New headache in elderly + jaw claudication + high ESR = GCA; treat immediately to save vision",
          "trap": "Waiting for biopsy confirmation and allowing irreversible blindness; or dismissing as tension headache",
          "rule": "New headache in the elderly + jaw claudication + high ESR = GCA: start high-dose steroids immediately to prevent blindness; biopsy is confirmatory and need not delay treatment."
        }
      },
      {
        "q": "A 29-year-old woman with frequent disabling migraines (5–6 attacks/month) needs preventive therapy. She plans pregnancy in the next year. Which prophylactic is LEAST appropriate?",
        "options": [
          "Propranolol",
          "Amitriptyline",
          "Topiramate",
          "Sodium valproate"
        ],
        "answer": 3,
        "layers": {
          "concept": "Migraine prophylaxis — sodium valproate is teratogenic, avoid in reproductive-age women",
          "discriminator": "Reproductive-age woman planning pregnancy: avoid valproate (teratogenic neural-tube defects)",
          "trap": "Choosing valproate for its efficacy without weighing teratogenicity against reproductive plans",
          "rule": "For migraine prophylaxis in a reproductive-age woman, avoid sodium valproate (teratogenic); prefer propranolol, amitriptyline or topiramate."
        }
      },
      {
        "q": "A 60-year-old woman has brief, electric-shock-like stabbing pains in the right cheek/ jaw triggered by touching her face, chewing and cold air. Neurologic examination, including sensation, is normal. What is the first-line treatment?",
        "options": [
          "NSAIDs",
          "Carbamazepine",
          "Amitriptyline",
          "Phenytoin"
        ],
        "answer": 1,
        "layers": {
          "concept": "Trigeminal neuralgia — carbamazepine first-line",
          "discriminator": "Lancinating paroxysmal pain + trigger zones + normal sensation = trigeminal neuralgia; carbamazepine",
          "trap": "Treating paroxysmal lancinating facial pain with NSAIDs or amitriptyline",
          "rule": "Paroxysmal lancinating facial pain with trigger zones and normal sensation = trigeminal neuralgia; first-line is carbamazepine."
        }
      },
      {
        "q": "A 34-year-old man awakens with inability to close his LEFT eye and flattening of the left nasolabial fold; BOTH upper and lower face are weak, including forehead wrinkling. No limb weakness. What is the most appropriate management?",
        "options": [
          "Give IV thrombolysis immediately",
          "Start oral corticosteroids within 72 h and protect the eye",
          "Start antiepileptic treatment",
          "Observe without treatment for 6 weeks"
        ],
        "answer": 1,
        "layers": {
          "concept": "Bell's palsy — early oral corticosteroids + eye protection",
          "discriminator": "Whole-face (upper+lower) peripheral facial palsy = Bell's; treat with steroids within 72 h",
          "trap": "Treating facial weakness as stroke, or withholding steroids",
          "rule": "Whole-face peripheral facial palsy (forehead involved) = Bell's: oral corticosteroids within 72 h + eye protection (no routine antivirals unless definite herpes)."
        }
      },
      {
        "q": "Which clinical feature best distinguishes a CENTRAL (upper motor neuron) facial palsy from a PERIPHERAL (lower motor neuron/Bell's) palsy?",
        "options": [
          "Forehead movement is lost in a central palsy",
          "Central palsy always shows loss of taste",
          "Peripheral palsy spares the forehead",
          "Forehead and upper-face movement is spared in a central palsy"
        ],
        "answer": 3,
        "layers": {
          "concept": "UMN vs LMN facial palsy — forehead sparing in central lesions",
          "discriminator": "Central (cortical) facial palsy spares forehead (bilateral upper-face innervation); peripheral affects all face",
          "trap": "Reversing the rule and calling forehead involvement 'central'",
          "rule": "Central (UMN) facial palsy spares the forehead; peripheral (LMN/Bell's) palsy weakens whole face including forehead."
        }
      },
      {
        "q": "A 24-year-old woman has recurrent 'seizures' with asynchronous thrashing, pelvic thrusting, eyes tightly shut, and crying during events, with normal consciousness afterwards. Serum lactate after an episode is normal. Most likely diagnosis?",
        "options": [
          "Generalised tonic-clonic epilepsy",
          "Focal impaired-awareness epilepsy",
          "Psychogenic non-epileptic seizures (PNES)",
          "Absence seizures"
        ],
        "answer": 2,
        "layers": {
          "concept": "Psychogenic non-epileptic seizures (PNES) recognition",
          "discriminator": "Asynchronous/ pelvic-thrusting ictus, eyes shut, crying, normal lactate, no post-ictal phase = PNES",
          "trap": "Labeling psychogenic events as epilepsy and giving antiepileptics",
          "rule": "Asynchronous movements, closed eyes, ictal crying, and normal post-ictal lactate/awareness suggest PNES; confirm with video-EEG rather than treating as epilepsy."
        }
      },
      {
        "q": "A 45-year-old woman presents with new headaches and seizures. Imaging shows an extra-axial, contrast-enhancing dural-based mass; histology reveals psammoma bodies. What is the most likely diagnosis?",
        "options": [
          "Glioblastoma",
          "Meningioma",
          "Metastatic carcinoma",
          "Schwannoma"
        ],
        "answer": 1,
        "layers": {
          "concept": "Meningioma — extra-axial dural-based tumour with psammoma bodies",
          "discriminator": "Extra-axial dural-based mass + psammoma bodies + headache/seizures = meningioma",
          "trap": "Choosing glioblastoma (intra-axial) or metastasis on the basis of headache + seizures without noting the extra-axial dural base",
          "rule": "An extra-axial, dural-based enhancing mass with psammoma bodies is a meningioma (benign); headaches and seizures are classic presentations."
        }
      },
      {
        "q": "A 58-year-old hypertensive man has sudden vertigo, hoarseness, dysphagia, and ataxia. Examination shows right-sided Horner syndrome, loss of pain and temperature on the right face AND left body, with intact proprioception. What is the lesion?",
        "options": [
          "Left lateral medullary (Wallenberg) infarction",
          "Right medial midbrain infarction",
          "Right lateral medullary (Wallenberg) infarction",
          "Cerebellar hemisphere haemorrhage"
        ],
        "answer": 2,
        "layers": {
          "concept": "Lateral medullary (Wallenberg) syndrome — ipsilateral face + contralateral body pain/temp loss",
          "discriminator": "Vertigo+ipsilateral Horner+ataxia+ipsilateral face and contralateral body pain/temp loss = lateral medullary",
          "trap": "Naming the side by the CONTRALATERAL body pain rather than by the Horner/face signs",
          "rule": "Lateral medullary (PICA) infarct: ipsilateral Horner, ataxia, face pain/temp loss + contralateral body pain/temp loss — localise to the side of the Horner/face signs."
        }
      },
      {
        "q": "A 26-year-old woman with epilepsy on levetiracetam becomes pregnant. Which is the most appropriate management of her antiepileptic therapy?",
        "options": [
          "Stop all antiepileptics in the first trimester",
          "Switch to sodium valproate for better seizure control in pregnancy",
          "Continue levetiracetam (the least teratogenic option here) and give folic acid supplementation, monitoring levels",
          "Withhold antiepileptics and only treat if a seizure occurs"
        ],
        "answer": 2,
        "layers": {
          "concept": "Epilepsy in pregnancy — continue least-teratogenic AED + folic acid",
          "discriminator": "Avoid valproate in pregnancy; continue safest AED (levetiracetam) with folic acid and monitoring",
          "trap": "Stopping AEDs in pregnancy (risk of seizures) or switching to valproate",
          "rule": "In pregnancy continue the least teratogenic AED (e.g. levetiracetam/lamotrigine) with folic acid; avoid valproate because of major teratogenicity."
        }
      },
      {
        "q": "A patient remains in electrographic status epilepticus despite a benzodiazepine AND a second-line agent. What is the appropriate next step?",
        "options": [
          "Induce general anaesthesia (e.g. propofol/midazolam infusion) with continuous EEG monitoring in ICU",
          "Add a third oral antiepileptic and observe on the ward",
          "Stop all antiepileptics and reassess",
          "Start prophylactic aspirin"
        ],
        "answer": 0,
        "layers": {
          "concept": "Refractory status epilepticus — anaesthetic agents with continuous EEG in ICU",
          "discriminator": "Failure of benzodiazepine + second-line agent = refractory SE; needs anaesthesia + EEG",
          "trap": "Escalating only with more oral drugs, or stopping treatment",
          "rule": "Benzodiazepine + second-line failure defines refractory status epilepticus: use IV anaesthetic infusion (propofol/midazolam/barbiturate) with continuous EEG monitoring in ICU."
        }
      }
    ]
  },
  {
    "id": "nutrition-malabsorption",
    "name": "Nutrition & Malabsorption",
    "questions": [
      {
        "q": "A 45-year-old woman presents with chronic diarrhoea, weight loss, and steatorrhoea. To distinguish small-intestinal mucosal disease from pancreatic insufficiency, which test result would be most informative?",
        "options": [
          "Low serum lipase confirms mucosal disease",
          "Normal D-xylose with raised faecal elastase excludes malabsorption",
          "Low urinary D-xylose indicates mucosal disease",
          "High faecal osmotic gap indicates pancreatic disease"
        ],
        "answer": 2,
        "layers": {
          "concept": "Malabsorption workup — D-xylose test distinguishes mucosal vs pancreatic",
          "discriminator": "D-xylose is absorbed intact by jejunal mucosa without pancreatic enzymes → low urinary D-xylose = mucosal disease",
          "trap": "Investigation hierarchy — choosing the wrong test to localise malabsorption",
          "rule": "D-xylose low = mucosal disease; normal D-xylose + steatorrhoea = pancreatic insufficiency"
        }
      },
      {
        "q": "A patient with chronic watery diarrhoea has a stool osmolality of 290 mOsm/kg with stool sodium 40 mmol/L and potassium 30 mmol/L. What type of diarrhoea is most likely?",
        "options": [
          "Osmotic diarrhoea",
          "Secretory diarrhoea",
          "Inflammatory diarrhoea",
          "Fatty diarrhoea"
        ],
        "answer": 0,
        "layers": {
          "concept": "Faecal osmotic gap — osmotic vs secretory diarrhoea",
          "discriminator": "Osmotic gap = 290 − 2(Na+K) = 290 − 2(40+30) = 150 (>50) → osmotic diarrhoea",
          "trap": "Unit/Number — the >50 osmotic gap threshold and the 2(Na+K) formula",
          "rule": "Faecal osmotic gap = 290 − 2(Na+K); >50 osmotic, <50 secretory"
        }
      },
      {
        "q": "A 52-year-old man presents with migratory arthralgia, chronic diarrhoea, and weight loss. Small-bowel biopsy shows PAS-positive foamy macrophages in the lamina propria. What is the most appropriate initial treatment?",
        "options": [
          "Metronidazole for 7 days",
          "Oral glucocorticoids",
          "Gluten-free diet",
          "Ceftriaxone followed by trimethoprim-sulfamethoxazole"
        ],
        "answer": 3,
        "layers": {
          "concept": "Whipple disease — Tropheryma whipplei, PAS+ macrophages → prolonged antibiotics",
          "discriminator": "Arthralgia + diarrhoea + PAS+ macrophages = Whipple disease → prolonged antibiotics (ceftriaxone then TMP-SMX)",
          "trap": "Treatment misdirection — short antibiotic course vs prolonged therapy",
          "rule": "Whipple = arthralgia + diarrhoea + PAS+ macrophages → prolonged antibiotics"
        }
      },
      {
        "q": "A 60-year-old man who had a Billroth II gastrectomy years ago presents with diarrhoea, steatorrhoea, and macrocytic anaemia. A glucose breath test shows an early hydrogen peak. What is the most likely diagnosis?",
        "options": [
          "Coeliac disease",
          "Small intestinal bacterial overgrowth",
          "Chronic pancreatitis",
          "Whipple disease"
        ],
        "answer": 1,
        "layers": {
          "concept": "Small intestinal bacterial overgrowth — blind loop syndrome",
          "discriminator": "Post-gastrectomy stasis + steatorrhoea + B12 deficiency + early H2 peak = bacterial overgrowth (blind loop)",
          "trap": "Clinical Mimic — SIBO vs coeliac (surgical history + B12 deficiency discriminate)",
          "rule": "Blind loop → bacterial overgrowth → bile salt deconjugation (steatorrhoea) + B12 deficiency"
        }
      },
      {
        "q": "A 25-year-old man reports bloating, cramping, and loose stools within 2 hours of drinking milk, which started gradually in his twenties. What is the most appropriate confirmatory test?",
        "options": [
          "Serum anti-tTG antibody",
          "Stool culture",
          "Hydrogen breath test",
          "Colonoscopy with biopsy"
        ],
        "answer": 2,
        "layers": {
          "concept": "Lactose intolerance — hydrogen breath test",
          "discriminator": "Milk-triggered bloating/diarrhoea in an adult = lactase deficiency → hydrogen breath test",
          "trap": "Clinical Mimic — lactose intolerance vs coeliac (test choice discriminates)",
          "rule": "Lactose intolerance → hydrogen breath test; treat with lactose avoidance/lactase"
        }
      },
      {
        "q": "A 50-year-old woman undergoes resection of 100 cm of terminal ileum for Crohn disease. Which two deficiencies is she most at risk of developing?",
        "options": [
          "Iron and folate deficiency",
          "Vitamin B12 and bile salt malabsorption",
          "Vitamin C and zinc deficiency",
          "Vitamin D and calcium deficiency"
        ],
        "answer": 1,
        "layers": {
          "concept": "Ileal resection — B12 and bile salt malabsorption",
          "discriminator": "Terminal ileum absorbs B12 and bile salts → resection causes B12 deficiency + bile salt malabsorption",
          "trap": "Opposite — ileal (B12/bile salt) vs duodenal/jejunal (iron/folate) malabsorption",
          "rule": "Ileal resection → B12 deficiency + bile salt malabsorption (cholestyramine for diarrhoea)"
        }
      },
      {
        "q": "A 45-year-old woman who had a gastrectomy 1 year ago develops palpitations, sweating, and weakness 90 minutes after meals. What is the most likely mechanism?",
        "options": [
          "Reactive hypoglycaemia from excessive insulin secretion",
          "Rapid fluid shift into the bowel lumen",
          "Delayed gastric emptying",
          "Bile salt malabsorption"
        ],
        "answer": 0,
        "layers": {
          "concept": "Dumping syndrome — late phase (reactive hypoglycaemia)",
          "discriminator": "Post-gastrectomy symptoms 1-3 hours after meals = late dumping → reactive hypoglycaemia (excessive insulin)",
          "trap": "Opposite — late (hypoglycaemia) vs early (fluid shift) dumping",
          "rule": "Early dumping = fluid shift (10-30 min); late dumping = reactive hypoglycaemia (1-3h)"
        }
      },
      {
        "q": "A 62-year-old woman with pernicious anaemia (positive anti-intrinsic factor antibodies) requires treatment. What is the most appropriate long-term therapy?",
        "options": [
          "Oral vitamin B12 with high-dose tablets",
          "Lifelong intramuscular vitamin B12",
          "Iron supplementation",
          "Folate supplementation"
        ],
        "answer": 1,
        "layers": {
          "concept": "Pernicious anemia — lifelong parenteral B12",
          "discriminator": "Pernicious anaemia = loss of intrinsic factor → lifelong IM B12 (oral absorption blocked)",
          "trap": "Treatment misdirection — oral/folate over parenteral B12",
          "rule": "Pernicious anaemia → lifelong IM B12 (parenteral), not oral folate"
        }
      },
      {
        "q": "A 30-year-old man presents with intensely pruritic vesicles on his elbows, knees, and buttocks. Duodenal biopsy shows villous atrophy consistent with coeliac disease. Which medication most effectively controls the skin lesions?",
        "options": [
          "Prednisolone",
          "Oral antihistamines",
          "Methotrexate",
          "Dapsone"
        ],
        "answer": 3,
        "layers": {
          "concept": "Dermatitis herpetiformis — dapsone for skin lesions",
          "discriminator": "Pruritic vesicles (elbows/knees/buttocks) + coeliac = dermatitis herpetiformis → dapsone + gluten-free diet",
          "trap": "Treatment misdirection — steroids over dapsone",
          "rule": "Dermatitis herpetiformis → dapsone (skin) + gluten-free diet (disease)"
        }
      },
      {
        "q": "A 35-year-old man develops chronic diarrhoea, steatorrhoea, and megaloblastic anaemia 6 months after returning from an extended stay in South Asia. What is the most appropriate treatment?",
        "options": [
          "Gluten-free diet",
          "Ciprofloxacin alone",
          "Tetracycline and folate",
          "Vitamin B12 injection only"
        ],
        "answer": 2,
        "layers": {
          "concept": "Tropical sprue — tetracycline + folate",
          "discriminator": "Post-travel chronic diarrhoea + steatorrhoea + megaloblastic anaemia = tropical sprue → tetracycline + folate",
          "trap": "Treatment ladder — gluten-free diet (coeliac) reflex applied to tropical sprue",
          "rule": "Tropical sprue → tetracycline + folate (responds to antibiotics, unlike coeliac)"
        }
      },
      {
        "q": "A 55-year-old man who had a partial gastrectomy for gastric cancer 2 years ago develops fatigue. Blood film shows microcytic, hypochromic anaemia. What is the most likely cause?",
        "options": [
          "Iron deficiency anaemia",
          "Vitamin B12 deficiency",
          "Folate deficiency",
          "Haemolytic anaemia"
        ],
        "answer": 0,
        "layers": {
          "concept": "Post-gastrectomy — iron deficiency anaemia",
          "discriminator": "Post-gastrectomy microcytic hypochromic anaemia = iron deficiency (reduced acid + bypassed duodenum)",
          "trap": "Opposite — microcytic (iron) vs macrocytic (B12) post-gastrectomy anaemia",
          "rule": "Post-gastrectomy microcytic anaemia = iron deficiency; macrocytic = B12 deficiency"
        }
      },
      {
        "q": "A 28-year-old woman with chronic diarrhoea and weight loss has a negative anti-tTG IgA test, but coeliac disease is still suspected. Which additional test should be checked?",
        "options": [
          "Anti-gliadin antibody",
          "Serum vitamin B12",
          "Faecal elastase",
          "Total serum IgA level"
        ],
        "answer": 3,
        "layers": {
          "concept": "Coeliac disease — IgA deficiency causes false-negative anti-tTG",
          "discriminator": "Negative anti-tTG IgA + suspected coeliac → check total IgA (IgA deficiency causes false negatives)",
          "trap": "One-word discriminator — IgA deficiency behind a negative anti-tTG",
          "rule": "IgA deficiency → false-negative anti-tTG IgA → check total IgA, use IgG serology"
        }
      },
      {
        "q": "A 6-month-old exclusively breastfed infant develops a rash around the mouth and perineum, diarrhoea, and failure to thrive. Which deficiency is most likely?",
        "options": [
          "Iron deficiency",
          "Vitamin A deficiency",
          "Vitamin D deficiency",
          "Zinc deficiency"
        ],
        "answer": 3,
        "layers": {
          "concept": "Zinc deficiency — acrodermatitis enteropathica pattern",
          "discriminator": "Periorificial + acral rash + diarrhoea + failure to thrive in infancy = zinc deficiency",
          "trap": "Clinical Mimic — zinc (periorificial rash) vs other micronutrient deficiencies",
          "rule": "Zinc deficiency = periorificial/acral rash + diarrhoea + failure to thrive → zinc supplementation"
        }
      },
      {
        "q": "In a region of endemic iodine deficiency, a pregnant woman's newborn is at greatest risk of which condition?",
        "options": [
          "Congenital hypothyroidism (cretinism)",
          "Rickets",
          "Neural tube defect",
          "Scurvy"
        ],
        "answer": 0,
        "layers": {
          "concept": "Iodine deficiency — goitre and cretinism",
          "discriminator": "Maternal iodine deficiency → congenital hypothyroidism (cretinism) and goitre",
          "trap": "Opposite — iodine (thyroid) vs other micronutrient birth defects",
          "rule": "Iodine deficiency → goitre + cretinism (congenital hypothyroidism), preventable with iodised salt"
        }
      },
      {
        "q": "A 40-year-old man with severe anorexia is started on aggressive enteral nutrition after a period of starvation. Within 2 days he develops weakness and cardiac arrhythmia. Which electrolyte disturbance is the most likely cause?",
        "options": [
          "Hyperkalaemia",
          "Hypernatraemia",
          "Hypermagnesaemia",
          "Hypophosphataemia"
        ],
        "answer": 3,
        "layers": {
          "concept": "Refeeding syndrome — hypophosphataemia",
          "discriminator": "Rapid refeeding after starvation → insulin surge → intracellular shift → hypophosphataemia → arrhythmia",
          "trap": "Severity under-recognition — refeeding complication missed after starting feeds",
          "rule": "Refeeding syndrome = hypophosphataemia (and low K/Mg) after rapid refeeding → slow, monitored refeeding"
        }
      },
      {
        "q": "An alcoholic man presents confused with ataxia and ophthalmoplegia. Before administering intravenous glucose, which should be given first?",
        "options": [
          "Intravenous thiamine",
          "Intravenous glucose",
          "Naloxone",
          "Flumazenil"
        ],
        "answer": 0,
        "layers": {
          "concept": "Wernicke encephalopathy — thiamine before glucose",
          "discriminator": "Give thiamine BEFORE glucose in suspected Wernicke (glucose metabolism consumes thiamine, worsening the encephalopathy)",
          "trap": "Priority inversion — glucose before thiamine",
          "rule": "Wernicke (confusion+ataxia+ophthalmoplegia) → IV thiamine before glucose"
        }
      },
      {
        "q": "A 3-year-old child in a low-resource setting presents with night blindness and dry, thickened conjunctiva. Without treatment, what is the most feared progression?",
        "options": [
          "Corneal ulceration and blindness",
          "Retinal detachment",
          "Optic neuritis",
          "Glaucoma"
        ],
        "answer": 0,
        "layers": {
          "concept": "Vitamin A deficiency — xerophthalmia progressing to keratomalacia",
          "discriminator": "Night blindness + xerophthalmia = vitamin A deficiency → keratomalacia → corneal ulceration/blindness",
          "trap": "Severity under-recognition — night blindness downgraded without eye exam",
          "rule": "Vitamin A deficiency: night blindness → xerophthalmia → keratomalacia → blindness"
        }
      },
      {
        "q": "A 2-year-old child presents with generalised oedema, a distended abdomen, and a flaky-paint dermatitis with depigmented hair. Which form of malnutrition is this?",
        "options": [
          "Marasmus",
          "Kwashiorkor",
          "Rickets",
          "Scurvy"
        ],
        "answer": 1,
        "layers": {
          "concept": "Kwashiorkor — protein deficiency with oedema",
          "discriminator": "Oedema + flaky-paint dermatosis + depigmented hair = kwashiorkor (protein deficiency with adequate calories)",
          "trap": "Clinical Mimic — kwashiorkor (oedema) vs marasmus (wasting)",
          "rule": "Kwashiorkor = protein deficiency → oedema + fatty liver + flaky paint (marasmus = wasting, no oedema)"
        }
      },
      {
        "q": "A 12-month-old infant presents with severe wasting of muscle and subcutaneous fat, an 'old man' facies, and weight for age below the third centile — but no oedema. What is the diagnosis?",
        "options": [
          "Kwashiorkor",
          "Refeeding syndrome",
          "Marasmus",
          "Anorexia nervosa"
        ],
        "answer": 2,
        "layers": {
          "concept": "Marasmus — total calorie deficiency without oedema",
          "discriminator": "Severe wasting + no oedema = marasmus (total calorie deficiency)",
          "trap": "Clinical Mimic — marasmus (no oedema) vs kwashiorkor (oedema)",
          "rule": "Marasmus = total calorie deficiency → severe wasting, no oedema"
        }
      },
      {
        "q": "A 58-year-old strict vegan presents with progressive paraesthesia of the feet, loss of vibration sense, and an unsteady gait, with brisk knee reflexes. Which deficiency is most likely?",
        "options": [
          "Vitamin B12 deficiency",
          "Folate deficiency",
          "Iron deficiency",
          "Vitamin E deficiency"
        ],
        "answer": 0,
        "layers": {
          "concept": "Vitamin B12 deficiency — subacute combined degeneration of the cord",
          "discriminator": "Sensory (vibration/proprioception) loss + upper motor neuron signs = subacute combined degeneration = B12 deficiency",
          "trap": "Clinical Mimic — B12 (neurological) vs folate (no neuro)",
          "rule": "B12 deficiency → subacute combined degeneration (dorsal columns + corticospinal); folate has no neuro"
        }
      },
      {
        "q": "In assessing the nutritional status of an acutely ill hospitalised patient, which protein best reflects recent (short-term) nutritional change?",
        "options": [
          "Albumin",
          "Ferritin",
          "Transferrin",
          "Prealbumin (transthyretin)"
        ],
        "answer": 3,
        "layers": {
          "concept": "Nutritional assessment — prealbumin vs albumin",
          "discriminator": "Prealbumin has a short half-life (~2 days) → reflects recent nutritional change better than albumin",
          "trap": "Unit/Number — half-life (prealbumin 2 days vs albumin 20 days)",
          "rule": "Prealbumin (t½ ~2 days) reflects short-term nutrition; albumin (t½ ~20 days) is confounded by inflammation"
        }
      },
      {
        "q": "A patient on total parenteral nutrition for 3 weeks develops a fever and rigors. A central line is in situ. What is the most likely complication?",
        "options": [
          "Refeeding syndrome",
          "Catheter-related bloodstream infection",
          "Cholestatic liver injury",
          "Hyperglycaemia"
        ],
        "answer": 1,
        "layers": {
          "concept": "Total parenteral nutrition — catheter-related line sepsis",
          "discriminator": "TPN + fever/rigors + central line = catheter-related bloodstream infection",
          "trap": "Clinical Mimic — line sepsis vs metabolic TPN complications",
          "rule": "TPN fever/rigors = catheter-related infection → remove line + blood cultures"
        }
      },
      {
        "q": "A patient with a functional gastrointestinal tract requires nutritional support. Which feeding route is preferred and why?",
        "options": [
          "Parenteral nutrition, because it is more reliable",
          "Enteral nutrition, because it preserves gut mucosal integrity",
          "Parenteral nutrition, because it avoids aspiration",
          "Enteral nutrition, because it requires no access device"
        ],
        "answer": 1,
        "layers": {
          "concept": "Nutrition support — enteral preferred over parenteral",
          "discriminator": "Enteral preferred when the gut works — preserves mucosal integrity, fewer complications",
          "trap": "Treatment ladder — parenteral over enteral when the gut is functional",
          "rule": "Enteral > parenteral when GI tract is functional (preserves gut integrity, fewer complications)"
        }
      },
      {
        "q": "A 58-year-old man with chronic pancreatitis has steatorrhoea and weight loss despite eating. Which treatment most directly addresses the steatorrhoea?",
        "options": [
          "A low-fat diet alone",
          "Ursodeoxycholic acid",
          "Pancreatic enzyme replacement therapy with meals",
          "Octreotide"
        ],
        "answer": 2,
        "layers": {
          "concept": "Chronic pancreatitis — pancreatic enzyme replacement for steatorrhoea",
          "discriminator": "Chronic pancreatitis steatorrhoea → pancreatic enzyme replacement (lipase) with meals",
          "trap": "Treatment misdirection — diet alone over enzyme replacement",
          "rule": "Pancreatic steatorrhoea → pancreatic enzyme replacement (lipase) with meals"
        }
      },
      {
        "q": "A 50-year-old woman with coeliac disease remains symptomatic with persistent villous atrophy despite 12 months of strict gluten avoidance. Which complication should now be suspected?",
        "options": [
          "Pancreatic adenocarcinoma",
          "Ulcerative colitis",
          "Enteropathy-associated T-cell lymphoma",
          "Crohn disease"
        ],
        "answer": 2,
        "layers": {
          "concept": "Refractory coeliac disease — enteropathy-associated T-cell lymphoma",
          "discriminator": "Persistent villous atrophy despite strict gluten-free diet = refractory coeliac → suspect T-cell lymphoma",
          "trap": "Severity under-recognition — non-response to GFD dismissed as dietary lapse",
          "rule": "Coeliac unresponsive to gluten-free diet → consider enteropathy-associated T-cell lymphoma"
        }
      }
    ]
  },
  {
    "id": "oncology-genpath",
    "name": "Oncology",
    "questions": [
      {
        "q": "Chronic acid reflux in Barrett's oesophagus causes the normal squamous epithelium to be replaced by columnar (intestinal-type) epithelium. This transformation is best described as?",
        "options": [
          "Hyperplasia",
          "Metaplasia",
          "Hypertrophy",
          "Atrophy"
        ],
        "answer": 1,
        "layers": {
          "concept": "Metaplasia - reversible change of one differentiated cell type to another (Barrett's)",
          "discriminator": "Squamous -> columnar change in response to chronic reflux = metaplasia (a reversible change in differentiation)",
          "trap": "Confusing metaplasia (cell type change) with hyperplasia (increase in cell NUMBER) or hypertrophy (cell SIZE)",
          "rule": "Metaplasia = reversible change of cell type (e.g. Barrett's squamous->columnar); can proceed to dysplasia/carcinoma."
        }
      },
      {
        "q": "The uterine myometrium enlarges during pregnancy, and the prostate enlarges with benign prostatic hyperplasia in older men. Which mechanism best explains the uterine (muscle) growth compared with the prostate?",
        "options": [
          "The uterus grows mainly by hypertrophy (increase in cell size); the prostate grows mainly by hyperplasia (increase in cell number)",
          "Both grow purely by hyperplasia",
          "The uterus grows by hyperplasia; the prostate by metaplasia",
          "Both grow purely by hypertrophy"
        ],
        "answer": 0,
        "layers": {
          "concept": "Hypertrophy vs hyperplasia - differentiated cells (muscle) hypertrophy; labile cells (prostate) hyperplase",
          "discriminator": "Smooth muscle (permanent cells) can only hypertrophy; prostate epithelial cells can hyperplase",
          "trap": "Thinking all organs enlarge by the same mechanism - permanent cells (muscle) hypertrophy, labile cells (prostate) hyperplase",
          "rule": "Permanent cells (muscle) only hypertrophy; labile cells (prostate epithelium) hyperplase. Know which tissue can divide."
        }
      },
      {
        "q": "A malignant tumour shows marked pleomorphism, hyperchromatic nuclei, a high nuclear:cytoplasmic ratio, prominent nucleoli and numerous mitoses. This loss of differentiation is called?",
        "options": [
          "Metaplasia",
          "Anaplasia",
          "Dysplasia",
          "Hyperplasia"
        ],
        "answer": 1,
        "layers": {
          "concept": "Anaplasia - lack of differentiation, a hallmark of malignancy",
          "discriminator": "Pleomorphism + hyperchromasia + high N:C ratio + mitoses = anaplasia (malignant loss of differentiation)",
          "trap": "Calling dysplastic features anaplasia - anaplasia is full loss of differentiation seen in malignancy",
          "rule": "Anaplasia = lack of differentiation (pleomorphism, hyperchromasia, high N:C ratio) - a hallmark of malignancy."
        }
      },
      {
        "q": "On a cervical smear, squamous epithelial cells show nuclear atypia, loss of normal maturation and disordered architecture involving the FULL thickness of the epithelium, but WITHOUT invasion of the basement membrane. This is best described as?",
        "options": [
          "Invasive squamous carcinoma",
          "Carcinoma in situ (CIN 3)",
          "Metaplasia",
          "Atrophy"
        ],
        "answer": 1,
        "layers": {
          "concept": "Carcinoma in situ - full-thickness dysplasia without basement-membrane invasion",
          "discriminator": "Full-thickness epithelial atypia, no basement-membrane invasion = carcinoma in situ (pre-invasive)",
          "trap": "Calling full-thickness non-invasive change 'invasive cancer' - no basement-membrane invasion means CIS",
          "rule": "CIS = full-thickness dysplasia without basement-membrane invasion (e.g. cervical CIN 3). Pre-invasive; excision cures."
        }
      },
      {
        "q": "On histology of an area of recent myocardial infarction, sheets of cells show loss of nuclei, eosinophilic cytoplasm, and an intense neutrophil infiltrate with an inflammatory response. This pattern of cell death is best described as?",
        "options": [
          "Apoptosis",
          "Coagulative necrosis",
          "Liquefactive necrosis",
          "Caseous necrosis"
        ],
        "answer": 1,
        "layers": {
          "concept": "Coagulative necrosis - ischaemic cell death in solid organs (MI) with inflammation",
          "discriminator": "Recent MI: cell swelling, loss of nuclei, eosinophilia + acute inflammation = coagulative necrosis (ischaemia)",
          "trap": "Calling ischaemic MI necrosis 'liquefactive' (brain) or 'caseous' (TB)",
          "rule": "Coagulative necrosis = ischaemic death in solid organs (MI) preserving architecture with acute inflammation; distinguish from liquefactive/caseous/fat."
        }
      },
      {
        "q": "A child develops retinoblastoma affecting both eyes at an early age, and a family member has the same condition. A defective gene normally functions as a 'gatekeeper' to restrain cell growth. Which class does this gene belong to, and which gene is it?",
        "options": [
          "Oncogene; MYC",
          "Tumour suppressor gene; Rb (retinoblastoma gene)",
          "Oncogene; RAS",
          "Tumour suppressor gene; BCR-ABL"
        ],
        "answer": 1,
        "layers": {
          "concept": "Rb tumour suppressor - loss of function allows cancer; hereditary retinoblastoma",
          "discriminator": "Hereditary bilateral retinoblastoma = loss of Rb tumour suppressor (Knudson two-hit); Rb restrains cell cycle",
          "trap": "Confusing a loss-of-function gatekeeper (tumour suppressor) with a gain-of-function oncogene",
          "rule": "Tumour suppressors (Rb, p53) restrain growth; loss of function promotes cancer. Oncogenes gain function to drive proliferation."
        }
      },
      {
        "q": "A breast cancer shows amplification of a gene encoding a growth-factor receptor tyrosine kinase, targeted by the drug trastuzumab. Which gene is this, and how do oncogenes generally differ from tumour suppressors?",
        "options": [
          "HER2/neu; oncogenes act by gain of function, tumour suppressors by loss of function",
          "Rb; oncogenes act by loss of function",
          "BCR-ABL; oncogenes and suppressors both act by loss of function",
          "p53; oncogenes act by loss of function"
        ],
        "answer": 0,
        "layers": {
          "concept": "HER2/neu oncogene - gain of function (amplification) drives breast cancer",
          "discriminator": "HER2/neu amplification in breast cancer = activated oncogene (gain of function); targeted by trastuzumab",
          "trap": "Mixing up which genes gain vs lose function",
          "rule": "Oncogenes (HER2/neu, RAS, MYC, BCR-ABL) drive cancer by gain of function; tumour suppressors (Rb, p53) by loss of function."
        }
      },
      {
        "q": "A colorectal carcinoma is reported as T3 N1 M0. What do these designations describe, and what distinguishes it from tumour grading?",
        "options": [
          "TNM describes the anatomic STAGE (tumour size/depth, nodes, metastasis); grading describes the degree of differentiation",
          "TNM is the histologic grade (differentiation)",
          "TNM only describes metastasis",
          "Grading and staging are the same thing"
        ],
        "answer": 0,
        "layers": {
          "concept": "Staging (TNM) vs grading - anatomic extent vs differentiation",
          "discriminator": "TNM = stage (tumour, node, metastasis anatomic extent); grade = histologic differentiation (well/moderate/poor)",
          "trap": "Using grade and stage interchangeably - grade = differentiation, stage = extent",
          "rule": "TNM = anatomic stage (tumour, node, metastasis); grade = histologic differentiation. Know the distinction for prognosis."
        }
      },
      {
        "q": "A patient with cirrhosis develops hepatocellular carcinoma and his alpha-fetoprotein (AFP) is markedly elevated. Which statement about tumour markers is correct?",
        "options": [
          "AFP is useful as a screening/monitoring marker for hepatocellular carcinoma, but is not 100% specific",
          "AFP is a specific marker only for colorectal cancer",
          "Tumour markers alone can definitively diagnose cancer",
          "CEA is the marker for hepatocellular carcinoma"
        ],
        "answer": 0,
        "layers": {
          "concept": "Tumour markers - AFP for hepatocellular carcinoma; markers are non-specific, not diagnostic alone",
          "discriminator": "AFP raised in hepatocellular carcinoma; tumour markers support but do not alone diagnose cancer",
          "trap": "Treating a tumour marker as diagnostic in isolation or assigning the wrong marker",
          "rule": "AFP = hepatocellular carcinoma; CEA = colorectal; PSA = prostate. Markers are non-specific and corroborate, never replace biopsy."
        }
      },
      {
        "q": "A colorectal carcinoma is found to have multiple liver deposits. Through which route did the tumour most likely reach the liver, and what is the value of a sentinel lymph node biopsy in cancer?",
        "options": [
          "Via the portal vein (portal circulation); sentinel node = first node draining the tumour, for staging",
          "Direct haematogenous spread via the pulmonary artery",
          "Lymphatic spread only, never blood",
          "Sentinel node = the largest tumour deposit for debulking"
        ],
        "answer": 0,
        "layers": {
          "concept": "Portal vein spread of bowel cancer to the liver; sentinel node concept",
          "discriminator": "Colorectal cancer metastasizes to the liver via the portal vein; sentinel node is the first draining node for staging",
          "trap": "Confusing the portal route with pulmonary/systemic spread, or misusing sentinel-node biopsy as therapy",
          "rule": "Colorectal cancer spreads to liver via the portal vein. Sentinel node = first regional node draining the tumour, used for staging."
        }
      },
      {
        "q": "A patient with HIV/AIDS has multiple, solitary, darkly pigmented plaques that evolve into nodular, bluish, painful skin lesions. What is the most likely diagnosis?",
        "options": [
          "Malignant melanoma",
          "Kaposi sarcoma",
          "Bacillary angiomatosis",
          "Basal cell carcinoma"
        ],
        "answer": 1,
        "layers": {
          "concept": "Kaposi sarcoma - HIV-associated vascular tumour (HHV-8), pigmented plaques/nodules",
          "discriminator": "AIDS + dark pigmented/nodular skin lesions = Kaposi sarcoma (HHV-8/vascular tumour)",
          "trap": "Calling pigmented nodules melanoma - in an AIDS patient the classic lesion is Kaposi sarcoma (HHV-8)",
          "rule": "Kaposi sarcoma: HHV-8 vascular tumour in HIV/AIDS (pigmented plaques/nodules); treat with ART (+ local/systemic Tx)."
        }
      },
      {
        "q": "A 40-year-old woman has spontaneous blood-stained discharge from one nipple. On examination NO lump is palpable and mammography is otherwise unremarkable. Which structure is most likely responsible?",
        "options": [
          "Intraductal papilloma",
          "Ductal carcinoma in situ",
          "Paget's disease",
          "Fibrocystic disease"
        ],
        "answer": 0,
        "layers": {
          "concept": "Intraductal papilloma - bloody nipple discharge without a palpable lump",
          "discriminator": "Spontaneous blood-stained nipple discharge, no lump = intraductal papilloma (benign papillary duct lesion)",
          "trap": "Assuming any bloody nipple discharge is cancer - with no lump it is most likely a benign intraductal papilloma",
          "rule": "Spontaneous blood-stained nipple discharge without a lump = intraductal papilloma (benign); exclude ductal carcinoma in situ."
        }
      },
      {
        "q": "A 35-year-old woman with MEN 2A develops a thyroid lump and chronic diarrhoea; she undergoes total thyroidectomy. Which type of thyroid cancer is most likely, and what explains the diarrhoea?",
        "options": [
          "Papillary carcinoma - psammoma bodies, TBx",
          "Medullary carcinoma - arising from parafollicular C cells, needs calcitonin; diarrhoea from calcitonin/peptides",
          "Follicular carcinoma - haematogenous spread to bone",
          "Anaplastic carcinoma - rapidly lethal, elderly"
        ],
        "answer": 1,
        "layers": {
          "concept": "Medullary thyroid carcinoma - MEN 2A, C-cell origin, calcitonin (causes diarrhoea)",
          "discriminator": "MEN 2A + thyroid lump + diarrhoea = medullary carcinoma (C cells, calcitonin); RET mutation",
          "trap": "Choosing papillary (the common thyroid cancer) - the MEN 2A + diarrhoea + C-cell pattern indicates medullary",
          "rule": "Medullary thyroid carcinoma: C-cell/calcitonin origin, MEN 2A/2B, diarrhoea; total thyroidectomy, calcitonin marker, RET testing."
        }
      },
      {
        "q": "A 4-year-old child presents with a large, painless, palpable abdominal mass, hypertension and microscopic haematuria. Imaging shows a renal mass. What is the most common intra-abdominal solid organ tumour of childhood and its characteristic microscopic feature?",
        "options": [
          "Wilms tumour (nephroblastoma) - triphasic blastemal/epithelial/stromal cells",
          "Neuroblastoma - rosettes with calcification",
          "Rhabdomyosarcoma - strap cells",
          "Hepatoblastoma - fetal hepatocytes"
        ],
        "answer": 0,
        "layers": {
          "concept": "Wilms tumour - most common intra-abdominal solid organ tumour of childhood (nephroblastoma)",
          "discriminator": "Child + renal mass + abdominal mass = Wilms tumour (nephroblastoma), most common childhood renal/intra-abdominal solid tumour",
          "trap": "Choosing neuroblastoma (adrenal, rosettes) vs Wilms (renal, triphasic) - the renal mass in a young child favours Wilms",
          "rule": "Wilms tumour (nephroblastoma): most common intra-abdominal solid organ tumour of childhood; triphasic histology; treat with surgery + chemo."
        }
      },
      {
        "q": "A 40-year-old woman has a large (6-7 cm), firm, mobile breast lump in the upper outer quadrant that has grown rapidly, but no axillary lymph nodes are palpable. Core biopsy shows a fibroepithelial tumour with prominent stromal overgrowth. What is the most likely diagnosis?",
        "options": [
          "Fibroadenoma",
          "Cystosarcoma phyllodes",
          "Invasive ductal carcinoma",
          "Paget's disease of the nipple"
        ],
        "answer": 1,
        "layers": {
          "concept": "Phyllodes tumour - large fibroepithelial tumour with stromal overgrowth (cystosarcoma phyllodes)",
          "discriminator": "Large rapidly growing fibroepithelial breast tumour with stromal overgrowth = phyllodes (cystosarcoma phyllodes)",
          "trap": "Calling a large fibroepithelial tumour a fibroadenoma - phyllodes is distinguished by size, rapid growth and stromal overgrowth",
          "rule": "Phyllodes (cystosarcoma phyllodes): large fibroepithelial tumour with stromal overgrowth; excise with margins (spreads by blood, not lymph)."
        }
      },
      {
        "q": "A woman presents with a tender, cord-like, linear band beneath the skin of the breast/chest wall. What is the pathophysiology of Mondor's disease?",
        "options": [
          "Actinomycosis of the breast",
          "Duct ectasia",
          "Lymphangitis of the breast",
          "Thrombophlebitis of the superficial (thoracoepigastric) veins"
        ],
        "answer": 3,
        "layers": {
          "concept": "Mondor's disease - superficial thrombophlebitis of breast/chest wall veins",
          "discriminator": "Tender cord-like vein on the breast/chest wall = Mondor's disease (superficial thrombophlebitis)",
          "trap": "Attributing the cord to infection (actinomycosis/lymphangitis) when it is venous thrombophlebitis",
          "rule": "Mondor's disease = superficial thrombophlebitis of breast/chest wall veins; self-limiting, benign."
        }
      },
      {
        "q": "Which type of colorectal polyp has the HIGHEST malignant potential and is most likely to harbour carcinoma?",
        "options": [
          "Hamartomatous polyp",
          "Inflammatory polyp",
          "Tubular adenoma",
          "Villous adenoma"
        ],
        "answer": 3,
        "layers": {
          "concept": "Villous adenoma - highest malignant potential of colorectal polyps",
          "discriminator": "Villous adenomas carry the highest risk of malignant transformation among colorectal polyps (adenoma-carcinoma sequence)",
          "trap": "Choosing a benign polyp type - villous (not hamartomatous/inflammatory) adenoma has the highest cancer risk",
          "rule": "Villous adenoma has the highest malignant potential; adenomas progress to carcinoma (adenoma-carcinoma sequence). Hamartomatous/inflammatory polyps are low risk."
        }
      },
      {
        "q": "A 45-year-old woman presents with headaches and new-onset seizures. Imaging shows a well-circumscribed extra-axial tumour arising from and irritating the meninges, and histology reveals psammoma bodies. What is the most likely diagnosis?",
        "options": [
          "Meningioma",
          "Metastatic carcinoma",
          "Schwannoma",
          "Glioblastoma"
        ],
        "answer": 0,
        "layers": {
          "concept": "Meningioma - benign extra-axial meningeal tumour with psammoma bodies",
          "discriminator": "Extra-axial meningeal tumour + psammoma bodies = meningioma (generally benign, female predominance)",
          "trap": "Calling a psammoma-body meningioma a glioma or metastasis - extra-axial location + psammoma bodies localize it",
          "rule": "Meningioma: benign extra-axial meningeal tumour (female predominance) with psammoma bodies; surgical excision."
        }
      },
      {
        "q": "A 60-year-old heavy smoker with a central lung mass and hilar lymphadenopathy develops Cushing-like features with a low potassium (hypokalaemic alkalosis) and proximal muscle weakness. Which lung cancer subtype is most associated with this paraneoplastic picture, and what does it produce?",
        "options": [
          "Squamous cell carcinoma - PTHrP",
          "Small cell carcinoma - ectopic ACTH",
          "Adenocarcinoma - ADH",
          "Small cell carcinoma - PTHrP only"
        ],
        "answer": 1,
        "layers": {
          "concept": "Small cell lung cancer - ectopic ACTH causing Cushing's/hypokalaemic alkalosis",
          "discriminator": "Smoker + central mass + Cushing's/hypokalaemic alkalosis = small cell carcinoma with ectopic ACTH (paraneoplastic)",
          "trap": "Assigning hypercalcaemia to small cell - ACTH (Cushing's) is small cell; PTHrP (hypercalcaemia) is squamous cell",
          "rule": "Small cell lung cancer -> ectopic ACTH (Cushing's/hypokalaemia) and ADH (hyponatraemia). Squamous cell -> PTHrP (hypercalcaemia)."
        }
      },
      {
        "q": "A 50-year-old overweight woman has progressive painless obstructive jaundice, weight loss, and a palpable distended gallbladder (Courvoisier sign). Imaging shows a mass in the head of the pancreas. What is the most likely diagnosis?",
        "options": [
          "Pancreatic adenocarcinoma of the head",
          "Chronic pancreatitis",
          "Choledocholithiasis",
          "Hepatocellular carcinoma"
        ],
        "answer": 0,
        "layers": {
          "concept": "Pancreatic head adenocarcinoma - painless obstructive jaundice + Courvoisier sign",
          "discriminator": "Painless jaundice + Courvoisier (palpable gallbladder) + weight loss + pancreatic head mass = adenocarcinoma",
          "trap": "Choosing gallstones (painful jaundice, no Courvoisier) - painless jaundice + palpable GB + head mass indicates pancreatic cancer",
          "rule": "Pancreatic head adenocarcinoma: painless obstructive jaundice, Courvoisier sign, weight loss; poor prognosis. CA 19-9 may be raised."
        }
      },
      {
        "q": "A 55-year-old man with cirrhosis and chronic hepatitis B has worsening abdominal pain, weight loss and a sharply elevated alpha-fetoprotein (AFP). Imaging shows a vascular liver mass. What is the most likely diagnosis?",
        "options": [
          "Hepatocellular carcinoma",
          "Metastatic colorectal cancer",
          "Hepatic adenoma",
          "Haemangioma"
        ],
        "answer": 0,
        "layers": {
          "concept": "Hepatocellular carcinoma - cirrhosis/HBV + markedly raised AFP + vascular liver mass",
          "discriminator": "Cirrhosis/HBV + very high AFP + vascular mass = hepatocellular carcinoma (surveillance via AFP/ultrasound)",
          "trap": "Calling the AFP-poor mass a metastasis/benign lesion - marked AFP + vascular mass in cirrhosis = HCC",
          "rule": "HCC: cirrhosis (HBV/HCV/NASH) + markedly raised AFP + vascular liver mass; surveil high-risk patients with ultrasound + AFP."
        }
      },
      {
        "q": "A 55-year-old woman has a hard, irregular, painless breast lump that is fixed to skin, with overlying peau d'orange. Biopsy shows cords of malignant cells invading the stroma, and the tumour is oestrogen-receptor positive. Which single description is most accurate?",
        "options": [
          "Invasive ductal carcinoma - the most common invasive breast cancer; hormone-receptor status guides endocrine therapy",
          "Phyllodes tumour - pure stromal neoplasm",
          "Ductal carcinoma in situ - non-invasive by definition",
          "Fibroadenoma - benign, mobile, well-circumscribed"
        ],
        "answer": 0,
        "layers": {
          "concept": "Invasive ductal carcinoma - most common breast cancer; ER/PR status guides therapy",
          "discriminator": "Hard fixed breast lump + stromal invasion + ER+ = invasive ductal carcinoma; receptor status drives anti-oestrogen therapy",
          "trap": "Confusing invasive ductal carcinoma with DCIS (non-invasive) or benign lesions (fibroadenoma)",
          "rule": "IDC = most common invasive breast cancer; ER/PR+ -> endocrine therapy, HER2+ -> trastuzumab. Stromal invasion distinguishes it from DCIS."
        }
      },
      {
        "q": "A 65-year-old has altered bowel habit, rectal bleeding and an 'apple-core' lesion on barium enema. Progression from a benign adenomatous polyp to invasive colorectal carcinoma over years is best described by which concept?",
        "options": [
          "The adenoma-carcinoma sequence (accumulation of mutations, e.g. APC, KRAS, p53)",
          "Direct haematogenous spread from a normal gland",
          "Hormonal stimulation of a hamartoma",
          "A single inherited germline mutation with no intermediate steps"
        ],
        "answer": 0,
        "layers": {
          "concept": "Adenoma-carcinoma sequence - stepwise genetic progression in colorectal cancer",
          "discriminator": "Apple-core colon cancer arises from adenomatous polyps via the adenoma-carcinoma sequence (APC, KRAS, p53 mutations)",
          "trap": "Ignoring the polyp-to-cancer progression - colorectal cancer arises via the adenoma-carcinoma sequence",
          "rule": "Colorectal cancer develops from adenomas via the adenoma-carcinoma sequence (APC, KRAS, p53); colonoscopic polypectomy prevents it."
        }
      },
      {
        "q": "A 40-year-old has a high-grade cervical lesion and tests positive for high-risk HPV. Which oncogenic mechanism explains HPV-associated cervical carcinogenesis?",
        "options": [
          "HPV E6 and E7 inactivate the p53 and Rb tumour suppressors",
          "HPV stimulates thyroid growth",
          "HPV encodes a tyrosine kinase receptor like HER2",
          "HPV causes a gain-of-function RAS mutation directly"
        ],
        "answer": 0,
        "layers": {
          "concept": "HPV oncogenesis - E6/E7 inactivate p53 (E6) and Rb (E7)",
          "discriminator": "High-risk HPV (16/18) drives cervical cancer via E6 (p53 degradation) and E7 (Rb inactivation)",
          "trap": "Wrongly attributing HPV to hormone/growth-receptor mechanisms - E6/E7 inactivation of p53/Rb is the key",
          "rule": "High-risk HPV E6/E7 inactivate p53 and Rb -> cervical carcinogenesis; screening (cytology/HPV) + vaccination prevent."
        }
      },
      {
        "q": "A 70-year-old man with advanced prostate cancer has new-onset back pain and a raised PSA. A bone scan shows 'hot spots' in the lumbar spine and pelvis. Which statement about prostate cancer bone metastases is correct?",
        "options": [
          "Metastases are typically OSTEOBLASTIC with a raised PSA; back pain may signal spinal cord compression",
          "Metastases are purely osteolytic with a normal PSA",
          "Prostate cancer rarely metastasizes to bone",
          "PSA is a marker for breast, not prostate, cancer"
        ],
        "answer": 0,
        "layers": {
          "concept": "Prostate cancer - osteoblastic bone metastases, raised PSA, cord-compression risk",
          "discriminator": "Prostate cancer + back pain + raised PSA + hot spots = osteoblastic metastases; exclude cord compression",
          "trap": "Calling prostate bone lesions osteolytic or dismissing PSA - they are sclerotic with a high PSA",
          "rule": "Prostate cancer -> osteoblastic bone metastases + raised PSA; new back pain -> exclude spinal cord compression (radiotherapy/ADT)."
        }
      }
    ]
  },
  {
    "id": "ophthalmology",
    "name": "Ophthalmology",
    "questions": [
      {
        "q": "A 12-year-old boy has recurrent seasonal eye itching and redness, worse in summer, with conjunctival hyperaemia, cobblestone papillae on the upper tarsal conjunctiva, punctate epithelial erosions on fluorescein, and pain on eye movement. Visual acuity is 6/6. Diagnosis?",
        "options": [
          "Bacterial keratitis",
          "Bacterial conjunctivitis",
          "Viral conjunctivitis",
          "Vernal keratoconjunctivitis (spring catarrh)"
        ],
        "answer": 3,
        "layers": {
          "concept": "Vernal keratoconjunctivitis - cobblestone papillae + seasonal, VA preserved",
          "discriminator": "Cobblestone (giant) papillae on upper tarsus + seasonal itch + preserved VA = vernal KC",
          "trap": "Mistaking cobblestone papillae for infective conjunctivitis or keratitis",
          "rule": "Vernal KC: cobblestone papillae on upper tarsus, seasonal, itching, preserved VA; mast-cell stabilisers/antihistamines + topical steroids for flares."
        }
      },
      {
        "q": "A long-standing diabetic with proliferative retinopathy develops a retinal detachment with visible vitreous haemorrhage and traction bands. Definitive management?",
        "options": [
          "Panretinal photocoagulation alone",
          "Pars plana vitrectomy",
          "Intravitreal anti-VEGF injection alone",
          "Observation with glycaemic control"
        ],
        "answer": 1,
        "layers": {
          "concept": "Diabetic tractional retinal detachment - vitrectomy",
          "discriminator": "Fibrovascular traction + vitreous haemorrhage causing RD in PDR = vitrectomy",
          "trap": "Treating established tractional RD with laser or anti-VEGF alone",
          "rule": "Tractional RD in PDR needs pars plana vitrectomy; PRP and anti-VEGF are adjuncts, not definitive once detached."
        }
      },
      {
        "q": "A 30-year-old presents after an alkali splash to the eye with conjunctival blanching and corneal haze. The single most urgent immediate step is:",
        "options": [
          "Copious immediate irrigation with water or saline",
          "Instil topical antibiotic drops first",
          "Give a cycloplegic drop first",
          "Measure the pH, then decide"
        ],
        "answer": 0,
        "layers": {
          "concept": "Chemical eye injury - immediate copious irrigation is the priority",
          "discriminator": "Any chemical eye injury: irrigate copiously FIRST, before anything else (even before pH)",
          "trap": "Delaying irrigation to measure pH or instil drops first",
          "rule": "For any chemical eye injury, irrigate copiously and immediately; do not delay for pH testing or topical medications."
        }
      },
      {
        "q": "A 68-year-old with acute angle-closure glaucoma has markedly elevated intraocular pressure unresponsive to initial topical and oral therapy. Which agent most rapidly lowers IOP by an osmotic mechanism?",
        "options": [
          "Oral acetazolamide alone",
          "Intravenous mannitol",
          "Topical timolol alone",
          "Oral glycerin"
        ],
        "answer": 1,
        "layers": {
          "concept": "Acute angle-closure glaucoma - IV mannitol for rapid osmotic IOP reduction",
          "discriminator": "Severe AACG with very high IOP -> IV mannitol (osmotic agent) for rapid reduction",
          "trap": "Relying on topical/oral agents alone when IOP is dangerously high",
          "rule": "In AACG with dangerously high IOP, give IV mannitol for rapid osmotic reduction; definitive treatment is laser peripheral iridotomy after pressure control."
        }
      },
      {
        "q": "In acute angle-closure glaucoma, pilocarpine constricts the pupil and opens the angle. What is its mechanism of action?",
        "options": [
          "Beta-2 agonist that increases aqueous outflow",
          "Direct muscarinic agonist contracting ciliary muscle and sphincter, pulling the iris open",
          "Alpha-1 agonist that dilates the pupil",
          "Carbonic anhydrase inhibitor reducing aqueous production"
        ],
        "answer": 1,
        "layers": {
          "concept": "Pilocarpine - direct miotic (muscarinic agonist) in AACG",
          "discriminator": "Pilocarpine is a direct-acting miotic: contracts ciliary muscle (opens angle) and sphincter (miosis), breaking the pupillary block",
          "trap": "Confusing pilocarpine with a beta-blocker or sympathomimetic",
          "rule": "Pilocarpine is a direct muscarinic agonist; in AACG it constricts the pupil and contracts the ciliary muscle to open the angle. (Avoid in uveitis.)"
        }
      },
      {
        "q": "A 19-year-old is struck in the eye with a ball and develops layering of blood in the anterior chamber (hyphema). Mainstay of acute management?",
        "options": [
          "Urgent paracentesis of the chamber",
          "Bed rest with head elevation, eye shield, and avoidance of aspirin/NSAIDs",
          "Immediate topical steroid drops",
          "Oral anticoagulation to prevent clotting"
        ],
        "answer": 1,
        "layers": {
          "concept": "Traumatic hyphema - bed rest, elevation, shield, avoid anticoagulants",
          "discriminator": "Hyphema: rest + head-up + shield + avoid aspirin/NSAID (re-bleed risk); never paracentesis routinely",
          "trap": "Doing a chamber paracentesis or giving anticoagulants",
          "rule": "Traumatic hyphema: bed rest, head elevation, eye shield, avoid aspirin/NSAIDs; watch for re-bleed (raises IOP). Do not give anticoagulants."
        }
      },
      {
        "q": "A 70-year-old with hypertension and diabetes has sudden, painless, unilateral visual loss. Fundoscopy shows widespread flame-shaped haemorrhages, dilated tortuous retinal veins, cotton-wool spots and disc oedema ('blood and thunder'). Most likely diagnosis?",
        "options": [
          "Central retinal artery occlusion",
          "Central retinal vein occlusion",
          "Vitreous haemorrhage",
          "Retinal detachment"
        ],
        "answer": 1,
        "layers": {
          "concept": "Central retinal vein occlusion - 'blood and thunder' fundus",
          "discriminator": "Sudden painless loss + dilated tortuous veins + flame haemorrhages + disc oedema = CRVO",
          "trap": "Confusing CRVO (venous, haemorrhagic) with CRAO (pale retina, cherry-red spot)",
          "rule": "CRVO: sudden painless loss with dilated tortuous veins, flame haemorrhages, cotton-wool spots and disc oedema; manage vascular risk factors and macular oedema."
        }
      },
      {
        "q": "A patient has sudden, painless, monocular visual loss. Which typically presents WITH pain on eye movement and is therefore NOT in the 'painless' differential?",
        "options": [
          "Central retinal artery occlusion",
          "Central retinal vein occlusion",
          "Rhegmatogenous retinal detachment",
          "Optic neuritis"
        ],
        "answer": 3,
        "layers": {
          "concept": "Sudden vision loss - optic neuritis is painful; the others are painless",
          "discriminator": "Painless monocular loss = CRAO/CRVO/vitreous haemorrhage/RD; optic neuritis adds pain on eye movement",
          "trap": "Including optic neuritis in the painless differential",
          "rule": "Painless sudden monocular loss: CRAO, CRVO, vitreous haemorrhage, retinal detachment. Optic neuritis presents with pain on eye movement."
        }
      },
      {
        "q": "A diabetic with proliferative retinopathy reports a sudden shower of floaters and a dark veil over one eye with poor vision. The red reflex is absent and the fundus cannot be seen. Most likely diagnosis?",
        "options": [
          "Central retinal artery occlusion",
          "Vitreous haemorrhage",
          "Anterior uveitis",
          "Acute angle-closure glaucoma"
        ],
        "answer": 1,
        "layers": {
          "concept": "Vitreous haemorrhage - sudden floaters + obscured fundus, absent red reflex",
          "discriminator": "Sudden floaters + veiled vision + absent red reflex/fundus view = vitreous haemorrhage",
          "trap": "Assuming a normal fundus when the red reflex is absent",
          "rule": "Vitreous haemorrhage: sudden floaters, dark veil, absent red reflex, fundus not seen; urgent scan to rule out retinal tear/detachment."
        }
      },
      {
        "q": "A myopic 55-year-old notices flashes of light, a shower of floaters, and then a shadow/curtain descending over the temporal visual field of one eye. Most appropriate next step?",
        "options": [
          "Reassure and review in 2 weeks",
          "Urgent ophthalmological assessment for possible retinal detachment",
          "Start topical antibiotics",
          "Prescribe reading glasses"
        ],
        "answer": 1,
        "layers": {
          "concept": "Rhegmatogenous retinal detachment - flashes + floaters + curtain",
          "discriminator": "Flashes + floaters + curtain in a myope = rhegmatogenous RD until proven otherwise; urgent",
          "trap": "Dismissing flashes/floaters as benign without excluding a tear/detachment",
          "rule": "Flashes + floaters + a curtaining shadow, especially in a myope, indicates rhegmatogenous RD; urgent ophthalmology review (surgery: scleral buckle/vitrectomy)."
        }
      },
      {
        "q": "A 22-year-old reports difficulty seeing at night since childhood and progressive narrowing of the visual field. Fundoscopy shows bony spicule pigmentation, attenuated vessels and waxy pallor of the disc. Diagnosis?",
        "options": [
          "Age-related macular degeneration",
          "Retinitis pigmentosa",
          "Central serous retinopathy",
          "Diabetic retinopathy"
        ],
        "answer": 1,
        "layers": {
          "concept": "Retinitis pigmentosa - night blindness + tunnel vision + bone spicules",
          "discriminator": "Night blindness + tunnel (ring) vision + bone-spicule pigment + attenuated vessels = RP",
          "trap": "Confusing RP (peripheral, night) with macular (central) diseases",
          "rule": "RP: early night blindness, tunnel vision, bone-spicule pigment, attenuated vessels, waxy disc; inherited rod-cone dystrophy."
        }
      },
      {
        "q": "A 78-year-old has gradually worsening central blurring and distortion (metamorphopsia) with difficulty reading. Most appropriate initial investigation to monitor disease activity at home?",
        "options": [
          "Amsler grid testing",
          "Tonometry",
          "Colour vision testing",
          "Fluorescein angiography routinely at home"
        ],
        "answer": 0,
        "layers": {
          "concept": "Age-related macular degeneration - Amsler grid for home monitoring",
          "discriminator": "Central distortion in an elderly patient -> suspect AMD; Amsler grid monitors for conversion/wet AMD",
          "trap": "Using tonometry or colour testing as the AMD monitoring tool",
          "rule": "AMD: central loss/distortion; Amsler grid is the home monitoring tool for wet conversion, treated with intravitreal anti-VEGF."
        }
      },
      {
        "q": "An 80-year-old with AMD develops rapid central vision loss and distortion. OCT shows subretinal fluid and new vessels under the macula. Which statement is correct?",
        "options": [
          "This is dry AMD and requires antioxidant vitamins only",
          "This is wet (neovascular) AMD and is treated with intravitreal anti-VEGF agents",
          "This is wet AMD and is treated with oral antibiotics",
          "This is dry AMD and requires urgent laser photocoagulation"
        ],
        "answer": 1,
        "layers": {
          "concept": "Wet (neovascular) AMD - anti-VEGF; dry AMD is atrophic/drusen",
          "discriminator": "New subretinal fluid/neovascular membrane + rapid loss = wet AMD -> anti-VEGF",
          "trap": "Treating wet AMD as dry (vitamins only) or with antibiotics",
          "rule": "Wet AMD (neovascular, subretinal fluid/haemorrhage, rapid loss) is treated with intravitreal anti-VEGF; dry AMD is atrophic with drusen."
        }
      },
      {
        "q": "A 3-month-old has persistent watery discharge and tearing from one eye since birth, with mild medial canthal wetness but no redness or mass. Usual management?",
        "options": [
          "Immediate surgical dacryocystorhinostomy",
          "Conservative: massage + observe; most resolve by 1 year, probing if persistent",
          "Topical antibiotics indefinitely",
          "Oral antihistamines"
        ],
        "answer": 1,
        "layers": {
          "concept": "Congenital nasolacrimal duct obstruction - massage + observe",
          "discriminator": "Neonatal watery eye without mass/redness = congenital NLDO; conservative first (massage), resolves <1y",
          "trap": "Operating or probing immediately in an uncomplicated neonate",
          "rule": "Congenital NLDO: lacrimal massage and observation; most resolve by age 1. Probing if persistent beyond 12 months."
        }
      },
      {
        "q": "A 35-year-old has a mild red, mildly tender eye with localized injected vessels that blanch on phenylephrine, and no vision loss. A 60-year-old with rheumatoid arthritis has a severe boring eye pain, a violaceous area of injected sclera that does NOT blanch, and decreased vision. Which distinction is correct?",
        "options": [
          "Both are scleritis; both need systemic immunosuppression",
          "The first is episcleritis (benign, blanches, self-limited); the second is scleritis (severe, violaceous, systemic association)",
          "The first is scleritis; the second is episcleritis",
          "Both are episcleritis and need only lubricants"
        ],
        "answer": 1,
        "layers": {
          "concept": "Episcleritis vs scleritis - phenylephrine blanching distinguishes them",
          "discriminator": "Blanching injected vessels + mild = episcleritis; non-blanching violaceous + severe pain/vision loss = scleritis",
          "trap": "Equating the two or missing the systemic association of scleritis",
          "rule": "Episcleritis: blanching vessels, mild, self-limited. Scleritis: violaceous non-blanching, severe pain, vision threat, systemic disease (RA); needs systemic therapy."
        }
      },
      {
        "q": "A 28-year-old with untreated anterior uveitis (iritis) returns with a fixed, irregular pupil and glare. What complication has developed, and what helps prevent it?",
        "options": [
          "Cataract; prevent with early surgery",
          "Posterior synechiae (iris adhered to lens); a cycloplegic (e.g. atropine) helps prevent/adhesiolyse",
          "Retinal detachment; prevent with laser",
          "Glaucoma; prevent with miotics"
        ],
        "answer": 1,
        "layers": {
          "concept": "Anterior uveitis complication - posterior synechiae; cycloplegic prevents",
          "discriminator": "Recurrent/untreated iritis -> posterior synechiae (pupil fixed/irregular); cycloplegics prevent by dilating and resting the iris",
          "trap": "Forgetting the cycloplegic in anterior uveitis (steroids alone risk synechiae)",
          "rule": "Anterior uveitis: treat inflammation with steroids AND a cycloplegic to prevent posterior synechiae (iris-lens adhesions causing a fixed irregular pupil)."
        }
      },
      {
        "q": "A 6-week-old infant is found to have a dense white pupil (leukocoria) and poor visual fixation in one eye. What is the most important principle in management?",
        "options": [
          "Observe until school age; cataracts in infants are benign",
          "Treat promptly (often surgery within weeks) to prevent deprivation amblyopia",
          "Start topical antibiotics",
          "Prescribe corrective glasses and review at 1 year"
        ],
        "answer": 1,
        "layers": {
          "concept": "Congenital cataract - urgent treatment to prevent deprivation amblyopia",
          "discriminator": "Dense congenital cataract -> urgent surgery (within weeks) to avoid irreversible deprivation amblyopia",
          "trap": "Delaying treatment of a dense congenital cataract",
          "rule": "Dense congenital cataract: treat promptly (surgery within weeks) to prevent irreversible deprivation amblyopia; investigate TORCH/galactosaemia."
        }
      },
      {
        "q": "After an acute angle-closure attack is controlled medically, what is the definitive preventive treatment?",
        "options": [
          "Lifelong topical antibiotics",
          "Laser peripheral iridotomy (creating a hole in the peripheral iris)",
          "Cataract extraction only, no laser",
          "Oral diuretics indefinitely"
        ],
        "answer": 1,
        "layers": {
          "concept": "Acute angle-closure glaucoma - laser peripheral iridotomy is definitive",
          "discriminator": "Definitive AACG treatment = laser peripheral iridotomy (after pressure control) to bypass the pupillary block",
          "trap": "Stopping at medical control without definitive iridotomy",
          "rule": "After medical control of AACG, perform laser peripheral iridotomy; the fellow eye is also at risk and is typically treated prophylactically."
        }
      },
      {
        "q": "An immunocompetent adult has focal necrotizing retinitis with overlying vitritis, described as 'headlight in fog', and a small old scar elsewhere in the fundus. Most likely diagnosis and typical management?",
        "options": [
          "CMV retinitis; treat with ganciclovir",
          "Toxoplasma chorioretinitis; treat with pyrimethamine + sulfadiazine (+folinic acid)",
          "Acute posterior multifocal placoid pigment epitheliopathy; observe",
          "Syphilitic retinitis; treat with penicillin"
        ],
        "answer": 1,
        "layers": {
          "concept": "Toxoplasma chorioretinitis - 'headlight in fog' necrotizing focus + old scar",
          "discriminator": "Focal necrotizing retinitis + overlying vitritis + old scar = toxoplasma; treat with pyrimethamine/sulfadiazine",
          "trap": "Confusing toxoplasma (focal, old scar) with CMV (perivascular, no old scar, immunocompromised)",
          "rule": "Toxoplasma chorioretinitis: focal necrosis with vitritis ('headlight in fog') next to an old scar; treat with pyrimethamine + sulfadiazine + folinic acid."
        }
      },
      {
        "q": "A child has eyelid swelling and redness. On examination there is proposis, restricted extraocular movements, pain on eye movement and decreased vision. What is the key distinction and management?",
        "options": [
          "This is preseptal cellulitis; oral antibiotics as an outpatient suffice",
          "This is orbital cellulitis; urgent IV antibiotics and CT to assess for abscess",
          "This is allergic oedema; give antihistamines",
          "This is chalazion; warm compresses only"
        ],
        "answer": 1,
        "layers": {
          "concept": "Orbital cellulitis vs preseptal - proptosis/EOM restriction/vision loss = orbital, urgent",
          "discriminator": "Proptosis + painful EOM restriction + decreased vision = orbital cellulitis -> urgent IV abx + CT",
          "trap": "Treating orbital cellulitis as simple preseptal (outpatient oral antibiotics)",
          "rule": "Orbital cellulitis: proptosis, painful restricted eye movement, decreased vision, toxicity -> urgent IV antibiotics + CT. Preseptal: lid only, oral antibiotics."
        }
      },
      {
        "q": "A 60-year-old has a vesicular rash on the tip of the nose (Hutchinson sign) with a red painful eye and blurred vision. Most appropriate action?",
        "options": [
          "Topical antibiotics and reassurance",
          "Oral acyclovir (or valacyclovir) urgently plus urgent ophthalmology review",
          "Oral antihistamines",
          "Topical steroids alone"
        ],
        "answer": 1,
        "layers": {
          "concept": "Herpes zoster ophthalmicus - Hutchinson sign; urgent antiviral + eye review",
          "discriminator": "Vesicular rash on nose tip (nasociliary involvement) + eye signs = HZO; urgent antiviral + ophth review",
          "trap": "Treating as simple dermatitis or using steroids without antiviral cover",
          "rule": "HZO: vesicular rash in V1 distribution, Hutchinson sign (nasal tip) predicts eye involvement; urgent oral antiviral + ophthalmology assessment."
        }
      },
      {
        "q": "A 50-year-old farmer with chronic sun exposure has a triangular, fleshy, fibrovascular growth extending from the nasal limbus ONTO the cornea, with mild redness and irritation. Most likely diagnosis and concern?",
        "options": [
          "Pinguecula - a yellow nodule at the limbus that does not grow onto the cornea",
          "Pterygium - fibrovascular growth onto the cornea; can threaten vision if it reaches the visual axis",
          "Conjunctival melanoma",
          "Pinguicula (a type of cataract)"
        ],
        "answer": 1,
        "layers": {
          "concept": "Pterygium vs pinguecula - pterygium grows onto cornea (UV-related)",
          "discriminator": "Fibrovascular wing from limbus ONTO cornea = pterygium (UV); pinguecula stays on conjunctiva",
          "trap": "Confusing pterygium (corneal involvement) with pinguecula (conjunctival only)",
          "rule": "Pterygium: fibrovascular tissue growing from the limbus onto the cornea (UV exposure); monitor/excise if approaching the visual axis. Pinguecula: limbal conjunctival deposit, no corneal spread."
        }
      },
      {
        "q": "An elderly woman has the lower eyelid turning INWARD so the lashes rub against the cornea, causing irritation, redness and a corneal abrasion. Most likely diagnosis and risk?",
        "options": [
          "Ectropion - lid turns outward causing epiphora and exposure",
          "Entropion - lid turns inward; lashes traumatise the cornea (risk of ulceration/infection)",
          "Blepharospasm",
          "Ptosis"
        ],
        "answer": 1,
        "layers": {
          "concept": "Entropion vs ectropion - entropion = lid inward, lashes scratch cornea",
          "discriminator": "Inward-turning lid with lashes on cornea = entropion; risk of corneal abrasion/ulcer",
          "trap": "Confusing entropion (inward) with ectropion (outward)",
          "rule": "Entropion: eyelid turns inward, lashes abrade the cornea (ulcer risk); needs correction to protect the eye. Ectropion: outward, causes epiphora/exposure."
        }
      },
      {
        "q": "A 4-month-old has a red, tender, swollen lump at the medial canthus with discharge from the punctum on compression; the eye itself is white and quiet. Most likely diagnosis and initial management?",
        "options": [
          "Preseptal cellulitis; urgent IV antibiotics",
          "Acute dacryocystitis (infected nasolacrimal duct) - warm compresses, massage, oral antibiotics; probing if recurrent",
          "Orbital cellulitis; urgent CT",
          "Conjunctivitis; topical antibiotics"
        ],
        "answer": 1,
        "layers": {
          "concept": "Dacryocystitis - medial canthal swelling/discharge; infected NLDO",
          "discriminator": "Tender medial canthal swelling + purulent reflux from punctum, quiet eye = dacryocystitis (infected NLDO)",
          "trap": "Confusing dacryocystitis with preseptal/orbital cellulitis",
          "rule": "Dacryocystitis: tender medial canthal swelling with purulent reflux from the punctum; warm compresses, massage, oral antibiotics; probing if recurrent. Distinguish from cellulitis (diffuse lid/orbital involvement)."
        }
      },
      {
        "q": "A 65-year-old with hypertension and diabetes wakes with sudden, painless vision loss in one eye. Exam shows a relative afferent pupillary defect and an isolated inferior altitudinal visual field defect. Fundoscopy reveals a pale oedematous optic disc with segmental haemorrhages. Diagnosis?",
        "options": [
          "Papilloedema due to intracranial hypertension",
          "Anterior ischaemic optic neuropathy (AION)",
          "Optic neuritis",
          "Retinal artery occlusion"
        ],
        "answer": 1,
        "layers": {
          "concept": "NAION - painless altitudinal loss + disc oedema/haemorrhages in hypertensive/diabetic elderly",
          "discriminator": "Painless altitudinal VF defect + disc oedema with haemorrhages in vascular patient = NAION",
          "trap": "Confusing AION (disc oedema + haemorrhages) with papilloedema (disc oedema, no haemorrhages, bilateral, with headache)",
          "rule": "NAION: sudden painless vision loss, RAPD, altitudinal defect, pale oedematous disc with splinter haemorrhages in a vascular patient. No proven treatment; address vascular risk factors."
        }
      }
    ]
  },
  {
    "id": "pe-dvt",
    "name": "Acute Pulmonary Embolism & DVT",
    "questions": [
      {
        "q": "A 68-year-old woman develops sudden dyspnoea and right pleuritic chest pain 4 days after total hip replacement. Heart rate 108/min, blood pressure 118/72 mmHg, SpO2 91%, and there is unilateral thigh swelling. Wells score is 7. What is the most appropriate next step?",
        "options": [
          "CT pulmonary angiography",
          "D-dimer testing",
          "Start empiric aspirin and discharge",
          "Arrange compression ultrasound of the calf only"
        ],
        "answer": 0,
        "layers": {
          "concept": "High pre-test probability for PE: go straight to CTPA",
          "discriminator": "High Wells score overrides a D-dimer pathway; image now",
          "trap": "Using D-dimer in the wrong pre-test probability band",
          "rule": "High Wells probability → CTPA immediately"
        }
      },
      {
        "q": "A 36-year-old woman with a fast and strong pulse at 88/min, no dyspnoea alteration, no unilateral leg swelling, no prior PE or DVT, no haemoptysis, and no recent surgery or estrogen therapy. Wells score is 0. Which is the safest next step under the PERC rule?",
        "options": [
          "No further venous thromboembolism testing",
          "CT pulmonary angiography",
          "D-dimer testing",
          "Start anticoagulation"
        ],
        "answer": 0,
        "layers": {
          "concept": "Low-risk PE can be excluded clinically with PERC",
          "discriminator": "No PERC criteria met means no further VTE testing is required",
          "trap": "Applying PERC to a non-low-risk patient",
          "rule": "Low clinical suspicion + all PERC criteria absent → no testing"
        }
      },
      {
        "q": "A 50-year-old man has moderate symptoms and an intermediate pre-test probability of pulmonary embolism. His highly sensitive D-dimer is undetectable. What is the best interpretation?",
        "options": [
          "PE is effectively excluded",
          "PE is confirmed",
          "D-dimer is less sensitive in this group",
          "Proceed to CTPA regardless of D-dimer"
        ],
        "answer": 0,
        "layers": {
          "concept": "A negative highly sensitive D-dimer excludes PE in low/intermediate risk",
          "discriminator": "A negative highly sensitive D-dimer rules out PE when the pre-test probability is not high",
          "trap": "Treating a non-specific test as rule-in",
          "rule": "Non-high risk + negative D-dimer → excluded"
        }
      },
      {
        "q": "A 47-year-old woman with a low pre-test probability has a positive D-dimer after a recent infection. What is the correct next step?",
        "options": [
          "CT pulmonary angiography",
          "Exclude PE because D-dimer is not specific",
          "Repeat D-dimer",
          "Commence heparin without imaging"
        ],
        "answer": 0,
        "layers": {
          "concept": "A positive D-dimer requires imaging, not dismissal",
          "discriminator": "D-dimer can be high after infection; a positive result still needs CTPA",
          "trap": "Ignoring a positive D-dimer because it is non-specific",
          "rule": "Low/intermediate risk + positive D-dimer → CTPA"
        }
      },
      {
        "q": "A 31-year-old pregnant woman at 32 weeks develops pleuritic chest pain and shortness of breath. Heart rate 106/min, respiratory rate 24/min. What is the most appropriate initial imaging strategy?",
        "options": [
          "Bilateral lower limb compression ultrasound",
          "CT pulmonary angiography immediately",
          "D-dimer alone",
          "Chest X-ray is contraindicated in pregnancy"
        ],
        "answer": 0,
        "layers": {
          "concept": "Pregnancy suspected PE: duplex first",
          "discriminator": "A positive leg duplex in pregnancy confirms VTE and avoids chest irradiation",
          "trap": "Jumping directly to CTPA without looking for DVT",
          "rule": "Suspected PE in pregnancy → bilateral compression ultrasound first"
        }
      },
      {
        "q": "A 34-year-old pregnant woman at 28 weeks is found to have an acute proximal DVT. She is otherwise stable. Which anticoagulant is preferred?",
        "options": [
          "Low-molecular-weight heparin",
          "Warfarin",
          "Apixaban",
          "Aspirin"
        ],
        "answer": 0,
        "layers": {
          "concept": "Pregnancy VTE: LMWH is anticoagulant of choice",
          "discriminator": "LMWH crosses the placenta poorly and is safe and monitored in pregnancy",
          "trap": "Using warfarin because INR is measurable",
          "rule": "Pregnancy DVT/PE → LMWH, avoid warfarin and DOACs"
        }
      },
      {
        "q": "A 62-year-old man with active gastrointestinal carcinoma and new proximal DVT has platelets of 54 and a glomerular filtration rate of 22 mL/min. Which initial anticoagulant is most appropriate?",
        "options": [
          "Low-molecular-weight heparin",
          "Warfarin alone",
          "Aspirin",
          "Therapeutic unfractionated heparin intravenously"
        ],
        "answer": 0,
        "layers": {
          "concept": "Cancer-associated VTE with renal impairment/thrombocytopenia: LMWH",
          "discriminator": "LMWH offers flexible, reversible dosing without INR monitoring",
          "trap": "Using warfarin because cancer-associated VTE requires anticoagulation",
          "rule": "Cancer VTE + renal impairment/thrombocytopenia → LMWH"
        }
      },
      {
        "q": "A 58-year-old man with PE suddenly becomes hypotensive with syncope and systolic pressure of 78 mmHg. CT shows large pulmonary emboli and marked right ventricular dilatation. No contraindication to thrombolysis. What is the most appropriate immediate treatment?",
        "options": [
          "Systemic thrombolysis with alteplase",
          "Low-dose aspirin alone",
          "Anticoagulation alone and observation",
          "Urgent inferior vena cava filter only"
        ],
        "answer": 0,
        "layers": {
          "concept": "High-risk PE with haemodynamic instability requires thrombolysis",
          "discriminator": "Hypotension is the defining feature of massive PE",
          "trap": "Calling all large PEs massive PE",
          "rule": "PE + hypotension → immediate thrombolysis if eligible"
        }
      },
      {
        "q": "A 44-year-old woman is normotensive with chest pain, raised troponin and echocardiographic RV dysfunction on CT. She has no hypotension or shock. What is the optimal initial management?",
        "options": [
          "Anticoagulation without thrombolysis",
          "Immediate systemic thrombolysis",
          "Catheter embolectomy now",
          "Start long-term warfarin without anticoagulant bridge"
        ],
        "answer": 0,
        "layers": {
          "concept": "Intermediate-risk/submassive PE: anticoagulation, not routine thrombolysis",
          "discriminator": "Normotension defines intermediate, not massive, PE",
          "trap": "Overcalling submassive PE as massive",
          "rule": "Normotensive RV-strained PE → anticoagulation, close monitoring"
        }
      },
      {
        "q": "A 70-year-old man with DVT has eGFR 15 mL/min. Which anticoagulant strategy is most appropriate initially?",
        "options": [
          "Low-molecular-weight heparin",
          "Standard dose apixaban",
          "Standard dose rivaroxaban",
          "Aspirin"
        ],
        "answer": 0,
        "layers": {
          "concept": "Severe renal failure and DVT: LMWH",
          "discriminator": "Severe renal impairment precludes standard DOAC dosing",
          "trap": "Assuming all DOACs are safe at any renal function",
          "rule": "eGFR severe → LMWH preferred initially"
        }
      },
      {
        "q": "A 52-year-old woman with her first spontaneous, unprovoked proximal DVT is otherwise healthy with low bleeding risk. What duration of anticoagulation is recommended before reassessment?",
        "options": [
          "At least 3 months, then reassess",
          "Exactly 2 weeks",
          "Aspirin for 12 months",
          "Anticoagulation for 1 month only"
        ],
        "answer": 0,
        "layers": {
          "concept": "Unprovoked proximal DVT minimum duration",
          "discriminator": "Unprovoked VTE requires at least 3 months, not a brief course",
          "trap": "Stopping too early after symptoms resolve",
          "rule": "Unprovoked proximal DVT → at least 3 months, then reassess"
        }
      },
      {
        "q": "A 64-year-old woman with metastatic gastrointestinal cancer and recurrent vomiting develops proximal DVT. Which anticoagulant is most appropriate initially?",
        "options": [
          "Low-molecular-weight heparin",
          "Warfarin alone",
          "Standard rivaroxaban",
          "No anticoagulation because of cancer"
        ],
        "answer": 0,
        "layers": {
          "concept": "Cancer VTE with unreliable absorption: LMWH",
          "discriminator": "LMWH bypasses gastrointestinal absorption",
          "trap": "Assuming all cancer VTE can take rivaroxaban",
          "rule": "Cancer VTE + vomiting/malabsorption → LMWH"
        }
      },
      {
        "q": "A 55-year-old man with suspected PE has severe iodinated contrast allergy. Chest X-ray is normal. Which imaging test should be used?",
        "options": [
          "Lung ventilation-perfusion scan",
          "CT pulmonary angiography with contrast",
          "D-dimer only",
          "Cardiac magnetic resonance"
        ],
        "answer": 0,
        "layers": {
          "concept": "Contrast allergy: V/Q is the alternative",
          "discriminator": "V/Q provides CTPA information without iodinated contrast",
          "trap": "Using CTPA despite contrast contraindication",
          "rule": "Contrast contraindication/CKD + normal CXR → V/Q"
        }
      },
      {
        "q": "A 38-year-old woman has high clinical suspicion of PE. CT pulmonary angiography is reported negative. She remains severely dyspnoeic with persistent tachycardia. What is the most appropriate further step?",
        "options": [
          "Arrange proximal lower limb ultrasound or V/Q scan",
          "Reassure her completely and discharge",
          "Repeat D-dimer only",
          "Start aspirin"
        ],
        "answer": 0,
        "layers": {
          "concept": "Negative CTPA with high suspicion can still need imaging",
          "discriminator": "Do not falsely clear PE when clinical probability remains high and CTPA result is negative",
          "trap": "Overreliance on a CT report despite persistent high suspicion",
          "rule": "High suspicion + negative CTPA → proximal duplex or V/Q"
        }
      },
      {
        "q": "A 65-year-old man 5 days after major surgery has a D-dimer of 12 times the upper limit and no other symptoms. He is clinically well. What is the best interpretation?",
        "options": [
          "D-dimer is non-specific and does not diagnose VTE",
          "PE is confirmed",
          "DVT is confirmed",
          "Start indefinite anticoagulation now"
        ],
        "answer": 0,
        "layers": {
          "concept": "D-dimer is non-specific in post-op patients",
          "discriminator": "D-dimer is a rule-out test, not a rule-in test",
          "trap": "Treating a high D-dimer as proof of PE",
          "rule": "D-dimer excludes only, never confirms"
        }
      },
      {
        "q": "A 42-year-old woman with an isolated calf DVT on duplex is asymptomatic and has no severe symptoms/risk factors. What is appropriate?",
        "options": [
          "Repeat compression ultrasound in about 1–2 weeks",
          "Immediate 6 months anticoagulation for all calf DVTs",
          "Thrombolysis",
          "IVC filter"
        ],
        "answer": 0,
        "layers": {
          "concept": "Low-risk distal DVT: surveillance",
          "discriminator": "Asymptomatic isolated distal DVTs can be followed with repeat duplex",
          "trap": "Over-treating all DVTs alike",
          "rule": "Asymptomatic/low-risk distal DVT → repeat duplex in 1–2 weeks"
        }
      },
      {
        "q": "A 66-year-old man has recurrent PE despite therapeutic rivaroxaban and good adherence. What is the most useful next investigation?",
        "options": [
          "Test for antiphospholipid syndrome and look for occult cancer",
          "Switch to aspirin",
          "Stop anticoagulation",
          "Assume normal recurrence"
        ],
        "answer": 0,
        "layers": {
          "concept": "Recurrent VTE on therapy: look for cause",
          "discriminator": "Recurrent VTE on therapeutic anticoagulation suggests an underlying prothrombotic state",
          "trap": "Accepting anticoagulant failure without investigation",
          "rule": "Recurrent VTE on anticoagulation → investigate APS/occult cancer"
        }
      },
      {
        "q": "A 60-year-old man develops a DVT after a long-haul flight and has haemoptysis. PE is diagnosed by CTPA and he is stable. What is the correct interpretation of haemoptysis?",
        "options": [
          "It is a feature of PE and not a contraindication to anticoagulation",
          "It proves bronchiectasis",
          "It means thrombolysis is mandatory",
          "It forbids all anticoagulation"
        ],
        "answer": 0,
        "layers": {
          "concept": "Haemoptysis in PE does not preclude anticoagulation",
          "discriminator": "Haemoptysis is included in Wells and is usually compatible with anticoagulation",
          "trap": "Seeing blood in sputum as no-anticoagulation",
          "rule": "Haemoptysis in PE is not absolute anticoagulation contraindication"
        }
      },
      {
        "q": "A 58-year-old man with DVT has a platelet count of 8 and severe heparin-induced thrombocytopenia. He needs VTE treatment. Which is most appropriate?",
        "options": [
          "A non-heparin anticoagulant such as fondaparinux or direct thrombin inhibitor",
          "Low-molecular-weight heparin",
          "Unfractionated heparin",
          "Aspirin"
        ],
        "answer": 0,
        "layers": {
          "concept": "HIT excludes all heparins",
          "discriminator": "Fondaparinux or direct thrombin inhibitors avoid heparin immune response",
          "trap": "Using LMWH because it is less antigenic",
          "rule": "HIT → stop all heparin, use non-heparin anticoagulant"
        }
      },
      {
        "q": "A 49-year-old man has a DVT while taking warfarin for AF. His INR is 1.3 and he reports intermittent adherence. What is the immediate priority?",
        "options": [
          "Restore stable anticoagulation and review adherence",
          "Add aspirin only",
          "Stop warfarin permanently",
          "No further treatment"
        ],
        "answer": 0,
        "layers": {
          "concept": "Clot on warfarin: adherence and intensity",
          "discriminator": "Subtherapeutic INR explains clot under warfarin",
          "trap": "Attributing all VTE to drug resistance",
          "rule": "DVT on warfarin with INR 1.3 → restore therapeutic anticoagulation"
        }
      },
      {
        "q": "A 29-year-old pregnant woman at 34 weeks has suspected PE. Her leg ultrasound is negative. Chest X-ray is normal. Which imaging test is preferred?",
        "options": [
          "Ventilation-perfusion scan",
          "CT pulmonary angiography now without further consideration",
          "MRI pelvis",
          "No further imaging"
        ],
        "answer": 0,
        "layers": {
          "concept": "Pregnancy: V/Q preferred with normal CXR",
          "discriminator": "V/Q reduces maternal breast irradiation when CXR normal",
          "trap": "Routine CTPA irrespective of CXR/duplex",
          "rule": "Pregnancy + negative duplex + normal CXR → V/Q preferred"
        }
      },
      {
        "q": "A 55-year-old woman has a saddle pulmonary embolism but is normotensive with stable oxygenation. CTA and echocardiography are reviewed. What is the correct management?",
        "options": [
          "Anticoagulation with close monitoring",
          "Immediate thrombolysis because it is saddle",
          "Embolectomy for all saddle emboli",
          "No treatment because blood pressure is normal"
        ],
        "answer": 0,
        "layers": {
          "concept": "Saddle embolism is not itself massive PE",
          "discriminator": "Saddle describes clot location, not haemodynamic category",
          "trap": "Equating saddle embolism with massive PE",
          "rule": "Saddle PE with stability → anticoagulation"
        }
      },
      {
        "q": "A 61-year-old man with PE is hypotensive and in shock. He has a recent intracranial haemorrhage and thrombolysis is contraindicated. What is the most appropriate rescue strategy?",
        "options": [
          "Catheter-directed therapy or surgical embolectomy",
          "Continue anticoagulation alone",
          "Low-dose aspirin",
          "No treatment"
        ],
        "answer": 0,
        "layers": {
          "concept": "Contraindication to lysis in shock: mechanical rescue",
          "discriminator": "Contraindication to fibrinolysis does not preclude rescue embolectomy",
          "trap": "No thrombolysis means no active treatment",
          "rule": "Shock + lysis contraindicated → catheter/surgical embolectomy"
        }
      },
      {
        "q": "A 28-year-old woman develops DVT during pregnancy. What is the minimum duration of therapeutic anticoagulation?",
        "options": [
          "Throughout pregnancy plus at least 6 weeks postpartum, for a minimum of 3 months",
          "Until delivery only",
          "For exactly 2 weeks",
          "Until the 28-week scan only"
        ],
        "answer": 0,
        "layers": {
          "concept": "Pregnancy VTE duration",
          "discriminator": "Postpartum period remains high-risk",
          "trap": "Treating only while visibly symptomatic",
          "rule": "Pregnancy VTE → LMWH throughout + ≥6 weeks postpartum"
        }
      },
      {
        "q": "A 45-year-old man with a PICC develops arm swelling and pain. Duplex shows upper limb DVT. What is the most appropriate immediate step while the central line is still required?",
        "options": [
          "Start anticoagulation and leave/remove the line based on need and infection risk",
          "Immediately remove all central lines in every DVT",
          "Aspirin alone",
          "No treatment because upper limb DVT is always benign"
        ],
        "answer": 0,
        "layers": {
          "concept": "Upper limb DVT: anticoagulate and individualise line decisions",
          "discriminator": "Upper limb DVT needs anticoagulation, and line removal depends on infection and need",
          "trap": "Upper limb DVT thought harmless",
          "rule": "Upper limb DVT → anticoagulate; line decision individualised"
        }
      }
    ]
  },
  {
    "id": "psych",
    "name": "Psychiatry",
    "questions": [
      {
        "q": "A 15-year-old boy tells his teacher that 'the teacher is trying to kill me' and repeats that classmates are secretly plotting to attack him. He is convinced of this despite evidence to the contrary. He has no prominent depressed or manic mood. What is the most likely diagnosis?",
        "options": [
          "Schizophrenia",
          "Major depressive disorder with psychotic features",
          "Obsessive-compulsive disorder",
          "Generalised anxiety disorder"
        ],
        "answer": 0,
        "layers": {
          "concept": "Schizophrenia — persecutory (paranoid) delusions as a positive symptom",
          "discriminator": "Fixed persecutory delusion without a mood syndrome = schizophrenia spectrum psychosis",
          "trap": "Attributing a fixed delusion to a mood disorder, OCD, or anxiety",
          "rule": "Persecutory delusions with intact reality-testing absence and no mood syndrome point to schizophrenia; obsessions (OCD) are experienced as intrusive and 'not true', unlike delusions."
        }
      },
      {
        "q": "A 22-year-old man presents with delusions and hallucinations that have been continuous for 3 months, with functioning decline. No mood episode is present.Which diagnosis fits best?",
        "options": [
          "Schizophreniform disorder",
          "Brief psychotic disorder",
          "Schizophrenia",
          "Delusional disorder"
        ],
        "answer": 0,
        "layers": {
          "concept": "Schizophreniform disorder — 1 to 6 months of psychotic symptoms (prodrome allowed)",
          "discriminator": "Continuous psychosis of 1–6 months (with functional decline) = schizophreniform; six months+ = schizophrenia",
          "trap": "Calling a 3-month psychosis 'schizophrenia' too early, or 'brief' if still ongoing",
          "rule": "Psychosis with decline of 1–6 months duration = schizophreniform; schizophrenia needs ≥6 months (medication + prodrome)."
        }
      },
      {
        "q": "A 30-year-old man with schizophrenia is started on an antipsychotic. Three months later he has gained 8 kg and his fasting glucose and lipids are elevated. Which agent is MOST responsible for this metabolic syndrome?",
        "options": [
          "Haloperidol",
          "Loxapine (fluphenazine)",
          "Olanzapine",
          "Chlorpromazine at low dose"
        ],
        "answer": 2,
        "layers": {
          "concept": "Second-generation antipsychotics (olanzapine) — metabolic syndrome AE",
          "discriminator": "Weight gain, hyperglycaemia, dyslipidaemia = metabolic syndrome; typical with SGA olanzapine (vs EPS with FGA)",
          "trap": "Attributing weight gain/metabolic side effects to a first-generation antipsychotic",
          "rule": "Weight gain+hyperglycaemia+dyslipidaemia (metabolic syndrome) is characteristic of SGA (olanzapine, clozapine); FGA causes EPS/tardive dyskinesia."
        }
      },
      {
        "q": "A patient on an antipsychotic develops rigidity, hyperthermia, fluctuating consciousness and autonomic instability, with a markedly elevated CK. Which condition does this describe, and which drug class change most characteristically precedes it?",
        "options": [
          "Serotonin syndrome after a recent SSRI dose increase",
          "Malignant hyperthermia after an inhaled anaesthetic",
          "Tardive dyskinesia from long-term typical antipsychotics",
          "Neuroleptic malignant syndrome after an antipsychotic dose increase or switch"
        ],
        "answer": 3,
        "layers": {
          "concept": "Neuroleptic malignant syndrome — rigidity + hyperthermia + autonomic instability + raised CK",
          "discriminator": "Lead-pipe rigidity + hyperthermia + autonomic instability + high CK after antipsychotic = NMS",
          "trap": "Confusing NMS with serotonin syndrome or malignant hyperthermia",
          "rule": "Rigidity + hyperthermia + autonomic instability + raised CK after an antipsychotic = NMS; stop the drug and give supportive care."
        }
      },
      {
        "q": "A 65-year-old woman who has taken a typical antipsychotic for years develops repetitive, involuntary oro-buccal-lingual chewing and grimacing movements. What is the best initial management?",
        "options": [
          "Increase the antipsychotic dose",
          "Add an anticholinergic (e.g. benztropine)",
          "Continue the same dose and reassure",
          "Switch to an atypical antipsychotic (or clozapine) and consider VMAT-2 inhibitor (valbenazine)"
        ],
        "answer": 3,
        "layers": {
          "concept": "Tardive dyskinesia — reduce/switch antipsychotic; anticholinergics can worsen it",
          "discriminator": "Oro-facial stereotypic movements after long-term antipsychotic = tardive dyskinesia; stop/reduce drug, switch to atypical, consider VMAT-2 inhibitor",
          "trap": "Adding anticholinergics (which worsen TD) or increasing the offending antipsychotic",
          "rule": "TD = orofacial stereotypic movements from chronic antipsychotics; reduce/switch the drug and consider a VMAT-2 inhibitor; avoid anticholinergics."
        }
      },
      {
        "q": "A 19-year-old man develops painful neck twisting (torticollis), eye deviation (oculogyric crisis) and tongue protrusion within 2 days of starting a high-potency typical antipsychotic. What is the immediate treatment?",
        "options": [
          "Increase the antipsychotic dose",
          "Intravenous/oral anticholinergic (benztropine or diphenhydramine)",
          "Start a benzodiazepine and observe",
          "Give IV propranolol"
        ],
        "answer": 1,
        "layers": {
          "concept": "Acute dystonia — anticholinergic (benztropine/diphenhydramine)",
          "discriminator": "Acute dystonia within days of high-potency antipsychotic = treat with anticholinergic",
          "trap": "Confusing acute dystonia with tardive dyskinesia or withholding the correct antidote",
          "rule": "Acute neuroleptic-induced dystonia responds immediately to anticholinergics (benztropine/diphenhydramine); then reduce the causative antipsychotic."
        }
      },
      {
        "q": "A 40-year-old man over 5 days has euphoric mood, grandiosity (plans to quit medicine and start a university), pressured speech and reckless spending, sleeping only 2–3 hours/night yet feeling rested. What is the most specific sleep finding that points to MANIA rather than simple insomnia?",
        "options": [
          "Difficulty falling asleep despite feeling tired",
          "Decreased need for sleep with preserved energy/restored feeling",
          "Early morning awakening with low mood",
          "Hypersomnia and daytime napping"
        ],
        "answer": 1,
        "layers": {
          "concept": "Mania — decreased need for sleep (vs insomnia of depression/simple insomnia)",
          "discriminator": "Grandiosity + pressured speech + decreased NEED for sleep (not distressed) = mania",
          "trap": "Reading any sleep reduction as insomnia or depression",
          "rule": "A few hours of sleep that leaves the patient rested and energetic (reduced need, not insomnia) is a hallmark of mania along with grandiosity and pressured speech."
        }
      },
      {
        "q": "A 33-year-old woman with bipolar I disorder presents with a 3-week episode of major depression while on her mood stabiliser. Which is LEAST appropriate?",
        "options": [
          "Add a second mood stabiliser or lamotrigine",
          "Add an atypical antipsychotic such as quetiapine",
          "Use antidepressant monotherapy alone for her depression",
          "Consider ECT for severe depression"
        ],
        "answer": 2,
        "layers": {
          "concept": "Bipolar depression — avoid antidepressant MONOTHERAPY (mania switch risk)",
          "discriminator": "In bipolar depression, antidepressant monotherapy risks triggering mania/hypomania; use mood stabiliser ± atypical antipsychotic",
          "trap": "Treating a bipolar depression with a plain antidepressant the way you would unipolar MDD",
          "rule": "For bipolar depression use a mood stabiliser/atypical antipsychotic; do NOT give antidepressant monotherapy due to risk of switching to mania."
        }
      },
      {
        "q": "A new mother on day 3 postpartum is tearful, irritable and labile but can care for her baby, with symptoms fluctuating throughout the day and resolving spontaneously. What is the most likely diagnosis?",
        "options": [
          "Postpartum 'baby blues'",
          "Major postpartum depression",
          "Postpartum psychosis",
          "Generalised anxiety disorder"
        ],
        "answer": 0,
        "layers": {
          "concept": "Postpartum baby blues — transient, day 3–5, self-limiting (<2 weeks)",
          "discriminator": "Onset day 3, mild mood lability, retained functioning, self-limiting = baby blues",
          "trap": "Treating transient day-3 emotional lability as major depression",
          "rule": "Mild tearfulness/lability around day 3–5 that resolves within 2 weeks with preserved function is baby blues; persistent or impairing symptoms indicate postpartum depression."
        }
      },
      {
        "q": "A mother 2 weeks after delivery is confused, disorganised, has bizarre delusions about her baby being evil, and insomnia. What is the most appropriate management?",
        "options": [
          "Reassure and schedule outpatient follow-up in 2 weeks",
          "Start an SSRI and let her rest at home",
          "Refer to a dietician for sleep hygiene",
          "Emergency psychiatric admission with antipsychotic treatment and safety planning for mother and infant"
        ],
        "answer": 3,
        "layers": {
          "concept": "Postpartum psychosis — psychiatric emergency, urgent admission",
          "discriminator": "Delusions + confusion + insomnia postpartum = postpartum psychosis, emergency (infanticide risk)",
          "trap": "Underestimating postpartum psychosis or treating it as simple depression",
          "rule": "Delusions/hallucinations + confusion + insomnia in the postpartum period = postpartum psychosis; urgent admission and safety planning (infanticide risk)."
        }
      },
      {
        "q": "A 50-year-old man has severe depression with early-morning waking, diurnal mood variation (worse in the morning), anorexia, weight loss and anhedonia with psychomotor retardation. Which feature supports a MELANCHOLIC specifier in depression?",
        "options": [
          "Hypersomnia and increased appetite",
          "Early-morning awakening with mood worse in the morning and psychomotor changes",
          "Fatigue that improves with restful sleep",
          "Reactive mood that brightens with good news"
        ],
        "answer": 1,
        "layers": {
          "concept": "Melancholic depression — early-morning wakening, diurnal variation, psychomotor changes",
          "discriminator": "Early-morning waking + mood worse AM + appetite/weight loss + psychomotor changes = melancholic",
          "trap": "Reading melancholic night-waking as primary insomnia or atypical signs",
          "rule": "Melancholic depression = early-morning wakening, diurnal mood variation (worse AM), anorexia/weight loss and psychomotor change; distinct from atypical (hypersomnia, hyperphagia, leaden paralysis)."
        }
      },
      {
        "q": "A 30-year-old woman has recurrent, unexpected episodes of intense fear peaking within minutes, with palpitations, sweating, tremor, chest discomfort, choking and a feeling of imminent death. She now avoids crowded places for fear of an episode. What is the most likely diagnosis?",
        "options": [
          "Panic disorder",
          "Generalised anxiety disorder",
          "Social anxiety disorder",
          "Obsessive-compulsive disorder"
        ],
        "answer": 0,
        "layers": {
          "concept": "Panic disorder — recurrent unexpected panic attacks peaking in minutes, with avoidance",
          "discriminator": "Paroxysmal fear + autonomic surge peaking in minutes + avoidance = panic disorder",
          "trap": "Calling paroxysmal panic 'generalised anxiety' or 'social anxiety'",
          "rule": "Recurrent unexpected panic attacks (fear peaking in minutes with autonomic surge) plus anticipatory fear/avoidance = panic disorder; SSRIs are first-line treatment."
        }
      },
      {
        "q": "A 28-year-old woman with panic disorder asks about treatment. She wants a medication that treats the underlying attack frequency. Which is the most appropriate first-line long-term pharmacotherapy?",
        "options": [
          "Lorazepam as the sole daily treatment",
          "An SSRI (e.g. sertraline or escitalopram), starting low and titrating",
          "Propranolol taken only during attacks",
          "A short course of diazepam twice daily indefinitely"
        ],
        "answer": 1,
        "layers": {
          "concept": "Panic disorder — SSRI first-line",
          "discriminator": "Panic disorder is treated long-term with an SSRI (start low, titrate); benzodiazepines are not sole/maintenance treatment",
          "trap": "Relying on as-needed benzodiazepines for a chronic panic disorder",
          "rule": "First-line maintenance for panic disorder is an SSRI started low and titrated; avoid long-term benzodiazepine monotherapy."
        }
      },
      {
        "q": "A 78-year-old hospitalised man becomes acutely confused over hours, inattentive, with fluctuating alertness and visual hallucinations; he has an active urinary infection. What is the most likely diagnosis?",
        "options": [
          "Delirium",
          "Dementia",
          "Major depression (pseudodementia)",
          "Schizophrenia"
        ],
        "answer": 0,
        "layers": {
          "concept": "Delirium — acute onset, fluctuating, inattention, underlying medical cause",
          "discriminator": "Acute/subacute onset + fluctuating + inattention + hallucinations + medical infection = delirium",
          "trap": "Calling acute confused elderly patients 'demented' or dismissing as normal ageing",
          "rule": "Acute onset, fluctuating inattention/consciousness with a medical trigger = delirium; treat the cause (e.g. infection), avoid sedatives."
        }
      },
      {
        "q": "A postoperative elderly patient is agitated and hallucinating with delirium. Which is the MOST appropriate first-line management approach?",
        "options": [
          "Start a benzodiazepine routinely to sedate immediately",
          "Restrain the patient physically as the primary intervention",
          "Identify and treat the underlying cause, use non-pharmacological measures, and reserve antipsychotics (e.g. low-dose haloperidol) for severe agitation",
          "Give antipsychotics prophylactically to all patients"
        ],
        "answer": 2,
        "layers": {
          "concept": "Delirium — treat the cause + non-pharmacological first; antipsychotic only for severe agitation",
          "discriminator": "Delirium is managed by treating the precipitant + non-pharmacological reorientation; antipsychotics for severe agitation only; avoid benzodiazepines (unless alcohol/benzo withdrawal)",
          "trap": "Sedating with benzodiazepines or relying on restraints as the primary treatment",
          "rule": "Treat the underlying cause and use non-pharmacological measures first for delirium; reserve low-dose antipsychotics for severe agitation and avoid benzodiazepines/restraints."
        }
      },
      {
        "q": "A 72-year-old man has progressive memory loss over 2 years with difficulty naming objects and navigating familiar places; functional decline is emerging. Which pharmacologic treatment is most appropriate for mild-to-moderate Alzheimer disease?",
        "options": [
          "Memantine monotherapy",
          "Haloperidol",
          "Amitriptyline",
          "A cholinesterase inhibitor (e.g. donepezil)"
        ],
        "answer": 3,
        "layers": {
          "concept": "Alzheimer disease — cholinesterase inhibitor (donepezil) for mild-moderate",
          "discriminator": "Gradual amnestic decline + naming/navigation difficulty = AD; mild-moderate treated with cholinesterase inhibitor",
          "trap": "Using memantine first-line in early AD, or anticholinergics/neuroleptics for behavioural symptoms",
          "rule": "Mild-moderate Alzheimer disease is treated with a cholinesterase inhibitor (donepezil); memantine is reserved for moderate-severe, and anticholinergics are avoided."
        }
      },
      {
        "q": "A 69-year-old hypertensive, diabetic smoker has stepwise cognitive decline with abrupt worsening, emotional lability, focal neurologic signs and gait difficulty. MRI shows multiple lacunar infarcts and white-matter disease. What is the most likely diagnosis?",
        "options": [
          "Alzheimer disease",
          "Frontotemporal dementia",
          "Normal-pressure hydrocephalus",
          "Vascular dementia"
        ],
        "answer": 3,
        "layers": {
          "concept": "Vascular dementia — stepwise decline + focal signs + vascular risk factors + infarcts on imaging",
          "discriminator": "Stepwise decline + focal signs + vascular risk factors + lacunar infarcts = vascular dementia",
          "trap": "Attributing stepwise, focal, vascular-pattern dementia to Alzheimer disease",
          "rule": "Stepwise cognitive decline with focal deficits, vascular risk factors and lacunar/white-matter changes = vascular dementia."
        }
      },
      {
        "q": "A 70-year-old man has fluctuating cognition, well-formed visual hallucinations of people and animals, and mild parkinsonism. His family notes marked sensitivity to antipsychotic medications. What is the most likely diagnosis and an important management caveat?",
        "options": [
          "Alzheimer disease — start donepezil only",
          "Dementia with Lewy bodies — avoid neuroleptics (severe sensitivity), use cholinesterase inhibitors and handle psychosis carefully",
          "Vascular dementia — antiplatelet therapy",
          "Frontotemporal dementia — start an antipsychotic for behaviour"
        ],
        "answer": 1,
        "layers": {
          "concept": "Dementia with Lewy bodies — fluctuate + visual hallucinations + parkinsonism; severe neuroleptic sensitivity",
          "discriminator": "Fluctuating cognition + visual hallucinations (formed) + parkinsonism + neuroleptic sensitivity = DLB",
          "trap": "Giving an antipsychotic to control hallucinations in DLB (risk of severe reaction)",
          "rule": "In DLB (fluctuating cognition, visual hallucinations, parkinsonism), AVOID antipsychotics due to severe sensitivity; use cholinesterase inhibitors."
        }
      },
      {
        "q": "A 54-year-old man has progressive disinhibition, inappropriate social behaviour, apathy and loss of empathy over 2 years, with relative sparing of memory, plus difficulty producing words. Imaging shows frontal and temporal atrophy. What is the most likely diagnosis?",
        "options": [
          "Frontotemporal dementia",
          "Alzheimer disease",
          "Dementia with Lewy bodies",
          "Vascular dementia"
        ],
        "answer": 0,
        "layers": {
          "concept": "Frontotemporal dementia — early behavioural disinhibition/apathy + language, younger onset, spared memory",
          "discriminator": "Earlier onset + prominent behaviour/personality change + language with spared memory + frontotemporal atrophy = FTD",
          "trap": "Attributing prominent early personality change to Alzheimer disease",
          "rule": "Early behavioural disinhibition/apathy and language change with spared memory, younger onset, and frontotemporal atrophy = frontotemporal dementia."
        }
      },
      {
        "q": "A chronic heavy drinker stops alcohol abruptly. He has confusion, agitation, tremor, hallucinations and marked autonomic overactivity (tachycardia, hypertension, sweating, fever) with a risk of seizures and death. What is this, and what is the treatment?",
        "options": [
          "Alcoholic hallucinosis — treat with antipsychotics",
          "Wernicke encephalopathy — give thiamine only",
          "Delirium tremens — treat with benzodiazepines",
          "Alcoholic dementia — long-term care"
        ],
        "answer": 2,
        "layers": {
          "concept": "Delirium tremens — clouded sensorium + autonomic instability; benzodiazepine treatment",
          "discriminator": "Confusion + tremor + hallucinations + marked autonomic overactivity after stopping alcohol = delirium tremens; treat with benzodiazepines",
          "trap": "Confusing DTs (clouded sensorium + autonomic storm) with alcoholic hallucinosis (clear sensorium, no autonomic instability)",
          "rule": "Delirium tremens = clouded consciousness + autonomic overactivity after abrupt alcohol cessation; treat with benzodiazepines + thiamine + supportive care."
        }
      },
      {
        "q": "A 42-year-old man with alcohol use disorder wants medication to reduce craving and relapse after detoxification. Which agent reduces drinking by antagonising opioid receptors involved in alcohol's rewarding effect?",
        "options": [
          "Disulfiram",
          "Acamprosate",
          "Naltrexone",
          "Haloperidol"
        ],
        "answer": 2,
        "layers": {
          "concept": "Naltrexone — opioid antagonist reduces alcohol craving/drinking",
          "discriminator": "Opioid-receptor antagonist (naltrexone) reduces alcohol reward/craving; disulfiram is aversive; acamprosate is a glutamate modulator",
          "trap": "Mixing up the mechanisms of naltrexone, disulfiram and acamprosate",
          "rule": "Naltrexone (opioid antagonist) reduces craving/reward; disulfiram is an aversive agent; acamprosate alters glutamate signalling."
        }
      },
      {
        "q": "A 35-year-old man with long-standing opioid dependence stops use. He has rhinorrhoea, lacrimation, yawning, piloerection, mydriasis, muscle cramps, diarrhoea and anxiety. What is the most likely diagnosis and appropriate pharmacotherapy?",
        "options": [
          "Opioid intoxication — give naloxone",
          "Serotonin syndrome — give cyproheptadine",
          "Alcohol withdrawal — give benzodiazepines",
          "Opioid withdrawal — treat with methadone or buprenorphine (and lofexidine adjunctively)"
        ],
        "answer": 3,
        "layers": {
          "concept": "Opioid withdrawal — sympathomimetic-opposite features; treat with methadone/buprenorphine",
          "discriminator": "Rhinorrhoea + mydriasis (opposite of pinpoint) + lacrimation + GI cramps after stopping opioids = withdrawal",
          "trap": "Giving naloxone (which precipitates/worsens withdrawal) or confusing withdrawal with intoxication",
          "rule": "Opioid withdrawal (mydriasis, rhinorrhoea, lacrimation, GI cramps) is treated with methadone/buprenorphine; naloxone is for opioid intoxication and would worsen withdrawal."
        }
      },
      {
        "q": "A 9-year-old boy has persistent, impairing inattention, hyperactivity and impulsivity across school and home, present since age 6. What is the first-line pharmacologic treatment?",
        "options": [
          "Stimulants such as methylphenidate",
          "Benzodiazepines",
          "Antipsychotics routinely",
          "Guarana/caffeine supplements"
        ],
        "answer": 0,
        "layers": {
          "concept": "ADHD — stimulant (methylphenidate) first-line",
          "discriminator": "Persistent inattention/hyperactivity/impulsivity across settings since childhood = ADHD; stimulants first-line",
          "trap": "Using benzodiazepines or antipsychotics for ADHD core symptoms",
          "rule": "ADHD core symptoms of inattention/hyperactivity/impulsivity are first-line treated with stimulants (methylphenidate); not benzodiazepines or antipsychotics."
        }
      },
      {
        "q": "A 19-year-old woman with severe anorexia nervosa (BMI 14) is started on refeeding. On day 3 she develops weakness, arrhythmia, seizures and confusion. Bloods show low phosphate. What is the most likely diagnosis and immediate management?",
        "options": [
          "Hypoglycaemia — give IV dextrose only",
          "Refeeding syndrome — give phosphate/electrolyte replacement and slow, monitored refeeding",
          "Serotonin syndrome — stop the antidepressant",
          "Alcohol withdrawal — give a benzodiazepine"
        ],
        "answer": 1,
        "layers": {
          "concept": "Refeeding syndrome in anorexia nervosa — refeeding-induced hypophosphataemia",
          "discriminator": "Severe malnutrition + refeeding + low phosphate + arrhythmia/seizures = refeeding syndrome",
          "trap": "Attributing the collapse to hypoglycaemia or another cause rather than recognising refeeding hypophosphataemia",
          "rule": "In severe anorexia, refeeding can cause life-threatening hypophosphataemia (refeeding syndrome) — monitor electrolytes, replace phosphate, and refeed slowly with close supervision."
        }
      },
      {
        "q": "A 21-year-old woman of normal weight has recurrent episodes of binge-eating followed by self-induced vomiting several times a week, with dental enamel erosion, parotid swelling and calluses on her knuckles. Which electrolyte disturbance is most characteristic and dangerous?",
        "options": [
          "Hyperkalaemia",
          "Hypernatraemia",
          "Hypokalaemia (often with metabolic alkalosis)",
          "Hypercalcaemia"
        ],
        "answer": 2,
        "layers": {
          "concept": "Bulimia nervosa — recurrent vomiting causing hypokalaemic metabolic alkalosis",
          "discriminator": "Binge-purge + dental erosion + parotid swelling + knuckle calluses = bulimia; vomiting causes hypokalaemic alkalosis",
          "trap": "Missing the life-threatening hypokalaemia (arrhythmia risk) in a normal-weight purger",
          "rule": "Bulimia with self-induced vomiting causes hypokalaemic, hypochloraemic metabolic alkalosis; recognise dental erosion, parotid swelling and Russell's sign and correct potassium."
        }
      }
    ]
  },
  {
    "id": "renal",
    "name": "Renal — AKI / CKD / Glomerular",
    "questions": [
      {
        "q": "A 60-year-old woman develops fever, a maculopapular rash, and rising creatinine 10 days after starting a new antibiotic. Urine shows WBC casts and peripheral blood shows eosinophilia. What is the most likely diagnosis?",
        "options": [
          "Acute tubular necrosis",
          "IgA nephropathy",
          "Acute interstitial nephritis",
          "Post-streptococcal glomerulonephritis"
        ],
        "answer": 2,
        "layers": {
          "concept": "Acute interstitial nephritis — drug exposure + eosinophilia + WBC casts",
          "discriminator": "Drug exposure + fever + rash + eosinophilia + WBC casts = AIN (hypersensitivity reaction)",
          "trap": "Clinical Mimic — AIN vs ATN (drug history + eosinophilia + WBC casts)",
          "rule": "AIN = drug + fever/rash + eosinophilia + WBC casts; treat by stopping the drug"
        }
      },
      {
        "q": "A 45-year-old renal transplant recipient has an asymptomatic rise in serum creatinine 1 year after transplantation, despite stable immunosuppression. What is the most appropriate next step?",
        "options": [
          "Empirically increase immunosuppression",
          "Start empirical antibiotics",
          "Repeat creatinine in 3 months",
          "Renal allograft biopsy"
        ],
        "answer": 3,
        "layers": {
          "concept": "Renal transplant — rising creatinine requires biopsy before empirical treatment",
          "discriminator": "Asymptomatic rising creatinine post-transplant = biopsy first (rejection vs nephrotoxicity vs recurrence)",
          "trap": "Treatment misdirection — empirical immunosuppression without tissue diagnosis",
          "rule": "Rising creatinine post-transplant → biopsy first; never treat rejection empirically"
        }
      },
      {
        "q": "A 55-year-old man with decompensated cirrhosis and ascites develops progressive oliguria. Urine sodium is 8 mmol/L, urine osmolality is 650 mOsm/kg, and there is no proteinuria or haematuria. What is the most likely diagnosis?",
        "options": [
          "Acute tubular necrosis",
          "Post-renal obstruction",
          "Hepatorenal syndrome",
          "IgA nephropathy"
        ],
        "answer": 2,
        "layers": {
          "concept": "Hepatorenal syndrome — prerenal AKI in cirrhosis with low urine sodium",
          "discriminator": "Cirrhosis + oliguria + low U Na + concentrated urine + bland sediment = hepatorenal syndrome",
          "trap": "Clinical Mimic — hepatorenal vs ATN (low U Na + bland sediment)",
          "rule": "Hepatorenal = functional prerenal AKI in cirrhosis: low U Na, high U Osm, bland sediment"
        }
      },
      {
        "q": "A 3-year-old child develops bloody diarrhoea followed by oliguria, pallor, and bruising. Blood film shows schistocytes and thrombocytopenia; creatinine is raised. What is the most appropriate management?",
        "options": [
          "Antibiotics for the enteric infection",
          "Plasma exchange",
          "Platelet transfusion",
          "Supportive care and avoid antibiotics"
        ],
        "answer": 3,
        "layers": {
          "concept": "Haemolytic uraemic syndrome — E. coli O157, supportive care, no antibiotics",
          "discriminator": "Child + bloody diarrhoea + MAHA + thrombocytopenia + AKI = HUS (typical, post-enteric)",
          "trap": "Treatment misdirection — antibiotics for O157 (they worsen toxin release)",
          "rule": "Typical HUS = post-enteric (O157) → supportive care; antibiotics and platelet transfusion avoided"
        }
      },
      {
        "q": "A 30-year-old woman presents with fever, fluctuating confusion, and petechiae. Blood film shows schistocytes; platelets are 20,000/μL. There is no significant renal impairment. What is the most appropriate treatment?",
        "options": [
          "Platelet transfusion",
          "Plasma exchange",
          "Antibiotics",
          "Corticosteroids alone"
        ],
        "answer": 1,
        "layers": {
          "concept": "Thrombotic thrombocytopenic purpura — ADAMTS13 deficiency, plasma exchange",
          "discriminator": "Fever + neurological symptoms + MAHA + thrombocytopenia with MINIMAL renal involvement = TTP → plasma exchange",
          "trap": "Opposite — TTP (neurology dominant) vs HUS (renal dominant)",
          "rule": "TTP = ADAMTS13 deficiency → plasma exchange; platelet transfusion contraindicated"
        }
      },
      {
        "q": "A 20-year-old man with newly diagnosed Burkitt lymphoma develops oliguria 24 hours after starting chemotherapy. Labs show potassium 6.8 mmol/L, phosphate 7.5 mg/dL, uric acid 14 mg/dL, and calcium 6.0 mg/dL. What is the most likely diagnosis?",
        "options": [
          "Rhabdomyolysis",
          "Contrast nephropathy",
          "Acute interstitial nephritis",
          "Tumour lysis syndrome"
        ],
        "answer": 3,
        "layers": {
          "concept": "Tumour lysis syndrome — post-chemotherapy AKI with hyperK + hyperPO4 + hyperuricemia + hypocalcemia",
          "discriminator": "Chemotherapy + oliguria + hyperK + hyperPO4 + hyperuricemia + hypocalcemia = tumour lysis syndrome",
          "trap": "Clinical Mimic — TLS vs rhabdomyolysis (chemotherapy context + uric acid)",
          "rule": "TLS = post-chemo AKI with hyperK, hyperPO4, hyperuricemia, hypocalcemia → hydration + rasburicase"
        }
      },
      {
        "q": "According to KDIGO, which urine output criterion defines acute kidney injury?",
        "options": [
          "Urine output < 1 mL/kg/h for 4 hours",
          "Urine output < 0.5 mL/kg/h for 6 hours",
          "Urine output < 0.3 mL/kg/h for 12 hours",
          "Urine output < 2 mL/kg/h for 8 hours"
        ],
        "answer": 1,
        "layers": {
          "concept": "AKI definition — KDIGO urine output criterion",
          "discriminator": "KDIGO AKI = Cr rise ≥0.3 mg/dL in 48h OR urine output <0.5 mL/kg/h for 6 hours",
          "trap": "Unit/Number — the 0.5 mL/kg/h × 6-hour threshold",
          "rule": "KDIGO AKI: Cr ≥0.3 mg/dL in 48h OR urine output <0.5 mL/kg/h for 6h"
        }
      },
      {
        "q": "A 65-year-old man develops AKI after prolonged hypotension during cardiac surgery. Urine microscopy shows muddy brown granular casts and urine sodium is 60 mmol/L. Which part of the kidney is most likely affected?",
        "options": [
          "Glomeruli",
          "Renal vasculature",
          "Renal tubules (acute tubular necrosis)",
          "Collecting system (post-renal)"
        ],
        "answer": 2,
        "layers": {
          "concept": "Acute tubular necrosis — muddy brown casts + high urine sodium",
          "discriminator": "Post-hypotension AKI + muddy brown casts + U Na >40 = ATN (tubular injury)",
          "trap": "One-word discriminator — muddy brown casts = tubular injury",
          "rule": "ATN = muddy brown casts + U Na >40 (prerenal: hyaline casts + U Na <20)"
        }
      },
      {
        "q": "A 58-year-old woman has an eGFR of 35 mL/min/1.73 m² with known diabetic nephropathy. Which CKD stage does this represent?",
        "options": [
          "Stage 1",
          "Stage 3b",
          "Stage 2",
          "Stage 5"
        ],
        "answer": 1,
        "layers": {
          "concept": "CKD staging — eGFR thresholds",
          "discriminator": "eGFR 30-44 = stage 3b; 45-59 = 3a; 60-89 = 2; <15 = 5",
          "trap": "Unit/Number — the 30-44 vs 45-59 split (3a vs 3b)",
          "rule": "CKD stages: 3a = 45-59, 3b = 30-44, 4 = 15-29, 5 = <15"
        }
      },
      {
        "q": "A 35-year-old man presents with bilateral flank pain, hypertension, and haematuria. Imaging shows multiple bilateral renal cysts and his father died of a cerebral aneurysm. What is the most likely diagnosis?",
        "options": [
          "Simple renal cysts",
          "Autosomal dominant polycystic kidney disease",
          "Reflux nephropathy",
          "Medullary sponge kidney"
        ],
        "answer": 1,
        "layers": {
          "concept": "ADPKD — autosomal dominant, bilateral cysts, HTN, berry aneurysms",
          "discriminator": "Bilateral cysts + HTN + haematuria + family history of cerebral aneurysm = ADPKD",
          "trap": "Clinical Mimic — ADPKD vs simple cysts (family history + HTN + aneurysm)",
          "rule": "ADPKD = bilateral cysts + HTN + haematuria + berry aneurysms (AD inheritance)"
        }
      },
      {
        "q": "A 62-year-old hypertensive smoker develops recurrent 'flash' pulmonary oedema. After starting an ACE inhibitor, serum creatinine rises from 1.2 to 2.1 mg/dL within 1 week. What is the most likely cause?",
        "options": [
          "Benign ACEi-induced creatinine rise",
          "Contrast nephropathy",
          "Bilateral renal artery stenosis",
          "Acute interstitial nephritis"
        ],
        "answer": 2,
        "layers": {
          "concept": "Renal artery stenosis — flash pulmonary oedema + ACEi-induced Cr rise >30%",
          "discriminator": "Flash pulmonary oedema + >30% Cr rise after ACEi = bilateral renal artery stenosis",
          "trap": "Opposite — benign ACEi Cr rise (<30%) vs RAS (>30% rise)",
          "rule": "ACEi Cr rise >30% or flash pulmonary oedema = bilateral RAS (stop ACEi)"
        }
      },
      {
        "q": "A 50-year-old man with advanced CKD (eGFR 12) develops prolonged bleeding after tooth extraction. Platelet count is normal. Which agent most directly corrects the bleeding tendency?",
        "options": [
          "Desmopressin (DDAVP)",
          "Warfarin",
          "Platelet transfusion",
          "Vitamin K"
        ],
        "answer": 0,
        "layers": {
          "concept": "Uraemic bleeding — platelet dysfunction corrected by desmopressin",
          "discriminator": "CKD + bleeding with NORMAL platelet count = uraemic platelet dysfunction → DDAVP",
          "trap": "Treatment misdirection — platelet transfusion for a functional (not numeric) defect",
          "rule": "Uraemic bleeding (normal platelet count) → desmopressin; dialysis also helps"
        }
      },
      {
        "q": "A 48-year-old woman on peritoneal dialysis presents with abdominal pain and a cloudy effluent bag. What is the most appropriate initial step?",
        "options": [
          "Remove the peritoneal catheter immediately",
          "Switch to haemodialysis permanently",
          "Send effluent for cell count, gram stain, and culture, then start empirical antibiotics",
          "Observe for 48 hours"
        ],
        "answer": 2,
        "layers": {
          "concept": "Peritoneal dialysis — peritonitis diagnosis and empirical treatment",
          "discriminator": "Cloudy effluent + abdominal pain in PD patient = peritonitis → effluent analysis + empirical antibiotics",
          "trap": "One-word discriminator — cloudy effluent = peritonitis (not catheter removal first)",
          "rule": "PD peritonitis = cloudy effluent → cell count/culture + empirical IP antibiotics"
        }
      },
      {
        "q": "A patient is being prepared for maintenance haemodialysis. Which vascular access is preferred for long-term dialysis?",
        "options": [
          "Arteriovenous fistula",
          "Tunneled central venous catheter",
          "Non-tunneled femoral catheter",
          "Arteriovenous graft"
        ],
        "answer": 0,
        "layers": {
          "concept": "Haemodialysis access — AV fistula is preferred",
          "discriminator": "AV fistula = lowest infection/thrombosis, best long-term patency → preferred access",
          "trap": "Treatment ladder — catheter (urgent) vs fistula (elective, preferred)",
          "rule": "AV fistula preferred for long-term haemodialysis (lowest infection/thrombosis)"
        }
      },
      {
        "q": "A 55-year-old man with CKD stage 4 is counselled on dietary modification. Which dietary restriction is most important to slow progression and prevent complications?",
        "options": [
          "Restrict dietary phosphate and potassium",
          "Increase protein intake",
          "Restrict carbohydrates only",
          "Increase potassium intake"
        ],
        "answer": 0,
        "layers": {
          "concept": "CKD diet — phosphate and potassium restriction",
          "discriminator": "CKD diet: restrict phosphate (CKD-MBD) and potassium (hyperkalaemia); moderate protein",
          "trap": "Opposite — increasing protein/potassium in CKD (both harmful)",
          "rule": "CKD diet: restrict phosphate, potassium, sodium; moderate protein (not high)"
        }
      },
      {
        "q": "A 60-year-old man with a 20-year history of poorly controlled hypertension has slowly progressive renal impairment with mild proteinuria (<1 g/day). Urine sediment is bland. What is the most likely cause?",
        "options": [
          "Diabetic nephropathy",
          "Membranous nephropathy",
          "Hypertensive nephrosclerosis",
          "IgA nephropathy"
        ],
        "answer": 2,
        "layers": {
          "concept": "Hypertensive nephrosclerosis — long-standing HTN, slow decline, mild proteinuria",
          "discriminator": "Long-standing HTN + slow CKD + mild proteinuria + bland sediment = hypertensive nephrosclerosis",
          "trap": "Clinical Mimic — nephrosclerosis (mild proteinuria) vs diabetic nephropathy (heavy)",
          "rule": "Hypertensive nephrosclerosis = long-standing HTN + slow CKD + mild proteinuria + bland sediment"
        }
      },
      {
        "q": "A 7-year-old boy develops palpable purpura on the buttocks and legs, abdominal pain, and arthralgia 2 weeks after an upper respiratory infection. Urine shows blood and protein. What is the most likely diagnosis?",
        "options": [
          "Henoch-Schönlein purpura (IgA vasculitis)",
          "Idiopathic thrombocytopenic purpura",
          "Meningococcaemia",
          "Acute leukaemia"
        ],
        "answer": 0,
        "layers": {
          "concept": "Henoch-Schönlein purpura — palpable purpura + abdominal pain + arthralgia + renal",
          "discriminator": "Palpable purpura (buttocks/legs) + abdominal pain + arthralgia + haematuria = HSP",
          "trap": "Clinical Mimic — HSP vs ITP (palpable vs petechial purpura + systemic features)",
          "rule": "HSP = palpable purpura + abdominal pain + arthralgia + renal involvement (IgA vasculitis)"
        }
      },
      {
        "q": "A 45-year-old man presents with sinusitis, haemoptysis, and rapidly progressive renal failure. Urine shows RBC casts. Which antibody is most likely to be positive?",
        "options": [
          "c-ANCA (anti-PR3)",
          "p-ANCA (anti-MPO)",
          "Anti-GBM antibody",
          "Anti-dsDNA antibody"
        ],
        "answer": 0,
        "layers": {
          "concept": "Granulomatosis with polyangiitis — c-ANCA/PR3, ENT + pulmonary-renal",
          "discriminator": "Sinusitis + haemoptysis + RPGN + RBC casts = GPA → c-ANCA (PR3)",
          "trap": "One-word discriminator — c-ANCA/PR3 (GPA) vs p-ANCA/MPO (MPA)",
          "rule": "GPA = ENT + lung + kidney + c-ANCA (PR3); treat with cyclophosphamide/rituximab + steroids"
        }
      },
      {
        "q": "A 55-year-old woman has rapidly progressive glomerulonephritis with haematuria, but NO upper respiratory or sinus involvement. Renal biopsy shows pauci-immune crescentic GN. Which antibody is most likely positive?",
        "options": [
          "c-ANCA (anti-PR3)",
          "p-ANCA (anti-MPO)",
          "Anti-GBM antibody",
          "Anti-PLA2R antibody"
        ],
        "answer": 1,
        "layers": {
          "concept": "Microscopic polyangiitis — p-ANCA/MPO, pauci-immune crescentic GN without ENT",
          "discriminator": "Pauci-immune crescentic GN WITHOUT ENT involvement = microscopic polyangiitis → p-ANCA (MPO)",
          "trap": "Opposite — MPA (p-ANCA/MPO, no ENT) vs GPA (c-ANCA/PR3, ENT)",
          "rule": "MPA = pauci-immune RPGN without ENT + p-ANCA (MPO); GPA has ENT + c-ANCA (PR3)"
        }
      },
      {
        "q": "A renal biopsy in a patient with rapidly progressive glomerulonephritis shows crescentic GN with linear immunofluorescence for IgG along the glomerular basement membrane. Which condition does this represent?",
        "options": [
          "Anti-GBM disease (Goodpasture syndrome)",
          "IgA nephropathy",
          "Minimal change disease",
          "Membranous nephropathy"
        ],
        "answer": 0,
        "layers": {
          "concept": "RPGN — anti-GBM disease with linear IgG on immunofluorescence",
          "discriminator": "Crescentic GN + LINEAR IgG along GBM = anti-GBM disease (Goodpasture)",
          "trap": "Classification trap — linear (anti-GBM) vs granular (immune complex) vs pauci-immune (ANCA)",
          "rule": "RPGN IF patterns: linear = anti-GBM, granular = immune complex, pauci-immune = ANCA"
        }
      },
      {
        "q": "A 40-year-old man with nephrotic syndrome due to membranous nephropathy develops sudden left flank pain and gross haematuria. What complication should be suspected?",
        "options": [
          "Renal artery stenosis",
          "Papillary necrosis",
          "Urinary tract infection",
          "Renal vein thrombosis"
        ],
        "answer": 3,
        "layers": {
          "concept": "Nephrotic syndrome — hypercoagulability → renal vein thrombosis",
          "discriminator": "Nephrotic syndrome + sudden flank pain + gross haematuria = renal vein thrombosis",
          "trap": "Severity under-recognition — flank pain in nephrotic = thrombosis, not infection",
          "rule": "Nephrotic syndrome → hypercoagulable → renal vein thrombosis (flank pain + haematuria)"
        }
      },
      {
        "q": "A 30-year-old man with untreated HIV infection develops nephrotic-range proteinuria and progressive renal failure. Biopsy shows collapsing focal segmental glomerulosclerosis. What is the most likely cause?",
        "options": [
          "Minimal change disease",
          "HIV-associated nephropathy",
          "Amyloidosis",
          "Lupus nephritis"
        ],
        "answer": 1,
        "layers": {
          "concept": "HIV-associated nephropathy — collapsing FSGS in HIV",
          "discriminator": "HIV + nephrotic-range proteinuria + collapsing FSGS = HIV-associated nephropathy",
          "trap": "Clinical Mimic — collapsing FSGS (HIVAN) vs classic FSGS vs MCD",
          "rule": "HIVAN = collapsing FSGS in untreated HIV → antiretroviral therapy"
        }
      },
      {
        "q": "A 25-year-old woman has persistent microscopic haematuria found on a routine check. She is otherwise well with normal blood pressure, normal renal function, and no proteinuria. Her mother has the same finding. What is the most likely diagnosis?",
        "options": [
          "Thin basement membrane disease",
          "IgA nephropathy",
          "Alport syndrome",
          "Polycystic kidney disease"
        ],
        "answer": 0,
        "layers": {
          "concept": "Thin basement membrane disease — benign familial haematuria",
          "discriminator": "Isolated persistent haematuria + family history + normal BP/function = thin basement membrane disease",
          "trap": "Clinical Mimic — thin basement membrane (benign) vs Alport (progressive + deafness)",
          "rule": "Thin basement membrane = benign familial haematuria; Alport = haematuria + deafness + renal failure"
        }
      },
      {
        "q": "A 60-year-old man with long-standing rheumatoid arthritis develops nephrotic-range proteinuria and renal impairment. Renal biopsy shows apple-green birefringence with Congo red staining. What is the most likely diagnosis?",
        "options": [
          "Membranous nephropathy",
          "Diabetic nephropathy",
          "Focal segmental glomerulosclerosis",
          "Renal amyloidosis"
        ],
        "answer": 3,
        "layers": {
          "concept": "Renal amyloidosis — Congo red apple-green birefringence in chronic inflammation",
          "discriminator": "Chronic inflammation + nephrotic syndrome + Congo red apple-green = AA amyloidosis",
          "trap": "One-word discriminator — Congo red apple-green birefringence",
          "rule": "AA amyloidosis (chronic inflammation) → nephrotic + Congo red apple-green birefringence"
        }
      },
      {
        "q": "A 12-year-old girl with recurrent urinary tract infections and hypertension has renal scarring on DMSA scan, most prominent at the upper and lower poles. What is the most likely underlying problem?",
        "options": [
          "Posterior urethral valves",
          "Renal artery stenosis",
          "Autosomal dominant polycystic kidney disease",
          "Vesicoureteral reflux"
        ],
        "answer": 3,
        "layers": {
          "concept": "Reflux nephropathy — VUR causes polar renal scarring",
          "discriminator": "Recurrent UTIs + HTN + polar scarring on DMSA = vesicoureteral reflux (reflux nephropathy)",
          "trap": "Clinical Mimic — reflux nephropathy (polar scarring) vs other CKD causes",
          "rule": "VUR → reflux nephropathy: recurrent UTIs + polar renal scarring + HTN"
        }
      }
    ]
  },
  {
    "id": "urology",
    "name": "Urology",
    "questions": [
      {
        "q": "A 45-year-old man presents with his first renal colic. Non-contrast CT shows a radio-opaque stone in the left renal pelvis. Which is the most common composition of such stones?",
        "options": [
          "Calcium oxalate",
          "Uric acid",
          "Cystine",
          "Struvite (triple phosphate)"
        ],
        "answer": 0,
        "layers": {
          "concept": "Calcium oxalate — most common renal stone (~80%), radio-opaque",
          "discriminator": "Calcium oxalate = ~80% of stones, radio-opaque (only uric acid/cystine are radiolucent)",
          "trap": "Number/Stat — calcium oxalate most common (80%) vs uric acid radiolucent",
          "rule": "Calcium oxalate = most common (80%) renal stone; radio-opaque; hydration + thiazide for prevention"
        }
      },
      {
        "q": "A 50-year-old man with gout presents with renal colic. Plain abdominal X-ray shows no visible stone, but CT confirms a renal calculus. What is the most likely composition and treatment principle?",
        "options": [
          "Uric acid — radiolucent, treat with urine alkalinization",
          "Calcium oxalate — radio-opaque, treat with thiazide",
          "Struvite — infected urine, treat with antibiotics alone",
          "Cystine — hereditary, treat with hydration only"
        ],
        "answer": 0,
        "layers": {
          "concept": "Uric acid stone — radiolucent, gout association, alkalinize urine",
          "discriminator": "Gout + radiolucent stone = uric acid → alkalinize urine (and xanthine oxidase inhibitors)",
          "trap": "Clinical Mimic — radiolucent (uric acid) vs radio-opaque (calcium oxalate)",
          "rule": "Uric acid stone = radiolucent + gout → urine alkalinization (K-citrate) + xanthine oxidase inhibitor"
        }
      },
      {
        "q": "A 19-year-old with a history of childhood renal stones has a stone analysis showing hexagonal crystals. Which inheritance pattern and treatment is correct?",
        "options": [
          "X-linked dominant — allopurinol",
          "Autosomal dominant — thiazide",
          "Autosomal recessive (cystinuria) — hydration + penicillamine/alkalinization",
          "Mitochondrial — hydration alone"
        ],
        "answer": 2,
        "layers": {
          "concept": "Cystine stone — hereditary (cystinuria), hexagon crystals, penicillamine",
          "discriminator": "Hexagonal crystals = cystine; autosomal recessive cystinuria → hydration + penicillamine/captopril + alkalinization",
          "trap": "One-word discriminator — hexagon crystals = cystine",
          "rule": "Cystinuria = AR, hexagon crystals; treat with hydration + penicillamine/captopril + alkalinization"
        }
      },
      {
        "q": "A 40-year-old woman with Crohn disease (extensive ileal resection) develops recurrent calcium oxalate stones. What is the underlying mechanism?",
        "options": [
          "Enteric hyperoxaluria from fat malabsorption",
          "Hyperparathyroidism",
          "Primary urate overproduction",
          "Renal tubular acidosis"
        ],
        "answer": 0,
        "layers": {
          "concept": "Enteric hyperoxaluria — fat malabsorption → increased oxalate absorption",
          "discriminator": "IBD/bariatric/ileal resection + fat malabsorption → enteric hyperoxaluria → calcium oxalate stones",
          "trap": "Clinical Mimic — IBD/bariatric → oxalate stones (enteric hyperoxaluria)",
          "rule": "Enteric hyperoxaluria: fat malabsorption → free oxalate absorbed → Ca oxalate stones (Crohn, bariatric)"
        }
      },
      {
        "q": "A 55-year-old woman with recurrent renal stones is found to have hypercalcaemia with low phosphate and elevated PTH. Which stone type is she forming?",
        "options": [
          "Uric acid stones",
          "Cystine stones",
          "Calcium (calcium oxalate / phosphate) stones",
          "Struvite stones"
        ],
        "answer": 2,
        "layers": {
          "concept": "Primary hyperparathyroidism — hypercalciuria → calcium stones (bones, stones, groans)",
          "discriminator": "High Ca + low PO4 + high PTH + stones = primary HPT → calcium-containing stones",
          "trap": "Opposite — HPT (high Ca → calcium stones) vs uric acid (low Ca, radiolucent)",
          "rule": "Primary HPT → hypercalciuria → calcium stones (high Ca, low PO4, high PTH)"
        }
      },
      {
        "q": "A 58-year-old smoker presents with painless gross haematuria, left flank pain, and a palpable abdominal mass. CT shows a 9 cm heterogeneous renal mass extending into the renal vein. What is the most likely diagnosis?",
        "options": [
          "Transitional cell carcinoma of the renal pelvis",
          "Renal cell carcinoma",
          "Wilms tumour",
          "Angiomyolipoma"
        ],
        "answer": 1,
        "layers": {
          "concept": "Renal cell carcinoma — painless haematuria + flank mass + paraneoplastic, smoking",
          "discriminator": "Adult + painless haematuria + flank mass + renal vein extension + smoking = RCC",
          "trap": "Severity under-recognition — painless haematuria in adult = malignancy until excluded",
          "rule": "RCC = adult painless haematuria + flank mass + paraneoplastic (polycythaemia); smoking; nephrectomy"
        }
      },
      {
        "q": "A 3-year-old child is found to have a large, smooth, unilateral abdominal mass that does not cross the midline. There is no haematuria. What is the most likely diagnosis?",
        "options": [
          "Neuroblastoma",
          "Renal cell carcinoma",
          "Hydronephrosis",
          "Wilms tumour (nephroblastoma)"
        ],
        "answer": 3,
        "layers": {
          "concept": "Wilms tumour — pediatric abdominal mass <5 years, unilateral, smooth",
          "discriminator": "Child <5 + smooth unilateral abdominal mass (no cross midline) = Wilms tumour",
          "trap": "Clinical Mimic — Wilms (smooth, unilateral, <5y) vs neuroblastoma (midline, invasive)",
          "rule": "Wilms = nephroblastoma, child <5, smooth unilateral abdominal mass, WT1; nephrectomy + chemo"
        }
      },
      {
        "q": "A 60-year-old heavy smoker presents with painless gross haematuria. Cystoscopy is normal, but retrograde pyelography shows a filling defect in the renal pelvis. What is the most likely diagnosis?",
        "options": [
          "Transitional cell carcinoma of the renal pelvis",
          "Renal cell carcinoma",
          "Calculous disease",
          "Renal tuberculosis"
        ],
        "answer": 0,
        "layers": {
          "concept": "Upper-tract transitional cell carcinoma — smoking, haematuria, filling defect",
          "discriminator": "Smoker + painless haematuria + renal pelvis filling defect (normal cystoscopy) = upper-tract TCC",
          "trap": "Clinical Mimic — TCC (smoking, urothelium) vs RCC (parenchymal mass)",
          "rule": "Upper-tract TCC = smoker + haematuria + pelvic filling defect; nephroureterectomy"
        }
      },
      {
        "q": "A 28-year-old man has a painless testicular mass. Tumour markers show an elevated alpha-fetoprotein (AFP) and normal human chorionic gonadotropin (hCG). Which histological category does this favour?",
        "options": [
          "Pure seminoma",
          "Leydig cell tumour",
          "Non-seminomatous germ cell tumour",
          "Lymphoma"
        ],
        "answer": 2,
        "layers": {
          "concept": "Testicular germ cell tumour — AFP elevated implies non-seminomatous component",
          "discriminator": "Elevated AFP = NON-seminomatous GCT (seminoma has normal AFP; hCG may be raised)",
          "trap": "Classification trap — AFP normal in seminoma; AFP↑ = non-seminomatous",
          "rule": "Testicular GCT: AFP↑ = non-seminoma (seminoma has NORMAL AFP, may raise hCG)"
        }
      },
      {
        "q": "A 1-year-old boy has an undescended right testis that has not spontaneously descended. What is the most important long-term concern and management?",
        "options": [
          "No cancer risk; observe until adulthood",
          "Immediate orchiectomy",
          "Increased testicular cancer risk + infertility; orchiopexy before puberty",
          "Hormone therapy cures the cancer risk"
        ],
        "answer": 2,
        "layers": {
          "concept": "Cryptorchidism — infertility + cancer risk; orchiopexy (not orchiectomy)",
          "discriminator": "Undescended testis = infertility + germ-cell cancer risk; fix with orchiopexy (not orchiectomy)",
          "trap": "Treatment misdirection — observe/orchiectomy vs orchiopexy before puberty",
          "rule": "Undescended testis = infertility + germ-cell cancer risk; orchiopexy before puberty"
        }
      },
      {
        "q": "A 26-year-old man presents with infertility and a 'bag of worms' sensation in the left scrotum that diminishes when supine. What is the most likely finding and association?",
        "options": [
          "Right varicocele — normal variant",
          "Hydrocele — transilluminates",
          "Epididymal cyst — separate from testis",
          "Left varicocele — dilated pampiniform plexus; associated with left RCC"
        ],
        "answer": 3,
        "layers": {
          "concept": "Varicocele — left-sided (venous drainage), infertility, adult right-side suggests RCC",
          "discriminator": "Left 'bag of worms' scrotal swelling = varicocele; NEW right-sided varicocele suggests RCC",
          "trap": "Clinical Mimic — left varicocele (common) vs new right varicocele (RCC until excluded)",
          "rule": "Varicocele: left common (infertility); new RIGHT-sided in adult = suspect RCC (venous obstruction)"
        }
      },
      {
        "q": "A couple presents with infertility. The man has a low semen volume and a left varicocele on exam. Which initial step is most appropriate?",
        "options": [
          "Immediate IVF without evaluation",
          "Semen analysis; correct varicocele if present before assisted reproduction",
          "Testosterone replacement",
          "Prostate biopsy"
        ],
        "answer": 1,
        "layers": {
          "concept": "Male infertility — semen analysis first; varicocele correction improves fertility",
          "discriminator": "Infertility workup = semen analysis; varicocele (correctable) is a key reversible cause",
          "trap": "Treatment misdirection — testosterone (suppresses sperm) vs varicocele repair",
          "rule": "Male infertility: semen analysis; varicocele repair is a reversible cause; testosterone worsens it"
        }
      },
      {
        "q": "A 60-year-old man with poor hygiene has inability to retract the foreskin over the glans, with no acute pain or swelling. A younger man presents acutely with a retracted foreskin trapped behind the glans with pain and oedema. Which pairing is correct?",
        "options": [
          "First = paraphimosis; second = phimosis",
          "First = phimosis; second = paraphimosis",
          "Both are phimosis",
          "Both are paraphimosis"
        ],
        "answer": 1,
        "layers": {
          "concept": "Phimosis vs paraphimosis — cannot retract vs trapped retracted foreskin",
          "discriminator": "Phimosis = cannot retract foreskin; paraphimosis = retracted foreskin trapped (acute, needs reduction)",
          "trap": "Opposite — phimosis (cannot retract) vs paraphimosis (trapped retracted)",
          "rule": "Phimosis = tight foreskin (can't retract); paraphimosis = retracted foreskin trapped (urgent)"
        }
      },
      {
        "q": "A 55-year-old uncircumcised man presents with a non-healing ulcerative lesion on the glans penis. Which is the strongest associated risk factor?",
        "options": [
          "Poor hygiene / phimosis with HPV infection",
          "Circumcision in infancy",
          "Low-risk sexual behaviour",
          "Diabetes mellitus"
        ],
        "answer": 0,
        "layers": {
          "concept": "Penile cancer — HPV + phimosis/poor hygiene; ulcer on glans",
          "discriminator": "Glans ulcer in uncircumcised man = penile squamous cell carcinoma (HPV, phimosis risk)",
          "trap": "Clinical Mimic — penile ulcer (cancer) vs chancre (syphilis) vs herpes",
          "rule": "Penile SCC = glans ulcer, HPV + phimosis/poor hygiene risk; infant circumcision protective"
        }
      },
      {
        "q": "A 50-year-old man reports a progressively curved, painful erection with a palpable firm band on the dorsal penis. What is the diagnosis?",
        "options": [
          "Penile fracture",
          "Priapism",
          "Balanitis",
          "Peyronie disease (fibrous plaque)"
        ],
        "answer": 3,
        "layers": {
          "concept": "Peyronie disease — fibrous plaque causing penile curvature",
          "discriminator": "Palpable fibrous plaque + curvature = Peyronie disease (tunica albuginea fibrosis)",
          "trap": "One-word discriminator — fibrous plaque = Peyronie",
          "rule": "Peyronie = fibrous tunical plaque → curvature; distinct from fracture (trauma) and priapism"
        }
      },
      {
        "q": "A 30-year-old man presents with dysuria, fever, and perineal pain; the prostate is tender and boggy on exam. What is the most appropriate initial antibiotic?",
        "options": [
          "Oral amoxicillin alone",
          "Topical antifungal",
          "Intravenous acyclovir",
          "Fluoroquinolone (e.g., ciprofloxacin)"
        ],
        "answer": 3,
        "layers": {
          "concept": "Acute bacterial prostatitis — fluoroquinolone, systemic symptoms",
          "discriminator": "Acute prostatitis (fever + perineal pain + tender prostate) = fluoroquinolone (cover Gram-negatives)",
          "trap": "Treatment ladder — fluoroquinolone (prostate penetration) vs inadequate agents",
          "rule": "Acute bacterial prostatitis: fluoroquinolone (good prostatic penetration); fever + tender prostate"
        }
      },
      {
        "q": "A 24-year-old pregnant woman at 16 weeks is found to have asymptomatic bacteriuria on screening. What is the most appropriate management?",
        "options": [
          "Treat with a pregnancy-safe antibiotic (e.g., nitrofurantoin/cephalexin)",
          "No treatment, reassure",
          "Immediate intravenous antibiotics",
          "Repeat only at term"
        ],
        "answer": 0,
        "layers": {
          "concept": "Asymptomatic bacteriuria in pregnancy — treat to prevent pyelonephritis",
          "discriminator": "Pregnancy + asymptomatic bacteriuria = TREAT (nitrofurantoin/cephalexin) to prevent pyelonephritis",
          "trap": "Population-specific — screen/treat bacteriuria in pregnancy (not in healthy non-pregnant women)",
          "rule": "Asymptomatic bacteriuria in pregnancy = treat (nitrofurantoin/cephalexin); reduces pyelonephritis risk"
        }
      },
      {
        "q": "A 28-year-old woman presents with fever, flank pain, and costovertebral angle tenderness. Urinalysis shows leucocytes and nitrites. What is the most likely causative organism?",
        "options": [
          "Staphylococcus aureus",
          "Escherichia coli",
          "Pseudomonas aeruginosa",
          "Candida albicans"
        ],
        "answer": 1,
        "layers": {
          "concept": "Acute pyelonephritis — E. coli is the most common pathogen",
          "discriminator": "Uncomplicated pyelonephritis/UTI = E. coli (~80-90%) from ascending faecal flora",
          "trap": "One-word discriminator — E. coli most common (ascending faecal flora)",
          "rule": "Acute pyelonephritis: E. coli is the most common pathogen (ascending faecal flora, nitrite+)"
        }
      },
      {
        "q": "A 70-year-old woman with a urinary catheter develops fever, rigors, and hypotension with a lactate of 3.2 mmol/L. What is the most appropriate immediate management?",
        "options": [
          "Oral antibiotics and observe",
          "Catheter removal only",
          "Intravenous antibiotics + vasopressors for septic shock",
          "Fluids alone without antibiotics"
        ],
        "answer": 2,
        "layers": {
          "concept": "Urosepsis — source of septic shock; antibiotics + vasopressors",
          "discriminator": "Urosepsis with hypotension + lactate >2 = septic shock → antibiotics + vasopressors (fluids + source control)",
          "trap": "Severity under-recognition — urosepsis as septic shock source; need vasopressors not just fluids",
          "rule": "Urosepsis causing septic shock: antibiotics + vasopressors (noradrenaline) + source control"
        }
      },
      {
        "q": "In which of the following patients is treatment of asymptomatic bacteriuria clearly indicated?",
        "options": [
          "A healthy postmenopausal woman",
          "A pregnant woman at 20 weeks",
          "An elderly man in a nursing home",
          "A young woman with a single positive screen"
        ],
        "answer": 1,
        "layers": {
          "concept": "Asymptomatic bacteriuria — treat in pregnancy and before urologic procedures",
          "discriminator": "Treat asymptomatic bacteriuria only in pregnancy and before invasive urologic procedures",
          "trap": "Treatment misdirection — treating ASB in elderly/healthy (harmful) vs pregnancy (indicated)",
          "rule": "Asymptomatic bacteriuria: treat in PREGNANCY and before urologic procedures; not in elderly/healthy"
        }
      },
      {
        "q": "A 25-year-old man with a T6 spinal cord injury has recurrent urinary tract infections and incomplete emptying. Which management is most appropriate?",
        "options": [
          "Indwelling urethral catheter permanently",
          "Fluid restriction only",
          "Anticholinergic to cause retention",
          "Clean intermittent self-catheterization"
        ],
        "answer": 3,
        "layers": {
          "concept": "Neurogenic bladder — intermittent catheterization to protect upper tracts",
          "discriminator": "Spinal cord injury neurogenic bladder = clean intermittent catheterization (protects kidneys)",
          "trap": "Treatment ladder — intermittent catheterization (kidney protection) vs indwelling",
          "rule": "Neurogenic bladder (SCI): clean intermittent catheterization protects upper tracts; avoid permanent indwelling"
        }
      },
      {
        "q": "A 30-year-old man with a cervical spinal cord injury suddenly develops a severe headache, sweating, and a blood pressure of 200/110 mmHg. The trigger is most commonly:",
        "options": [
          "Lower limb fracture",
          "Hypoglycaemia",
          "Pulmonary embolism",
          "Bladder distension (full catheter bag / blocked catheter)"
        ],
        "answer": 3,
        "layers": {
          "concept": "Autonomic dysreflexia — bladder distension is the most common trigger",
          "discriminator": "SCI above T6 + sudden hypertension/headache/sweating = autonomic dysreflexia; bladder trigger",
          "trap": "One-word discriminator — bladder distension = most common dysreflexia trigger",
          "rule": "Autonomic dysreflexia: SCI above T6 + HTN/headache/sweating; bladder distension is top trigger"
        }
      },
      {
        "q": "An 80-year-old man with long-standing bladder outlet obstruction has constant dribbling incontinence with a palpable bladder. Which type of incontinence is this?",
        "options": [
          "Overflow incontinence",
          "Stress incontinence",
          "Urge incontinence",
          "Functional incontinence"
        ],
        "answer": 0,
        "layers": {
          "concept": "Overflow incontinence — chronic retention → dribbling, palpable bladder",
          "discriminator": "Incomplete emptying + dribbling + palpable bladder = overflow incontinence",
          "trap": "Classification trap — overflow (palpable full bladder) vs stress/urge",
          "rule": "Overflow incontinence = chronic retention → dribbling + palpable bladder (BPH, neurogenic)"
        }
      },
      {
        "q": "A 45-year-old man with a history of recurrent urethral discharge and prior catheterisation has a weak stream, terminal dribbling, and a palpable bladder. What is the most likely cause?",
        "options": [
          "Overactive bladder",
          "Urethral stricture",
          "Urinary tract infection",
          "Nephrolithiasis"
        ],
        "answer": 1,
        "layers": {
          "concept": "Urethral stricture — obstructive voiding from scarring (catheter/trauma/STD)",
          "discriminator": "Weak stream + terminal dribbling + palpable bladder after catheter/STD = urethral stricture",
          "trap": "Clinical Mimic — stricture (obstructive, palpable bladder) vs overactive bladder (urgency)",
          "rule": "Urethral stricture: obstructive voiding from scarring (catheter/trauma/STD); dilation/urethroplasty"
        }
      },
      {
        "q": "During a hysterectomy, the ureter is most commonly injured at which anatomical relationship?",
        "options": [
          "At the renal hilum",
          "At the ureterovesical junction only",
          "Where it crosses under the uterine artery ('water under the bridge')",
          "In the posterior abdominal wall lateral to psoas"
        ],
        "answer": 2,
        "layers": {
          "concept": "Iatrogenic ureteric injury — at the uterine artery crossing during pelvic surgery",
          "discriminator": "Ureter injury in hysterectomy = at the uterine artery crossing (distal third, 'water under the bridge')",
          "trap": "One-word discriminator — 'water under the bridge' (ureter under uterine artery)",
          "rule": "Ureter runs UNDER the uterine artery ('water under the bridge'); distal third = common iatrogenic injury site"
        }
      }
    ]
  }
];

const TIPS = [
  "Syllabus is the spine",
  "MCQs are the bloodstream",
  "The error log is sacred",
  "Name the discriminator",
  "Read the last line first",
  "Commit before you check",
  "Wrong answers are data",
  "Space for next, 1 to 5 to answer",
  "Concept before recall",
  "Trap is in the wording",
  "Rule out before ruling in",
  "High-yield links compound"
];
