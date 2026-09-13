export interface DiagnosticTest {
  id: string;
  name: string;
  code: string;
  category: "Diabetes" | "Fever & Infection" | "Thyroid" | "Heart" | "Liver & Kidney" | "Vitamins" | "Urine & Stool" | "Complete Health";
  sampleType: "Blood" | "Urine" | "Stool" | "Sputum" | "Body Fluid";
  price: number;
  fasting: string;
  tat: string; // Turnaround time
  description: string;
  parametersCount: number;
}

export const POPULAR_TESTS: DiagnosticTest[] = [
  {
    id: "cbc",
    name: "Complete Blood Count (CBC) with ESR",
    code: "LPL-CBC01",
    category: "Fever & Infection",
    sampleType: "Blood",
    price: 350,
    fasting: "No Fasting Required",
    tat: "Same Day (4-6 Hours)",
    description: "Evaluates red blood cells, white blood cells, hemoglobin, and platelets to detect anemia, infections, leukemia and immune disorders.",
    parametersCount: 26
  },
  {
    id: "lipid-profile",
    name: "Lipid Profile (Full Heart Cholesterol)",
    code: "LPL-LIP02",
    category: "Heart",
    sampleType: "Blood",
    price: 650,
    fasting: "10-12 Hours Fasting Required",
    tat: "Same Day",
    description: "Measures Total Cholesterol, HDL (good), LDL (bad), VLDL, and Triglycerides to evaluate cardiovascular disease risk.",
    parametersCount: 8
  },
  {
    id: "hba1c",
    name: "HbA1c (Glycosylated Hemoglobin)",
    code: "LPL-HBA03",
    category: "Diabetes",
    sampleType: "Blood",
    price: 450,
    fasting: "No Fasting Required",
    tat: "Same Day",
    description: "Gold standard diagnostic test reflecting average blood sugar levels over the past 2-3 months.",
    parametersCount: 3
  },
  {
    id: "thyroid-tsh",
    name: "Thyroid Profile Total (T3, T4, TSH)",
    code: "LPL-THY04",
    category: "Thyroid",
    sampleType: "Blood",
    price: 450,
    fasting: "Fasting Preferred (Morning)",
    tat: "Same Day",
    description: "Comprehensive thyroid gland assessment for hypothyroidism, hyperthyroidism, unexplained fatigue and weight changes.",
    parametersCount: 3
  },
  {
    id: "lft",
    name: "Liver Function Test (LFT)",
    code: "LPL-LFT05",
    category: "Liver & Kidney",
    sampleType: "Blood",
    price: 600,
    fasting: "8-10 Hours Fasting",
    tat: "Same Day",
    description: "Checks SGOT (AST), SGPT (ALT), Bilirubin (Total & Direct), Alkaline Phosphatase, Protein, Albumin & Globulin.",
    parametersCount: 11
  },
  {
    id: "kft",
    name: "Kidney Function Test (KFT / RFT)",
    code: "LPL-KFT06",
    category: "Liver & Kidney",
    sampleType: "Blood",
    price: 600,
    fasting: "Fasting Not Strictly Required",
    tat: "Same Day",
    description: "Evaluates renal filtration efficacy via Serum Creatinine, Blood Urea, BUN, Uric Acid, Calcium and Electrolytes.",
    parametersCount: 9
  },
  {
    id: "vitamin-d3",
    name: "Vitamin D (25-Hydroxy)",
    code: "LPL-VIT07",
    category: "Vitamins",
    sampleType: "Blood",
    price: 950,
    fasting: "No Fasting Required",
    tat: "Within 24 Hours",
    description: "Measures 25-OH Vitamin D levels to assess bone density, osteoporosis risk, muscle weakness, and immunity levels.",
    parametersCount: 1
  },
  {
    id: "vitamin-b12",
    name: "Vitamin B12 (Cyanocobalamin)",
    code: "LPL-VIT08",
    category: "Vitamins",
    sampleType: "Blood",
    price: 850,
    fasting: "Overnight Fasting Preferred",
    tat: "Within 24 Hours",
    description: "Essential for healthy nerve function, brain cognition, memory and red blood cell production.",
    parametersCount: 1
  },
  {
    id: "dengue-ns1",
    name: "Dengue Combo (NS1 Antigen + IgM & IgG)",
    code: "LPL-DEN09",
    category: "Fever & Infection",
    sampleType: "Blood",
    price: 1100,
    fasting: "No Fasting Required",
    tat: "Express (3-5 Hours)",
    description: "Rapid high-precision detection of early acute dengue virus antigen as well as developing antibodies.",
    parametersCount: 3
  },
  {
    id: "urine-routine",
    name: "Urine Routine & Microscopic Examination",
    code: "LPL-URN10",
    category: "Urine & Stool",
    sampleType: "Urine",
    price: 200,
    fasting: "First Morning Sample Preferred",
    tat: "Same Day",
    description: "Identifies urinary tract infections (UTI), kidney stones, proteinuria, hematuria, and metabolic disorders.",
    parametersCount: 18
  },
  {
    id: "blood-glucose",
    name: "Blood Glucose Fasting & Post-Prandial (PP)",
    code: "LPL-GLU11",
    category: "Diabetes",
    sampleType: "Blood",
    price: 150,
    fasting: "Fasting (8-10 hrs) & 2 hrs after meal",
    tat: "Within 2 Hours",
    description: "Accurate laboratory fluoridated plasma glucose measurement to diagnose diabetes mellitus and pre-diabetes.",
    parametersCount: 2
  },
  {
    id: "ferritin-iron",
    name: "Iron Studies & Serum Ferritin",
    code: "LPL-IRN12",
    category: "Complete Health",
    sampleType: "Blood",
    price: 950,
    fasting: "10 Hours Fasting",
    tat: "Within 24 Hours",
    description: "Evaluates the body's total iron reserves, transferrin saturation, and detects iron deficiency anemia before symptoms worsen.",
    parametersCount: 5
  }
];
