/* Grand Mock Five Layer Breakdowns · data · generated from NRE Prep RTF */
const SUBJECTS = [
  {
    "id": "grand-mock",
    "name": "Grand Mock — Five Layer Breakdowns",
    "questions": [
      {
        "id": "GM-1",
        "stem": "A 58-year-old male with hypertension and diabetes is started on enalapril. A few weeks later he complains of a persistent dry cough and facial swelling. Which mediator is primarily responsible for this side effect?",
        "options": [
          "Angiotensin II",
          "Bradykinin",
          "Aldosterone",
          "Renin"
        ],
        "answer": 1,
        "layers": {
          "concept": "ACE inhibitor–induced cough and angioedema",
          "discriminator": "Dry cough + facial swelling on an ACE inhibitor = bradykinin accumulation, because ACE (kininase II) normally breaks bradykinin down.",
          "trap": "Picking angiotensin II because ACE inhibitors 'act on' it — reduced angiotensin II explains the BP drop, not the cough.",
          "rule": "ACEi side effects from bradykinin = cough + angioedema. Switch to an ARB (losartan), which spares bradykinin.",
          "others": {
            "A": "Angiotensin II levels fall on ACEi; that causes vasodilation and lower BP, not cough or swelling.",
            "C": "Aldosterone falls on ACEi, causing hyperkalaemia — not cough or angioedema.",
            "D": "Renin rises (loss of negative feedback) but has no role in cough or angioedema."
          }
        }
      },
      {
        "id": "GM-2",
        "stem": "A 45-year-old with Type 1 diabetes wants to control postprandial glucose spikes. Which insulin is most appropriate immediately before a meal?",
        "options": [
          "Insulin glargine",
          "Regular insulin",
          "Insulin lispro",
          "NPH insulin"
        ],
        "answer": 2,
        "layers": {
          "concept": "Rapid-acting (prandial) insulin analogues",
          "discriminator": "'Immediately before a meal' = onset in 5–15 min, which only rapid-acting analogues (lispro, aspart, glulisine) deliver.",
          "trap": "Choosing regular insulin because it is 'short-acting' — it needs 30–45 min before eating.",
          "rule": "Bolus at mealtime = lispro/aspart/glulisine (0–15 min pre-meal); basal = glargine/detemir/degludec.",
          "others": {
            "A": "Glargine is a peakless 24-h basal insulin; it cannot cover a meal spike.",
            "B": "Regular insulin onset is 30–60 min, so it must be given ~30 min before the meal, not immediately.",
            "D": "NPH is intermediate-acting (onset 1–2 h, peak 4–10 h) — too slow for prandial control."
          }
        }
      },
      {
        "id": "GM-3",
        "stem": "A 35-year-old on standard ATT (isoniazid, rifampicin, pyrazinamide, ethambutol) develops decreased visual acuity and red-green colour confusion after two months. Which drug is responsible?",
        "options": [
          "Isoniazid",
          "Rifampicin",
          "Pyrazinamide",
          "Ethambutol"
        ],
        "answer": 3,
        "layers": {
          "concept": "Ethambutol optic (retrobulbar) neuritis",
          "discriminator": "Red-green colour blindness + reduced acuity on ATT is the signature of ethambutol.",
          "trap": "Isoniazid can cause optic neuritis rarely, but its classic toxicity is peripheral neuropathy.",
          "rule": "E = Eyes. Check baseline visual acuity and colour vision; stop ethambutol if vision changes.",
          "others": {
            "A": "Isoniazid → peripheral neuropathy (B6 deficiency) and hepatitis; not classic colour-vision loss.",
            "B": "Rifampicin → orange secretions, hepatitis, enzyme induction, flu-like syndrome.",
            "C": "Pyrazinamide → hepatotoxicity and hyperuricaemia/gout."
          }
        }
      },
      {
        "id": "GM-4",
        "stem": "Which drug is relatively contraindicated in a patient with angina and a history of migraine?",
        "options": [
          "Amlodipine",
          "Metoprolol",
          "Nitroglycerin",
          "Verapamil"
        ],
        "answer": 2,
        "layers": {
          "concept": "Nitrate-induced headache via cerebral vasodilation",
          "discriminator": "Nitrates dilate meningeal/cerebral vessels and reliably trigger throbbing headache — a migraine sufferer is the worst candidate.",
          "trap": "Picking metoprolol because beta-blockers have 'contraindications' — but beta-blockers are actually migraine prophylaxis.",
          "rule": "Angina + migraine: prefer beta-blocker (propranolol/metoprolol) or verapamil — both also prevent migraine. Avoid nitrates.",
          "others": {
            "A": "Amlodipine is an acceptable antianginal; flushing/headache are milder and it is not specifically contraindicated.",
            "B": "Beta-blockers treat angina AND prevent migraine — an ideal choice, not a contraindication.",
            "D": "Verapamil is used for migraine/cluster prophylaxis and angina — beneficial here."
          }
        }
      },
      {
        "id": "GM-5",
        "stem": "A 20-year-old with severe acute asthma (cannot complete sentences) remains severe after oxygen, nebulised salbutamol and IV corticosteroids. Most appropriate next drug?",
        "options": [
          "Oral montelukast",
          "IV propranolol",
          "Inhaled sodium cromoglycate",
          "IV magnesium sulfate"
        ],
        "answer": 3,
        "layers": {
          "concept": "Escalation in acute severe asthma",
          "discriminator": "Failure of first-line (O₂ + SABA + steroids) in an acute attack → IV MgSO₄ (2 g over 20 min) as bronchodilator add-on.",
          "trap": "Choosing a controller drug (montelukast, cromoglycate) — they have no role in rescuing an acute attack.",
          "rule": "Acute severe asthma ladder: O₂ → SABA + ipratropium → steroids → IV MgSO₄ → IV aminophylline/salbutamol → ICU/intubation.",
          "others": {
            "A": "Montelukast is a maintenance leukotriene antagonist; onset too slow and not used in acute rescue.",
            "B": "Propranolol (non-selective β-blocker) causes bronchospasm — dangerous in asthma.",
            "C": "Cromoglycate is a prophylactic mast-cell stabiliser; useless once an attack is underway."
          }
        }
      },
      {
        "id": "GM-6",
        "stem": "A patient receiving a rapid IV vancomycin infusion develops sudden flushing of the face and upper body (Red Man syndrome). Primary cause?",
        "options": [
          "IgE-mediated allergy",
          "Histamine release",
          "Kidney damage",
          "Liver toxicity"
        ],
        "answer": 1,
        "layers": {
          "concept": "Red Man syndrome — infusion-rate reaction",
          "discriminator": "Linked to RAPID infusion = direct, non-immunological mast-cell degranulation releasing histamine.",
          "trap": "Calling it an IgE allergy — it is anaphylactoid, needs no prior sensitisation and is not a true allergy.",
          "rule": "Prevent by infusing over ≥60 min and pre-treating with antihistamines; it is not a reason to label the patient 'vancomycin allergic'.",
          "others": {
            "A": "IgE allergy requires prior sensitisation; Red Man is rate-related and occurs on first dose.",
            "C": "Nephrotoxicity is a vancomycin side effect but causes rising creatinine, not acute flushing.",
            "D": "Vancomycin is not meaningfully hepatotoxic, and liver injury doesn't cause flushing."
          }
        }
      },
      {
        "id": "GM-7",
        "stem": "A patient on IV heparin receives an overdose and bleeds heavily. Specific antidote?",
        "options": [
          "Vitamin K",
          "Protamine sulfate",
          "Fresh frozen plasma",
          "Tranexamic acid"
        ],
        "answer": 1,
        "layers": {
          "concept": "Heparin reversal",
          "discriminator": "Protamine is strongly basic (positive) and binds the acidic (negative) heparin, neutralising it.",
          "trap": "Swapping heparin and warfarin antidotes — vitamin K reverses warfarin.",
          "rule": "Heparin → protamine (1 mg per ~100 units). Warfarin → vitamin K ± PCC/FFP. Dabigatran → idarucizumab.",
          "others": {
            "A": "Vitamin K reverses warfarin by restoring factors II, VII, IX, X; no effect on heparin.",
            "C": "FFP supplies clotting factors but does not neutralise heparin; not a specific antidote.",
            "D": "Tranexamic acid is an antifibrinolytic; does not reverse heparin's antithrombin effect."
          }
        }
      },
      {
        "id": "GM-8",
        "stem": "A patient presents after an intentional paracetamol overdose. Specific antidote of choice?",
        "options": [
          "Naloxone",
          "N-acetylcysteine",
          "Flumazenil",
          "Protamine sulfate"
        ],
        "answer": 1,
        "layers": {
          "concept": "Paracetamol (acetaminophen) poisoning",
          "discriminator": "Toxic metabolite NAPQI is detoxified by glutathione; NAC replenishes glutathione.",
          "trap": "Mixing up toxin–antidote pairs that sit side by side in the options.",
          "rule": "Paracetamol → NAC (most effective within 8 h, use the treatment nomogram). Opioid → naloxone. Benzodiazepine → flumazenil. Heparin → protamine.",
          "others": {
            "A": "Naloxone reverses opioids.",
            "C": "Flumazenil reverses benzodiazepines.",
            "D": "Protamine reverses heparin."
          }
        }
      },
      {
        "id": "GM-9",
        "stem": "A 55-year-old with Type 2 diabetes is prescribed empagliflozin. Primary mechanism of action?",
        "options": [
          "Inhibits DPP-4",
          "Activates GLP-1 receptors",
          "Inhibits SGLT2 in the proximal renal tubule",
          "Activates PPAR-gamma"
        ],
        "answer": 2,
        "layers": {
          "concept": "SGLT2 inhibitors (-gliflozins)",
          "discriminator": "The '-gliflozin' suffix = SGLT2 inhibitor → glycosuria by blocking glucose reabsorption in the PCT.",
          "trap": "Confusing suffixes: -gliptin (DPP-4), -glutide (GLP-1), -glitazone (PPAR-γ).",
          "rule": "Gliflozins: glycosuria, weight loss, CV/renal benefit; side effects UTI/genital mycotic infection, euglycaemic DKA.",
          "others": {
            "A": "DPP-4 inhibitors are sitagliptin/vildagliptin (-gliptins).",
            "B": "GLP-1 agonists are liraglutide/semaglutide (-glutides), given by injection.",
            "D": "PPAR-γ agonists are pioglitazone/rosiglitazone (-glitazones)."
          }
        }
      },
      {
        "id": "GM-10",
        "stem": "All of the following regarding theophylline are true EXCEPT:",
        "options": [
          "Narrow spectrum (narrow therapeutic index)",
          "Inhibits PDE",
          "Effect increased by adenosine",
          "Can cause coma"
        ],
        "answer": 2,
        "layers": {
          "concept": "Theophylline pharmacology",
          "discriminator": "Theophylline is an adenosine-receptor ANTAGONIST, so adenosine opposes rather than enhances its effect.",
          "trap": "Reading 'narrow spectrum' and marking A false — the intended meaning is its narrow therapeutic window.",
          "rule": "Theophylline: non-selective PDE inhibitor + adenosine antagonist; narrow TI; toxicity = arrhythmias, seizures, coma; levels rise with CYP450 inhibitors (erythromycin, ciprofloxacin, cimetidine).",
          "others": {
            "A": "True — therapeutic range is tight (10–20 mg/L), so toxicity is common.",
            "B": "True — it non-selectively inhibits phosphodiesterases, raising cAMP.",
            "D": "True — severe toxicity causes seizures, arrhythmias and coma."
          }
        }
      },
      {
        "id": "GM-11",
        "stem": "A 60-year-old started on atorvastatin develops severe muscle pain, tenderness and weakness with markedly raised CK. Most likely adverse effect?",
        "options": [
          "Hepatotoxicity",
          "Myopathy",
          "Nephrotoxicity",
          "Hypoglycaemia"
        ],
        "answer": 1,
        "layers": {
          "concept": "Statin-associated myopathy",
          "discriminator": "Muscle pain + weakness + high CK on a statin = myopathy (risk of rhabdomyolysis).",
          "trap": "Picking hepatotoxicity because LFTs are monitored on statins — but the clue here is CK.",
          "rule": "Statin + myalgia → check CK; CK >10× ULN → stop statin. Risk ↑ with fibrates (gemfibrozil), macrolides, azoles.",
          "others": {
            "A": "Hepatotoxicity presents with raised transaminases, not raised CK and muscle weakness.",
            "C": "Kidney injury can follow rhabdomyolysis but is a downstream complication, not the primary adverse effect.",
            "D": "Statins do not cause hypoglycaemia (they slightly raise diabetes risk)."
          }
        }
      },
      {
        "id": "GM-12",
        "stem": "A 22-year-old has blurred vision, eye strain and headaches when reading. The corneal curvature is unequal so light focuses at multiple points. Most appropriate lens?",
        "options": [
          "Convex lens",
          "Concave lens",
          "Cylindrical lens",
          "Bifocal lens"
        ],
        "answer": 2,
        "layers": {
          "concept": "Astigmatism",
          "discriminator": "Unequal corneal curvature → different meridians focus at different points = astigmatism → cylindrical lens.",
          "trap": "Choosing convex/concave, which correct spherical errors only.",
          "rule": "Myopia → concave. Hypermetropia → convex. Astigmatism → cylindrical (or toric). Presbyopia → bifocal/progressive.",
          "others": {
            "A": "Convex lenses correct hypermetropia (focus behind the retina).",
            "B": "Concave lenses correct myopia (focus in front of the retina).",
            "D": "Bifocals are for presbyopia in older adults."
          }
        }
      },
      {
        "id": "GM-13",
        "stem": "A 28-year-old has a painless, firm lump on the upper eyelid for 3 weeks with no redness or tenderness. Most likely diagnosis?",
        "options": [
          "Hordeolum",
          "Chalazion",
          "Blepharitis",
          "Dacryocystitis"
        ],
        "answer": 1,
        "layers": {
          "concept": "Chalazion (meibomian lipogranuloma)",
          "discriminator": "PAINLESS + firm + weeks-long = chalazion. Painful + acute + red = hordeolum.",
          "trap": "Hordeolum is also an eyelid lump, but it is acutely painful and inflamed.",
          "rule": "Chalazion: warm compresses; incision and curettage if persistent. Recurrent chalazion in elderly → biopsy (sebaceous carcinoma).",
          "others": {
            "A": "Hordeolum (stye) is an acute painful infected gland.",
            "C": "Blepharitis is diffuse lid-margin inflammation with crusting, not a discrete lump.",
            "D": "Dacryocystitis is a painful swelling at the medial canthus (lacrimal sac), not upper lid."
          }
        }
      },
      {
        "id": "GM-14",
        "stem": "A 65-year-old has primary open-angle glaucoma. Which topical first-line drug works by increasing aqueous outflow?",
        "options": [
          "Timolol",
          "Latanoprost",
          "Pilocarpine",
          "Atropine"
        ],
        "answer": 1,
        "layers": {
          "concept": "Prostaglandin analogues in POAG",
          "discriminator": "First-line + increases OUTFLOW (uveoscleral) = prostaglandin analogue (latanoprost).",
          "trap": "Timolol is also first-line, but it works by DECREASING aqueous production.",
          "rule": "Latanoprost → ↑ uveoscleral outflow (side effects: iris darkening, lash growth). Timolol → ↓ production. Pilocarpine → ↑ trabecular outflow (miosis).",
          "others": {
            "A": "Timolol reduces aqueous production; it doesn't increase outflow.",
            "C": "Pilocarpine increases trabecular outflow but is not first-line for POAG (side effects, frequent dosing).",
            "D": "Atropine dilates the pupil and can precipitate angle closure — contraindicated."
          }
        }
      },
      {
        "id": "GM-15",
        "stem": "A patient with diabetes for 15 years has decreased vision in both eyes, dull foveal reflex and macular oedema on OCT. Management?",
        "options": [
          "Panretinal photocoagulation",
          "Acetazolamide",
          "Intravitreal anti-VEGF",
          "Oral steroids"
        ],
        "answer": 2,
        "layers": {
          "concept": "Centre-involving diabetic macular oedema (DMO)",
          "discriminator": "OCT-confirmed macular oedema with vision loss = intravitreal anti-VEGF (ranibizumab, aflibercept, bevacizumab).",
          "trap": "PRP is for proliferative retinopathy (neovascularisation), not macular oedema.",
          "rule": "DMO → anti-VEGF first-line (steroid implants/focal laser second-line). PDR → PRP ± anti-VEGF.",
          "others": {
            "A": "PRP treats proliferative disease and can worsen macular oedema.",
            "B": "Acetazolamide lowers IOP; no role in diabetic macular oedema.",
            "D": "Oral steroids are not used; steroids for DMO are intravitreal (dexamethasone implant) and second-line."
          }
        }
      },
      {
        "id": "GM-16",
        "stem": "A 30-year-old has a painful red left eye, severe photophobia and blurred vision. There is circumcorneal injection and a constricted pupil. Diagnosis?",
        "options": [
          "Acute conjunctivitis",
          "Acute anterior uveitis",
          "Acute angle-closure glaucoma",
          "Corneal abrasion"
        ],
        "answer": 1,
        "layers": {
          "concept": "Acute anterior uveitis (iritis)",
          "discriminator": "Circumcorneal (ciliary) flush + photophobia + SMALL pupil = anterior uveitis.",
          "trap": "Angle-closure glaucoma is also a painful red eye, but the pupil is mid-dilated and fixed.",
          "rule": "Red eye pupil clue: small irregular = uveitis; mid-dilated fixed = acute glaucoma; normal = conjunctivitis/abrasion. Treat uveitis with topical steroid + cycloplegic.",
          "others": {
            "A": "Conjunctivitis: peripheral injection, discharge, normal vision and pupil, little pain.",
            "C": "Angle closure: mid-dilated fixed pupil, hazy cornea, very high IOP, nausea/vomiting.",
            "D": "Corneal abrasion: history of trauma, foreign-body sensation, fluorescein staining; pupil normal."
          }
        }
      },
      {
        "id": "GM-17",
        "stem": "Which medication immediately lowers intraocular pressure in an attack of acute congestive glaucoma?",
        "options": [
          "Pilocarpine",
          "Timolol",
          "Mannitol",
          "Atropine"
        ],
        "answer": 2,
        "layers": {
          "concept": "Rapid IOP reduction in acute angle closure",
          "discriminator": "'Immediately' = IV hyperosmotic agent; mannitol dehydrates the vitreous within 30–60 min.",
          "trap": "Pilocarpine is part of treatment, but it is ineffective at very high IOP (ischaemic, paralysed sphincter) until pressure falls.",
          "rule": "Acute angle closure: IV acetazolamide + IV mannitol + topical timolol/apraclonidine → pilocarpine once IOP drops → definitive laser peripheral iridotomy.",
          "others": {
            "A": "Pilocarpine works only after IOP is partly reduced; it doesn't act immediately.",
            "B": "Timolol helps but acts slower and less powerfully than IV mannitol.",
            "D": "Atropine dilates the pupil and worsens angle closure — contraindicated."
          }
        }
      },
      {
        "id": "GM-18",
        "stem": "A newborn has a cystic lumbosacral swelling; the sac contains only meninges and CSF with no neural tissue. Diagnosis?",
        "options": [
          "Myelomeningocele",
          "Meningocele",
          "Spina bifida occulta",
          "Encephalocele"
        ],
        "answer": 1,
        "layers": {
          "concept": "Neural tube defects — content of the sac",
          "discriminator": "Meninges + CSF ONLY (no cord/roots) = meningocele.",
          "trap": "Myelomeningocele also has a sac, but it contains spinal cord/nerve roots.",
          "rule": "Occulta: no sac (tuft of hair/dimple). Meningocele: meninges + CSF. Myelomeningocele: + neural tissue (most common, with deficits). Folic acid prevents NTDs.",
          "others": {
            "A": "Myelomeningocele includes neural tissue and usually neurological deficit.",
            "C": "Spina bifida occulta has no herniated sac — just a vertebral arch defect.",
            "D": "Encephalocele is a cranial (occipital) herniation, not lumbosacral."
          }
        }
      },
      {
        "id": "GM-19",
        "stem": "A 6-year-old with a supracondylar humerus fracture cannot flex the index and middle fingers and has sensory loss over the palmar lateral 3½ digits. Which nerve is injured?",
        "options": [
          "Radial",
          "Axillary",
          "Ulnar",
          "Median"
        ],
        "answer": 3,
        "layers": {
          "concept": "Median nerve injury at the elbow",
          "discriminator": "Loss of index/middle finger flexion (pointing finger / hand of benediction) + palmar lateral 3½ digit numbness = median nerve.",
          "trap": "The ulnar nerve is near the elbow too, but it supplies the medial 1½ digits.",
          "rule": "Supracondylar fracture: median/AIN most commonly injured; brachial artery at risk (Volkmann ischaemic contracture).",
          "others": {
            "A": "Radial injury → wrist drop, dorsal first web space numbness.",
            "B": "Axillary injury follows shoulder dislocation/surgical neck fracture → deltoid weakness, regimental badge numbness.",
            "C": "Ulnar injury → claw of ring/little fingers, medial 1½ digit numbness."
          }
        }
      },
      {
        "id": "GM-20",
        "stem": "A patient with pontine haemorrhage has pinpoint pupils. Which artery is most likely damaged?",
        "options": [
          "Anterior cerebral",
          "Basilar",
          "Middle cerebral",
          "Posterior inferior cerebellar"
        ],
        "answer": 1,
        "layers": {
          "concept": "Blood supply of the pons",
          "discriminator": "The pons is supplied by pontine branches of the basilar artery; pontine bleed → disrupted sympathetic fibres → pinpoint pupils.",
          "trap": "PICA is posterior circulation too, but it supplies the lateral medulla and cerebellum.",
          "rule": "Pinpoint pupils + coma + hyperpyrexia = pontine haemorrhage (basilar territory). Differential: opioid overdose.",
          "others": {
            "A": "ACA supplies medial frontal/parietal cortex (leg area).",
            "C": "MCA supplies lateral cortex and internal capsule — not the brainstem.",
            "D": "PICA → lateral medullary (Wallenberg) syndrome."
          }
        }
      },
      {
        "id": "GM-21",
        "stem": "A 62-year-old with pericardial effusion undergoes pericardiocentesis via the intercostal space adjacent to the sternum. Which space?",
        "options": [
          "Right 4th",
          "Left 4th",
          "Right 5th",
          "Left 5th"
        ],
        "answer": 3,
        "layers": {
          "concept": "Parasternal approach for pericardiocentesis",
          "discriminator": "Left 5th (or 6th) intercostal space next to the sternum lies over the bare area of the pericardium where lung/pleura are absent (cardiac notch).",
          "trap": "Choosing the 4th space — the lung and pleura are more likely in the path there.",
          "rule": "Parasternal route: left 5th ICS, close to the sternum to avoid the internal thoracic artery (~1 cm lateral). Most common route overall is subxiphoid.",
          "others": {
            "A": "Right side would hit the right pleura/lung; no cardiac notch on the right.",
            "B": "Higher spaces risk the lung and pleura — the bare area is lower.",
            "C": "Right-sided approach risks the pleura and right atrium."
          }
        }
      },
      {
        "id": "GM-22",
        "stem": "A newborn has VSD, overriding aorta, pulmonary stenosis and RV hypertrophy. Which defect fits?",
        "options": [
          "Atrial septal defect",
          "DiGeorge syndrome",
          "Down's syndrome",
          "Tetralogy of Fallot"
        ],
        "answer": 3,
        "layers": {
          "concept": "Tetralogy of Fallot",
          "discriminator": "The four named features ARE the tetralogy — caused by anterosuperior displacement of the infundibular septum.",
          "trap": "DiGeorge is associated with ToF, but the question asks which defect these anomalies define.",
          "rule": "ToF: most common cyanotic CHD after infancy; boot-shaped heart; 'tet spells' relieved by squatting.",
          "others": {
            "A": "ASD is a single septal defect with fixed split S2, not these four features.",
            "B": "DiGeorge (22q11) is a syndrome associated with ToF/truncus, not the defect itself.",
            "C": "Down's is classically linked to AVSD (endocardial cushion defect)."
          }
        }
      },
      {
        "id": "GM-23",
        "stem": "The maxillary nerve (V2) passes through which skull opening?",
        "options": [
          "Foramen ovale",
          "Foramen spinosum",
          "Foramen rotundum",
          "Superior orbital fissure"
        ],
        "answer": 2,
        "layers": {
          "concept": "Trigeminal divisions and their foramina",
          "discriminator": "V2 → foramen rotundum (into pterygopalatine fossa).",
          "trap": "Foramen ovale is the neighbouring trigeminal exit but carries V3.",
          "rule": "'Standing Room Only': V1 Superior orbital fissure, V2 Rotundum, V3 Ovale.",
          "others": {
            "A": "Foramen ovale carries V3 (mandibular) and the lesser petrosal nerve.",
            "B": "Foramen spinosum carries the middle meningeal artery.",
            "D": "Superior orbital fissure carries V1, III, IV, VI and the superior ophthalmic vein."
          }
        }
      },
      {
        "id": "GM-24",
        "stem": "A 65-year-old has sudden weakness and sensory loss in the right leg, much more than arm or face, with urinary incontinence. Which artery is occluded?",
        "options": [
          "Middle cerebral",
          "Anterior cerebral",
          "Posterior cerebral",
          "Anterior inferior cerebellar"
        ],
        "answer": 1,
        "layers": {
          "concept": "ACA stroke",
          "discriminator": "Leg > arm/face + urinary incontinence = medial frontal lobe (paracentral lobule) = ACA.",
          "trap": "MCA is the most common stroke, but it gives face/arm > leg.",
          "rule": "ACA: contralateral leg, incontinence, abulia. MCA: face/arm, aphasia (dominant), neglect. PCA: homonymous hemianopia with macular sparing.",
          "others": {
            "A": "MCA spares the leg relatively; face and arm dominate.",
            "C": "PCA → visual field loss, not leg weakness.",
            "D": "AICA → lateral pontine syndrome (facial palsy, deafness, ataxia)."
          }
        }
      },
      {
        "id": "GM-25",
        "stem": "The appendicular artery is a direct branch of which artery?",
        "options": [
          "Right colic",
          "Middle colic",
          "Ileocolic",
          "Superior mesenteric"
        ],
        "answer": 2,
        "layers": {
          "concept": "Blood supply of the appendix",
          "discriminator": "Appendicular artery arises from the ileocolic artery (often its inferior/posterior caecal branch) — a branch of SMA.",
          "trap": "Choosing SMA — it is the parent trunk, not the DIRECT origin.",
          "rule": "Appendicular artery is an end artery in the mesoappendix → thrombosis causes gangrene/perforation in appendicitis.",
          "others": {
            "A": "Right colic supplies the ascending colon.",
            "B": "Middle colic supplies the transverse colon.",
            "D": "SMA gives off the ileocolic artery; the appendicular artery is not its direct branch."
          }
        }
      },
      {
        "id": "GM-26",
        "stem": "A 40-year-old with a stab wound to the anterior thigh cannot extend the knee and has an absent patellar reflex. Which nerve?",
        "options": [
          "Sciatic",
          "Obturator",
          "Femoral",
          "Tibial"
        ],
        "answer": 2,
        "layers": {
          "concept": "Femoral nerve injury",
          "discriminator": "Quadriceps paralysis (no knee extension) + lost knee jerk (L2–L4) = femoral nerve.",
          "trap": "Obturator is also anterior/medial thigh but supplies adductors.",
          "rule": "Femoral: knee extension, knee jerk, anterior thigh + medial leg (saphenous) sensation.",
          "others": {
            "A": "Sciatic → hamstrings and everything below the knee; ankle jerk lost.",
            "B": "Obturator → thigh adduction weakness, medial thigh numbness.",
            "D": "Tibial → plantar flexion loss, sole numbness, absent ankle jerk."
          }
        }
      },
      {
        "id": "GM-27",
        "stem": "Which cervical roots form the phrenic nerve?",
        "options": [
          "C1–C3",
          "C2–C4",
          "C3–C5",
          "C4–C6"
        ],
        "answer": 2,
        "layers": {
          "concept": "Phrenic nerve roots",
          "discriminator": "C3, C4, C5 (mainly C4).",
          "trap": "Off-by-one options; C2–C4 is the cervical plexus range.",
          "rule": "'C3, 4, 5 keeps the diaphragm alive.' Cord injury above C3 → ventilator dependence. Referred shoulder-tip pain via C4.",
          "others": {
            "A": "C1–C3 supply neck muscles/ansa cervicalis, not the diaphragm.",
            "B": "Misses C5 and includes C2.",
            "D": "C5–C6 are brachial plexus territory."
          }
        }
      },
      {
        "id": "GM-28",
        "stem": "A 60-year-old has sudden weakness of the right face and right arm with relative leg sparing. Which artery?",
        "options": [
          "Anterior cerebral",
          "Middle cerebral",
          "Posterior cerebral",
          "Vertebral"
        ],
        "answer": 1,
        "layers": {
          "concept": "MCA stroke",
          "discriminator": "Face + arm > leg = lateral motor cortex (MCA territory).",
          "trap": "Reversing the ACA/MCA homunculus pattern.",
          "rule": "Left MCA → right face/arm weakness + aphasia; right MCA → left weakness + neglect.",
          "others": {
            "A": "ACA: leg > arm/face.",
            "C": "PCA: homonymous hemianopia.",
            "D": "Vertebral: lateral medullary signs, crossed findings, vertigo."
          }
        }
      },
      {
        "id": "GM-29",
        "stem": "A 26-year-old has a missed period, lower abdominal pain and slight vaginal bleeding. Ultrasound shows the gestational sac in the fallopian tube. Diagnosis?",
        "options": [
          "Normal intrauterine pregnancy",
          "PID",
          "Ovarian cyst",
          "Ectopic pregnancy"
        ],
        "answer": 3,
        "layers": {
          "concept": "Tubal ectopic pregnancy",
          "discriminator": "Gestational sac seen OUTSIDE the uterus (tube) = ectopic.",
          "trap": "Overthinking — the imaging gives the diagnosis outright.",
          "rule": "Amenorrhoea + pain + bleeding = ectopic until proven otherwise. Most common site: ampulla. Stable → methotrexate/salpingostomy; unstable → laparotomy.",
          "others": {
            "A": "Intrauterine pregnancy has the sac in the uterine cavity.",
            "B": "PID gives fever, discharge, cervical motion tenderness — no gestational sac.",
            "C": "Ovarian cyst doesn't produce a tubal gestational sac."
          }
        }
      },
      {
        "id": "GM-30",
        "stem": "A 30-year-old at 28 weeks is diagnosed with gestational diabetes on OGTT. First-line management?",
        "options": [
          "Metformin",
          "Subcutaneous insulin",
          "Medical nutrition therapy and exercise",
          "Oral glibenclamide"
        ],
        "answer": 2,
        "layers": {
          "concept": "Step-wise management of GDM",
          "discriminator": "Newly diagnosed GDM without a severe level → start with diet and exercise for 1–2 weeks.",
          "trap": "Jumping to insulin because it is 'the safest drug in pregnancy' — it is the drug of choice, not the first step.",
          "rule": "GDM: diet/exercise → if targets not met, insulin (or metformin per NICE). Start insulin immediately if fasting glucose ≥7.0 mmol/L at diagnosis.",
          "others": {
            "A": "Metformin is added if lifestyle fails, not first.",
            "B": "Insulin is used if lifestyle fails or glucose is very high at diagnosis.",
            "D": "Glibenclamide crosses the placenta (neonatal hypoglycaemia); not first-line."
          }
        }
      },
      {
        "id": "GM-31",
        "stem": "A 22-year-old presents 48 hours after unprotected intercourse wanting to prevent pregnancy. Most appropriate emergency contraceptive pill?",
        "options": [
          "Mifepristone",
          "Levonorgestrel",
          "Misoprostol",
          "Medroxyprogesterone"
        ],
        "answer": 1,
        "layers": {
          "concept": "Emergency contraception",
          "discriminator": "Within 72 h → levonorgestrel 1.5 mg single dose (delays ovulation).",
          "trap": "Mifepristone and misoprostol are abortifacients, not standard ECPs.",
          "rule": "LNG ≤72 h; ulipristal ≤120 h; copper IUD ≤5 days (most effective).",
          "others": {
            "A": "Mifepristone is used for medical termination (low-dose EC exists in some countries but is not the standard choice).",
            "C": "Misoprostol is a prostaglandin for termination/PPH; not a contraceptive.",
            "D": "Medroxyprogesterone (Depo) is a long-acting injection, not emergency contraception."
          }
        }
      },
      {
        "id": "GM-32",
        "stem": "At what gestational age is the mid-trimester anomaly (TIFFA) scan most commonly performed?",
        "options": [
          "8–10 weeks",
          "11–13 weeks",
          "18–22 weeks",
          "28–32 weeks"
        ],
        "answer": 2,
        "layers": {
          "concept": "Antenatal ultrasound schedule",
          "discriminator": "Structural anomaly survey (TIFFA) = 18–22 weeks (organs formed, still time for decisions).",
          "trap": "11–13 weeks is the NT/dating scan, not the anatomy scan.",
          "rule": "Dating/viability 6–10 w; NT + combined test 11–13+6 w; anomaly scan 18–22 w; growth scans in 3rd trimester.",
          "others": {
            "A": "8–10 w is dating/viability.",
            "B": "11–13 w is nuchal translucency screening.",
            "D": "28–32 w is for growth and placenta/liquor assessment."
          }
        }
      },
      {
        "id": "GM-33",
        "stem": "A 30-year-old at 10 weeks has no pain or bleeding; ultrasound shows a sac with a fetal pole but no cardiac activity; os closed. Diagnosis?",
        "options": [
          "Threatened",
          "Inevitable",
          "Missed",
          "Incomplete"
        ],
        "answer": 2,
        "layers": {
          "concept": "Classification of miscarriage",
          "discriminator": "Dead fetus retained + os closed + no symptoms = missed abortion.",
          "trap": "Threatened abortion also has a closed os, but the fetus is ALIVE and there is bleeding.",
          "rule": "Threatened: bleeding, os closed, viable. Inevitable: os open, POC not passed. Incomplete: os open, some POC passed. Missed: non-viable, os closed, often asymptomatic.",
          "others": {
            "A": "Threatened requires a live fetus and bleeding.",
            "B": "Inevitable requires an open os with pain/bleeding.",
            "D": "Incomplete requires passage of some tissue and an open os."
          }
        }
      },
      {
        "id": "GM-34",
        "stem": "A 28-year-old has copious greenish-yellow frothy discharge and dysuria; wet mount shows motile flagellated organisms. Drug of choice?",
        "options": [
          "Fluconazole",
          "Metronidazole",
          "Doxycycline",
          "Clotrimazole"
        ],
        "answer": 1,
        "layers": {
          "concept": "Trichomoniasis",
          "discriminator": "Frothy green-yellow discharge + motile flagellates = Trichomonas vaginalis → metronidazole.",
          "trap": "Choosing an antifungal for 'discharge' — that fits thick white curdy candidiasis.",
          "rule": "Treat both partners with metronidazole; strawberry cervix; avoid alcohol (disulfiram-like reaction).",
          "others": {
            "A": "Fluconazole treats candidiasis.",
            "C": "Doxycycline treats chlamydia.",
            "D": "Clotrimazole is a topical antifungal for candida."
          }
        }
      },
      {
        "id": "GM-35",
        "stem": "Why is severe Rh haemolytic disease unlikely in a first pregnancy (Rh-negative mother, Rh-positive fetus)?",
        "options": [
          "Fetal RBCs lack Rh antigen",
          "Initial antibodies are IgM",
          "Placenta is an absolute barrier",
          "Sensitisation usually occurs at delivery"
        ],
        "answer": 1,
        "layers": {
          "concept": "Immunology of Rh isoimmunisation",
          "discriminator": "The primary immune response produces IgM, which is too large to cross the placenta; IgG appears only on re-exposure.",
          "trap": "D is also true and contributes; the question tests the antibody-class mechanism most exams expect.",
          "rule": "First pregnancy: sensitisation (mostly at delivery) → IgM. Next pregnancy: IgG crosses → haemolysis. Prevent with anti-D at 28 weeks and within 72 h of delivery.",
          "others": {
            "A": "Rh antigen is expressed on fetal RBCs early in gestation.",
            "C": "The placenta is not an absolute barrier — fetomaternal haemorrhage and IgG transfer occur.",
            "D": "Largely true, but the core reason the fetus is spared is that the primary response is IgM."
          }
        }
      },
      {
        "id": "GM-36",
        "stem": "A G3P2 at 34 weeks has sudden painful vaginal bleeding, a tense tender uterus and fetal distress. Placenta is normally situated. Diagnosis?",
        "options": [
          "Placenta praevia",
          "Abruptio placentae",
          "Vasa praevia",
          "Uterine rupture"
        ],
        "answer": 1,
        "layers": {
          "concept": "Antepartum haemorrhage — painful vs painless",
          "discriminator": "PAINFUL bleed + woody tense uterus + fetal distress + normally sited placenta = abruption.",
          "trap": "Placenta praevia is excluded by 'normally situated placenta' and is painless.",
          "rule": "Praevia: painless, soft uterus, malpresentation. Abruption: painful, tender hard uterus, shock out of proportion to visible blood.",
          "others": {
            "A": "Praevia is painless with a soft uterus and low-lying placenta.",
            "C": "Vasa praevia bleeds at membrane rupture; mother stable, fetus rapidly compromised.",
            "D": "Rupture: previous scar, loss of contractions, palpable fetal parts — less likely without a scar history."
          }
        }
      },
      {
        "id": "GM-37",
        "stem": "A 35-year-old at 16 weeks is advised amniocentesis for fetal karyotyping. Most appropriate timing?",
        "options": [
          "6–8 weeks",
          "10–12 weeks",
          "15–18 weeks",
          "24–28 weeks"
        ],
        "answer": 2,
        "layers": {
          "concept": "Timing of invasive prenatal diagnosis",
          "discriminator": "Amniocentesis is done from 15 weeks (enough amniotic fluid, lower loss risk); classic window 15–18 weeks.",
          "trap": "10–12 weeks is the window for chorionic villus sampling (CVS), not amniocentesis.",
          "rule": "CVS 10–13 w; amniocentesis ≥15 w (early amnio <14 w ↑ talipes and loss); cordocentesis ≥18–20 w.",
          "others": {
            "A": "Too early for any invasive test.",
            "B": "This is CVS timing.",
            "D": "Late — results come too late for reproductive decisions; used for other indications only."
          }
        }
      },
      {
        "id": "GM-38",
        "stem": "A 28-year-old with migraine with aura wants combined oral contraceptive pills. Most appropriate advice?",
        "options": [
          "Start COC safely",
          "Start low-dose estrogen COC",
          "Avoid COC; use POP",
          "Start COC after 6 months"
        ],
        "answer": 2,
        "layers": {
          "concept": "UKMEC/WHO MEC — migraine with aura",
          "discriminator": "Migraine WITH aura = UKMEC 4 for any estrogen-containing method (↑ ischaemic stroke risk).",
          "trap": "Thinking low-dose estrogen makes it safe — any dose is contraindicated.",
          "rule": "Aura → no estrogen ever. Use progestogen-only methods (POP, implant, LNG-IUS) or copper IUD.",
          "others": {
            "A": "Unsafe — absolute contraindication.",
            "B": "Low-dose estrogen still carries stroke risk; still UKMEC 4.",
            "D": "Waiting doesn't change the contraindication."
          }
        }
      },
      {
        "id": "GM-39",
        "stem": "A 24-year-old has oligomenorrhoea, hirsutism and acne. Most characteristic hormonal finding in PCOS?",
        "options": [
          "High FSH, low LH",
          "Elevated LH with normal FSH",
          "Low testosterone, high SHBG",
          "Hyperprolactinaemia with low LH"
        ],
        "answer": 1,
        "layers": {
          "concept": "Endocrine profile of PCOS",
          "discriminator": "Raised LH with normal FSH → LH:FSH ratio >2:1 → theca cell androgen excess.",
          "trap": "High FSH is the profile of premature ovarian insufficiency/menopause.",
          "rule": "PCOS (Rotterdam 2 of 3): oligo/anovulation, hyperandrogenism, polycystic ovaries. Labs: ↑LH, ↑testosterone, ↓SHBG, insulin resistance.",
          "others": {
            "A": "High FSH = ovarian failure, not PCOS.",
            "C": "PCOS has HIGH testosterone and LOW SHBG — the reverse.",
            "D": "Hyperprolactinaemia is a separate cause of oligomenorrhoea and must be excluded."
          }
        }
      },
      {
        "id": "GM-40",
        "stem": "Which is a major function of progesterone?",
        "options": [
          "Pregnancy-maintaining hormone",
          "Causes endometrial atrophy",
          "Stimulates follicular development",
          "Triggers ovulation"
        ],
        "answer": 0,
        "layers": {
          "concept": "Physiology of progesterone",
          "discriminator": "'Pro-gestation': maintains the secretory endometrium/decidua and keeps the myometrium quiet.",
          "trap": "Mixing it up with FSH (follicle growth) and LH (ovulation).",
          "rule": "Progesterone: secretory endometrium, ↓ myometrial contractility, thick cervical mucus, ↑ basal body temperature. Withdrawal → menstruation.",
          "others": {
            "B": "Progesterone causes secretory change, not atrophy (atrophy is from long-term unopposed progestin or estrogen deficiency).",
            "C": "Follicle development is driven by FSH.",
            "D": "Ovulation is triggered by the LH surge."
          }
        }
      },
      {
        "id": "GM-41",
        "stem": "Most common cause of primary postpartum haemorrhage?",
        "options": [
          "Retained placenta",
          "Uterine atony",
          "Genital tract trauma",
          "Coagulopathy"
        ],
        "answer": 1,
        "layers": {
          "concept": "The 4 Ts of PPH",
          "discriminator": "Tone (atony) accounts for ~70–80% of primary PPH.",
          "trap": "Choosing trauma because it is common in vaginal deliveries — it is second.",
          "rule": "4 Ts: Tone > Trauma > Tissue > Thrombin. First response: uterine massage + oxytocin.",
          "others": {
            "A": "Retained tissue is a cause but less common than atony.",
            "C": "Trauma is the second most common cause.",
            "D": "Coagulopathy is the least common of the four."
          }
        }
      },
      {
        "id": "GM-42",
        "stem": "A woman with regular cycles misses her period. Most reliable clinical sign of pregnancy?",
        "options": [
          "Amenorrhoea",
          "Nausea and vomiting",
          "Fetal heart sounds",
          "Breast tenderness"
        ],
        "answer": 2,
        "layers": {
          "concept": "Presumptive, probable and positive signs",
          "discriminator": "Fetal heart sounds are a POSITIVE (diagnostic) sign — they come only from the fetus.",
          "trap": "Amenorrhoea is the earliest symptom but only presumptive.",
          "rule": "Positive signs: fetal heart sounds, fetal movements felt by examiner, fetus on ultrasound.",
          "others": {
            "A": "Amenorrhoea has many causes (stress, PCOS, thyroid).",
            "B": "Nausea is presumptive and non-specific.",
            "D": "Breast tenderness is presumptive and occurs premenstrually too."
          }
        }
      },
      {
        "id": "GM-43",
        "stem": "A 30-year-old with long-standing foul-smelling ear discharge develops fever, severe headache, neck stiffness and photophobia. Most likely complication?",
        "options": [
          "Mastoiditis",
          "Meningitis",
          "Facial nerve palsy",
          "Labyrinthitis"
        ],
        "answer": 1,
        "layers": {
          "concept": "Intracranial complications of CSOM",
          "discriminator": "Neck stiffness + photophobia + headache + fever = meningism → meningitis.",
          "trap": "Mastoiditis is a complication of the same disease but presents with postauricular swelling/tenderness.",
          "rule": "Foul discharge = unsafe (cholesteatoma) CSOM. Commonest intracranial complication = meningitis; next brain abscess.",
          "others": {
            "A": "Mastoiditis: postauricular swelling, ear pushed forward; no meningism.",
            "C": "Facial palsy gives facial weakness, not neck stiffness.",
            "D": "Labyrinthitis gives vertigo, vomiting and hearing loss."
          }
        }
      },
      {
        "id": "GM-44",
        "stem": "A 16-year-old boy has recurrent epistaxis and nasal obstruction; a firm vascular nasopharyngeal mass is seen. Which investigation is contraindicated?",
        "options": [
          "CT scan",
          "MRI",
          "Nasal endoscopy",
          "Biopsy"
        ],
        "answer": 3,
        "layers": {
          "concept": "Juvenile nasopharyngeal angiofibroma (JNA)",
          "discriminator": "Adolescent male + epistaxis + vascular nasopharyngeal mass = JNA → biopsy can cause torrential bleeding.",
          "trap": "Thinking every mass needs a tissue diagnosis — JNA is diagnosed on imaging.",
          "rule": "JNA: contrast CT/MRI (Holman–Miller sign), angiography + embolisation, then surgical excision.",
          "others": {
            "A": "Contrast CT is the key diagnostic and staging test.",
            "B": "MRI defines soft-tissue extent; safe.",
            "C": "Endoscopy is safe for visualisation without biopsy."
          }
        }
      },
      {
        "id": "GM-45",
        "stem": "A 40-year-old has bilateral nasal obstruction, anosmia and watery rhinorrhoea with pale grape-like masses in both nasal cavities. Most appropriate initial treatment?",
        "options": [
          "Topical decongestants",
          "Oral antibiotics",
          "Intranasal corticosteroids",
          "Immediate polypectomy"
        ],
        "answer": 2,
        "layers": {
          "concept": "Bilateral ethmoidal (allergic) nasal polyps",
          "discriminator": "Bilateral pale polyps → medical treatment first with intranasal steroids.",
          "trap": "Going straight to surgery — reserved for failure of medical therapy.",
          "rule": "Polyps: topical steroids ± short oral steroid course → FESS if refractory. Unilateral polyp in an adult → exclude malignancy.",
          "others": {
            "A": "Decongestants give brief relief and cause rhinitis medicamentosa; they don't shrink polyps.",
            "B": "Antibiotics only for acute infection, not for polyps.",
            "D": "Surgery is second-line after failed medical therapy."
          }
        }
      },
      {
        "id": "GM-46",
        "stem": "After head trauma a 30-year-old has bilateral periorbital bruising (raccoon eyes). This indicates:",
        "options": [
          "Anterior cranial fossa fracture",
          "Middle cranial fossa fracture",
          "Posterior cranial fossa fracture",
          "Orbital floor fracture"
        ],
        "answer": 0,
        "layers": {
          "concept": "Signs of basal skull fracture",
          "discriminator": "Raccoon eyes + CSF rhinorrhoea = anterior cranial fossa.",
          "trap": "Battle's sign (mastoid bruising) is middle fossa — easy to swap.",
          "rule": "Anterior fossa: raccoon eyes, CSF rhinorrhoea, anosmia. Middle fossa: Battle's sign, CSF otorrhoea, haemotympanum, VII/VIII palsy. Avoid NG tube in anterior fossa fracture.",
          "others": {
            "B": "Middle fossa → Battle's sign and CSF otorrhoea.",
            "C": "Posterior fossa → mastoid bruising, lower cranial nerve palsies.",
            "D": "Orbital floor (blow-out) is usually unilateral with diplopia on upgaze and infraorbital numbness."
          }
        }
      },
      {
        "id": "GM-47",
        "stem": "A 35-year-old develops sudden severe vertigo, nausea, vomiting and unilateral SNHL after a recent URTI. Diagnosis?",
        "options": [
          "Vestibular neuritis",
          "Acute labyrinthitis",
          "BPPV",
          "Ménière's disease"
        ],
        "answer": 1,
        "layers": {
          "concept": "Viral labyrinthitis vs vestibular neuritis",
          "discriminator": "Vertigo + HEARING LOSS after a viral illness = labyrinthitis (whole labyrinth involved).",
          "trap": "Vestibular neuritis has the same story but hearing is preserved.",
          "rule": "Vertigo alone post-viral = vestibular neuritis; + hearing loss = labyrinthitis; episodic + tinnitus + fullness = Ménière's; seconds with head movement = BPPV.",
          "others": {
            "A": "Neuritis affects only the vestibular nerve — hearing normal.",
            "C": "BPPV: brief positional vertigo, no hearing loss.",
            "D": "Ménière's: recurrent episodes (20 min–hours) with tinnitus and aural fullness, not a single post-URTI event."
          }
        }
      },
      {
        "id": "GM-48",
        "stem": "A 5-year-old with enlarged adenoids has mouth breathing, snoring and obstructive sleep apnoea. Management?",
        "options": [
          "Observation",
          "Prolonged antibiotics",
          "Adenoidectomy",
          "Nasal decongestants"
        ],
        "answer": 2,
        "layers": {
          "concept": "Adenoid hypertrophy with OSA",
          "discriminator": "Documented OSA is an indication for surgery (adenoidectomy ± tonsillectomy).",
          "trap": "Observation is tempting since adenoids regress with age, but OSA causes growth, behaviour and cardiopulmonary harm.",
          "rule": "Indications for adenoidectomy: OSA, adenoid facies, recurrent OME/glue ear, recurrent adenoiditis.",
          "others": {
            "A": "Untreated OSA risks failure to thrive and cor pulmonale.",
            "B": "Antibiotics don't shrink hypertrophied lymphoid tissue.",
            "D": "Decongestants are ineffective for adenoid hypertrophy and unsafe long-term in children."
          }
        }
      },
      {
        "id": "GM-49",
        "stem": "A patient receives 1 litre of 0.9% saline IV. Distribution?",
        "options": [
          "Equal ICF and ECF",
          "Mainly ICF",
          "Mainly ECF, no effect on ICF",
          "Only plasma"
        ],
        "answer": 2,
        "layers": {
          "concept": "Fluid distribution of isotonic crystalloid",
          "discriminator": "Saline is isotonic, and Na⁺ stays extracellular, so there is no osmotic shift into cells.",
          "trap": "Choosing 'only plasma' — saline crosses capillaries freely and distributes across the whole ECF.",
          "rule": "1 L saline → ~250 mL plasma, ~750 mL interstitium. 1 L 5% dextrose → distributes like free water (2/3 ICF). Colloid → mostly plasma.",
          "others": {
            "A": "Equal ICF/ECF distribution would need free water/dextrose behaviour.",
            "B": "Only hypotonic fluids/dextrose move mainly into cells.",
            "D": "Restriction to plasma is the idealised behaviour of colloids."
          }
        }
      },
      {
        "id": "GM-50",
        "stem": "Which phase of the neuronal action potential is mainly caused by rapid Na⁺ influx?",
        "options": [
          "Resting membrane potential",
          "Depolarisation",
          "Repolarisation",
          "Hyperpolarisation"
        ],
        "answer": 1,
        "layers": {
          "concept": "Ionic basis of the action potential",
          "discriminator": "Voltage-gated Na⁺ channels open → Na⁺ rushes in → upstroke (depolarisation).",
          "trap": "Confusing repolarisation (K⁺ efflux) with depolarisation.",
          "rule": "Resting: K⁺ leak + Na/K ATPase. Upstroke: Na⁺ in. Repolarisation: K⁺ out. After-hyperpolarisation: delayed K⁺ channel closure.",
          "others": {
            "A": "RMP is set mainly by K⁺ permeability.",
            "C": "Repolarisation is from K⁺ efflux and Na⁺ channel inactivation.",
            "D": "Hyperpolarisation comes from continued K⁺ efflux."
          }
        }
      },
      {
        "id": "GM-51",
        "stem": "Which phase of the neuronal action potential is mainly caused by rapid Na⁺ influx? (duplicate of Q50)",
        "options": [
          "Resting membrane potential",
          "Depolarisation",
          "Repolarisation",
          "Hyperpolarisation"
        ],
        "answer": 1,
        "layers": {
          "concept": "Ionic basis of the action potential",
          "discriminator": "Na⁺ influx through voltage-gated channels = depolarisation.",
          "trap": "Same as Q50 — swapping Na⁺ and K⁺ phases.",
          "rule": "Na⁺ in = up; K⁺ out = down.",
          "others": {
            "A": "RMP depends on K⁺ leak.",
            "C": "Repolarisation = K⁺ efflux.",
            "D": "Hyperpolarisation = prolonged K⁺ efflux."
          }
        }
      },
      {
        "id": "GM-52",
        "stem": "Most potent physiological stimulus for growth hormone secretion?",
        "options": [
          "Hyperglycaemia",
          "Hypoglycaemia",
          "Obesity",
          "Somatostatin"
        ],
        "answer": 1,
        "layers": {
          "concept": "Regulation of GH",
          "discriminator": "GH is a counter-regulatory (anti-insulin) hormone; hypoglycaemia is the strongest stimulus — basis of the insulin tolerance test.",
          "trap": "Hyperglycaemia SUPPRESSES GH — used in the OGTT for acromegaly.",
          "rule": "GH ↑: hypoglycaemia, deep sleep, exercise, stress, arginine, ghrelin. GH ↓: glucose, somatostatin, obesity, IGF-1.",
          "others": {
            "A": "Hyperglycaemia suppresses GH.",
            "C": "Obesity blunts GH secretion.",
            "D": "Somatostatin inhibits GH release."
          }
        }
      },
      {
        "id": "GM-53",
        "stem": "Residual volume is the volume of air:",
        "options": [
          "Inspired after a normal inspiration",
          "Remaining in the lungs after maximal expiration",
          "Expired after a normal expiration",
          "Moved during quiet breathing"
        ],
        "answer": 1,
        "layers": {
          "concept": "Lung volumes",
          "discriminator": "RV = air left after a MAXIMAL forced expiration (~1.2 L); it cannot be measured by spirometry.",
          "trap": "Confusing RV with FRC (air left after a NORMAL expiration).",
          "rule": "FRC = ERV + RV. TLC = VC + RV. Measure RV by helium dilution or body plethysmography.",
          "others": {
            "A": "That describes inspiratory reserve volume.",
            "C": "That describes expiratory reserve volume.",
            "D": "That is tidal volume."
          }
        }
      },
      {
        "id": "GM-54",
        "stem": "The low-dose dexamethasone suppression test is first used to check:",
        "options": [
          "Pituitary vs ectopic ACTH",
          "Presence or absence of Cushing's syndrome",
          "Adrenal insufficiency",
          "Aldosterone excess"
        ],
        "answer": 1,
        "layers": {
          "concept": "Cushing's syndrome investigation sequence",
          "discriminator": "LOW dose = screens whether hypercortisolism exists. HIGH dose = localises the cause.",
          "trap": "Mixing low-dose (screening) with high-dose (localising).",
          "rule": "Step 1 confirm (LDDST / 24-h UFC / late-night salivary cortisol) → Step 2 ACTH level → Step 3 HDDST/CRH/IPSS to localise.",
          "others": {
            "A": "Pituitary vs ectopic is answered by the HIGH-dose test.",
            "C": "Adrenal insufficiency is tested with the short Synacthen test.",
            "D": "Aldosterone excess is screened with aldosterone:renin ratio."
          }
        }
      },
      {
        "id": "GM-55",
        "stem": "Mean arterial pressure is best estimated by:",
        "options": [
          "SBP − DBP",
          "SBP + DBP",
          "DBP + (pulse pressure ÷ 3)",
          "DBP + (pulse pressure ÷ 2)"
        ],
        "answer": 2,
        "layers": {
          "concept": "Mean arterial pressure",
          "discriminator": "Diastole lasts ~2/3 of the cycle, so MAP sits one-third of the way up from DBP.",
          "trap": "Simple averaging (÷2) ignores the longer diastole.",
          "rule": "MAP = DBP + ⅓(SBP − DBP) = (2·DBP + SBP)/3. Target MAP ≥65 mmHg in sepsis.",
          "others": {
            "A": "That is pulse pressure.",
            "B": "Has no physiological meaning.",
            "D": "Overestimates MAP — assumes equal systole and diastole."
          }
        }
      },
      {
        "id": "GM-56",
        "stem": "Normal lifespan of a red blood cell?",
        "options": [
          "30 days",
          "60 days",
          "90 days",
          "120 days"
        ],
        "answer": 3,
        "layers": {
          "concept": "RBC lifespan",
          "discriminator": "Normal RBC survives ~120 days before splenic removal.",
          "trap": "Mixing with platelet (7–10 d) or neutrophil (hours) lifespans.",
          "rule": "HbA1c reflects ~3 months because of the 120-day lifespan; falsely low in haemolysis.",
          "others": {
            "A": "Too short — implies haemolysis.",
            "B": "Too short.",
            "C": "Too short; 90 days is often confused with the HbA1c window."
          }
        }
      },
      {
        "id": "GM-57",
        "stem": "Which causes a LEFT shift of the O₂–Hb dissociation curve?",
        "options": [
          "Increased temperature",
          "Increased 2,3-BPG",
          "Acidosis",
          "Alkalosis"
        ],
        "answer": 3,
        "layers": {
          "concept": "Oxygen–haemoglobin dissociation curve",
          "discriminator": "Alkalosis (↓H⁺) increases Hb's O₂ affinity → left shift.",
          "trap": "A, B and C all shift RIGHT — the odd one out is the answer.",
          "rule": "Right shift (CADET face Right): CO₂, Acid, 2,3-DPG, Exercise, Temperature. Left: opposite + HbF + CO + methaemoglobin.",
          "others": {
            "A": "Heat shifts right (more O₂ unloading).",
            "B": "2,3-BPG shifts right.",
            "C": "Acidosis shifts right (Bohr effect)."
          }
        }
      },
      {
        "id": "GM-58",
        "stem": "Pancreatic lipase requires which of the following for optimal activity?",
        "options": [
          "Bile salts",
          "Enterokinase",
          "Intrinsic factor",
          "Gastric acid"
        ],
        "answer": 0,
        "layers": {
          "concept": "Fat digestion",
          "discriminator": "Bile salts emulsify fat, increasing surface area for lipase (with colipase anchoring it).",
          "trap": "Enterokinase activates trypsinogen, not lipase.",
          "rule": "Fat digestion: bile salts (emulsify + micelles) + lipase/colipase. Lack of bile → steatorrhoea.",
          "others": {
            "B": "Enterokinase converts trypsinogen to trypsin.",
            "C": "Intrinsic factor is for B12 absorption.",
            "D": "Gastric acid inactivates pancreatic lipase — bicarbonate neutralisation is needed."
          }
        }
      },
      {
        "id": "GM-59",
        "stem": "The mitral valve is best auscultated at:",
        "options": [
          "Right 2nd ICS",
          "Left 2nd ICS",
          "Left 5th ICS, midclavicular line",
          "Left 4th ICS, sternal edge"
        ],
        "answer": 2,
        "layers": {
          "concept": "Auscultation areas",
          "discriminator": "Mitral area = apex = left 5th ICS, midclavicular line.",
          "trap": "Left 4th ICS at sternal edge is the tricuspid area.",
          "rule": "All Physicians Take Money: Aortic R2, Pulmonary L2, Tricuspid L4/L5 LSE, Mitral L5 MCL.",
          "others": {
            "A": "Aortic area.",
            "B": "Pulmonary area.",
            "D": "Tricuspid area."
          }
        }
      },
      {
        "id": "GM-60",
        "stem": "Which part of the nephron is impermeable to water?",
        "options": [
          "PCT",
          "Descending limb of loop of Henle",
          "Ascending limb of loop of Henle",
          "Collecting duct"
        ],
        "answer": 2,
        "layers": {
          "concept": "Water handling along the nephron",
          "discriminator": "The thick ascending limb reabsorbs NaCl (NKCC2) but has no aquaporins → the 'diluting segment'.",
          "trap": "Collecting duct is impermeable WITHOUT ADH but becomes permeable with ADH.",
          "rule": "Descending: water out, solute stays. Ascending: solute out, water stays. Loop diuretics block NKCC2 here.",
          "others": {
            "A": "PCT reabsorbs ~65% of water (AQP1).",
            "B": "Descending limb is highly water-permeable.",
            "D": "Collecting duct is water-permeable under ADH (AQP2)."
          }
        }
      },
      {
        "id": "GM-61",
        "stem": "Which lipoprotein carries out reverse cholesterol transport?",
        "options": [
          "Chylomicrons",
          "VLDL",
          "LDL",
          "HDL"
        ],
        "answer": 3,
        "layers": {
          "concept": "Lipoprotein functions",
          "discriminator": "HDL collects cholesterol from tissues (via LCAT, ABCA1) and returns it to the liver.",
          "trap": "LDL moves cholesterol the opposite way — liver to tissues.",
          "rule": "Chylomicrons: dietary TG. VLDL: hepatic TG. LDL: cholesterol to tissues ('bad'). HDL: tissues to liver ('good').",
          "others": {
            "A": "Chylomicrons carry dietary fat from gut.",
            "B": "VLDL carries endogenous TG from liver.",
            "C": "LDL delivers cholesterol to peripheral tissues."
          }
        }
      },
      {
        "id": "GM-62",
        "stem": "A patient on long-term fat-free parenteral nutrition develops dermatitis, hair loss and thrombocytopenia. Deficiency of?",
        "options": [
          "Linoleic and linolenic acid",
          "Oleic and palmitic acid",
          "Stearic and arachidic acid",
          "Cholesterol and phospholipids"
        ],
        "answer": 0,
        "layers": {
          "concept": "Essential fatty acid deficiency",
          "discriminator": "Fat-free TPN + scaly dermatitis + alopecia + thrombocytopenia = EFA deficiency.",
          "trap": "Choosing other fatty acids — the body can make them.",
          "rule": "Essential: linoleic (ω-6) and α-linolenic (ω-3). Prevent with lipid emulsion in TPN.",
          "others": {
            "B": "Oleic and palmitic acid are synthesised endogenously.",
            "C": "Saturated fatty acids are non-essential.",
            "D": "Cholesterol and phospholipids are synthesised by the body."
          }
        }
      },
      {
        "id": "GM-63",
        "stem": "Most characteristic feature of kwashiorkor?",
        "options": [
          "Severe wasting with fat loss",
          "Bilateral pitting oedema",
          "Muscle hypertrophy",
          "Normal albumin"
        ],
        "answer": 1,
        "layers": {
          "concept": "Kwashiorkor vs marasmus",
          "discriminator": "Protein deficiency → low albumin → OEDEMA, the defining sign.",
          "trap": "Severe wasting is marasmus (energy deficiency).",
          "rule": "Kwashiorkor: oedema, flaky-paint dermatosis, fatty liver, flag sign hair, ↓ albumin. Marasmus: 'skin and bones', no oedema.",
          "others": {
            "A": "That is marasmus.",
            "C": "Muscle wasting, not hypertrophy, occurs.",
            "D": "Albumin is low — that causes the oedema."
          }
        }
      },
      {
        "id": "GM-64",
        "stem": "A chronic alcoholic has confusion, ataxia and ophthalmoplegia, then memory loss with confabulation. Which vitamin?",
        "options": [
          "Thiamine",
          "Niacin",
          "Pyridoxine",
          "Cobalamin"
        ],
        "answer": 0,
        "layers": {
          "concept": "Wernicke–Korsakoff syndrome",
          "discriminator": "Triad (confusion, ataxia, ophthalmoplegia) → Korsakoff (amnesia + confabulation) = B1 deficiency.",
          "trap": "Niacin deficiency (pellagra) also causes dementia in alcoholics but with dermatitis and diarrhoea.",
          "rule": "Give IV thiamine BEFORE glucose in alcoholics to avoid precipitating Wernicke's.",
          "others": {
            "B": "Niacin → pellagra (dermatitis, diarrhoea, dementia).",
            "C": "B6 → peripheral neuropathy, seizures, sideroblastic anaemia.",
            "D": "B12 → megaloblastic anaemia, SACD of the cord."
          }
        }
      },
      {
        "id": "GM-65",
        "stem": "Major rate-limiting enzyme of the Krebs cycle?",
        "options": [
          "Citrate synthase",
          "Aconitase",
          "Isocitrate dehydrogenase",
          "Succinate dehydrogenase"
        ],
        "answer": 2,
        "layers": {
          "concept": "Rate-limiting enzymes",
          "discriminator": "Isocitrate dehydrogenase — activated by ADP, inhibited by ATP/NADH.",
          "trap": "Citrate synthase is the first enzyme and regulated, but not the main rate-limiting step.",
          "rule": "Glycolysis: PFK-1. TCA: isocitrate DH. Gluconeogenesis: F-1,6-bisphosphatase. Cholesterol: HMG-CoA reductase. Urea: CPS-I.",
          "others": {
            "A": "Regulated, but not the principal rate-limiting step.",
            "B": "Aconitase is not a control point.",
            "D": "Succinate DH is also complex II; not rate-limiting."
          }
        }
      },
      {
        "id": "GM-66",
        "stem": "In MSUD (neurotoxicity, poor development, burnt-sugar urine), which amino acid is most responsible for neurotoxicity?",
        "options": [
          "Leucine",
          "Phenylalanine",
          "Tyrosine",
          "Methionine"
        ],
        "answer": 0,
        "layers": {
          "concept": "Maple syrup urine disease",
          "discriminator": "Branched-chain α-ketoacid dehydrogenase defect → leucine (and its ketoacid) is the main neurotoxin.",
          "trap": "Phenylalanine causes neurotoxicity in PKU, a different disorder.",
          "rule": "MSUD branched chains: 'I Love Vermont' maple syrup — Isoleucine, Leucine, Valine. Needs thiamine as a cofactor.",
          "others": {
            "B": "Phenylalanine → PKU (musty odour).",
            "C": "Tyrosine accumulates in tyrosinaemia.",
            "D": "Methionine relates to homocystinuria."
          }
        }
      },
      {
        "id": "GM-67",
        "stem": "A 50-year-old has severe RUQ pain radiating to the right shoulder, fever and jaundice. Ultrasound shows gallstones and a thickened gallbladder wall. Most likely diagnosis?",
        "options": [
          "Biliary colic",
          "Acute cholecystitis",
          "Cholangitis",
          "Acute pancreatitis"
        ],
        "answer": 1,
        "layers": {
          "concept": "Gallstone disease spectrum",
          "discriminator": "Ultrasound evidence of gallbladder inflammation (thickened wall + stones) with fever points to acute cholecystitis.",
          "trap": "Pain + fever + jaundice is also Charcot's triad (cholangitis), which would show a dilated CBD on ultrasound rather than GB wall thickening.",
          "rule": "Colic: pain only. Cholecystitis: pain + fever + Murphy's ± mild jaundice (Mirizzi). Cholangitis: Charcot's triad + dilated CBD. Pancreatitis: epigastric pain to back + raised lipase.",
          "others": {
            "A": "Biliary colic has no fever or wall thickening.",
            "C": "Cholangitis would show CBD dilatation/stone; the scan here describes the gallbladder.",
            "D": "Pancreatitis pain is epigastric radiating to the back."
          }
        }
      },
      {
        "id": "GM-68",
        "stem": "A 45-year-old with PUD has sudden severe epigastric pain, board-like rigidity and free air under the diaphragm. Complication?",
        "options": [
          "Gastric outlet obstruction",
          "Perforated peptic ulcer",
          "Upper GI bleed",
          "Penetration into pancreas"
        ],
        "answer": 1,
        "layers": {
          "concept": "Perforated peptic ulcer",
          "discriminator": "Pneumoperitoneum (free air) + generalised peritonitis = perforation.",
          "trap": "Posterior penetration into the pancreas causes back pain but no free air.",
          "rule": "Erect CXR for free air → resuscitate → laparotomy/laparoscopic omental (Graham) patch.",
          "others": {
            "A": "GOO: projectile vomiting, succussion splash, hypokalaemic alkalosis.",
            "C": "Bleeding: haematemesis/melaena, not free air.",
            "D": "Penetration: back pain, raised amylase, no pneumoperitoneum."
          }
        }
      },
      {
        "id": "GM-69",
        "stem": "A 70-year-old has 2 weeks of progressive confusion and mild left weakness after a minor fall 3 weeks ago. CT shows a crescent-shaped collection over the right hemisphere. Diagnosis?",
        "options": [
          "Epidural haematoma",
          "Acute subdural",
          "Chronic subdural",
          "SAH"
        ],
        "answer": 2,
        "layers": {
          "concept": "Chronic subdural haematoma",
          "discriminator": "Elderly + trivial fall weeks earlier + slow fluctuating confusion + crescent = chronic SDH (bridging vein tear).",
          "trap": "The source says 'hyperdense' (which fits acute), but the 3-week timeline makes it chronic; chronic SDH is usually hypodense.",
          "rule": "Crescent (crosses sutures) = subdural; lens/biconvex (stops at sutures) = extradural. Chronic SDH → burr-hole drainage.",
          "others": {
            "A": "EDH is lens-shaped, follows high-energy trauma with lucid interval and rapid decline.",
            "B": "Acute SDH presents within 72 h of significant trauma.",
            "D": "SAH: thunderclap headache, blood in sulci/cisterns."
          }
        }
      },
      {
        "id": "GM-70",
        "stem": "A 45-year-old alcoholic has epigastric pain radiating to the back, vomiting, low fever and bluish flank discolouration. Most suggestive of?",
        "options": [
          "Acute cholecystitis",
          "Severe acute pancreatitis",
          "Ruptured AAA",
          "Perforated DU"
        ],
        "answer": 1,
        "layers": {
          "concept": "Grey Turner's sign",
          "discriminator": "Alcohol + epigastric pain to back + flank bruising = haemorrhagic (severe) pancreatitis.",
          "trap": "Ruptured AAA can cause flank bruising but presents with shock and pulsatile mass in older men, without alcohol/vomiting context.",
          "rule": "Grey Turner = flank; Cullen = periumbilical — both signal retroperitoneal haemorrhage, severe pancreatitis.",
          "others": {
            "A": "Cholecystitis: RUQ pain, Murphy's sign, no flank bruising.",
            "C": "AAA rupture: elderly, collapse, pulsatile mass.",
            "D": "Perforated DU: board-like rigidity and free air."
          }
        }
      },
      {
        "id": "GM-71",
        "stem": "A 40-year-old has throbbing perianal pain, fever and a tender fluctuant swelling near the anal verge. Immediate management?",
        "options": [
          "Oral antibiotics alone",
          "Sitz baths and analgesia",
          "Incision and drainage",
          "Topical steroids"
        ],
        "answer": 2,
        "layers": {
          "concept": "Perianal abscess",
          "discriminator": "Fluctuant = pus collection → needs drainage.",
          "trap": "Antibiotics alone don't penetrate an abscess cavity.",
          "rule": "'Where there is pus, let it out.' Antibiotics only for cellulitis, diabetes or immunosuppression.",
          "others": {
            "A": "Inadequate without drainage.",
            "B": "Supportive only; delays definitive treatment.",
            "D": "Steroids worsen infection."
          }
        }
      },
      {
        "id": "GM-72",
        "stem": "A 28-year-old has recurrent RLQ pain, diarrhoea, weight loss and an RIF mass; colonoscopy shows skip lesions, transmural inflammation and non-caseating granulomas. Most characteristic complication?",
        "options": [
          "Toxic megacolon",
          "Pseudopolyps",
          "Bloody diarrhoea",
          "Fistula formation"
        ],
        "answer": 3,
        "layers": {
          "concept": "Crohn's disease",
          "discriminator": "TRANSMURAL inflammation is what lets Crohn's tunnel through to form fistulae.",
          "trap": "Toxic megacolon, pseudopolyps and bloody diarrhoea are classic for ulcerative colitis.",
          "rule": "Crohn's: skip lesions, cobblestone, granulomas, fistulae, strictures, perianal disease. UC: continuous, mucosal, rectum up, toxic megacolon, PSC.",
          "others": {
            "A": "Toxic megacolon is characteristic of UC.",
            "B": "Pseudopolyps are characteristic of UC.",
            "C": "Bloody diarrhoea is typical of UC."
          }
        }
      },
      {
        "id": "GM-73",
        "stem": "A 45-year-old with recurrent UTIs has flank pain and fever; imaging shows a staghorn calculus; urine grows Proteus mirabilis. Stone composition?",
        "options": [
          "Calcium oxalate",
          "Uric acid",
          "Struvite",
          "Cystine"
        ],
        "answer": 2,
        "layers": {
          "concept": "Infection (struvite) stones",
          "discriminator": "Urease-producing Proteus → alkaline urine → magnesium ammonium phosphate (struvite) → staghorn.",
          "trap": "Calcium oxalate is the most common stone overall, but not the infection/staghorn stone.",
          "rule": "Struvite: urease organisms, alkaline urine, staghorn, coffin-lid crystals → PCNL + treat infection.",
          "others": {
            "A": "Most common stone overall; not linked to Proteus.",
            "B": "Uric acid stones form in acidic urine, radiolucent (gout, tumour lysis).",
            "D": "Cystine stones: hexagonal crystals, inherited cystinuria, young patients."
          }
        }
      },
      {
        "id": "GM-74",
        "stem": "A 35-year-old has painless bright red rectal bleeding and a soft reducible swelling at the anal margin. Type of haemorrhoid?",
        "options": [
          "Internal",
          "External",
          "Thrombosed external",
          "Strangulated internal"
        ],
        "answer": 0,
        "layers": {
          "concept": "Internal vs external haemorrhoids",
          "discriminator": "PAINLESS bleeding + prolapse that reduces = internal haemorrhoid (above dentate line, visceral innervation).",
          "trap": "'Swelling at the anal margin' tempts external, but external haemorrhoids are painful and don't bleed painlessly with reduction.",
          "rule": "Internal grades: I bleed only; II prolapse, reduce spontaneously; III manual reduction; IV irreducible. External: below dentate line, painful when thrombosed.",
          "others": {
            "B": "External haemorrhoids are covered by sensitive anoderm — painful.",
            "C": "Thrombosed external: acute, very painful, bluish lump.",
            "D": "Strangulated: irreducible, severely painful, dusky."
          }
        }
      },
      {
        "id": "GM-75",
        "stem": "A 40-year-old with a treated perianal abscess has persistent purulent discharge from a small opening near the anal verge. Diagnosis?",
        "options": [
          "Anal fissure",
          "Recurrent abscess",
          "Fistula-in-ano",
          "Thrombosed haemorrhoid"
        ],
        "answer": 2,
        "layers": {
          "concept": "Fistula-in-ano",
          "discriminator": "Chronic discharge from an external opening after an abscess = fistula connecting anal canal to skin.",
          "trap": "Recurrent abscess presents with pain and swelling, not a persistent draining opening.",
          "rule": "~1/3 of perianal abscesses lead to fistulae. Goodsall's rule predicts the tract. Treat with fistulotomy or seton.",
          "others": {
            "A": "Fissure: pain on defecation, posterior midline tear, no discharge tract.",
            "B": "Abscess: acute painful fluctuant swelling.",
            "D": "Thrombosed haemorrhoid: painful bluish lump, no discharging opening."
          }
        }
      },
      {
        "id": "GM-76",
        "stem": "A 72-year-old has PSA 18 ng/mL and a hard nodular prostate on DRE. Investigation to confirm diagnosis?",
        "options": [
          "Repeat PSA",
          "TRUS-guided prostate biopsy",
          "Bone scan",
          "CT abdomen/pelvis"
        ],
        "answer": 1,
        "layers": {
          "concept": "Diagnosis of prostate cancer",
          "discriminator": "'Confirm' = tissue diagnosis → biopsy (Gleason grading).",
          "trap": "Bone scan and CT are for STAGING once cancer is confirmed.",
          "rule": "Raised PSA/abnormal DRE → mpMRI → targeted (TRUS/transperineal) biopsy → stage with bone scan/CT if high risk.",
          "others": {
            "A": "Repeating PSA delays diagnosis with a hard nodular gland already present.",
            "C": "Bone scan stages metastases; doesn't confirm cancer.",
            "D": "CT stages nodal spread; doesn't confirm cancer."
          }
        }
      },
      {
        "id": "GM-77",
        "stem": "Which is a surgical airway?",
        "options": [
          "Orotracheal intubation",
          "Nasotracheal intubation",
          "Cricothyrotomy",
          "Bag-mask ventilation"
        ],
        "answer": 2,
        "layers": {
          "concept": "Definitive and surgical airways",
          "discriminator": "Surgical airway = an incision through the neck (cricothyroid membrane).",
          "trap": "Intubation is a DEFINITIVE airway, but not a surgical one.",
          "rule": "'Can't intubate, can't oxygenate' → surgical cricothyrotomy. Children <12 y → needle cricothyrotomy.",
          "others": {
            "A": "Definitive, non-surgical.",
            "B": "Definitive, non-surgical.",
            "D": "Basic airway support — not definitive or surgical."
          }
        }
      },
      {
        "id": "GM-78",
        "stem": "Most common cause of obstructive shock among the options?",
        "options": [
          "Massive MI",
          "Cardiac tamponade",
          "Severe sepsis",
          "Anaphylaxis"
        ],
        "answer": 1,
        "layers": {
          "concept": "Classification of shock",
          "discriminator": "Obstructive shock = mechanical block to filling/outflow — tamponade, tension pneumothorax, massive PE.",
          "trap": "Massive MI causes cardiogenic (pump failure) shock, not obstructive.",
          "rule": "Hypovolaemic (blood/fluid loss), cardiogenic (pump), obstructive (tamponade/tension/PE), distributive (sepsis/anaphylaxis/neurogenic).",
          "others": {
            "A": "MI → cardiogenic shock.",
            "C": "Sepsis → distributive shock.",
            "D": "Anaphylaxis → distributive shock."
          }
        }
      },
      {
        "id": "GM-79",
        "stem": "A 65-year-old has sudden painless massive lower GI bleeding; colonoscopy shows sigmoid diverticula with active bleeding from one. Diagnosis?",
        "options": [
          "Diverticulitis",
          "Colorectal cancer",
          "Ischaemic colitis",
          "Bleeding diverticulosis"
        ],
        "answer": 3,
        "layers": {
          "concept": "Diverticular bleeding",
          "discriminator": "PAINLESS massive bleed from a diverticulum = diverticulosis (vasa recta rupture).",
          "trap": "Diverticulitis is painful with fever and rarely bleeds massively.",
          "rule": "Diverticulosis bleeds; diverticulitis inflames. Most common cause of massive LGIB in the elderly.",
          "others": {
            "A": "Diverticulitis: LIF pain, fever, raised WBC, minimal bleeding.",
            "B": "Cancer: occult/slow bleeding, change in bowel habit.",
            "C": "Ischaemic colitis: crampy pain then bloody diarrhoea."
          }
        }
      },
      {
        "id": "GM-80",
        "stem": "Most common cause of distributive shock?",
        "options": [
          "Sepsis",
          "Hypovolaemia",
          "Pleural effusion",
          "Allergy"
        ],
        "answer": 0,
        "layers": {
          "concept": "Distributive shock",
          "discriminator": "Sepsis is by far the most common cause of vasodilatory (distributive) shock.",
          "trap": "Allergy (anaphylaxis) is distributive too, but far less common.",
          "rule": "Septic shock: hypotension needing vasopressors to keep MAP ≥65 + lactate >2 despite fluids. Norepinephrine first-line.",
          "others": {
            "B": "Hypovolaemia is its own category of shock.",
            "C": "Pleural effusion is not a shock cause (tension pneumothorax would be obstructive).",
            "D": "Anaphylaxis is distributive but less common than sepsis."
          }
        }
      },
      {
        "id": "GM-81",
        "stem": "A 55-year-old has iron-deficiency anaemia and an RIF mass; colonoscopy shows an ulcerated caecal lesion. Most common histology?",
        "options": [
          "SCC",
          "Adenocarcinoma",
          "Carcinoid",
          "Lymphoma"
        ],
        "answer": 1,
        "layers": {
          "concept": "Right-sided colon cancer",
          "discriminator": ">95% of colorectal cancers are adenocarcinoma; right-sided ones present with occult bleeding/anaemia and a mass.",
          "trap": "Carcinoid is classically appendiceal/ileal but rare as a caecal ulcerating mass.",
          "rule": "Right colon: anaemia, mass, late obstruction. Left colon: altered bowel habit, obstruction, PR blood.",
          "others": {
            "A": "SCC arises in the anal canal, not the caecum.",
            "C": "Carcinoids are rare and usually small, appendix/ileum.",
            "D": "Colonic lymphoma is uncommon."
          }
        }
      },
      {
        "id": "GM-82",
        "stem": "A 45-year-old returns 4 weeks after acute pancreatitis with persistent pain, an epigastric mass and raised amylase; CT shows a fluid collection with a well-defined wall. Complication?",
        "options": [
          "Pseudocyst",
          "Pancreatic abscess",
          "Walled-off necrosis",
          "Splenic vein thrombosis"
        ],
        "answer": 0,
        "layers": {
          "concept": "Revised Atlanta classification of collections",
          "discriminator": "≥4 weeks + well-defined wall + persistently raised amylase = pseudocyst (wall of granulation/fibrous tissue, not epithelium).",
          "trap": "Walled-off necrosis also forms at ≥4 weeks but follows necrotising pancreatitis and contains solid debris.",
          "rule": "<4 w: acute peripancreatic fluid collection. ≥4 w: pseudocyst (fluid only) or WON (necrotic debris). Drain if symptomatic/>6 cm (endoscopic cystgastrostomy).",
          "others": {
            "B": "Abscess: fever, sepsis, gas in collection.",
            "C": "WON contains solid necrotic material and follows necrotising disease.",
            "D": "Splenic vein thrombosis causes gastric varices, not a mass."
          }
        }
      },
      {
        "id": "GM-83",
        "stem": "A 65-year-old has nocturia and hesitancy; DRE shows a smooth, rubbery, symmetrically enlarged prostate with preserved median sulcus. Diagnosis?",
        "options": [
          "Carcinoma",
          "BPH",
          "Acute prostatitis",
          "Prostatic abscess"
        ],
        "answer": 1,
        "layers": {
          "concept": "BPH on DRE",
          "discriminator": "Smooth + rubbery + symmetrical + sulcus preserved = benign.",
          "trap": "Carcinoma is hard, nodular, irregular with obliterated sulcus.",
          "rule": "BPH arises in the transition zone; cancer in the peripheral zone (palpable on DRE). Treat BPH with α-blocker ± 5α-reductase inhibitor.",
          "others": {
            "A": "Cancer: hard, nodular, asymmetric.",
            "C": "Prostatitis: exquisitely tender, boggy, febrile.",
            "D": "Abscess: fluctuant, tender, septic."
          }
        }
      },
      {
        "id": "GM-84",
        "stem": "A 40-year-old has a 7×7 cm left upper quadrant breast lump with no axillary nodes. Likely diagnosis?",
        "options": [
          "Phyllodes tumour",
          "Duct ectasia",
          "Fibrocystic disease",
          "Paget's disease"
        ],
        "answer": 0,
        "layers": {
          "concept": "Phyllodes tumour",
          "discriminator": "Large (>5 cm), rapidly growing, mobile lump in 40s without nodal spread (spreads haematogenously) = phyllodes.",
          "trap": "Fibroadenoma is similar but smaller and in younger women.",
          "rule": "Phyllodes: leaf-like stroma, 'giant fibroadenoma', treat by wide local excision with ≥1 cm margins; axillary clearance not needed.",
          "others": {
            "B": "Duct ectasia: nipple discharge/retraction in perimenopause, not a large mass.",
            "C": "Fibrocystic change: cyclical pain, lumpy breasts, not a 7 cm discrete mass.",
            "D": "Paget's: eczematous nipple change."
          }
        }
      },
      {
        "id": "GM-85",
        "stem": "Which polyp is most likely to harbour malignancy?",
        "options": [
          "Hamartomatous",
          "Inflammatory",
          "Tubular adenoma",
          "Villous adenoma"
        ],
        "answer": 3,
        "layers": {
          "concept": "Malignant potential of colorectal polyps",
          "discriminator": "Villous architecture carries the highest cancer risk (~40%).",
          "trap": "Tubular adenomas are the most COMMON adenoma but lowest risk.",
          "rule": "Malignancy risk ↑ with size >2 cm, villous histology, high-grade dysplasia, sessile shape. Villous adenoma may cause hypokalaemia.",
          "others": {
            "A": "Hamartomatous (Peutz–Jeghers, juvenile) — low individual risk.",
            "B": "Inflammatory pseudopolyps — no malignant potential.",
            "C": "Tubular — common but least malignant adenoma."
          }
        }
      },
      {
        "id": "GM-86",
        "stem": "A cirrhotic admitted with haematemesis has multiple areas of punctate erythema on OGD. Best step to prevent rebleeding?",
        "options": [
          "Antacids",
          "Omeprazole",
          "Propranolol",
          "Ranitidine"
        ],
        "answer": 2,
        "layers": {
          "concept": "Portal hypertensive gastropathy",
          "discriminator": "Punctate erythema/mosaic pattern in cirrhosis = portal hypertensive gastropathy — a portal pressure problem, not an acid problem.",
          "trap": "Choosing an acid-suppressant because the bleed is 'gastric'.",
          "rule": "PHG and varices: non-selective β-blocker (propranolol/carvedilol) reduces portal pressure and rebleeding.",
          "others": {
            "A": "Antacids don't lower portal pressure.",
            "B": "PPIs treat peptic ulceration, not PHG.",
            "D": "H2 blockers don't affect portal pressure."
          }
        }
      },
      {
        "id": "GM-87",
        "stem": "A 52-year-old with chronic liver disease has haematemesis and melaena, pulse 110, BP 100/70, jaundice, confusion and flapping tremor. Most appropriate treatment?",
        "options": [
          "IV omeprazole",
          "IV terlipressin",
          "IV vitamin K",
          "Oral propranolol"
        ],
        "answer": 1,
        "layers": {
          "concept": "Acute variceal haemorrhage",
          "discriminator": "Decompensated CLD + upper GI bleed = presumed variceal bleed → vasoactive drug (terlipressin) immediately.",
          "trap": "Propranolol is for prevention, not acute bleeding (worsens hypotension).",
          "rule": "Variceal bleed: resuscitate → terlipressin + IV antibiotics (ceftriaxone) → endoscopic band ligation within 12 h → TIPS if refractory.",
          "others": {
            "A": "PPI is for ulcer bleeds; not first priority in variceal bleed.",
            "C": "Vitamin K doesn't correct coagulopathy from liver synthetic failure.",
            "D": "β-blockers are for primary/secondary prophylaxis, contraindicated in active shock."
          }
        }
      },
      {
        "id": "GM-88",
        "stem": "Most common carcinoma associated with MEN IIA?",
        "options": [
          "Follicular",
          "Medullary",
          "Papillary",
          "Sarcoma"
        ],
        "answer": 1,
        "layers": {
          "concept": "MEN 2 syndromes",
          "discriminator": "MEN 2A (RET mutation) = medullary thyroid carcinoma (~100%) + phaeochromocytoma + parathyroid hyperplasia.",
          "trap": "Papillary is the most common thyroid cancer overall, but not in MEN.",
          "rule": "MEN1: 3 Ps (pituitary, parathyroid, pancreas). MEN2A: MTC, phaeo, parathyroid. MEN2B: MTC, phaeo, mucosal neuromas, marfanoid.",
          "others": {
            "A": "Follicular is not part of MEN.",
            "C": "Papillary is not part of MEN.",
            "D": "Sarcoma is not associated with MEN 2A."
          }
        }
      },
      {
        "id": "GM-89",
        "stem": "Best technique to localise a parathyroid adenoma?",
        "options": [
          "CT",
          "MRI",
          "Radionuclide scan",
          "Ultrasonography"
        ],
        "answer": 2,
        "layers": {
          "concept": "Pre-operative parathyroid localisation",
          "discriminator": "Tc-99m sestamibi scan is taken up and retained by hyperfunctioning parathyroid tissue.",
          "trap": "Ultrasound is often done together with it but is less sensitive for ectopic glands.",
          "rule": "Localisation: sestamibi ± SPECT-CT + neck US → minimally invasive parathyroidectomy. Localisation isn't for diagnosis (that's biochemical).",
          "others": {
            "A": "CT (4D-CT) is second-line.",
            "B": "MRI is reserved for re-operative/difficult cases.",
            "D": "US is complementary, operator-dependent and misses mediastinal glands."
          }
        }
      },
      {
        "id": "GM-90",
        "stem": "Commonest site of a thyroglossal cyst?",
        "options": [
          "Foramen caecum",
          "Thyroid cartilage",
          "Hyoid bone",
          "Floor of mouth"
        ],
        "answer": 2,
        "layers": {
          "concept": "Thyroglossal duct cyst",
          "discriminator": "Most occur at or just below the hyoid bone (subhyoid), in the midline.",
          "trap": "Foramen caecum is the ORIGIN of the duct, not the commonest cyst site.",
          "rule": "Midline neck lump moving with tongue protrusion and swallowing. Treat with Sistrunk's operation (excise central hyoid).",
          "others": {
            "A": "Origin point; cysts rarely sit there (lingual).",
            "B": "Less common (thyrohyoid region).",
            "D": "Suprahyoid/sublingual cysts are less common."
          }
        }
      },
      {
        "id": "GM-91",
        "stem": "A 65-year-old has a non-healing foul-smelling ulcer over an old burn scar that has recently enlarged and become painful. Histology?",
        "options": [
          "BCC",
          "SCC",
          "Melanoma",
          "Adenocarcinoma"
        ],
        "answer": 1,
        "layers": {
          "concept": "Marjolin's ulcer",
          "discriminator": "Malignant change in a chronic scar/burn = Marjolin's ulcer = squamous cell carcinoma.",
          "trap": "BCC is the most common skin cancer overall, but not in scars.",
          "rule": "Marjolin's: slow-growing, painless initially, no lymph spread early (scar lacks lymphatics). Biopsy any non-healing ulcer in a scar.",
          "others": {
            "A": "BCC arises in sun-exposed skin, not burn scars.",
            "C": "Melanoma arises from melanocytes/naevi.",
            "D": "Adenocarcinoma is glandular, not cutaneous scar origin."
          }
        }
      },
      {
        "id": "GM-92",
        "stem": "Most common causative agent of UTI?",
        "options": [
          "E. coli",
          "Klebsiella",
          "Proteus",
          "Staphylococcus"
        ],
        "answer": 0,
        "layers": {
          "concept": "UTI microbiology",
          "discriminator": "Uropathogenic E. coli (P-fimbriae) causes ~80% of community UTIs.",
          "trap": "Staph saprophyticus is the second most common in young women.",
          "rule": "KEEPS: Klebsiella, E. coli, Enterococcus, Proteus, S. saprophyticus.",
          "others": {
            "B": "Klebsiella — less common, often nosocomial.",
            "C": "Proteus — associated with struvite stones.",
            "D": "S. saprophyticus causes UTIs in young sexually active women but less often than E. coli."
          }
        }
      },
      {
        "id": "GM-93",
        "stem": "A trauma patient has severe respiratory distress, hypotension, absent right breath sounds and trachea deviated left. Immediate management?",
        "options": [
          "Chest X-ray",
          "Endotracheal intubation",
          "Needle decompression, right 2nd ICS",
          "Pericardiocentesis"
        ],
        "answer": 2,
        "layers": {
          "concept": "Tension pneumothorax",
          "discriminator": "Clinical diagnosis — shock + absent breath sounds + tracheal shift AWAY → decompress immediately.",
          "trap": "Waiting for a chest X-ray — tension is a clinical diagnosis and delay is fatal.",
          "rule": "Needle decompression (2nd ICS MCL; ATLS now prefers 4th/5th ICS anterior to mid-axillary in adults) → chest drain.",
          "others": {
            "A": "Imaging delays life-saving treatment.",
            "B": "Positive-pressure ventilation worsens tension.",
            "D": "Pericardiocentesis treats tamponade (muffled sounds, raised JVP, normal breath sounds)."
          }
        }
      },
      {
        "id": "GM-94",
        "stem": "A 6-year-old with acute otitis media develops severe headache, nausea, photophobia, high fever and neck stiffness after 3 days. Diagnosis?",
        "options": [
          "Cerebellar abscess",
          "Extradural abscess",
          "Meningitis",
          "Sigmoid sinus thrombosis"
        ],
        "answer": 2,
        "layers": {
          "concept": "Otogenic meningitis",
          "discriminator": "Neck stiffness + photophobia + fever = meningism.",
          "trap": "Abscesses evolve over weeks with focal signs.",
          "rule": "Commonest intracranial complication of otitis media = meningitis. LP after CT if signs of raised ICP.",
          "others": {
            "A": "Cerebellar abscess: ataxia, nystagmus, slower evolution.",
            "B": "Extradural abscess: often silent, localised headache.",
            "D": "Sinus thrombosis: picket-fence fever, Griesinger's sign."
          }
        }
      },
      {
        "id": "GM-95",
        "stem": "Most characteristic finding of a second-degree (partial-thickness) burn?",
        "options": [
          "Dry, leathery, insensate",
          "Erythema without blisters",
          "Blisters, severe pain, moist skin",
          "Charred skin with muscle visible"
        ],
        "answer": 2,
        "layers": {
          "concept": "Burn depth",
          "discriminator": "Partial thickness = blistering + pain (nerve endings intact) + moist, blanching base.",
          "trap": "Erythema without blisters is first-degree (superficial).",
          "rule": "1st: red, painful, no blisters. 2nd: blisters, painful. 3rd: white/leathery, painless. 4th: muscle/bone.",
          "others": {
            "A": "Full thickness (3rd degree).",
            "B": "Superficial (1st degree, e.g. sunburn).",
            "D": "4th degree."
          }
        }
      },
      {
        "id": "GM-96",
        "stem": "Most common cause of massive lower GI bleeding?",
        "options": [
          "Angiodysplasia",
          "Diverticulosis",
          "Ischaemic colitis",
          "Colon cancer"
        ],
        "answer": 1,
        "layers": {
          "concept": "Causes of LGIB",
          "discriminator": "Diverticulosis is the leading cause of MASSIVE painless LGIB in adults.",
          "trap": "Angiodysplasia is second and more often causes recurrent low-grade bleeding.",
          "rule": "Massive LGIB: diverticulosis > angiodysplasia. Investigate with CT angiography/colonoscopy; exclude upper GI source first.",
          "others": {
            "A": "Second most common; usually intermittent.",
            "C": "Ischaemic colitis: painful, rarely massive.",
            "D": "Cancer: occult/chronic bleeding."
          }
        }
      },
      {
        "id": "GM-97",
        "stem": "A 49-year-old with recurrent renal stones has pepper-pot (salt-and-pepper) lytic lesions on skull X-ray. Condition?",
        "options": [
          "Paget disease",
          "Hyperthyroidism",
          "Hyperparathyroidism",
          "Osteogenesis imperfecta"
        ],
        "answer": 2,
        "layers": {
          "concept": "Primary hyperparathyroidism",
          "discriminator": "Stones + salt-and-pepper skull = PTH-driven bone resorption and hypercalciuria.",
          "trap": "Paget's also changes the skull, but gives cotton-wool appearance and high ALP with normal calcium.",
          "rule": "Bones, stones, abdominal groans, psychic moans. Also subperiosteal resorption of phalanges, brown tumours (osteitis fibrosa cystica).",
          "others": {
            "A": "Paget's: cotton-wool skull, enlarged bones, normal calcium.",
            "B": "Hyperthyroidism causes osteoporosis, not salt-and-pepper skull.",
            "D": "OI: blue sclerae, fractures, Wormian bones."
          }
        }
      },
      {
        "id": "GM-98",
        "stem": "Most common type of renal stone?",
        "options": [
          "Uric acid",
          "Calcium oxalate",
          "Cystine",
          "Struvite"
        ],
        "answer": 1,
        "layers": {
          "concept": "Renal stone epidemiology",
          "discriminator": "Calcium oxalate makes up ~75–80% of stones.",
          "trap": "Struvite is most common in staghorn/infection context only.",
          "rule": "Calcium oxalate: radio-opaque, envelope/dumbbell crystals. Prevention: fluids, normal calcium diet, low salt/oxalate, thiazide for hypercalciuria.",
          "others": {
            "A": "Uric acid ~5–10%, radiolucent.",
            "C": "Cystine ~1%.",
            "D": "Struvite ~10–15%."
          }
        }
      },
      {
        "id": "GM-99",
        "stem": "A 50-year-old obese multiparous woman with chronic constipation has a painful irreducible swelling just above the umbilicus. Diagnosis?",
        "options": [
          "Umbilical hernia",
          "Paraumbilical hernia",
          "Epigastric hernia",
          "Incisional hernia"
        ],
        "answer": 1,
        "layers": {
          "concept": "Paraumbilical hernia",
          "discriminator": "Adult obese multiparous woman + defect just above (or below) the umbilicus through the linea alba = paraumbilical.",
          "trap": "True umbilical hernia is through the umbilical scar itself, typically in infants.",
          "rule": "Paraumbilical hernias have a narrow neck → high risk of irreducibility and strangulation → repair (mesh/Mayo).",
          "others": {
            "A": "True umbilical hernia: infants, through the umbilicus itself, often self-resolving.",
            "C": "Epigastric hernia: higher up in the midline between xiphoid and umbilicus, usually small fat-containing.",
            "D": "Incisional hernia requires a previous surgical scar."
          }
        }
      },
      {
        "id": "GM-100",
        "stem": "After an RTA a 30-year-old opens eyes only to pain, makes incomprehensible sounds and withdraws limbs to pain. GCS?",
        "options": [
          "6",
          "7",
          "8",
          "9"
        ],
        "answer": 2,
        "layers": {
          "concept": "Glasgow Coma Scale",
          "discriminator": "E2 (to pain) + V2 (incomprehensible sounds) + M4 (withdraws) = 8.",
          "trap": "Scoring 'withdrawal' as M3 (that is abnormal flexion/decorticate).",
          "rule": "E4 V5 M6. GCS ≤8 → intubate. Motor: 6 obeys, 5 localises, 4 withdraws, 3 flexion, 2 extension, 1 none.",
          "others": {
            "A": "Undercounts two components.",
            "B": "Undercounts motor (M3 = abnormal flexion).",
            "D": "Overcounts — would need localising (M5) or confused words (V4)."
          }
        }
      },
      {
        "id": "GM-101",
        "stem": "A 35-year-old has sudden severe right flank pain radiating to the groin with microscopic haematuria. Investigation of choice?",
        "options": [
          "X-ray KUB",
          "IVU",
          "Non-contrast CT KUB",
          "Ultrasound"
        ],
        "answer": 2,
        "layers": {
          "concept": "Imaging in renal colic",
          "discriminator": "NCCT KUB detects ~99% of stones (including radiolucent uric acid), size and location.",
          "trap": "Ultrasound is first-line in pregnancy and children only.",
          "rule": "Renal colic: NCCT KUB within 24 h. Stones <5 mm usually pass. Infected obstructed kidney → urgent nephrostomy/stent.",
          "others": {
            "A": "KUB misses radiolucent and small stones.",
            "B": "IVU is obsolete and needs contrast.",
            "D": "US is less sensitive for ureteric stones."
          }
        }
      },
      {
        "id": "GM-102",
        "stem": "Most sensitive and specific key investigation for acute pancreatitis?",
        "options": [
          "Serum amylase",
          "Serum lipase",
          "Abdominal ultrasound",
          "Plain AXR"
        ],
        "answer": 1,
        "layers": {
          "concept": "Pancreatitis biochemistry",
          "discriminator": "Lipase is more specific and stays raised longer (8–14 days) than amylase.",
          "trap": "Amylase is classic and faster but less specific (raised in parotitis, perforation, ischaemia).",
          "rule": "Diagnosis: 2 of 3 — typical pain, lipase/amylase >3× ULN, imaging. Ultrasound is for finding gallstones (cause), not diagnosis.",
          "others": {
            "A": "Less specific; normalises within 3–5 days.",
            "C": "US finds gallstones; pancreas often obscured by gas.",
            "D": "AXR is non-specific (sentinel loop)."
          }
        }
      },
      {
        "id": "GM-103",
        "stem": "A 40-year-old obese woman with RUQ pain, fever and nausea catches her breath on deep RUQ palpation (positive Murphy's). Condition?",
        "options": [
          "Appendicitis",
          "Acute cholecystitis",
          "Pancreatitis",
          "Perforated PU"
        ],
        "answer": 1,
        "layers": {
          "concept": "Murphy's sign",
          "discriminator": "Inspiratory arrest on RUQ palpation = inflamed gallbladder hitting the examiner's hand.",
          "trap": "Pancreatitis also causes upper abdominal pain, but Murphy's is gallbladder-specific.",
          "rule": "Fat, female, fertile, forty. Murphy's sign is negative on the left side (no comparison needed for biliary colic).",
          "others": {
            "A": "Appendicitis: RIF, McBurney's/Rovsing's sign.",
            "C": "Pancreatitis: epigastric pain radiating to back.",
            "D": "Perforation: board-like rigidity, free air."
          }
        }
      },
      {
        "id": "GM-104",
        "stem": "A 65-year-old has progressive painless jaundice and a smooth, non-tender, palpable gallbladder. According to Courvoisier's law, diagnosis?",
        "options": [
          "Impacted stone in cystic duct",
          "Chronic pancreatitis",
          "Acute cholecystitis",
          "Pancreatic head carcinoma"
        ],
        "answer": 3,
        "layers": {
          "concept": "Courvoisier's law",
          "discriminator": "Painless jaundice + palpable non-tender gallbladder → not stones → malignant distal CBD obstruction (pancreatic head).",
          "trap": "Gallstones scar the gallbladder (fibrosed, can't distend) — so palpable GB argues against them.",
          "rule": "Courvoisier: palpable GB + jaundice is unlikely to be gallstones. Workup: CT pancreas protocol, CA 19-9, ERCP/EUS.",
          "others": {
            "A": "Cystic duct stones don't cause jaundice (except Mirizzi) and are painful.",
            "B": "Chronic pancreatitis causes pain and a fibrosed system.",
            "C": "Cholecystitis is painful with tender GB."
          }
        }
      },
      {
        "id": "GM-105",
        "stem": "A 2-year-old with 2 days of acute watery diarrhoea and profuse vomiting is drowsy and unable to drink. Optimal treatment?",
        "options": [
          "ORS",
          "IV Ringer's lactate",
          "IV antibiotics",
          "Reassurance"
        ],
        "answer": 1,
        "layers": {
          "concept": "Severe dehydration (WHO Plan C)",
          "discriminator": "Lethargy + unable to drink = severe dehydration → IV fluids.",
          "trap": "ORS is ideal for some dehydration, but a drowsy child who can't drink can't take it.",
          "rule": "Plan C: RL 100 mL/kg — <12 months: 30 mL/kg over 1 h then 70 over 5 h; ≥12 months: 30 mL/kg over 30 min then 70 over 2.5 h.",
          "others": {
            "A": "Cannot drink — oral route fails.",
            "C": "Watery diarrhoea is usually viral; antibiotics not indicated.",
            "D": "Dangerous in severe dehydration."
          }
        }
      },
      {
        "id": "GM-106",
        "stem": "A breech-delivered neonate has a right claw hand plus ipsilateral miosis and ptosis. Diagnosis?",
        "options": [
          "Erb's palsy",
          "Klumpke's palsy",
          "Axillary nerve injury",
          "Radial nerve injury"
        ],
        "answer": 1,
        "layers": {
          "concept": "Lower brachial plexus injury",
          "discriminator": "Claw hand (C8–T1) + Horner's (T1 sympathetic) = Klumpke's.",
          "trap": "Erb's palsy is the more common birth palsy but gives 'waiter's tip' (C5–C6).",
          "rule": "Erb's: C5–6, shoulder dystocia/lateral neck traction. Klumpke's: C8–T1, arm hyper-abduction (breech/arm pull). Horner's indicates T1 root avulsion.",
          "others": {
            "A": "Erb's spares the hand intrinsics and doesn't give Horner's.",
            "C": "Axillary: deltoid weakness only.",
            "D": "Radial: wrist drop, no Horner's."
          }
        }
      },
      {
        "id": "GM-107",
        "stem": "A singer is planned for total thyroidectomy. Most important complication to include in written consent?",
        "options": [
          "Hoarseness",
          "Shortness of breath",
          "Recurrence",
          "Dysphagia"
        ],
        "answer": 0,
        "layers": {
          "concept": "Nerve injury in thyroid surgery",
          "discriminator": "For a professional voice user, recurrent or external branch of superior laryngeal nerve injury → voice change is the career-relevant risk.",
          "trap": "Breathlessness from bilateral RLN palsy is serious but rare; the patient-specific risk is voice.",
          "rule": "Thyroidectomy risks: RLN palsy (hoarseness), EBSLN (loss of high pitch), hypocalcaemia, haematoma (airway), hypothyroidism.",
          "others": {
            "B": "Bilateral RLN injury/haematoma — rare.",
            "C": "Recurrence is not relevant after total thyroidectomy.",
            "D": "Transient dysphagia is minor."
          }
        }
      },
      {
        "id": "GM-108",
        "stem": "During short saphenous vein surgery for varicose veins, which nerve is particularly at risk?",
        "options": [
          "Sural",
          "Popliteal",
          "Tibial",
          "Femoral"
        ],
        "answer": 0,
        "layers": {
          "concept": "Nerves near the saphenous veins",
          "discriminator": "The sural nerve runs alongside the short saphenous vein on the back of the calf.",
          "trap": "Saphenous nerve accompanies the GREAT saphenous vein.",
          "rule": "SSV → sural nerve (lateral foot numbness). GSV → saphenous nerve (medial leg numbness). SPJ surgery also risks common peroneal nerve.",
          "others": {
            "B": "There is no 'popliteal nerve' at risk; the tibial/common peroneal lie deeper in the fossa.",
            "C": "Tibial nerve lies deep in the popliteal fossa.",
            "D": "Femoral nerve is in the groin."
          }
        }
      },
      {
        "id": "GM-109",
        "stem": "A 23-year-old with mitral valve disease and poor medication compliance has sudden severe pain, coldness, numbness and weakness of the left hand and forearm for 2 hours. Cause?",
        "options": [
          "Chronic venous insufficiency",
          "DVT",
          "Acute limb ischaemia",
          "Intermittent claudication"
        ],
        "answer": 2,
        "layers": {
          "concept": "Embolic acute limb ischaemia",
          "discriminator": "Sudden 6 Ps (pain, pallor, pulselessness, perishing cold, paraesthesia, paralysis) in mitral disease (AF/LA thrombus) = embolism.",
          "trap": "Claudication is chronic and exertional, not sudden at rest.",
          "rule": "Acute limb ischaemia: IV heparin immediately → embolectomy (Fogarty). Sensory/motor loss = threatened limb, urgent.",
          "others": {
            "A": "Venous insufficiency: chronic oedema, pigmentation, ulcers.",
            "B": "DVT: swollen warm limb, pulses present.",
            "D": "Claudication: exercise-induced, relieved by rest, chronic."
          }
        }
      },
      {
        "id": "GM-110",
        "stem": "A pedestrian hit by a car is hypotensive and tachycardic with cold clammy extremities. Type of shock?",
        "options": [
          "Hypovolaemic",
          "Spinal",
          "Neurogenic",
          "Cardiogenic"
        ],
        "answer": 0,
        "layers": {
          "concept": "Shock in trauma",
          "discriminator": "Tachycardia + cold peripheries = compensatory vasoconstriction → haemorrhagic (hypovolaemic).",
          "trap": "Neurogenic shock gives hypotension with BRADYCARDIA and WARM peripheries.",
          "rule": "In trauma, hypotension = bleeding until proven otherwise. Sites: chest, abdomen, pelvis, long bones, external ('on the floor and four more').",
          "others": {
            "B": "'Spinal shock' is loss of reflexes below a cord injury, not circulatory shock.",
            "C": "Neurogenic: bradycardia, warm skin.",
            "D": "Cardiogenic: raised JVP, pulmonary oedema."
          }
        }
      },
      {
        "id": "GM-111",
        "stem": "Most important next step in a patient with pelvic trauma in shock after initial resuscitation?",
        "options": [
          "Spinal board",
          "Immobilisation",
          "Pelvic binder",
          "External pelvic fixator"
        ],
        "answer": 2,
        "layers": {
          "concept": "Haemorrhage control in pelvic fracture",
          "discriminator": "A binder at the greater trochanters reduces pelvic volume and tamponades venous bleeding — quick and non-invasive.",
          "trap": "External fixation is definitive but slower and done in theatre after temporary stabilisation.",
          "rule": "Unstable pelvis: binder → blood products → angioembolisation (arterial) or preperitoneal packing → ex-fix.",
          "others": {
            "A": "Spinal board is for transport, not haemorrhage control.",
            "B": "General immobilisation doesn't close the pelvic ring.",
            "D": "Ex-fix comes after binder, in theatre."
          }
        }
      },
      {
        "id": "GM-112",
        "stem": "After a deep laceration behind the knee, a 40-year-old cannot plantar-flex the foot and has sole numbness. Which nerve?",
        "options": [
          "Common peroneal",
          "Tibial",
          "Sural",
          "Femoral"
        ],
        "answer": 1,
        "layers": {
          "concept": "Tibial nerve injury",
          "discriminator": "Plantar-flexion loss + sole anaesthesia = tibial nerve (popliteal fossa).",
          "trap": "Common peroneal is the most commonly injured leg nerve, but causes foot DROP.",
          "rule": "Tibial: can't stand on toes, sole numb, lost ankle jerk. Common peroneal: foot drop, dorsum numb.",
          "others": {
            "A": "Foot drop and dorsal foot numbness.",
            "C": "Purely sensory, lateral foot.",
            "D": "Knee extension, anterior thigh."
          }
        }
      },
      {
        "id": "GM-113",
        "stem": "After a high-speed motorcycle collision, a hypotensive tachycardic patient's FAST shows fluid in the pericardial window. Diagnosis?",
        "options": [
          "Haemothorax",
          "Cardiac tamponade",
          "Ruptured liver",
          "Ruptured spleen"
        ],
        "answer": 1,
        "layers": {
          "concept": "FAST windows",
          "discriminator": "Fluid in the PERICARDIAL (subxiphoid) view + shock = tamponade.",
          "trap": "Liver/spleen rupture show fluid in Morison's or splenorenal pouches, not the pericardium.",
          "rule": "Beck's triad: hypotension, raised JVP, muffled sounds. Treat: pericardiocentesis as bridge → thoracotomy.",
          "others": {
            "A": "Haemothorax is seen in pleural windows (eFAST).",
            "C": "Liver: Morison's pouch.",
            "D": "Spleen: splenorenal recess."
          }
        }
      },
      {
        "id": "GM-114",
        "stem": "A 60-year-old obese woman has a chronic shallow ulcer above the medial malleolus with hyperpigmented, indurated, swollen skin. Diagnosis?",
        "options": [
          "Arterial",
          "Diabetic neuropathic",
          "Venous ulcer",
          "Tuberculosis"
        ],
        "answer": 2,
        "layers": {
          "concept": "Leg ulcer types",
          "discriminator": "Gaiter area (medial malleolus) + shallow + haemosiderin pigmentation + lipodermatosclerosis = venous.",
          "trap": "Arterial ulcers are deep, punched-out, painful, on toes/pressure points.",
          "rule": "Venous: check ABPI >0.8, then compression bandaging. Arterial: distal, painful, cold, absent pulses. Neuropathic: pressure points, painless.",
          "others": {
            "A": "Arterial: lateral/toes, punched out, pale.",
            "B": "Neuropathic: plantar pressure points, painless.",
            "D": "TB ulcers: undermined edges, rare in this site."
          }
        }
      },
      {
        "id": "GM-115",
        "stem": "Predominant cell in the first 6–24 hours of acute inflammation?",
        "options": [
          "Macrophages",
          "Neutrophils",
          "Eosinophils",
          "Lymphocytes"
        ],
        "answer": 1,
        "layers": {
          "concept": "Cell sequence in acute inflammation",
          "discriminator": "Neutrophils dominate 6–24 h; replaced by monocytes/macrophages at 24–48 h.",
          "trap": "Macrophages are the 'chief' cell later, and of chronic inflammation.",
          "rule": "Exceptions: Pseudomonas → neutrophils for days; viral → lymphocytes first; allergy/parasite → eosinophils.",
          "others": {
            "A": "Arrive at 24–48 h.",
            "C": "Allergic/parasitic responses.",
            "D": "Chronic or viral inflammation."
          }
        }
      },
      {
        "id": "GM-116",
        "stem": "A 30-year-old with chronic cough, low fever and night sweats has a lymph node with friable cheese-like material and granulomas. Type of necrosis?",
        "options": [
          "Coagulative",
          "Liquefactive",
          "Caseous",
          "Fat"
        ],
        "answer": 2,
        "layers": {
          "concept": "Caseous necrosis",
          "discriminator": "'Cheese-like' + granuloma = caseous (TB).",
          "trap": "Coagulative is the most common necrosis overall (infarcts).",
          "rule": "Coagulative: infarcts (except brain). Liquefactive: brain, abscess. Caseous: TB, fungi. Fat: pancreatitis, breast trauma. Fibrinoid: vasculitis.",
          "others": {
            "A": "Coagulative preserves tissue outline (MI, renal infarct).",
            "B": "Liquefactive: pus, brain infarcts.",
            "D": "Fat necrosis: chalky saponification."
          }
        }
      },
      {
        "id": "GM-117",
        "stem": "A 65-year-old smoker has high fever, productive cough with rust-coloured sputum, pleuritic pain and lobar consolidation. Organism?",
        "options": [
          "S. pneumoniae",
          "S. aureus",
          "Mycoplasma",
          "Klebsiella"
        ],
        "answer": 0,
        "layers": {
          "concept": "Lobar pneumonia",
          "discriminator": "Rusty sputum + entire-lobe consolidation = pneumococcus.",
          "trap": "Klebsiella also causes lobar pneumonia but with 'red currant jelly' sputum in alcoholics/diabetics.",
          "rule": "Lobar stages: congestion → red hepatisation → grey hepatisation → resolution.",
          "others": {
            "B": "S. aureus: post-influenza, cavitating/abscesses.",
            "C": "Mycoplasma: atypical, patchy, young people, mild.",
            "D": "Klebsiella: currant-jelly sputum, upper lobes, alcoholics."
          }
        }
      },
      {
        "id": "GM-118",
        "stem": "In a chronic smoker, bronchial ciliated columnar epithelium is replaced by stratified squamous epithelium. Adaptive change?",
        "options": [
          "Hyperplasia",
          "Metaplasia",
          "Dysplasia",
          "Anaplasia"
        ],
        "answer": 1,
        "layers": {
          "concept": "Cellular adaptation",
          "discriminator": "One mature cell type replaced by ANOTHER mature cell type = metaplasia (reversible).",
          "trap": "Dysplasia is disordered growth with atypia — pre-malignant, not a cell-type switch.",
          "rule": "Squamous metaplasia in smokers; Barrett's (squamous → columnar) in reflux. Metaplasia can progress to dysplasia → carcinoma.",
          "others": {
            "A": "Hyperplasia = more cells of the same type.",
            "C": "Dysplasia = atypical disordered cells.",
            "D": "Anaplasia = undifferentiated malignant cells."
          }
        }
      },
      {
        "id": "GM-119",
        "stem": "A non-healing ulcer biopsy shows activated macrophages with abundant pink cytoplasm surrounded by lymphocytes. Most characteristic cell?",
        "options": [
          "Neutrophils",
          "Eosinophils",
          "Epithelioid cells",
          "Plasma cells"
        ],
        "answer": 2,
        "layers": {
          "concept": "Granulomatous inflammation",
          "discriminator": "Activated macrophages with pink cytoplasm (epithelium-like) = epithelioid cells — defining cell of a granuloma.",
          "trap": "Lymphocytes form the rim, but they aren't the characteristic cell.",
          "rule": "Granuloma = epithelioid macrophages ± Langhans giant cells + lymphocyte cuff (± caseation in TB).",
          "others": {
            "A": "Acute inflammation.",
            "B": "Allergy/parasites.",
            "D": "Chronic inflammation generally, not granuloma-defining."
          }
        }
      },
      {
        "id": "GM-120",
        "stem": "A 32-year-old with glomerulonephritis has pedal oedema. Mechanism?",
        "options": [
          "Complement activation",
          "Decreased plasma oncotic pressure",
          "Increased hydrostatic pressure",
          "Histamine release"
        ],
        "answer": 2,
        "layers": {
          "concept": "Oedema in nephritic syndrome",
          "discriminator": "Glomerulonephritis (nephritic) → ↓ GFR → Na⁺ and water retention → ↑ hydrostatic pressure.",
          "trap": "Low oncotic pressure is the mechanism of NEPHROTIC syndrome (heavy proteinuria).",
          "rule": "Nephritic: haematuria, HTN, oliguria, oedema from salt retention. Nephrotic: >3.5 g/day proteinuria, hypoalbuminaemia, low oncotic pressure.",
          "others": {
            "A": "Complement activation causes the glomerular injury, not the oedema directly.",
            "B": "That fits nephrotic syndrome.",
            "D": "Histamine causes allergic oedema (urticaria/angioedema)."
          }
        }
      },
      {
        "id": "GM-121",
        "stem": "A chronic alcoholic's liver biopsy shows hepatocytes with large clear vacuoles pushing the nucleus to the periphery. Reversible injury type?",
        "options": [
          "Nuclear degeneration",
          "Fatty change",
          "Coagulative necrosis",
          "Apoptosis"
        ],
        "answer": 1,
        "layers": {
          "concept": "Steatosis",
          "discriminator": "Large clear vacuoles displacing the nucleus = macrovesicular fatty change (triglyceride accumulation).",
          "trap": "Necrosis and apoptosis are irreversible.",
          "rule": "Alcohol → ↑ NADH → ↑ fatty acid synthesis, ↓ oxidation → steatosis (reversible with abstinence).",
          "others": {
            "A": "Nuclear changes (pyknosis, karyorrhexis) indicate irreversible injury.",
            "C": "Irreversible.",
            "D": "Irreversible programmed cell death."
          }
        }
      },
      {
        "id": "GM-122",
        "stem": "In acute pancreatitis, chalky-white deposits form in peripancreatic fat from fatty acids binding calcium. Process?",
        "options": [
          "Calcification",
          "Saponification",
          "Coagulation",
          "Liquefaction"
        ],
        "answer": 1,
        "layers": {
          "concept": "Enzymatic fat necrosis",
          "discriminator": "Fatty acids + calcium = soap formation = saponification.",
          "trap": "It is a type of dystrophic calcification, but the specific name of the process is saponification.",
          "rule": "Saponification consumes calcium → hypocalcaemia is a poor prognostic sign in pancreatitis.",
          "others": {
            "A": "Generic term; not the specific fat–calcium soap reaction.",
            "C": "Coagulative necrosis is ischaemic.",
            "D": "Liquefactive necrosis is enzymatic digestion into fluid."
          }
        }
      },
      {
        "id": "GM-123",
        "stem": "After 8 weeks in a cast, the arm muscles are visibly smaller. Adaptation?",
        "options": [
          "Hypertrophy",
          "Hyperplasia",
          "Atrophy",
          "Metaplasia"
        ],
        "answer": 2,
        "layers": {
          "concept": "Disuse atrophy",
          "discriminator": "Reduced workload → reduced cell size = atrophy (ubiquitin–proteasome, autophagy).",
          "trap": "Hypertrophy is the opposite (increased size from increased load).",
          "rule": "Atrophy causes: disuse, denervation, ischaemia, malnutrition, loss of hormones, ageing, pressure.",
          "others": {
            "A": "Increase in cell size.",
            "B": "Increase in cell number.",
            "D": "Change of cell type."
          }
        }
      },
      {
        "id": "GM-124",
        "stem": "A 25-year-old has a mid-zone peripheral lung lesion with hilar node enlargement in primary TB. This combination is called?",
        "options": [
          "Ghon complex",
          "Assmann focus",
          "Simon focus",
          "Cavitary lesion"
        ],
        "answer": 0,
        "layers": {
          "concept": "Primary tuberculosis",
          "discriminator": "Ghon focus (subpleural lower upper/upper lower lobe) + hilar lymphadenopathy = Ghon complex.",
          "trap": "Ghon FOCUS is the lung lesion alone; adding the node makes the COMPLEX.",
          "rule": "Calcified Ghon complex = Ranke complex. Secondary TB: apical (Simon focus/Assmann focus), cavitation.",
          "others": {
            "B": "Assmann focus: infraclavicular lesion in post-primary TB.",
            "C": "Simon focus: apical seeding from primary infection.",
            "D": "Cavitation is a feature of secondary (reactivation) TB."
          }
        }
      },
      {
        "id": "GM-125",
        "stem": "A 12-year-old with acute rheumatic carditis has myocardial lesions with fibrinoid necrosis, lymphocytes and macrophages with wavy nuclei. Name?",
        "options": [
          "Aschoff body",
          "Ghon complex",
          "Reed-Sternberg cell",
          "Negri body"
        ],
        "answer": 0,
        "layers": {
          "concept": "Rheumatic heart disease pathology",
          "discriminator": "Aschoff body = pathognomonic granuloma; Anitschkow (caterpillar) cells have wavy nuclear chromatin.",
          "trap": "Choosing another 'eponymous body' from a different disease.",
          "rule": "Rheumatic fever: Jones criteria; molecular mimicry to group A strep M protein. Mitral valve most affected.",
          "others": {
            "B": "Ghon complex = primary TB.",
            "C": "Reed-Sternberg = Hodgkin lymphoma.",
            "D": "Negri bodies = rabies (Purkinje/hippocampal neurons)."
          }
        }
      },
      {
        "id": "GM-126",
        "stem": "In a mass casualty incident, a patient with minor abrasions and lacerations is ambulatory. START triage colour?",
        "options": [
          "Red",
          "Yellow",
          "Green",
          "Black"
        ],
        "answer": 2,
        "layers": {
          "concept": "START triage",
          "discriminator": "Can walk = 'walking wounded' = GREEN (minor).",
          "trap": "Labelling injuries 'yellow' because there is bleeding — mobility decides first.",
          "rule": "Walking → green. Not breathing after airway opening → black. RR >30, CRT >2 s, or can't obey commands → red. Otherwise → yellow.",
          "others": {
            "A": "Red: immediate life threat.",
            "B": "Yellow: delayed, non-ambulatory but stable.",
            "D": "Black: dead/expectant."
          }
        }
      },
      {
        "id": "GM-127",
        "stem": "Best example of primary prevention?",
        "options": [
          "Mammography",
          "Hepatitis B vaccination",
          "Physiotherapy after stroke",
          "Routine glucose monitoring in diabetic"
        ],
        "answer": 1,
        "layers": {
          "concept": "Levels of prevention",
          "discriminator": "Primary prevention stops disease from occurring — vaccination before exposure.",
          "trap": "Screening (mammography) feels preventive but is secondary (early detection).",
          "rule": "Primordial: prevent risk factors. Primary: prevent disease. Secondary: early detection/treatment. Tertiary: limit disability/rehabilitate.",
          "others": {
            "A": "Screening = secondary.",
            "C": "Rehabilitation = tertiary.",
            "D": "Monitoring established disease = tertiary (limit complications)."
          }
        }
      },
      {
        "id": "GM-128",
        "stem": "5,000 smokers and 5,000 non-smokers free of lung cancer are followed for 10 years. Study design?",
        "options": [
          "Case-control",
          "Cross-sectional",
          "Prospective cohort",
          "RCT"
        ],
        "answer": 2,
        "layers": {
          "concept": "Study designs",
          "discriminator": "Starts with EXPOSURE, disease-free, followed forward in time = prospective cohort.",
          "trap": "RCT also follows people forward, but the investigator ASSIGNS exposure — smoking can't be randomised.",
          "rule": "Cohort: exposure → outcome, gives incidence and relative risk. Case-control: outcome → past exposure, gives odds ratio.",
          "others": {
            "A": "Case-control starts with diseased vs non-diseased.",
            "B": "Cross-sectional is a single time point snapshot (prevalence).",
            "D": "No randomised intervention here."
          }
        }
      },
      {
        "id": "GM-129",
        "stem": "A new drug prolongs survival in a chronic disease without curing it; incidence is constant. Effect on prevalence?",
        "options": [
          "Decrease",
          "Unchanged",
          "Increase",
          "Decrease then increase"
        ],
        "answer": 2,
        "layers": {
          "concept": "Prevalence = incidence × duration",
          "discriminator": "Longer survival without cure → longer duration → more people living with the disease → ↑ prevalence.",
          "trap": "Thinking a 'better treatment' must lower prevalence — only cure or prevention does that.",
          "rule": "P ≈ I × D. Prevalence ↑ with longer duration, new cases, immigration of cases. ↓ with cure, death, emigration.",
          "others": {
            "A": "Would need cure or higher mortality.",
            "B": "Duration changed, so prevalence changes.",
            "D": "No mechanism for an initial fall."
          }
        }
      },
      {
        "id": "GM-130",
        "stem": "A surgical sponge is found left inside the abdomen after surgery; the patient sues for negligence. Doctrine?",
        "options": [
          "Vicarious liability",
          "Res ipsa loquitur",
          "Contributory negligence",
          "Therapeutic privilege"
        ],
        "answer": 1,
        "layers": {
          "concept": "Medical negligence doctrines",
          "discriminator": "'The thing speaks for itself' — a retained swab couldn't happen without negligence, so the patient needn't prove it.",
          "trap": "Vicarious liability also applies to hospitals, but it is about who pays, not proof of negligence.",
          "rule": "Res ipsa loquitur examples: retained instruments, wrong-side surgery, burns from equipment.",
          "others": {
            "A": "Employer liable for employee's acts — not the evidential doctrine here.",
            "C": "Patient's own negligence contributed — not applicable.",
            "D": "Withholding information that would harm the patient."
          }
        }
      },
      {
        "id": "GM-131",
        "stem": "A 45-year-old weighs 85 kg; height² = 2.89 m². WHO BMI class?",
        "options": [
          "Normal",
          "Overweight",
          "Obese class I",
          "Obese class II"
        ],
        "answer": 1,
        "layers": {
          "concept": "BMI calculation",
          "discriminator": "85 ÷ 2.89 = 29.4 kg/m² → overweight (25–29.9).",
          "trap": "Rounding up to 30 → obese class I.",
          "rule": "WHO: <18.5 underweight; 18.5–24.9 normal; 25–29.9 overweight; 30–34.9 obese I; 35–39.9 obese II; ≥40 obese III. (Asian cut-offs lower: ≥23 overweight, ≥27.5 obese.)",
          "others": {
            "A": "Normal ends at 24.9.",
            "C": "Starts at 30.0.",
            "D": "Starts at 35.0."
          }
        }
      },
      {
        "id": "GM-132",
        "stem": "An assault victim has a skull fracture with displaced bone fragments. Shajjah classification?",
        "options": [
          "Shajjah khafifa",
          "Shajjah mudiah",
          "Shajjah munaqqilah",
          "Shajjah damighah"
        ],
        "answer": 2,
        "layers": {
          "concept": "Shajjah (head/face hurt) under Qisas & Diyat",
          "discriminator": "Fracture WITH displacement of bone = munaqqilah.",
          "trap": "Hashimah is a fracture without displacement.",
          "rule": "Khafifah (no bone exposed) → Mudihah (bone exposed) → Hashimah (fracture, no displacement) → Munaqqilah (fracture + displacement) → Ammah (reaches dura) → Damighah (dura ruptured).",
          "others": {
            "A": "Khafifah: injury without exposing bone.",
            "B": "Mudihah: bone exposed, not fractured.",
            "D": "Damighah: dura ruptured."
          }
        }
      },
      {
        "id": "GM-133",
        "stem": "A neonate develops fever and bloody diarrhoea within 48 h of birth; mother had recent dysentery; stool grows Shigella. Mode of transmission?",
        "options": [
          "Faecal-oral",
          "Vector-borne",
          "Vertical",
          "Airborne"
        ],
        "answer": 2,
        "layers": {
          "concept": "Vertical (perinatal) transmission",
          "discriminator": "Mother-to-baby around birth (exposure to maternal faecal flora during delivery) with onset in 48 h = vertical/perinatal transmission.",
          "trap": "Shigella is classically faecal-oral; the mother–neonate link and timing shift the answer to vertical.",
          "rule": "Vertical = transplacental, intrapartum or perinatal from mother to child (e.g. HIV, HBV, GBS, perinatal Shigella).",
          "others": {
            "A": "Classic route for Shigella in general, but here the source is maternal during birth.",
            "B": "No vector involved.",
            "D": "Shigella isn't airborne."
          }
        }
      },
      {
        "id": "GM-134",
        "stem": "Ages 35, 25, 40, 20, 30. Median?",
        "options": [
          "25",
          "30",
          "35",
          "40"
        ],
        "answer": 1,
        "layers": {
          "concept": "Median",
          "discriminator": "Sort first: 20, 25, 30, 35, 40 → middle value = 30.",
          "trap": "Picking the middle of the UNSORTED list (40).",
          "rule": "Odd n: (n+1)/2 th value. Even n: mean of two middle values. Median resists outliers.",
          "others": {
            "A": "Second value.",
            "C": "Fourth value.",
            "D": "Middle of the unsorted list."
          }
        }
      },
      {
        "id": "GM-135",
        "stem": "A screening test has 95% sensitivity. Meaning?",
        "options": [
          "95% without disease test negative",
          "95% with disease test positive",
          "95% of positives have disease",
          "5% with disease test positive"
        ],
        "answer": 1,
        "layers": {
          "concept": "Sensitivity",
          "discriminator": "Sensitivity = TP ÷ (TP + FN) — the proportion of DISEASED people who test positive.",
          "trap": "A is specificity; C is PPV.",
          "rule": "SnNout: a highly Sensitive test, when Negative, rules out. SpPin: Specific + Positive rules in.",
          "others": {
            "A": "Specificity.",
            "C": "Positive predictive value.",
            "D": "Inverted — 5% would be false negatives."
          }
        }
      },
      {
        "id": "GM-136",
        "stem": "A 2-year-old has a 5-minute generalised tonic-clonic seizure with fever 39.2 °C, no focal deficit, first episode. Diagnosis?",
        "options": [
          "Complex febrile seizure",
          "Simple febrile seizure",
          "Absence seizure",
          "Bacterial meningitis"
        ],
        "answer": 1,
        "layers": {
          "concept": "Febrile seizure classification",
          "discriminator": "Generalised + <15 min + single in 24 h + 6 m–5 y + no focal signs = simple.",
          "trap": "Choosing complex because 5 minutes 'sounds long'.",
          "rule": "Complex: focal, >15 min, or recurs within 24 h. Simple febrile seizures carry excellent prognosis; treat the fever source.",
          "others": {
            "A": "Needs focality, >15 min or recurrence.",
            "C": "Absence: brief staring spells, 3 Hz spike-wave, no fever link.",
            "D": "Meningitis: neck stiffness, bulging fontanelle, toxic look — not described."
          }
        }
      },
      {
        "id": "GM-137",
        "stem": "An unvaccinated 4-year-old with fever, cough, coryza and conjunctivitis has white spots on red base on buccal mucosa a day before a maculopapular rash. Name?",
        "options": [
          "Koplik spots",
          "Rose spots",
          "Roth spots",
          "Bitot spots"
        ],
        "answer": 0,
        "layers": {
          "concept": "Measles prodrome",
          "discriminator": "3 Cs (cough, coryza, conjunctivitis) + buccal white spots = Koplik spots (pathognomonic for measles).",
          "trap": "Other eponymous 'spots' belong to unrelated diseases.",
          "rule": "Measles: rash starts behind ears/face, spreads down. Give vitamin A. Complications: pneumonia, encephalitis, SSPE.",
          "others": {
            "B": "Rose spots: typhoid (trunk).",
            "C": "Roth spots: retinal haemorrhages in endocarditis.",
            "D": "Bitot spots: conjunctival in vitamin A deficiency."
          }
        }
      },
      {
        "id": "GM-138",
        "stem": "At what age can a child typically copy a square?",
        "options": [
          "2 years",
          "3 years",
          "4 years",
          "6 years"
        ],
        "answer": 2,
        "layers": {
          "concept": "Fine motor milestones",
          "discriminator": "Square = 4 years.",
          "trap": "Circle (3 years) vs square (4 years) — adjacent milestones.",
          "rule": "Line 2 y, circle 3 y, cross 3.5–4 y, square 4 y, triangle 5 y, diamond 6 y.",
          "others": {
            "A": "Vertical line.",
            "B": "Circle.",
            "D": "Diamond."
          }
        }
      },
      {
        "id": "GM-139",
        "stem": "A 1-year-old with diarrhoea is lethargic, has sunken eyes, cannot drink and skin pinch goes back very slowly (>2 s). IMNCI degree of dehydration?",
        "options": [
          "None",
          "Some",
          "Severe",
          "Hypernatraemic"
        ],
        "answer": 2,
        "layers": {
          "concept": "IMNCI dehydration classification",
          "discriminator": "≥2 of: lethargic/unconscious, sunken eyes, not able to drink, skin pinch very slow = severe.",
          "trap": "Sunken eyes alone fit 'some' — the lethargy and inability to drink upgrade it.",
          "rule": "Some: restless/irritable, drinks eagerly, pinch slow → Plan B (ORS 75 mL/kg over 4 h). Severe → Plan C (IV RL).",
          "others": {
            "A": "Signs clearly present.",
            "B": "Some dehydration has irritability and eager drinking.",
            "D": "Hypernatraemia is a biochemical type, not an IMNCI grade."
          }
        }
      },
      {
        "id": "GM-140",
        "stem": "A 4-year-old with untreated coeliac disease is at increased risk of?",
        "options": [
          "Type 1 diabetes",
          "Cystic fibrosis",
          "Sickle cell anaemia",
          "Congenital heart disease"
        ],
        "answer": 0,
        "layers": {
          "concept": "Autoimmune associations of coeliac disease",
          "discriminator": "Shared HLA-DQ2/DQ8 → association with T1DM, autoimmune thyroiditis.",
          "trap": "CF and sickle cell are genetic disorders with no causal link.",
          "rule": "Coeliac associations: T1DM, thyroid disease, dermatitis herpetiformis, IgA deficiency, Down/Turner syndrome, enteropathy-associated T-cell lymphoma.",
          "others": {
            "B": "Autosomal recessive CFTR mutation — unrelated.",
            "C": "HbS mutation — unrelated.",
            "D": "Congenital; can't be acquired from coeliac disease."
          }
        }
      },
      {
        "id": "GM-141",
        "stem": "A 3-day-old has unconjugated jaundice; mother O-negative, baby A-positive; DAT positive. Diagnosis?",
        "options": [
          "Physiological",
          "ABO HDN",
          "Rh HDN",
          "Breast milk jaundice"
        ],
        "answer": 1,
        "layers": {
          "concept": "Immune haemolytic disease of the newborn",
          "discriminator": "O mother + A baby → maternal anti-A IgG; ABO HDN is far more common, can affect a first baby and is usually milder.",
          "trap": "Mother is also Rh-negative, tempting C — but no history of prior sensitisation is given, and ABO incompatibility actually protects against Rh sensitisation.",
          "rule": "ABO HDN: O mothers, first pregnancy possible, mild, DAT weakly positive, spherocytes. Rh HDN: prior sensitisation, severe, early (<24 h) jaundice, hydrops.",
          "others": {
            "A": "Physiological jaundice is DAT-negative.",
            "C": "Possible, but requires prior sensitisation; ABO is the more common/likely answer here.",
            "D": "Breast milk jaundice appears after the first week and is DAT-negative."
          }
        }
      },
      {
        "id": "GM-142",
        "stem": "A 2-year-old with pallor, irritability and pica drinks excessive cow's milk; microcytic hypochromic anaemia with low ferritin. Diagnosis?",
        "options": [
          "Thalassaemia minor",
          "Iron deficiency anaemia",
          "Sideroblastic anaemia",
          "Lead poisoning"
        ],
        "answer": 1,
        "layers": {
          "concept": "Nutritional iron deficiency",
          "discriminator": "LOW FERRITIN is diagnostic; excess cow's milk (low iron, occult GI loss) + pica fits.",
          "trap": "Lead poisoning also causes pica and microcytosis, but ferritin is normal and basophilic stippling is seen.",
          "rule": "Low ferritin = iron deficiency. Limit cow's milk to ~500 mL/day and give oral iron.",
          "others": {
            "A": "Thalassaemia: normal/high ferritin, high RBC count, Mentzer <13.",
            "C": "Sideroblastic: high ferritin, ring sideroblasts.",
            "D": "Lead: normal ferritin, basophilic stippling."
          }
        }
      },
      {
        "id": "GM-143",
        "stem": "A 5-year-old has a systolic murmur and a widely split S2 that doesn't vary with respiration. Diagnosis?",
        "options": [
          "VSD",
          "ASD",
          "PDA",
          "Tetralogy of Fallot"
        ],
        "answer": 1,
        "layers": {
          "concept": "Fixed splitting of S2",
          "discriminator": "Wide FIXED split S2 = ASD (RV volume overload; respiration doesn't change the shunt).",
          "trap": "VSD gives a pansystolic murmur without fixed splitting.",
          "rule": "ASD murmur is an ejection systolic flow murmur at the upper left sternal edge (pulmonary flow), not across the defect.",
          "others": {
            "A": "Harsh pansystolic murmur, lower left sternal edge.",
            "C": "Continuous machinery murmur.",
            "D": "Cyanosis, single S2, ejection murmur from RVOT obstruction."
          }
        }
      },
      {
        "id": "GM-144",
        "stem": "A 6-year-old has 1 year of recurrent nocturnal and exercise-induced dry cough and wheeze, with eczema; chest clear today. Diagnosis?",
        "options": [
          "Foreign body",
          "Asthma",
          "Bronchiolitis",
          "Cystic fibrosis"
        ],
        "answer": 1,
        "layers": {
          "concept": "Childhood asthma",
          "discriminator": "Recurrent, variable, nocturnal + exercise triggers + atopy (eczema) = asthma; normal exam between episodes.",
          "trap": "Foreign body causes sudden unilateral persistent wheeze, not a year of episodic symptoms.",
          "rule": "Atopic triad: asthma, eczema, allergic rhinitis. Diagnose with history + spirometry/reversibility or FeNO if ≥5 years.",
          "others": {
            "A": "Sudden onset, choking episode, unilateral findings.",
            "C": "Infants <1 year, viral, single episode.",
            "D": "Failure to thrive, steatorrhoea, chronic productive cough."
          }
        }
      },
      {
        "id": "GM-145",
        "stem": "A healthy 3-year-old has a large firm smooth abdominal mass and microscopic haematuria. Diagnosis?",
        "options": [
          "Neuroblastoma",
          "Wilms tumour",
          "Hydronephrosis",
          "CAH"
        ],
        "answer": 1,
        "layers": {
          "concept": "Childhood abdominal masses",
          "discriminator": "Well child + smooth flank mass (doesn't cross midline) + haematuria = Wilms (nephroblastoma).",
          "trap": "Neuroblastoma is also a toddler mass but is irregular, crosses the midline, and the child is unwell.",
          "rule": "Wilms: WT1/WT2, associated with WAGR, Beckwith–Wiedemann. Don't palpate repeatedly (rupture risk).",
          "others": {
            "A": "Irregular, crosses midline, raised VMA/HVA, unwell child.",
            "C": "Soft/cystic, not firm solid.",
            "D": "CAH: virilisation/salt wasting, no mass."
          }
        }
      },
      {
        "id": "GM-146",
        "stem": "A 6-year-old with 2 days of fever, headache, photophobia and vomiting is alert; neck stiff, Kernig's positive; CSF lymphocytes, normal glucose, mildly raised protein. Diagnosis?",
        "options": [
          "Bacterial meningitis",
          "TB meningitis",
          "Encephalitis",
          "Viral meningitis"
        ],
        "answer": 3,
        "layers": {
          "concept": "CSF interpretation",
          "discriminator": "Lymphocytes + NORMAL glucose + alert child = viral meningitis.",
          "trap": "TB meningitis is also lymphocytic, but glucose is LOW and onset is subacute (weeks).",
          "rule": "Bacterial: neutrophils, ↓ glucose, ↑↑ protein. TB: lymphocytes, ↓ glucose, ↑↑ protein. Viral: lymphocytes, normal glucose, mild ↑ protein.",
          "others": {
            "A": "Neutrophilic, low glucose.",
            "B": "Low glucose, weeks of illness.",
            "C": "Encephalitis: altered consciousness/seizures — child is alert here."
          }
        }
      },
      {
        "id": "GM-147",
        "stem": "A 4-month-old in winter has a runny nose and mild fever progressing to tachypnoea, wheeze and fine crackles. Most common causative agent?",
        "options": [
          "Adenovirus",
          "Rhinovirus",
          "Parainfluenza",
          "RSV"
        ],
        "answer": 3,
        "layers": {
          "concept": "Bronchiolitis",
          "discriminator": "Infant <1 y + winter + coryza then wheeze/crackles = bronchiolitis → RSV.",
          "trap": "Parainfluenza is the main cause of CROUP.",
          "rule": "Supportive care (O₂, feeds). Palivizumab prophylaxis for high-risk infants.",
          "others": {
            "A": "Adenovirus causes pharyngoconjunctival fever, some pneumonia.",
            "B": "Rhinovirus is the second cause; less common than RSV.",
            "C": "Parainfluenza → croup."
          }
        }
      },
      {
        "id": "GM-148",
        "stem": "A 2-year-old has a barking seal-like cough, hoarseness and inspiratory stridor, worse at night. Diagnosis?",
        "options": [
          "Epiglottitis",
          "Croup",
          "Foreign body",
          "Bronchiolitis"
        ],
        "answer": 1,
        "layers": {
          "concept": "Croup (laryngotracheobronchitis)",
          "discriminator": "Barking cough + stridor + hoarseness, 6 m–3 y = croup (parainfluenza).",
          "trap": "Epiglottitis also causes stridor, but with drooling, toxic look, tripod posture and NO barking cough.",
          "rule": "Croup: steeple sign on X-ray; oral dexamethasone; nebulised adrenaline if severe.",
          "others": {
            "A": "Drooling, toxic, thumbprint sign.",
            "C": "Sudden onset, choking history.",
            "D": "Wheeze and crackles, not stridor."
          }
        }
      },
      {
        "id": "GM-149",
        "stem": "An 8-year-old has low fever, persistent dry cough and headache; CXR shows bilateral patchy infiltrates but the child doesn't look sick. Organism?",
        "options": [
          "S. pneumoniae",
          "Mycoplasma",
          "S. aureus",
          "H. influenzae"
        ],
        "answer": 1,
        "layers": {
          "concept": "Atypical ('walking') pneumonia",
          "discriminator": "School-age + dry cough + headache + CXR worse than the child looks = Mycoplasma.",
          "trap": "S. pneumoniae is the commonest pneumonia overall but gives lobar consolidation and an unwell child.",
          "rule": "Mycoplasma: cold agglutinins, erythema multiforme, bullous myringitis. Treat with macrolide (no cell wall → β-lactams useless).",
          "others": {
            "A": "Lobar, high fever, sick child.",
            "C": "Cavitation/empyema, very ill.",
            "D": "Younger children, typical bacterial pattern."
          }
        }
      },
      {
        "id": "GM-150",
        "stem": "A 5-week-old boy has projectile vomiting after feeds, constant hunger and an olive-shaped abdominal mass. Diagnosis?",
        "options": [
          "GERD",
          "Duodenal atresia",
          "Intussusception",
          "Pyloric stenosis"
        ],
        "answer": 3,
        "layers": {
          "concept": "Infantile hypertrophic pyloric stenosis",
          "discriminator": "3–6 weeks + non-bilious projectile vomiting + hungry baby + olive mass.",
          "trap": "Duodenal atresia presents in the first day with BILIOUS vomiting and double-bubble.",
          "rule": "Hypochloraemic hypokalaemic metabolic alkalosis; correct fluids/electrolytes first → Ramstedt pyloromyotomy.",
          "others": {
            "A": "Effortless regurgitation, no mass.",
            "B": "Bilious vomiting day 1, double-bubble, Down's association.",
            "C": "6–18 months, red-currant jelly stool, sausage mass."
          }
        }
      },
      {
        "id": "GM-151",
        "stem": "A 46-year-old with menorrhagia and fatigue has hypochromic microcytic RBCs with pencil cells. Confirmatory test?",
        "options": [
          "Haptoglobin",
          "Hb electrophoresis",
          "Serum transferrin",
          "Serum ferritin"
        ],
        "answer": 3,
        "layers": {
          "concept": "Iron deficiency anaemia",
          "discriminator": "Chronic blood loss + microcytosis + pencil cells → confirm with LOW ferritin (most specific test of iron stores).",
          "trap": "Hb electrophoresis is for thalassaemia, which doesn't fit menorrhagia.",
          "rule": "Ferritin <15–30 µg/L confirms IDA (but it is an acute-phase reactant; may be falsely normal in inflammation). TIBC/transferrin ↑, saturation ↓.",
          "others": {
            "A": "Haptoglobin falls in haemolysis.",
            "B": "Electrophoresis diagnoses thalassaemia/haemoglobinopathy.",
            "C": "Transferrin rises in IDA but is less specific than ferritin."
          }
        }
      },
      {
        "id": "GM-152",
        "stem": "A 30-year-old has weight loss, palpitations, heat intolerance and bilateral proptosis; suppressed TSH, high free T4. Mechanism?",
        "options": [
          "TSH-secreting adenoma",
          "Iodine deficiency",
          "TPO destruction",
          "Thyroid-stimulating immunoglobulins"
        ],
        "answer": 3,
        "layers": {
          "concept": "Graves' disease",
          "discriminator": "Hyperthyroid + EYE signs = Graves' → TSH-receptor-stimulating antibodies (TSI).",
          "trap": "TPO antibodies are typical of Hashimoto's (hypothyroidism).",
          "rule": "Graves' triad: hyperthyroidism, ophthalmopathy, pretibial myxoedema. Diffuse uptake on scan.",
          "others": {
            "A": "TSH would be HIGH, not suppressed.",
            "B": "Iodine deficiency causes goitre/hypothyroidism.",
            "C": "TPO-mediated destruction = Hashimoto's."
          }
        }
      },
      {
        "id": "GM-153",
        "stem": "Heberden's nodes are present in?",
        "options": [
          "Ankylosing spondylitis",
          "Gout",
          "Osteoarthritis",
          "Rheumatoid arthritis"
        ],
        "answer": 2,
        "layers": {
          "concept": "Hand signs in arthritis",
          "discriminator": "Heberden's = DIP osteophytes; Bouchard's = PIP osteophytes → osteoarthritis.",
          "trap": "RA affects hands too, but SPARES the DIPs.",
          "rule": "OA: DIP/PIP, 1st CMC, weight-bearing joints. RA: MCP/PIP, wrist, ulnar deviation, swan neck, boutonnière.",
          "others": {
            "A": "Axial spine and sacroiliac disease.",
            "B": "Tophi and acute monoarthritis (1st MTP).",
            "D": "Spares DIP joints."
          }
        }
      },
      {
        "id": "GM-154",
        "stem": "A 15-year-old with polydipsia, polyuria and BSR 400 mg/dL. Most likely acute complication?",
        "options": [
          "Sepsis",
          "DKA",
          "HHS",
          "Lactic acidosis"
        ],
        "answer": 1,
        "layers": {
          "concept": "Acute complications by diabetes type",
          "discriminator": "Teenager = Type 1 (absolute insulin deficiency) → DKA.",
          "trap": "HHS is the complication of elderly Type 2 patients.",
          "rule": "DKA: glucose >250 mg/dL, pH <7.3, HCO₃ <18, ketones. Treat: fluids → insulin infusion → potassium.",
          "others": {
            "A": "Possible trigger, not the expected direct complication.",
            "C": "HHS: older T2DM, glucose >600, no ketosis.",
            "D": "Lactic acidosis relates to metformin/shock."
          }
        }
      },
      {
        "id": "GM-155",
        "stem": "A pregnant woman at 8 weeks has Graves' hyperthyroidism. Best antithyroid drug?",
        "options": [
          "Methimazole",
          "Carbimazole",
          "PTU",
          "Radioactive iodine"
        ],
        "answer": 2,
        "layers": {
          "concept": "Antithyroid drugs in pregnancy",
          "discriminator": "FIRST trimester → PTU (methimazole/carbimazole are teratogenic: aplasia cutis, embryopathy).",
          "trap": "Methimazole is preferred outside the first trimester — timing is the key.",
          "rule": "1st trimester PTU → switch to methimazole in 2nd/3rd (PTU hepatotoxicity). RAI contraindicated in pregnancy.",
          "others": {
            "A": "Teratogenic in the first trimester.",
            "B": "Prodrug of methimazole — same risk.",
            "D": "Destroys the fetal thyroid; absolutely contraindicated."
          }
        }
      },
      {
        "id": "GM-156",
        "stem": "A 55-year-old has progressive hand weakness, wasting and fasciculations, with lower-limb hyperreflexia and normal sensation. Diagnosis?",
        "options": [
          "Myasthenia gravis",
          "GBS",
          "Multiple sclerosis",
          "ALS"
        ],
        "answer": 3,
        "layers": {
          "concept": "Motor neurone disease",
          "discriminator": "Mixed UMN (hyperreflexia) + LMN (wasting, fasciculations) signs with PURELY motor involvement = ALS.",
          "trap": "MS also gives UMN signs, but with sensory and visual involvement and no fasciculations.",
          "rule": "MND spares sensation, eye movements and sphincters. Riluzole prolongs survival.",
          "others": {
            "A": "Fatigable weakness, no wasting/fasciculations.",
            "B": "Areflexia, ascending, often sensory symptoms.",
            "C": "Sensory, visual and cerebellar features; relapsing course."
          }
        }
      },
      {
        "id": "GM-157",
        "stem": "A third-trimester pregnant woman has acute hepatitis E. Most significant risk?",
        "options": [
          "High maternal mortality",
          "Chronic hepatitis",
          "HCC",
          "Carrier state"
        ],
        "answer": 0,
        "layers": {
          "concept": "Hepatitis E in pregnancy",
          "discriminator": "HEV in the third trimester → fulminant hepatic failure with mortality up to 20–25%.",
          "trap": "Chronicity and HCC belong to HBV/HCV.",
          "rule": "HEV: faeco-oral, waterborne, self-limiting except in pregnancy (genotype 1/2) and immunosuppressed (chronic genotype 3).",
          "others": {
            "B": "HEV rarely becomes chronic (only in immunosuppressed).",
            "C": "Not an HEV risk.",
            "D": "No carrier state."
          }
        }
      },
      {
        "id": "GM-158",
        "stem": "A 70-year-old has throbbing left temporal headache, scalp tenderness, jaw claudication and very high ESR. Diagnosis?",
        "options": [
          "Migraine",
          "Giant cell arteritis",
          "Cluster headache",
          "Trigeminal neuralgia"
        ],
        "answer": 1,
        "layers": {
          "concept": "Giant cell (temporal) arteritis",
          "discriminator": ">50 y + new temporal headache + jaw claudication + scalp tenderness + raised ESR.",
          "trap": "Delaying steroids for biopsy — GCA risks irreversible blindness.",
          "rule": "Start high-dose prednisolone immediately; temporal artery biopsy within 2 weeks. Associated with polymyalgia rheumatica.",
          "others": {
            "A": "Younger patients, aura, normal ESR.",
            "C": "Young men, periorbital, autonomic features.",
            "D": "Brief electric-shock facial pain, normal ESR."
          }
        }
      },
      {
        "id": "GM-159",
        "stem": "A 12-year-old girl has pedal oedema, periorbital puffiness and 4+ proteinuria. Initial treatment to reduce proteinuria?",
        "options": [
          "Calcium channel blockers",
          "Diuretic",
          "Prednisolone",
          "Protein restriction"
        ],
        "answer": 2,
        "layers": {
          "concept": "Childhood nephrotic syndrome",
          "discriminator": "Child + nephrotic picture = minimal change disease until proven otherwise → steroid-responsive.",
          "trap": "Diuretics treat the oedema, not the proteinuria.",
          "rule": "Prednisolone 60 mg/m²/day for 4–6 weeks then taper. Steroid-resistant → biopsy (FSGS).",
          "others": {
            "A": "No antiproteinuric role (ACEi would be, not CCB).",
            "B": "Symptomatic oedema relief only.",
            "D": "Protein restriction is not recommended in children."
          }
        }
      },
      {
        "id": "GM-160",
        "stem": "A 21-year-old has painless gross haematuria 2 days after a sore throat; BP 170/110; dipstick ++ protein with dysmorphic RBCs. Diagnosis?",
        "options": [
          "Diabetic nephropathy",
          "IgA nephropathy",
          "Minimal change",
          "UTI"
        ],
        "answer": 1,
        "layers": {
          "concept": "Synpharyngitic haematuria",
          "discriminator": "Haematuria within 1–3 days of a URTI = IgA nephropathy.",
          "trap": "Post-streptococcal GN causes haematuria 1–3 WEEKS after the sore throat (not an option here).",
          "rule": "IgA: young males, mesangial IgA deposits, most common GN worldwide. PSGN: 1–3 w (throat) / 3–6 w (skin), low C3.",
          "others": {
            "A": "Requires long-standing diabetes; no haematuria.",
            "C": "Heavy proteinuria without haematuria or hypertension.",
            "D": "Dysmorphic RBCs indicate glomerular, not lower urinary, origin."
          }
        }
      },
      {
        "id": "GM-161",
        "stem": "Most common type of emphysema in a chronic smoker?",
        "options": [
          "Centriacinar",
          "Panacinar",
          "Paraseptal",
          "Irregular"
        ],
        "answer": 0,
        "layers": {
          "concept": "Emphysema subtypes",
          "discriminator": "Smoking → centriacinar (respiratory bronchiole), upper lobes.",
          "trap": "Panacinar is linked to α1-antitrypsin deficiency (lower lobes).",
          "rule": "Centriacinar: smokers, upper zones. Panacinar: A1AT, lower zones. Paraseptal: young, spontaneous pneumothorax.",
          "others": {
            "B": "A1AT deficiency.",
            "C": "Subpleural bullae, pneumothorax.",
            "D": "Scar-associated, usually incidental."
          }
        }
      },
      {
        "id": "GM-162",
        "stem": "A 60-year-old smoker has chronic productive cough, frequent infections, cyanosis, overweight and raised JVP. Underlying pathology?",
        "options": [
          "Bronchiectasis",
          "Centriacinar emphysema",
          "Chronic bronchitis",
          "A1AT deficiency"
        ],
        "answer": 2,
        "layers": {
          "concept": "'Blue bloater' COPD",
          "discriminator": "Productive cough + cyanosis + obesity + cor pulmonale (raised JVP) = chronic bronchitis phenotype.",
          "trap": "Emphysema is the 'pink puffer' — thin, breathless, not cyanosed.",
          "rule": "Chronic bronchitis: productive cough ≥3 months in 2 consecutive years. Reid index >0.4.",
          "others": {
            "A": "Copious purulent sputum, clubbing, tram-tracks on CT.",
            "B": "Pink puffer: thin, pursed lips, hyperinflation.",
            "D": "Young, lower-lobe panacinar emphysema, liver disease."
          }
        }
      },
      {
        "id": "GM-163",
        "stem": "A healthcare worker's serology: HBsAg −, anti-HBs +, anti-HBc −. Interpretation?",
        "options": [
          "Acute HBV",
          "Chronic HBV",
          "Successful vaccination",
          "Resolved infection"
        ],
        "answer": 2,
        "layers": {
          "concept": "Hepatitis B serology",
          "discriminator": "Anti-HBs ALONE (anti-HBc negative) = vaccine immunity — vaccine contains only HBsAg.",
          "trap": "Resolved natural infection also has anti-HBs, but ALSO anti-HBc.",
          "rule": "Anti-HBc = ever infected. IgM anti-HBc = acute. HBsAg >6 months = chronic. Anti-HBs = immune.",
          "others": {
            "A": "HBsAg + IgM anti-HBc would be positive.",
            "B": "HBsAg positive for >6 months.",
            "D": "Anti-HBc would be positive."
          }
        }
      },
      {
        "id": "GM-164",
        "stem": "A 16-year-old girl has short stature, webbed neck and primary amenorrhoea. Karyotype?",
        "options": [
          "46,XX",
          "45,X",
          "47,XXY",
          "47,XX,+21"
        ],
        "answer": 1,
        "layers": {
          "concept": "Turner syndrome",
          "discriminator": "Short stature + webbed neck + primary amenorrhoea (streak ovaries) = 45,X.",
          "trap": "Noonan syndrome looks similar but has a normal karyotype.",
          "rule": "Turner: coarctation, bicuspid aortic valve, horseshoe kidney, lymphoedema at birth. Treat with GH and oestrogen replacement.",
          "others": {
            "A": "Normal female karyotype.",
            "C": "Klinefelter (tall male, hypogonadism).",
            "D": "Down syndrome."
          }
        }
      },
      {
        "id": "GM-165",
        "stem": "A 20-year-old athlete with exertional syncope has a harsh systolic murmur at the LSE that increases with Valsalva. Diagnosis?",
        "options": [
          "Aortic stenosis",
          "Mitral regurgitation",
          "HOCM",
          "VSD"
        ],
        "answer": 2,
        "layers": {
          "concept": "Dynamic LVOT obstruction",
          "discriminator": "Murmur that INCREASES with Valsalva (↓ preload) = HOCM. Only HOCM and MVP louden with Valsalva.",
          "trap": "Aortic stenosis gets SOFTER with Valsalva.",
          "rule": "HOCM: ↑ with Valsalva/standing, ↓ with squatting/handgrip. Leading cause of sudden death in young athletes. Avoid nitrates/diuretics; use β-blockers.",
          "others": {
            "A": "Softer with Valsalva; older patients.",
            "B": "Apical pansystolic, softer with Valsalva.",
            "D": "Pansystolic at LLSE, not Valsalva-dependent increase."
          }
        }
      },
      {
        "id": "GM-166",
        "stem": "A 5-year-old boy has progressive weakness, difficulty climbing stairs, calf enlargement and Gowers' sign. Inheritance?",
        "options": [
          "AD",
          "AR",
          "X-linked recessive",
          "X-linked dominant"
        ],
        "answer": 2,
        "layers": {
          "concept": "Duchenne muscular dystrophy",
          "discriminator": "Boy + proximal weakness + pseudohypertrophy of calves + Gowers' = DMD (dystrophin gene, Xp21).",
          "trap": "Choosing autosomal patterns — DMD affects boys because it is X-linked.",
          "rule": "DMD: frameshift deletion, absent dystrophin, CK very high, wheelchair by ~12. Becker: in-frame, milder.",
          "others": {
            "A": "Myotonic dystrophy is AD, not this picture.",
            "B": "Limb-girdle/SMA are AR.",
            "D": "Rare (e.g. Rett, vitamin D-resistant rickets)."
          }
        }
      },
      {
        "id": "GM-167",
        "stem": "A 12-year-old with hereditary spherocytosis has sudden severe pallor after a flu-like illness; Hb 10 → 5 g/dL; reticulocytes very low. Cause?",
        "options": [
          "AIHA",
          "Parvovirus B19",
          "Folate deficiency",
          "Splenic sequestration"
        ],
        "answer": 1,
        "layers": {
          "concept": "Aplastic crisis",
          "discriminator": "Sudden Hb drop + LOW reticulocytes after a viral illness = parvovirus B19 halting erythropoiesis.",
          "trap": "Splenic sequestration also drops Hb, but reticulocytes are HIGH and the spleen enlarges.",
          "rule": "Parvovirus targets P antigen on erythroid precursors. Low retics = production failure; high retics = haemolysis/sequestration.",
          "others": {
            "A": "Haemolysis → high reticulocytes, positive DAT.",
            "C": "Slow onset, megaloblastic picture.",
            "D": "High reticulocytes, massive splenomegaly."
          }
        }
      },
      {
        "id": "GM-168",
        "stem": "A 65-year-old has bone pain (especially back), fatigue, recurrent infections and punched-out lytic skull lesions. Diagnosis?",
        "options": [
          "Osteoporosis",
          "Multiple myeloma",
          "OA",
          "Bone metastasis"
        ],
        "answer": 1,
        "layers": {
          "concept": "Multiple myeloma",
          "discriminator": "Punched-out lytic lesions + infections (immunoparesis) + bone pain in an elderly patient.",
          "trap": "Metastases also cause lytic lesions, but don't explain recurrent infections and are less 'punched-out'.",
          "rule": "CRAB: hyperCalcaemia, Renal failure, Anaemia, Bone lesions. Serum/urine electrophoresis (M-band, Bence Jones), bone marrow >10% plasma cells. Bone scan is falsely negative.",
          "others": {
            "A": "Osteoporosis has no lytic lesions.",
            "C": "Joint disease, no lytic skull lesions.",
            "D": "Possible differential; infections favour myeloma."
          }
        }
      },
      {
        "id": "GM-169",
        "stem": "A 55-year-old on hydralazine develops arthralgia, fever and pleuritis without rash or renal involvement. Antibody?",
        "options": [
          "Anti-dsDNA",
          "Anti-centromere",
          "Anti-Smith",
          "Anti-histone"
        ],
        "answer": 3,
        "layers": {
          "concept": "Drug-induced lupus",
          "discriminator": "Lupus features on hydralazine with SPARED kidneys/CNS = drug-induced lupus → anti-histone.",
          "trap": "Anti-dsDNA and anti-Smith are specific for idiopathic SLE.",
          "rule": "DIL drugs: SHIPP-E — Sulfonamides, Hydralazine, Isoniazid, Procainamide, Phenytoin, Etanercept. Resolves on stopping the drug.",
          "others": {
            "A": "SLE-specific; correlates with lupus nephritis.",
            "B": "Limited systemic sclerosis (CREST).",
            "C": "Most specific for SLE."
          }
        }
      },
      {
        "id": "GM-170",
        "stem": "A 35-year-old has nightly unilateral periorbital pain, red eye and nasal congestion — cluster headache. Acute treatment?",
        "options": [
          "High-flow 100% oxygen",
          "Oral ibuprofen",
          "Oral propranolol",
          "Oral amitriptyline"
        ],
        "answer": 0,
        "layers": {
          "concept": "Acute cluster headache",
          "discriminator": "Acute attack = high-flow O₂ (12–15 L/min via non-rebreather) or SC/intranasal sumatriptan.",
          "trap": "Propranolol and amitriptyline are MIGRAINE prophylaxis.",
          "rule": "Acute: O₂ + triptan. Prophylaxis: verapamil (first-line), short steroid course, lithium.",
          "others": {
            "B": "Too slow and ineffective for cluster attacks.",
            "C": "Migraine prophylaxis, not cluster.",
            "D": "Tension-type/migraine prophylaxis."
          }
        }
      },
      {
        "id": "GM-171",
        "stem": "A 30-year-old has medullary thyroid carcinoma, hypercalcaemia from parathyroid hyperplasia, and episodic headaches with palpitations. Diagnosis?",
        "options": [
          "MEN 1",
          "MEN 2A",
          "MEN 2B",
          "Sporadic MTC"
        ],
        "answer": 1,
        "layers": {
          "concept": "MEN 2A (Sipple syndrome)",
          "discriminator": "MTC + parathyroid + phaeochromocytoma (episodic headache/palpitations) = MEN 2A.",
          "trap": "MEN 2B shares MTC and phaeo but has NO parathyroid disease; it has mucosal neuromas and marfanoid habitus.",
          "rule": "RET mutation → prophylactic thyroidectomy in carriers. Always exclude phaeo before any surgery.",
          "others": {
            "A": "Pituitary, parathyroid, pancreas — no MTC.",
            "C": "No hyperparathyroidism.",
            "D": "Sporadic MTC doesn't explain parathyroid and phaeo features."
          }
        }
      },
      {
        "id": "GM-172",
        "stem": "A 22-year-old with 3 months' low fever has reduced left chest expansion, dull percussion, reduced vocal resonance on the left and trachea deviated right. Diagnosis?",
        "options": [
          "Right lung collapse",
          "Left pulmonary fibrosis",
          "Left pneumothorax",
          "Left pleural effusion"
        ],
        "answer": 3,
        "layers": {
          "concept": "Chest signs",
          "discriminator": "Stony dull + reduced resonance + trachea pushed AWAY = effusion (here likely tuberculous given chronic fever).",
          "trap": "Collapse also gives dullness, but trachea is pulled TOWARDS the affected side.",
          "rule": "Push away: effusion, tension pneumothorax. Pull towards: collapse, fibrosis, pneumonectomy. Hyper-resonant = pneumothorax.",
          "others": {
            "A": "Right collapse would pull trachea right with right-sided signs.",
            "B": "Fibrosis pulls trachea towards left; crackles present.",
            "C": "Pneumothorax is hyper-resonant, not dull."
          }
        }
      },
      {
        "id": "GM-173",
        "stem": "A 28-year-old smoker collapses with sudden right chest pain while playing tennis; tachypnoeic, cyanosed, trachea deviated left, hyper-resonant right chest. Diagnosis?",
        "options": [
          "Aortic dissection",
          "MI",
          "PE",
          "Tension pneumothorax"
        ],
        "answer": 3,
        "layers": {
          "concept": "Tension pneumothorax",
          "discriminator": "Hyper-resonance + trachea shifted AWAY + collapse/cyanosis = tension pneumothorax (likely ruptured apical bleb in young smoker).",
          "trap": "PE causes sudden dyspnoea and collapse but doesn't shift the trachea or cause hyper-resonance.",
          "rule": "Immediate needle decompression then chest drain; don't wait for imaging.",
          "others": {
            "A": "Tearing pain to back, unequal BPs, older hypertensive.",
            "B": "Central crushing pain, ECG changes, no tracheal shift.",
            "C": "Normal percussion, no tracheal deviation."
          }
        }
      },
      {
        "id": "GM-174",
        "stem": "A 12-year-old has progressive pain and swelling of the femoral mid-shaft; X-ray shows destructive lesion with onion-skin periosteal reaction. Diagnosis?",
        "options": [
          "Osteosarcoma",
          "Osteoid osteoma",
          "Ewing sarcoma",
          "Chondrosarcoma"
        ],
        "answer": 2,
        "layers": {
          "concept": "Paediatric bone tumours",
          "discriminator": "Diaphysis + onion-skin periosteal reaction in a child = Ewing sarcoma (t(11;22), small round blue cells).",
          "trap": "Osteosarcoma is also adolescent but metaphyseal with sunburst/Codman triangle.",
          "rule": "Ewing: diaphysis, onion-skin, may mimic infection (fever, raised ESR), CD99+. Osteosarcoma: metaphysis around knee.",
          "others": {
            "A": "Metaphysis, sunburst, Codman triangle.",
            "B": "Small lucent nidus, night pain relieved by NSAIDs.",
            "D": "Older adults, pelvis/proximal femur."
          }
        }
      },
      {
        "id": "GM-175",
        "stem": "A 65-year-old with T2DM and CKD (eGFR 20) is admitted with severe dyspnoea while on metformin. Most serious adverse effect?",
        "options": [
          "Hypoglycaemia",
          "Weight gain",
          "Lactic acidosis",
          "Pancreatitis"
        ],
        "answer": 2,
        "layers": {
          "concept": "Metformin-associated lactic acidosis",
          "discriminator": "Renal impairment → metformin accumulation → lactic acidosis (dyspnoea = Kussmaul compensation).",
          "trap": "Hypoglycaemia is a sulfonylurea/insulin problem — metformin alone rarely causes it.",
          "rule": "Metformin: reduce dose at eGFR <45, STOP at <30. Hold before contrast and surgery.",
          "others": {
            "A": "Rare with metformin monotherapy.",
            "B": "Metformin is weight-neutral/loss.",
            "D": "Linked to GLP-1 agonists/DPP-4 inhibitors."
          }
        }
      },
      {
        "id": "GM-176",
        "stem": "A 55-year-old smoker has an enlarged hilar node with blackish discolouration on biopsy. Cause?",
        "options": [
          "Anthracotic pigment",
          "Haemosiderosis",
          "Lipochrome",
          "Melanin"
        ],
        "answer": 0,
        "layers": {
          "concept": "Exogenous pigments",
          "discriminator": "Inhaled carbon (smoke/coal) taken up by macrophages → black lymph nodes = anthracosis.",
          "trap": "Melanin is also dark but is endogenous and lives in skin/melanocytes, not hilar nodes.",
          "rule": "Exogenous: carbon (anthracosis), tattoo. Endogenous: lipofuscin (wear-and-tear, brown), haemosiderin (golden-brown, Prussian blue +), melanin.",
          "others": {
            "B": "Golden-brown iron pigment; Prussian blue positive.",
            "C": "Lipofuscin is yellow-brown in ageing cells.",
            "D": "Melanin is not found in hilar nodes of smokers."
          }
        }
      },
      {
        "id": "GM-177",
        "stem": "A 32-year-old's cortisol fails to suppress after overnight 1 mg dexamethasone. Interpretation?",
        "options": [
          "Normal",
          "Confirms Cushing's syndrome",
          "Primary adrenal insufficiency",
          "Confirms pituitary adenoma"
        ],
        "answer": 1,
        "layers": {
          "concept": "Overnight low-dose dexamethasone test",
          "discriminator": "Failure to suppress = autonomous cortisol excess = Cushing's syndrome present.",
          "trap": "Jumping to the CAUSE — the low-dose test doesn't localise.",
          "rule": "Normal: cortisol <50 nmol/L (1.8 µg/dL) after 1 mg. Then ACTH: low → adrenal; high → pituitary or ectopic (HDDST/IPSS).",
          "others": {
            "A": "Normal people suppress.",
            "C": "Insufficiency = LOW cortisol, tested by Synacthen.",
            "D": "Pituitary source needs high-dose test/IPSS + MRI."
          }
        }
      },
      {
        "id": "GM-178",
        "stem": "A 74-year-old has a year of magnetic gait, urinary incontinence and progressive memory loss. Diagnosis?",
        "options": [
          "Alzheimer's",
          "Parkinson's",
          "Normal pressure hydrocephalus",
          "Vascular dementia"
        ],
        "answer": 2,
        "layers": {
          "concept": "NPH triad",
          "discriminator": "'Wet, wobbly, wacky': incontinence + magnetic gait + dementia.",
          "trap": "Parkinson's gives shuffling gait but with tremor/rigidity and incontinence appears late.",
          "rule": "CT/MRI: ventriculomegaly out of proportion to atrophy. Large-volume LP tap test → VP shunt (reversible dementia).",
          "others": {
            "A": "Memory first; gait/continence preserved until late.",
            "B": "Resting tremor, rigidity, bradykinesia.",
            "D": "Stepwise decline, focal neurological signs."
          }
        }
      },
      {
        "id": "GM-179",
        "stem": "A 50-year-old has sudden electric shock-like right facial pain triggered by brushing teeth or chewing. First-line drug?",
        "options": [
          "Gabapentin",
          "Carbamazepine",
          "Amitriptyline",
          "Morphine"
        ],
        "answer": 1,
        "layers": {
          "concept": "Trigeminal neuralgia",
          "discriminator": "Paroxysmal lancinating V2/V3 pain with trigger zones → carbamazepine.",
          "trap": "Gabapentin/amitriptyline are first-line for OTHER neuropathic pain, not trigeminal neuralgia.",
          "rule": "Carbamazepine first-line (check HLA-B*1502 in Asians — SJS risk). Young patient/bilateral → MRI to exclude MS. Refractory → microvascular decompression.",
          "others": {
            "A": "Second-line for TN.",
            "C": "For other neuropathic pain; not first-line here.",
            "D": "Opioids are ineffective for TN."
          }
        }
      },
      {
        "id": "GM-180",
        "stem": "Which condition most likely causes an exudative pleural effusion?",
        "options": [
          "CHF",
          "Cirrhosis",
          "Pneumonia",
          "Nephrotic syndrome"
        ],
        "answer": 2,
        "layers": {
          "concept": "Transudate vs exudate",
          "discriminator": "Exudates come from inflamed/leaky pleura (infection, malignancy) — pneumonia → parapneumonic effusion.",
          "trap": "CHF is the most common effusion overall, but it is a transudate.",
          "rule": "Light's criteria (exudate if any): fluid/serum protein >0.5, fluid/serum LDH >0.6, fluid LDH >⅔ ULN serum.",
          "others": {
            "A": "↑ hydrostatic pressure → transudate.",
            "B": "↓ oncotic pressure → transudate.",
            "D": "↓ oncotic pressure → transudate."
          }
        }
      },
      {
        "id": "GM-181",
        "stem": "Initial management for osteoarthritis of the knees?",
        "options": [
          "Weight loss",
          "NSAIDs",
          "Intra-articular injection",
          "Knee replacement"
        ],
        "answer": 0,
        "layers": {
          "concept": "Stepped care in OA",
          "discriminator": "Core first-line for all: education, exercise and weight loss.",
          "trap": "NSAIDs relieve pain but come after core non-drug measures (and topical before oral).",
          "rule": "OA ladder: weight loss + exercise → paracetamol/topical NSAID → oral NSAID + PPI → IA steroid → arthroplasty.",
          "others": {
            "B": "Adjunct, not initial.",
            "C": "For flares/when other measures fail.",
            "D": "End-stage disease only."
          }
        }
      },
      {
        "id": "GM-182",
        "stem": "A 35-year-old has 4 months of symmetrical small-joint hand arthritis sparing DIPs, with morning stiffness >1 hour. Drug to improve prognosis?",
        "options": [
          "Celecoxib",
          "Diclofenac",
          "Methotrexate",
          "Prednisolone"
        ],
        "answer": 2,
        "layers": {
          "concept": "Disease-modifying therapy in RA",
          "discriminator": "'Improve prognosis and reduce complications' = DMARD → methotrexate (anchor drug).",
          "trap": "Steroids and NSAIDs control symptoms but don't prevent joint erosion long-term.",
          "rule": "Start MTX early (within 3 months) with folic acid; monitor LFTs/FBC; bridge with short steroid course.",
          "others": {
            "A": "Symptomatic only.",
            "B": "Symptomatic only.",
            "D": "Bridging therapy; long-term use harmful, not disease-modifying alone."
          }
        }
      },
      {
        "id": "GM-183",
        "stem": "A 45-year-old has symmetrical small-joint hand pain with morning stiffness >1 h and a history of mucocutaneous lesions. Best investigation to confirm?",
        "options": [
          "X-ray hands",
          "ESR",
          "Anti-CCP",
          "ANA"
        ],
        "answer": 3,
        "layers": {
          "concept": "SLE arthritis vs RA",
          "discriminator": "Inflammatory polyarthritis PLUS mucocutaneous lesions (oral ulcers, malar rash) points to SLE → ANA.",
          "trap": "The joint pattern alone looks like RA → anti-CCP; the mucocutaneous history is the twist.",
          "rule": "ANA is the screening test for SLE (~95% sensitive); confirm with anti-dsDNA/anti-Smith. SLE arthritis is non-erosive (Jaccoud's).",
          "others": {
            "A": "Erosions support RA; SLE is non-erosive.",
            "B": "Non-specific inflammatory marker.",
            "C": "Specific for RA; doesn't explain mucocutaneous lesions."
          }
        }
      },
      {
        "id": "GM-184",
        "stem": "A 25-year-old with MS has diplopia with impaired left eye adduction and right eye nystagmus on right gaze. Structure affected?",
        "options": [
          "MLF",
          "Optic nerve",
          "Oculomotor nerve",
          "Abducens nerve"
        ],
        "answer": 0,
        "layers": {
          "concept": "Internuclear ophthalmoplegia",
          "discriminator": "Failed adduction of one eye + nystagmus of the abducting eye = INO → lesion of the ipsilateral (left) MLF.",
          "trap": "CN III palsy also blocks adduction, but with ptosis, 'down and out' eye and dilated pupil; convergence is preserved in INO.",
          "rule": "Young + bilateral INO = MS; elderly + unilateral = stroke. Lesion side = side of weak adduction.",
          "others": {
            "B": "Optic neuritis causes visual loss and pain, not diplopia.",
            "C": "Ptosis, mydriasis, eye down and out.",
            "D": "Failure of abduction."
          }
        }
      },
      {
        "id": "GM-185",
        "stem": "A 30-year-old has ptosis and diplopia that worsen by evening and improve with rest. Next step in management?",
        "options": [
          "Pyridostigmine",
          "3,4-Diaminopyridine",
          "Plasma exchange",
          "Cyclophosphamide"
        ],
        "answer": 0,
        "layers": {
          "concept": "Myasthenia gravis",
          "discriminator": "Fatigable ocular weakness = MG → first-line symptomatic acetylcholinesterase inhibitor.",
          "trap": "Plasma exchange is for myasthenic CRISIS, not stable ocular disease.",
          "rule": "MG: anti-AChR antibodies; CT chest for thymoma. Pyridostigmine → steroids/azathioprine → thymectomy; crisis → IVIG/PLEX.",
          "others": {
            "B": "Used for Lambert–Eaton syndrome.",
            "C": "Crisis/pre-operative only.",
            "D": "Not standard first-line immunosuppression."
          }
        }
      },
      {
        "id": "GM-186",
        "stem": "A 24-year-old has ascending weakness over days after a respiratory infection with absent reflexes. Diagnosis?",
        "options": [
          "MS",
          "Myasthenia gravis",
          "GBS",
          "Muscular dystrophy"
        ],
        "answer": 2,
        "layers": {
          "concept": "Guillain–Barré syndrome",
          "discriminator": "Post-infectious + ascending + AREFLEXIA = acute demyelinating polyneuropathy.",
          "trap": "Myasthenia causes weakness but reflexes are preserved and it is fatigable, not ascending.",
          "rule": "CSF: albuminocytological dissociation. Monitor FVC (ventilate if <15–20 mL/kg). Treat with IVIG or plasma exchange — NOT steroids.",
          "others": {
            "A": "UMN signs, hyperreflexia.",
            "B": "Fatigable, ocular/bulbar, reflexes normal.",
            "D": "Chronic progressive from childhood."
          }
        }
      },
      {
        "id": "GM-187",
        "stem": "A 30-year-old has well-demarcated silvery-scaled plaques on elbows and knees; removing scales causes pinpoint bleeding. Sign?",
        "options": [
          "Auspitz sign",
          "Koebner phenomenon",
          "Nikolsky sign",
          "Darier's sign"
        ],
        "answer": 0,
        "layers": {
          "concept": "Psoriasis signs",
          "discriminator": "Pinpoint bleeding on scale removal (dilated dermal capillaries) = Auspitz.",
          "trap": "Koebner is also psoriasis, but it means lesions appearing at sites of trauma.",
          "rule": "Psoriasis: extensor plaques, nail pitting, onycholysis, psoriatic arthritis.",
          "others": {
            "B": "New lesions at injury sites.",
            "C": "Skin shears with lateral pressure — pemphigus vulgaris, SSSS, TEN.",
            "D": "Urtication on rubbing — mastocytosis."
          }
        }
      },
      {
        "id": "GM-188",
        "stem": "A 6-month-old has intensely itchy, red, dry, scaly patches on the cheeks and extensor limbs. Diagnosis?",
        "options": [
          "Seborrhoeic dermatitis",
          "Eczema",
          "Psoriasis",
          "Tinea corporis"
        ],
        "answer": 1,
        "layers": {
          "concept": "Infantile atopic eczema",
          "discriminator": "Infant + INTENSE itch + cheeks and extensors = atopic eczema (flexural in older children).",
          "trap": "Seborrhoeic dermatitis (cradle cap) is greasy, yellow and NOT itchy.",
          "rule": "Treat with emollients + topical steroids for flares. Atopic march → asthma, allergic rhinitis.",
          "others": {
            "A": "Scalp/napkin area, greasy, non-itchy.",
            "C": "Rare in infants; silvery plaques.",
            "D": "Annular lesion with central clearing."
          }
        }
      },
      {
        "id": "GM-189",
        "stem": "A 22-year-old is convinced her normal-looking nose is severely deformed and checks it in the mirror for hours daily. Diagnosis?",
        "options": [
          "Schizophrenia",
          "Body dysmorphic disorder",
          "Anorexia nervosa",
          "GAD"
        ],
        "answer": 1,
        "layers": {
          "concept": "Body dysmorphic disorder",
          "discriminator": "Preoccupation with a perceived flaw in a SPECIFIC feature + repetitive checking.",
          "trap": "Anorexia also involves body image, but centres on weight/shape with low BMI.",
          "rule": "BDD is an obsessive-compulsive related disorder → SSRIs + CBT. Cosmetic surgery rarely helps.",
          "others": {
            "A": "Hallucinations, delusions, disorganisation.",
            "C": "Weight-focused with restricted intake.",
            "D": "Diffuse worry across many domains."
          }
        }
      },
      {
        "id": "GM-190",
        "stem": "During halothane and succinylcholine anaesthesia, a 25-year-old develops severe rigidity, temperature 42 °C and tachycardia. Immediate treatment?",
        "options": [
          "IV atropine",
          "IM hydrocortisone",
          "IV midazolam",
          "IV dantrolene"
        ],
        "answer": 3,
        "layers": {
          "concept": "Malignant hyperthermia",
          "discriminator": "Volatile agent + succinylcholine + rigidity + hyperthermia = MH (RYR1 mutation) → dantrolene.",
          "trap": "Midazolam treats agitation/seizures but not RyR-mediated calcium release.",
          "rule": "Stop triggers, hyperventilate with 100% O₂, dantrolene 2.5 mg/kg IV repeated, active cooling, treat hyperkalaemia.",
          "others": {
            "A": "Treats bradycardia; worsens tachycardia.",
            "B": "No role.",
            "C": "Doesn't block sarcoplasmic calcium release."
          }
        }
      },
      {
        "id": "GM-191",
        "stem": "A 25-year-old has nocturnal itch with papules and linear burrows in finger webs and wrists. First-line treatment?",
        "options": [
          "Oral fluconazole",
          "Topical permethrin 5%",
          "Topical corticosteroids",
          "Oral acyclovir"
        ],
        "answer": 1,
        "layers": {
          "concept": "Scabies",
          "discriminator": "Night itch + burrows in web spaces = Sarcoptes scabiei → permethrin 5%.",
          "trap": "Steroids reduce the itch but leave the mites alive.",
          "rule": "Apply neck down, wash off after 8–12 h, repeat in 7 days; treat all close contacts and wash bedding. Crusted scabies → oral ivermectin.",
          "others": {
            "A": "Antifungal.",
            "C": "Symptomatic only, may worsen infestation.",
            "D": "Antiviral."
          }
        }
      },
      {
        "id": "GM-192",
        "stem": "A 30-year-old has an itchy circular red trunk patch with raised scaly border and central clearing; KOH shows septate branching hyphae. Treatment?",
        "options": [
          "Topical clotrimazole",
          "Topical hydrocortisone",
          "Oral erythromycin",
          "Oral acyclovir"
        ],
        "answer": 0,
        "layers": {
          "concept": "Tinea corporis",
          "discriminator": "Annular lesion + active edge + hyphae on KOH = dermatophyte → topical azole.",
          "trap": "Hydrocortisone alone worsens it ('tinea incognito').",
          "rule": "Localised tinea → topical azole/terbinafine for 2–4 weeks. Extensive, scalp or nail → oral terbinafine/griseofulvin.",
          "others": {
            "B": "Steroid masks and spreads fungal infection.",
            "C": "Antibacterial.",
            "D": "Antiviral."
          }
        }
      },
      {
        "id": "GM-193",
        "stem": "A 55-year-old has chest pain with ST elevation in I, aVL, V5 and V6. Which artery?",
        "options": [
          "Left circumflex",
          "LAD",
          "RCA",
          "PDA"
        ],
        "answer": 0,
        "layers": {
          "concept": "STEMI territory localisation",
          "discriminator": "I, aVL, V5–V6 = LATERAL wall = left circumflex.",
          "trap": "LAD causes anterior (V1–V4) changes; the high lateral diagonal branch can involve I/aVL but not this full lateral pattern.",
          "rule": "Septal V1–V2 (LAD), anterior V3–V4 (LAD), lateral I/aVL/V5–V6 (LCx), inferior II/III/aVF (RCA mostly), posterior V7–V9 / ST depression V1–V3.",
          "others": {
            "B": "Anterior/septal leads.",
            "C": "Inferior leads.",
            "D": "Inferior/posterior wall."
          }
        }
      },
      {
        "id": "GM-194",
        "stem": "A 68-year-old has exertional dyspnoea, orthopnoea, PND, basal crackles, raised JVP, displaced apex and reduced EF. Diagnosis?",
        "options": [
          "Hyperthyroid heart disease",
          "Dilated cardiomyopathy",
          "MI",
          "Constrictive pericarditis"
        ],
        "answer": 1,
        "layers": {
          "concept": "Heart failure with reduced EF",
          "discriminator": "Displaced apex (dilated LV) + reduced EF + congestive signs = dilated cardiomyopathy.",
          "trap": "Constrictive pericarditis gives raised JVP but normal-sized heart, preserved EF and Kussmaul sign.",
          "rule": "DCM causes: ischaemic, alcohol, viral myocarditis, peripartum, doxorubicin, genetic. Treat HFrEF: ACEi/ARNI + β-blocker + MRA + SGLT2i.",
          "others": {
            "A": "Hyperthyroid heart disease: AF, high-output state, thyroid signs.",
            "C": "Acute chest pain and ECG/troponin changes not described.",
            "D": "Normal heart size, pericardial knock, preserved EF."
          }
        }
      },
      {
        "id": "GM-195",
        "stem": "A 25-year-old has haematuria and flank pain, sickle cells on smear and childhood painful episodes. Underlying defect?",
        "options": [
          "AR β-globin mutation",
          "AD α-globin mutation",
          "Acquired Hb mutation",
          "B12 deficiency"
        ],
        "answer": 0,
        "layers": {
          "concept": "Sickle cell disease",
          "discriminator": "Glu → Val point mutation at position 6 of β-globin, autosomal recessive.",
          "trap": "α-globin defects cause α-thalassaemia, not sickling.",
          "rule": "Renal papillary necrosis → haematuria/flank pain; also hyposthenuria. Hydroxyurea increases HbF.",
          "others": {
            "B": "Alpha thalassaemia (and it is AR, not AD).",
            "C": "It is inherited, not acquired.",
            "D": "Causes macrocytic anaemia, not sickling."
          }
        }
      },
      {
        "id": "GM-196",
        "stem": "A 45-year-old has fatigue, early satiety, massive splenomegaly and WBC 100,000/µL. Characteristic cytogenetic abnormality?",
        "options": [
          "t(15;17)",
          "t(9;22)",
          "t(8;14)",
          "t(14;18)"
        ],
        "answer": 1,
        "layers": {
          "concept": "Chronic myeloid leukaemia",
          "discriminator": "Massive splenomegaly + very high WBC (myeloid left shift) = CML → Philadelphia chromosome t(9;22) BCR-ABL.",
          "trap": "Mixing translocations: each one maps to a specific malignancy.",
          "rule": "CML: low LAP score, basophilia. Treat with imatinib (tyrosine kinase inhibitor).",
          "others": {
            "A": "APL (AML-M3), treated with ATRA.",
            "C": "Burkitt lymphoma (c-MYC).",
            "D": "Follicular lymphoma (BCL-2)."
          }
        }
      },
      {
        "id": "GM-197",
        "stem": "Serology: HBsAg +, anti-HBs −, HBeAg +, IgM anti-HBc +. Interpretation?",
        "options": [
          "Resolved acute infection",
          "Chronic inactive HBV",
          "Acute HBV with high infectivity",
          "Successful vaccination"
        ],
        "answer": 2,
        "layers": {
          "concept": "Acute hepatitis B",
          "discriminator": "IgM anti-HBc = ACUTE; HBeAg = active replication/high infectivity.",
          "trap": "HBsAg positive could be chronic — the IgM anti-HBc is what makes it acute.",
          "rule": "HBeAg = high viral replication. IgM anti-HBc = acute (also flares). Window period: only IgM anti-HBc positive.",
          "others": {
            "A": "HBsAg would be negative with anti-HBs positive.",
            "B": "IgG anti-HBc, HBeAg negative, low DNA.",
            "D": "Only anti-HBs positive."
          }
        }
      },
      {
        "id": "GM-198",
        "stem": "A 25-year-old has multiple painful genital vesicles and shallow ulcers, tender inguinal nodes and fever. First-line treatment?",
        "options": [
          "Oral acyclovir",
          "Topical clotrimazole",
          "Oral azithromycin",
          "IM benzathine penicillin"
        ],
        "answer": 0,
        "layers": {
          "concept": "Primary genital herpes (HSV-2)",
          "discriminator": "PAINFUL vesicles → shallow ulcers + systemic features = HSV.",
          "trap": "Syphilis ulcer (chancre) is PAINLESS → benzathine penicillin.",
          "rule": "Painful ulcers: herpes, chancroid (H. ducreyi). Painless: syphilis, LGV, granuloma inguinale. Tzanck smear: multinucleated giant cells.",
          "others": {
            "B": "Antifungal for candidiasis.",
            "C": "Chancroid/chlamydia/LGV.",
            "D": "Syphilis (painless chancre)."
          }
        }
      },
      {
        "id": "GM-199",
        "stem": "A 25-year-old has a painless enlarging neck node, fever, drenching night sweats and weight loss; biopsy shows Reed–Sternberg cells. Diagnosis?",
        "options": [
          "NHL",
          "Hodgkin lymphoma",
          "TB lymphadenitis",
          "Metastatic carcinoma"
        ],
        "answer": 1,
        "layers": {
          "concept": "Hodgkin lymphoma",
          "discriminator": "Reed–Sternberg cells (owl-eye, CD15+/CD30+) are diagnostic.",
          "trap": "B symptoms occur in NHL and TB too — the RS cell decides it.",
          "rule": "Bimodal age, contiguous spread, alcohol-induced node pain. Nodular sclerosis most common. Treat with ABVD ± radiotherapy.",
          "others": {
            "A": "No RS cells; non-contiguous spread, extranodal.",
            "C": "Caseating granulomas, not RS cells.",
            "D": "Carcinoma cells, older patients."
          }
        }
      },
      {
        "id": "GM-200",
        "stem": "An RTA patient needs emergency transfusion without cross-match and can receive any of the four blood groups. Patient's blood group?",
        "options": [
          "AB negative",
          "AB positive",
          "O negative",
          "O positive"
        ],
        "answer": 1,
        "layers": {
          "concept": "Universal recipient",
          "discriminator": "AB+ has A, B and Rh(D) antigens and no anti-A/anti-B antibodies → can receive red cells of any group.",
          "trap": "O negative is the universal DONOR — it's what you give when the group is unknown.",
          "rule": "Universal red cell donor: O−. Universal red cell recipient: AB+. For plasma it reverses: AB is universal plasma donor.",
          "others": {
            "A": "AB− can receive any ABO group but only Rh-negative blood.",
            "C": "Universal donor; can only receive O−.",
            "D": "Can receive only O+ or O−."
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
