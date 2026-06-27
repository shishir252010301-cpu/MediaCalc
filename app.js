// ── State ──────────────────────────────────────────────────────────────────
let selectedMedia = null;
let selectedVol   = null;
let currentFilter = 'all';
let currentSearch = '';
let darkMode      = localStorage.getItem('mc_dark') === 'true';
let recents       = JSON.parse(localStorage.getItem('mc_recents') || '[]');
let favs          = JSON.parse(localStorage.getItem('mc_favs')    || '[]');

// ── Boot ───────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  applyTheme();
  renderGrid();
  updateCalcBtn();
});

// ── Theme ──────────────────────────────────────────────────────────────────
function applyTheme() {
  document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
  const icon = document.getElementById('theme-icon');
  if (icon) icon.className = darkMode ? 'ti ti-sun' : 'ti ti-moon';
}

function toggleTheme() {
  darkMode = !darkMode;
  localStorage.setItem('mc_dark', darkMode);
  applyTheme();
}

// ── Tabs ───────────────────────────────────────────────────────────────────
function showTab(tab) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(t => t.classList.remove('active'));
  document.getElementById('page-' + tab).classList.add('active');
  document.getElementById('tab-' + tab).classList.add('active');
  if (tab === 'recents') renderRecents();
  if (tab === 'favs')    renderFavs();
}

// ── Media grid ─────────────────────────────────────────────────────────────
function renderGrid() {
  const grid = document.getElementById('media-grid');
  let list = MEDIA_DB;
  if (currentFilter !== 'all') list = list.filter(m => m.type === currentFilter);
  if (currentSearch) {
    const q = currentSearch.toLowerCase();
    list = list.filter(m => m.name.toLowerCase().includes(q));
  }

  if (!list.length) {
    grid.innerHTML = '<p class="empty-hint">No media match your search.</p>';
    return;
  }

  grid.innerHTML = list.map(m => {
    const sel  = selectedMedia?.name === m.name ? 'selected' : '';
    const icon = m.autoclave === 'heat-only' ? 'ti-flame'
               : m.autoclave === 'yes'       ? 'ti-virus'
               :                               'ti-leaf';
    return `<button class="media-chip ${sel}" onclick="selectMedia('${m.name.replace(/'/g,"\\'")}')">
      <i class="ti ${icon} chip-icon" aria-hidden="true"></i>
      <span class="chip-name">${m.name}</span>
      <span class="chip-type">${m.type}</span>
    </button>`;
  }).join('');
}

function selectMedia(name) {
  selectedMedia = MEDIA_DB.find(m => m.name === name) || null;
  hideResult();
  renderGrid();
  updateCalcBtn();
}

function filterMedia(type, el) {
  currentFilter = type;
  document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
  el.classList.add('active');
  renderGrid();
}

function searchMedia(val) {
  currentSearch = val;
  renderGrid();
}

// ── Volume ─────────────────────────────────────────────────────────────────
function setVol(v, el) {
  selectedVol = v;
  document.getElementById('vol-custom').value = '';
  document.querySelectorAll('.vol-preset').forEach(b => b.classList.remove('active'));
  el.classList.add('active');
  hideResult();
  updateCalcBtn();
}

function customVol(val) {
  selectedVol = val === '' ? null : parseFloat(val);
  document.querySelectorAll('.vol-preset').forEach(b => b.classList.remove('active'));
  hideResult();
  updateCalcBtn();
}

function updateCalcBtn() {
  const btn = document.getElementById('calc-btn');
  btn.disabled = !(selectedMedia && selectedVol && selectedVol > 0);
}

function hideResult() {
  document.getElementById('result-card').classList.remove('visible');
}

