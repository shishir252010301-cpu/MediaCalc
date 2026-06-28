const MEDIA_DB = [
  // ── From lab bottle labels ──────────────────────────────────────────────
  {
    name: "Nutrient Agar",
    type: "Solid",
    gPer1000: 28,
    autoclave: "yes",
    warn: null,
    steps: [
      "Weigh {dose} g of Nutrient Agar powder.",
      "Add to {vol} mL of distilled water. Stir to suspend.",
      "Heat while stirring until fully dissolved.",
      "Autoclave at 121 °C for 15–20 min.",
      "Cool to ~50 °C before pouring plates."
    ]
  },
  {
    name: "Nutrient Broth",
    type: "Broth",
    gPer1000: 13,
    autoclave: "yes",
    warn: null,
    steps: [
      "Weigh {dose} g of Nutrient Broth powder.",
      "Dissolve in {vol} mL of distilled water with heating.",
      "Autoclave at 121 °C for 15–20 min."
    ]
  },
  {
    name: "MacConkey Agar",
    type: "Solid",
    gPer1000: 51.53,
    autoclave: "yes",
    warn: "Do not overheat — indicator dyes degrade at excessive temperatures and can give false results.",
    steps: [
      "Weigh {dose} g of MacConkey Agar powder.",
      "Suspend in {vol} mL of distilled water.",
      "Heat to dissolve — do not overheat.",
      "Autoclave at 121 °C for 15–20 min.",
      "Cool to ~50 °C before pouring plates."
    ]
  },
  {
    name: "EMB Agar",
    type: "Solid",
    gPer1000: 35.56,
    autoclave: "yes",
    warn: "If adding heat-sensitive supplements, wait until medium cools to 45–50 °C before adding.",
    steps: [
      "Weigh {dose} g of EMB Agar powder.",
      "Suspend in {vol} mL of distilled water.",
      "Heat to dissolve.",
      "Autoclave at 121 °C for 15–20 min.",
      "Cool to 45–50 °C before adding any heat-sensitive supplements, then pour."
    ]
  },
  {
    name: "XLD Agar",
    type: "Solid",
    gPer1000: 56.68,
    autoclave: "heat-only",
    warn: "Do NOT autoclave — heat-sensitive dyes and selective agents will be destroyed.",
    steps: [
      "Weigh {dose} g of XLD Agar powder.",
      "Suspend in {vol} mL of distilled water.",
      "Heat gently to dissolve — do not boil excessively.",
      "Do NOT autoclave.",
      "Cool to ~50 °C and pour plates immediately."
    ]
  },
  {
    name: "Mueller–Hinton Agar",
    type: "Solid",
    gPer1000: 38,
    autoclave: "yes",
    warn: "Pour to exactly 4 mm depth when plates are intended for antimicrobial susceptibility testing (AST).",
    steps: [
      "Weigh {dose} g of Mueller–Hinton Agar powder.",
      "Dissolve in {vol} mL of distilled water by heating.",
      "Autoclave at 121 °C for 15–20 min.",
      "Pour to 4 mm depth for AST use."
    ]
  },
  {
    name: "MRS Agar",
    type: "Solid",
    gPer1000: 67.15,
    autoclave: "yes",
    warn: "Cool to 45–50 °C before adding heat-sensitive supplements such as antibiotics.",
    steps: [
      "Weigh {dose} g of MRS Agar powder.",
      "Suspend in {vol} mL of distilled water.",
      "Heat to dissolve.",
      "Autoclave at 121 °C for 15–20 min.",
      "Cool to 45–50 °C before adding heat-sensitive supplements, then pour."
    ]
  },
  {
    name: "LB Agar",
    type: "Solid",
    gPer1000: 40,
    autoclave: "yes",
    warn: null,
    steps: [
      "Weigh {dose} g of LB Agar powder.",
      "Dissolve in {vol} mL of distilled water by heating until fully dissolved.",
      "Autoclave at 121 °C for 15–20 min.",
      "Cool to ~50 °C before pouring plates."
    ]
  },
  {
    name: "LB Broth",
    type: "Broth",
    gPer1000: 25,
    autoclave: "yes",
    warn: null,
    steps: [
      "Weigh {dose} g of LB Broth powder.",
      "Dissolve in {vol} mL of distilled water with heating.",
      "Autoclave at 121 °C for 15–20 min.",
      "For screw-cap tubes, tighten caps only after cooling."
    ]
  },
  {
    name: "SS Agar",
    type: "Solid",
    gPer1000: 63.02,
    autoclave: "heat-only",
    warn: "Do NOT autoclave — selective inhibitors are destroyed by autoclaving.",
    steps: [
      "Weigh {dose} g of SS Agar powder.",
      "Suspend in {vol} mL of distilled water.",
      "Heat to boiling to dissolve completely.",
      "Do NOT autoclave.",
      "Cool to ~50 °C and pour plates immediately."
    ]
  },
  {
    name: "TCBS Agar",
    type: "Solid",
    gPer1000: 89.08,
    autoclave: "heat-only",
    warn: "Do NOT autoclave — thiosulfate, citrate, bile salts and indicator dyes are destroyed by autoclaving.",
    steps: [
      "Weigh {dose} g of TCBS Agar powder.",
      "Suspend in {vol} mL of distilled water.",
      "Heat to boiling to dissolve completely.",
      "Do NOT autoclave.",
      "Cool to ~50 °C and pour plates immediately."
    ]
  },
  {
    name: "Brilliant Green Agar",
    type: "Solid",
    gPer1000: 29.05,
    autoclave: "yes",
    warn: null,
    steps: [
      "Weigh {dose} g of Brilliant Green Agar powder.",
      "Suspend in {vol} mL of distilled water.",
      "Heat to dissolve.",
      "Autoclave at 121 °C for 15–20 min.",
      "Cool to ~50 °C and pour plates."
    ]
  },
  {
    name: "Buffered Peptone Water",
    type: "Broth",
    gPer1000: 20.07,
    autoclave: "yes",
    warn: null,
    steps: [
      "Weigh {dose} g of Buffered Peptone Water powder.",
      "Dissolve in {vol} mL of distilled water with heating.",
      "Autoclave at 121 °C for 15–20 min."
    ]
  },
  {
    name: "Starch M Protein Agar",
    type: "Solid",
    gPer1000: 63,
    autoclave: "yes",
    warn: null,
    steps: [
      "Weigh {dose} g of Starch M Protein Agar powder.",
      "Suspend in {vol} mL of distilled water.",
      "Heat to boiling to dissolve.",
      "Autoclave at 121 °C for 15–20 min.",
      "Cool to ~50 °C before pouring plates."
    ]
  },
  {
    name: "Mannitol Salt Agar",
    type: "Solid",
    gPer1000: 111.02,
    autoclave: "yes",
    warn: "High powder amount — ensure full dissolution before autoclaving.",
    steps: [
      "Weigh {dose} g of Mannitol Salt Agar powder.",
      "Suspend in {vol} mL of distilled water.",
      "Heat to dissolve completely — stir well, high salt content.",
      "Autoclave at 121 °C for 15–20 min.",
      "Cool to ~50 °C before pouring plates."
    ]
  },
  {
    name: "Plate Count Agar",
    type: "Solid",
    gPer1000: 23.5,
    autoclave: "yes",
    warn: null,
    steps: [
      "Weigh {dose} g of Plate Count Agar powder.",
      "Dissolve in {vol} mL of distilled water by heating.",
      "Autoclave at 121 °C for 15–20 min.",
      "Cool to ~50 °C before pouring plates."
    ]
  }
];

// ── Custom media (persisted in localStorage) ────────────────────────────
function loadCustomMedia() {
  try {
    return JSON.parse(localStorage.getItem('mc_custom') || '[]');
  } catch { return []; }
}

function saveCustomMedia(list) {
  localStorage.setItem('mc_custom', JSON.stringify(list));
}

function getAllMedia() {
  return [...MEDIA_DB, ...loadCustomMedia()];
}
