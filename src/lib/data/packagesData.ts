export interface PackageItem {
  id: string;
  name: string;
  badge?: string;
  price: number;
  originalPrice: number;
  parametersCount: number;
  tagline: string;
  isPopular?: boolean;
  sampleType: string;
  fastingRequired: string;
  reportTime: string;
  tests: {
    name: string;
    description: string;
    category: string;
  }[];
  includedMap: {
    sugarChoice: boolean;
    thyroidProfileFree: boolean;
    lipidProfileBasic: boolean;
    lftKft: boolean;
    hba1c: boolean;
    vitaminD: boolean;
    vitaminB12: boolean;
    urineRoutine: boolean;
    hemogram: boolean;
    cbc: boolean;
    ironStudies: boolean;
    apoA1B: boolean;
    amylase: boolean;
    hsCrp: boolean;
  };
}

export const SWASTH_FIT_PACKAGES: PackageItem[] = [
  {
    id: "super-1",
    name: "Swasth Fit Super 1",
    badge: "Essential",
    price: 1250,
    originalPrice: 2100,
    parametersCount: 52,
    tagline: "Essential vital organ & metabolic screening for regular health maintenance",
    sampleType: "Blood",
    fastingRequired: "10-12 Hours Fasting Required",
    reportTime: "Within 24 Hours",
    includedMap: {
      sugarChoice: true,
      thyroidProfileFree: true,
      lipidProfileBasic: true,
      lftKft: true,
      hba1c: false,
      vitaminD: false,
      vitaminB12: false,
      urineRoutine: false,
      hemogram: false,
      cbc: false,
      ironStudies: false,
      apoA1B: false,
      amylase: false,
      hsCrp: false,
    },
    tests: [
      { name: "Sugar Choice (Fasting / PP)", description: "Screening for blood glucose & early diabetes risk", category: "Metabolism" },
      { name: "Thyroid Profile Free (FT3, FT4, TSH)", description: "Metabolic rate, weight fluctuations & energy regulation", category: "Endocrine" },
      { name: "Lipid Profile Basic (Cholesterol, HDL, LDL, Triglycerides)", description: "Total cholesterol, bad fats & heart health metrics", category: "Cardiology" },
      { name: "LFT & KFT (Liver & Kidney Function Tests)", description: "SGOT, SGPT, Bilirubin, Creatinine, Urea, Uric Acid & electrolytes", category: "Vital Organs" },
    ],
  },
  {
    id: "super-2",
    name: "Swasth Fit Super 2",
    badge: "Diabetic Care",
    price: 1550,
    originalPrice: 2800,
    parametersCount: 74,
    tagline: "Comprehensive checkup with 3-month HbA1c glucose average and complete hemogram",
    sampleType: "Blood",
    fastingRequired: "10-12 Hours Fasting Required",
    reportTime: "Within 24 Hours",
    includedMap: {
      sugarChoice: true,
      thyroidProfileFree: true,
      lipidProfileBasic: true,
      lftKft: true,
      hba1c: true,
      vitaminD: false,
      vitaminB12: false,
      urineRoutine: false,
      hemogram: false,
      cbc: true,
      ironStudies: false,
      apoA1B: false,
      amylase: false,
      hsCrp: false,
    },
    tests: [
      { name: "Sugar Choice & HbA1c (Glycosylated Hemoglobin)", description: "Instant glucose + 90 days glycemic control indicator", category: "Metabolism" },
      { name: "Complete Blood Count (CBC / Hemogram)", description: "Hemoglobin, TLC, DLC, Platelets, RBC indices for infection & anemia", category: "Hematology" },
      { name: "Thyroid Profile Free (FT3, FT4, TSH)", description: "Hormonal metabolism evaluation", category: "Endocrine" },
      { name: "Lipid Profile Basic", description: "Cardiovascular lipid profile assessment", category: "Cardiology" },
      { name: "LFT & KFT (Full Liver & Kidney Profile)", description: "Excretory & hepatic enzyme analysis", category: "Vital Organs" },
    ],
  },
  {
    id: "super-3",
    name: "Swasth Fit Super 3",
    badge: "Bone & Nerves",
    price: 2250,
    originalPrice: 4200,
    parametersCount: 68,
    tagline: "Vital screening powered with Essential Vitamin D (Bones) & Vitamin B12 (Nerves)",
    sampleType: "Blood",
    fastingRequired: "10-12 Hours Fasting Required",
    reportTime: "Within 24 Hours",
    includedMap: {
      sugarChoice: true,
      thyroidProfileFree: true,
      lipidProfileBasic: true,
      lftKft: true,
      hba1c: false,
      vitaminD: true,
      vitaminB12: true,
      urineRoutine: false,
      hemogram: false,
      cbc: false,
      ironStudies: false,
      apoA1B: false,
      amylase: false,
      hsCrp: false,
    },
    tests: [
      { name: "Vitamin D (25-Hydroxy)", description: "Bone strength, calcium absorption, muscle fatigue & immunity", category: "Vitamins" },
      { name: "Vitamin B12 (Cyanocobalamin)", description: "Nerve health, brain focus, tingling sensations & red blood cells", category: "Vitamins" },
      { name: "Sugar Choice", description: "Blood glucose monitoring", category: "Metabolism" },
      { name: "Thyroid Profile Free", description: "Free T3, Free T4 and Ultra-TSH", category: "Endocrine" },
      { name: "Lipid Profile Basic", description: "Cardiac lipid distribution", category: "Cardiology" },
      { name: "LFT & KFT", description: "Complete liver enzymes and renal clearance profile", category: "Vital Organs" },
    ],
  },
  {
    id: "super-4",
    name: "Swasth Fit Super 4",
    badge: "Most Popular",
    isPopular: true,
    price: 2550,
    originalPrice: 5100,
    parametersCount: 88,
    tagline: "The all-round best seller: Sugar, Thyroid, Heart, Liver, Kidney, HbA1c, CBC, Vit D & B12",
    sampleType: "Blood",
    fastingRequired: "10-12 Hours Fasting Required",
    reportTime: "Within 24 Hours",
    includedMap: {
      sugarChoice: true,
      thyroidProfileFree: true,
      lipidProfileBasic: true,
      lftKft: true,
      hba1c: true,
      vitaminD: true,
      vitaminB12: true,
      urineRoutine: false,
      hemogram: false,
      cbc: true,
      ironStudies: false,
      apoA1B: false,
      amylase: false,
      hsCrp: false,
    },
    tests: [
      { name: "HbA1c & Blood Glucose", description: "Complete 3-month and daily diabetic status assessment", category: "Metabolism" },
      { name: "Vitamin D3 (25-OH) & Vitamin B12", description: "Complete micronutrient & neuro-skeletal evaluation", category: "Vitamins" },
      { name: "Complete Blood Count (CBC)", description: "Hemoglobin, Platelets, White blood cells & red cell parameters", category: "Hematology" },
      { name: "Complete Liver Function Test (LFT)", description: "Bilirubin, SGOT, SGPT, Alkaline Phosphatase, Protein, Albumin", category: "Vital Organs" },
      { name: "Complete Kidney Function Test (KFT)", description: "Creatinine, Blood Urea Nitrogen, Uric Acid, Calcium, Electrolytes", category: "Vital Organs" },
      { name: "Thyroid Profile Free & Lipid Profile", description: "Metabolic balance and cardiovascular cholesterol health", category: "Cardiology" },
    ],
  },
  {
    id: "complete",
    name: "Swasth Fit Complete",
    badge: "Full Body Master",
    price: 5200,
    originalPrice: 10500,
    parametersCount: 110,
    tagline: "The definitive master health checkup: Cardiac risks, Iron stores, Pancreatic enzymes, Urine analysis & all Super 4 tests",
    sampleType: "Blood & Urine",
    fastingRequired: "10-12 Hours Fasting Required",
    reportTime: "Within 24-36 Hours",
    includedMap: {
      sugarChoice: true,
      thyroidProfileFree: true,
      lipidProfileBasic: true,
      lftKft: true,
      hba1c: true,
      vitaminD: true,
      vitaminB12: true,
      urineRoutine: true,
      hemogram: true,
      cbc: true,
      ironStudies: true,
      apoA1B: true,
      amylase: true,
      hsCrp: true,
    },
    tests: [
      { name: "All Tests of Swasth Fit Super 4", description: "Sugar, HbA1c, Thyroid, Lipid, LFT, KFT, CBC, Vit D & Vit B12", category: "Comprehensive" },
      { name: "Iron Deficiency Profile (Iron Studies)", description: "Serum Iron, Ferritin, TIBC, % Transferrin Saturation for hidden anemia", category: "Hematology" },
      { name: "Apo A1 & Apo B (Apolipoproteins)", description: "Advanced cardiovascular risk markers for atherosclerosis & coronary health", category: "Cardiology" },
      { name: "HsCRP (High Sensitivity C-Reactive Protein)", description: "Vascular wall inflammation & heart attack probability marker", category: "Cardiology" },
      { name: "Serum Amylase", description: "Pancreatic enzyme health and digestive inflammation assessment", category: "Vital Organs" },
      { name: "Urine Routine & Microscopic Examination", description: "Pus cells, epithelial cells, crystals, occult blood & proteinuria", category: "Renal Health" },
      { name: "Complete Hemogram with ESR", description: "In-depth peripheral blood smear evaluation", category: "Hematology" },
    ],
  },
];

export const TARIFF_FEATURES_LIST = [
  { key: "sugarChoice", label: "Sugar Choice" },
  { key: "thyroidProfileFree", label: "Thyroid Profile Free" },
  { key: "lipidProfileBasic", label: "Lipid Profile Basic" },
  { key: "lftKft", label: "LFT & KFT" },
  { key: "hba1c", label: "HbA1c (3-Month Sugar Avg)" },
  { key: "cbc", label: "Complete Blood Count (CBC)" },
  { key: "vitaminD", label: "Vitamin-D (Bone & Immunity)" },
  { key: "vitaminB12", label: "Vitamin-B12 (Nerve & Energy)" },
  { key: "urineRoutine", label: "Urine Routine & Microscopic" },
  { key: "hemogram", label: "Hemogram" },
  { key: "ironStudies", label: "Iron Studies / Ferritin" },
  { key: "apoA1B", label: "Apo A1 & B (Cardiac)" },
  { key: "amylase", label: "Serum Amylase" },
  { key: "hsCrp", label: "HsCRP (Heart Inflammation)" },
];
