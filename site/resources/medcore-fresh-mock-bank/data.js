/* MedCORE Fresh Mock Bank · data — generated from the NRE Prep 25MCQs fresh mock sets */
const SUBJECTS = [
  {
    "id": "diabetes",
    "name": "MODY — Maturity-Onset Diabetes of the Young",
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
          "rule": "MODY: young, lean, autosomal dominant, C-peptide positive; often sulfonylurea-responsive (HNF1A)",
          "highyield": "Medicine — Diabetes",
          "hook": "Young lean diabetic + AD family history + intact C-peptide = MODY (sulfonylurea-responsive)",
          "others": {
            "A": "Obesity/insulin resistance suggests type 2 diabetes, not the typical MODY profile.",
            "B": "Autoantibodies and ketoacidosis suggest type 1 diabetes, not MODY.",
            "D": "Exocrine insufficiency suggests type 3c (pancreatogenic) diabetes."
          }
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
          "rule": "Gestational diabetes: 75g OGTT (fasting ≥92, 1h ≥180, 2h ≥153); diet ± insulin; postpartum test",
          "highyield": "Obstetrics — Diabetes in pregnancy",
          "hook": "GDM: OGTT at 24-28w; any of fasting ≥92/1h ≥180/2h ≥153 = GDM → diet then insulin",
          "others": {
            "A": "Meeting a threshold diagnoses GDM; this is not normal tolerance.",
            "B": "Pre-existing diabetes is diagnosed by elevated glucose BEFORE pregnancy, not a GDM OGTT.",
            "C": "These values meet diagnostic thresholds, not just 'impaired' — treatment is indicated."
          }
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
          "rule": "LADA: adult-onset autoimmune diabetes (GAD+), T2-like onset, progresses to insulin; not MODY",
          "highyield": "Medicine — Diabetes",
          "hook": "Adult 'T2DM' + GAD antibodies + early insulin need = LADA (not MODY/type 2)",
          "others": {
            "A": "Typical type 2 lacks autoantibodies and rarely needs insulin so soon without obesity.",
            "B": "MODY is monogenic and antibody-negative with dominant family history.",
            "D": "Type 3c follows pancreatic disease and shows exocrine insufficiency."
          }
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
          "rule": "Proliferative diabetic retinopathy: neovascularisation → panretinal photocoagulation; screen annually",
          "highyield": "Medicine — Diabetes complications",
          "hook": "Neovascularisation/vitreous bleed = proliferative retinopathy → urgent panretinal laser",
          "others": {
            "A": "Antibiotics do not treat neovascular retinopathy.",
            "B": "Cataract surgery addresses lens opacity, not proliferative retinopathy.",
            "C": "Observation risks irreversible blindness from tractional detachment."
          }
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
          "rule": "Distal symmetric sensorimotor neuropathy: stocking loss + absent ankle jerks; foot care prevents ulcers",
          "highyield": "Medicine — Diabetes complications",
          "hook": "Symmetric stocking sensory loss + lost ankle jerks, power preserved = diabetic peripheral neuropathy",
          "others": {
            "B": "Mononeuritis causes asymmetric, often painful single-nerve deficits.",
            "C": "GBS is acute ascending weakness with areflexia, not a chronic stocking sensory loss.",
            "D": "Myasthenia causes fatigable weakness, not sensory loss."
          }
        }
      },
      {
        "q": "A 55-year-old diabetic develops sudden severe unilateral periorbital pain with ptosis, a dilated non-reactive pupil, and an inability to move the eye upward or inward. Which feature points to a diabetic mononeuritis rather than a posterior communicating artery aneurysm?",
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
          "rule": "Diabetic CN III palsy: painful, pupil-sparing (ischaemic); aneurysm = fixed dilated pupil (emergency)",
          "highyield": "Medicine — Diabetes complications",
          "hook": "Painful CN III palsy + pupil-sparing = diabetic ischemic mononeuritis (aneurysm fixes the pupil)",
          "others": {
            "A": "Diabetic palsy spares the pupil; a fixed dilated pupil suggests aneurysm, not diabetes.",
            "C": "Diabetic CN III palsy is typically painful, not painless.",
            "D": "It is usually unilateral, not bilateral."
          }
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
          "rule": "Diabetic gastroparesis: vagal autonomic neuropathy → delayed emptying; normal endoscopy; prokinetics",
          "highyield": "Medicine — Diabetes complications",
          "hook": "Nausea + vomiting undigested food + normal scope in DM = gastroparesis (vagal neuropathy)",
          "others": {
            "A": "PUD would show a lesion on endoscopy, which was normal here.",
            "C": "Mechanical obstruction would show a luminal block on scope/imaging.",
            "D": "Pancreatic insufficiency causes steatorrhea, not vomiting of undigested food."
          }
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
          "rule": "Charcot foot: neuropathic, warm/swollen, rocker-bottom deformity; strict offloading (not antibiotics)",
          "highyield": "Medicine — Diabetes complications",
          "hook": "Warm swollen neuropathic foot + rocker-bottom + fractures = Charcot; offload, don't just antibiotic",
          "others": {
            "A": "Cellulitis causes warmth/swelling but with fever/leukocytosis and no bony fragmentation.",
            "B": "DVT causes swelling but not the rocker-bottom deformity or fractures.",
            "D": "Gout is acutely painful with urate crystals, not a painless neuropathic collapse."
          }
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
          "rule": "Neuropathic foot ulcer: painless, warm, palpable pulses; ischaemic: painful, cool, absent pulses (PAD)",
          "highyield": "Medicine — Diabetes complications",
          "hook": "Painless warm foot with pulses = neuropathic ulcer; painful cold foot no pulses = ischaemic",
          "others": {
            "A": "Infection is a complication, not the primary classification of these ulcers.",
            "B": "Venous ulcers occur in the gaiter area with oedema/varicosities, not this picture.",
            "C": "The attributions are reversed — the painless warm one is neuropathic, not arterial."
          }
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
          "rule": "Type 3c diabetes: pancreatic disease + exocrine insufficiency (steatorrhoea, low elastase); needs insulin",
          "highyield": "Medicine — Diabetes",
          "hook": "Diabetes + steatorrhoea + low faecal elastase = type 3c (pancreatogenic)",
          "others": {
            "B": "Type 1 lacks exocrine pancreatic insufficiency and steatorrhoea.",
            "C": "Type 2 is not associated with steatorrhoea or low faecal elastase.",
            "D": "MODY is monogenic and not accompanied by exocrine failure."
          }
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
          "rule": "Glucocorticoids → hepatic glucose output + insulin resistance → steroid-induced diabetes; monitor glucose",
          "highyield": "Medicine — Diabetes",
          "hook": "New hyperglycaemia after glucocorticoid start = steroid-induced diabetes",
          "others": {
            "A": "Type 1 would not be temporally linked to steroid initiation.",
            "C": "New type 2 is possible but the steroid trigger here is the key link.",
            "D": "Phaeochromocytoma causes episodic hypertension/sweating, not steroid-linked hyperglycaemia."
          }
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
          "rule": "Perioperative: hold metformin (lactic acidosis risk) + sulfonylurea (hypo); IV insulin infusion",
          "highyield": "Surgery — Perioperative medicine",
          "hook": "Periop diabetes: stop metformin (lactic acidosis) + sulfonylurea (hypo); use IV insulin infusion",
          "others": {
            "B": "Continuing metformin perioperatively risks lactic acidosis with fasting/contrast.",
            "C": "Stopping insulin in an insulin-dependent patient causes DKA/HHS.",
            "D": "Doubling sulfonylurea pre-op risks severe hypoglycaemia with nil-by-mouth."
          }
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
          "rule": "Prediabetes: IFG (100-125), IGT (2h 140-199), HbA1c 5.7-6.4%; lifestyle modification first-line",
          "highyield": "Medicine — Diabetes",
          "hook": "Fasting 100-125 / 2h 140-199 / HbA1c 5.7-6.4% = prediabetes → lifestyle first",
          "others": {
            "A": "These values are below diabetes thresholds; metformin is not first-line for prediabetes generally.",
            "B": "Prediabetes warrants lifestyle intervention to prevent progression.",
            "C": "GDM is pregnancy-specific; this is an OGTT in a non-pregnant adult."
          }
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
          "rule": "CGM: real-time glucose + trend alarms; key for hypoglycaemia unawareness/nocturnal lows",
          "highyield": "Medicine — Diabetes",
          "hook": "Recurrent asymptomatic/nocturnal hypoglycaemia → CGM with alarms (hypo unawareness)",
          "others": {
            "A": "Intermittent fingersticks miss nocturnal and asymptomatic episodes/trends.",
            "C": "Stopping insulin in type 1 is fatal (DKA).",
            "D": "Once-daily long-acting alone does not cover meals in type 1."
          }
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
          "rule": "GLP-1 RA: glucose-dependent insulin release + satiety → weight loss; GI nausea; CV/renal benefit",
          "highyield": "Medicine — Diabetes",
          "hook": "GLP-1 agonist: weight loss + GI nausea + CV benefit; low hypoglycaemia risk",
          "others": {
            "B": "They cause weight LOSS and rarely hypoglycaemia as monotherapy.",
            "C": "They do not increase insulin requirement; they improve glycaemia.",
            "D": "Hepatotoxicity is not a characteristic GLP-1 adverse effect."
          }
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
          "rule": "Chronic metformin: B12 malabsorption → deficiency (anaemia/neuropathy); check B12 periodically",
          "highyield": "Medicine — Diabetes",
          "hook": "Long-term metformin → B12 deficiency (macrocytic anaemia/neuropathy); monitor/replace B12",
          "others": {
            "B": "Metformin lowers, not raises, B12 levels over time.",
            "C": "The temporal association and mechanism implicate metformin.",
            "D": "Macrocytic anaemia points to B12/folate, not iron deficiency (which is microcytic)."
          }
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
          "rule": "Diabetes: statin for primary CVD prevention (risk equivalent); LDL target reduction, not treat-only-if-high",
          "highyield": "Medicine — Diabetes",
          "hook": "T2DM = CVD risk equivalent → statin primary prevention (not LDL-threshold or event-driven)",
          "others": {
            "A": "Diabetes lowers the threshold; statin is indicated regardless of a single LDL cut-off.",
            "B": "Fibrates are not first-line for diabetic dyslipidaemia primary prevention.",
            "D": "Primary prevention means treating before an event occurs."
          }
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
          "rule": "Diabetic nephropathy: annual ACR (albumin:creatinine) + eGFR; ACEi for microalbuminuria (renoprotection)",
          "highyield": "Medicine — Diabetes",
          "hook": "Annual urine albumin:creatinine ratio screens early diabetic nephropathy (dipstick misses microalb)",
          "others": {
            "B": "Waiting for dipstick-positive proteinuria misses the reversible microalbuminuria window.",
            "C": "Annual, not 5-yearly, screening is recommended.",
            "D": "Biopsy is not a screening tool for uncomplicated diabetic nephropathy."
          }
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
          "rule": "Elderly/frail diabetes: de-intensify, relaxed HbA1c (~8%), avoid sulfonylurea/insulin-induced hypo",
          "highyield": "Medicine — Diabetes",
          "hook": "Frail elderly diabetic + sulfonylurea hypo → de-intensify, relaxed targets (avoid hypoglycaemia)",
          "others": {
            "A": "Intensifying increases hypoglycaemia risk in a patient who already had a hypo.",
            "B": "Adding a sulfonylurea worsens hypoglycaemia risk.",
            "D": "HbA1c <6% is harmful in frail elders due to hypoglycaemia."
          }
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
          "rule": "Diabetic amyotrophy: subacute painful asymmetric proximal leg weakness/wasting; improves with control",
          "highyield": "Medicine — Diabetes complications",
          "hook": "Painful asymmetric thigh wasting in DM = diabetic amyotrophy (radiculoplexus neuropathy)",
          "others": {
            "A": "Stroke is acute with focal deficits, not progressive asymmetric thigh wasting.",
            "C": "Polymyositis is symmetric proximal myopathy with elevated CK, not asymmetric neuropathy.",
            "D": "Cord compression gives a sensory level and long-tract signs, not this pattern."
          }
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
          "rule": "Emphysematous pyelonephritis: diabetic, gas-forming renal infection on CT; emergency drainage + antibiotics",
          "highyield": "Medicine — Diabetes complications",
          "hook": "Diabetic + flank pain + gas in kidney on CT = emphysematous pyelonephritis (urgent drainage)",
          "others": {
            "A": "Simple cystitis has no gas or parenchymal destruction on imaging.",
            "B": "A stone without infection would not show gas or systemic toxicity.",
            "C": "This is not a mild, orally treatable pyelonephritis given gas formation."
          }
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
          "rule": "Insulin start: once-daily basal (long-acting) for fasting hyperglycaemia; prandial added later",
          "highyield": "Medicine — Diabetes",
          "hook": "Fasting hyperglycaemia on orals → add once-daily basal insulin (glargine) first",
          "others": {
            "A": "Prandial-only without basal leaves fasting glucose uncontrolled.",
            "B": "Immediate biphasic MDI is more complex than needed as a first step.",
            "C": "IV insulin is inpatient/acute, not an outpatient initiation."
          }
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
          "rule": "Dawn phenomenon: AM hyperglycaemia with normal 3am glucose (hormonal surge); Somogyi has nocturnal hypo",
          "highyield": "Medicine — Diabetes",
          "hook": "Morning high + normal 3am glucose = dawn phenomenon; if 3am LOW → Somogyi rebound",
          "others": {
            "B": "Somogyi requires a nocturnal hypo, which is absent here (3am glucose normal).",
            "C": "The pattern is physiologically explained; CGM is not 'incorrect'.",
            "D": "Pump is not the immediate implication; basal adjustment is first."
          }
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
          "rule": "Diabetic dermopathy: asymptomatic atrophic pigmented shin plaques (benign); necrobiosis lipoidica is ulcerating/yellow",
          "highyield": "Medicine — Diabetes complications",
          "hook": "Atrophic pigmented shin plaques in DM = diabetic dermopathy (benign, not infection)",
          "others": {
            "A": "Necrobiosis lipoidica is fewer, yellow, telangiectatic, often ulcerating — not these multiple brown spots.",
            "C": "Cellulitis is erythematous, tender, warm, and acute — not chronic atrophic plaques.",
            "D": "Pyoderma gangrenosum is a painful ulcer with undermined edges, not atrophic pigmentation."
          }
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
          "rule": "Pre-existing diabetes + pregnancy: congenital malformation risk ∝ glycaemic control; tighten before conception",
          "highyield": "Obstetrics — Diabetes in pregnancy",
          "hook": "Pre-existing DM pregnancy: tighten glucose pre-conception → reduces malformation/stillbirth risk",
          "others": {
            "A": "Stopping insulin in type 1 causes DKA and harms the fetus.",
            "B": "Oral hypoglycaemics are not first-line in type 1 pregnancy.",
            "D": "Aspirin is adjunctive; glycaemic control is the key malformation-preventing step."
          }
        }
      }
    ]
  },
  {
    "id": "ent",
    "name": "Meniere's Disease",
    "questions": [
      {
        "q": "A 45-year-old has recurrent episodes of vertigo lasting 30-40 minutes, fluctuating sensorineural hearing loss, tinnitus and a sense of aural fullness in one ear. Between episodes he is well. Dix-Hallpike and neurological examination are normal. Diagnosis?",
        "options": [
          "Benign paroxysmal positional vertigo",
          "Meniere's disease",
          "Vestibular schwannoma",
          "Labyrinthitis"
        ],
        "answer": 3,
        "layers": {
          "concept": "Meniere's disease - episodic vertigo + fluctuating SNHL + tinnitus + aural fullness",
          "discriminator": "Episodic vertigo (minutes to hours) + fluctuating SNHL/tinnitus/aural fullness = Meniere's; normal Dix-Hallpike excludes BPPV",
          "trap": "Choosing BPPV because Dix-Hallpike is mentioned - but negative Dix-Hallpike plus fullness/fluctuating HL favours Meniere",
          "rule": "Meniere's: recurrent vertigo (20min-hours) + fluctuating SNHL + tinnitus + fullness; negative Dix-Hallpike; salt restriction/diuretics, betahistine.",
          "highyield": "ENT / Inner ear",
          "hook": "Episodic vertigo + fluctuating SNHL + fullness, negative Dix-Hallpike = Meniere's disease",
          "others": {
            "A": "BPPV gives brief (seconds) positional vertigo with a positive Dix-Hallpike",
            "C": "vestibular schwannoma gives progressive unilateral SNHL with poor speech discrimination, not episodic attacks with fullness",
            "D": "labyrinthitis is a single acute prolonged vertigo with hearing loss, not recurring attacks"
          }
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
          "rule": "AOM: bulging hyperaemic TM + fever/pain; treat oral amoxicillin + analgesia. Refer for myringotomy only if complications (facial palsy, mastoiditis).",
          "highyield": "ENT / Middle ear",
          "hook": "Fever + ear pain + bulging erythematous TM = AOM; amoxicillin + analgesia",
          "others": {
            "B": "myringotomy is reserved for complications, not first-line routine AOM",
            "C": "topical drops do not act through an intact bulging TM",
            "D": "many need antibiotics; watchful waiting is not appropriate in all despite the age being modest"
          }
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
        "answer": 3,
        "layers": {
          "concept": "Acute otitis externa - tender pinna/canal, normal TM; topical drops + dry ear",
          "discriminator": "Ear pain with pinna/canal tenderness, edematous canal, normal TM, no fever = otitis externa; treat topical drops + dry care",
          "trap": "Calling it otitis media - the key discriminator is pinna/canal tenderness with a normal TM",
          "rule": "AOE: otalgia worsened by pinna traction, edematous canal, normal TM; treat topical antibiotic/antiseptic drops + dry care.",
          "highyield": "ENT / External ear",
          "hook": "Ear pain + canal tenderness/edema, normal TM, no fever = otitis externa; topical drops + dry ear",
          "others": {
            "A": "otitis media has a bulging TM and usually fever, not canal tenderness with normal TM",
            "C": "mastoiditis has postauricular swelling/erythema and protrusion of the pinna",
            "D": "acute furunculosis is a localized abscess; the picture here is diffuse canal inflammation"
          }
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
        "answer": 2,
        "layers": {
          "concept": "Otitic barotrauma - ear pain/fullness on descent, retracted congested TM",
          "discriminator": "Pain/fullness on airplane descent + retracted congested TM + effusion = barotrauma (Eustachian tube can't equilibrate)",
          "trap": "Confusing barotrauma with AOM or OME - the airplane-descent trigger and retracted congested TM are key",
          "rule": "Barotrauma: pain/fullness on descent, retracted congested TM, effusion; decongestants + autoinflation to equalize pressure.",
          "highyield": "ENT / Middle ear",
          "hook": "Ear pain/fullness on airplane descent + retracted congested TM = otitic barotrauma; equalize via Valsalva/decongestant",
          "others": {
            "A": "OME is usually painless and chronic (glue ear) without the acute descent trigger",
            "C": "cholesteatoma gives chronic discharge/keratin, not acute pain on descent",
            "D": "mastoiditis adds postauricular swelling, fever and pinna protrusion"
          }
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
        "answer": 2,
        "layers": {
          "concept": "Cholesteatoma - erosive keratinising lesion; surgical treatment",
          "discriminator": "Chronic offensive discharge + pearly keratin in pars flaccida retraction/Marginal perforation = cholesteatoma; erosive, needs surgery",
          "trap": "Treating cholesteatoma with drops only - it is erosive and needs surgery",
          "rule": "Cholesteatoma: keratinising squamous epithelium eroding bone/ossicles; offensive discharge + progressive HL; needs surgical excision, not just drops.",
          "highyield": "ENT / Middle ear",
          "hook": "Offensive chronic discharge + pearly keratin retraction pocket = cholesteatoma; erosive, surgical excision",
          "others": {
            "A": "cholesteatoma is not self-limiting; it erodes bone and needs surgery",
            "C": "topical antibiotics do not remove the keratin sac or stop erosion",
            "D": "it is not cancer of canal skin; it is a locally destructive keratin lesion"
          }
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
        "answer": 3,
        "layers": {
          "concept": "Presbycusis - age-related symmetric high-frequency SNHL",
          "discriminator": "Bilateral high-frequency SNHL + old age + normal otoscopy = presbycusis",
          "trap": "Confusing presbycusis with noise-induced HL (4 kHz dip) or otosclerosis (conductive)",
          "rule": "Presbycusis: age-related symmetric high-frequency SNHL; hearing aids. Differentiate from noise dip (4 kHz, younger) and otosclerosis (conductive).",
          "highyield": "ENT / Sensorineural hearing loss",
          "hook": "Symmetric high-frequency SNHL in the elderly = presbycusis; hearing aids",
          "others": {
            "A": "otosclerosis causes conductive loss with a Carhart notch and normal SNHL",
            "C": "acoustic neuroma causes asymmetric unilateral SNHL with poor discrimination",
            "D": "noise-induced loss classically shows a dipped 4 kHz notch, not symmetric old-age high-tone loss"
          }
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
          "rule": "Conductive loss: Weber lateralizes to the affected ear, Rinne negative there. Sensorineural: Weber to the better ear, Rinne positive. Apply to interpret sidedness.",
          "highyield": "ENT / Hearing assessment",
          "hook": "Conductive loss: Weber to affected ear + Rinne negative on that side; SNHL: Weber to the good ear + Rinne positive",
          "others": {
            "B": "a right SNHL would lateralize Weber to the LEFT (good) ear but keep Rinne positive on the right, not negative",
            "C": "left SNHL would keep Rinne positive on the left, not negative",
            "D": "normal ears give central Weber and bilateral positive Rinne"
          }
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
          "rule": "Central tubotympanic perforation = safe ear. Attic/marginal perforation = unsafe (cholesteatoma, complications); needs mastoid surgery.",
          "highyield": "ENT / Middle ear",
          "hook": "Attic/marginal perforation + foul discharge = unsafe CSOM, cholesteatoma risk; surgical assessment",
          "others": {
            "A": "an attic/marginal perforation is unsafe, not safe, and drops are not curative alone",
            "C": "malignant OE is external canal disease with severe pain and canal granulation, different",
            "D": "unsafe CSOM does not resolve with simple oral antibiotics"
          }
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
        "answer": 0,
        "layers": {
          "concept": "Nasal foreign body - unilateral foul-smelling/blood-stained discharge in a child",
          "discriminator": "Unilateral foul-smelling, blood-stained nasal discharge in a child = retained nasal foreign body; remove under visualization",
          "trap": "Diagnosing sinusitis or polyp - the unilateral, foul, blood-stained discharge in a child is a foreign body until proven otherwise",
          "rule": "Child with persistent unilateral foul/blood-stained rhinorrhoea = nasal foreign body till proven otherwise; remove carefully under visualization (risk of aspiration).",
          "highyield": "ENT / Nose",
          "hook": "Unilateral foul/blood-stained nasal discharge in a child = foreign body; remove under visualization",
          "others": {
            "A": "sinusitis is usually bilateral and purulent, not a unilateral blood-stained smell",
            "C": "an antrochoanal polyp is unilateral but non-foul and non-bleeding discharge with a visible mass",
            "D": "allergic rhinitis is bilateral, watery and itchy, not a unilateral foul discharge"
          }
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
        "answer": 2,
        "layers": {
          "concept": "Acute bacterial rhinosinusitis - 'double worsening' / persistence criteria",
          "discriminator": "Purulent discharge + facial pain + double worsening or >10 days = bacterial rhinosinusitis; antibiotics",
          "trap": "Treating all colds with antibiotics - use the double-worsening/persistence criteria for bacterial infection",
          "rule": "Bacterial rhinosinusitis: double worsening, >10 days, purulence + facial pain; antibiotics. Viral: clear/watery, improves in ~1 week.",
          "highyield": "ENT / Sinuses",
          "hook": "Double worsening or >10 days of purulent congestion + facial pain = bacterial rhinosinusitis; antibiotics",
          "others": {
            "A": "clear watery discharge suggests viral or allergic, not bacterial",
            "C": "sneezing and itchy eyes point to allergy, not bacterial infection",
            "D": "preserved smell is not a criterion for bacterial sinusitis"
          }
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
        "answer": 3,
        "layers": {
          "concept": "Epistaxis management - anterior packing/pressure + cautery, first aid",
          "discriminator": "Anterior Little's area bleed: sit forward, pinch nose 10-20 min, then cauterize/coagulate visible point; avoid re-trauma",
          "trap": "Jumping to posterior packing/admission for a controllable anterior bleed",
          "rule": "Anterior epistaxis: sit forward, pinch cartilaginous nose 10-20 min, cauterize visible point (silver nitrate); posterior packing/admission if uncontrolled.",
          "highyield": "ENT / Nose",
          "hook": "Anterior Little's area bleed: compress nose, cauterize point; posterior packing only if uncontrolled",
          "others": {
            "A": "posterior packing is only for uncontrolled posterior bleeds, not routine first aid",
            "C": "most anterior bleeds are managed as outpatient, not routine admission",
            "D": "prophylactic IV antibiotics are not indicated for a controlled anterior bleed"
          }
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
        "answer": 0,
        "layers": {
          "concept": "Allergic rhinitis - first-line intranasal corticosteroid",
          "discriminator": "Seasonal allergic rhinoconjunctivitis = first-line intranasal corticosteroid (more effective than antihistamines alone for congestion)",
          "trap": "Using daily topical decongestants (rebound) or long-term oral steroids; forget the INCS first line",
          "rule": "Allergic rhinitis: first-line intranasal corticosteroid; antihistamines for itch/sneeze. Avoid daily decongestants (rebound) and long-term oral steroids.",
          "highyield": "ENT / Rhinitis",
          "hook": "Allergic rhinitis first line = intranasal corticosteroid; add antihistamine if needed",
          "others": {
            "A": "antihistamines alone are less effective for congestion than a nasal steroid",
            "C": "long-term oral steroids carry systemic side effects; not first line",
            "D": "daily topical decongestants cause rhinitis medicamentosa (rebound)"
          }
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
        "answer": 1,
        "layers": {
          "concept": "Septal hematoma - can cause saddle nose via cartilage necrosis; evacuate promptly",
          "discriminator": "Post-trauma septal hematoma, if undrained, causes avascular necrosis/cartilage resorption -> saddle nose; treat by I&D + splint",
          "trap": "Treating a septal hematoma conservatively or confusing it with allergy/fracture",
          "rule": "Septal hematoma: urgent I&D + splint to prevent avascular necrosis and saddle nose deformity. Differentiate from fracture and allergy.",
          "highyield": "ENT / Nasal trauma",
          "hook": "Undrained septal hematoma -> avascular necrosis -> saddle nose; drain + splint early",
          "others": {
            "A": "correct - but it IS the answer; the others mislabel the cause",
            "C": "allergy does not cause septal hematoma or saddle nose",
            "D": "this is a hematoma needing drainage, not open fracture reduction"
          }
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
          "rule": "Orbital cellulitis: proptosis, painful ophthalmoplegia, fever after sinusitis -> urgent IV antibiotics + CT (exclude abscess).",
          "highyield": "ENT / Sinus complications",
          "hook": "Proptosis + restricted/painful eye movement + fever after sinusitis = orbital cellulitis; urgent IV abx + CT",
          "others": {
            "A": "preseptal cellulitis has eyelid swelling only, with normal eye movements and vision",
            "C": "allergic oedema is bilateral, itchy and without fever or proptosis",
            "D": "cavernous sinus thrombosis adds bilateral orbital signs, cranial neuropathies and meningism, and is diagnosed clinically/imaging"
          }
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
        "answer": 3,
        "layers": {
          "concept": "Nasopharyngeal carcinoma - unilateral OME + neck mass in endemic patient; nasopharyngeal biopsy",
          "discriminator": "Unilateral serous OME + neck mass + blood-stained nasal discharge in an East Asian adult = NPC; nasopharyngoscopy + biopsy",
          "trap": "Biopsying the neck node or ultrasound only - confirm via endoscopic nasopharyngeal biopsy",
          "rule": "NPC (EBV, endemic): painless neck node + unilateral serous OME + blood-stained nasal discharge; diagnosis by nasopharyngoscopy + biopsy.",
          "highyield": "ENT / Oropharyngeal tumor",
          "hook": "Unilateral OME + neck mass + nasal bleed in endemic adult = NPC; endoscopic nasopharyngeal biopsy",
          "others": {
            "B": "neck ultrasound does not diagnose the primary nasopharyngeal lesion",
            "C": "a chest X-ray is not the diagnostic test for NPC",
            "D": "thyroid function is irrelevant to this presentation"
          }
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
          "rule": "Epiglottitis: tripod posture, drooling, muffled voice -> protect airway immediately; avoid throat examination/agitation. Hib vaccination reduces incidence.",
          "highyield": "ENT / Airway emergency",
          "hook": "Fever + drooling + tripod + muffled voice = epiglottitis; airway first, minimal handling",
          "others": {
            "A": "throat examination can worsen obstruction and should be avoided",
            "C": "oral antibiotics alone are inadequate; the airway is the priority",
            "D": "a throat swab delays management of an airway emergency"
          }
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
        "answer": 2,
        "layers": {
          "concept": "Peritonsillar abscess - trismus + uvula deviation; aspiration/I+D + antibiotics",
          "discriminator": "Unilateral severe sore throat + trismus + soft palate/uvula deviation = quinsy; ENT drainage + antibiotics",
          "trap": "Treating a quinsy as simple tonsillitis with antibiotics alone",
          "rule": "Quinsy: severe unilateral sore throat, trismus, uvula deviation -> ENT aspiration/incision + antibiotics + analgesia.",
          "highyield": "ENT / Pharyngeal infection",
          "hook": "Unilateral pharyngeal bulge + trismus + uvular deviation = quinsy; ENT aspiration/I+D + antibiotics",
          "others": {
            "A": "tonsillitis is symmetric without trismus or uvular deviation and does not need drainage",
            "C": "retropharyngeal abscess is predominantly seen in younger children and causes neck stiffness/dysphagia rather than trismus",
            "D": "glossitis is tongue inflammation, not a peritonsillar collection"
          }
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
          "rule": "Persistent hoarseness >3 weeks, especially in a smoker, needs direct laryngoscopy to exclude laryngeal carcinoma.",
          "highyield": "ENT / Laryngeal tumor",
          "hook": "Hoarseness >3 weeks in an adult smoker = laryngeal carcinoma until excluded; laryngoscopy + biopsy",
          "others": {
            "A": "persistent hoarseness in a smoker is not simply viral laryngitis",
            "C": "steroids do not diagnose or treat laryngeal cancer",
            "D": "voice rest alone is inadequate without excluding malignancy"
          }
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
          "rule": "Recurrent laryngeal nerve injury (thyroid surgery) -> vocal cord paralysis, hoarse/breathy voice; key consent point in thyroidectomy.",
          "highyield": "ENT / Larynx",
          "hook": "Post-thyroid surgery hoarse/breathy voice = recurrent laryngeal nerve injury",
          "others": {
            "B": "hypoglossal injury causes tongue deviation, not hoarseness",
            "C": "facial nerve injury causes facial weakness",
            "D": "trigeminal injury affects jaw muscles and facial sensation, not the voice"
          }
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
          "rule": "Croup: barking cough, low-grade fever, stridor, non-toxic -> dexamethasone (+ nebulized adrenaline if severe). Distinguish from epiglottitis (toxic, drooling).",
          "highyield": "ENT / Airway",
          "hook": "Barking cough + non-toxic + stridor = croup; dexamethasone; no drooling/toxaemia = not epiglottitis",
          "others": {
            "A": "epiglottitis has high fever, drooling and toxicity, unlike this non-toxic barking-cough child",
            "C": "foreign body aspiration has sudden onset +/- choking and feeding, not a barking cough",
            "D": "bacterial tracheitis is more toxic with a high fever and thick secretions"
          }
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
        "answer": 2,
        "layers": {
          "concept": "GAS tonsillitis - antibiotics to prevent rheumatic fever",
          "discriminator": "GAS + exudative tonsillitis/adenopathy = treat antibiotics to prevent acute rheumatic fever and local suppuration",
          "trap": "Thinking antibiotics are only for symptom duration, not rheumatic-fever prevention",
          "rule": "Treat GAS tonsillitis (positive rapid test, exudates, tender nodes, no cough) with antibiotics to prevent acute rheumatic fever and quinsy.",
          "highyield": "ENT / Pharyngeal infection",
          "hook": "Confirmed GAS tonsillitis: antibiotics prevent acute rheumatic fever and suppurative complications",
          "others": {
            "B": "antibiotics do not treat or prevent viral spread",
            "C": "antibiotics are not given to prevent adult tonsillectomy",
            "D": "the positive GAS test indicates bacteria, not a virus"
          }
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
          "rule": "Oral candidiasis: white curd-like removable plaques (steroid use, immunocompromise) -> antifungal. Distinguish from adherent leukoplakia.",
          "highyield": "ENT / Oral cavity",
          "hook": "Steroid inhaler + white curd-like removable plaques = oral candidiasis; antifungal",
          "others": {
            "B": "herpes pharyngitis has vesicles/ulcers, not curd-like plaques",
            "C": "hairy leukoplakia is a non-removable, corrugated white lesion of the tongue edge in immunocompromise",
            "D": "leukoedema is a benign gray-white haze of the buccal mucosa, not curd-like plaques"
          }
        }
      },
      {
        "q": "A 40-year-old has recurrent painful swelling of the right cheek that worsens at mealtimes. The swelling resolves between meals and a painful mass is felt in Wharton's duct. Which gland and management?",
        "options": [
          "Parotid; total parotidectomy",
          "Submandibular gland; sialolithiasis - manage with sialogogues, massage, or ductal removal/ectomy if recurrent",
          "Sublingual; antibiotics only",
          "Parotid; radiotherapy"
        ],
        "answer": 3,
        "layers": {
          "concept": "Sialolithiasis - submandibular stone, worse at meals; sialogogues/removal",
          "discriminator": "Painful glandular swelling worse at mealtimes + ductal mass = sialolithiasis; most common in submandibular gland",
          "trap": "Assuming parotid or giving antibiotics for a ductal stone",
          "rule": "Sialolithiasis: submandibular stone causing pain/swelling with meals; sialogogues/hydration/massage; surgical removal if recurrent.",
          "highyield": "ENT / Salivary gland",
          "hook": "Mealtime-related gland swelling + ductal mass = sialolithiasis, submandibular; sialogogues, stone removal if needed",
          "others": {
            "A": "this is submandibular sialolithiasis; parotidectomy is inappropriate",
            "C": "sublingual is less common and antibiotics do not remove a stone",
            "D": "radiotherapy is not used for a benign ductal stone"
          }
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
        "answer": 0,
        "layers": {
          "concept": "Bell's palsy - sudden lower motor neuron facial palsy; oral corticosteroids",
          "discriminator": "Acute unilateral facial weakness sparing no zone (forehead involved) without other deficit = Bell's palsy (LMN); oral prednisolone",
          "trap": "Calling a fore-head-involving LMN palsy a stroke (UMN would spare the forehead)",
          "rule": "Bell's palsy: acute LMN facial palsy (forehead involved) -> oral prednisolone + eye protection. Stroke (UMN) spares the forehead.",
          "highyield": "ENT / Facial nerve",
          "hook": "Acute unilateral FACIAL palsy incl. forehead, no other deficit = Bell's palsy (LMN); corticosteroid",
          "others": {
            "A": "stroke is upper motor neuron and spares the forehead; there is no focal hemiparesis here",
            "C": "Ramsay Hunt syndrome has herpetic vesicles in the ear/mouth",
            "D": "acoustic neuroma causes SNHL and slow progressive palsy, not acute onset"
          }
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
        "answer": 2,
        "layers": {
          "concept": "Sudden sensorineural hearing loss - urgent oral corticosteroid",
          "discriminator": "Sudden unilateral SNHL = otologic emergency; prompt oral corticosteroids + urgent ENT/audiologic assessment",
          "trap": "Treating sudden SNHL as an infection or delaying reassurance",
          "rule": "Sudden SNHL (<72h): prompt oral corticosteroid (improve recovery) + urgent ENT/audiogram; exclude acoustic neuroma.",
          "highyield": "ENT / Sensorineural hearing loss",
          "hook": "Sudden unilateral SNHL = urgent oral corticosteroid + ENT assessment; not drops or delay",
          "others": {
            "B": "topical drops act on the external/middle ear, not sensorineural loss",
            "C": "delaying reassurance risks permanent hearing loss",
            "D": "mastoid surgery is not first-line for sudden SNHL"
          }
        }
      }
    ]
  },
  {
    "id": "electrolytes",
    "name": "Hyponatremia — Hypovolemic & Cerebral Salt Wasting",
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
          "rule": "Thiazide hyponatremia = volume depletion; SIADH = euvolemic with high urine Na",
          "highyield": "Hyponatremia — hypovolemic",
          "hook": "Diuretic + volume depletion + low U Na = hypovolemic hyponatremia → replace volume",
          "others": {
            "A": "SIADH is euvolemic with inappropriately high urine sodium (>20-30).",
            "B": "Cerebral salt wasting also causes volume depletion but follows SAH, not diuretics.",
            "D": "Adrenal insufficiency causes hyponatremia with hyperkalemia, not isolated thiazide use."
          }
        }
      },
      {
        "q": "A 55-year-old man develops hyponatremia 4 days after a subarachnoid haemorrhage. He is clinically volume-depleted with low urine sodium. Which diagnosis is most likely?",
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
          "rule": "CSW = natriuresis after CNS injury with volume depletion; SIADH is euvolemic",
          "highyield": "Hyponatremia — cerebral salt wasting",
          "hook": "CNS injury + hyponatremia + volume depletion = cerebral salt wasting → saline",
          "others": {
            "A": "SIADH is euvolemic with concentrated urine, not volume-depleted.",
            "B": "Hypothyroidism causes mild hyponatremia but not acute after SAH.",
            "C": "Diabetes insipidus causes hypernatremia, not hyponatremia."
          }
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
          "rule": "Pseudohyponatremia = lab artifact from lipids/protein; true Na is normal (direct ISE)",
          "highyield": "Hyponatremia — pseudohyponatremia",
          "hook": "Severe hyperlipidemia/hyperproteinemia + low measured Na but normal direct ISE = pseudohyponatremia",
          "others": {
            "B": "True hyponatremia would be confirmed by direct ISE, which was normal here.",
            "C": "SIADH would show true low sodium with concentrated urine.",
            "D": "Hyperglycemia causes translocational (true) hyponatremia with high glucose."
          }
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
          "rule": "Central DI responds to desmopressin (urine concentrates); nephrogenic does not",
          "highyield": "Diabetes insipidus — central vs nephrogenic",
          "hook": "Desmopressin → urine concentrates = central DI; no change = nephrogenic DI",
          "others": {
            "A": "Nephrogenic DI shows no rise in urine osmolality after desmopressin.",
            "C": "Psychogenic polydipsia concentrates urine with water deprivation alone.",
            "D": "SIADH causes hyponatremia with concentrated urine, not polyuria + hypernatremia."
          }
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
          "rule": "Over-rapid correction of chronic hyponatremia → osmotic demyelination (correct slowly, ~6 mmol/L/24h)",
          "highyield": "Hyponatremia — osmotic demyelination",
          "hook": "Chronic hyponatremia + too-rapid correction → osmotic demyelination (correct slowly)",
          "others": {
            "B": "Wernicke causes ophthalmoplegia/ataxia/confusion, not locked-in after Na correction.",
            "C": "Ischemic stroke is not temporally linked to Na correction.",
            "D": "Hypoglycemia is not the mechanism; it is osmotic injury from Na shifts."
          }
        }
      },
      {
        "q": "A 2-month-old infant exclusively on formula with inadequate water intake presents with lethargy and a serum sodium of 160 mmol/L. Urine osmolality is low. What is the most likely mechanism?",
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
          "rule": "Infant hypernatremia = free-water deficit (inadequate intake); DI shows persistent dilute urine",
          "highyield": "Hypernatremia — free-water deficit",
          "hook": "Infant hypernatremia + low urine Osm = water-deficit; DI has inappropriately dilute urine persistently",
          "others": {
            "B": "DI shows persistently dilute urine despite hypernatremia and no response to water deficit.",
            "C": "Hyperaldosteronism causes hypertension and hypokalemia, not isolated infant hypernatremia.",
            "D": "Salt poisoning causes hypernatremia but with high urine sodium, not low osmolality."
          }
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
          "rule": "Hypokalemia = renal loss (diuretics) + GI loss (vomiting) + shift (alkalosis/insulin)",
          "highyield": "Hypokalemia — causes",
          "hook": "Hypokalemia with diuretic + vomiting + alkalosis = combined losses + shift; fix the driver",
          "others": {
            "A": "Dietary deficiency alone rarely causes severe hypokalemia this rapidly.",
            "B": "Insulin shift is one factor; the dominant losses here are renal and GI.",
            "C": "Magnesium excess does not cause hypokalemia; magnesium DEFICIENCY is associated."
          }
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
          "rule": "Hypokalemic periodic paralysis = episodic weakness after carbs/exercise + low K",
          "highyield": "Hypokalemic periodic paralysis",
          "hook": "Episodic weakness + low K after carbs = hypokalemic periodic paralysis",
          "others": {
            "A": "GBS is ascending, persistent, with areflexia and elevated CSF protein.",
            "C": "Myasthenia causes fatigable weakness, not episodic with low potassium.",
            "D": "Polymyositis is chronic proximal weakness with myalgia and raised CK."
          }
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
          "rule": "HyperK ECG: peaked T → widened QRS → sine wave; QRS widening is pre-arrest",
          "highyield": "Hyperkalemia — ECG",
          "hook": "HyperK ECG worsens: peaked T → widened QRS → sine wave (emergency)",
          "others": {
            "A": "QT shortening is not the hallmark; QRS widening is the dangerous sign.",
            "B": "ST elevation suggests infarction, not hyperkalemia.",
            "D": "T-wave inversion is ischaemic, not hyperkalemic (which shows peaked T)."
          }
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
          "rule": "Pseudohyperkalemia = artifact (hemolysis/fist clench); true hyperK is rarely asymptomatic at 6.9",
          "highyield": "Hyperkalemia — pseudohyperkalemia",
          "hook": "Asymptomatic high K + normal ECG + normal repeat = pseudohyperkalemia (draw artifact)",
          "others": {
            "A": "A value that normalises with technique change is artifact, not a resolved true state.",
            "B": "Calibration error would affect other electrolytes, not just K.",
            "C": "Medication shift would not resolve simply with a better draw technique."
          }
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
          "rule": "HyperK + ECG changes: calcium FIRST (cardioprotect), then shift (insulin/salbutamol), then remove",
          "highyield": "Hyperkalemia — emergency management",
          "hook": "HyperK with ANY ECG change → IV calcium first, then insulin/dextrose/salbutamol/dialysis",
          "others": {
            "A": "Insulin/dextrose shifts K but does not stabilise the myocardium; calcium comes first.",
            "C": "Resins remove K slowly (hours); not immediate for ECG changes.",
            "D": "Observation is dangerous with peaked T waves present."
          }
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
          "rule": "Hypercalcemia: low PTH = malignancy (PTHrP)/vit D; high PTH = primary HPT",
          "highyield": "Hypercalcemia — differential",
          "hook": "Hypercalcemia + suppressed PTH = malignancy/vit D; + high PTH = primary HPT",
          "others": {
            "B": "Primary HPT has high or inappropriately normal PTH, not suppressed.",
            "C": "Vitamin D intoxication suppresses PTH but is associated with high calcitriol, not weight loss/bone pain typical here.",
            "D": "Sarcoidosis causes hypercalcemia via calcitriol with suppressed PTH, but the weight loss/bone pain pattern points to malignancy."
          }
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
          "rule": "Hypomagnesemia → impaired PTH secretion/action → refractory hypocalcemia (replace Mg)",
          "highyield": "Hypocalcemia — hypomagnesemia",
          "hook": "Refractory hypocalcemia + low Mg = fix magnesium first (PTH needs Mg)",
          "others": {
            "B": "Vitamin D deficiency would not specifically cause refractoriness to IV calcium.",
            "C": "Pseudohypoparathyroidism has high PTH with low calcium, not low magnesium.",
            "D": "Hungry bone syndrome follows parathyroid surgery, not alcohol + low Mg."
          }
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
          "rule": "Hypomagnesemia: alcohol, loop/thiazide diuretics, diarrhoea, TPN, aminoglycosides, PPI",
          "highyield": "Hypomagnesemia — causes",
          "hook": "Hypomagnesemia = alcohol/diuretics/diarrhoea/TPN/PPI; check Mg in low Ca/K",
          "others": {
            "A": "Primary HPT causes hypercalcemia, not hypomagnesemia.",
            "B": "Hypothyroidism is not a cause of hypomagnesemia.",
            "D": "Spironolactone (potassium-sparing) does not typically cause Mg loss; loops do."
          }
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
          "rule": "Eclampsia seizures → IV magnesium sulfate; calcium gluconate is the antidote for Mg toxicity",
          "highyield": "Magnesium — pre-eclampsia",
          "hook": "Eclampsia/pre-eclampsia seizures → magnesium sulfate; calcium reverses Mg toxicity",
          "others": {
            "A": "Calcium gluconate reverses magnesium toxicity, not treats eclampsia seizures.",
            "B": "Oral magnesium oxide is a laxative/supplement, not acute therapy.",
            "C": "Potassium chloride does not treat eclampsia."
          }
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
          "rule": "CKD: hyperphosphatemia + low calcitriol → secondary hyperparathyroidism/renal osteodystrophy",
          "highyield": "CKD-mineral bone disorder",
          "hook": "CKD high PO4 + low calcitriol → secondary hyperparathyroidism (bone disease)",
          "others": {
            "A": "Parathyroid hormone is HIGH (secondary), not low, in early CKD-MBD.",
            "C": "Vitamin D is LOW in CKD, not excess.",
            "D": "Adynamic bone disease is low-turnover from over-treatment, not the typical high-turnover state."
          }
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
          "rule": "Distal (type 1) RTA = normal AG acidosis + hypokalemia + calcium stones",
          "highyield": "Renal tubular acidosis — distal",
          "hook": "Normal AG acidosis + low K + stones = distal (type 1) RTA; + high K = type 4",
          "others": {
            "A": "Type 2 RTA has bicarbonate wasting and Fanconi findings, not primarily stones.",
            "B": "Type 4 RTA has hyperkalemia, not hypokalemia.",
            "D": "Chronic diarrhea causes normal AG acidosis but with high urine ammonium, not stones."
          }
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
          "rule": "Fanconi = proximal tubulopathy: bicarbonaturia + glycosuria + phosphaturia + aminoaciduria",
          "highyield": "Renal tubular acidosis — proximal / Fanconi",
          "hook": "Proximal loss of glucose/phosphate/aminoacid/bicarbonate = Fanconi syndrome",
          "others": {
            "A": "Distal RTA is an isolated acidification defect without glycosuria/aminoaciduria.",
            "C": "Bartter syndrome causes hypokalemic alkalosis with normal calcium, not Fanconi features.",
            "D": "Gitelman syndrome causes hypokalemic metabolic alkalosis, not proximal losses."
          }
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
          "rule": "Type 4 RTA = normal AG acidosis + hyperkalemia (aldosterone defect); types 1/2 are hypokalemic",
          "highyield": "Renal tubular acidosis — type 4",
          "hook": "Normal AG acidosis + high K = type 4 RTA (hypoaldosteronism); low K = 1/2",
          "others": {
            "A": "Diarrhea causes normal AG acidosis but with hypokalemia, not hyperkalemia.",
            "B": "Salicylate causes a high anion-gap (and respiratory) acidosis.",
            "D": "Methanol causes high AG acidosis with an osmolal gap."
          }
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
          "rule": "Type A lactic acidosis = hypoperfusion/shock (treat perfusion); type B = metformin/toxins",
          "highyield": "Lactic acidosis",
          "hook": "Shock + high AG + high lactate = type A lactic acidosis → restore perfusion",
          "others": {
            "A": "Metformin causes type B lactic acidosis, not shock-driven type A.",
            "B": "Ketoacidosis has ketones; lactate here is the driver.",
            "C": "Methanol causes high AG acidosis with an osmolal gap and ocular toxicity."
          }
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
          "rule": "Mixed disorder: high-AG acidosis (DKA) + metabolic alkalosis (vomiting) raises HCO3 above expected",
          "highyield": "Mixed acid-base disorders",
          "hook": "High AG acidosis + vomiting + less-low HCO3 than expected = mixed DKA + metabolic alkalosis",
          "others": {
            "A": "Pure DKA would drive HCO3 much lower than 18 for this pH/AG.",
            "B": "Metabolic alkalosis alone would raise pH and HCO3, not lower them.",
            "D": "Respiratory acidosis would raise PaCO2, not explain the high anion gap."
          }
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
          "rule": "Urine anion gap: positive = RTA (low NH4); negative = diarrhea/GI bicarbonate loss",
          "highyield": "Normal anion-gap acidosis — urine anion gap",
          "hook": "Normal AG acidosis: +urine anion gap = RTA; −urine anion gap = diarrhea/GI loss",
          "others": {
            "B": "Diarrhea yields a NEGATIVE urine anion gap (high urinary NH4).",
            "C": "Salicylate causes high AG (and respiratory) acidosis.",
            "D": "Methanol causes high AG acidosis with osmolal gap."
          }
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
          "rule": "Alcoholic ketoacidosis: high AG acidosis + ketones + lactate + NORMAL glucose (vs DKA hyperglycemia)",
          "highyield": "Alcoholic ketoacidosis",
          "hook": "Alcoholic + high AG acidosis + ketones/lactate + normal glucose = alcoholic ketoacidosis",
          "others": {
            "B": "DKA is hyperglycemic; this patient is euglycemic.",
            "C": "Lactate alone does not explain the ketonuria.",
            "D": "Salicylate causes high AG with a respiratory alkalosis component."
          }
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
          "rule": "Isotonic saline stays in ECF (no ICF shift); plasma [Na] unchanged",
          "highyield": "Fluid compartments — isotonic expansion",
          "hook": "Isotonic saline → ECF expands, ICF unchanged, [Na] unchanged",
          "others": {
            "A": "ICF does not increase and sodium concentration does not fall with isotonic fluid.",
            "C": "Free water (not isotonic saline) expands ICF.",
            "D": "Hypertonic saline raises [Na] and expands ECF; this is isotonic."
          }
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
          "rule": "Digoxin toxicity hyperkalemia → Digoxin-Fab; avoid calcium (risk of 'stone heart')",
          "highyield": "Digoxin toxicity — management",
          "hook": "Digoxin toxicity + high K = Digoxin-Fab; do NOT give calcium (unlike other hyperK)",
          "others": {
            "A": "Calcium is avoided in digoxin toxicity due to arrhythmia risk.",
            "B": "Insulin/dextrose may be used but Fab is definitive; calcium is the key avoided agent.",
            "C": "Potassium would worsen toxicity; it is already elevated."
          }
        }
      }
    ]
  },
  {
    "id": "endocrine",
    "name": "Subacute Thyroiditis (de Quervain)",
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
          "rule": "De Quervain (subacute) thyroiditis: painful tender thyroid + viral prodrome + transient thyrotoxicosis; NSAIDs/steroids",
          "highyield": "Medicine — Thyroid",
          "hook": "Painful tender thyroid + post-viral + transient thyrotoxicosis = subacute (de Quervain) thyroiditis",
          "others": {
            "B": "Graves causes a painless diffuse goitre with bruit, not pain/fever.",
            "C": "Hashimoto is painless with hypothyroidism, not acute pain/fever.",
            "D": "Acute bacterial thyroiditis is rare and toxic, not self-limited post-viral."
          }
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
          "rule": "Amiodarone thyroid: type 2 = destructive (low uptake) → steroids; type 1 = iodine excess (high uptake) → antithyroid",
          "highyield": "Medicine — Thyroid",
          "hook": "Amiodarone thyrotoxicosis: low uptake = type 2 (destructive, steroids); high uptake = type 1 (antithyroid)",
          "others": {
            "A": "Type 1 shows HIGH uptake and is treated with antithyroid drugs, not steroids.",
            "B": "Graves would show diffuse high uptake and TSAb, not amiodarone exposure.",
            "D": "Subacute (de Quervain) thyroiditis is post-viral, not drug-induced."
          }
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
          "rule": "Thyroid eye disease: smoking worsens; severe (optic compression) → steroids/orbital decompression",
          "highyield": "Medicine — Thyroid",
          "hook": "Graves eye disease: smoking worsens; severe = steroids + orbital decompression (thyroxine alone insufficient)",
          "others": {
            "A": "Hypothyroidism does not drive orbitopathy; euthyroidism is the goal, not suppression.",
            "C": "Radioiodine can actually transiently worsen eye disease; it does not cure it.",
            "D": "Levothyroxine does not treat the inflammatory orbitopathy."
          }
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
          "rule": "Subclinical hypothyroidism: treat if TSH>10 or symptomatic/TPO+; otherwise observe",
          "highyield": "Medicine — Thyroid",
          "hook": "Subclinical hypothyroidism: observe unless TSH>10 or symptoms/TPO+; don't start thyroxine routinely",
          "others": {
            "A": "Routine immediate high-dose thyroxine is not indicated for asymptomatic mild elevation.",
            "B": "Urgent scan is not needed for stable subclinical disease.",
            "C": "Antithyroid drugs are for hyperthyroidism, not hypothyroidism."
          }
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
          "rule": "Toxic MNG: elderly + nodular goitre + thyrotoxicosis, NO exophthalmos; treat with radioiodine",
          "highyield": "Medicine — Thyroid",
          "hook": "Nodular goitre + thyrotoxicosis, no exophthalmos = toxic MNG → radioiodine (not Graves tx)",
          "others": {
            "A": "Graves has exophthalmos and a diffuse goitre; TMG is nodular without eye signs.",
            "B": "This is thyrotoxic, not thyroiditis; observation is insufficient.",
            "C": "There is no suggestion of malignancy; urgent cancer surgery is wrong."
          }
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
          "rule": "Differentiated thyroid Ca: thyroglobulin = tumour marker; undetectable (no Ab) = no recurrence",
          "highyield": "Medicine — Thyroid oncology",
          "hook": "Post-op undetectable thyroglobulin (antibodies negative) = no residual thyroid Ca",
          "others": {
            "A": "Undetectable thyroglobulin argues against recurrence, not for it.",
            "B": "Thyroglobulin is a tumour marker, not a measure of thyroxine adequacy (TSH is).",
            "D": "No evidence of disease does not warrant repeat surgery."
          }
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
          "rule": "21-OH deficiency CAH: ambiguous genitalia + salt-wasting crisis (hypoNa/hyperK) + ↑17-OH progesterone",
          "highyield": "Paediatrics — Congenital adrenal hyperplasia",
          "hook": "Neonatal ambiguous genitalia + salt-wasting crisis (hypoNa/hyperK) = 21-OH deficiency CAH",
          "others": {
            "A": "Primary hyperaldosteronism causes hypertension with hypokalaemia, not salt-wasting or virilization.",
            "B": "Adrenal hypoplasia presents with adrenal insufficiency but not virilization.",
            "C": "Turner syndrome has streak gonads and lymphedema, not virilization or salt-wasting."
          }
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
          "rule": "Primary AI: low cortisol + low aldosterone → hypoNa + hyperK + pigmentation. Secondary: cortisol only → hypoNa, normal K, no pigment",
          "highyield": "Medicine — Adrenal",
          "hook": "Adrenal insufficiency: hyperK + pigmentation = PRIMARY; normal K, no pigment = SECONDARY (pituitary)",
          "others": {
            "A": "Primary disease would show hyperkalaemia and pigmentation, neither present here.",
            "C": "Hyperkalaemia occurs in primary, not secondary, adrenal insufficiency.",
            "D": "Pigmentation is a feature of primary (ACTH excess), not secondary."
          }
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
          "rule": "Nelson syndrome: pituitary macroadenoma after bilateral adrenalectomy for Cushing (loss of feedback)",
          "highyield": "Medicine — Pituitary",
          "hook": "Bilateral adrenalectomy for Cushing + growing pituitary mass = Nelson syndrome",
          "others": {
            "A": "Apoplexy is acute haemorrhage/infarction, not a slowly enlarging mass years later.",
            "B": "Craniopharyngioma is a distinct calcified suprasellar tumour, not post-adrenalectomy.",
            "D": "Metastatic lung cancer would not have this surgical history."
          }
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
          "rule": "Adrenal incidentaloma: exclude Cushing/pheochromocytoma/Conn biochemically before surgery; most observed",
          "highyield": "Medicine — Adrenal",
          "hook": "Adrenal incidentaloma: biochemical workup first (Cushing/pheo/Conn); most are non-functioning",
          "others": {
            "A": "Immediate adrenalectomy without ruling out pheochromocytoma is dangerous (catecholamine crisis).",
            "B": "Observation without endocrine testing misses functioning tumours.",
            "D": "Chemotherapy is not indicated for a benign incidentaloma."
          }
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
          "rule": "Acromegaly: GH adenoma → screen with IGF-1 (stable), confirm with OGTT GH suppression",
          "highyield": "Medicine — Pituitary",
          "hook": "Coarse features + growing hands/feet + glucose intolerance = acromegaly → screen with IGF-1",
          "others": {
            "A": "Random GH is pulsatile and unreliable for screening; IGF-1 is preferred.",
            "C": "MRI is done after biochemical confirmation, not as first screening.",
            "D": "OGTT is confirmatory, not the initial screen; IGF-1 comes first."
          }
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
          "rule": "Pituitary apoplexy: acute HA + visual loss + cortisol-deficiency shock → IV steroids + urgent decompression",
          "highyield": "Medicine — Pituitary",
          "hook": "Pituitary macroadenoma + acute HA + vision loss + hypotension = apoplexy → steroids + urgent surgery",
          "others": {
            "B": "This is an endocrine emergency, not migraine; observation is fatal.",
            "C": "SAH causes thunderclap headache but not the endocrine/visual-field profile of apoplexy.",
            "D": "No action is dangerous; apoplexy is life-threatening."
          }
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
          "rule": "Craniopharyngioma: child + calcified suprasellar mass + bitemporal hemianopia + hormone deficits",
          "highyield": "Medicine — Paediatric neuro-oncology",
          "hook": "Child + calcified suprasellar mass + bitemporal hemianopia = craniopharyngioma",
          "others": {
            "A": "Pituitary adenomas are rarely calcified and usually present in adults, not with this mass in a child.",
            "B": "Meningiomas are extra-axial and uncommon in children, and less often calcified suprasellar.",
            "C": "Optic nerve glioma causes unilateral vision loss, not bitemporal hemianopia with a calcified mass."
          }
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
          "rule": "Drug-induced hyperprolactinemia: antipsychotics/metoclopramide (D2 blockade); review drug before prolactinoma workup",
          "highyield": "Medicine — Pituitary",
          "hook": "Hyperprolactinemia + antipsychotic/metoclopramide = drug-induced; review med before pituitary MRI",
          "others": {
            "B": "Surgery is for prolactinoma, not drug-induced hyperprolactinemia; the drug should be reviewed first.",
            "C": "Hypothyroidism can raise prolactin mildly but not typically with galactorrhoea on an antipsychotic.",
            "D": "Pregnancy is one cause but not the only one; drugs are a key consideration here."
          }
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
          "rule": "Lymphocytic hypophysitis: postpartum/late-pregnancy pituitary mass + DI; steroids first-line",
          "highyield": "Medicine — Pituitary",
          "hook": "Postpartum pituitary mass + diabetes insipidus = lymphocytic hypophysitis",
          "others": {
            "A": "Craniopharyngioma is calcified and not typically postpartum or associated with lymphocytic infiltration.",
            "C": "A macroadenoma can compress but DI and postpartum onset favour hypophysitis.",
            "D": "Metastasis would have a known primary and does not have this postpartum pattern."
          }
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
          "rule": "GH deficiency: proportionate short stature + reduced growth velocity + delayed bone age; stim test confirms",
          "highyield": "Paediatrics — Growth disorders",
          "hook": "Child short stature + low growth velocity + delayed bone age + normal proportions = GH deficiency",
          "others": {
            "B": "Achondroplasia causes disproportionate (rhizomelic) shortening, not proportionate stature.",
            "C": "Turner syndrome has webbing, streak gonads, and specific features, not isolated GH deficiency.",
            "D": "Constitutional delay has a family history and normal/late catch-up, not necessarily low velocity."
          }
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
          "rule": "Stalk effect: stalk compression interrupts hypothalamic dopamine → hyperprolactinemia without prolactinoma",
          "highyield": "Medicine — Pituitary",
          "hook": "Hyperprolactinemia without adenoma + stalk compression = stalk effect (lost dopamine inhibition)",
          "others": {
            "A": "A prolactinoma would be a visible enhancing mass, not an empty sella.",
            "B": "Hypothyroidism raises prolactin via TRH but would show low free T4/high TSH.",
            "D": "Renal failure can raise prolactin but is not suggested by the empty sella here."
          }
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
          "rule": "Insulinoma: fasting hypoglycaemia + inappropriately high insulin + C-peptide (Whipple triad); surgery",
          "highyield": "Medicine — Endocrine pancreas",
          "hook": "Fasting hypo + high insulin + C-peptide = insulinoma; high insulin + low C-peptide = factitious",
          "others": {
            "A": "Factitious (exogenous insulin) has HIGH insulin but LOW C-peptide — opposite here.",
            "B": "Addison causes hypoglycaemia but with low insulin and cortisol deficiency.",
            "C": "Reactive hypoglycaemia is postprandial, not fasting, and insulin would be appropriately low."
          }
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
          "rule": "Paget disease: high ALP, normal Ca/PO4, cortical thickening/cotton-wool bone; bisphosphonates",
          "highyield": "Medicine — Bone metabolism",
          "hook": "Bone pain + high ALP + normal Ca/PO4 + cotton-wool X-ray = Paget disease",
          "others": {
            "B": "Osteomalacia shows low Ca/PO4 (or low-normal) with high ALP, not the cotton-wool pattern.",
            "C": "Osteoporosis has normal Ca/PO4/ALP; it is loss of bone density, not remodelling.",
            "D": "Myeloma causes lytic lesions and CRAB features, not cotton-wool cortical thickening."
          }
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
          "rule": "Postmenopausal osteoporosis (T≤-2.5 or fragility fracture): bisphosphonate first-line + Ca/vit D",
          "highyield": "Medicine — Bone metabolism",
          "hook": "Postmenopausal osteoporosis: bisphosphonate first-line; calcium/vit D are adjuncts",
          "others": {
            "A": "Calcium alone does not reduce fracture risk sufficiently in established osteoporosis.",
            "C": "Thyroid hormone is not a treatment for osteoporosis.",
            "D": "Vitamin D alone is insufficient; bisphosphonate is first-line for established disease."
          }
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
          "rule": "FHH: benign familial hypercalcemia, low urine Ca/creatinine ratio; no surgery (vs primary HPT)",
          "highyield": "Medicine — Calcium metabolism",
          "hook": "Asymptomatic hyperCa + LOW urine Ca + family hx = FHH (benign, no parathyroidectomy)",
          "others": {
            "A": "Primary HPT has high urine calcium and benefits from surgery if indicated.",
            "B": "Malignancy (PTHrP) has suppressed PTH and systemic illness, not a benign family history.",
            "D": "Sarcoidosis causes hypercalcemia via calcitriol, with respiratory/GI symptoms."
          }
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
          "rule": "MEN1 = parathyroid + pituitary + pancreatic (3 Ps); MEN2 = medullary thyroid Ca + pheochromocytoma",
          "highyield": "Medicine — Endocrine genetics",
          "hook": "Parathyroid + pituitary + pancreatic tumours = MEN1; MEN2 = medullary thyroid + pheo",
          "others": {
            "B": "MEN2A has medullary thyroid carcinoma + pheochromocytoma + parathyroid, not pituitary/pancreatic.",
            "C": "MEN2B adds mucosal neuromas and marfanoid habitus, not this triad.",
            "D": "von Hippel-Lindau involves CNS/retinal haemangioblastoma and renal/pancreatic cysts, not these."
          }
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
          "rule": "Thyroid nodule: microcalcification + irregular margin + taller-than-wide = suspicious → FNA biopsy",
          "highyield": "Surgery — Thyroid",
          "hook": "Suspicious USS features (microcalcification, irregular margin, taller-than-wide) → FNA, not watch",
          "others": {
            "A": "Suspicious features require tissue diagnosis, not just surveillance.",
            "B": "Operating without FNA risks removing a benign nodule unnecessarily.",
            "C": "Radioiodine is for hyperthyroidism/ablation, not a solid suspicious nodule."
          }
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
          "rule": "Euthyroid sick syndrome: low T3, normal TSH/fT4 in severe illness; recovers; no thyroid treatment",
          "highyield": "Medicine — Thyroid",
          "hook": "Acute illness + low T3 + normal TSH/T4 = euthyroid sick syndrome (don't treat thyroid)",
          "others": {
            "A": "Primary hypothyroidism would show high TSH and low T4, not this pattern.",
            "C": "Central hypothyroidism would show low T4 with inappropriately normal/low TSH.",
            "D": "Hyperthyroidism would show suppressed TSH and high T4/T3."
          }
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
          "rule": "Thyrotoxic periodic paralysis: hyperthyroidism (Graves, Asian males) → hypokalaemic weakness; treat thyroid",
          "highyield": "Medicine — Thyroid",
          "hook": "Hyperthyroidism + acute hypokalaemic paralysis (Asian male) = thyrotoxic periodic paralysis",
          "others": {
            "B": "Familial hypokalemic PP occurs without hyperthyroidism and often with a family history/triggers.",
            "C": "Hyperkalemic PP has high (not low) potassium during attacks.",
            "D": "Myasthenia causes fatigable weakness with normal potassium and ocular/bulbar involvement."
          }
        }
      }
    ]
  },
  {
    "id": "endocrinesurgery",
    "name": "Thyroglossal Duct Cyst & Sistrunk Resection",
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
          "rule": "Thyroglossal duct cyst: midline, moves on tongue protrusion; Sistrunk = excise cyst + tract + hyoid",
          "highyield": "Surgery — Head & Neck",
          "hook": "Midline neck mass rising on tongue protrusion = thyroglossal duct cyst → Sistrunk resection",
          "others": {
            "A": "Branchial cleft cysts are lateral and do not move on tongue protrusion.",
            "B": "A thyroid nodule is in the thyroid gland, not a midline suprahyoid cyst.",
            "D": "Lymphadenopathy is discrete, firm nodes, not a cystic midline mass."
          }
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
          "rule": "Branchial cleft cyst: lateral neck (anterior triangle), no movement on tongue protrusion; excision",
          "highyield": "Surgery — Head & Neck",
          "hook": "Lateral neck cyst, no tongue-protrusion movement = branchial cleft cyst",
          "others": {
            "A": "A thyroglossal cyst is midline and moves on tongue protrusion.",
            "B": "A thyroid adenoma is a thyroid-gland nodule, not a lateral cervical cyst.",
            "D": "Carotid body tumours are at the carotid bifurcation, not simple lateral cysts."
          }
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
          "rule": "External laryngeal (SLN external) injury: loss of pitch/high-note control, no hoarseness; RLN = hoarseness",
          "highyield": "Surgery — Head & Neck",
          "hook": "Difficulty with high notes/pitch, no hoarseness = external laryngeal nerve; RLN = hoarseness",
          "others": {
            "A": "RLN injury causes hoarseness/breathiness and a paramedian cord, not just pitch loss.",
            "B": "Vagus injury would cause more widespread deficits including RLN palsy.",
            "C": "Hypoglossal injury causes tongue deviation, not vocal pitch change."
          }
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
          "rule": "Bilateral RLN injury: both cords paramedian → airway obstruction → urgent tracheostomy/intubation",
          "highyield": "Surgery — Head & Neck",
          "hook": "Bilateral RLN injury = both cords paramedian → stridor/airway obstruction → urgent tracheostomy",
          "others": {
            "A": "Hypocalcaemia causes tetany/laryngospasm later, not immediate bilateral cord fixation.",
            "C": "Hematoma causes compression; the described bilateral cord finding points to RLN, not hematoma.",
            "D": "Unilateral injury causes hoarseness only; this is bilateral and emergent."
          }
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
          "rule": "Papillary thyroid Ca: total thyroidectomy + central neck dissection for tumours ≥1cm or nodal disease",
          "highyield": "Surgery — Endocrine",
          "hook": "Papillary thyroid Ca ≥1cm/ nodal → total thyroidectomy + central compartment dissection",
          "others": {
            "A": "Lobectomy alone is for small, low-risk, uninodular intrathyroidal cancers only.",
            "B": "Radioiodine is adjuvant AFTER thyroidectomy, not a substitute for resection.",
            "D": "External beam radiotherapy is not first-line for differentiated thyroid cancer."
          }
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
          "rule": "Adjuvant RAI after thyroidectomy for intermediate/high-risk differentiated thyroid Ca (size/ETE/nodes)",
          "highyield": "Surgery — Endocrine",
          "hook": "Differentiated thyroid Ca (size/extension/nodes) → total thyroidectomy + adjuvant radioiodine",
          "others": {
            "A": "External beam RT is reserved for unresectable or anaplastic disease.",
            "B": "Chemotherapy is not used for differentiated thyroid cancer.",
            "C": "Higher-risk features here warrant RAI, not observation."
          }
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
          "rule": "Thyroid lymphoma: rapid enlargement in Hashimoto; excisional biopsy; chemo/radiotherapy (not thyroidectomy)",
          "highyield": "Surgery — Head & Neck",
          "hook": "Rapid painful thyroid mass in Hashimoto + lymphoid cells = thyroid lymphoma → excisional bx + chemo/RT",
          "others": {
            "B": "Anaplastic carcinoma is treated surgically if resectable but is a different histology (not lymphoid).",
            "C": "Medullary carcinoma is calcitonin-secreting and grows slowly, not a rapid lymphoid proliferation.",
            "D": "A rapidly enlarging painful mass is not a benign goitre to observe."
          }
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
          "rule": "Reoperative thyroid/parathyroid: scarred planes → higher RLN + parathyroid injury; use monitoring",
          "highyield": "Surgery — Head & Neck",
          "hook": "Reoperative thyroid surgery = distorted planes → higher RLN + parathyroid injury risk",
          "others": {
            "B": "Carotid injury is not the characteristic incremental risk of reoperative thyroid surgery.",
            "C": "Tracheal perforation is rare and not the main concern.",
            "D": "Chyle leak is a thoracic duct issue, not typical in thyroid reoperation."
          }
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
          "rule": "Graves surgery indicated for compressive/malignant/failed-medical; must be euthyroid pre-op (avoid storm)",
          "highyield": "Surgery — Endocrine",
          "hook": "Graves thyroidectomy: operate only euthyroid (ATD + beta-blocker ± Lugol) to prevent storm",
          "others": {
            "A": "Operating on an unprepared hyperthyroid gland risks fatal thyroid storm.",
            "C": "Levothyroxine would worsen thyrotoxicosis pre-operatively.",
            "D": "Steroids alone do not achieve euthyroidism; ATD + beta-blocker are key."
          }
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
          "rule": "Solitary parathyroid adenoma: MIP; 4-gland hyperplasia: subtotal/total + autotransplant; carcinoma: en bloc",
          "highyield": "Surgery — Endocrine",
          "hook": "Single parathyroid adenoma = MIP; 4-gland hyperplasia = subtotal/total parathyroidectomy",
          "others": {
            "B": "Four-gland hyperplasia needs subtotal/total, not a single-gland approach.",
            "C": "Carcinoma is hard, invasive, with very high Ca — not a simple single adenoma.",
            "D": "The lesion is parathyroid, not thyroid."
          }
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
          "rule": "Tertiary HPT: CKD → parathyroid hyperplasia becomes autonomous; surgery if refractory/pre-transplant",
          "highyield": "Surgery — Endocrine",
          "hook": "CKD + refractory high PTH/hyperCa = tertiary HPT → subtotal/total parathyroidectomy",
          "others": {
            "A": "Primary HPT is an adenoma, not CKD-driven hyperplasia.",
            "C": "Vitamin D toxicity causes hypercalcaemia but not high PTH and not in this CKD context.",
            "D": "Sarcoidosis causes hypercalcaemia via calcitriol, with low PTH."
          }
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
          "rule": "Parathyroid crisis: severe symptomatic HPT hyperCa → stabilise (fluids/bisphosphonate) then urgent parathyroidectomy",
          "highyield": "Surgery — Endocrine",
          "hook": "Symptomatic severe hypercalcaemia from HPT = parathyroid crisis → urgent parathyroidectomy",
          "others": {
            "A": "Observation is dangerous in a hypercalcaemic crisis.",
            "C": "Bisphosphonates stabilise but do not remove the diseased gland; surgery is definitive.",
            "D": "The parathyroid, not the thyroid, is the source."
          }
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
          "rule": "Inferior thyroid artery supplies inferior parathyroids; ligate laterally to preserve parathyroid viability",
          "highyield": "Surgery — Head & Neck",
          "hook": "Inferior thyroid artery → inferior parathyroids; ligate laterally to preserve them (avoid hypoCa)",
          "others": {
            "A": "The artery does not supply the RLN; the nerve lies in relation to it but is neural, not perfused by it.",
            "B": "The superior thyroid artery also supplies the thyroid; the inferior is not sole.",
            "C": "It is an arterial supply, not venous drainage, to the parathyroids."
          }
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
          "rule": "Adrenal incidentaloma: resect if >4 cm or functioning (malignancy risk); else observe",
          "highyield": "Surgery — Endocrine",
          "hook": "Adrenal incidentaloma >4 cm (or functioning) → resect; small benign → observe",
          "others": {
            "B": "A 5 cm mass is not simply 'benign' without resection given size-based malignancy risk.",
            "C": "Follow-up imaging is needed; complete neglect risks missing malignancy.",
            "D": "Chemotherapy is not first-line for a localized adrenal mass."
          }
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
          "rule": "Adrenal tumour (Conn/pheo/cortisol): laparoscopic adrenalectomy; alpha-block first if phaeochromocytoma",
          "highyield": "Surgery — Endocrine",
          "hook": "Conn/pheo/cortisol adrenal tumour → laparoscopic adrenalectomy (alpha-block first if pheo)",
          "others": {
            "A": "Open laparotomy is reserved for large/malignant/invasive lesions, not routine benign tumours.",
            "B": "Partial nephrectomy is for renal, not adrenal, pathology.",
            "C": "Percutaneous ablation is not standard for functional adrenal adenomas."
          }
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
          "rule": "Transsphenoidal pituitary surgery: CSF leak → watery rhinorrhoea; bed-up, lumbar drain, repair if persistent",
          "highyield": "Surgery — Neurosurgery",
          "hook": "Clear rhinorrhoea after transsphenoidal surgery = CSF leak → head-up, may need repair",
          "others": {
            "A": "Clear rhinorrhoea is not normal oedema; it indicates a leak.",
            "B": "Meningitis can be a CONSEQUENCE of an unrecognised leak, not the primary event here.",
            "C": "Tumour bleeding would cause worsening mass effect/haemorrhage, not clear rhinorrhoea."
          }
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
          "rule": "Cushing disease: BIPSS (central:peripheral ACTH gradient) confirms pituitary source before transsphenoidal surgery",
          "highyield": "Medicine/Surgery — Endocrinology",
          "hook": "Normal pituitary MRI in Cushing → BIPSS gradient confirms pituitary source before TSS",
          "others": {
            "B": "Low-dose dexamethasone suppression screens for Cushing, not localises the source.",
            "C": "24h UFC confirms hypercortisolism, not the pituitary vs ectopic distinction.",
            "D": "Plasma metanephrines screen for phaeochromocytoma, not ACTH source."
          }
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
          "rule": "Primary HPT: sestamibi scan ± neck US localises the adenoma pre-operatively (guides MIP)",
          "highyield": "Surgery — Endocrine",
          "hook": "Primary HPT: pre-op sestamibi ± US localises the adenoma before parathyroidectomy",
          "others": {
            "B": "CT chest is not used to localise parathyroid adenomas in primary HPT.",
            "C": "PET is not the standard localising modality for parathyroid disease.",
            "D": "MRI brain is irrelevant to parathyroid localisation."
          }
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
          "rule": "Pre-op Lugol iodine in Graves: reduces thyroid vascularity/hormone release for safer thyroidectomy",
          "highyield": "Surgery — Endocrine",
          "hook": "Graves pre-thyroidectomy: Lugol iodine → reduce gland vascularity + hormone release (safer op)",
          "others": {
            "A": "Radioiodine ablation is a different therapy, not the pre-surgical iodine preparation.",
            "B": "Iodine does not treat Graves orbitopathy.",
            "C": "It is not thyroid hormone replacement."
          }
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
          "rule": "Post-thyroidectomy hypoCa: transient (ischaemia/stunning) recovers; permanent = gland excised/infarcted",
          "highyield": "Surgery — Head & Neck",
          "hook": "Post-thyroidectomy hypoCa: transient (ischaemia) vs permanent (parathyroid excised) — timing/durability",
          "others": {
            "A": "Surgeon identity does not explain the transient-vs-permanent biology.",
            "B": "Pathology (Graves vs cancer) does not determine transient vs permanent hypocalcaemia.",
            "D": "Vitamin D deficiency may contribute but does not explain the post-op temporal pattern."
          }
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
          "rule": "Thyroid storm prevention: thyroidectomy only when euthyroid (ATD+beta-blocker+iodine prep); never uncontrolled",
          "highyield": "Surgery — Endocrine",
          "hook": "Thyroid storm prevention: euthyroid at surgery (ATD + beta-blocker + iodine), never operate uncontrolled",
          "others": {
            "A": "Antibiotics do not prevent storm.",
            "C": "Steroids alone do not achieve euthyroidism or prevent storm.",
            "D": "Operating on an uncontrolled gland is the precipitant, not prevention."
          }
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
          "rule": "Parathyroid autotransplant (forearm): preserves function; superficial site allows re-exploration if recurrent",
          "highyield": "Surgery — Endocrine",
          "hook": "Total parathyroidectomy → autotransplant into forearm (preserve function, accessible if recurrence)",
          "others": {
            "A": "It preserves parathyroid, not thyroid, function.",
            "B": "It does not mark or protect the RLN.",
            "D": "Chyle leak is unrelated to parathyroid autotransplantation."
          }
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
          "rule": "Substernal goitre: thyroid extending retrosternally with compressive symptoms → thyroidectomy",
          "highyield": "Surgery — Head & Neck",
          "hook": "Goitre extending below sternal notch + compressive symptoms = substernal goitre → surgery",
          "others": {
            "A": "Thymoma arises in the thymus (anterior mediastinum) without a thyroid origin.",
            "B": "Lymphoma would show lymphoid histology, not thyroid tissue.",
            "D": "A compressive substernal goitre is not observed; it requires surgery."
          }
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
          "rule": "Non-toxic MNG: operate for compressive symptoms (dysphagia/tracheal deviation); RAI for toxic; no long-term suppression",
          "highyield": "Surgery — Endocrine",
          "hook": "Non-toxic MNG + compressive symptoms (dysphagia/tracheal deviation) → thyroidectomy",
          "others": {
            "B": "Radioiodine is preferred for TOXIC MNG; compressive non-toxic goitre needs surgery.",
            "C": "Observation is wrong with compressive symptoms.",
            "D": "Long-term suppressive thyroxine is ineffective and risky in MNG."
          }
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
          "rule": "Parathyroid carcinoma: hard fixed invasive mass + severe hyperCa/PTH → en bloc resection + ipsilateral lobe",
          "highyield": "Surgery — Endocrine",
          "hook": "Hard fixed invasive mass + severe hyperCa/PTH = parathyroid carcinoma → en bloc resection",
          "others": {
            "A": "A benign adenoma is soft/mobile and treated with MIP, not en bloc for cancer.",
            "C": "Medullary thyroid carcinoma secretes calcitonin and arises from thyroid C-cells.",
            "D": "A thyroid adenoma does not cause PTH-driven hypercalcaemia."
          }
        }
      }
    ]
  },
  {
    "id": "gi-emergencies",
    "name": "Upper GI Bleeding — Variceal vs Non-Variceal",
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
          "rule": "Achalasia = bird-beak + liquids>solids → pneumatic dilation or Heller myotomy (botox is temporary)",
          "highyield": "Oesophageal dysphagia: achalasia vs carcinoma vs stricture",
          "hook": "Bird-beak + dysphagia to liquids = achalasia → dilate or myotomy, not botox (unless frail)",
          "others": {
            "A": "Botulinum toxin relieves symptoms only temporarily (~6 months) and is reserved for elderly/frail patients who cannot tolerate definitive therapy.",
            "B": "A PPI trial treats reflux, not achalasia; the bird-beak appearance is not reflux.",
            "D": "Oesophagectomy is for carcinoma; achalasia is a benign motility disorder managed by myotomy."
          }
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
          "rule": "Solids-then-liquids dysphagia + weight loss = carcinoma; liquids-from-start = achalasia",
          "highyield": "Oesophageal dysphagia: malignant vs benign causes",
          "hook": "Solids first = carcinoma; liquids and solids together from the start = achalasia",
          "others": {
            "A": "Achalasia causes dysphagia to liquids and solids from onset (not solids-first) and shows a bird-beak, not an irregular stricture.",
            "C": "A peptic stricture follows long-standing reflux and is less likely with a smoking/alcohol history and rapid weight loss.",
            "D": "Plummer-Vinson syndrome (web + iron deficiency anaemia + glossitis) causes intermittent solid-food dysphagia in iron-deficient women."
          }
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
          "rule": "Acute variceal bleed → endoscopic band ligation first-line; TIPS is rescue",
          "highyield": "Upper GI bleed: variceal vs non-variceal management",
          "hook": "Cirrhosis + haematemesis = band first; octreotide/terlipressin is the bridge, not the answer",
          "others": {
            "A": "Sclerotherapy is now second-line — banding has better outcomes and fewer complications.",
            "C": "Octreotide reduces portal pressure as a pharmacologic adjunct but is not the primary intervention.",
            "D": "TIPS is reserved for refractory or recurrent bleeding after endoscopic therapy fails."
          }
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
          "rule": "Post-vomiting haematemesis (stable) = Mallory-Weiss; full-thickness rupture with emphysema = Boerhaave",
          "highyield": "Upper GI bleed: Mallory-Weiss vs Boerhaave",
          "hook": "Haematemesis after retching = Mallory-Weiss; add chest pain + subcutaneous emphysema = Boerhaave",
          "others": {
            "A": "Boerhaave is a transmural oesophageal rupture presenting with severe chest pain, subcutaneous emphysema, and sepsis — not isolated haematemesis.",
            "B": "Varices occur with portal hypertension/cirrhosis; there is no liver history and vomiting is the trigger.",
            "C": "Peptic ulcer bleeding is not classically preceded by forceful vomiting."
          }
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
          "rule": "Boerhaave = post-emetic transmural rupture → water-soluble contrast (barium contraindicated)",
          "highyield": "Oesophageal rupture: Boerhaave syndrome",
          "hook": "Vomiting + chest pain + neck emphysema = Boerhaave → water-soluble contrast, never barium",
          "others": {
            "A": "Barium leaking into the mediastinum causes chemical mediastinitis and is contraindicated in suspected rupture.",
            "B": "ECG/troponins evaluate for MI but do not diagnose oesophageal rupture; the emphysema is the key finding.",
            "D": "A plain CXR may show pneumomediastinum but reassurance is wrong — this is a surgical emergency."
          }
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
          "rule": "Pneumoperitoneum + peritonitis → resuscitate then laparotomy (barium/endoscopy contraindicated)",
          "highyield": "Acute abdomen: perforated peptic ulcer",
          "hook": "Board-like rigidity + free air = laparotomy, never endoscopy",
          "others": {
            "B": "IV PPI treats the ulcer but does not close the perforation; surgery is definitive.",
            "C": "Endoscopy is contraindicated when perforation is suspected — air insufflation worsens the leak.",
            "D": "Nasogastric decompression is adjunctive; observation alone allows peritonitis to progress."
          }
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
          "rule": "Duodenal ulcer pain relieved by food; gastric ulcer pain worsened by food",
          "highyield": "Peptic ulcer disease: duodenal vs gastric ulcer",
          "hook": "Duodenal ulcer = food relieves + nocturnal; gastric ulcer = food worsens + weight loss",
          "others": {
            "B": "Pain worsened by food is the gastric ulcer pattern, not duodenal.",
            "C": "Retrosternal burning after meals describes GERD, not PUD.",
            "D": "RUQ pain after fatty meals suggests biliary colic, not PUD."
          }
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
          "rule": "Endoscopy is both diagnostic and therapeutic in UGIB — always first",
          "highyield": "Upper GI bleed: investigation and management",
          "hook": "Upper GI bleed = endoscopy first (diagnose + treat in one step); CTA only if massive or endoscopy fails",
          "others": {
            "A": "Barium meal is obsolete and cannot provide haemostasis; it also obscures future endoscopy.",
            "C": "CT angiography is for massive ongoing bleeding or after failed endoscopy, not first-line in a stable patient.",
            "D": "Observation alone risks re-bleeding; the source must be identified and treated endoscopically."
          }
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
          "rule": "Charcot triad = ascending cholangitis → antibiotics + urgent ERCP (add hypotension/AMS = Reynolds pentad)",
          "highyield": "Biliary emergencies: cholangitis vs cholecystitis",
          "hook": "Charcot triad (pain+fever+jaundice) = cholangitis → ERCP now; Murphy's (pain only) = cholecystitis",
          "others": {
            "A": "Cholecystectomy is delayed until after the acute cholangitis resolves; urgent drainage comes first.",
            "B": "Observation without drainage lets septic cholangitis progress — mortality is high.",
            "D": "Liver biopsy is not indicated and is dangerous in biliary obstruction."
          }
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
          "rule": "Gas in GB wall (diabetic) = emphysematous cholecystitis → urgent cholecystectomy",
          "highyield": "Cholecystitis: emphysematous vs calculous",
          "hook": "Diabetic + gas in gallbladder wall = emphysematous cholecystitis → urgent surgery, not observation",
          "others": {
            "A": "Oral outpatient antibiotics are inadequate for a necrotising gallbladder infection.",
            "B": "Delaying surgery 6 weeks risks perforation and sepsis.",
            "C": "Observation is unsafe — emphysematous cholecystitis has high morbidity without urgent surgery."
          }
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
          "rule": "Rigler's triad (SBO + pneumobilia + ectopic gallstone) = gallstone ileus",
          "highyield": "Small bowel obstruction: unusual causes",
          "hook": "SBO + pneumobilia + ectopic stone = gallstone ileus (Rigler's triad)",
          "others": {
            "A": "Adhesions are the most common cause of SBO but do not produce pneumobilia or an ectopic stone.",
            "C": "Sigmoid volvulus gives a dilated loop with a 'coffee bean' sign, not pneumobilia.",
            "D": "Caecal carcinoma causes obstruction but without pneumobilia or a migratory stone."
          }
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
          "rule": "Meckel's = painless PR bleed in a child, anti-mesenteric, rule of 2s",
          "highyield": "Lower GI bleed in children: Meckel's vs intussusception",
          "hook": "Painless PR bleed in a child = Meckel's; painful currant-jelly stool = intussusception",
          "others": {
            "A": "Intussusception presents with intermittent colicky abdominal pain, 'currant jelly' stool, and a sausage-shaped mass.",
            "B": "Juvenile polyps cause bleeding but are less common than Meckel's for significant painless bleeding with anaemia.",
            "D": "Ulcerative colitis causes bloody diarrhoea with cramps, not isolated painless bleeding."
          }
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
          "rule": "Pain out of proportion + AF + lactic acidosis = acute mesenteric ischaemia",
          "highyield": "Acute abdomen: mesenteric ischaemia",
          "hook": "AF + pain out of proportion + lactate = mesenteric ischaemia → CT angiography, not analgesia-and-wait",
          "others": {
            "B": "Pancreatitis causes epigastric pain radiating to the back with raised lipase/amylase, not disproportionate diffuse pain.",
            "C": "Perforation gives peritonism (rigid, rebound) and free air, not a near-normal abdomen.",
            "D": "Renal colic is loin-to-groin with haematuria, not diffuse severe pain with lactic acidosis."
          }
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
          "rule": "Intussusception (stable) → air/contrast enema reduction; laparotomy if peritonitis/perforation",
          "highyield": "Paediatric surgical emergencies: intussusception",
          "hook": "Infant + currant jelly + sausage mass = intussusception → air enema first (unless peritonitis)",
          "others": {
            "A": "Laparotomy is reserved for failed enema reduction, peritonitis, or perforation.",
            "B": "Antibiotics do not reduce the intussusception and are not first-line.",
            "D": "Observation is unsafe — unreduced intussusception causes bowel ischaemia."
          }
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
          "rule": "Femoral hernia = below/lateral to pubic tubercle; irreducible + tender + obstruction = strangulated → urgent surgery",
          "highyield": "Hernias: strangulation vs incarceration",
          "hook": "Irreducible + tender + obstructed femoral hernia = strangulated → theatre, never push it back",
          "others": {
            "A": "Manual reduction of a strangulated hernia can reduce necrotic bowel into the abdomen — contraindicated.",
            "B": "Elective repair delays life-saving surgery for strangulation.",
            "C": "Antibiotics do not address the ischaemic bowel; surgery is urgent."
          }
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
          "rule": "Diverticulosis = painless bleeding; diverticulitis = fever + LIF pain",
          "highyield": "Lower GI bleed: diverticulosis vs diverticulitis",
          "hook": "Painless PR bleed in elderly = diverticulosis; add fever + LIF pain = diverticulitis",
          "others": {
            "A": "Diverticulitis presents with fever and left lower quadrant pain, not painless bleeding.",
            "B": "Carcinoma typically causes chronic occult bleeding/weight loss, not acute painless large-volume bleed.",
            "D": "Haemorrhoids cause small-volume bright blood on wiping, not large-volume bleed."
          }
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
          "rule": "Acute diverticulitis → CT; barium enema and colonoscopy are contraindicated acutely",
          "highyield": "Diverticulitis: diagnosis and imaging",
          "hook": "LIF pain + fever = diverticulitis → CT, never barium or scope in the acute phase",
          "others": {
            "B": "Barium enema risks perforation in acute inflammation and is contraindicated.",
            "C": "Colonoscopy risks perforation during acute diverticulitis; it is deferred 6-8 weeks.",
            "D": "Ultrasound is less sensitive than CT for diverticulitis and its complications."
          }
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
          "rule": "Ischaemic colitis = watershed splenic flexure, pain then bloody diarrhoea, usually self-limited",
          "highyield": "Ischaemic colitis vs mesenteric ischaemia",
          "hook": "Elderly + LIF pain + bloody diarrhoea + splenic flexure = ischaemic colitis; AF + pain out of proportion = mesenteric ischaemia",
          "others": {
            "A": "Acute mesenteric ischaemia is occlusive (AF/embolus) with pain out of proportion, not primarily bloody diarrhoea at the splenic flexure.",
            "B": "Ulcerative colitis is a chronic relapsing disorder in younger patients with continuous rectal involvement.",
            "C": "Infectious colitis usually has a clear infectious prodrome and lacks watershed distribution."
          }
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
          "rule": "Coffee-bean sign = sigmoid volvulus → endoscopic detorsion first (laparotomy if gangrene/peritonitis)",
          "highyield": "Large bowel obstruction: sigmoid volvulus",
          "hook": "Coffee-bean sign in an elderly patient = sigmoid volvulus → scope to detort (unless peritonitis)",
          "others": {
            "B": "Laparotomy is reserved for failed detorsion, peritonitis, or gangrenous bowel.",
            "C": "Barium enema is contraindicated in obstruction/possible perforation.",
            "D": "Observation allows bowel ischaemia to progress; detorsion is urgent."
          }
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
          "rule": "Anal fissure = tearing pain + fresh bleeding; haemorrhoids = painless bleeding",
          "highyield": "Anorectal conditions: fissure vs haemorrhoids vs fistula",
          "hook": "Tearing pain + blood on paper = anal fissure; painless fresh bleed = haemorrhoids",
          "others": {
            "A": "Internal haemorrhoids cause painless bleeding, not tearing pain.",
            "B": "Anal fistula presents with recurrent purulent discharge and a history of abscess, not sharp pain with bleeding.",
            "C": "Carcinoma causes occult bleeding/change in bowel habit, not acute painful defecation in a young woman."
          }
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
          "rule": "Internal haemorrhoids = painless (above dentate line); external = painful when thrombosed",
          "highyield": "Haemorrhoids: internal grading vs external",
          "hook": "Prolapse that self-reduces = 2nd degree; needs manual reduction = 3rd; irreducible = 4th",
          "others": {
            "A": "External haemorrhoids are below the dentate line and painful, especially when thrombosed.",
            "C": "Third-degree internal haemorrhoids require manual reduction — this one reduces spontaneously.",
            "D": "Anal fissure causes tearing pain during defecation, not painless bleeding."
          }
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
          "rule": "Perianal abscess → incision and drainage; recurrent abscess → look for fistula",
          "highyield": "Anorectal abscess and fistula",
          "hook": "Fluctuant abscess = drain it; antibiotics alone never cure an abscess",
          "others": {
            "A": "Antibiotics alone cannot penetrate an abscess cavity; drainage is mandatory.",
            "C": "Topical antibiotics are ineffective for a deep abscess.",
            "D": "Warm compresses alone will not resolve a fluctuant abscess."
          }
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
          "rule": "Angiodysplasia = right colon, intermittent painless bleed, linked to aortic stenosis (Heyde)",
          "highyield": "Lower GI bleed: angiodysplasia vs diverticulosis",
          "hook": "Elderly + aortic stenosis + recurrent painless PR bleed = angiodysplasia (right colon)",
          "others": {
            "B": "Diverticulosis bleeds are typically larger-volume and originate from the left colon.",
            "C": "Carcinoma causes occult bleeding with weight loss/altered habit, and is usually seen on colonoscopy.",
            "D": "Haemorrhoids cause small-volume bright blood on wiping, not recurrent anaemia."
          }
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
          "rule": "C. difficile colitis → stop offending antibiotic + oral vancomycin/fidaxomicin (avoid loperamide)",
          "highyield": "Antibiotic-associated colitis: C. difficile",
          "hook": "Post-antibiotic diarrhoea + pseudomembranes = C. diff → oral vancomycin, never loperamide",
          "others": {
            "B": "IV ceftriaxone is a broad-spectrum antibiotic that would worsen C. difficile colitis.",
            "C": "Loperamide is contraindicated — it can precipitate toxic megacolon.",
            "D": "Adding another antibiotic (amoxicillin-clavulanate) worsens the infection; the offending agent must be stopped."
          }
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
          "rule": "Toxic megacolon (UC) → resuscitate + IV steroids + early colectomy if no response",
          "highyield": "Inflammatory bowel disease complications: toxic megacolon",
          "hook": "UC + distension + fever + dilated colon = toxic megacolon → IV steroids + surgical review, no loperamide",
          "others": {
            "A": "Loperamide is contraindicated — it worsens dilatation and perforation risk.",
            "B": "Mesalazine and discharge are inadequate for a life-threatening complication.",
            "C": "Barium enema risks perforation in a dilated inflamed colon."
          }
        }
      }
    ]
  },
  {
    "id": "haematology",
    "name": "Autoimmune Haemolytic Anaemia",
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
          "rule": "AIHA (positive Coombs) is a Type II antibody-mediated hypersensitivity with extravascular haemolysis.",
          "highyield": "Haematology / Hypersensitivity",
          "hook": "Positive Coombs + haemolytic anaemia = Type II (antibody-mediated) hypersensitivity",
          "others": {
            "B": "Type I is mediated by IgE/mast cells (anaphylaxis, allergy), not anti-RBC antibodies",
            "C": "Type III is immune-complex mediated (e.g. serum sickness), not directed at self RBC antigens",
            "D": "Type IV is delayed T-cell mediated (e.g. TB, contact dermatitis), not antibody-mediated haemolysis"
          }
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
          "rule": "Haemolytic jaundice raises unconjugated (indirect) bilirubin with reticulocytosis; conjugated hyperbilirubinaemia is hepatic/cholestatic.",
          "highyield": "Haematology / Neonatal haemolysis",
          "hook": "Haemolysis -> raised unconjugated bilirubin; conjugated rise is hepatic/post-hepatic",
          "others": {
            "A": "haemolysis raises (not lowers) the reticulocyte count",
            "C": "a negative Coombs does not confirm haemolysis; unconjugated bilirubin and reticulocytosis do",
            "D": "conjugated (direct) hyperbilirubinaemia suggests cholestasis or hepatic disease, not pre-hepatic haemolysis"
          }
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
          "rule": "TTP (MAHA, thrombocytopenia, neuro/renal signs): intracranial haemorrhage is the main cause of death; plasma exchange is definitive.",
          "highyield": "Haematology / Microangiopathy",
          "hook": "TTP + severe thrombocytopenia -> intracranial haemorrhage is the most common cause of death",
          "others": {
            "B": "cardiac ischaemia is not the leading cause of death in TTP",
            "C": "pulmonary embolism is not the typical fatal event",
            "D": "hepatic failure is not the main cause of death in TTP"
          }
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
          "rule": "Transfusion iron overload in thalassaemia causes dilated cardiomyopathy (HF); use iron chelation to prevent organ damage.",
          "highyield": "Haematology / Iron overload",
          "hook": "Transfused thalassaemia + heart failure = iron-overload dilated cardiomyopathy; chelation prevents",
          "others": {
            "A": "chronic renal failure is not the typical cause of the heart failure here",
            "C": "cirrhosis does not cause exertional dyspnoea and oedema primarily as a cardiac complication",
            "D": "pulmonary embolism is not the expected process with transfusion history"
          }
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
          "rule": "DIC complicates sepsis: prolonged PT/aPTT, thrombocytopenia, low fibrinogen, high D-dimer; treat the underlying sepsis.",
          "highyield": "Haematology / Coagulation",
          "hook": "Sepsis + shock + low WBC + prolonged PT = septic shock with DIC",
          "others": {
            "A": "uncomplicated UTI does not cause shock, leucopenia and coagulopathy",
            "C": "cardiogenic shock has a raised JVP/pulmonary oedema and does not explain the coagulopathy",
            "D": "massive PE causes acute right-heart strain, not leucopenia with prolonged PT"
          }
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
          "rule": "Goat's milk is folate-poor; an exclusively goat's-milk-fed infant gets megaloblastic (folate-deficiency) anaemia - macrocytic.",
          "highyield": "Haematology / Megaloblastic anaemia",
          "hook": "Goat's milk + macrocytic anaemia in infant = folate deficiency",
          "others": {
            "A": "iron deficiency is microcytic (low MCV), not macrocytic at 106 fL",
            "C": "B12 deficiency is macrocytic but is not the classic goat's-milk cause (folate is)",
            "D": "vitamin C deficiency causes scurvy, not this macrocytic picture"
          }
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
          "rule": "Iron deficiency: microcytic, low ferritin, low iron, high TIBC. Ferritin is the discriminator vs thalassaemia minor.",
          "highyield": "Haematology / Microcytic anaemia",
          "hook": "Low MCV + LOW ferritin + HIGH TIBC = iron deficiency; thalassaemia has normal/high ferritin",
          "others": {
            "B": "thalassaemia minor has microcytosis but normal/high ferritin and often only mild anaemia",
            "C": "sickle cell anaemia is normocytic with sickling on crisis, not this iron profile",
            "D": "B12 deficiency is macrocytic (high MCV), not microcytic"
          }
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
          "rule": "AML: myeloblasts with Auer rods, MPO positive, gum/skin infiltration, older adults; M4/M5 monocytic. Distinct from ALL and CML.",
          "highyield": "Haematology / Acute leukaemia",
          "hook": "Blasts + Auer rods + MPO positive (+ gum infiltration) = AML",
          "others": {
            "A": "CLL is a mature lymphocytic leukaemia of older adults without blasts/Auer rods",
            "B": "ALL is MPO negative, PAS positive, common in children",
            "C": "CML has a chronic phase with basophilia and the BCR-ABL fusion, not gum-infiltrating blasts with Auer rods"
          }
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
          "rule": "ACD: low iron, normal/high ferritin (hepcidin blocks store release), normocytic, in inflammation/malignancy. Ferritin distinguishes from iron deficiency.",
          "highyield": "Haematology / Normocytic anaemia",
          "hook": "Low iron + normal/high ferritin + chronic disease = anaemia of chronic disease",
          "others": {
            "A": "iron deficiency has LOW ferritin, unlike the normal/high ferritin here",
            "C": "B12 deficiency is macrocytic with neurological signs, not this profile",
            "D": "haemolytic anaemia shows reticulocytosis and raised LDH/bilirubin"
          }
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
          "rule": "Warfarin (vitamin K antagonist) is reversed with vitamin K (PCC if life-threatening); protamine reverses heparin.",
          "highyield": "Haematology / Anticoagulation",
          "hook": "Warfarin/INR reversal = vitamin K; protamine is the heparin antidote",
          "others": {
            "B": "protamine sulphate reverses heparin (unfractionated), not warfarin",
            "C": "desmopressin (DDAVP) is used in VWD/platelet function disorders, not to reverse warfarin",
            "D": "platelet transfusion does not correct vitamin K-dependent factor deficiency"
          }
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
          "rule": "B12 deficiency: macrocytic (MCV high), hypersegmented neutrophils, glossitis, neuropathy/SCD; treat with B12 - folate alone would not correct neurology.",
          "highyield": "Haematology / Megaloblastic anaemia",
          "hook": "Macrocytic anaemia + glossitis + neuropathy = B12 deficiency; folate does not cause neuropathy",
          "others": {
            "A": "iron deficiency is microcytic without neuropathy or hypersegmentation",
            "C": "thalassaemia minor is microcytic and mild",
            "D": "ACD is normocytic with low iron but high/normal ferritin and no neuropathy"
          }
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
          "rule": "CML: t(9;22) BCR-ABL (Philadelphia), leucocytosis with basophilia, splenomegaly; treat with TKI (imatinib).",
          "highyield": "Haematology / Myeloproliferative",
          "hook": "Philadelphia chromosome (BCR-ABL) + high WBC + splenomegaly + basophilia = CML",
          "others": {
            "A": "AML has circulating blasts with Auer rods and marrow failure, not a chronic left shift with splenomegaly",
            "C": "CLL shows a mature lymphocytosis with smudge cells in older adults, not basophilia/Ph chromosome",
            "D": "myelofibrosis has teardrop cells and a dry tap with an enlarged spleen but is Ph negative"
          }
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
          "rule": "Hereditary spherocytosis: spherocytes, splenomegaly, gallstones, raised MCHC, negative Coombs; splenectomy for severe disease.",
          "highyield": "Haematology / Red cell membrane",
          "hook": "Spherocytes + splenomegaly + gallstones + raised MCHC, negative Coombs = hereditary spherocytosis",
          "others": {
            "A": "iron deficiency is microcytic with low ferritin, not spherocytes",
            "C": "G6PD deficiency gives episodic haemolysis with Heinz bodies, not persistent spherocytosis/gallstones",
            "D": "sickle cell shows sickling on Hb electrophoresis, not spherocytes"
          }
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
          "rule": "Vaso-occlusive crisis: analgesia, hydration, oxygen, treat infection/trigger. Transfuse only for complications (acute chest syndrome, stroke, sequestration).",
          "highyield": "Haematology / Haemoglobinopathy",
          "hook": "Sickle vaso-occlusive crisis = analgesia + hydration + oxygen; transfusion only for complications",
          "others": {
            "B": "transfusion is not needed for every crisis, only for complications",
            "C": "antibiotics alone do not relieve the pain of a vaso-occlusive crisis",
            "D": "splenectomy is not the treatment for an acute painful crisis"
          }
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
          "rule": "Aplastic anaemia: pancytopenia, hypocellular marrow without blasts/fibrosis; immunosuppression or transplant.",
          "highyield": "Haematology / Bone marrow failure",
          "hook": "Pancytopenia + hypocellular (empty) marrow = aplastic anaemia",
          "others": {
            "B": "AML shows blasts and a hypercellular marrow, not an empty hypocellular marrow",
            "C": "myeloma shows plasma cells and an M-protein, not pancytopenia with an empty marrow",
            "D": "iron deficiency is not pancytopenic and has an iron-deficient (not hypocellular) picture"
          }
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
          "rule": "G6PD deficiency: X-linked, acute oxidative haemolysis with fava/oxidant drugs, Heinz bodies; avoid triggers, supportive care.",
          "highyield": "Haematology / Red cell enzyme defect",
          "hook": "Fava beans/oxidant drug + acute haemolysis + Heinz bodies (males) = G6PD deficiency",
          "others": {
            "B": "spherocytosis causes persistent spherocytes and gallstones, not trigger-related Heinz bodies",
            "C": "AIHA is Coombs positive without the drug/fava trigger pattern",
            "D": "thalassaemia major is a transfusion-dependent chronic microcytic anaemia"
          }
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
          "rule": "Haemophilia A: X-linked factor VIII deficiency, haemarthroses; replace factor VIII. Haemophilia B = factor IX.",
          "highyield": "Haematology / Coagulation",
          "hook": "Joint bleeds + X-linked family history = haemophilia A (factor VIII deficiency)",
          "others": {
            "B": "factor IX deficiency is haemophilia B; it is still X-linked, not autosomal dominant",
            "C": "VWD is autosomal, affects mucocutaneous bleeding (not deep joints), and is not X-linked",
            "D": "vitamin K-dependent factor deficiency differs and is not X-linked recessive joint bleeding"
          }
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
          "rule": "ITP: isolated thrombocytopenia, normal film, no splenomegaly; first-line corticosteroids (IVIg if severe).",
          "highyield": "Haematology / Thrombocytopenia",
          "hook": "Isolated low platelets, normal film, no splenomegaly = ITP; first-line steroids",
          "others": {
            "B": "TTP has microangiopathic haemolytic anaemia with schistocytes and fever/neuro/renal signs",
            "C": "leukaemia shows blasts/pancytopenia and organ infiltration",
            "D": "vitamin K deficiency causes coagulopathy (prolonged PT), not isolated low platelets"
          }
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
          "rule": "PV: high Hct with normal SpO2, aquagenic pruritus, JAK2 V617F; venesection + aspirin (+ cytoreduction).",
          "highyield": "Haematology / Myeloproliferative",
          "hook": "High Hct + aquagenic pruritus + normal SpO2 = polycythaemia vera (JAK2 V617F)",
          "others": {
            "A": "secondary polycythaemia follows chronic hypoxia (low SpO2) with high EPO",
            "C": "lung-disease hypoxia causes secondary polycythaemia with low SpO2, not PV",
            "D": "iron deficiency is microcytic and does not raise the haematocrit with pruritus"
          }
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
          "rule": "CLL: mature lymphocytosis with smudge cells in the elderly, lymphadenopathy; treat if symptomatic/cytopenic.",
          "highyield": "Haematology / Lymphoproliferative",
          "hook": "Elderly + mature lymphocytosis + smudge cells = CLL",
          "others": {
            "B": "ALL is a childhood blast-cell acute leukaemia, not an elderly mature lymphocytosis",
            "C": "hairy cell leukaemia often has pancytopenia and hairy cytoplasmic projections",
            "D": "follicular lymphoma is primarily nodal lymphoma, not a marked peripheral lymphocytosis with smudge cells"
          }
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
          "rule": "DIC: consumption of factors/platelets after tissue-factor release (abruption, sepsis); low fibrinogen, high D-dimer; treat cause + blood products.",
          "highyield": "Haematology / Coagulation",
          "hook": "Bleeding + low fibrinogen/platelets + high D-dimer + obstetric/septic trigger = DIC; treat the cause",
          "others": {
            "B": "haemophilia is a single-factor (VIII/IX) deficiency, not a consumption coagulopathy with low fibrinogen",
            "C": "ITP gives isolated thrombocytopenia without prolonged PT or low fibrinogen",
            "D": "vitamin K deficiency gives prolonged PT but not thrombocytopenia or low fibrinogen"
          }
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
          "rule": "Myeloma: CRAB + monoclonal paraprotein + rouleaux; marrow plasma cells; manage with antimyeloma therapy and hypercalcaemia.",
          "highyield": "Haematology / Plasma cell dyscrasia",
          "hook": "Polyclonal gammopathy + CRAB + M-spike + rouleaux = multiple myeloma",
          "others": {
            "B": "CLL is a mature lymphocytosis with smudge cells, not lytic bone lesions and an M-spike",
            "C": "metastatic prostate cancer gives blastic (not lytic) lesions and a high PSA, not a paraprotein",
            "D": "polycythaemia vera raises the haematocrit, not a paraprotein with lytic lesions"
          }
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
          "rule": "Vitamin K deficiency (malabsorption/antibiotics/liver) prolongs PT via factors II, VII, IX, X; treat with vitamin K.",
          "highyield": "Haematology / Coagulation",
          "hook": "Malabsorption + prolonged PT = vitamin K deficiency; PT rises first (factor VII)",
          "others": {
            "B": "factor VIII deficiency (haemophilia A) prolongs aPTT, not mainly the PT",
            "C": "VWD affects platelet adhesion with normal aPTT/PT in mild cases",
            "D": "thrombocytopenia reduces platelet count, but the platelet count is normal here"
          }
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
          "rule": "Megaloblastic film: macro-ovalocytes and hypersegmented neutrophils; MCV elevated. Seen in B12/folate deficiency.",
          "highyield": "Haematology / Red cell morphology",
          "hook": "Hypersegmented neutrophils + macro-ovalocytes on film = megaloblastic (B12/folate) anaemia",
          "others": {
            "B": "microcytes and target cells suggest iron deficiency or thalassaemia, not megaloblastic change",
            "C": "spherocytes suggest spherocytosis/AIHA",
            "D": "sickle cells suggest sickle cell disease"
          }
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
          "rule": "Suspected haemolytic transfusion reaction: stop the transfusion, keep IV access, support BP/renal function, and investigate.",
          "highyield": "Haematology / Transfusion medicine",
          "hook": "Symptoms during transfusion (fever/back pain/dark urine) = stop the transfusion, keep the line, manage the reaction",
          "others": {
            "B": "continuing or slowing the transfusion risks worsening haemolysis and DIC",
            "C": "paracetamol alone does not address a potential haemolytic reaction",
            "D": "the line should be kept open with saline while the unit is stopped"
          }
        }
      }
    ]
  },
  {
    "id": "hepatology",
    "name": "Hepatic Encephalopathy",
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
          "rule": "NH3 detoxified to glutamine via glutamine synthetase (glutamate is the acceptor)",
          "highyield": "Hepatic encephalopathy: pathophysiology",
          "hook": "Ammonia + glutamate = glutamine (glutamine synthetase) — the NH3→glutamine pair",
          "others": {
            "A": "Aspartate feeds the urea cycle (with citrulline → argininosuccinate), not glutamine formation.",
            "B": "Alanine carries ammonia from muscle to liver (glucose-alanine cycle), not the acceptor for glutamine.",
            "D": "Pyruvate is not the nitrogen acceptor for ammonia detoxification."
          }
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
          "rule": "SBP = ascitic PMN >250 → cefotaxime + IV albumin (albumin prevents HRS)",
          "highyield": "Cirrhosis complications: SBP",
          "hook": "Cirrhosis + ascites + fever = tap it; PMN >250 = SBP → cefotaxime + albumin",
          "others": {
            "A": "Oral ciprofloxacin is for SBP prophylaxis in high-risk patients, not treatment of active infection.",
            "B": "Diuretics do not treat infection; they may worsen renal hypoperfusion.",
            "C": "Observation lets the infection progress; SBP has high mortality if untreated."
          }
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
          "rule": "HRS = functional AKI in cirrhosis, urine Na <10, bland sediment → terlipressin + albumin",
          "highyield": "Cirrhosis complications: hepatorenal syndrome",
          "hook": "Cirrhosis + low urine Na + bland sediment + no shock = HRS → terlipressin + albumin",
          "others": {
            "B": "ATN shows granular/muddy casts and urine Na >20, usually after a nephrotoxic or ischaemic insult.",
            "C": "Pre-renal failure responds to volume expansion; HRS persists despite adequate filling.",
            "D": "IgA nephropathy presents with haematuria and proteinuria, not bland sediment with low urine sodium."
          }
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
          "rule": "Ascites first-line = sodium restriction + spironolactone (add furosemide if inadequate)",
          "highyield": "Ascites: medical management",
          "hook": "Uncomplicated ascites = salt restriction + spironolactone first; furosemide added if needed",
          "others": {
            "A": "Large-volume paracentesis is for tense or refractory ascites, not first-line in mild ascites.",
            "B": "TIPS is reserved for refractory ascites or recurrent variceal bleed.",
            "C": "Furosemide alone is less effective; spironolactone is the preferred initial diuretic in cirrhosis."
          }
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
          "rule": "Vitamin K corrects PT prolongation from factor II/VII/IX/X deficiency in CLD",
          "highyield": "Chronic liver disease: nutritional and coagulation support",
          "hook": "CLD + prolonged PT = think vitamin K (fat-soluble, factor II/VII/IX/X)",
          "others": {
            "A": "Folic acid treats macrocytic anaemia, not the coagulation defect.",
            "B": "Vitamin B12 deficiency causes macrocytic anaemia and neuropathy, not PT prolongation.",
            "C": "Vitamin C deficiency causes scurvy, not coagulopathy."
          }
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
          "rule": "HCC surveillance in cirrhosis = 6-monthly ultrasound (+AFP)",
          "highyield": "Hepatocellular carcinoma: surveillance",
          "hook": "Cirrhosis = HCC surveillance with 6-monthly US (+AFP); CT/MRI only to characterise a lesion",
          "others": {
            "A": "Annual CT is not the surveillance standard and CT is a diagnostic, not screening, tool.",
            "B": "MRI is diagnostic (not screening) and too costly for routine surveillance.",
            "D": "The standard interval is 6-monthly, not annual; AFP may be added."
          }
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
          "rule": "Budd-Chiari = hepatic vein outflow obstruction → ascites + hepatomegaly → anticoagulate",
          "highyield": "Vascular liver disease: Budd-Chiari",
          "hook": "Ascites + hepatomegaly + hepatic vein thrombosis = Budd-Chiari → anticoagulation",
          "others": {
            "A": "Portal vein thrombosis affects the portal vein, not hepatic veins, and classically follows cirrhosis or abdominal sepsis.",
            "C": "Alcoholic cirrhosis is chronic and painless hepatomegaly with stigmata of chronic liver disease, not acute hepatic vein thrombosis.",
            "D": "Right heart failure causes congestive hepatopathy but not isolated hepatic vein thrombosis on Doppler."
          }
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
          "rule": "Severe alcoholic hepatitis (Maddrey >32) → prednisolone; screen for infection/bleed first",
          "highyield": "Alcoholic hepatitis: severity and treatment",
          "hook": "Alcoholic hepatitis + Maddrey >32 = prednisolone (after excluding infection/bleed)",
          "others": {
            "A": "Pentoxifylline is not recommended; it does not reduce mortality.",
            "B": "Severe alcoholic hepatitis (DF >32) warrants treatment, not observation.",
            "C": "Transplant requires a period of abstinence and is not the immediate step."
          }
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
          "rule": "Hepatitis A = most common acute viral hepatitis in children, fecal-oral, no carrier state",
          "highyield": "Viral hepatitis: epidemiology",
          "hook": "Acute hepatitis in a child = Hep A (fecal-oral, self-limited, no chronicity)",
          "others": {
            "A": "Hepatitis B is less common in children and is blood/vertical transmission.",
            "C": "Hepatitis C is blood-borne and uncommon in children.",
            "D": "Hepatitis D requires co-infection with hepatitis B and is rare."
          }
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
          "rule": "Hep B vertical: HBIG + first vaccine dose within 12-24h of birth",
          "highyield": "Viral hepatitis: vertical transmission",
          "hook": "HBsAg+ mother = HBIG + vaccine within 12-24h of birth (breastfeeding is safe)",
          "others": {
            "B": "Breastfeeding is not contraindicated once the infant receives HBIG and vaccine.",
            "C": "Caesarean delivery does not reduce HBV transmission.",
            "D": "Delaying vaccination increases the risk of perinatal infection."
          }
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
          "rule": "Chronic HBV = HBsAg+ (>6mo), anti-HBc IgG+, anti-HBs−",
          "highyield": "Hepatitis B: serology interpretation",
          "hook": "HBsAg+ anti-HBc+ anti-HBs− = chronic; anti-HBs only = vaccinated; anti-HBs+ HBsAg− = resolved",
          "others": {
            "A": "Vaccination produces anti-HBs alone (no HBsAg or anti-HBc).",
            "B": "Acute infection shows anti-HBc IgM positive, not IgG, with HBsAg.",
            "D": "Resolved infection is HBsAg negative with anti-HBs and anti-HBc IgG positive."
          }
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
          "rule": "Hepatitis E = fulminant hepatitis in pregnancy (3rd trimester), high mortality",
          "highyield": "Viral hepatitis: hepatitis E",
          "hook": "Pregnant + acute hepatitis + travel = Hep E (fulminant, high mortality in 3rd trimester)",
          "others": {
            "B": "Hepatitis A is self-limited and does not show the pregnancy-specific fulminant course of hepatitis E.",
            "C": "Hepatitis B is blood-borne and not the classic pregnancy-associated fulminant virus.",
            "D": "Hepatitis C is blood-borne and rarely fulminant acutely."
          }
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
          "rule": "Paracetamol hepatotoxicity → N-acetylcysteine (glutathione repletion)",
          "highyield": "Acute liver failure: paracetamol toxicity",
          "hook": "Paracetamol OD = N-acetylcysteine (not charcoal after the first hour)",
          "others": {
            "A": "Flumazenil is the benzodiazepine antidote, not for paracetamol.",
            "B": "Vitamin K does not reverse paracetamol-induced hepatocyte necrosis.",
            "D": "Activated charcoal is only useful within ~1 hour of ingestion; at 24h the antidote is needed."
          }
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
          "rule": "Hemochromatosis = transferrin saturation >45% + iron overload → phlebotomy",
          "highyield": "Iron overload: hemochromatosis",
          "hook": "Diabetes + bronze skin + transferrin sat >45% = hemochromatosis → phlebotomy",
          "others": {
            "A": "Iron supplementation would worsen iron overload — contraindicated.",
            "C": "Deferoxamine (chelation) is used when phlebotomy is not tolerated (e.g. anaemia), not first-line here.",
            "D": "Corticosteroids do not treat iron overload."
          }
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
          "rule": "Wilson = KF rings + low ceruloplasmin → copper chelation (penicillamine/trientine)",
          "highyield": "Wilson disease: diagnosis and treatment",
          "hook": "Adolescent + KF rings + low ceruloplasmin = Wilson → penicillamine (chelate copper)",
          "others": {
            "A": "Deferoxamine chelates iron (haemochromatosis), not copper.",
            "B": "A gluten-free diet treats coeliac disease, not Wilson disease.",
            "D": "Cholestyramine binds bile acids (pruritus), not copper."
          }
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
          "rule": "Alpha-1 antitrypsin deficiency = basal emphysema + PAS+ diastase-resistant hepatic globules",
          "highyield": "Inherited liver disease: alpha-1 antitrypsin",
          "hook": "Non-smoker + basal emphysema + PAS+ globules = alpha-1 antitrypsin deficiency",
          "others": {
            "A": "Smoking-related emphysema is apical and occurs in smokers, without the hepatic globules.",
            "B": "Cystic fibrosis causes bronchiectasis and pancreatic insufficiency, not basal emphysema with hepatic globules.",
            "C": "NAFLD shows steatosis (fat), not PAS-positive diastase-resistant globules."
          }
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
          "rule": "Gilbert = isolated unconjugated hyperbilirubinemia with normal Hb/reticulocytes/LFTs",
          "highyield": "Hyperbilirubinemia: Gilbert syndrome",
          "hook": "Isolated unconjugated bili + normal everything else = Gilbert (reassure, no treatment)",
          "others": {
            "A": "Haemolysis would show anaemia and raised reticulocytes, which are normal here.",
            "C": "Dubin-Johnson causes conjugated hyperbilirubinemia, not unconjugated.",
            "D": "Obstructive jaundice raises conjugated bilirubin and alkaline phosphatase."
          }
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
          "rule": "PBC = pruritus + raised ALP + AMA+ → ursodeoxycholic acid",
          "highyield": "Cholestatic liver disease: primary biliary cholangitis",
          "hook": "Middle-aged woman + cholestatic LFTs + AMA = PBC → UDCA (not steroids)",
          "others": {
            "B": "Prednisolone treats autoimmune hepatitis, not first-line for PBC.",
            "C": "Penicillamine chelates copper in Wilson disease.",
            "D": "Cholecystectomy treats gallstones, not PBC."
          }
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
          "rule": "Autoimmune hepatitis = young woman + hepatocellular pattern + anti-SMA → corticosteroids",
          "highyield": "Autoimmune hepatitis",
          "hook": "Young woman + high AST/ALT + IgG + anti-SMA = autoimmune hepatitis → steroids",
          "others": {
            "A": "Ursodeoxycholic acid treats PBC/PSC, not autoimmune hepatitis.",
            "B": "Interferon is used in chronic hepatitis B/C, not AIH.",
            "D": "Alcohol abstinence does not treat autoimmune hepatitis."
          }
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
          "rule": "Chronic pancreatitis steatorrhoea = lipase deficiency (fat maldigestion appears first)",
          "highyield": "Chronic pancreatitis: exocrine insufficiency",
          "hook": "Steatorrhoea = fat = lipase deficiency (fat maldigestion appears first)",
          "others": {
            "B": "Amylase digests starch; its deficiency causes carbohydrate maldigestion, not primarily steatorrhoea.",
            "C": "Trypsin digests protein; deficiency causes creatorrhoea, not steatorrhoea.",
            "D": "Chymotrypsin also digests protein, not fat."
          }
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
          "rule": "Pseudocyst = walled-off collection 4-6 weeks after pancreatitis; drain only if symptomatic/large",
          "highyield": "Pancreatitis complications: pseudocyst",
          "hook": "Epigastric mass weeks after pancreatitis = pseudocyst (4-6 weeks to mature)",
          "others": {
            "B": "A pancreatic abscess is infected (fever, leukocytosis), not a bland 6-week collection.",
            "C": "Adenocarcinoma is a solid progressive mass, not a post-pancreatitis cyst.",
            "D": "Pancreatic ascites is free peritoneal fluid, not a discrete epigastric mass."
          }
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
          "rule": "Courvoisier's law: painless jaundice + palpable GB = malignant obstruction",
          "highyield": "Obstructive jaundice: Courvoisier's law",
          "hook": "Painless jaundice + palpable GB = pancreatic head cancer (Courvoisier); painful = stones",
          "others": {
            "A": "Choledocholithiasis causes painful jaundice with a non-distensible (not palpable) gallbladder.",
            "B": "Acute cholecystitis presents with pain, fever, and a positive Murphy's sign, not painless jaundice.",
            "C": "Hepatocellular carcinoma does not classically cause a palpable gallbladder with painless jaundice."
          }
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
          "rule": "Amoebic liver abscess: metronidazole ± aspiration (if >5cm or threatening rupture)",
          "highyield": "Liver abscess: amoebic vs pyogenic",
          "hook": "Large liver abscess (>5cm) = metronidazole + aspiration; laparotomy only if ruptured",
          "others": {
            "A": "Laparotomy is reserved for rupture or failed aspiration, not first-line for an uncomplicated abscess.",
            "C": "Antibiotics alone are inadequate for a large abscess — it needs drainage.",
            "D": "Cholecystectomy treats gallbladder disease, not a liver abscess."
          }
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
          "rule": "Cholestatic = ALP/GGT predominant; hepatocellular = AST/ALT predominant",
          "highyield": "Interpretation of liver function tests",
          "hook": "ALP↑ with normal AST/ALT = cholestatic → think stones/PBC; AST/ALT↑ = hepatocellular",
          "others": {
            "B": "A hepatocellular pattern would show markedly raised AST/ALT, which are near-normal here.",
            "C": "Isolated unconjugated hyperbilirubinemia is a bilirubin (not enzyme) finding.",
            "D": "An ALP of 900 U/L is grossly abnormal, not normal."
          }
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
          "rule": "PSC = UC association + multifocal beaded bile duct strictures (ALP raised, AMA negative)",
          "highyield": "Cholestatic liver disease: primary sclerosing cholangitis",
          "hook": "UC + ALP + beaded strictures = PSC (cholangiocarcinoma risk); PBC has AMA+, no strictures",
          "others": {
            "A": "Primary biliary cholangitis is AMA-positive, occurs in middle-aged women, and lacks bile duct strictures.",
            "C": "Choledocholithiasis causes stones with dilatation, not multifocal beaded strictures.",
            "D": "Autoimmune hepatitis shows a hepatocellular pattern with anti-SMA, not cholestatic strictures."
          }
        }
      }
    ]
  },
  {
    "id": "neuro",
    "name": "Subarachnoid Haemorrhage — LP for Xanthochromia",
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
          "rule": "Any thunderclap headache; if CT is negative, do an LP looking for xanthochromia before excluding SAH.",
          "highyield": "Stroke / Intracranial haemorrhage",
          "hook": "SAH can have a normal CT, particularly if scanned early or the bleed is small — a thunderclap headache demands LP for xanthochromia (bilirubin from in-vivo RBC lysis, present from ~12 h)",
          "others": {
            "B": "discharge is unsafe — a normal CT does not rule out SAH and rebleed risk is high",
            "C": "MRI is not the urgent next step; LP is the diagnostic test for xanthochromia (bilirubin) after a negative CT",
            "D": "nimodipine is given after SAH is confirmed to prevent vasospasm, not as a diagnostic/empiric step before LP"
          }
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
          "rule": "In a young woman with headache+papilloedema+seizure on OCP/postpartum and a haemorrhagic infarct, suspect CVST; anticoagulate after excluding haemorrhage.",
          "highyield": "Stroke / Coagulopathy",
          "hook": "A haemorrhagic infarct that crosses vascular borders / veins + young woman on OCP or postpartum = CVST until proven otherwise",
          "others": {
            "B": "SAH is thunderclap with blood in subarachnoid spaces, not a venous territorial haemorrhagic infarct with papilloedema",
            "C": "hypertensive ICH is typically basal ganglia without the OCP/postpartum prothrombotic context or papilloedema",
            "D": "a tumour with haemorrhagic degeneration would show a mass lesion, not a venous-territory haemorrhagic infarct"
          }
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
          "rule": "Aphasia + contralateral hemiparesis/hemisensory/hemianopia = dominant (left) MCA occlusion; the side is named by the SPEECH, not the weak limb.",
          "highyield": "Stroke / Vascular neurology",
          "hook": "Right-sided weakness = LEFT hemisphere lesion; the presence of aphasia specifically points to the dominant (left) MCA",
          "others": {
            "A": "right MCA would cause left-sided weakness and is usually non-dominant (no aphasia)",
            "B": "basilar occlusion causes bilateral signs, coma or locked-in, not unilateral hemiparesis with aphasia",
            "C": "PCA causes visual field defect and visual agnosia but not the dense motor/aphasic syndrome"
          }
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
          "rule": "Absence of cortical signs (aphasia/neglect/hemianopia) with a pure motor or sensory deficit = lacunar small-vessel infarct, not large-artery or embolic.",
          "highyield": "Stroke / Vascular neurology",
          "hook": "Pure motor hemiparesis with NO cortical signs = lacunar (small-vessel) infarct, even though the motor deficit is dense",
          "others": {
            "B": "large-artery atherothrombosis causes cortical syndromes or watershed, not an isolated pure motor lacunar pattern",
            "C": "cardioembolic strokes are typically cortical and sudden with multiple territories, not a single deep pure-motor lacune",
            "D": "watershed infarcts occur between ACA/MCA/PCA territories in hypoperfusion, giving proximal-arm/proximal-leg weakness, not this pattern"
          }
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
          "rule": "Before IV tPA, BP must be SBP ≤185 and DBP ≤110; lower gently with labetalol/nicardipine if needed, and do not over-lower to normotensive range.",
          "highyield": "Stroke / Acute stroke management",
          "hook": "The gateway to thrombolysis: BP must be ≤185/110 before and ≤180/105 during/after; never treat BP to normotensive levels acutely",
          "others": {
            "A": "giving tPA with SBP 190/115 risks symptomatic intracranial haemorrhage; BP must be controlled first",
            "B": "aggressively lowering BP to <120/80 is harmful (loss of cerebral autoregulation/perfusion) — only lower to ≤185/110",
            "D": "if BP is lowered to threshold within the window thrombolysis can proceed; it is not an absolute permanent contraindication"
          }
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
          "rule": "Cerebellar haemorrhage with hydrocephalus, mass effect or reduced consciousness needs urgent posterior fossa decompression; do not delay with observation.",
          "highyield": "Stroke / Intracranial haemorrhage",
          "hook": "Cerebellar haemorrhage + hydrocephalus/decreasing GCS = operative emergency, not a wait-and-see lesion",
          "others": {
            "A": "observation risks rapid brainstem compression/herniation once hydrocephalus or drowsiness appears",
            "B": "thrombolysis is for ischaemic stroke and is absolutely contraindicated in haemorrhage",
            "D": "steroids do not relieve acute posterior fossa mass effect from haemorrhage and delay definitive surgery"
          }
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
          "rule": "Preserved conscious awareness with only vertical eye movement = locked-in syndrome (ventral pons), NOT vegetative state, coma or brain death.",
          "highyield": "Coma / Altered consciousness",
          "hook": "Voluntary vertical eye movement and preserved awareness distinguish locked-in from vegetative state and from coma",
          "others": {
            "A": "vegetative state has no awareness — the patient here responds meaningfully to command with vertical gaze",
            "B": "brain death requires absent brainstem reflexes including no eye movement; here vertical eye movement is intact",
            "C": "bilateral hemispheric coma would not have intact voluntary vertical eye movements and awareness"
          }
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
          "rule": "Brainstem death requires: no reversible cause, deep coma, absent ALL brainstem reflexes, and a positive apnoea test.",
          "highyield": "Coma / Brain death",
          "hook": "Brainstem death = loss of all brainstem reflexes AND apnoea, with a known cause and no confounders",
          "others": {
            "A": "preserved pupillary response and spontaneous breathing means brainstem function is intact — excludes brain death",
            "C": "vegetative state retains brainstem reflexes and breathing — does NOT equate to brain death",
            "D": "decerebrate posturing implies preserved brainstem pathways — incompatible with brainstem death"
          }
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
          "rule": "After benzodiazepine failure in status epilepticus, use levetiracetam when hepatic impairment exists; phenytoin/fosphenytoin and valproate are less ideal in cirrhosis.",
          "highyield": "Epilepsy / Seizure emergencies",
          "hook": "In liver disease choose levetiracetam (minimal hepatic metabolism) over phenytoin and valproate",
          "others": {
            "A": "phenytoin is hepatically metabolised and protein-bound — less preferred in cirrhosis",
            "B": "fosphenytoin is a phenytoin prodrug, still hepatically handled and protein-bound — not the best hepatic-impa irment choice",
            "C": "valproate is hepatically metabolised and can worsen hepatic dysfunction — avoid in cirrhosis"
          }
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
          "rule": "Start an AED after a first unprovoked seizure when recurrence risk is high — epileptiform EEG, abnormal neurologic exam, structural lesion, or remote symptomatic cause.",
          "highyield": "Epilepsy / First seizure",
          "hook": "Deciding on AED after a first seizure hinges on recurrence-risk markers: epileptiform EEG, abnormal exam, structural lesion",
          "others": {
            "B": "a single unprovoked seizure with normal MRI/low-risk features may not require lifelong AED — not the strongest indication",
            "C": "a normal EEG reduces recurrence risk and does not by itself justify treatment",
            "D": "absence of provoking factors alone does not mandate treatment without high-risk markers"
          }
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
          "rule": "JME (myoclonic jerks on awakening, often photosensitive) is valproate-responsive, but in a female of reproductive age use lamotrigine/levetiracetam first-line.",
          "highyield": "Epilepsy / Seizure disorders",
          "hook": "JME responds to valproate but in women of reproductive age choose lamotrigine/levetiracetam to avoid teratogenicity",
          "others": {
            "A": "valproate is effective but teratogenic — avoid as first-line in a female of reproductive age",
            "B": "ethosuximide is specific for typical absence seizures, not JME with myoclonic+generalised seizures",
            "D": "carbamazepine can WORSEN myoclonic and absence seizures — not appropriate for JME"
          }
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
          "rule": "Brief staring with 3 Hz spike-and-wave = typical absence; ethosuximide is first-line (carbamazepine can worsen it).",
          "highyield": "Epilepsy / Absence seizures",
          "hook": "3 Hz spike-wave absence + brief staring = ethosuximide first-line; avoid carbamazepine/phenytoin",
          "others": {
            "B": "carbamazepine can exacerbate absence and myoclonic seizures — inappropriate first-line",
            "C": "phenytoin is ineffective for typical absence and may worsen it",
            "D": "phenobarbital is not first-line for absence and is less effective with more adverse effects"
          }
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
          "rule": "Rapid full recovery without post-ictal confusion favours syncope; prolonged confusion, lateral tongue-biting and true automatisms favour seizure.",
          "highyield": "Epilepsy / Differential diagnosis",
          "hook": "Absence of post-ictal confusion + rapid recovery = syncope; lateral tongue bite + prolonged confusion = seizure",
          "others": {
            "B": "lateral tongue biting is a strong seizure marker — argues AGAINST syncope",
            "C": "prolonged post-ictal confusion/drowsiness is characteristic of a seizure, not syncope",
            "D": "urinary incontinence can occur in both syncope and seizure and does not discriminate"
          }
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
          "rule": "Acute cluster attacks are treated with high-flow oxygen and subcutaneous sumatriptan; sufferers are restless, unlike the migraineur who lies still.",
          "highyield": "Headache / Trigeminal autonomic cephalalgias",
          "hook": "Restlessness + strict unilaterality + autonomic signs = cluster; acute Rx = high-flow O2 + SC sumatriptan",
          "others": {
            "A": "cluster patients are restless and analgesics/rest are ineffective — this is migraine behaviour, not cluster",
            "C": "propranolol is a migraine prophylactic and of no use for an acute cluster attack",
            "D": "carbamazepine treats trigeminal neuralgia, not cluster headache"
          }
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
          "rule": "Daily headache with acute analgesic/abortive use >10–15 days/month is medication-overuse headache; management is withdrawal of the overused drug plus prevention.",
          "highyield": "Headache / Chronic daily headache",
          "hook": "Daily headache + high abortive/analgesic frequency = medication-overuse headache; treat by withdrawal and education",
          "others": {
            "A": "starts preventives but does not address the overuse — withdrawal of the culprit drug is the essential first step",
            "B": "no red flags (progressive strict unilaterality, weight loss, fever) are present to mandate urgent neuroimaging",
            "C": "increasing analgesic frequency is the opposite of the correct management and will worsen the cycle"
          }
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
          "rule": "New headache in the elderly + jaw claudication + high ESR = GCA: start high-dose steroids immediately to prevent blindness; biopsy is confirmatory and need not delay treatment.",
          "highyield": "Headache / Vasculitis",
          "hook": "Treat GCA with urgent corticosteroids because of imminent irreversible visual loss — biopsy can follow",
          "others": {
            "A": "waiting for the biopsy result would delay treatment several days and risks irreversible blindness in GCA",
            "C": "analgesics risk permanent visual loss in a patient with classic GCA and a markedly raised ESR",
            "D": "scalp tenderness and jaw claudication with raised ESR are GCA, not cellulitis"
          }
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
          "rule": "For migraine prophylaxis in a reproductive-age woman, avoid sodium valproate (teratogenic); prefer propranolol, amitriptyline or topiramate.",
          "highyield": "Headache / Migraine",
          "hook": "In a woman of reproductive age, valproate is the LEAST appropriate migraine prophylactic due to teratogenicity",
          "others": {
            "A": "propranolol is a well-tolerated migraine prophylactic and appropriate here",
            "B": "amitriptyline is an appropriate non-teratogenic prophylactic",
            "C": "topiramate is appropriate (though avoid in pregnancy for different reasons; of the four, valproate is clearly least appropriate here)"
          }
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
          "rule": "Paroxysmal lancinating facial pain with trigger zones and normal sensation = trigeminal neuralgia; first-line is carbamazepine.",
          "highyield": "Headache / Facial pain",
          "hook": "Trigeminal neuralgia = carbamazepine first-line; do not confuse with tension or atypical facial pain",
          "others": {
            "A": "NSAIDs are ineffective against paroxysmal lancinating trigeminal neuralgia and are not first-line",
            "C": "amitriptyline is for neuropathic pain/NB-like pain and not first-line for trigeminal neuralgia lancinating attacks",
            "D": "phenytoin is not first-line for trigeminal neuralgia, though sometimes used adjunctively"
          }
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
          "rule": "Whole-face peripheral facial palsy (forehead involved) = Bell's: oral corticosteroids within 72 h + eye protection (no routine antivirals unless definite herpes).",
          "highyield": "Peripheral facial nerve palsy",
          "hook": "Forehead involvement = peripheral (Bell's) not central; give steroids within 72 h and protect the eye",
          "others": {
            "A": "no acute ischaemic stroke features/thrombolysis indication here — weakness is peripheral and whole-face",
            "C": "no seizure activity to treat",
            "D": "withholding steroids leaves a worse outcome; corticosteroids should be started within 72 h"
          }
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
          "rule": "Central (UMN) facial palsy spares the forehead; peripheral (LMN/Bell's) palsy weakens whole face including forehead.",
          "highyield": "Facial nerve palsy / Localisation",
          "hook": "Forehead SPARING = central (UMN); whole-face including forehead = peripheral (LMN)",
          "others": {
            "A": "opposite; a central lesion spares (not loses) forehead movement",
            "B": "loss of taste occurs in proximal peripheral (chorda tympani) involvement, not central palsies",
            "C": "opposite; peripheral palsy weakens the whole face including forehead"
          }
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
          "rule": "Asynchronous movements, closed eyes, ictal crying, and normal post-ictal lactate/awareness suggest PNES; confirm with video-EEG rather than treating as epilepsy.",
          "highyield": "Epilepsy / Differential diagnosis",
          "hook": "Eyes closed + pelvic thrusting + ictal crying + normal lactate + no post-ictal confusion = PNES",
          "others": {
            "A": "a genuine generalised seizure would raise lactate, show post-ictal confusion and not have this pattern",
            "B": "focal impaired-awareness seizure has automatisms and a post-ictal phase, not ictal crying with normal lactate",
            "D": "absence seizures are brief staring without motor thrashing or ictal crying"
          }
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
          "rule": "An extra-axial, dural-based enhancing mass with psammoma bodies is a meningioma (benign); headaches and seizures are classic presentations.",
          "highyield": "Intracranial tumour / Neuro-oncology",
          "hook": "Dural-based, extra-axial, psammoma-containing mass = meningioma (most common benign primary intracranial tumour)",
          "others": {
            "A": "glioblastoma is intra-axial, poorly marginated, necrotic and diffusely infiltrating — not dural-based with psammoma bodies",
            "C": "metastatic carcinoma is intra-axial and multiple, without a dural-based psammoma pattern",
            "D": "schwannoma arises from the nerve sheath (e.g. vestibulocochlear), not the dura, and is CPA-based rather than a dural convexity mass"
          }
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
          "rule": "Lateral medullary (PICA) infarct: ipsilateral Horner, ataxia, face pain/temp loss + contralateral body pain/temp loss — localise to the side of the Horner/face signs.",
          "highyield": "Stroke / Brainstem localisation",
          "hook": "Venigo + ipsilateral Horner + ipsilateral ataxia + ipsilateral face & contralateral body pain/temp loss = Wallenberg; lesion is on the Horner/face side",
          "others": {
            "A": "pain/temp loss on the right face + left body means the lesion is on the RIGHT side; left would give left face + right body",
            "B": "medial midbrain (Weber) causes CN III palsy + contralateral hemiparesis, not this crossed sensory/Horner pattern",
            "D": "cerebellar haemorrhage gives acute ataxia and may compress, but not the classic crossed sensory loss and Horner that define Wallenberg"
          }
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
          "rule": "In pregnancy continue the least teratogenic AED (e.g. levetiracetam/lamotrigine) with folic acid; avoid valproate because of major teratogenicity.",
          "highyield": "Epilepsy / Pregnancy",
          "hook": "Seizures in pregnancy are dangerous; continue the safest AED + folic acid, never start/switch to valproate",
          "others": {
            "A": "stopping AEDs risks uncontrolled seizures that endanger both mother and fetus",
            "B": "valproate is highly teratogenic (neural-tube defects, cognitive effects) and must be avoided in pregnancy",
            "D": "withholding therapy until a seizure occurs is unsafe because a first seizure in pregnancy carries significant risk"
          }
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
          "rule": "Benzodiazepine + second-line failure defines refractory status epilepticus: use IV anaesthetic infusion (propofol/midazolam/barbiturate) with continuous EEG monitoring in ICU.",
          "highyield": "Epilepsy / Status epilepticus",
          "hook": "Refractory SE (benzo + second-line failure) = IV anaesthetic infusion + continuous EEG in ICU",
          "others": {
            "B": "further oral drugs cannot control refractory electrographic seizures and escalation to anaesthesia/ICU is required",
            "C": "stopping treatment is dangerous — ongoing electrographic seizures cause neuronal injury",
            "D": "aspirin has no role in status epilepticus and would not address ongoing seizure activity"
          }
        }
      }
    ]
  },
  {
    "id": "nutrition-malabsorption",
    "name": "Malabsorption Syndromes",
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
          "rule": "D-xylose low = mucosal disease; normal D-xylose + steatorrhoea = pancreatic insufficiency",
          "highyield": "Malabsorption: diagnostic approach",
          "hook": "Steatorrhoea: low D-xylose = mucosal; normal D-xylose + low faecal elastase = pancreatic",
          "others": {
            "A": "Serum lipase reflects pancreatic inflammation, not mucosal vs pancreatic malabsorption.",
            "B": "Normal D-xylose with low faecal elastase points TO pancreatic insufficiency, not away from it.",
            "D": "The faecal osmotic gap distinguishes osmotic vs secretory diarrhoea, not the site of malabsorption."
          }
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
          "rule": "Faecal osmotic gap = 290 − 2(Na+K); >50 osmotic, <50 secretory",
          "highyield": "Diarrhoea: osmotic vs secretory",
          "hook": "Osmotic gap >50 = osmotic (lactose/laxatives); <50 = secretory (cholera/VIPoma)",
          "others": {
            "B": "Secretory diarrhoea has an osmotic gap <50 mmol/L.",
            "C": "Inflammatory diarrhoea shows blood/leukocytes, not a high osmotic gap.",
            "D": "Fatty diarrhoea (steatorrhoea) is defined by faecal fat, not the osmotic gap."
          }
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
          "rule": "Whipple = arthralgia + diarrhoea + PAS+ macrophages → prolonged antibiotics",
          "highyield": "Malabsorption: Whipple disease",
          "hook": "Arthralgia + diarrhoea + PAS+ macrophages = Whipple → prolonged antibiotics (1 year)",
          "others": {
            "A": "A 7-day metronidazole course is inadequate — Whipple requires prolonged therapy to prevent relapse.",
            "B": "Glucocorticoids do not treat the infection.",
            "C": "A gluten-free diet treats coeliac disease, not Whipple disease."
          }
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
          "rule": "Blind loop → bacterial overgrowth → bile salt deconjugation (steatorrhoea) + B12 deficiency",
          "highyield": "Malabsorption: bacterial overgrowth",
          "hook": "Post-surgical stasis + steatorrhoea + macrocytic anaemia = bacterial overgrowth (blind loop)",
          "others": {
            "A": "Coeliac is not related to gastric surgery and typically causes iron deficiency, not B12 deficiency.",
            "C": "Chronic pancreatitis causes steatorrhoea but not macrocytic B12 deficiency.",
            "D": "Whipple disease is not classically associated with prior gastric surgery."
          }
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
          "rule": "Lactose intolerance → hydrogen breath test; treat with lactose avoidance/lactase",
          "highyield": "Malabsorption: lactose intolerance",
          "hook": "Dairy → bloating/diarrhoea = lactose intolerance → H2 breath test (not anti-tTG)",
          "others": {
            "A": "Anti-tTG is for coeliac disease; lactose intolerance does not involve autoantibodies.",
            "B": "Stool culture is for infectious diarrhoea, not lactose intolerance.",
            "D": "Colonoscopy is unnecessary; lactose intolerance is diagnosed by breath testing."
          }
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
          "rule": "Ileal resection → B12 deficiency + bile salt malabsorption (cholestyramine for diarrhoea)",
          "highyield": "Malabsorption: short bowel / ileal resection",
          "hook": "Terminal ileum resected = B12 + bile salt deficiency; duodenum = iron; jejunum = folate",
          "others": {
            "A": "Iron (duodenum) and folate (jejunum) are absorbed proximally, not in the ileum.",
            "C": "Vitamin C and zinc are not ileum-specific.",
            "D": "Vitamin D and calcium absorption are not primarily ileal."
          }
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
          "rule": "Early dumping = fluid shift (10-30 min); late dumping = reactive hypoglycaemia (1-3h)",
          "highyield": "Post-gastrectomy: dumping syndrome",
          "hook": "Dumping within 30 min = fluid shift; 1-3h = reactive hypoglycaemia",
          "others": {
            "B": "Rapid fluid shift causes EARLY dumping (10-30 min), not late.",
            "C": "Delayed gastric emptying would not cause post-prandial hypoglycaemia.",
            "D": "Bile salt malabsorption causes diarrhoea, not post-prandial hypoglycaemia."
          }
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
          "rule": "Pernicious anaemia → lifelong IM B12 (parenteral), not oral folate",
          "highyield": "Vitamin B12 deficiency: treatment",
          "hook": "Pernicious anaemia = IM B12 lifelong (intrinsic factor gone, oral won't work)",
          "others": {
            "A": "Oral B12 relies on intrinsic factor-mediated absorption, which is absent in pernicious anaemia.",
            "C": "Iron treats iron deficiency anaemia, not B12 deficiency.",
            "D": "Folate does not treat B12 deficiency and may worsen neurological damage if given alone."
          }
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
          "rule": "Dermatitis herpetiformis → dapsone (skin) + gluten-free diet (disease)",
          "highyield": "Coeliac disease: dermatitis herpetiformis",
          "hook": "Pruritic elbow/knee vesicles + coeliac = dermatitis herpetiformis → dapsone + gluten-free",
          "others": {
            "A": "Prednisolone is not first-line for dermatitis herpetiformis; dapsone is.",
            "B": "Antihistamines relieve pruritus but do not clear the lesions.",
            "C": "Methotrexate is not the treatment for dermatitis herpetiformis."
          }
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
          "rule": "Tropical sprue → tetracycline + folate (responds to antibiotics, unlike coeliac)",
          "highyield": "Malabsorption: tropical sprue",
          "hook": "Travel + chronic diarrhoea + megaloblastic anaemia = tropical sprue → tetracycline + folate",
          "others": {
            "A": "A gluten-free diet treats coeliac disease, not tropical sprue.",
            "B": "Ciprofloxacin alone without folate does not fully correct the deficiencies.",
            "D": "B12 injection alone is incomplete; folate and tetracycline are needed."
          }
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
          "rule": "Post-gastrectomy microcytic anaemia = iron deficiency; macrocytic = B12 deficiency",
          "highyield": "Post-gastrectomy: nutritional deficiencies",
          "hook": "Post-gastrectomy anaemia: microcytic = iron; macrocytic = B12",
          "others": {
            "B": "B12 deficiency causes macrocytic anaemia with hypersegmented neutrophils.",
            "C": "Folate deficiency also causes macrocytic anaemia.",
            "D": "Haemolysis would show reticulocytosis and raised bilirubin, not a microcytic film."
          }
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
          "rule": "IgA deficiency → false-negative anti-tTG IgA → check total IgA, use IgG serology",
          "highyield": "Coeliac disease: serology pitfalls",
          "hook": "Negative anti-tTG but still suspicious = check total IgA (then IgG-based tests + biopsy)",
          "others": {
            "A": "Anti-gliadin antibody is outdated and less specific than anti-tTG.",
            "B": "Vitamin B12 does not explain a negative anti-tTG.",
            "C": "Faecal elastase tests pancreatic function, not coeliac serology."
          }
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
          "rule": "Zinc deficiency = periorificial/acral rash + diarrhoea + failure to thrive → zinc supplementation",
          "highyield": "Micronutrient deficiency: zinc",
          "hook": "Periorificial rash + diarrhoea + failure to thrive = zinc deficiency (acrodermatitis enteropathica)",
          "others": {
            "A": "Iron deficiency causes pallor and microcytic anaemia, not periorificial dermatitis.",
            "B": "Vitamin A deficiency causes night blindness and xerophthalmia, not periorificial rash.",
            "C": "Vitamin D deficiency causes rickets (bony changes), not dermatitis."
          }
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
          "rule": "Iodine deficiency → goitre + cretinism (congenital hypothyroidism), preventable with iodised salt",
          "highyield": "Micronutrient deficiency: iodine",
          "hook": "Iodine deficiency = goitre + cretinism (congenital hypothyroidism)",
          "others": {
            "B": "Rickets is vitamin D/calcium deficiency.",
            "C": "Neural tube defects are folate deficiency.",
            "D": "Scurvy is vitamin C deficiency."
          }
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
          "rule": "Refeeding syndrome = hypophosphataemia (and low K/Mg) after rapid refeeding → slow, monitored refeeding",
          "highyield": "Nutrition support: refeeding syndrome",
          "hook": "Refeeding after starvation → watch phosphate (and K/Mg); refeed slowly",
          "others": {
            "A": "Refeeding causes hypokalaemia (intracellular shift), not hyperkalaemia.",
            "B": "Hypernatraemia is not the classic refeeding disturbance.",
            "C": "Refeeding causes hypomagnesaemia, not hypermagnesaemia."
          }
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
          "rule": "Wernicke (confusion+ataxia+ophthalmoplegia) → IV thiamine before glucose",
          "highyield": "Thiamine deficiency: Wernicke encephalopathy",
          "hook": "Alcoholic + confusion + ataxia + ophthalmoplegia = give thiamine BEFORE glucose",
          "others": {
            "B": "Glucose without thiamine precipitates Wernicke encephalopathy.",
            "C": "Naloxone reverses opioid toxicity, not thiamine deficiency.",
            "D": "Flumazenil reverses benzodiazepines, not thiamine deficiency."
          }
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
          "rule": "Vitamin A deficiency: night blindness → xerophthalmia → keratomalacia → blindness",
          "highyield": "Micronutrient deficiency: vitamin A",
          "hook": "Night blindness + dry eye = vitamin A deficiency → treat urgently (blindness preventable)",
          "others": {
            "B": "Retinal detachment is not the classic vitamin A complication.",
            "C": "Optic neuritis is inflammatory, not nutritional.",
            "D": "Glaucoma is an intraocular pressure disorder, not vitamin A deficiency."
          }
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
          "rule": "Kwashiorkor = protein deficiency → oedema + fatty liver + flaky paint (marasmus = wasting, no oedema)",
          "highyield": "Protein-energy malnutrition: kwashiorkor vs marasmus",
          "hook": "Oedema + flaky paint = kwashiorkor; wasting without oedema = marasmus",
          "others": {
            "A": "Marasmus is total calorie deficiency with severe wasting and no oedema.",
            "C": "Rickets is vitamin D deficiency with bony deformities.",
            "D": "Scurvy is vitamin C deficiency with bleeding gums and perifollicular haemorrhage."
          }
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
          "rule": "Marasmus = total calorie deficiency → severe wasting, no oedema",
          "highyield": "Protein-energy malnutrition: marasmus",
          "hook": "Wasted + no oedema = marasmus; oedema present = kwashiorkor",
          "others": {
            "A": "Kwashiorkor has oedema and a flaky-paint dermatosis.",
            "B": "Refeeding syndrome is a complication of treatment, not a diagnosis.",
            "D": "Anorexia nervosa is a behavioural disorder in older children/adolescents."
          }
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
          "rule": "B12 deficiency → subacute combined degeneration (dorsal columns + corticospinal); folate has no neuro",
          "highyield": "Vitamin B12 deficiency: neurological features",
          "hook": "Vegan + vibration/proprioception loss + brisk reflexes = B12 (subacute combined degeneration)",
          "others": {
            "B": "Folate deficiency causes megaloblastic anaemia without neurological features.",
            "C": "Iron deficiency causes microcytic anaemia and pica, not cord degeneration.",
            "D": "Vitamin E deficiency causes spinocerebellar ataxia, usually with malabsorption."
          }
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
          "rule": "Prealbumin (t½ ~2 days) reflects short-term nutrition; albumin (t½ ~20 days) is confounded by inflammation",
          "highyield": "Nutritional assessment: markers",
          "hook": "Short-term nutrition marker = prealbumin (2-day half-life); albumin lags and falls in inflammation",
          "others": {
            "A": "Albumin has a long half-life and falls with inflammation, not reflecting acute nutritional change.",
            "B": "Ferritin reflects iron stores, not general nutrition.",
            "C": "Transferrin is affected by iron status and has a longer half-life than prealbumin."
          }
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
          "rule": "TPN fever/rigors = catheter-related infection → remove line + blood cultures",
          "highyield": "Nutrition support: TPN complications",
          "hook": "TPN + fever + central line = line sepsis (remove line + cultures)",
          "others": {
            "A": "Refeeding syndrome causes hypophosphataemia/arrhythmia, not fever.",
            "C": "Cholestatic injury presents with jaundice/raised ALP, not fever.",
            "D": "Hyperglycaemia causes osmotic symptoms, not rigors."
          }
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
          "rule": "Enteral > parenteral when GI tract is functional (preserves gut integrity, fewer complications)",
          "highyield": "Nutrition support: enteral vs parenteral",
          "hook": "If the gut works, use it (enteral) — parenteral only when the gut fails",
          "others": {
            "A": "Parenteral nutrition is not more reliable and carries more complications.",
            "C": "Parenteral nutrition does not avoid aspiration and has line-related risks.",
            "D": "Enteral nutrition still requires a tube/access; the reason is gut integrity, not access."
          }
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
          "rule": "Pancreatic steatorrhoea → pancreatic enzyme replacement (lipase) with meals",
          "highyield": "Chronic pancreatitis: management",
          "hook": "Chronic pancreatitis + steatorrhoea = pancreatic enzyme replacement with meals",
          "others": {
            "A": "A low-fat diet alone does not correct the enzyme deficiency.",
            "B": "Ursodeoxycholic acid treats PBC/PSC, not pancreatic insufficiency.",
            "D": "Octreotide suppresses pancreatic secretion and is not treatment for insufficiency."
          }
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
          "rule": "Coeliac unresponsive to gluten-free diet → consider enteropathy-associated T-cell lymphoma",
          "highyield": "Coeliac disease: complications",
          "hook": "Coeliac not improving on strict GFD = refractory → think T-cell lymphoma",
          "others": {
            "A": "Pancreatic adenocarcinoma is not a complication of coeliac disease.",
            "B": "Ulcerative colitis is a separate IBD, not a coeliac complication.",
            "D": "Crohn disease is not caused by coeliac disease."
          }
        }
      }
    ]
  },
  {
    "id": "oncology-genpath",
    "name": "Metaplasia — Barrett's Oesophagus",
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
          "rule": "Metaplasia = reversible change of cell type (e.g. Barrett's squamous->columnar); can proceed to dysplasia/carcinoma.",
          "highyield": "General pathology / Cellular adaptation",
          "hook": "Squamous->columnar in the oesophagus with reflux = metaplasia; increases cancer risk",
          "others": {
            "A": "hyperplasia is an increase in cell NUMBER of the same type, not a change in cell type",
            "C": "hypertrophy is an increase in cell SIZE of the same type",
            "D": "atrophy is a decrease in cell/organ size"
          }
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
          "rule": "Permanent cells (muscle) only hypertrophy; labile cells (prostate epithelium) hyperplase. Know which tissue can divide.",
          "highyield": "General pathology / Cellular adaptation",
          "hook": "Uterine muscle = hypertrophy (permanent cells); prostate epithelium = hyperplasia (labile cells)",
          "others": {
            "B": "smooth muscle is a permanent cell that cannot hyperplase; the uterus mostly hypertrophies",
            "C": "the uterus enlarges by hypertrophy, not hyperplasia; there is no metaplasia in the prostate",
            "D": "the prostate enlarges by hyperplasia (proliferation of epithelium), not pure hypertrophy"
          }
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
          "rule": "Anaplasia = lack of differentiation (pleomorphism, hyperchromasia, high N:C ratio) - a hallmark of malignancy.",
          "highyield": "General pathology / Neoplasia",
          "hook": "Pleomorphism + high N:C ratio + hyperchromasia = anaplasia (cancer)",
          "others": {
            "A": "metaplasia is a change in cell type, not a loss of differentiation",
            "C": "dysplasia is a disordered architectural change that is pre-malignant but not full anaplasia",
            "D": "hyperplasia is an increase in cell number of differentiated cells"
          }
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
          "rule": "CIS = full-thickness dysplasia without basement-membrane invasion (e.g. cervical CIN 3). Pre-invasive; excision cures.",
          "highyield": "General pathology / Neoplasia",
          "hook": "Full-thickness atypia confined to epithelium (intact basement membrane) = carcinoma in situ",
          "others": {
            "A": "invasive carcinoma breaches the basement membrane and invades the stroma",
            "C": "metaplasia is a benign cell-type change, not full-thickness nuclear atypia",
            "D": "atrophy is a reduction in cell size/number, not dysplastic change"
          }
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
          "rule": "Coagulative necrosis = ischaemic death in solid organs (MI) preserving architecture with acute inflammation; distinguish from liquefactive/caseous/fat.",
          "highyield": "General pathology / Cell death",
          "hook": "Ischaemia in a solid organ (MI) with preserved architecture + inflammation = coagulative necrosis",
          "others": {
            "A": "apoptosis is programmed single-cell death without inflammation, not sheets of necrotic cells with neutrophils",
            "C": "liquefactive necrosis (turns to pus/slurry) is seen in brain ischaemia and abscesses",
            "D": "caseous necrosis is the cheesy necrosis of tuberculosis"
          }
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
          "rule": "Tumour suppressors (Rb, p53) restrain growth; loss of function promotes cancer. Oncogenes gain function to drive proliferation.",
          "highyield": "General pathology / Molecular oncology",
          "hook": "Hereditary retinoblastoma = Rb tumour suppressor loss (two-hit); gatekeeper loss allows cancer",
          "others": {
            "A": "MYC is an oncogene (gain of function), not the gene causing hereditary retinoblastoma",
            "C": "RAS is an oncogene, not a tumour suppressor; it does not cause retinoblastoma",
            "D": "BCR-ABL is the oncogenic fusion in CML, not the Rb retinoblastoma gene"
          }
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
          "rule": "Oncogenes (HER2/neu, RAS, MYC, BCR-ABL) drive cancer by gain of function; tumour suppressors (Rb, p53) by loss of function.",
          "highyield": "General pathology / Molecular oncology",
          "hook": "HER2/neu amplification = oncogene, gain of function, anti-HER2 (trastuzumab) therapy",
          "others": {
            "B": "Rb is a tumour suppressor, not the HER2 oncogene, and acts by loss of function",
            "C": "BCR-ABL is an oncogenic fusion in CML; the question is about a receptor tyrosine kinase targeted by trastuzumab (HER2)",
            "D": "p53 is a tumour suppressor acting by loss of function, not the HER2 gain-of-function oncogene"
          }
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
          "rule": "TNM = anatomic stage (tumour, node, metastasis); grade = histologic differentiation. Know the distinction for prognosis.",
          "highyield": "General pathology / Neoplasia",
          "hook": "TNM = stage (extent); grade = differentiation. T3 N1 M0 = tumour 3, node +, no metastasis",
          "others": {
            "B": "TNM does not describe histologic differentiation; that is grading",
            "C": "TNM describes tumour depth and nodes, not only metastasis",
            "D": "grading and staging are distinct concepts"
          }
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
          "rule": "AFP = hepatocellular carcinoma; CEA = colorectal; PSA = prostate. Markers are non-specific and corroborate, never replace biopsy.",
          "highyield": "General pathology / Tumour markers",
          "hook": "AFP = hepatocellular carcinoma (also germ-cell); CEA = colorectal; markers support, not diagnose, cancer",
          "others": {
            "B": "AFP is associated with hepatocellular carcinoma, not colorectal cancer (that is CEA)",
            "C": "tumour markers cannot definitively diagnose cancer; tissue diagnosis is required",
            "D": "CEA is the colorectal marker, not the hepatocellular carcinoma marker"
          }
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
          "rule": "Colorectal cancer spreads to liver via the portal vein. Sentinel node = first regional node draining the tumour, used for staging.",
          "highyield": "General pathology / Metastasis",
          "hook": "Bowel cancer -> liver via portal vein; sentinel node = first draining node for staging",
          "others": {
            "B": "colorectal cancer reaches the liver via the portal vein (to liver first), not the pulmonary artery",
            "C": "tumours spread by both lymphatics and blood, not lymph only",
            "D": "a sentinel node is for staging, not debulking the largest deposit"
          }
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
          "rule": "Kaposi sarcoma: HHV-8 vascular tumour in HIV/AIDS (pigmented plaques/nodules); treat with ART (+ local/systemic Tx).",
          "highyield": "Oncology / AIDS-associated tumour",
          "hook": "HIV + HHV-8 + pigmented/bluish skin plaques-nodules = Kaposi sarcoma",
          "others": {
            "A": "melanoma is a melanocytic lesion without the HIV/HHV-8 association and typical bluish vascular nodules",
            "C": "bacillary angiomatosis is a Bartonella skin lesion, usually without the classic HIV-KS plaque evolution",
            "D": "basal cell carcinoma is a pearly telangiectatic nodule, not a pigmented bluish vascular tumour"
          }
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
          "rule": "Spontaneous blood-stained nipple discharge without a lump = intraductal papilloma (benign); exclude ductal carcinoma in situ.",
          "highyield": "Oncology / Breast",
          "hook": "Blood-stained single-duct discharge, no lump = intraductal papilloma",
          "others": {
            "B": "DCIS usually has an associated microcalcification/mass rather than isolated bloody discharge without a lesion",
            "C": "Paget's disease causes an eczematous scaly nipple-areola lesion, not solitary bloody discharge",
            "D": "fibrocystic disease gives lumpiness/cyclical pain, not isolated spontaneous bloody discharge"
          }
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
          "rule": "Medullary thyroid carcinoma: C-cell/calcitonin origin, MEN 2A/2B, diarrhoea; total thyroidectomy, calcitonin marker, RET testing.",
          "highyield": "Oncology / Thyroid",
          "hook": "MEN 2A + thyroid lump + diarrhoea = medullary thyroid carcinoma (C cells, calcitonin)",
          "others": {
            "A": "papillary carcinoma is the most common thyroid cancer but is not MEN 2-associated and does not cause diarrhoea",
            "C": "follicular carcinoma spreads haematogenously to bone but is not the MEN 2 diarrhoea-associated tumour",
            "D": "anaplastic carcinoma is a rapidly fatal undifferentiated tumour of the elderly, unrelated to MEN 2A"
          }
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
          "rule": "Wilms tumour (nephroblastoma): most common intra-abdominal solid organ tumour of childhood; triphasic histology; treat with surgery + chemo.",
          "highyield": "Oncology / Paediatric tumour",
          "hook": "Child + renal mass = Wilms tumour (nephroblastoma); most common childhood intra-abdominal solid organ tumour",
          "others": {
            "B": "neuroblastoma arises in the adrenal/paraspinal ganglia with rosettes and is more common in infants (<2)",
            "C": "rhabdomyosarcoma is a soft-tissue sarcoma, not a kidney mass with bilateral presentation pattern",
            "D": "hepatoblastoma is a liver tumour, not a renal intra-abdominal mass"
          }
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
          "rule": "Phyllodes (cystosarcoma phyllodes): large fibroepithelial tumour with stromal overgrowth; excise with margins (spreads by blood, not lymph).",
          "highyield": "Oncology / Breast",
          "hook": "Large rapidly growing fibroepithelial tumour with stromal overgrowth, no nodes = phyllodes tumour",
          "others": {
            "A": "fibroadenoma is small, well-circumscribed, and does not show pronounced stromal overgrowth or rapid large growth",
            "C": "invasive ductal carcinoma commonly involves nodes and shows epithelial (not prominent stromal) malignancy",
            "D": "Paget's disease affects the nipple-areola skin, not a large stromal breast lump"
          }
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
          "rule": "Mondor's disease = superficial thrombophlebitis of breast/chest wall veins; self-limiting, benign.",
          "highyield": "Oncology / Breast (benign)",
          "hook": "Tender cord-like superficial vein on the breast/chest = Mondor's (thrombophlebitis)",
          "others": {
            "A": "actinomycosis is a chronic suppurative fungal-like infection, not a superficial venous cord",
            "B": "duct ectasia is dilation of ducts, not a visible subcutaneous venous cord",
            "C": "lymphangitis is lymphatic inflammation, typically with red streaks, not a thrombosed vein"
          }
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
          "rule": "Villous adenoma has the highest malignant potential; adenomas progress to carcinoma (adenoma-carcinoma sequence). Hamartomatous/inflammatory polyps are low risk.",
          "highyield": "Oncology / Colorectal",
          "hook": "Villous adenoma = highest malignant potential colorectal polyp (adenoma-carcinoma sequence)",
          "others": {
            "A": "hamartomatous polyps (e.g. Peutz-Jeghers) are low malignant risk",
            "B": "inflammatory pseudopolyps in IBD are not premalignant themselves",
            "C": "tubular adenoma has lower malignant potential than villous adenoma"
          }
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
          "rule": "Meningioma: benign extra-axial meningeal tumour (female predominance) with psammoma bodies; surgical excision.",
          "highyield": "Oncology / CNS tumour",
          "hook": "Extra-axial meningeal tumour + psammoma bodies = meningioma (benign)",
          "others": {
            "B": "metastatic carcinoma is usually intra-axial/multifocal and does not classically show psammoma bodies as the primary pattern",
            "C": "schwannoma arises from nerve sheaths (e.g. acoustic neuroma), not the meninges, and shows Antoni A/B patterns",
            "D": "glioblastoma is a highly malignant intra-axial astrocytoma, not an extra-axial psammoma-body tumour"
          }
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
          "rule": "Small cell lung cancer -> ectopic ACTH (Cushing's/hypokalaemia) and ADH (hyponatraemia). Squamous cell -> PTHrP (hypercalcaemia).",
          "highyield": "Oncology / Lung cancer",
          "hook": "Small cell lung cancer + Cushing's/hypokalaemia = ectopic ACTH; squamous cell -> PTHrP hypercalcaemia",
          "others": {
            "A": "squamous cell carcinoma causes PTHrP hypercalcaemia, not the ACTH-driven Cushing's/hypokalaemia",
            "C": "small cell (not adenocarcinoma) is the classic source of ectopic ACTH here",
            "D": "small cell produces ACTH (and ADH), not primarily PTHrP"
          }
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
          "rule": "Pancreatic head adenocarcinoma: painless obstructive jaundice, Courvoisier sign, weight loss; poor prognosis. CA 19-9 may be raised.",
          "highyield": "Oncology / Pancreatic",
          "hook": "Painless jaundice + Courvoisier (palpable gallbladder) + weight loss = pancreatic head adenocarcinoma",
          "others": {
            "B": "chronic pancreatitis causes pain (not painless jaundice) and lacks a malignant head mass/Courvoisier sign",
            "C": "choledocholithiasis gives painful jaundice and does not produce painless jaundice with a palpable gallbladder",
            "D": "hepatocellular carcinoma is a liver tumour with raised AFP, not a pancreatic head biliary obstruction"
          }
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
          "rule": "HCC: cirrhosis (HBV/HCV/NASH) + markedly raised AFP + vascular liver mass; surveil high-risk patients with ultrasound + AFP.",
          "highyield": "Oncology / Liver",
          "hook": "Cirrhosis/HBV + very high AFP + vascular liver mass = hepatocellular carcinoma",
          "others": {
            "B": "metastatic colorectal cancer raises CEA, not the very high AFP typical of HCC",
            "C": "hepatic adenoma is benign, non-vascular-washout, and does not markedly raise AFP",
            "D": "haemangioma is benign and AFP is normal, unlike the sharply elevated AFP here"
          }
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
          "rule": "IDC = most common invasive breast cancer; ER/PR+ -> endocrine therapy, HER2+ -> trastuzumab. Stromal invasion distinguishes it from DCIS.",
          "highyield": "Oncology / Breast",
          "hook": "Hard fixed ER+ breast lump with stromal invasion = invasive ductal carcinoma; endocrine therapy if ER+",
          "others": {
            "B": "phyllodes tumour is fibroepithelial with stromal (not epithelial duct) overgrowth, not ER+ invasive ductal cancer",
            "C": "ductal carcinoma in situ is non-invasive (confined to ducts without stromal invasion)",
            "D": "fibroadenoma is a benign, mobile, well-circumscribed lump, not a fixed skin-invading carcinoma"
          }
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
          "rule": "Colorectal cancer develops from adenomas via the adenoma-carcinoma sequence (APC, KRAS, p53); colonoscopic polypectomy prevents it.",
          "highyield": "Oncology / Colorectal",
          "hook": "Colorectal cancer from adenomatous polyp = adenoma-carcinoma sequence (APC, KRAS, p53); screening removes polyps",
          "others": {
            "B": "colorectal cancer does not arise directly from normal glands; it progresses through a polyp (adenoma) stage",
            "C": "hamartomas are not the usual precursor of colorectal adenocarcinoma",
            "D": "although some are inherited (FAP/HNPCC), most colorectal cancer is sporadic with stepwise (not single-hit) progression"
          }
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
          "rule": "High-risk HPV E6/E7 inactivate p53 and Rb -> cervical carcinogenesis; screening (cytology/HPV) + vaccination prevent.",
          "highyield": "Oncology / Virus-associated cancer",
          "hook": "HPV (16/18) cervical cancer: E6 inactivates p53, E7 inactivates Rb; vaccination prevents",
          "others": {
            "B": "HPV does not stimulate thyroid growth; this is not the cervical mechanism",
            "C": "HPV does not encode HER2; that is an ERBB2 oncogene in breast cancer",
            "D": "HPV does not directly mutate RAS; it acts via E6/E7 on p53/Rb"
          }
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
          "rule": "Prostate cancer -> osteoblastic bone metastases + raised PSA; new back pain -> exclude spinal cord compression (radiotherapy/ADT).",
          "highyield": "Oncology / Prostate",
          "hook": "Prostate cancer back pain + hot spots + high PSA = osteoblastic metastases; rule out cord compression",
          "others": {
            "B": "prostate bone metastases are osteoblastic (sclerotic), not purely osteolytic, and PSA is raised",
            "C": "bone is a very common site for prostate cancer metastasis",
            "D": "PSA is specific to prostate cancer, not a breast marker"
          }
        }
      }
    ]
  },
  {
    "id": "ophthalmology",
    "name": "Vernal Keratoconjunctivitis",
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
          "rule": "Vernal KC: cobblestone papillae on upper tarsus, seasonal, itching, preserved VA; mast-cell stabilisers/antihistamines + topical steroids for flares.",
          "highyield": "Ophthalmology / External eye",
          "hook": "Giant cobblestone tarsal papillae + seasonal itch + normal VA = vernal keratoconjunctivitis",
          "others": {
            "A": "bacterial keratitis causes a painful corneal ulcer with epithelial defect, not tarsal cobblestone papillae and preserved VA",
            "B": "bacterial conjunctivitis is purulent discharge without giant tarsal papillae or seasonal pattern",
            "C": "viral conjunctivitis is watery with follicular reaction, not giant cobblestone papillae"
          }
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
          "rule": "Tractional RD in PDR needs pars plana vitrectomy; PRP and anti-VEGF are adjuncts, not definitive once detached.",
          "highyield": "Ophthalmology / Retina",
          "hook": "Diabetic tractional RD with haemorrhage/fibrosis = vitrectomy; laser/anti-VEGF are for PDR without detachment",
          "others": {
            "A": "PRP treats ischaemic PDR but does not relieve an established tractional detachment",
            "C": "anti-VEGF is adjunctive and can transiently worsen traction; it does not repair the detachment",
            "D": "observation risks permanent vision loss once tractional detachment is present"
          }
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
          "rule": "For any chemical eye injury, irrigate copiously and immediately; do not delay for pH testing or topical medications.",
          "highyield": "Ophthalmology / Emergency",
          "hook": "Chemical eye burn = irrigate copiously FIRST (before pH/drops); alkali penetrates fast",
          "others": {
            "B": "antibiotic drops are secondary; irrigation must come first to limit tissue necrosis",
            "C": "a cycloplegic is comfort care and not the urgent sight-saving step",
            "D": "measuring pH must not delay irrigation - start water/saline immediately"
          }
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
          "rule": "In AACG with dangerously high IOP, give IV mannitol for rapid osmotic reduction; definitive treatment is laser peripheral iridotomy after pressure control.",
          "highyield": "Ophthalmology / Glaucoma",
          "hook": "AACG with markedly elevated IOP -> IV mannitol (osmotic) for rapid lowering; definitive = laser iridotomy",
          "others": {
            "A": "oral acetazolamide is useful but slower and less effective than IV mannitol when IOP is severely elevated",
            "C": "topical timolol lowers aqueous production but is insufficient alone in a severe acute attack",
            "D": "oral glycerin is an alternative osmotic agent but IV mannitol is the acute in-hospital choice"
          }
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
          "rule": "Pilocarpine is a direct muscarinic agonist; in AACG it constricts the pupil and contracts the ciliary muscle to open the angle. (Avoid in uveitis.)",
          "highyield": "Ophthalmology / Glaucoma",
          "hook": "Pilocarpine = direct miotic (muscarinic agonist): miosis + ciliary contraction opens the angle in AACG",
          "others": {
            "A": "beta-2 agonists are not used in glaucoma; timolol is a beta-blocker reducing aqueous production",
            "C": "alpha-1 agonists (phenylephrine) DILATE the pupil and would worsen AACG",
            "D": "acetazolamide is the carbonic anhydrase inhibitor; pilocarpine is the miotic"
          }
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
          "rule": "Traumatic hyphema: bed rest, head elevation, eye shield, avoid aspirin/NSAIDs; watch for re-bleed (raises IOP). Do not give anticoagulants.",
          "highyield": "Ophthalmology / Trauma",
          "hook": "Hyphema = rest + head-up + shield + avoid aspirin/NSAIDs; re-bleed is the danger",
          "others": {
            "A": "routine paracentesis is not indicated and risks worsening; conservative care is mainstay",
            "C": "steroids are not first-line for hyphema and can raise pressure; the issue is re-bleed prevention",
            "D": "anticoagulants would promote re-bleeding and are contraindicated"
          }
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
          "rule": "CRVO: sudden painless loss with dilated tortuous veins, flame haemorrhages, cotton-wool spots and disc oedema; manage vascular risk factors and macular oedema.",
          "highyield": "Ophthalmology / Retina",
          "hook": "CRVO = sudden painless loss + 'blood and thunder' (dilated veins, flame haemorrhages, disc oedema)",
          "others": {
            "A": "CRAO shows a pale retina with a cherry-red macula, not widespread haemorrhages",
            "C": "vitreous haemorrhage obscures the fundus (no clear vessels) rather than showing venous congestion",
            "D": "retinal detachment shows a demarcation line/tear, not a haemorrhagic venous pattern"
          }
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
          "rule": "Painless sudden monocular loss: CRAO, CRVO, vitreous haemorrhage, retinal detachment. Optic neuritis presents with pain on eye movement.",
          "highyield": "Ophthalmology / Neuro-ophthalmology",
          "hook": "Painless monocular loss = CRAO/CRVO/vitreous haemorrhage/RD; optic neuritis is PAINFUL (eye movement)",
          "others": {
            "A": "CRAO is classically sudden and painless",
            "B": "CRVO is sudden and painless",
            "C": "rhegmatogenous RD is painless (flashes/floaters then curtain"
          }
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
          "rule": "Vitreous haemorrhage: sudden floaters, dark veil, absent red reflex, fundus not seen; urgent scan to rule out retinal tear/detachment.",
          "highyield": "Ophthalmology / Retina",
          "hook": "Sudden floaters + veiled vision + absent red reflex = vitreous haemorrhage; exclude RD",
          "others": {
            "A": "CRAO shows a pale retina with cherry-red spot, not an obscured vitreous",
            "C": "anterior uveitis has a visible inflamed anterior segment, not an absent red reflex from blood",
            "D": "AACG has a mid-dilated fixed pupil and high pressure, not floaters with lost red reflex"
          }
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
          "rule": "Flashes + floaters + a curtaining shadow, especially in a myope, indicates rhegmatogenous RD; urgent ophthalmology review (surgery: scleral buckle/vitrectomy).",
          "highyield": "Ophthalmology / Retina",
          "hook": "Flashes + floaters + curtain (especially myope) = rhegmatogenous RD; urgent referral",
          "others": {
            "A": "delaying risks irreversible macula-off detachment and permanent loss",
            "C": "antibiotics are irrelevant; there is no infection",
            "D": "glasses do not address an acute retinal detachment"
          }
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
          "rule": "RP: early night blindness, tunnel vision, bone-spicule pigment, attenuated vessels, waxy disc; inherited rod-cone dystrophy.",
          "highyield": "Ophthalmology / Retina",
          "hook": "Night blindness + tunnel vision + bone-spicule pigment + attenuated vessels = retinitis pigmentosa",
          "others": {
            "A": "AMD causes central (not peripheral/night) loss and drusen, not bone spicules",
            "C": "central serous causes a central serous detachment, not night blindness or spicules",
            "D": "diabetic retinopathy has microaneurysms/haemorrhages, not bone-spicule pigment"
          }
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
          "rule": "AMD: central loss/distortion; Amsler grid is the home monitoring tool for wet conversion, treated with intravitreal anti-VEGF.",
          "highyield": "Ophthalmology / Macula",
          "hook": "Central distortion in elderly = AMD; Amsler grid monitors for wet conversion (anti-VEGF)",
          "others": {
            "B": "tonometry measures IOP for glaucoma, not AMD activity",
            "C": "colour testing is not the practical home monitor for AMD conversion",
            "D": "fluorescein angiography is clinic-based, not a home tool"
          }
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
          "rule": "Wet AMD (neovascular, subretinal fluid/haemorrhage, rapid loss) is treated with intravitreal anti-VEGF; dry AMD is atrophic with drusen.",
          "highyield": "Ophthalmology / Macula",
          "hook": "Wet AMD = neovascular (fluid/haemorrhage, rapid loss) -> intravitreal anti-VEGF; dry = drusen/atrophy",
          "others": {
            "A": "antioxidants are for dry AMD; this patient has neovascular (wet) disease needing anti-VEGF",
            "C": "antibiotics have no role in AMD",
            "D": "dry AMD does not get urgent laser; wet AMD gets anti-VEGF, not routine laser"
          }
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
          "rule": "Congenital NLDO: lacrimal massage and observation; most resolve by age 1. Probing if persistent beyond 12 months.",
          "highyield": "Ophthalmology / Paediatric",
          "hook": "Persistent neonatal watery eye + no mass = congenital NLDO; massage + observe, probe if persistent",
          "others": {
            "A": "immediate DCR is far too aggressive for a self-limiting neonatal obstruction",
            "C": "chronic antibiotics are not indicated without infection",
            "D": "antihistamines do not treat a mechanical duct obstruction"
          }
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
          "rule": "Episcleritis: blanching vessels, mild, self-limited. Scleritis: violaceous non-blanching, severe pain, vision threat, systemic disease (RA); needs systemic therapy.",
          "highyield": "Ophthalmology / Inflammation",
          "hook": "Episcleritis = blanches, mild, benign; scleritis = violaceous/non-blanching, severe, systemic (RA)",
          "others": {
            "A": "episcleritis is benign and does not need immunosuppression",
            "C": "the mild blanching case is episcleritis, not scleritis",
            "D": "scleritis is not benign and requires systemic treatment, not just lubricants"
          }
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
          "rule": "Anterior uveitis: treat inflammation with steroids AND a cycloplegic to prevent posterior synechiae (iris-lens adhesions causing a fixed irregular pupil).",
          "highyield": "Ophthalmology / Uveitis",
          "hook": "Untreated anterior uveitis -> posterior synechiae (fixed irregular pupil); use a cycloplegic to prevent",
          "others": {
            "A": "cataract is not the acute complication described; the fixed irregular pupil is synechiae",
            "C": "retinal detachment is not the mechanism here",
            "D": "miotics would worsen synechiae risk; cycloplegics (dilators) are used"
          }
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
          "rule": "Dense congenital cataract: treat promptly (surgery within weeks) to prevent irreversible deprivation amblyopia; investigate TORCH/galactosaemia.",
          "highyield": "Ophthalmology / Paediatric",
          "hook": "Dense congenital cataract = urgent surgery early to prevent deprivation amblyopia (critical period)",
          "others": {
            "A": "delaying causes permanent amblyopia; infant cataracts are not benign if dense",
            "C": "antibiotics do not treat a lens opacity",
            "D": "glasses alone will not clear a dense lens opacity and delay critical treatment"
          }
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
          "rule": "After medical control of AACG, perform laser peripheral iridotomy; the fellow eye is also at risk and is typically treated prophylactically.",
          "highyield": "Ophthalmology / Glaucoma",
          "hook": "AACG definitive tx = laser peripheral iridotomy (after control); also prophylax the fellow eye",
          "others": {
            "A": "antibiotics do not prevent angle closure",
            "C": "cataract surgery may help but iridotomy is the definitive angle-closure procedure",
            "D": "chronic diuretics are not the definitive preventive treatment"
          }
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
          "rule": "Toxoplasma chorioretinitis: focal necrosis with vitritis ('headlight in fog') next to an old scar; treat with pyrimethamine + sulfadiazine + folinic acid.",
          "highyield": "Ophthalmology / Retina",
          "hook": "Focal necrotizing retinitis + vitritis + old pigmented scar = toxoplasma; pyrimethamine/sulfadiazine",
          "others": {
            "A": "CMV retinitis occurs in immunocompromised hosts, is perivascular ('tomato ketchup'), and lacks an old toxoplasma scar",
            "C": "APMPPE is multifocal placoid and not necrotizing with a single old scar",
            "D": "syphilitic retinitis has a different picture and is not 'headlight in fog' with a solitary old scar"
          }
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
          "rule": "Orbital cellulitis: proptosis, painful restricted eye movement, decreased vision, toxicity -> urgent IV antibiotics + CT. Preseptal: lid only, oral antibiotics.",
          "highyield": "Ophthalmology / Emergency",
          "hook": "Proptosis + EOM restriction/vision loss = ORBITAL cellulitis -> urgent IV abx + CT (not preseptal)",
          "others": {
            "A": "oral outpatient care is for preseptal; this child has orbital signs needing admission",
            "C": "allergic oedema is bilateral, itchy, and lacks infection signs/EOM restriction",
            "D": "a chalazion is a painless lid lump, not acute swelling with proposis"
          }
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
          "rule": "HZO: vesicular rash in V1 distribution, Hutchinson sign (nasal tip) predicts eye involvement; urgent oral antiviral + ophthalmology assessment.",
          "highyield": "Ophthalmology / Infection",
          "hook": "HZO with Hutchinson sign (nasal tip vesicles) = urgent systemic antiviral + ophthalmology review",
          "others": {
            "A": "antibiotics do not treat VZV; this needs antiviral therapy",
            "C": "antihistamines do not treat viral infection or prevent ocular complications",
            "D": "topical steroids alone risk worsening; systemic antiviral is required"
          }
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
          "rule": "Pterygium: fibrovascular tissue growing from the limbus onto the cornea (UV exposure); monitor/excise if approaching the visual axis. Pinguecula: limbal conjunctival deposit, no corneal spread.",
          "highyield": "Ophthalmology / External eye",
          "hook": "Growth ONTO cornea from limbus = pterygium (UV); pinguecula stays on conjunctiva, no corneal spread",
          "others": {
            "A": "pinguecula is a non-vascular yellow nodule that does not extend onto the cornea",
            "C": "melanoma is typically pigmented and not a classical triangular limbal wing",
            "D": "pinguicula is not a term for cataract; the distinction is pterygium vs pinguecula"
          }
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
          "rule": "Entropion: eyelid turns inward, lashes abrade the cornea (ulcer risk); needs correction to protect the eye. Ectropion: outward, causes epiphora/exposure.",
          "highyield": "Ophthalmology / Oculoplastics",
          "hook": "Lid turning INWARD, lashes on cornea = entropion (corneal trauma); ectropion = outward (epiphora)",
          "others": {
            "A": "ectropion is outward eversion with tearing/exposure, not inward lashes on cornea",
            "C": "blepharospasm is involuntary lid squeezing, not a structural inversion",
            "D": "ptosis is lid drooping, not inversion"
          }
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
          "rule": "Dacryocystitis: tender medial canthal swelling with purulent reflux from the punctum; warm compresses, massage, oral antibiotics; probing if recurrent. Distinguish from cellulitis (diffuse lid/orbital involvement).",
          "highyield": "Ophthalmology / Lacrimal",
          "hook": "Medial canthal tender swelling + purulent punctal reflux, quiet eye = dacryocystitis; not cellulitis",
          "others": {
            "A": "preseptal cellulitis is diffuse lid erythema/swelling without a focal sac and punctal reflux",
            "C": "orbital cellulitis has proposis/EOM restriction, not a focal medial canthal sac",
            "D": "conjunctivitis has a diffusely red eye, not a focal canthal swelling"
          }
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
          "rule": "NAION: sudden painless vision loss, RAPD, altitudinal defect, pale oedematous disc with splinter haemorrhages in a vascular patient. No proven treatment; address vascular risk factors.",
          "highyield": "Ophthalmology / Neuro-ophthalmology",
          "hook": "Painless altitudinal loss + disc oedema with haemorrhages + vascular risk factors = NAION",
          "others": {
            "A": "papilloedema has no haemorrhages, is usually bilateral, and is associated with raised ICP symptoms",
            "C": "optic neuritis typically affects younger patients with pain on eye movement and central/color desaturation",
            "D": "retinal artery occlusion shows a cherry-red spot and box-carring of retinal arteries, not disc oedema"
          }
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
          "rule": "High Wells probability → CTPA immediately",
          "highyield": "Pulmonary embolism — CTPA and Wells",
          "hook": "High pre-test probability means CTPA comes before D-dimer, particularly after surgery and with unilateral leg swelling.",
          "others": {
            "B": "A D-dimer is not exclusionary in high-risk PE",
            "C": "Thromboaspirin does not treat established PE",
            "D": "Calf ultrasound does not safely exclude pulmonary embolism"
          }
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
          "rule": "Low clinical suspicion + all PERC criteria absent → no testing",
          "highyield": "Pulmonary embolism — PERC rule",
          "hook": "PERC is a rule-out for low-risk patients, not a rule-out for all dyspnoeic patients.",
          "others": {
            "B": "Imaging is reserved for higher risk or positive criteria",
            "C": "D-dimer is not needed when PERC negative and pre-test low",
            "D": "No evidence supports empiric anticoagulation"
          }
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
          "rule": "Non-high risk + negative D-dimer → excluded",
          "highyield": "Pulmonary embolism — D-dimer",
          "hook": "D-dimer rules out only in low/intermediate risk; it never proves PE.",
          "others": {
            "B": "D-dimer is not diagnostic",
            "C": "Highly sensitive D-dimer remains usable",
            "D": "Imaging is only needed if D-dimer is positive"
          }
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
          "rule": "Low/intermediate risk + positive D-dimer → CTPA",
          "highyield": "Pulmonary embolism — D-dimer",
          "hook": "A positive D-dimer is a trigger for imaging, not evidence of PE but never to be ignored.",
          "others": {
            "B": "D-dimer negativity excludes, not positivity",
            "C": "Repeating wastes time",
            "D": "Imaging precedes anticoagulation unless diagnostic delay is unsafe"
          }
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
          "rule": "Suspected PE in pregnancy → bilateral compression ultrasound first",
          "highyield": "Pulmonary embolism — pregnancy",
          "hook": "If duplex is negative but PE remains suspected, CTPA or V/Q is justified based on local expertise and chest X-ray.",
          "others": {
            "B": "CTPA is second-line if duplex negative or unavailable",
            "C": "D-dimer can be unreliable in pregnancy",
            "D": "Chest X-ray is safe and guides V/Q vs CTPA"
          }
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
          "rule": "Pregnancy DVT/PE → LMWH, avoid warfarin and DOACs",
          "highyield": "DVT — pregnancy",
          "hook": "LMWH is continued for the duration of pregnancy and at least 6 weeks postpartum.",
          "others": {
            "B": "Warfarin teratogenicity and fetal haemorrhage risk",
            "C": "DOACs are not recommended in pregnancy",
            "D": "Aspirin is not adequate anticoagulation for DVT"
          }
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
          "rule": "Cancer VTE + renal impairment/thrombocytopenia → LMWH",
          "highyield": "Cancer-associated thrombosis",
          "hook": "In active cancer without severe renal/platelet issues, DOACs are also acceptable alternatives, but this profile favours LMWH.",
          "others": {
            "B": "Warfarin needs overlap and INR stability and is less effective in active cancer",
            "C": "Aspirin does not treat DVT",
            "D": "IV UFH reserved for severe instability/renal failure needing short half-life"
          }
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
          "rule": "PE + hypotension → immediate thrombolysis if eligible",
          "highyield": "Massive PE — thrombolysis",
          "hook": "Massive PE means shock or sustained hypotension, not simply saddle or large clot burden.",
          "others": {
            "B": "Aspirin is not adequate VTE treatment",
            "C": "Observation risks cardiovascular collapse",
            "D": "IVC filter does not remove embolus"
          }
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
          "rule": "Normotensive RV-strained PE → anticoagulation, close monitoring",
          "highyield": "Submassive PE — management",
          "hook": "Treat PE with thrombolysis only if hypotensive/shocked or failing anticoagulation with impending arrest.",
          "others": {
            "B": "No proven benefit and bleeding risk",
            "C": "Catheter therapy reserved for selected/failing cases",
            "D": "Warfarin needs overlap"
          }
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
          "rule": "eGFR severe → LMWH preferred initially",
          "highyield": "DOAC dosing — renal impairment",
          "hook": "Check renal function before choosing a DOAC; severe CKD mandates LMWH or specialist-guided treatment.",
          "others": {
            "B": "Standard DOAC dose not recommended at eGFR 15",
            "C": "Rivaroxaban also limited by renal function",
            "D": "Aspirin is not adequate treatment"
          }
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
          "rule": "Unprovoked proximal DVT → at least 3 months, then reassess",
          "highyield": "DVT — duration of therapy",
          "hook": "Unprovoked VTE warrants review after 3 months and consideration of indefinite therapy if recurrence risk outweighs bleeding risk.",
          "others": {
            "B": "2 weeks is grossly inadequate",
            "C": "Aspirin is not adequate VTE treatment",
            "D": "1 month is insufficient"
          }
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
          "rule": "Cancer VTE + vomiting/malabsorption → LMWH",
          "highyield": "Cancer-associated thrombosis — anticoagulation route",
          "hook": "Do not use oral anticoagulants if oral route/adherence is unreliable; parenteral LMWH or LMWH-based strategy is preferred.",
          "others": {
            "B": "Warfarin requires oral absorption and overlap",
            "C": "Rivaroxaban absorption and adherence unstable",
            "D": "Cancer is indication, not exclusion"
          }
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
          "rule": "Contrast contraindication/CKD + normal CXR → V/Q",
          "highyield": "Pulmonary embolism — V/Q scan",
          "hook": "V/Q is especially useful in pregnancy and young women to reduce chest irradiation and in contrast allergy/CKD.",
          "others": {
            "B": "CTPA requires contrast",
            "C": "D-dimer is not definitive",
            "D": "MRI is not first-line acute PE imaging"
          }
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
          "rule": "High suspicion + negative CTPA → proximal duplex or V/Q",
          "highyield": "Pulmonary embolism — negative CTPA workup",
          "hook": "Discordance between imaging and clinical assessment should trigger further evaluation, not automatic discharge.",
          "others": {
            "B": "Premature discharge unsafe",
            "C": "D-dimer cannot adjudicate this",
            "D": "Aspirin is not treatment"
          }
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
          "rule": "D-dimer excludes only, never confirms",
          "highyield": "Pulmonary embolism — D-dimer specificity",
          "hook": "D-dimer is not diagnostic; use it to exclude in the right pre-test group and image if positive.",
          "others": {
            "B": "D-dimer cannot confirm PE",
            "C": "D-dimer cannot confirm DVT",
            "D": "Massive intervention needs diagnosis"
          }
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
          "rule": "Asymptomatic/low-risk distal DVT → repeat duplex in 1–2 weeks",
          "highyield": "Distal DVT — surveillance",
          "hook": "If symptoms worsen, DVT extends into proximal veins, or risk rises, anticoagulate.",
          "others": {
            "B": "All DVTs do not need 6 months",
            "C": "No indication for thrombolysis",
            "D": "IVC filter not used for calf DVT"
          }
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
          "rule": "Recurrent VTE on anticoagulation → investigate APS/occult cancer",
          "highyield": "Recurrent VTE — work-up",
          "hook": "Also check adherence; do not attribute recurrence automatically to drug failure.",
          "others": {
            "B": "Aspirin not adequate",
            "C": "Stopping unsafe",
            "D": "Recurrence is not normal under therapy"
          }
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
          "rule": "Haemoptysis in PE is not absolute anticoagulation contraindication",
          "highyield": "Pulmonary embolism — haemoptysis",
          "hook": "Assess bleeding severity, use anticoagulation unless contraindxixated; severe or unstable bleeding changes management.",
          "others": {
            "B": "No alternative diagnosis without evaluation",
            "C": "Haemoptysis does not mandate thrombolysis",
            "D": "Stable haemoptysis does not forbid anticoagulation"
          }
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
          "rule": "HIT → stop all heparin, use non-heparin anticoagulant",
          "highyield": "HIT — anticoagulation choice",
          "hook": "HIT is antibody-mediated and LMWH can cross-react; avoid all heparin.",
          "others": {
            "B": "LMWH cross-reacts",
            "C": "UFH causes HIT",
            "D": "Aspirin is inadequate"
          }
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
          "rule": "DVT on warfarin with INR 1.3 → restore therapeutic anticoagulation",
          "highyield": "Warfarin — therapeutic range",
          "hook": "Always assess INR, adherence and drug interactions before changing permanent agents.",
          "others": {
            "B": "Aspirin does not treat DVT",
            "C": "Stopping unsafe",
            "D": "No treatment is dangerous"
          }
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
          "rule": "Pregnancy + negative duplex + normal CXR → V/Q preferred",
          "highyield": "Pulmonary embolism — pregnancy imaging",
          "hook": "CTPA is acceptable when V/Q unavailable and CXR abnormal; discuss with radiology.",
          "others": {
            "B": "CTPA may be second choice with CXR abnormal",
            "C": "MRI pelvis not appropriate",
            "D": "Needs further exclusion"
          }
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
          "rule": "Saddle PE with stability → anticoagulation",
          "highyield": "Pulmonary embolism — saddle embolus",
          "hook": "Treat by haemodynamics: hypotension/shock determines thrombolysis, not the clot name.",
          "others": {
            "B": "Massive PE requires instability",
            "C": "Embolectomy only selected cases",
            "D": "Untreated PE dangerous"
          }
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
          "rule": "Shock + lysis contraindicated → catheter/surgical embolectomy",
          "highyield": "Massive PE — thrombolysis contraindication",
          "hook": "Massive PE with contraindication to lysis → urgent mechanical intervention with a multidisciplinary team.",
          "others": {
            "B": "Anticoagulation alone cannot rescue shocked PE",
            "C": "Aspirin inadequate",
            "D": "No treatment fatal"
          }
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
          "rule": "Pregnancy VTE → LMWH throughout + ≥6 weeks postpartum",
          "highyield": "Pregnancy VTE — duration",
          "hook": "If VTE is diagnosed close to delivery, postpartum duration extends accordingly.",
          "others": {
            "B": "Delivery does not eliminate risk",
            "C": "Too short",
            "D": "Inadequate"
          }
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
          "rule": "Upper limb DVT → anticoagulate; line decision individualised",
          "highyield": "Upper limb DVT — treatment",
          "hook": "Upper limb DVT is not automatically benign; it can embolise and symptoms matter.",
          "others": {
            "B": "Not every line must be removed if functioning and uninfected",
            "C": "Aspirin inadequate",
            "D": "Can cause complications"
          }
        }
      }
    ]
  },
  {
    "id": "psych",
    "name": "Schizophrenia — Persecutory Delusions",
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
          "rule": "Persecutory delusions with intact reality-testing absence and no mood syndrome point to schizophrenia; obsessions (OCD) are experienced as intrusive and 'not true', unlike delusions.",
          "highyield": "Psychosis / Schizophrenia",
          "hook": "A fixed , bizarre persecutory delusion without mood syndrome = schizophrenia; do not call it OCD (obsessions are ego-dystonic, not held as fact)",
          "others": {
            "B": "psychotic depression requires a full depressive syndrome dominating the picture, not an isolated persecutory delusion in an otherwise non-mood context",
            "C": "OCD obsessions are intrusive and the patient knows they are excessive/untrue — this patient is fully convinced of a real plot",
            "D": "GAD is worry/anxiety, not a fixed persecutory delusion"
          }
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
          "rule": "Psychosis with decline of 1–6 months duration = schizophreniform; schizophrenia needs ≥6 months (medication + prodrome).",
          "highyield": "Psychosis / Schizophrenia spectrum",
          "hook": "3 months of ongoing psychosis + decline = schizophreniform (1–6 mo); reserve schizophrenia for ≥6 months",
          "others": {
            "B": "brief psychotic disorder lasts 1 day–1 month and typically resolves more abruptly, not 3 months with ongoing symptoms",
            "C": "schizophrenia requires ≥6 months of continuous disturbance — 3 months is too early",
            "D": "delusional disorder is non-bizarre delusions without prominent hallucinations or marked functional decline"
          }
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
          "rule": "Weight gain+hyperglycaemia+dyslipidaemia (metabolic syndrome) is characteristic of SGA (olanzapine, clozapine); FGA causes EPS/tardive dyskinesia.",
          "highyield": "Psychopharmacology / Antipsychotics",
          "hook": "Olanzapine/clozapine = metabolic syndrome; haloperidol/fluphenazine = EPS/neuroleptic-induced extrapyramidal",
          "others": {
            "A": "haloperidol (FGA) mainly causes extrapyramidal symptoms/akathisia, not marked metabolic syndrome",
            "B": "fluphenazine (FGA) causes EPS; it is not the main cause of metabolic syndrome",
            "D": "chlorpromazine is low-metabolic relative to olanzapine — olanzapine is the archetype for metabolic weight gain"
          }
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
          "rule": "Rigidity + hyperthermia + autonomic instability + raised CK after an antipsychotic = NMS; stop the drug and give supportive care.",
          "highyield": "Psychiatric emergencies / Antipsychotic AE",
          "hook": "Lead-pipe rigidity + hyperthermia + raised CK after an ANTIPSYCHOTIC = NMS; serotonin syndrome has clonus/hyperreflexia and follows serotonergic drugs",
          "others": {
            "A": "serotonin syndrome follows serotonergic drugs and features clonus, hyperreflexia and diarrhoea rather than lead-pipe rigidity/high CK",
            "B": "malignant hyperthermia is triggered by inhaled anaesthetics/succinylcholine, not antipsychotics",
            "C": "tardive dyskinesia is a chronic syndrome of involuntary movements, not acute rigidity with hyperthermia and raised CK"
          }
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
          "rule": "TD = orofacial stereotypic movements from chronic antipsychotics; reduce/switch the drug and consider a VMAT-2 inhibitor; avoid anticholinergics.",
          "highyield": "Movement disorders / Antipsychotic AE",
          "hook": "Orofacial stereotypy + chronic antipsychotic = TD; do NOT use anticholinergics (exacerbate), switch to atypical/clozapine + VMAT-2 inhibitor",
          "others": {
            "A": "increasing the offending antipsychotic worsens TD — it must be reduced or switched",
            "B": "anticholinergics (benztropine) can WORSEN tardive dyskinesia, unlike acute dystonia/drug-induced parkinsonism",
            "C": "reassuring while continuing the same dose risks irreversible movement disorder; action is required"
          }
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
          "rule": "Acute neuroleptic-induced dystonia responds immediately to anticholinergics (benztropine/diphenhydramine); then reduce the causative antipsychotic.",
          "highyield": "Extrapyramidal disorders / Antipsychotic AE",
          "hook": "Acute dystonia (young, early, high-potency, painful) = anticholinergic; TD (chronic, orofacial) = different management",
          "others": {
            "A": "increasing the antipsychotic worsens the dystonia",
            "C": "benzodiazepines are not first-line for acute dystonia (anticholinergic is)",
            "D": "propranolol treats akathisia-related pacing more than acute dystonia; benztropine is the acute dystonia treatment"
          }
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
          "rule": "A few hours of sleep that leaves the patient rested and energetic (reduced need, not insomnia) is a hallmark of mania along with grandiosity and pressured speech.",
          "highyield": "Bipolar disorder / Mania",
          "hook": "'Decreased need for sleep' (rested despite few hours) = mania; 'insomnia with fatigue/early awakening' = depression",
          "others": {
            "A": "difficulty falling asleep while tired is characteristic of depression/anxiety insomnia, not manic decreased-need sleep",
            "C": "early-morning awakening with low mood is a hallmark of depression, not mania",
            "D": "hypersomnia is typical of atypical depression, not mania"
          }
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
          "rule": "For bipolar depression use a mood stabiliser/atypical antipsychotic; do NOT give antidepressant monotherapy due to risk of switching to mania.",
          "highyield": "Bipolar disorder / Depression",
          "hook": "Bipolar depression = mood stabiliser ± atypical antipsychotic ± lamotrigine; avoid antidepressant monotherapy (mania risk)",
          "others": {
            "A": "adding a mood stabiliser or lamotrigine is appropriate for bipolar depression",
            "B": "quetiapine (and lurasidone) are FDA-approved and effective for bipolar depression",
            "D": "ECT is effective and appropriate for severe bipolar depression"
          }
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
          "rule": "Mild tearfulness/lability around day 3–5 that resolves within 2 weeks with preserved function is baby blues; persistent or impairing symptoms indicate postpartum depression.",
          "highyield": "Perinatal mental health / Mood disorders",
          "hook": "Day 3, mild, fluctuating, self-limiting, functioning preserved = baby blues; >2 weeks with impairment = PPD",
          "others": {
            "B": "PPD requires symptoms persisting >2 weeks with functional impairment — day-3 self-limiting lability is not PPD",
            "C": "postpartum psychosis features confusion, delusions and is a psychiatric emergency — not present here",
            "D": "GAD is persistent excessive worry, not day-3 transient tearfulness"
          }
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
          "rule": "Delusions/hallucinations + confusion + insomnia in the postpartum period = postpartum psychosis; urgent admission and safety planning (infanticide risk).",
          "highyield": "Perinatal mental health / Psychiatric emergency",
          "hook": "Postpartum psychosis (delusions about the baby, confusion, insomnia) = emergency admission; never outpatient reassurance",
          "others": {
            "A": "this is an emergency with risk to the infant — outpatient reassurance is dangerous",
            "B": "an SSRI is not emergency treatment and home management is unsafe here",
            "C": "sleep hygiene is wholly inadequate for psychotic symptoms"
          }
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
          "rule": "Melancholic depression = early-morning wakening, diurnal mood variation (worse AM), anorexia/weight loss and psychomotor change; distinct from atypical (hypersomnia, hyperphagia, leaden paralysis).",
          "highyield": "Mood disorders / Depressive disorders",
          "hook": "Early-morning wakening + AM-worse mood + psychomotor changes = melancholic (contrast atypical: hypersomnia, leaden paralysis, hyperphagia)",
          "others": {
            "A": "hypersomnia with increased appetite are ATYPICAL (reverse) features, the opposite of melancholic",
            "C": "melancholic depression does not sleep restfully — early-morning wakening is the marker",
            "D": "emptiness/loss of reactivity (mood does not brighten) characterises melancholia, not reactive brightening"
          }
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
          "rule": "Recurrent unexpected panic attacks (fear peaking in minutes with autonomic surge) plus anticipatory fear/avoidance = panic disorder; SSRIs are first-line treatment.",
          "highyield": "Anxiety disorders / Panic",
          "hook": "Sudden surges peaking in minutes (not chronic worry) + fear of the next attack = panic disorder",
          "others": {
            "B": "GAD is chronic, generalised worry present most days, not paroxysmal surges peaking in minutes",
            "C": "social anxiety is fear of negative evaluation in social/performance situations, not spontaneous panic surges",
            "D": "OCD is obsessions/compulsions, not paroxysmal autonomic fear attacks"
          }
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
          "rule": "First-line maintenance for panic disorder is an SSRI started low and titrated; avoid long-term benzodiazepine monotherapy.",
          "highyield": "Anxiety disorders / Panic",
          "hook": "Panic disorder long-term = SSRI (low start, titrate); benzo only as short-term adjunct, not monotherapy",
          "others": {
            "A": "lorazepam alone risks dependence/rebound and does not treat the underlying disorder long-term",
            "C": "propranolol may blunt performance-anxiety symptoms but is not first-line for spontaneous panic disorder",
            "D": "indefinite twice-daily benzodiazepine is not appropriate maintenance therapy"
          }
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
          "rule": "Acute onset, fluctuating inattention/consciousness with a medical trigger = delirium; treat the cause (e.g. infection), avoid sedatives.",
          "highyield": "Delirium / Cognitive disorders",
          "hook": "Acute + fluctuating + inattention + infection = delirium (reversible); chronic + progressive = dementia",
          "others": {
            "B": "dementia is chronic, progressive and not typically triggered acutely by infection; it lacks the acute fluctuating inattention of delirium",
            "C": "depression (pseudodementia) has prominent low mood and 'don't know' answers, not acute fluctuating consciousness with hallucinations",
            "D": "schizophrenia begins with psychosis, not acute confusion with inattention from a medical infection"
          }
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
          "rule": "Treat the underlying cause and use non-pharmacological measures first for delirium; reserve low-dose antipsychotics for severe agitation and avoid benzodiazepines/restraints.",
          "highyield": "Delirium / Geriatric psychiatry",
          "hook": "Delirium = treat cause + non-pharmacologic first; antipsychotic only for severe agitation; avoid benzo/restraints",
          "others": {
            "A": "benzodiazepines usually WORSEN delirium (except alcohol/benzodiazepine withdrawal) and are not routine first-line",
            "B": "physical restraint is a last resort, not primary management, and increases agitation/injury",
            "D": "prophylactic antipsychotics are not indicated for all patients; targeted, cause-directed care is the standard"
          }
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
          "rule": "Mild-moderate Alzheimer disease is treated with a cholinesterase inhibitor (donepezil); memantine is reserved for moderate-severe, and anticholinergics are avoided.",
          "highyield": "Dementia / Alzheimer disease",
          "hook": "Mild-moderate AD = cholinesterase inhibitor; memantine = moderate-severe; avoid anticholinergic burden",
          "others": {
            "A": "memantine is for moderate-to-severe AD, not first-line for mild-moderate (cholinesterase inhibitor is used first)",
            "B": "haloperidol is an antipsychotic and only for significant agitation/psychosis, not a cognitive treatment",
            "C": "amitriptyline is an anticholinergic antidepressant that can worsen cognition in AD"
          }
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
          "rule": "Stepwise cognitive decline with focal deficits, vascular risk factors and lacunar/white-matter changes = vascular dementia.",
          "highyield": "Dementia / Cerebrovascular dementia",
          "hook": "Stepwise + focal signs + vascular risk factors + lacunes = vascular dementia (vs gradual amnestic AD)",
          "others": {
            "A": "Alzheimer disease is gradual and amnestic without focal neurologic signs or a stepwise stroke-like course",
            "B": "frontotemporal dementia presents with early behaviour/personality or language change, not stepwise focal vascular decline",
            "C": "normal-pressure hydrocephalus has gait apraxia, urinary incontinence and ventriculomegaly (Hakim triad), not prominent lacunar infarcts"
          }
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
          "rule": "In DLB (fluctuating cognition, visual hallucinations, parkinsonism), AVOID antipsychotics due to severe sensitivity; use cholinesterase inhibitors.",
          "highyield": "Dementia / Lewy body disease",
          "hook": "Fluctuating cognition + formed visual hallucinations + parkinsonism + neuroleptic sensitivity = DLB; avoid neuroleptics",
          "others": {
            "A": "AD lacks the prominent parkinsonism, visual hallucinations and severe neuroleptic sensitivity that define DLB",
            "C": "vascular dementia has stepwise vascular/focal signs, not this triad of fluctuation, visual hallucinations and parkinsonism",
            "D": "giving an antipsychotic for DLB psychosis is dangerous (severe neuroleptic sensitivity); it must be avoided"
          }
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
          "rule": "Early behavioural disinhibition/apathy and language change with spared memory, younger onset, and frontotemporal atrophy = frontotemporal dementia.",
          "highyield": "Dementia / FTD",
          "hook": "Prominent behaviour/personality + language with spared memory + younger onset = FTD",
          "others": {
            "B": "AD is typically amnestic early and older-onset, without prominent early disinhibition/apathy with spared memory",
            "C": "DLB features visual hallucinations, fluctuation and parkinsonism rather than early personality change",
            "D": "vascular dementia has stepwise decline with focal signs and vascular risk factors, not the behavioural syndrome of FTD"
          }
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
          "rule": "Delirium tremens = clouded consciousness + autonomic overactivity after abrupt alcohol cessation; treat with benzodiazepines + thiamine + supportive care.",
          "highyield": "Alcohol withdrawal / Psychiatric emergency",
          "hook": "Autonomic instability + clouded consciousness after alcohol cessation = DTs → benzodiazepines (hallucinosis has clear sensorium, no autonomic storm)",
          "others": {
            "A": "alcoholic hallucinosis has a clear sensorium without the autonomic storm of DTs; the treatment for DTs is benzodiazepines, not primary antipsychotics",
            "B": "thiamine treats/prevents Wernicke encephalopathy but does not control autonomic DTs; benzodiazepines are needed",
            "D": "this is an acute withdrawal emergency, not chronic alcoholic dementia requiring only long-term care"
          }
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
          "rule": "Naltrexone (opioid antagonist) reduces craving/reward; disulfiram is an aversive agent; acamprosate alters glutamate signalling.",
          "highyield": "Substance use disorders / Alcohol",
          "hook": "Opioid-antagonist anti-craving = naltrexone; aversive reaction = disulfiram; glutamate modulator = acamprosate",
          "others": {
            "A": "disulfiram is aversive (blocks aldehyde dehydrogenase causing a reaction with alcohol), not an opioid antagonist",
            "B": "acamprosate modulates glutamate/NMDA signalling to reduce relapse, not opioid receptors",
            "D": "haloperidol is an antipsychotic with no role in alcohol-craving reduction"
          }
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
          "rule": "Opioid withdrawal (mydriasis, rhinorrhoea, lacrimation, GI cramps) is treated with methadone/buprenorphine; naloxone is for opioid intoxication and would worsen withdrawal.",
          "highyield": "Substance use disorders / Opioids",
          "hook": "Mydriasis + lacrimation/rhinorrhoea/GI after stopping opioids = withdrawal (naloxone is for INTOXICATION); treat with methadone/buprenorphine",
          "others": {
            "A": "naloxone is for opioid INTOXICATION (pinpoint pupils, respiratory depression); giving it in withdrawal precipitates/worsens symptoms",
            "B": "serotonin syndrome has clonus, hyperreflexia and follows serotonergic drugs, not this opioid-withdrawal picture",
            "C": "this is opioid, not alcohol, withdrawal; the treatment of choice is opioid replacement, not benzodiazepines"
          }
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
          "rule": "ADHD core symptoms of inattention/hyperactivity/impulsivity are first-line treated with stimulants (methylphenidate); not benzodiazepines or antipsychotics.",
          "highyield": "Neurodevelopmental disorders / ADHD",
          "hook": "Childhood-onset inattention/hyperactivity across settings = ADHD; stimulant (methylphenidate) is first-line",
          "others": {
            "B": "benzodiazepines do not treat ADHD core symptoms and can impair attention",
            "C": "antipsychotics are not first-line for core ADHD (only for severe aggression/comorbidity)",
            "D": "caffeine/supplements are not evidence-based first-line treatment for ADHD"
          }
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
          "rule": "In severe anorexia, refeeding can cause life-threatening hypophosphataemia (refeeding syndrome) — monitor electrolytes, replace phosphate, and refeed slowly with close supervision.",
          "highyield": "Eating disorders / Medical complications",
          "hook": "Severe malnutrition + refeeding + low phosphate + arrhythmia/seizures = refeeding syndrome; replace phosphate and refeed slowly",
          "others": {
            "A": "the key derangement is hypophosphataemia from refeeding, not isolated hypoglycaemia; both replacement and slow refeeding are required",
            "C": "serotonin syndrome follows serotonergic drugs with clonus/hyperreflexia, not this electrolyte-driven picture",
            "D": "no alcohol use here; the problem is refeeding hypophosphataemia, not alcohol withdrawal"
          }
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
          "rule": "Bulimia with self-induced vomiting causes hypokalaemic, hypochloraemic metabolic alkalosis; recognise dental erosion, parotid swelling and Russell's sign and correct potassium.",
          "highyield": "Eating disorders / Bulimia",
          "hook": "Binge-purge + dental erosion + knuckle calluses = bulimia; vomiting drives hypokalaemic metabolic alkalosis (arrhythmia risk)",
          "others": {
            "A": "vomiting causes potassium LOSS, producing hypokalaemia, not hyperkalaemia",
            "B": "vomiting causes volume/Potassium loss and alkalosis, not hypernatraemia",
            "D": "hypercalcaemia is not the characteristic disturbance of bulimic purging"
          }
        }
      }
    ]
  },
  {
    "id": "renal",
    "name": "Acute Interstitial Nephritis",
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
          "rule": "AIN = drug + fever/rash + eosinophilia + WBC casts; treat by stopping the drug",
          "highyield": "Acute interstitial nephritis",
          "hook": "New drug + fever/rash + eosinophilia + WBC casts = AIN → stop the drug",
          "others": {
            "A": "ATN shows muddy brown granular casts, not eosinophilia or rash.",
            "B": "IgA nephropathy causes haematuria with URTI, not drug-related eosinophilia.",
            "D": "PSGN follows streptococcal infection with low C3, not drug exposure."
          }
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
          "rule": "Rising creatinine post-transplant → biopsy first; never treat rejection empirically",
          "highyield": "Renal transplant complications",
          "hook": "Post-transplant rising creatinine = biopsy before changing immunosuppression",
          "others": {
            "A": "Empirical immunosuppression is dangerous without knowing the cause.",
            "B": "Antibiotics are only for infection, which is not the first concern here.",
            "C": "Waiting 3 months delays potentially reversible rejection."
          }
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
          "rule": "Hepatorenal = functional prerenal AKI in cirrhosis: low U Na, high U Osm, bland sediment",
          "highyield": "Hepatorenal syndrome",
          "hook": "Cirrhosis + oliguria + U Na <10 + bland sediment = hepatorenal (terlipressin + albumin)",
          "others": {
            "A": "ATN shows high urine sodium (>40) with muddy brown casts.",
            "B": "Obstruction causes hydronephrosis and anuria, not low urine sodium.",
            "D": "IgA nephropathy causes haematuria, not bland prerenal-type urine."
          }
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
          "rule": "Typical HUS = post-enteric (O157) → supportive care; antibiotics and platelet transfusion avoided",
          "highyield": "Haemolytic uraemic syndrome",
          "hook": "Bloody diarrhoea + schistocytes + AKI = HUS → supportive care, NO antibiotics",
          "others": {
            "A": "Antibiotics increase Shiga toxin release and worsen HUS.",
            "B": "Plasma exchange is for TTP/atypical HUS, not typical post-enteric HUS.",
            "C": "Platelet transfusion is avoided in TTP/HUS (fuels microthrombi)."
          }
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
          "rule": "TTP = ADAMTS13 deficiency → plasma exchange; platelet transfusion contraindicated",
          "highyield": "Thrombotic thrombocytopenic purpura",
          "hook": "Neuro + MAHA + thrombocytopenia = TTP → plasma exchange (never platelet transfusion)",
          "others": {
            "A": "Platelet transfusion is contraindicated in TTP — it worsens microvascular thrombosis.",
            "C": "Antibiotics do not treat ADAMTS13 deficiency.",
            "D": "Steroids alone are insufficient; plasma exchange is the definitive treatment."
          }
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
          "rule": "TLS = post-chemo AKI with hyperK, hyperPO4, hyperuricemia, hypocalcemia → hydration + rasburicase",
          "highyield": "Tumour lysis syndrome",
          "hook": "Post-chemo AKI + hyperK + hyperPO4 + hyperuricemia = tumour lysis syndrome",
          "others": {
            "A": "Rhabdomyolysis has muscle injury and myoglobinuria, not the chemotherapy context.",
            "B": "Contrast nephropathy follows contrast exposure, not chemotherapy.",
            "C": "AIN is drug-hypersensitivity with eosinophilia, not this metabolic pattern."
          }
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
          "rule": "KDIGO AKI: Cr ≥0.3 mg/dL in 48h OR urine output <0.5 mL/kg/h for 6h",
          "highyield": "Acute kidney injury — definition",
          "hook": "AKI urine output criterion = <0.5 mL/kg/h for 6 hours",
          "others": {
            "A": "1 mL/kg/h is the normal threshold, not the AKI criterion.",
            "C": "0.3 mL/kg/h is too low; the criterion is 0.5.",
            "D": "2 mL/kg/h is polyuria, not oliguria."
          }
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
          "rule": "ATN = muddy brown casts + U Na >40 (prerenal: hyaline casts + U Na <20)",
          "highyield": "Acute tubular necrosis",
          "hook": "Hypotension + muddy brown casts + U Na >40 = ATN (intrinsic tubular injury)",
          "others": {
            "A": "Glomerular disease shows RBC casts and proteinuria, not muddy brown casts.",
            "B": "Vascular disease (e.g. atheroemboli) has different clinical features.",
            "D": "Post-renal causes show obstruction, not muddy brown casts."
          }
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
          "rule": "CKD stages: 3a = 45-59, 3b = 30-44, 4 = 15-29, 5 = <15",
          "highyield": "Chronic kidney disease — staging",
          "hook": "eGFR 35 = CKD stage 3b (30-44); <15 = stage 5",
          "others": {
            "A": "Stage 1 requires eGFR ≥90 with kidney damage.",
            "C": "Stage 2 is eGFR 60-89.",
            "D": "Stage 5 is eGFR <15 (kidney failure)."
          }
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
          "rule": "ADPKD = bilateral cysts + HTN + haematuria + berry aneurysms (AD inheritance)",
          "highyield": "Polycystic kidney disease",
          "hook": "Bilateral cysts + HTN + berry aneurysm family history = ADPKD (screen family, control BP)",
          "others": {
            "A": "Simple cysts are asymptomatic, not associated with HTN or aneurysm family history.",
            "C": "Reflux nephropathy causes scarring, not multiple bilateral cysts.",
            "D": "Medullary sponge kidney has medullary cysts, not the systemic associations."
          }
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
          "rule": "ACEi Cr rise >30% or flash pulmonary oedema = bilateral RAS (stop ACEi)",
          "highyield": "Renovascular disease",
          "hook": "Flash pulmonary oedema + ACEi Cr rise >30% = bilateral renal artery stenosis",
          "others": {
            "A": "A benign ACEi rise is <30% and stabilises; >30% suggests bilateral RAS.",
            "B": "Contrast nephropathy requires contrast exposure, not ACEi.",
            "D": "AIN has eosinophilia and drug allergy features, not this pattern."
          }
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
          "rule": "Uraemic bleeding (normal platelet count) → desmopressin; dialysis also helps",
          "highyield": "Uraemic bleeding",
          "hook": "CKD bleeding + normal platelet count = uraemic platelet dysfunction → DDAVP",
          "others": {
            "B": "Warfarin worsens bleeding.",
            "C": "Platelet transfusion is for thrombocytopenia, not functional platelet dysfunction.",
            "D": "Vitamin K treats coagulopathy from liver disease/anticoagulants, not uraemic dysfunction."
          }
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
          "rule": "PD peritonitis = cloudy effluent → cell count/culture + empirical IP antibiotics",
          "highyield": "Peritoneal dialysis",
          "hook": "PD patient + cloudy effluent + pain = peritonitis → effluent studies + IP antibiotics",
          "others": {
            "A": "Catheter removal is reserved for refractory, fungal, or tunnel infections.",
            "B": "Permanent switch to haemodialysis is not first-line.",
            "D": "Observation delays treatment of a potentially serious infection."
          }
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
          "rule": "AV fistula preferred for long-term haemodialysis (lowest infection/thrombosis)",
          "highyield": "Haemodialysis access",
          "hook": "Long-term dialysis access = AV fistula (lowest infection, best patency)",
          "others": {
            "B": "Catheters have the highest infection risk and are for urgent use only.",
            "C": "Non-tunneled femoral catheters are short-term emergency access.",
            "D": "AV grafts are second-line to fistulas (higher thrombosis)."
          }
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
          "rule": "CKD diet: restrict phosphate, potassium, sodium; moderate protein (not high)",
          "highyield": "Chronic kidney disease — dietary management",
          "hook": "CKD stage 4 diet = restrict phosphate + potassium (+ moderate protein, low sodium)",
          "others": {
            "B": "High protein increases uraemic load and is harmful in CKD.",
            "C": "Carbohydrate restriction is not the priority in CKD.",
            "D": "Potassium must be restricted, not increased, in advanced CKD."
          }
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
          "rule": "Hypertensive nephrosclerosis = long-standing HTN + slow CKD + mild proteinuria + bland sediment",
          "highyield": "Hypertensive nephrosclerosis",
          "hook": "Long-standing HTN + slow decline + <1 g/day proteinuria = hypertensive nephrosclerosis",
          "others": {
            "A": "Diabetic nephropathy has heavier proteinuria and diabetic retinopathy.",
            "B": "Membranous nephropathy is nephrotic-range proteinuria.",
            "D": "IgA nephropathy has haematuria with URTI episodes."
          }
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
          "rule": "HSP = palpable purpura + abdominal pain + arthralgia + renal involvement (IgA vasculitis)",
          "highyield": "IgA vasculitis (Henoch-Schönlein purpura)",
          "hook": "Palpable purpura + abdominal pain + arthralgia + haematuria = HSP",
          "others": {
            "B": "ITP causes petechiae/bruising with thrombocytopenia, not palpable purpura or arthritis.",
            "C": "Meningococcaemia causes a petechial rash with shock, not this tetrad.",
            "D": "Acute leukaemia presents with cytopenias and blasts, not purpura + arthralgia."
          }
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
          "rule": "GPA = ENT + lung + kidney + c-ANCA (PR3); treat with cyclophosphamide/rituximab + steroids",
          "highyield": "Granulomatosis with polyangiitis",
          "hook": "Sinusitis + haemoptysis + RPGN = GPA → c-ANCA (PR3)",
          "others": {
            "B": "p-ANCA/MPO is associated with microscopic polyangiitis, not GPA.",
            "C": "Anti-GBM is Goodpasture syndrome (linear IgG on biopsy).",
            "D": "Anti-dsDNA is lupus nephritis, with systemic SLE features."
          }
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
          "rule": "MPA = pauci-immune RPGN without ENT + p-ANCA (MPO); GPA has ENT + c-ANCA (PR3)",
          "highyield": "Microscopic polyangiitis",
          "hook": "Pauci-immune RPGN without ENT = MPA → p-ANCA (MPO)",
          "others": {
            "A": "c-ANCA/PR3 is GPA, which has upper respiratory involvement.",
            "C": "Anti-GBM is Goodpasture (linear deposits), not pauci-immune.",
            "D": "Anti-PLA2R is primary membranous nephropathy, not vasculitis."
          }
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
          "rule": "RPGN IF patterns: linear = anti-GBM, granular = immune complex, pauci-immune = ANCA",
          "highyield": "Rapidly progressive glomerulonephritis",
          "hook": "Linear IgG on GBM = anti-GBM disease; granular = immune complex; none = ANCA",
          "others": {
            "B": "IgA nephropathy shows mesangial IgA deposits, not linear GBM IgG.",
            "C": "Minimal change disease has negative immunofluorescence.",
            "D": "Membranous nephropathy shows granular subepithelial deposits."
          }
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
          "rule": "Nephrotic syndrome → hypercoagulable → renal vein thrombosis (flank pain + haematuria)",
          "highyield": "Nephrotic syndrome — complications",
          "hook": "Nephrotic (esp. membranous) + sudden flank pain + haematuria = renal vein thrombosis → anticoagulate",
          "others": {
            "A": "Renal artery stenosis causes hypertension/flash oedema, not sudden flank pain.",
            "B": "Papillary necrosis occurs with NSAIDs/analgesics or diabetes, not nephrotic syndrome.",
            "C": "UTI causes dysuria/fever, not sudden flank pain with gross haematuria in nephrotic."
          }
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
          "rule": "HIVAN = collapsing FSGS in untreated HIV → antiretroviral therapy",
          "highyield": "Focal segmental glomerulosclerosis",
          "hook": "HIV + collapsing FSGS + nephrotic proteinuria = HIVAN → ART",
          "others": {
            "A": "MCD has normal light microscopy and is steroid-responsive, not collapsing FSGS.",
            "C": "Amyloidosis shows Congo-red positive deposits, not collapsing FSGS.",
            "D": "Lupus nephritis has immune-complex deposits and systemic SLE features."
          }
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
          "rule": "Thin basement membrane = benign familial haematuria; Alport = haematuria + deafness + renal failure",
          "highyield": "Thin basement membrane disease",
          "hook": "Isolated haematuria + family history + normal everything = thin basement membrane disease",
          "others": {
            "B": "IgA nephropathy has episodic haematuria with URTI, not persistent isolated haematuria.",
            "C": "Alport syndrome has sensorineural deafness and progressive renal failure.",
            "D": "ADPKD has cysts and hypertension, not isolated haematuria."
          }
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
          "rule": "AA amyloidosis (chronic inflammation) → nephrotic + Congo red apple-green birefringence",
          "highyield": "Renal amyloidosis",
          "hook": "Chronic inflammation + nephrotic + Congo red apple-green = AA amyloidosis",
          "others": {
            "A": "Membranous nephropathy shows subepithelial spikes, not Congo red positivity.",
            "B": "Diabetic nephropathy shows Kimmelstiel-Wilson nodules.",
            "C": "FSGS shows segmental sclerosis, not amyloid deposition."
          }
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
          "rule": "VUR → reflux nephropathy: recurrent UTIs + polar renal scarring + HTN",
          "highyield": "Reflux nephropathy",
          "hook": "Recurrent UTIs + HTN + polar scarring = vesicoureteral reflux (reflux nephropathy)",
          "others": {
            "A": "Posterior urethral valves cause obstruction in male infants, not polar scarring.",
            "B": "Renal artery stenosis causes hypertension without recurrent UTIs.",
            "C": "ADPKD causes cysts, not polar scarring."
          }
        }
      }
    ]
  },
  {
    "id": "urology",
    "name": "Renal Stones — Calcium Oxalate Nephrolithiasis",
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
          "rule": "Calcium oxalate = most common (80%) renal stone; radio-opaque; hydration + thiazide for prevention",
          "highyield": "Surgery — Urology",
          "hook": "Most common stone = calcium oxalate (radio-opaque); only uric acid/cystine are radiolucent",
          "others": {
            "B": "Uric acid is radiolucent and only ~5-10% of stones.",
            "C": "Cystine stones are rare (<1%) and hereditary.",
            "D": "Struvite (triple phosphate) occurs in infected urine, not the most common."
          }
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
          "rule": "Uric acid stone = radiolucent + gout → urine alkalinization (K-citrate) + xanthine oxidase inhibitor",
          "highyield": "Surgery — Urology",
          "hook": "Gout + radiolucent stone = uric acid → alkalinize urine (not thiazide)",
          "others": {
            "B": "Calcium oxalate is radio-opaque; thiazide is for hypercalciuric stones, not uric acid.",
            "C": "Struvite requires stone removal plus antibiotics, not antibiotics alone.",
            "D": "Cystine needs more than hydration (penicillamine/captopril + alkalinization)."
          }
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
          "rule": "Cystinuria = AR, hexagon crystals; treat with hydration + penicillamine/captopril + alkalinization",
          "highyield": "Surgery — Urology",
          "hook": "Hexagonal crystals = cystine (AR cystinuria) → hydration + penicillamine + alkalinization",
          "others": {
            "A": "Cystinuria is autosomal RECESSIVE, not X-linked; allopurinol is for uric acid stones.",
            "B": "It is not autosomal dominant; thiazide is for calcium stones.",
            "D": "It is not mitochondrial; hydration alone is insufficient."
          }
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
          "rule": "Enteric hyperoxaluria: fat malabsorption → free oxalate absorbed → Ca oxalate stones (Crohn, bariatric)",
          "highyield": "Surgery — Urology",
          "hook": "Fat malabsorption (Crohn/resection) → enteric hyperoxaluria → calcium oxalate stones",
          "others": {
            "B": "Primary HPT causes hypercalciuria but not specifically in the setting of ileal resection.",
            "C": "Urate overproduction causes uric acid, not calcium oxalate, stones.",
            "D": "RTA causes calcium phosphate stones, not this post-resection picture."
          }
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
          "rule": "Primary HPT → hypercalciuria → calcium stones (high Ca, low PO4, high PTH)",
          "highyield": "Medicine — Hyperparathyroidism",
          "hook": "Primary HPT + stones = calcium stones (high Ca/low PO4/high PTH)",
          "others": {
            "A": "Uric acid stones occur with hyperuricaemia, not hypercalcaemia/low phosphate.",
            "B": "Cystine stones are hereditary, not HPT-related.",
            "D": "Struvite stones occur in infected alkaline urine, not HPT."
          }
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
          "rule": "RCC = adult painless haematuria + flank mass + paraneoplastic (polycythaemia); smoking; nephrectomy",
          "highyield": "Surgery — Urology",
          "hook": "Adult painless haematuria + flank mass + renal vein = RCC (smoking risk)",
          "others": {
            "A": "TCC of the renal pelvis causes haematuria but arises from urothelium, not a parenchymal mass with venous extension.",
            "C": "Wilms tumour occurs in children <5 years, not adults.",
            "D": "Angiomyolipoma is benign, often in tuberous sclerosis, and fat-containing."
          }
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
          "rule": "Wilms = nephroblastoma, child <5, smooth unilateral abdominal mass, WT1; nephrectomy + chemo",
          "highyield": "Paediatrics — Wilms tumour",
          "hook": "Child <5 + smooth unilateral mass = Wilms; neuroblastoma is midline/invasive",
          "others": {
            "A": "Neuroblastoma is typically midline, invasive, and crosses the midline; often with opsoclonus.",
            "B": "RCC is an adult tumour.",
            "C": "Hydronephrosis is a cystic, fluctuant swelling, not a solid smooth mass."
          }
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
          "rule": "Upper-tract TCC = smoker + haematuria + pelvic filling defect; nephroureterectomy",
          "highyield": "Surgery — Urology",
          "hook": "Smoker + haematuria + pelvic filling defect = upper-tract TCC (not RCC)",
          "others": {
            "B": "RCC would show a parenchymal mass, not a mucosal filling defect, and often has venous extension.",
            "C": "A stone would show a radiopaque/computed filling defect but with colic, not a smooth mucosal lesion.",
            "D": "Renal TB causes sterile pyuria and irregular calyces, not a discrete filling defect."
          }
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
          "rule": "Testicular GCT: AFP↑ = non-seminoma (seminoma has NORMAL AFP, may raise hCG)",
          "highyield": "Surgery — Urology",
          "hook": "Elevated AFP = non-seminomatous GCT; pure seminoma has normal AFP",
          "others": {
            "A": "Pure seminoma has a NORMAL AFP; an elevated AFP excludes pure seminoma.",
            "B": "Leydig cell tumours are sex-cord stromal, not germ cell, and don't raise AFP.",
            "D": "Lymphoma occurs in older men and is bilateral; AFP is not elevated."
          }
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
          "rule": "Undescended testis = infertility + germ-cell cancer risk; orchiopexy before puberty",
          "highyield": "Paediatrics — Cryptorchidism",
          "hook": "Cryptorchidism → infertility + cancer risk; orchiopexy before puberty (not observe/orchiectomy)",
          "others": {
            "A": "Observation alone misses the cancer/infertility risk; fixation is needed.",
            "B": "Orchiectomy is not indicated in childhood cryptorchidism.",
            "D": "Hormones do not remove the malignant potential."
          }
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
          "rule": "Varicocele: left common (infertility); new RIGHT-sided in adult = suspect RCC (venous obstruction)",
          "highyield": "Surgery — Urology",
          "hook": "Left varicocele = benign infertility; NEW right varicocele in adult = RCC",
          "others": {
            "A": "Varicoceles are overwhelmingly left-sided; right-sided in adults warrants RCC workup.",
            "B": "Hydrocele transilluminates and is a fluid collection, not a 'bag of worms'.",
            "C": "Epididymal cyst is a separate, smooth nodule above the testis."
          }
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
          "rule": "Male infertility: semen analysis; varicocele repair is a reversible cause; testosterone worsens it",
          "highyield": "Surgery — Urology",
          "hook": "Male infertility: semen analysis first; fix varicocele; avoid testosterone (worsens)",
          "others": {
            "A": "IVF without basic evaluation/treatment of reversible causes is premature.",
            "C": "Exogenous testosterone suppresses the HPG axis and reduces sperm production.",
            "D": "Prostate biopsy is for suspected prostate cancer, not infertility."
          }
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
          "rule": "Phimosis = tight foreskin (can't retract); paraphimosis = retracted foreskin trapped (urgent)",
          "highyield": "Surgery — Urology",
          "hook": "Phimosis = cannot retract; paraphimosis = retracted foreskin trapped (urgent reduction)",
          "others": {
            "A": "The pairing is reversed — inability to retract is phimosis, not paraphimosis.",
            "C": "They are distinct entities.",
            "D": "They are distinct entities."
          }
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
          "rule": "Penile SCC = glans ulcer, HPV + phimosis/poor hygiene risk; infant circumcision protective",
          "highyield": "Surgery — Urology",
          "hook": "Non-healing glans ulcer + phimosis/HPV risk = penile SCC; infant circumcision protective",
          "others": {
            "B": "Circumcision in infancy is PROTECTIVE, not a risk factor.",
            "C": "Low-risk behaviour reduces, not increases, HPV-related risk.",
            "D": "Diabetes is not a primary risk factor for penile carcinoma."
          }
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
          "rule": "Peyronie = fibrous tunical plaque → curvature; distinct from fracture (trauma) and priapism",
          "highyield": "Surgery — Urology",
          "hook": "Palpable penile plaque + curvature = Peyronie disease (not fracture/priapism)",
          "others": {
            "A": "Penile fracture is acute trauma with sudden pain and a 'pop', not a chronic plaque.",
            "B": "Priapism is a sustained painful erection, not curvature with a plaque.",
            "C": "Balanitis is inflammation of the glans, not a tunical plaque."
          }
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
          "rule": "Acute bacterial prostatitis: fluoroquinolone (good prostatic penetration); fever + tender prostate",
          "highyield": "Medicine — Urology",
          "hook": "Acute prostatitis = fluoroquinolone (Gram-negative cover, tissue penetration)",
          "others": {
            "A": "Amoxicillin alone may not cover the typical Gram-negative organisms or penetrate prostate.",
            "B": "This is bacterial, not fungal.",
            "C": "Acyclovir is for viral (herpes), not bacterial prostatitis."
          }
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
          "rule": "Asymptomatic bacteriuria in pregnancy = treat (nitrofurantoin/cephalexin); reduces pyelonephritis risk",
          "highyield": "Obstetrics — Urinary tract infection",
          "hook": "Pregnancy + asymptomatic bacteriuria = treat (nitrofurantoin/cephalexin); prevents pyelonephritis",
          "others": {
            "B": "Untreated bacteriuria risks pyelonephritis and preterm birth.",
            "C": "IV antibiotics are not needed for asymptomatic bacteriuria; oral suffices.",
            "D": "Waiting until term misses the window for prevention."
          }
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
          "rule": "Acute pyelonephritis: E. coli is the most common pathogen (ascending faecal flora, nitrite+)",
          "highyield": "Medicine — Urinary tract infection",
          "hook": "Pyelonephritis/UTI = E. coli (~80-90%); nitrite-positive",
          "others": {
            "A": "S. aureus implies haematogenous seeding, not typical ascending pyelonephritis.",
            "C": "Pseudomonas suggests hospital/ catheter-associated infection.",
            "D": "Candida suggests fungal/ catheter-associated infection, not routine pyelonephritis."
          }
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
          "rule": "Urosepsis causing septic shock: antibiotics + vasopressors (noradrenaline) + source control",
          "highyield": "Medicine — Sepsis",
          "hook": "Urosepsis + hypotension + lactate>2 = septic shock → antibiotics + vasopressors + source control",
          "others": {
            "A": "Oral antibiotics and observation are unsafe in septic shock.",
            "B": "Catheter removal alone does not treat shock.",
            "D": "Fluids alone without antibiotics/vasopressors fail in septic shock."
          }
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
          "rule": "Asymptomatic bacteriuria: treat in PREGNANCY and before urologic procedures; not in elderly/healthy",
          "highyield": "Medicine — Urinary tract infection",
          "hook": "Treat ASB only in pregnancy & pre-urologic procedure; not in elderly/healthy",
          "others": {
            "A": "Healthy postmenopausal women do not benefit from treating ASB.",
            "C": "Elderly/nursing-home residents should not be treated for ASB routinely.",
            "D": "A young non-pregnant woman with ASB does not require treatment."
          }
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
          "rule": "Neurogenic bladder (SCI): clean intermittent catheterization protects upper tracts; avoid permanent indwelling",
          "highyield": "Medicine — Neurogenic bladder",
          "hook": "SCI neurogenic bladder = clean intermittent self-catheterization (not permanent indwelling)",
          "others": {
            "A": "Permanent indwelling catheters raise infection and stone risk; CISC is preferred.",
            "B": "Fluid restriction does not correct incomplete emptying.",
            "C": "Anticholinergics without drainage worsen retention and pressures."
          }
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
          "rule": "Autonomic dysreflexia: SCI above T6 + HTN/headache/sweating; bladder distension is top trigger",
          "highyield": "Medicine — Spinal cord injury",
          "hook": "Autonomic dysreflexia (SCI above T6) → bladder distension is the common trigger",
          "others": {
            "A": "Limb fracture is an unusual trigger; bladder/bowel are common.",
            "B": "Hypoglycaemia does not cause this hypertensive pattern.",
            "C": "PE causes hypoxia/hypotension, not this sympathetic surge."
          }
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
          "rule": "Overflow incontinence = chronic retention → dribbling + palpable bladder (BPH, neurogenic)",
          "highyield": "Medicine — Urinary incontinence",
          "hook": "Dribbling + palpable bladder = overflow incontinence (chronic retention)",
          "others": {
            "B": "Stress incontinence is leakage on coughing/exertion with an empty bladder.",
            "C": "Urge incontinence is a sudden compelling desire with detrusor overactivity.",
            "D": "Functional incontinence is environmental/cognitive inability to reach a toilet."
          }
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
          "rule": "Urethral stricture: obstructive voiding from scarring (catheter/trauma/STD); dilation/urethroplasty",
          "highyield": "Surgery — Urology",
          "hook": "Weak stream + palpable bladder after catheter/STD = urethral stricture",
          "others": {
            "A": "Overactive bladder presents with urgency/frequency, not weak stream/retention.",
            "C": "UTI causes dysuria/frequency, not a weak mechanical stream with retention.",
            "D": "Stones cause colic/haematuria, not a progressive weak stream."
          }
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
          "rule": "Ureter runs UNDER the uterine artery ('water under the bridge'); distal third = common iatrogenic injury site",
          "highyield": "Surgery — Urology / Gynaecology",
          "hook": "Hysterectomy ureter injury = at uterine artery crossing (distal third)",
          "others": {
            "A": "The renal hilum is not the typical site in hysterectomy.",
            "B": "The ureterovesical junction is a site but less common than the uterine artery crossing in pelvic surgery.",
            "D": "The psoas/lateral abdominal wall course is retroperitoneal and less often injured in hysterectomy."
          }
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
