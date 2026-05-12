import { useState, useEffect, useRef } from "react";

const NAV_LINKS = ["Portfolio", "Services", "Stack", "About"];

const ACCENT = "#00e5b0";
const ACCENT2 = "#00c49a";
const BG = "#0b0f0e";
const CARD = "#111816";
const CARD2 = "#141c1a";
const BORDER = "#1e2e2a";
const TEXT = "#e8f0ed";
const MUTED = "#7a9990";

const css = `
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
  .portfolio-card.large { grid-column: span 1; grid-row: span 1; }
  .portfolio-img { width: 100%; height: 180px; object-fit: cover; display: block; background: ${CARD2}; position: relative; overflow: hidden; }
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

const projects = [
  { id: 1, type: "Full Stack", title: "E-commerce Platform", desc: "Headless commerce engine built with Next.js and Stripe API integration, focusing on ultra-low latency and dynamic inventory management.", filter: "full-stack" },
  { id: 2, type: "SaaS Dashboard", title: "CloudMetrics Pro", desc: "Real-time enterprise monitoring tool featuring customised D3.js visualisations and AWS Lambda backend.", filter: "full-stack" },
  { id: 3, type: "WordPress", title: "Custom WP Theme", desc: "Bespoke Gutenberg-driven theme for a luxury lifestyle brand with performance-optimised asset loading.", filter: "wordpress" },
  { id: 4, type: "WordPress", title: "News Portal", desc: "High-traffic editorial platform with advanced search capabilities and custom membership monetisation modules.", filter: "wordpress" },
  { id: 5, type: "Full Stack", title: "DevSnippet App", desc: "Developer utility for managing reusable code blocks, integrated with GitHub Gists and local storage.", filter: "full-stack" },
  { id: 6, type: "Full Stack", title: "Analytics Suite", desc: "Comprehensive business intelligence dashboard with real-time data pipelines and custom reporting modules.", filter: "full-stack" },
];

function Nav({ page, setPage }) {
  return (
    <nav className="nav">
      <button className="nav-logo" onClick={() => setPage("portfolio")}>favecodes</button>
      <div className="nav-links">
        {NAV_LINKS.map(l => (
          <button key={l} className={`nav-link${page === l.toLowerCase() ? " active" : ""}`} onClick={() => setPage(l.toLowerCase())}>{l}</button>
        ))}
      </div>
      <button className="hire-btn" onClick={() => setPage("hire")}>Hire Me</button>
    </nav>
  );
}

function Footer({ setPage }) {
  return (
    <>
      <footer className="footer">
        <div>
          <div className="footer-logo">favecodes</div>
          <div className="footer-sub">Precision engineering for modern business solutions.</div>
        </div>
        <div className="footer-col">
          <h4>Connect</h4>
          <a href="#">Github</a>
          <a href="#">LinkedIn</a>
          <a href="#">Twitter</a>
          <a href="#">Email</a>
        </div>
        <div className="footer-col">
          <h4>Navigation</h4>
          {NAV_LINKS.map(l => <button key={l} style={{ display:"block", background:"none", border:"none", fontSize:"0.82rem", color: MUTED, marginBottom:"0.4rem", cursor:"pointer", padding:0, fontFamily:"inherit", textAlign:"left" }} onClick={() => setPage(l.toLowerCase())}>{l}</button>)}
        </div>
      </footer>
      <div className="footer-copy">© 2024 favecodes. All rights reserved.</div>
    </>
  );
}

function PortfolioPage({ setPage }) {
  const [filter, setFilter] = useState("all");
  const filtered = filter === "all" ? projects : projects.filter(p => p.filter === filter);
  return (
    <div className="page fade-in">
      <div style={{ padding: "4rem 2.5rem 2rem", maxWidth: 900 }}>
        <div className="eyebrow stagger-1 fade-in">Featured Works</div>
        <h1 className="hero-title stagger-2 fade-in">Custom-engineered <span>solutions</span>.</h1>
        <p className="hero-sub stagger-3 fade-in">A selection spanning high-performance full-stack applications to bespoke WordPress ecosystems. Built for scale, precision, and business impact.</p>
      </div>
      <div className="filter-row">
        {["all", "full-stack", "wordpress"].map(f => (
          <button key={f} className={`filter-btn${filter === f ? " active" : ""}`} onClick={() => setFilter(f)}>
            {f === "all" ? "All" : f === "full-stack" ? "Full Stack" : "WordPress"}
          </button>
        ))}
      </div>
      <div className="portfolio-grid" style={{ maxWidth: 1100, margin: "0 auto" }}>
        {filtered.map((p, i) => (
          <div key={p.id} className={`portfolio-card fade-in stagger-${(i % 5) + 1}`}>
            <div className="portfolio-img-placeholder">⬡</div>
            <div className="portfolio-card-body">
              <div className="portfolio-type">{p.type}</div>
              <div className="portfolio-card-title">{p.title}</div>
              <div className="portfolio-card-desc">{p.desc}</div>
              <div className="view-link">View Project →</div>
            </div>
          </div>
        ))}
      </div>
      <div className="cta-block">
        <h2>Have a project in mind?</h2>
        <p>Whether it's a complex full-stack ecosystem or a high-converting WordPress site, I'm ready to bring technical mastery to your vision.</p>
        <div className="btn-row" style={{ justifyContent: "center" }}>
          <button className="btn-primary" onClick={() => setPage("hire")}>Start Your Project</button>
          <button className="btn-ghost" onClick={() => setPage("hire")}>Book a Discovery Call</button>
        </div>
      </div>
      <Footer setPage={setPage} />
    </div>
  );
}

function ServicesPage({ setPage }) {
  return (
    <div className="page fade-in">
      <div className="services-hero">
        <div>
          <div className="eyebrow">Expertise & Solutions</div>
          <h1 className="hero-title" style={{ fontSize: "clamp(2rem,5vw,3.2rem)" }}>Bridging code and <span>business strategy.</span></h1>
          <p className="hero-sub">We build resilient digital infrastructure and high-performance user experiences that scale with your growth. From full-stack engineering to specialised WordPress architecture.</p>
        </div>
        <div className="code-block">
          <div className="code-dots">
            <span className="code-dot" style={{ background: "#ff5f56" }}></span>
            <span className="code-dot" style={{ background: "#ffbd2e" }}></span>
            <span className="code-dot" style={{ background: "#27c93f" }}></span>
          </div>
          <div className="code-line">→ <span className="code-acc">backend</span> <span className="code-str">git:(main)</span> ls stack/</div>
          <br />
          <div><span className="code-acc">■</span> <span className="code-key">Node.js / Express</span></div>
          <div><span className="code-acc">■</span> <span className="code-key">Python / Django</span></div>
          <div><span className="code-acc">■</span> <span className="code-key">REST & GraphQL</span></div>
          <div><span className="code-acc">■</span> <span className="code-key">PostgreSQL</span></div>
          <div><span className="code-acc">■</span> <span className="code-key">MongoDB / Redis</span></div>
          <div><span style={{ color: "#ffd580" }}>■</span> <span className="code-key">AWS Cloud Architecture</span></div>
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Full Stack Engineering</h2>
        <div className="divider" style={{ margin: "0 0 1.5rem" }}></div>
        <div className="grid-2">
          <div className="card">
            <div className="card-icon">⬡</div>
            <div className="card-title">Modern Frontend</div>
            <div className="card-text">Responsive, accessible, and blindingly fast user interfaces built with the modern web ecosystem.</div>
            <div style={{ marginTop: "1rem" }}>
              {["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"].map(t => <span key={t} className="tag">{t}</span>)}
            </div>
          </div>
          <div className="card">
            <div className="card-icon">⬡</div>
            <div className="card-title">Robust Backend Systems</div>
            <div className="card-text">Scalable server-side architectures with clean API design, real-time capabilities, and cloud-native deployment patterns.</div>
            <div style={{ marginTop: "1rem" }}>
              {["Node.js", "Python", "PostgreSQL", "AWS", "GraphQL"].map(t => <span key={t} className="tag">{t}</span>)}
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Specialised <span>WordPress</span> Services</h2>
        <p style={{ color: MUTED, fontSize: "0.88rem", marginBottom: "2rem", maxWidth: 500 }}>Moving beyond simple templates. We engineer WordPress into a robust enterprise CMS through custom development and technical optimisation.</p>
        <div className="grid-3">
          {[
            { icon: "✦", title: "Custom Theme Dev", desc: "Lightweight, accessible, and SEO-ready themes built with block-based patterns and zero bloat." },
            { icon: "✦", title: "Plugin Development", desc: "Extending core functionality with secure, efficient, and well-documented custom plugins." },
            { icon: "✦", title: "Performance Optimisation", desc: "Sub-second load times via advanced caching, database tuning, and Core Web Vitals refinement." },
          ].map(s => (
            <div key={s.title} className="card">
              <div className="card-icon">{s.icon}</div>
              <div className="card-title">{s.title}</div>
              <div className="card-text">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="section">
        <h2 className="section-title" style={{ textAlign: "center" }}>Our Process</h2>
        <p style={{ color: MUTED, fontSize: "0.88rem", textAlign: "center", marginBottom: "2rem" }}>A transparent, results-driven journey from initial concept to deployment.</p>
        <div className="process-grid">
          {[
            { icon: "◎", step: "01", title: "Consultation", desc: "Discovery phase to align technical requirements with your business objectives." },
            { icon: "◎", step: "02", title: "Design", desc: "Architecting the UI/UX and system database schemas for optimal flow." },
            { icon: "◎", step: "03", title: "Development", desc: "Iterative coding cycles with regular updates and staging previews." },
            { icon: "◎", step: "04", title: "Launch", desc: "Rigorous testing, optimisation, and seamless handover for deployment." },
          ].map(s => (
            <div key={s.step} className="card" style={{ textAlign: "center" }}>
              <div style={{ fontFamily: "'Fira Code', monospace", fontSize: "0.65rem", color: ACCENT, marginBottom: "0.6rem" }}>{s.step}</div>
              <div className="card-title">{s.title}</div>
              <div className="card-text">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="cta-block">
        <h2>Ready to scale your digital presence?</h2>
        <p>Let's discuss how our technical expertise can solve your unique business challenges.</p>
        <div className="btn-row" style={{ justifyContent: "center" }}>
          <button className="btn-primary" onClick={() => setPage("hire")}>Schedule a Call</button>
          <button className="btn-ghost" onClick={() => setPage("portfolio")}>View Portfolio</button>
        </div>
      </div>
      <Footer setPage={setPage} />
    </div>
  );
}

function StackPage({ setPage }) {
  return (
    <div className="page fade-in">
      <div className="hero">
        <div className="eyebrow">Technical Ecosystem</div>
        <h1 className="hero-title">Crafting digital excellence with a <span>modern stack.</span></h1>
        <p className="hero-sub">I leverage a curated selection of industry-leading technologies to build scalable, performant, and secure solutions. From enterprise-grade full-stack applications to bespoke WordPress experiences.</p>
      </div>

      <div className="section">
        <h2 className="section-title">Frontend Development</h2>
        <div className="grid-3">
          {[
            { name: "React", desc: "Building dynamic, component-based user interfaces with focus on state management and performance." },
            { name: "Next.js", desc: "Optimised React framework for SEO-friendly server-side rendering and lightning-fast static sites." },
            { name: "Tailwind CSS", desc: "Rapid utility-first styling for precise, responsive, and highly maintainable design systems." },
          ].map(s => (
            <div key={s.name} className="stack-hero-card">
              <div style={{ fontFamily: "'Fira Code', monospace", fontSize: "0.65rem", color: ACCENT, marginBottom: "0.6rem" }}>⬡</div>
              <div className="stack-name">{s.name}</div>
              <div className="stack-desc">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="section">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem" }}>
          <div>
            <h2 className="section-title">Backend</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {[
                { name: "Node.js", desc: "Scalable server-side logic and real-time APIs." },
                { name: "Python", desc: "Data processing and robust automation scripts." },
              ].map(s => (
                <div key={s.name} className="card" style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <div style={{ color: ACCENT, fontSize: "0.8rem", marginTop: "0.1rem" }}>⬡</div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: "0.9rem", marginBottom: "0.2rem" }}>{s.name}</div>
                    <div style={{ fontSize: "0.78rem", color: MUTED }}>{s.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="section-title">WordPress</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {[
                { name: "Custom Themes", desc: "Lightweight, performant WordPress builds without the bloat." },
                { name: "PHP", desc: "Custom plugin development and core architectural hooks." },
              ].map(s => (
                <div key={s.name} className="card" style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <div style={{ color: ACCENT, fontSize: "0.8rem", marginTop: "0.1rem" }}>⬡</div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: "0.9rem", marginBottom: "0.2rem" }}>{s.name}</div>
                    <div style={{ fontSize: "0.78rem", color: MUTED }}>{s.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Infrastructure & Tools</h2>
        <div className="grid-4">
          {["GIT", "AWS", "DOCKER", "FIGMA"].map(t => (
            <div key={t} className="infra-card">
              <div className="infra-name">{t}</div>
              <div className="infra-icon">⬡</div>
            </div>
          ))}
        </div>
      </div>

      <div className="section">
        <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 20, padding: "2.5rem" }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: "2rem", display: "flex", alignItems: "center", gap: "1rem" }}>Technical Proficiency <span style={{ fontSize: "0.7rem", color: MUTED, fontWeight: 400 }}>⬡</span></h2>
          <div className="proficiency-grid">
            {[
              { title: "Engineering Standards", text: "I adhere to high-quality coding standards, implementing SOLID principles, DRY methodology, and comprehensive testing suites. My focus is always on long-term maintainability and technical scalability for evolving business needs." },
              { title: "Performance Strategy", text: "Expertise in Core Web Vitals optimisation, reducing First Contentful Paint through advanced caching, image optimisation, and efficient bundle management. I bridge the gap between heavy functionality and light speed." },
              { title: "Security Architecture", text: "From secure API authentication (JWT/OAuth) to WordPress hardening, security is integrated into the foundation of my builds. I ensure data integrity and protection against common vulnerabilities like XSS and CSRF." },
              { title: "Seamless Integrations", text: "Proficient in connecting complex third-party services — payment gateways, CRM systems, and headless CMS providers — creating unified digital experiences through clean, well-documented middleware." },
            ].map(p => (
              <div key={p.title} className="proficiency-item">
                <div className="proficiency-title">✦ {p.title}</div>
                <div className="proficiency-text">{p.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="cta-block">
        <h2>Need a custom stack?</h2>
        <p>Whether you need a full-stack SaaS platform or a high-converting WordPress site, let's discuss the right technologies for your specific goals.</p>
        <div className="btn-row" style={{ justifyContent: "center" }}>
          <button className="btn-primary" onClick={() => setPage("hire")}>Discuss My Project</button>
          <button className="btn-ghost" onClick={() => setPage("portfolio")}>View Past Work</button>
        </div>
      </div>
      <Footer setPage={setPage} />
    </div>
  );
}

function AboutPage({ setPage }) {
  return (
    <div className="page fade-in">
      <div className="about-hero">
        <div>
          <div className="eyebrow">Onalapo Favour // Favecodes</div>
          <h1 className="hero-title">Bridging <span>technical precision</span> with business strategy.</h1>
          <p className="hero-sub">A Full-Stack and WordPress Engineer dedicated to building high-performance digital solutions that don't just work — they convert.</p>
          <button className="btn-ghost" style={{ marginTop: "0.5rem" }} onClick={() => setPage("portfolio")}>View Journey →</button>
        </div>
        <div className="about-img">
          <div className="about-img-inner">favecodes.init()<br/><br/>{">"} building the future<br/>{">"} one commit at a time</div>
        </div>
      </div>

      <div className="section">
        <h2 className="section-title" style={{ textAlign: "center" }}>My Philosophy</h2>
        <div className="philosophy-grid">
          {[
            { icon: "✦", title: "Code with Intent", desc: "I believe every line of code should serve a business objective. My mission is to ensure that performance, accessibility, and scalability are never sacrificed for aesthetics." },
            { icon: "✦", title: "The Strategic Bridge", desc: "I act as the translator between complex technical requirements and high-level business goals, helping stakeholders understand how technology drives their bottom line." },
            { icon: "✦", title: "Refined Ecosystems", desc: "Whether it's a custom React application or a complex WordPress multisite, I build ecosystems that are as easy for clients to manage as they are for users to navigate." },
          ].map(p => (
            <div key={p.title} className="card">
              <div className="card-icon">{p.icon}</div>
              <div className="card-title">{p.title}</div>
              <div className="card-text">{p.desc}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="section">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem" }}>
          <div>
            <h2 className="section-title">The Journey</h2>
            <div className="timeline">
              {[
                { year: "2021 — Present", role: "Lead Developer @ Favecodes", desc: "Solving complex digital problems for global clients, specialising in full-stack architectures and high-conversion WordPress environments.", active: true },
                { year: "2019 — 2021", role: "WordPress Specialist", desc: "Focused on enterprise-grade CMS customisation, theme development, and performance optimisation for growing businesses.", active: false },
                { year: "The Beginning", role: "Core Foundations", desc: "Mastered the art of logic through backend engineering, laying the groundwork for the user-centric developer I am today.", active: false },
              ].map(t => (
                <div key={t.role} className="timeline-item">
                  <div className={`timeline-dot${t.active ? "" : " muted"}`}></div>
                  <div className="timeline-year">{t.year}</div>
                  <div className="timeline-role">{t.role}</div>
                  <div className="timeline-desc">{t.desc}</div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div style={{ aspectRatio: "1.2", background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.5rem" }}>
              <div style={{ fontFamily: "'Fira Code', monospace", fontSize: "0.75rem", color: ACCENT, opacity: 0.5, textAlign: "center", padding: "1rem" }}>
                {">"} writing clean code<br />{">"} shipping daily<br />{">"} never stopping
              </div>
            </div>
            <div className="stat-grid">
              <div className="stat-card"><div className="stat-num">50+</div><div className="stat-label">Projects Delivered</div></div>
              <div className="stat-card"><div className="stat-num">4+</div><div className="stat-label">Years of Mastery</div></div>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="eyebrow">The Toolkit</div>
        <h2 className="section-title" style={{ fontSize: "2rem" }}>Versatility is My Greatest Asset</h2>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "2rem", flexWrap: "wrap" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
            {["React.js", "Node.js", "WordPress", "PHP", "PostgreSQL", "Tailwind"].map(t => <span key={t} className="tag tag-accent"># {t}</span>)}
          </div>
          <p style={{ color: MUTED, fontSize: "0.82rem", maxWidth: 300, lineHeight: 1.6 }}>Seamlessly switching between low-level full-stack logic and high-level CMS management.</p>
        </div>
      </div>

      <div className="cta-block">
        <h2>Ready to scale your vision?</h2>
        <p>Whether you need a bespoke application or a powerhouse WordPress site, let's collaborate to build something exceptional.</p>
        <button className="btn-primary" onClick={() => setPage("hire")}>Let's Talk Business</button>
      </div>
      <Footer setPage={setPage} />
    </div>
  );
}

function HirePage({ setPage }) {
  const [sent, setSent] = useState(false);
  return (
    <div className="page fade-in">
      <div className="contact-layout">
        <div>
          <div className="eyebrow">Contact</div>
          <h1 className="hero-title" style={{ fontSize: "clamp(2rem,5vw,3rem)" }}>Let's build something <span>great together.</span></h1>
          <p className="hero-sub">Ready to elevate your digital presence? Whether it's a complex full-stack application or a high-performance WordPress site, I'm here to help you engineer success.</p>
          <div className="contact-info" style={{ marginTop: "2rem" }}>
            {[
              { icon: "✆", label: "Phone", val: "09164925583" },
              { icon: "✉", label: "Email", val: "emmanuelonaolapo11@gmail.com" },
              { icon: "𝕏", label: "X (Twitter)", val: "@myfaveguy" },
            ].map(c => (
              <div key={c.label} className="contact-item">
                <div className="contact-icon">{c.icon}</div>
                <div>
                  <div className="contact-label">{c.label}</div>
                  <div className="contact-val">{c.val}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="card" style={{ padding: "2rem" }}>
          {sent ? (
            <div style={{ textAlign: "center", padding: "3rem 0" }}>
              <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>✦</div>
              <h3 style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>Message Sent!</h3>
              <p style={{ color: MUTED, fontSize: "0.85rem" }}>I'll get back to you within 24 hours.</p>
            </div>
          ) : (
            <>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Name</label>
                  <input className="form-input" placeholder="John Doe" />
                </div>
                <div className="form-group">
                  <label className="form-label">Email</label>
                  <input className="form-input" placeholder="john@example.com" />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">Project Type</label>
                <select className="form-select">
                  <option>Full-stack Web Application</option>
                  <option>WordPress Site</option>
                  <option>E-commerce Platform</option>
                  <option>SaaS Dashboard</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Message</label>
                <textarea className="form-textarea" placeholder="Tell me about your vision, goals, and any specific requirements..." />
              </div>
              <button className="submit-btn" onClick={() => setSent(true)}>Send Project Inquiry →</button>
            </>
          )}
        </div>
      </div>

      <div className="section">
        <div className="eyebrow" style={{ textAlign: "center" }}>Answers</div>
        <h2 className="section-title" style={{ textAlign: "center", fontSize: "2rem" }}>Quick FAQ</h2>
        <div className="grid-2">
          {[
            { icon: "◎", title: "Project Timelines", body: "Every project is unique. A standard WordPress launch typically takes 2–4 weeks, while complex full-stack applications range from 2–4 months depending on the scope and technical requirements." },
            { icon: "◎", title: "Pricing & Investment", body: "I provide value-based pricing. WordPress projects generally start at $1,500, while custom web applications begin at $5,000. Each quote is tailored to the specific business impact and technical complexity of your request." },
          ].map(f => (
            <div key={f.title} className="card">
              <div style={{ color: ACCENT, marginBottom: "0.5rem" }}>{f.icon}</div>
              <div style={{ fontSize: "1rem", fontWeight: 700, color: ACCENT, marginBottom: "0.6rem" }}>{f.title}</div>
              <div className="card-text">{f.body}</div>
            </div>
          ))}
        </div>
      </div>
      <Footer setPage={setPage} />
    </div>
  );
}

export default function App() {
  const [page, setPage] = useState("portfolio");

  const pages = {
    portfolio: <PortfolioPage setPage={setPage} />,
    services: <ServicesPage setPage={setPage} />,
    stack: <StackPage setPage={setPage} />,
    about: <AboutPage setPage={setPage} />,
    hire: <HirePage setPage={setPage} />,
  };

  return (
    <>
      <style>{css}</style>
      <Nav page={page} setPage={setPage} />
      {pages[page] || pages.portfolio}
    </>
  );
}
