const globalCSS = `
/* =========================
   ROOT VARIABLES
   ========================= */
:root {
  /* Single source of truth for the sticky nav's height.
     Used by .home-fold below to calculate exactly how much
     viewport space is left for the Hero + Stats "fold". */
  --nav-height: 60px;
}

/* =========================
   RESET
   ========================= */
*, *::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: system-ui, -apple-system, Segoe UI, Roboto, sans-serif;
  background: #0b0f0e;
  color: #e8f0ed;
  font-size: 16px;
  line-height: 1.7;
  overflow-x: hidden;
}

img { max-width: 100%; display: block; }
button { cursor: pointer; font-family: inherit; }
a { text-decoration: none; }

/* =========================
   TYPOGRAPHY
   ========================= */
h1 { font-size: clamp(2rem, 5vw, 3rem); line-height: 1.2; font-weight: 800; }
h2 { font-size: clamp(1.5rem, 3vw, 2.2rem); line-height: 1.3; font-weight: 700; }
p  { font-size: 1rem; line-height: 1.8; color: #cfe2dc; }

.hero-title { font-size: clamp(1.5rem, 5vw, 3rem); font-weight: 800; line-height: 1.2; }
.hero-title span { color: #00e5b0; }

.hero-sub {
  font-size: clamp(0.95rem, 2vw, 1.1rem);
  line-height: 1.8;
  color: #cfe2dc;
  max-width: 560px;
}

.eyebrow {
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #00e5b0;
  margin-bottom: 0.6rem;
}

.section-title {
  font-size: clamp(1.4rem, 3vw, 2rem);
  font-weight: 700;
  margin-bottom: 1rem;
}
.section-title span { color: #00e5b0; }

/* =========================
   LAYOUT
   ========================= */
.page { min-height: 100vh; }

.section {
  padding: clamp(2.5rem, 5vw, 4rem) clamp(1rem, 4vw, 2.5rem);
  max-width: 1200px;
  margin: 0 auto;
}

/* full-width section wrapper */
.section-full {
  padding: clamp(2.5rem, 5vw, 4rem) clamp(1rem, 4vw, 2.5rem);
}

.section-header-row {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

/* =========================
   GRIDS
   ========================= */
.grid-2 {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 280px), 1fr));
  gap: 1.2rem;
}

.grid-3 {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 240px), 1fr));
  gap: 1.2rem;
}

.grid-4 {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 160px), 1fr));
  gap: 1rem;
}

/* =========================
   CARDS
   ========================= */
.card {
  background: #111816;
  border: 1px solid #1e2e2a;
  border-radius: 14px;
  padding: 1.4rem;
  transition: border-color 0.2s, transform 0.2s;
}
.card:hover { border-color: rgba(0,229,176,0.3); transform: translateY(-2px); }

.card-icon {
  width: 38px; height: 38px;
  border-radius: 10px;
  background: rgba(0,229,176,0.08);
  display: flex; align-items: center; justify-content: center;
  color: #00e5b0;
  margin-bottom: 1rem;
}

.card-title { font-size: 1rem; font-weight: 700; margin-bottom: 0.4rem; }
.card-text  { font-size: 0.875rem; color: #7a9990; line-height: 1.6; }

/* =========================
   TAGS
   ========================= */
.tag {
  display: inline-block;
  font-size: 0.75rem;
  padding: 4px 10px;
  margin: 3px;
  border-radius: 6px;
  background: #141c1a;
  color: #7a9990;
  border: 1px solid #1e2e2a;
}

/* =========================
   BUTTONS
   ========================= */
.btn-primary {
  background: #00e5b0;
  color: #0b0f0e;
  border: none;
  padding: 0.7rem 1.5rem;
  border-radius: 8px;
  font-weight: 700;
  font-size: 0.9rem;
  transition: background 0.2s, transform 0.15s;
  white-space: nowrap;
}
.btn-primary:hover { background: #00c49a; transform: translateY(-1px); }

.btn-ghost {
  background: transparent;
  color: #00e5b0;
  border: 1px solid rgba(0,229,176,0.35);
  padding: 0.7rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.9rem;
  transition: background 0.2s, border-color 0.2s;
  white-space: nowrap;
}
.btn-ghost:hover { background: rgba(0,229,176,0.07); border-color: #00e5b0; }

.btn-row {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  align-items: center;
}

/* =========================
   NAV
   ========================= */
.nav {
  position: sticky;
  top: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 clamp(1rem, 4vw, 2.5rem);
  height: var(--nav-height);
  background: rgba(11,15,14,0.92);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid #1e2e2a;
}

.nav-logo {
  background: none;
  border: none;
  font-size: 1.1rem;
  font-weight: 800;
  color: #00e5b0;
  letter-spacing: -0.02em;
}

.nav-links {
  display: flex;
  gap: 0.25rem;
  align-items: center;
}

.nav-link {
  background: none;
  border: none;
  color: #7a9990;
  font-size: 0.82rem;
  font-weight: 500;
  padding: 0.4rem 0.8rem;
  border-radius: 6px;
  transition: color 0.2s, background 0.2s;
}
.nav-link:hover  { color: #e8f0ed; background: rgba(255,255,255,0.05); }
.nav-link.active { color: #00e5b0; background: rgba(0,229,176,0.08); }

.nav-right { display: flex; align-items: center; gap: 0.75rem; }

.hire-btn {
  background: #00e5b0;
  color: #0b0f0e;
  border: none;
  padding: 0.45rem 1rem;
  border-radius: 6px;
  font-size: 0.8rem;
  font-weight: 700;
  transition: background 0.2s;
}
.hire-btn:hover { background: #00c49a; }

/* HAMBURGER */
.nav-toggle {
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  background: none;
  border: none;
  width: 36px; height: 36px;
  padding: 4px;
}
.nav-toggle span {
  display: block;
  width: 20px; height: 2px;
  background: #e8f0ed;
  border-radius: 2px;
  transition: transform 0.3s, opacity 0.3s;
}
.nav-toggle.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.nav-toggle.open span:nth-child(2) { opacity: 0; }
.nav-toggle.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

/* =========================
   MOBILE NAV
   ========================= */
@media (max-width: 768px) {
  .nav-toggle { display: flex; }
  .hire-btn   { display: none; }

  .nav-links {
    display: none;
    position: fixed;
    top: var(--nav-height); left: 0; right: 0;
    flex-direction: column;
    background: #0d1412;
    border-bottom: 1px solid #1e2e2a;
    padding: 1rem;
    gap: 0.4rem;
    z-index: 99;
  }
  .nav-links.open { display: flex; }
  .nav-link { font-size: 1rem; padding: 0.7rem 1rem; width: 100%; text-align: left; }
}

/* =========================
   HOME — INITIAL VIEWPORT FOLD  (NEW)
   ========================= */
/*
  Wraps Hero + Stats together so that, on first load, this pair
  always fills (at least) the visible viewport beneath the sticky
  nav — which in turn pushes Portfolio/Services/Stack/CTA/Footer
  below the fold so they only appear once the user scrolls.

  IMPORTANT: this uses min-height, not height. That means:
    - If Hero+Stats content is shorter than the viewport, the fold
      stretches to fill it (Hero is centered to "fill naturally").
    - If Hero+Stats content is ever taller than the viewport (e.g.
      a very short phone in landscape), the fold simply grows to
      fit its content instead of clipping it. Stats can NEVER be
      hidden, overlapped, or cut off — it just stays directly
      below Hero in normal document flow.
*/
.home-fold {
  display: flex;
  flex-direction: column;
  /* Fallback for browsers without svh support (e.g. older Safari) */
  min-height: calc(100vh - var(--nav-height));
  /* svh = "small viewport height" — accounts for mobile browser
     chrome (address bar) so content isn't hidden behind it. This
     is what previously caused Stats to appear pushed off-screen
     on some mobile devices when using plain vh. */
  min-height: calc(100svh - var(--nav-height));
}

/* =========================
   HOME HERO
   ========================= */
.home-hero {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 3rem;
  align-items: center;
  /* NEW: lets Hero grow to consume the leftover space inside
     .home-fold, so it "fills the viewport naturally" while Stats
     (the sibling flex item below) keeps its own natural height. */
  flex: 1;
  /* NEW: when Hero is taller than its content (flex-grown), this
     vertically centers the text/photo row within that extra space
     instead of leaving it pinned to the top with empty space below. */
  align-content: center;
  padding: clamp(3rem, 6vw, 5rem) clamp(1rem, 4vw, 2.5rem);
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}

.home-hero-text { max-width: 580px; }

.home-socials {
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
  align-items: center;
}
.home-socials a {
  color: #7a9990;
  transition: color 0.2s, transform 0.2s;
  display: flex;
}
.home-socials a:hover { color: #00e5b0; transform: translateY(-2px); }

/* PHOTO */
.home-photo-wrap {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  flex-shrink: 0;
}

.home-photo-ring {
  width: 200px; height: 200px;
  border-radius: 50%;
  padding: 3px;
  background: linear-gradient(135deg, #00e5b0, transparent 60%);
}

.home-photo-inner {
  width: 100%; height: 100%;
  border-radius: 50%;
  overflow: hidden;
  background: #111816;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.home-photo-inner img {
  width: 100%; height: 100%;
  object-fit: cover;
  object-position: center top;
}

.home-photo-monogram {
  position: absolute;
  font-size: 2rem;
  font-weight: 800;
  color: #00e5b0;
  display: none;
}

.home-photo-inner img[style*="display: none"] + .home-photo-monogram,
.home-photo-inner:not(:has(img)) .home-photo-monogram {
  display: flex;
  align-items: center;
  justify-content: center;
}

.home-photo-badge {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.72rem;
  color: #7a9990;
  background: #111816;
  border: 1px solid #1e2e2a;
  padding: 0.35rem 0.85rem;
  border-radius: 20px;
  white-space: nowrap;
}
.home-photo-badge-dot {
  width: 7px; height: 7px;
  border-radius: 50%;
  background: #00e5b0;
  display: inline-block;
  animation: pulse 2s infinite;
}
@keyframes pulse {
  0%,100% { opacity: 1; }
  50% { opacity: 0.4; }
}

/* =========================
   HOME STATS
   ========================= */
.home-stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border-top: 1px solid #1e2e2a;
  border-bottom: 1px solid #1e2e2a;
  margin: 0 clamp(1rem, 4vw, 2.5rem);
  /* NEW: as a flex child of .home-fold, prevent Stats from ever
     being compressed/shrunk by flexbox — it must always render
     at its natural, fully-readable height. */
  flex-shrink: 0;
  width: calc(100% - 2 * clamp(1rem, 4vw, 2.5rem));
}

.home-stat-item {
  padding: 1.5rem 1rem;
  text-align: center;
  border-right: 1px solid #1e2e2a;
}
.home-stat-item:last-child { border-right: none; }

.home-stat-num {
  font-size: clamp(1.5rem, 4vw, 2rem);
  font-weight: 800;
  color: #00e5b0;
  line-height: 1;
}
.home-stat-label {
  font-size: 0.72rem;
  color: #7a9990;
  margin-top: 0.35rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

/* =========================
   HOME STACK GRID
   ========================= */
.home-stack-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 180px), 1fr));
  gap: 0.75rem;
}

.home-stack-pill {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  background: #111816;
  border: 1px solid #1e2e2a;
  border-radius: 10px;
  padding: 0.75rem 1rem;
  font-size: 0.82rem;
  font-weight: 600;
  color: #e8f0ed;
  transition: border-color 0.2s, transform 0.2s;
}
.home-stack-pill:hover { border-color: rgba(0,229,176,0.3); transform: translateY(-2px); }

/* =========================
   CTA BLOCK
   ========================= */
.cta-block {
  text-align: center;
  padding: clamp(3rem, 6vw, 5rem) clamp(1rem, 4vw, 2.5rem);
  background: #0e1614;
  border-top: 1px solid #1e2e2a;
  border-bottom: 1px solid #1e2e2a;
}
.cta-block h2 { margin-bottom: 0.75rem; }
.cta-block p  { color: #7a9990; margin-bottom: 1.5rem; font-size: 0.9rem; }

/* =========================
   PORTFOLIO
   ========================= */
.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 280px), 1fr));
  gap: 1.2rem;
  padding: clamp(1rem, 3vw, 2rem) clamp(1rem, 4vw, 2.5rem);
}

.portfolio-card {
  background: #111816;
  border: 1px solid #1e2e2a;
  border-radius: 14px;
  overflow: hidden;
  transition: border-color 0.25s, transform 0.25s;
}
.portfolio-card:hover {
  border-color: rgba(0,229,176,0.3);
  transform: translateY(-3px);
}

.portfolio-img {
  width: 100%;
  height: 160px;
  overflow: hidden;
}
.portfolio-img img {
  width: 100%; height: 100%;
  object-fit: cover;
  transition: transform 0.35s ease;
}
.portfolio-card:hover .portfolio-img img { transform: scale(1.06); }

.portfolio-card-body { padding: 1rem 1.1rem 1.2rem; }
.portfolio-type      { font-size: 0.7rem; color: #00e5b0; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 0.35rem; }
.portfolio-card-title{ font-size: 0.95rem; font-weight: 700; margin-bottom: 0.35rem; }
.portfolio-card-desc { font-size: 0.8rem; color: #7a9990; line-height: 1.5; margin-bottom: 0.75rem; }

.view-link {
  font-size: 0.78rem;
  color: #00e5b0;
  font-weight: 600;
  transition: opacity 0.2s;
}
.view-link:hover { opacity: 0.7; }

.filter-row {
  display: flex;
  gap: 0.5rem;
  padding: 0 clamp(1rem, 4vw, 2.5rem);
  margin-bottom: 0.5rem;
  flex-wrap: wrap;
}

.filter-btn {
  background: transparent;
  border: 1px solid #1e2e2a;
  color: #7a9990;
  padding: 0.4rem 1rem;
  border-radius: 6px;
  font-size: 0.8rem;
  font-weight: 600;
  transition: all 0.2s;
  text-transform: capitalize;
}
.filter-btn:hover  { border-color: rgba(0,229,176,0.3); color: #e8f0ed; }
.filter-btn.active { background: rgba(0,229,176,0.1); border-color: #00e5b0; color: #00e5b0; }

/* =========================
   ABOUT
   ========================= */
.about-hero {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  padding: clamp(3rem, 6vw, 5rem) clamp(1rem, 4vw, 2.5rem);
  max-width: 1100px;
  margin: 0 auto;
}

.about-img {
  background: #111816;
  border: 1px solid #1e2e2a;
  border-radius: 16px;
  padding: 2rem;
}
.about-img-inner {
  font-family: 'Fira Code', monospace;
  font-size: 0.78rem;
  color: #00e5b0;
  line-height: 2;
}

.philosophy-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 220px), 1fr));
  gap: 1.2rem;
}

/* =========================
   SERVICES
   ========================= */
.services-hero {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  padding: clamp(3rem, 6vw, 5rem) clamp(1rem, 4vw, 2.5rem);
  max-width: 1100px;
  margin: 0 auto;
}

/* =========================
   PORTFOLIO
   ========================= */
.portfolio-hero {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  padding: clamp(3rem, 6vw, 5rem) clamp(1rem, 4vw, 2.5rem);
  max-width: 1100px;
  margin: 0 auto;
}

.code-block {
  background: #0d1614;
  border: 1px solid #1e2e2a;
  border-radius: 14px;
  padding: 1.5rem;
  font-family: 'Fira Code', monospace;
  font-size: 0.8rem;
  line-height: 1.9;
}
.code-dots  { display: flex; gap: 6px; margin-bottom: 1rem; }
.code-dot   { width: 10px; height: 10px; border-radius: 50%; }
.code-line  { color: #7a9990; margin-bottom: 0.5rem; }
.code-acc   { color: #00e5b0; }
.code-str   { color: #ffd580; }
.code-key   { color: #e8f0ed; }

.process-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 200px), 1fr));
  gap: 1.2rem;
}

/* =========================
   STACK
   ========================= */
.hero {
  padding: clamp(3rem, 6vw, 5rem) clamp(1rem, 4vw, 2.5rem) 2rem;
  max-width: 700px;
}

.stack-hero-card {
  background: #111816;
  border: 1px solid #1e2e2a;
  border-radius: 14px;
  padding: 1.5rem;
  transition: border-color 0.2s, transform 0.2s;
}
.stack-hero-card:hover { border-color: rgba(0,229,176,0.3); transform: translateY(-2px); }
.stack-name { font-weight: 700; font-size: 1rem; margin-bottom: 0.4rem; }
.stack-desc { font-size: 0.82rem; color: #7a9990; line-height: 1.6; }

.infra-card {
  background: #111816;
  border: 1px solid #1e2e2a;
  border-radius: 12px;
  padding: 1.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  transition: border-color 0.2s, transform 0.2s;
}
.infra-card:hover { border-color: rgba(0,229,176,0.3); transform: translateY(-2px); }
.infra-name { font-size: 0.8rem; font-weight: 700; }

.proficiency-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 220px), 1fr));
  gap: 1.5rem;
}
.proficiency-title { font-size: 0.9rem; font-weight: 700; margin-bottom: 0.4rem; }
.proficiency-text  { font-size: 0.8rem; color: #7a9990; line-height: 1.6; }

.divider {
  height: 1px;
  background: #1e2e2a;
  margin: 1rem 0;
}

/* =========================
   CONTACT / HIRE
   ========================= */
.contact-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  padding: clamp(3rem, 6vw, 5rem) clamp(1rem, 4vw, 2.5rem);
  max-width: 1100px;
  margin: 0 auto;
  align-items: start;
}

.contact-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1rem;
}
.contact-icon {
  width: 36px; height: 36px;
  border-radius: 8px;
  background: rgba(0,229,176,0.08);
  border: 1px solid rgba(0,229,176,0.15);
  display: flex; align-items: center; justify-content: center;
  font-size: 1rem; color: #00e5b0;
  flex-shrink: 0;
}
.contact-label { font-size: 0.72rem; color: #7a9990; margin-bottom: 0.15rem; }
.contact-val   { font-size: 0.85rem; font-weight: 600; }

/* FORM */
.form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1rem; }
.form-group { margin-bottom: 1rem; }
.form-label { display: block; font-size: 0.78rem; color: #7a9990; margin-bottom: 0.4rem; font-weight: 600; }

.form-input, .form-select, .form-textarea {
  width: 100%;
  background: #0b0f0e;
  border: 1px solid #1e2e2a;
  border-radius: 8px;
  padding: 0.65rem 0.9rem;
  color: #e8f0ed;
  font-size: 0.85rem;
  font-family: inherit;
  transition: border-color 0.2s;
  outline: none;
}
.form-input:focus, .form-select:focus, .form-textarea:focus { border-color: rgba(0,229,176,0.5); }
.form-input::placeholder, .form-textarea::placeholder { color: #3a4e4a; }
.form-textarea { min-height: 110px; resize: vertical; }
.form-select option { background: #111816; }

.submit-btn {
  width: 100%;
  background: #00e5b0;
  color: #0b0f0e;
  border: none;
  padding: 0.85rem 1.5rem;
  border-radius: 8px;
  font-weight: 700;
  font-size: 0.9rem;
  transition: background 0.2s, transform 0.15s;
}
.submit-btn:hover:not(:disabled) { background: #00c49a; transform: translateY(-1px); }
.submit-btn:disabled { opacity: 0.6; cursor: not-allowed; }

/* =========================
   FOOTER
   ========================= */
.footer {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr;
  gap: 2rem;
  padding: clamp(2rem, 4vw, 3rem) clamp(1rem, 4vw, 2.5rem);
  border-top: 1px solid #1e2e2a;
  background: #080c0b;
}
.footer-logo { font-size: 1.1rem; font-weight: 800; color: #00e5b0; margin-bottom: 0.4rem; }
.footer-sub  { font-size: 0.78rem; color: #7a9990; }
.footer-col h4 { font-size: 0.78rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 0.75rem; color: #e8f0ed; }
.footer-col a {
  display: block;
  font-size: 0.8rem;
  color: #7a9990;
  margin-bottom: 0.4rem;
  transition: color 0.2s;
}
.footer-col a:hover { color: #00e5b0; }

/* =========================
   ANIMATIONS
   ========================= */
.fade-in { animation: fadeIn 0.5s ease forwards; }
@keyframes fadeIn { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }

.stagger-1 { animation-delay: 0.05s; }
.stagger-2 { animation-delay: 0.12s; }
.stagger-3 { animation-delay: 0.19s; }
.stagger-4 { animation-delay: 0.26s; }
.stagger-5 { animation-delay: 0.33s; }

/* =========================
   RESPONSIVE — TABLET (768px)
   ========================= */
@media (max-width: 900px) {
  .home-hero       { grid-template-columns: 1fr; text-align: center; }
  .home-hero-text  { max-width: 100%; }
  .hero-sub        { margin: 0 auto; }
  .home-socials    { justify-content: center; }
  .btn-row         { justify-content: center; }
  .home-photo-wrap { margin: 0 auto; }
  .home-photo-ring { width: 160px; height: 160px; }
  /* NEW: stacked Hero (text + photo on top of each other) is taller
     than the desktop side-by-side layout, so reduce vertical padding
     here to keep Hero+Stats comfortably within one viewport. */
  .home-hero       { padding-top: clamp(2rem, 5vw, 3rem); padding-bottom: clamp(1.5rem, 4vw, 2rem); gap: 1.75rem; }

  .about-hero    { grid-template-columns: 1fr; }
  .portfolio-hero { grid-template-columns: 1fr; }
  .services-hero { grid-template-columns: 1fr; }
  .contact-layout{ grid-template-columns: 1fr; }

  .home-stats { grid-template-columns: repeat(2, 1fr); }
  .home-stat-item { border-right: 1px solid #1e2e2a; border-bottom: 1px solid #1e2e2a; }
  .home-stat-item:nth-child(2) { border-right: none; }
  .home-stat-item:nth-child(3),
  .home-stat-item:nth-child(4) { border-bottom: none; }
  .home-stat-item:nth-child(4) { border-right: none; }

  .footer { grid-template-columns: 1fr 1fr; }
  .footer > div:first-child { grid-column: 1 / -1; }

  /* Stack backend+wordpress section vertically */
  .section [style*="grid-template-columns: 1fr 1fr"] {
    display: grid !important;
    grid-template-columns: 1fr !important;
  }
}

/* =========================
   RESPONSIVE — MOBILE (480px)
   ========================= */
@media (max-width: 480px) {
  .home-stats { grid-template-columns: repeat(2, 1fr); }

  /* NEW: smaller photo + tighter padding/gaps free up vertical room
     so Hero + Stats reliably fit within one small-phone viewport. */
  .home-photo-ring { width: 130px; height: 130px; }
  .home-hero {
    padding-top: 1.5rem;
    padding-bottom: 1.25rem;
    gap: 1.25rem;
  }
  .home-stat-item { padding: 1rem 0.5rem; }

  .portfolio-grid {
    grid-template-columns: 1fr;
    padding: 1rem;
    gap: 1rem;
  }
  .portfolio-img { height: 130px; }
  .portfolio-card-title { font-size: 0.88rem; }
  .portfolio-card-desc  { font-size: 0.76rem; }

  .form-row { grid-template-columns: 1fr; }

  .footer { grid-template-columns: 1fr; }
  .footer > div:first-child { grid-column: auto; }

  .section { padding: 2rem 1rem; }

  .btn-row { flex-direction: column; width: 100%; }
  .btn-primary, .btn-ghost { width: 100%; text-align: center; }

  .home-stack-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.6rem;
  }
  .home-stack-pill { font-size: 0.75rem; padding: 0.6rem 0.75rem; }

  .grid-3, .grid-4 { grid-template-columns: 1fr; }

  .section-header-row { flex-direction: column; align-items: flex-start; }
}

/* =========================
   MODALS / MISC
   ========================= */
.modal-overlay {
  position: fixed; inset: 0;
  background: rgba(0,0,0,0.85);
  display: flex; align-items: center; justify-content: center;
  z-index: 999;
  animation: fadeIn 0.3s ease;
}
.modal-content {
  background: #111816;
  padding: 2rem;
  border-radius: 16px;
  max-width: 800px; width: 90%;
  border: 1px solid #1e2e2a;
  animation: scaleUp 0.3s ease;
}
@keyframes scaleUp { from { transform: scale(0.9); } to { transform: scale(1); } }

/* =========================
   NEW: PORTFOLIO RESULT BADGE
   ========================= */
.portfolio-img { position: relative; }
.portfolio-result-badge {
  position: absolute;
  top: 0.6rem;
  left: 0.6rem;
  background: rgba(11,15,14,0.82);
  backdrop-filter: blur(6px);
  border: 1px solid rgba(0,229,176,0.35);
  color: #00e5b0;
  font-size: 0.62rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  padding: 0.25rem 0.6rem;
  border-radius: 20px;
  white-space: nowrap;
}

/* =========================
   NEW: TESTIMONIALS
   ========================= */
.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 280px), 1fr));
  gap: 1.2rem;
}
.testimonial-card {
  background: #111816;
  border: 1px solid #1e2e2a;
  border-radius: 14px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  transition: border-color 0.2s, transform 0.2s;
}
.testimonial-card:hover { border-color: rgba(0,229,176,0.25); transform: translateY(-2px); }
.testimonial-text {
  font-size: 0.875rem;
  color: #cfe2dc;
  line-height: 1.8;
  font-style: italic;
  flex: 1;
}
.testimonial-author {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-top: 0.5rem;
  padding-top: 0.75rem;
  border-top: 1px solid #1e2e2a;
}
.testimonial-avatar {
  width: 38px; height: 38px;
  border-radius: 50%;
  background: rgba(0,229,176,0.12);
  border: 1px solid rgba(0,229,176,0.25);
  display: flex; align-items: center; justify-content: center;
  font-size: 0.72rem;
  font-weight: 700;
  color: #00e5b0;
  flex-shrink: 0;
}
.testimonial-name { font-size: 0.88rem; font-weight: 700; color: #e8f0ed; }
.testimonial-role { font-size: 0.72rem; color: #7a9990; margin-top: 0.1rem; }

/* =========================
   NEW: WHY HIRE ME
   ========================= */
.why-hire-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
}
.why-item {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  padding: 1rem 1.2rem;
  background: #111816;
  border: 1px solid #1e2e2a;
  border-radius: 12px;
  transition: border-color 0.2s;
  margin-bottom: 0.75rem;
}
.why-item:last-child { margin-bottom: 0; }
.why-item:hover { border-color: rgba(0,229,176,0.25); }
.why-emoji {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 10px;
  background: rgba(0, 229, 176, 0.08); /* swap to match your ACCENT color */
  color: var(--accent, #00e5b0);
  flex-shrink: 0;
}
.why-title { font-size: 0.92rem; font-weight: 700; margin-bottom: 0.2rem; }
.why-desc  { font-size: 0.82rem; color: #7a9990; line-height: 1.6; }

/* =========================
   NEW: FAQ ACCORDION
   ========================= */
.faq-list {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  max-width: 780px;
}
.faq-item {
  background: #111816;
  border: 1px solid #1e2e2a;
  border-radius: 12px;
  padding: 1rem 1.25rem;
  cursor: pointer;
  transition: border-color 0.2s;
  user-select: none;
}
.faq-item.open { border-color: rgba(0,229,176,0.35); }
.faq-item:hover { border-color: rgba(0,229,176,0.2); }
.faq-question {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  font-size: 0.95rem;
  font-weight: 600;
  color: #e8f0ed;
}
.faq-answer {
  font-size: 0.875rem;
  color: #7a9990;
  line-height: 1.8;
  margin-top: 0.85rem;
  padding-top: 0.85rem;
  border-top: 1px solid #1e2e2a;
}

/* =========================
   NEW: AVAILABILITY CARD
   ========================= */
.availability-card {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  background: rgba(0,229,176,0.05);
  border: 1px solid rgba(0,229,176,0.2);
  border-radius: 12px;
  padding: 1rem 1.2rem;
  margin-bottom: 1.5rem;
}
.availability-dot {
  width: 9px; height: 9px;
  border-radius: 50%;
  background: #00e5b0;
  flex-shrink: 0;
  margin-top: 0.35rem;
  animation: pulse 2s infinite;
}
.availability-title { font-size: 0.88rem; font-weight: 700; color: #00e5b0; margin-bottom: 0.2rem; }
.availability-desc  { font-size: 0.8rem; color: #7a9990; line-height: 1.6; }

/* =========================
   NEW: QUICK FACTS
   ========================= */
.quick-fact {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 0;
  border-bottom: 1px solid #1e2e2a;
  gap: 1rem;
}
.quick-fact:last-child { border-bottom: none; }
.quick-fact-label { font-size: 0.72rem; color: #7a9990; text-transform: uppercase; letter-spacing: 0.06em; }
.quick-fact-val   { font-size: 0.85rem; font-weight: 600; color: #e8f0ed; text-align: right; }

/* =========================
   NEW: ABOUT PHOTO + TIMELINE
   ========================= */
.about-photo-col {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  flex-shrink: 0;
}
.about-photo-frame {
  width: 200px; height: 240px;
  border-radius: 16px;
  overflow: hidden;
  border: 2px solid #1e2e2a;
  position: relative;
  background: #111816;
}
.about-photo-frame img {
  width: 100%; height: 100%;
  object-fit: cover;
  object-position: center top;
  display: block;
}
.about-photo-monogram {
  position: absolute; inset: 0;
  display: flex; align-items: center; justify-content: center;
  font-size: 2.2rem; font-weight: 800; color: #00e5b0;
  background: linear-gradient(135deg, #0b2a22 0%, #061812 100%);
}
.about-photo-frame img:not([style*="display: none"]) + .about-photo-monogram { display: none; }
.about-social-row { display: flex; gap: 0.6rem; }
.about-social-row a {
  width: 34px; height: 34px;
  border-radius: 8px;
  border: 1px solid #1e2e2a;
  display: flex; align-items: center; justify-content: center;
  color: #7a9990;
  transition: border-color 0.2s, color 0.2s;
}
.about-social-row a:hover { border-color: #00e5b0; color: #00e5b0; }

.timeline {
  position: relative;
  padding-left: 1.75rem;
  max-width: 680px;
}
.timeline::before {
  content: '';
  position: absolute;
  left: 0; top: 0; bottom: 0;
  width: 1px;
  background: #1e2e2a;
}
.timeline-item { position: relative; margin-bottom: 2.5rem; }
.timeline-item:last-child { margin-bottom: 0; }
.timeline-dot {
  position: absolute;
  left: -1.85rem; top: 0.3rem;
  width: 10px; height: 10px;
  border-radius: 50%;
  background: #00e5b0;
}
.timeline-dot.muted { background: #1e2e2a; border: 1px solid #3a4e4a; }
.timeline-year {
  font-size: 0.7rem;
  color: #00e5b0;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 0.25rem;
}
.timeline-role { font-size: 1rem; font-weight: 700; margin-bottom: 0.2rem; }
.timeline-company { font-size: 0.75rem; color: #00e5b0; margin-bottom: 0.4rem; font-family: monospace; }
.timeline-desc { font-size: 0.875rem; color: #7a9990; line-height: 1.7; }

.about-checklist { display: flex; flex-direction: column; gap: 0.85rem; margin-top: 1.5rem; }
.about-check-item {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  font-size: 0.92rem;
  color: #7a9990;
  line-height: 1.6;
}

/* =========================
   NEW: SOCIAL CTA LINK (for CTA blocks)
   ========================= */
.social-cta-link {
  width: 42px; height: 42px;
  border-radius: 10px;
  border: 1px solid #1e2e2a;
  display: inline-flex; align-items: center; justify-content: center;
  color: #7a9990;
  transition: border-color 0.2s, color 0.2s;
}
.social-cta-link:hover { border-color: #00e5b0; color: #00e5b0; }

/* =========================
   NEW RESPONSIVE ADDITIONS
   ========================= */
@media (max-width: 900px) {
  .why-hire-grid { grid-template-columns: 1fr; gap: 2rem; }
  .about-photo-col { flex-direction: column; align-items: center; }
  .about-photo-frame { width: 170px; height: 210px; }
  .about-social-row { justify-content: center; }
  .about-hero { text-align: center; }
  .about-hero-cta-mobile { display: inline-flex; margin-top: 1rem; }
  .about-hero-cta-desktop { display: none; }
}

@media (max-width: 480px) {
  .testimonials-grid { grid-template-columns: 1fr; }
  .about-photo-col { flex-direction: column; align-items: center; }
  .about-photo-frame { width: 150px; height: 180px; }
  .about-social-row { justify-content: center; }
  .about-hero { text-align: center; }
  .about-hero-cta-mobile { display: inline-flex; margin-top: 1rem; }
  .about-hero-cta-desktop { display: none; }
  .faq-question { font-size: 0.88rem; }
  .quick-fact-val { font-size: 0.8rem; }
}

.about-hero-cta-mobile { display: none; }
/* =========================
   NEW: PORTFOLIO IN-PAGE EXPAND (no external links)
   ========================= */
.portfolio-card-expanded {
  border-color: rgba(0,229,176,0.4) !important;
  grid-column: span 1;
}
.portfolio-expanded-content {
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #1e2e2a;
  animation: fadeIn 0.3s ease;
}
.portfolio-expanded-img {
  width: 100%;
  border-radius: 10px;
  margin-bottom: 0.75rem;
  border: 1px solid #1e2e2a;
}
.portfolio-expanded-desc {
  font-size: 0.85rem;
  color: #cfe2dc;
  line-height: 1.7;
}
.view-link {
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  font-family: inherit;
}
`;

export default globalCSS;