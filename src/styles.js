import { ACCENT, ACCENT2, BG, CARD, CARD2, BORDER, TEXT, MUTED } from "./constants";

const globalCSS = `
  @import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600&family=Outfit:wght@400;500;600;700;800;900&display=swap');
  @import url('https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@400,500,600,700,800,900&display=swap');
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body { background: ${BG}; color: ${TEXT}; font-family: 'Cabinet Grotesk', 'Outfit', sans-serif; overflow-x: hidden; }
  ::-webkit-scrollbar { width: 4px; } ::-webkit-scrollbar-track { background: ${BG}; } ::-webkit-scrollbar-thumb { background: ${ACCENT}; border-radius: 2px; }
  a { color: inherit; text-decoration: none; }
  button { cursor: pointer; border: none; background: none; font-family: inherit; }
  input, select, textarea { font-family: inherit; outline: none; }

  .fade-in { animation: fadeUp 0.6s ease both; }
  @keyframes fadeUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
  .stagger-1 { animation-delay: 0.1s; } .stagger-2 { animation-delay: 0.2s; } .stagger-3 { animation-delay: 0.3s; } .stagger-4 { animation-delay: 0.4s; } .stagger-5 { animation-delay: 0.5s; }

  .nav { position: fixed; top: 0; left: 0; right: 0; z-index: 100; display: flex; align-items: center; justify-content: space-between; padding: 1.2rem 2.5rem; backdrop-filter: blur(12px); background: rgba(11,15,14,0.85); border-bottom: 1px solid ${BORDER}; }
  .nav-logo { font-size: 1.3rem; font-weight: 800; color: ${ACCENT}; letter-spacing: -0.02em; }
  .nav-links { display: flex; gap: 2rem; }
  .nav-link { font-size: 0.8rem; letter-spacing: 0.1em; text-transform: uppercase; color: ${MUTED}; transition: color 0.2s; }
  .nav-link:hover, .nav-link.active { color: ${TEXT}; }
  .nav-link.active { color: ${ACCENT}; }
  .hire-btn { background: ${ACCENT}; color: #000; font-size: 0.75rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; padding: 0.55rem 1.2rem; border-radius: 100px; transition: background 0.2s, transform 0.15s; }
  .hire-btn:hover { background: ${ACCENT2}; transform: scale(1.04); }

  .page { min-height: 100vh; padding-top: 5rem; }

  .hero { padding: 5rem 2.5rem 4rem; max-width: 900px; }
  .eyebrow { font-family: 'Fira Code', monospace; font-size: 0.7rem; letter-spacing: 0.15em; text-transform: uppercase; color: ${ACCENT}; margin-bottom: 1.2rem; }
  .hero-title { font-size: clamp(2.6rem, 6vw, 4.2rem); font-weight: 800; line-height: 1.08; letter-spacing: -0.03em; margin-bottom: 1.2rem; }
  .hero-title span { color: ${ACCENT}; font-style: italic; font-family: 'Cabinet Grotesk', sans-serif; font-weight: 400; }
  .hero-sub { font-size: 1rem; color: ${MUTED}; line-height: 1.7; max-width: 520px; margin-bottom: 2rem; }
  .btn-row { display: flex; gap: 1rem; flex-wrap: wrap; }
  .btn-primary { background: ${ACCENT}; color: #000; font-size: 0.8rem; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; padding: 0.75rem 1.6rem; border-radius: 100px; border: none; transition: background 0.2s, transform 0.15s; }
  .btn-primary:hover { background: ${ACCENT2}; transform: translateY(-2px); }
  .btn-ghost { background: transparent; color: ${TEXT}; font-size: 0.8rem; font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase; padding: 0.72rem 1.6rem; border-radius: 100px; border: 1px solid ${BORDER}; transition: border-color 0.2s, background 0.2s; }
  .btn-ghost:hover { border-color: ${MUTED}; background: rgba(255,255,255,0.03); }

  .section { padding: 4rem 2.5rem; max-width: 1100px; margin: 0 auto; }
  .section-title { font-size: 1.8rem; font-weight: 700; letter-spacing: -0.02em; margin-bottom: 2rem; }
  .section-title span { color: ${ACCENT}; }

  .card { background: ${CARD}; border: 1px solid ${BORDER}; border-radius: 16px; padding: 1.5rem; transition: border-color 0.2s, transform 0.2s; }
  .card:hover { border-color: rgba(0,229,176,0.3); transform: translateY(-3px); }

  .grid-3 { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1.25rem; }
  .grid-2 { display: grid; grid-template-columns: repeat(auto-fill, minmax(340px, 1fr)); gap: 1.25rem; }
  .grid-4 { display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 1rem; }

  .card-icon { width: 40px; height: 40px; border-radius: 10px; background: rgba(0,229,176,0.1); display: flex; align-items: center; justify-content: center; margin-bottom: 1rem; font-size: 1.1rem; }
  .card-title { font-size: 1.05rem; font-weight: 700; margin-bottom: 0.5rem; }
  .card-text { font-size: 0.82rem; color: ${MUTED}; line-height: 1.6; }

  .tag { display: inline-block; font-family: 'Fira Code', monospace; font-size: 0.65rem; letter-spacing: 0.08em; text-transform: uppercase; padding: 0.3rem 0.7rem; border-radius: 100px; border: 1px solid ${BORDER}; color: ${MUTED}; margin-right: 0.4rem; margin-bottom: 0.4rem; }
  .tag-accent { border-color: rgba(0,229,176,0.4); color: ${ACCENT}; }

  .cta-block { background: ${CARD}; border: 1px solid ${BORDER}; border-radius: 20px; padding: 3rem 2.5rem; text-align: center; margin: 4rem 2.5rem; }
  .cta-block h2 { font-size: 2rem; font-weight: 800; margin-bottom: 0.8rem; }
  .cta-block p { color: ${MUTED}; font-size: 0.9rem; margin-bottom: 1.8rem; }

  .footer { border-top: 1px solid ${BORDER}; padding: 3rem 2.5rem; display: flex; justify-content: space-between; flex-wrap: wrap; gap: 2rem; }
  .footer-logo { font-size: 1.1rem; font-weight: 800; color: ${ACCENT}; margin-bottom: 0.4rem; }
  .footer-sub { font-size: 0.78rem; color: ${MUTED}; max-width: 200px; line-height: 1.5; }
  .footer-col h4 { font-family: 'Fira Code', monospace; font-size: 0.65rem; letter-spacing: 0.12em; text-transform: uppercase; color: ${ACCENT}; margin-bottom: 0.8rem; }
  .footer-col a { display: block; font-size: 0.82rem; color: ${MUTED}; margin-bottom: 0.4rem; transition: color 0.2s; }
  .footer-col a:hover { color: ${TEXT}; }
  .footer-copy { font-family: 'Fira Code', monospace; font-size: 0.68rem; color: ${MUTED}; margin-top: 2rem; padding: 0 2.5rem 2rem; text-align: right; }

  .divider { height: 1px; background: ${BORDER}; margin: 0 2.5rem; }

  .portfolio-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1.25rem; padding: 0 2.5rem; }
  .portfolio-card { background: ${CARD}; border: 1px solid ${BORDER}; border-radius: 16px; overflow: hidden; transition: border-color 0.2s, transform 0.2s; cursor: pointer; }
  .portfolio-card:hover { border-color: rgba(0,229,176,0.3); transform: translateY(-4px); }
  .portfolio-img-placeholder { width: 100%; height: 180px; background: linear-gradient(135deg, ${CARD2} 0%, #0d1f1a 100%); display: flex; align-items: center; justify-content: center; font-size: 2rem; opacity: 0.4; }
  .portfolio-card-body { padding: 1.2rem; }
  .portfolio-type { font-family: 'Fira Code', monospace; font-size: 0.62rem; letter-spacing: 0.12em; text-transform: uppercase; color: ${ACCENT}; margin-bottom: 0.4rem; }
  .portfolio-card-title { font-size: 1.1rem; font-weight: 700; margin-bottom: 0.4rem; }
  .portfolio-card-desc { font-size: 0.78rem; color: ${MUTED}; line-height: 1.5; margin-bottom: 0.8rem; }
  .view-link { font-family: 'Fira Code', monospace; font-size: 0.68rem; letter-spacing: 0.06em; color: ${ACCENT}; display: flex; align-items: center; gap: 0.3rem; }

  .filter-row { display: flex; gap: 0.5rem; padding: 0 2.5rem; margin-bottom: 2rem; }
  .filter-btn { font-family: 'Fira Code', monospace; font-size: 0.68rem; letter-spacing: 0.08em; text-transform: uppercase; padding: 0.45rem 1rem; border-radius: 100px; border: 1px solid ${BORDER}; color: ${MUTED}; transition: all 0.2s; background: transparent; }
  .filter-btn.active { border-color: ${ACCENT}; color: ${ACCENT}; background: rgba(0,229,176,0.08); }
  .filter-btn:hover { border-color: ${MUTED}; color: ${TEXT}; }

  .timeline { position: relative; padding-left: 1.5rem; }
  .timeline::before { content: ''; position: absolute; left: 0; top: 0; bottom: 0; width: 1px; background: ${BORDER}; }
  .timeline-item { position: relative; margin-bottom: 2.5rem; }
  .timeline-dot { position: absolute; left: -1.55rem; top: 0.3rem; width: 10px; height: 10px; border-radius: 50%; background: ${ACCENT}; }
  .timeline-dot.muted { background: ${BORDER}; }
  .timeline-year { font-family: 'Fira Code', monospace; font-size: 0.65rem; letter-spacing: 0.1em; color: ${ACCENT}; text-transform: uppercase; margin-bottom: 0.3rem; }
  .timeline-role { font-size: 1rem; font-weight: 700; margin-bottom: 0.4rem; }
  .timeline-desc { font-size: 0.82rem; color: ${MUTED}; line-height: 1.6; }

  .stat-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
  .stat-card { background: ${CARD}; border: 1px solid ${BORDER}; border-radius: 14px; padding: 2rem; text-align: center; }
  .stat-num { font-size: 3rem; font-weight: 800; color: ${ACCENT}; line-height: 1; }
  .stat-label { font-family: 'Fira Code', monospace; font-size: 0.65rem; letter-spacing: 0.12em; text-transform: uppercase; color: ${MUTED}; margin-top: 0.4rem; }

  .services-hero { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center; padding: 4rem 2.5rem 2rem; }
  .code-block { background: ${CARD}; border: 1px solid ${BORDER}; border-radius: 14px; padding: 1.5rem; font-family: 'Fira Code', monospace; font-size: 0.75rem; line-height: 1.8; }
  .code-dot { display: inline-block; width: 8px; height: 8px; border-radius: 50%; margin-right: 4px; }
  .code-dots { margin-bottom: 1rem; display: flex; gap: 4px; }
  .code-line { color: ${MUTED}; } .code-acc { color: ${ACCENT}; } .code-str { color: #ffd580; } .code-key { color: #80ccff; }

  .process-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; }

  .contact-layout { display: grid; grid-template-columns: 1fr 1.4fr; gap: 4rem; padding: 4rem 2.5rem 2rem; }
  .contact-info { display: flex; flex-direction: column; gap: 1.5rem; }
  .contact-item { display: flex; align-items: flex-start; gap: 1rem; }
  .contact-icon { width: 36px; height: 36px; border-radius: 10px; background: rgba(0,229,176,0.1); display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-size: 0.9rem; }
  .contact-label { font-family: 'Fira Code', monospace; font-size: 0.62rem; letter-spacing: 0.1em; text-transform: uppercase; color: ${MUTED}; }
  .contact-val { font-size: 0.88rem; font-weight: 600; margin-top: 0.15rem; }
  .form-group { margin-bottom: 1.2rem; }
  .form-label { font-family: 'Fira Code', monospace; font-size: 0.62rem; letter-spacing: 0.1em; text-transform: uppercase; color: ${MUTED}; display: block; margin-bottom: 0.4rem; }
  .form-input { width: 100%; background: ${CARD2}; border: 1px solid ${BORDER}; border-radius: 10px; padding: 0.75rem 1rem; color: ${TEXT}; font-size: 0.88rem; transition: border-color 0.2s; }
  .form-input:focus { border-color: rgba(0,229,176,0.4); }
  .form-select { width: 100%; background: ${CARD2}; border: 1px solid ${BORDER}; border-radius: 10px; padding: 0.75rem 1rem; color: ${TEXT}; font-size: 0.88rem; appearance: none; }
  .form-textarea { width: 100%; background: ${CARD2}; border: 1px solid ${BORDER}; border-radius: 10px; padding: 0.75rem 1rem; color: ${TEXT}; font-size: 0.88rem; resize: vertical; min-height: 140px; }
  .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
  .submit-btn { width: 100%; background: ${ACCENT}; color: #000; font-size: 0.82rem; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; padding: 0.85rem; border-radius: 10px; border: none; display: flex; align-items: center; justify-content: center; gap: 0.5rem; transition: background 0.2s; }
  .submit-btn:hover { background: ${ACCENT2}; }

  .proficiency-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; }
  .proficiency-item { padding: 1.5rem; background: ${CARD}; border: 1px solid ${BORDER}; border-radius: 14px; }
  .proficiency-title { color: ${ACCENT}; font-size: 0.88rem; font-weight: 700; margin-bottom: 0.6rem; display: flex; align-items: center; gap: 0.5rem; }
  .proficiency-text { font-size: 0.8rem; color: ${MUTED}; line-height: 1.6; }

  .about-hero { display: grid; grid-template-columns: 1.3fr 1fr; gap: 4rem; align-items: center; padding: 4rem 2.5rem 2rem; }
  .about-img { width: 100%; aspect-ratio: 4/3; border-radius: 16px; background: ${CARD2}; border: 1px solid ${BORDER}; overflow: hidden; position: relative; display: flex; align-items: center; justify-content: center; }
  .about-img-inner { width: 100%; height: 100%; background: linear-gradient(135deg, #0b2a22 0%, #061812 100%); display: flex; align-items: center; justify-content: center; font-family: 'Fira Code', monospace; font-size: 0.75rem; color: ${ACCENT}; opacity: 0.7; text-align: center; padding: 1rem; line-height: 1.6; }

  .philosophy-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.25rem; }

  .stack-hero-card { background: ${CARD}; border: 1px solid ${BORDER}; border-radius: 16px; padding: 1.5rem; position: relative; overflow: hidden; }
  .stack-hero-card::before { content: ''; position: absolute; top: -50%; right: -20%; width: 200px; height: 200px; background: radial-gradient(circle, rgba(0,229,176,0.06) 0%, transparent 70%); pointer-events: none; }
  .stack-name { font-size: 1.1rem; font-weight: 700; margin-bottom: 0.4rem; }
  .stack-desc { font-size: 0.8rem; color: ${MUTED}; line-height: 1.5; }

  .infra-card { background: ${CARD}; border: 1px solid ${BORDER}; border-radius: 14px; padding: 1.2rem; text-align: center; }
  .infra-name { font-family: 'Fira Code', monospace; font-size: 0.65rem; letter-spacing: 0.1em; text-transform: uppercase; color: ${ACCENT}; margin-bottom: 0.6rem; }
  .infra-icon { font-size: 1.5rem; opacity: 0.5; }

  @media (max-width: 768px) {
    .portfolio-grid { grid-template-columns: 1fr; }
    .services-hero, .contact-layout, .about-hero { grid-template-columns: 1fr; }
    .process-grid { grid-template-columns: 1fr 1fr; }
    .philosophy-grid { grid-template-columns: 1fr; }
    .form-row { grid-template-columns: 1fr; }
    .stat-grid { grid-template-columns: 1fr 1fr; }
    .proficiency-grid { grid-template-columns: 1fr; }
    .nav-links { display: none; }
  }
`;

export default globalCSS;