// ── Calculate ──────────────────────────────────────────────────────────────
function calculate() {
  if (!selectedMedia || !selectedVol || selectedVol <= 0) return;

  const raw  = (selectedMedia.gPer1000 / 1000) * selectedVol;
  const dose = raw.toFixed(4);

  // Result header
  document.getElementById('res-num').textContent  = dose;
  document.getElementById('res-name').textContent = selectedMedia.name;
  document.getElementById('res-vol').textContent  = selectedVol + ' mL';
  document.getElementById('res-rate').textContent = selectedMedia.gPer1000 + ' g / 1000 mL';

  // Prep steps
  const stepsHtml = selectedMedia.steps.map((s, i) => {
    const txt = s.replace(/\{dose\}/g, dose).replace(/\{vol\}/g, selectedVol);
    return `<li class="prep-step">
      <span class="step-num">${i + 1}</span>
      <span class="step-text">${txt}</span>
    </li>`;
  }).join('');
  document.getElementById('prep-steps').innerHTML = stepsHtml;

  // Autoclave badge
  const badgeEl = document.getElementById('autoclave-badge');
  if (selectedMedia.autoclave === 'yes') {
    badgeEl.className = 'autoclave-badge autoclave-yes';
    badgeEl.innerHTML = '<i class="ti ti-temperature-plus" aria-hidden="true"></i> Autoclave required — 121 °C, 15–20 min';
  } else if (selectedMedia.autoclave === 'heat-only') {
    badgeEl.className = 'autoclave-badge autoclave-heat';
    badgeEl.innerHTML = '<i class="ti ti-flame" aria-hidden="true"></i> Heat only to dissolve — do NOT autoclave';
  } else {
    badgeEl.className = 'autoclave-badge autoclave-none';
    badgeEl.innerHTML = '<i class="ti ti-check" aria-hidden="true"></i> No heat or autoclave needed';
  }

  // Warning
  const warnEl = document.getElementById('result-warn');
  if (selectedMedia.warn) {
    warnEl.innerHTML = `<i class="ti ti-alert-triangle" aria-hidden="true"></i> ${selectedMedia.warn}`;
    warnEl.classList.remove('hidden');
  } else {
    warnEl.classList.add('hidden');
  }

  // Fav button state
  syncFavBtn();

  // Show result
  document.getElementById('result-card').classList.add('visible');

  // Save to recents
  const entry = {
    name: selectedMedia.name,
    type: selectedMedia.type,
    autoclave: selectedMedia.autoclave,
    vol:  selectedVol,
    dose: dose,
    ts:   Date.now()
  };
  recents = [entry, ...recents.filter(r => !(r.name === entry.name && r.vol === entry.vol))].slice(0, 30);
  localStorage.setItem('mc_recents', JSON.stringify(recents));
}

// ── Favorites ──────────────────────────────────────────────────────────────
function syncFavBtn() {
  if (!selectedMedia) return;
  const active = favs.includes(selectedMedia.name);
  const btn    = document.getElementById('fav-btn');
  const icon   = document.getElementById('fav-icon');
  btn.classList.toggle('active', active);
  icon.className = active ? 'ti ti-star-filled' : 'ti ti-star';
  btn.setAttribute('aria-label', active ? 'Remove from favorites' : 'Add to favorites');
}

function toggleFav() {
  if (!selectedMedia) return;
  const name = selectedMedia.name;
  favs = favs.includes(name) ? favs.filter(f => f !== name) : [name, ...favs];
  localStorage.setItem('mc_favs', JSON.stringify(favs));
  syncFavBtn();
  if (document.getElementById('page-favs').classList.contains('active')) renderFavs();
}

function renderFavs() {
  const el = document.getElementById('favs-list');
  if (!favs.length) {
    el.innerHTML = `<div class="empty-state">
      <i class="ti ti-star" aria-hidden="true"></i>
      <p>No favorites yet</p>
      <small>Star a result to save it here.</small>
    </div>`;
    return;
  }
  el.innerHTML = favs.map(name => {
    const m = MEDIA_DB.find(x => x.name === name);
    if (!m) return '';
    const icon = m.autoclave === 'heat-only' ? 'ti-flame' : m.autoclave === 'yes' ? 'ti-virus' : 'ti-leaf';
    return `<button class="fav-item" onclick="loadFav('${name.replace(/'/g,"\\'")}')">
      <i class="ti ${icon}" aria-hidden="true"></i>
      <div class="fav-info">
        <span class="fav-name">${name}</span>
        <span class="fav-sub">${m.type} · ${m.gPer1000} g / 1000 mL</span>
      </div>
      <i class="ti ti-arrow-right" aria-hidden="true"></i>
    </button>`;
  }).join('');
}

function loadFav(name) {
  showTab('calc');
  selectMedia(name);
}

// ── Recents ────────────────────────────────────────────────────────────────
function renderRecents() {
  const el = document.getElementById('recents-list');
  if (!recents.length) {
    el.innerHTML = `<div class="empty-state">
      <i class="ti ti-clock" aria-hidden="true"></i>
      <p>No recent calculations</p>
      <small>Your history will appear here.</small>
    </div>`;
    return;
  }

  el.innerHTML = recents.map(r => {
    const d    = new Date(r.ts);
    const when = d.toLocaleDateString(undefined, { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
    const icon = r.autoclave === 'heat-only' ? 'ti-flame' : r.autoclave === 'yes' ? 'ti-virus' : 'ti-leaf';
    return `<div class="recent-item">
      <div class="recent-icon"><i class="ti ${icon}" aria-hidden="true"></i></div>
      <div class="recent-info">
        <span class="recent-name">${r.name}</span>
        <span class="recent-sub">${r.type} · ${when}</span>
      </div>
      <div class="recent-right">
        <span class="recent-dose">${r.dose} g</span>
        <span class="recent-vol">${r.vol} mL</span>
      </div>
    </div>`;
  }).join('');
}

// ── Service Worker ─────────────────────────────────────────────────────────
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').catch(() => {});
  });
}
