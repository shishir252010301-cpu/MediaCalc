const MEDIA_DB = [
  {
    name: "Nutrient Agar",
    type: "Solid",
    gPer1000: 28,
    autoclave: "yes",
    warn: null,
    steps: [
      "Weigh {dose} g of Nutrient Agar powder.",
      "Add to {vol} mL of distilled water. Stir to suspend.",
      "Heat while stirring until fully dissolved and brought to a boil.",
      "Autoclave at 121 °C for 15–20 min.",
      "Cool to ~50 °C before pouring plates."
    ]
  },
  {
    name: "Nutrient Broth",
    type: "Broth",
    gPer1000: 8,
    autoclave: "yes",
    warn: null,
    steps: [
      "Weigh {dose} g of Nutrient Broth powder.",
      "Dissolve in {vol} mL of distilled water.",
      "Autoclave at 121 °C for 15–20 min."
    ]
  },
  {
    name: "MacConkey Agar",
    type: "Solid",
    gPer1000: 50.5,
    autoclave: "yes",
    warn: "Do not overheat — indicator dyes (neutral red, crystal violet) degrade at excessive temperatures and can produce false results.",
    steps: [
      "Weigh {dose} g of MacConkey Agar powder.",
      "Suspend in {vol} mL of distilled water.",
      "Heat to dissolve — do not overheat.",
      "Autoclave at 121 °C for 15–20 min or use steam sterilization per manufacturer.",
      "Cool to ~50 °C before pouring plates."
    ]
  },
  {
    name: "EMB Agar",
    type: "Solid",
    gPer1000: 36,
    autoclave: "yes",
    warn: "If adding heat-sensitive supplements (e.g. antibiotics), wait until medium cools to 45–50 °C before adding.",
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
    gPer1000: 63,
    autoclave: "heat-only",
    warn: "Do NOT autoclave — heat-sensitive dyes and selective agents will be destroyed. Heat only to dissolve.",
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
    gPer1000: 55,
    autoclave: "yes",
    warn: "Cool to 45–50 °C before adding heat-sensitive supplements such as antibiotics or specific carbon sources.",
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
    gPer1000: 25,
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
    gPer1000: 10,
    autoclave: "yes",
    warn: null,
    steps: [
      "Weigh {dose} g of LB Broth powder.",
      "Dissolve in {vol} mL of distilled water.",
      "Autoclave at 121 °C for 15–20 min.",
      "For screw-cap tubes, tighten caps only after cooling."
    ]
  },
  {
    name: "VRBA",
    type: "Solid",
    gPer1000: 41.5,
    autoclave: "heat-only",
    warn: "Do NOT autoclave — selective agents will be inactivated. Heat only to dissolve, then pour immediately.",
    steps: [
      "Weigh {dose} g of VRBA powder.",
      "Suspend in {vol} mL of distilled water.",
      "Heat to boiling to dissolve completely.",
      "Do NOT autoclave.",
      "Cool to ~50 °C and pour plates immediately."
    ]
  },
  {
    name: "VRBG Agar",
    type: "Solid",
    gPer1000: 42,
    autoclave: "heat-only",
    warn: "Do NOT autoclave — selective agents will be inactivated. Pour immediately after cooling.",
    steps: [
      "Weigh {dose} g of VRBG Agar powder.",
      "Suspend in {vol} mL of distilled water.",
      "Heat to boiling to dissolve completely.",
      "Do NOT autoclave.",
      "Cool to ~50 °C and pour plates immediately."
    ]
  },
  {
    name: "EEB",
    type: "Broth",
    gPer1000: 35.5,
    autoclave: "heat-only",
    warn: "Do NOT autoclave — heat only to dissolve. Selective enrichment components are heat-sensitive.",
    steps: [
      "Weigh {dose} g of EEB powder.",
      "Dissolve in {vol} mL of distilled water.",
      "Heat gently to dissolve — do not boil excessively.",
      "Do NOT autoclave.",
      "Distribute into appropriate containers aseptically if needed."
    ]
  },
  {
    name: "Brilliant Green Agar",
    type: "Solid",
    gPer1000: 40.7,
    autoclave: "heat-only",
    warn: "Do NOT autoclave — the dye Brilliant Green is destroyed by autoclaving. Pour immediately.",
    steps: [
      "Weigh {dose} g of Brilliant Green Agar powder.",
      "Suspend in {vol} mL of distilled water.",
      "Heat to boiling to dissolve.",
      "Do NOT autoclave.",
      "Cool to ~50 °C and pour plates immediately."
    ]
  },
  {
    name: "Bismuth Sulfite Agar",
    type: "Solid",
    gPer1000: 52,
    autoclave: "heat-only",
    warn: "Do NOT autoclave — bismuth sulfite indicator is destroyed by autoclaving.",
    steps: [
      "Weigh {dose} g of Bismuth Sulfite Agar powder.",
      "Suspend in {vol} mL of distilled water.",
      "Heat to boiling with frequent agitation.",
      "Do NOT autoclave.",
      "Cool to ~50 °C and pour plates immediately."
    ]
  },
  {
    name: "SS Agar",
    type: "Solid",
    gPer1000: 60,
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
    name: "DCA",
    type: "Solid",
    gPer1000: 65,
    autoclave: "heat-only",
    warn: "Do NOT autoclave — selective agents are heat-labile beyond boiling point.",
    steps: [
      "Weigh {dose} g of DCA powder.",
      "Suspend in {vol} mL of distilled water.",
      "Heat to boiling to dissolve.",
      "Do NOT autoclave.",
      "Cool to ~50 °C and pour plates immediately."
    ]
  },
  {
    name: "TCBS Agar",
    type: "Solid",
    gPer1000: 88,
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
    name: "CLED Agar",
    type: "Solid",
    gPer1000: 36,
    autoclave: "heat-only",
    warn: "Do NOT autoclave — cystine and indicator components are heat-labile.",
    steps: [
      "Weigh {dose} g of CLED Agar powder.",
      "Suspend in {vol} mL of distilled water.",
      "Heat to boiling to dissolve.",
      "Do NOT autoclave.",
      "Cool to ~50 °C and pour plates immediately."
    ]
  },
  {
    name: "Wilson and Blair Medium",
    type: "Solid",
    gPer1000: 58,
    autoclave: "heat-only",
    warn: "Do NOT autoclave — bismuth and sulfite components are destroyed by autoclaving.",
    steps: [
      "Weigh {dose} g of Wilson and Blair Medium powder.",
      "Suspend in {vol} mL of distilled water.",
      "Heat to boiling to dissolve.",
      "Do NOT autoclave.",
      "Cool to ~50 °C and pour plates immediately."
    ]
  },
  {
    name: "Kligler Iron Agar",
    type: "Solid",
    gPer1000: 55,
    autoclave: "heat-only",
    warn: "Do NOT autoclave — ferric salts and indicator components are altered by autoclaving.",
    steps: [
      "Weigh {dose} g of Kligler Iron Agar powder.",
      "Suspend in {vol} mL of distilled water.",
      "Heat to boiling to dissolve.",
      "Do NOT autoclave.",
      "Distribute into tubes and allow to set as slants."
    ]
  },
  {
    name: "TSI Agar",
    type: "Solid",
    gPer1000: 65,
    autoclave: "heat-only",
    warn: "Do NOT autoclave — triple sugar and iron indicator components are heat-sensitive.",
    steps: [
      "Weigh {dose} g of TSI Agar powder.",
      "Suspend in {vol} mL of distilled water.",
      "Heat to boiling to dissolve completely.",
      "Do NOT autoclave.",
      "Distribute into tubes and allow to set as slants."
    ]
  },
  {
    name: "Selenite F Broth",
    type: "Broth",
    gPer1000: 23,
    autoclave: "heat-only",
    warn: "Do NOT autoclave — sodium selenite is toxic and heat-labile. Handle with care.",
    steps: [
      "Weigh {dose} g of Selenite F Broth powder.",
      "Dissolve in {vol} mL of distilled water.",
      "Heat gently to dissolve — do not boil.",
      "Do NOT autoclave.",
      "Dispense into tubes while still warm."
    ]
  },
  {
    name: "Tetrathionate Broth",
    type: "Broth",
    gPer1000: 25,
    autoclave: "heat-only",
    warn: "Do NOT autoclave — tetrathionate is decomposed by autoclaving.",
    steps: [
      "Weigh {dose} g of Tetrathionate Broth powder.",
      "Dissolve in {vol} mL of distilled water.",
      "Heat gently to dissolve.",
      "Do NOT autoclave.",
      "Dispense into appropriate containers."
    ]
  },
  {
    name: "Rappaport-Vassiliadis Broth",
    type: "Broth",
    gPer1000: 26,
    autoclave: "heat-only",
    warn: "Do NOT autoclave — malachite green and magnesium chloride components are altered by autoclaving.",
    steps: [
      "Weigh {dose} g of Rappaport-Vassiliadis Broth powder.",
      "Dissolve in {vol} mL of distilled water.",
      "Heat gently to dissolve.",
      "Do NOT autoclave.",
      "Dispense into appropriate containers."
    ]
  },
  {
    name: "Tinsdale Medium",
    type: "Solid",
    gPer1000: 52,
    autoclave: "heat-only",
    warn: "Do NOT autoclave — tellurite and cystine components are destroyed by autoclaving.",
    steps: [
      "Weigh {dose} g of Tinsdale Medium powder.",
      "Suspend in {vol} mL of distilled water.",
      "Heat to boiling to dissolve.",
      "Do NOT autoclave.",
      "Cool to ~50 °C and pour plates immediately."
    ]
  },
  {
    name: "Tellurite Agar",
    type: "Solid",
    gPer1000: 46,
    autoclave: "heat-only",
    warn: "Do NOT autoclave — tellurite compounds are destroyed by autoclaving.",
    steps: [
      "Weigh {dose} g of Tellurite Agar powder.",
      "Suspend in {vol} mL of distilled water.",
      "Heat to boiling to dissolve.",
      "Do NOT autoclave.",
      "Cool to ~50 °C and pour plates immediately."
    ]
  }
];
