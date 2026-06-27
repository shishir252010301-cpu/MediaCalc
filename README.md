# MediaCalc 🧫

**Precise powder measurements for microbiology media preparation.**

A fast, offline-capable PWA for microbiology students and lab workers. Select a medium, enter the volume you're making, and instantly get the exact powder amount to weigh — with step-by-step prep instructions and autoclave reminders.

---

## Features

- 26 common media pre-loaded (agar & broth)
- Autoclave vs. heat-only vs. no-heat distinction per medium
- Up to 4 decimal place precision
- Favorites & recent history (stored locally, no server)
- Light / dark mode toggle
- Works offline (PWA with service worker)
- Zero tracking — fully client-side, no analytics, no IP logging

---

## Media included

### Autoclave required
Nutrient Agar, Nutrient Broth, MacConkey Agar, EMB Agar, Mueller–Hinton Agar, MRS Agar, LB Agar, LB Broth

### Heat only — do NOT autoclave
XLD Agar, VRBA, VRBG Agar, EEB, Brilliant Green Agar, Bismuth Sulfite Agar, SS Agar, DCA, TCBS Agar, CLED Agar, Wilson and Blair Medium, Kligler Iron Agar, TSI Agar, Selenite F Broth, Tetrathionate Broth, Rappaport-Vassiliadis Broth, Tinsdale Medium, Tellurite Agar

---

## Running locally

No build step needed. Just open `index.html` in a browser, or serve it:

```bash
# Python
python3 -m http.server 8080

# Node
npx serve .
```

---

## Deploying to Render

1. Push this folder to a GitHub repository.
2. Go to [render.com](https://render.com) → New → Static Site.
3. Connect your GitHub repo.
4. Set:
   - **Build command:** *(leave empty)*
   - **Publish directory:** `.`
5. Click **Deploy**. Done.

The `render.yaml` file in this repo handles the configuration automatically if you use Render's Blueprint feature.

---

## Adding new media

Edit `data.js`. Each entry follows this structure:

```js
{
  name: "Media Name",
  type: "Solid",          // "Solid" or "Broth"
  gPer1000: 28,           // grams per 1000 mL (from bottle label)
  autoclave: "yes",       // "yes" | "heat-only" | "no"
  warn: null,             // string or null — shown as a warning box
  steps: [
    "Weigh {dose} g of ...",
    "Dissolve in {vol} mL of distilled water.",
    "Autoclave at 121 °C for 15–20 min."
  ]
}
```

`{dose}` and `{vol}` in steps are replaced automatically at calculation time.

---

## Privacy

- No server-side code
- No analytics or tracking
- No IP logging
- All data (favorites, recents) stored in browser `localStorage` only
- Background image loaded from Unsplash (one external request, no user data sent)

---

*A Brownbeard's creation.*
