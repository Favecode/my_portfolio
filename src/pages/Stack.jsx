// ─── src/pages/Stack.jsx ──────────────────────────────────────────────────────
import "../styles/Stack.css";
import Footer from "../components/Footer";
import { Icon } from "../components/Icons";
import { ACCENT, MUTED, CARD, BORDER } from "../data/constants";

export default function Stack({ setPage }) {
  return (
    <div className="page fade-in">

      {/* ── HERO ── */}
      <div className="services-hero">
        <div>
          <div className="eyebrow">Tools &amp; Technologies</div>
          <h1 className="hero-title">Crafting digital excellence with a <span>focused stack.</span></h1>
          <p className="hero-sub">
            A curated selection of reliable, production-ready technologies to build scalable,
            performant, and secure solutions — from web applications to WordPress systems.
          </p>
        </div>

        <div className="code-block">
          <div className="code-dots">
            <span className="code-dot" style={{ background: "#ff5f56" }} />
            <span className="code-dot" style={{ background: "#ffbd2e" }} />
            <span className="code-dot" style={{ background: "#27c93f" }} />
          </div>
          <div className="code-line">
            → <span className="code-acc">stack</span>{" "}
            <span style={{ color: "#ffd580" }}>git:(main)</span> cat tools.json
          </div>
          <br />
          {[
            ["■", "React.js / JavaScript (ES6+)"],
            ["■", "HTML5 / CSS3 / Tailwind"],
            ["■", "Python / Node.js"],
            ["■", "Django / Flask"],
            ["■", "SQL / MongoDB / Supabase"],
          ].map(([d, l]) => (
            <div key={l}><span className="code-acc">{d}</span> <span className="code-key">{l}</span></div>
          ))}
          <div><span style={{ color: "#ffd580" }}>■</span> <span className="code-key">AWS / Docker / Linux</span></div>
        </div>
      </div>

      {/* ── FRONTEND ── */}
      <div className="section">
        <h2 className="section-title">Frontend Development</h2>
        <div className="grid-3">
          {[
            { icon: Icon.Code2,  name: "React.js",              desc: "Building dynamic, component-based UIs with focus on performance and state management." },
            { icon: Icon.Globe,  name: "JavaScript (ES6+)",     desc: "Modern, clean JavaScript for interactive and responsive web experiences." },
            { icon: Icon.Layers, name: "Tailwind CSS & Bootstrap", desc: "Utility-first and component-based styling for fast, scalable UI development." },
          ].map((s) => (
            <div key={s.name} className="stack-hero-card">
              <div style={{ color: ACCENT, marginBottom: "0.6rem" }}><s.icon width={20} height={20} /></div>
              <div className="stack-name">{s.name}</div>
              <div className="stack-desc">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── BACKEND + WORDPRESS ── */}
      <div className="section">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,280px),1fr))", gap: "3rem" }}>

          <div>
            <h2 className="section-title">Backend</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {[
                { icon: Icon.Server,   name: "Node.js",                desc: "Scalable APIs and backend logic." },
                { icon: Icon.Cpu,      name: "Python / Django / Flask", desc: "Automation, RESTful APIs, and backend systems." },
                { icon: Icon.Database, name: "Databases",               desc: "SQL, MongoDB, and Supabase systems." },
              ].map((s) => (
                <div key={s.name} className="card" style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <div style={{ color: ACCENT, marginTop: "0.2rem" }}><s.icon width={18} height={18} /></div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: "0.9rem" }}>{s.name}</div>
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
                { icon: Icon.Box,       name: "Custom Themes",   desc: "Lightweight and SEO-optimized WordPress themes." },
                { icon: Icon.GitBranch, name: "PHP Development", desc: "Custom plugins and backend WordPress logic." },
                { icon: Icon.Zap,       name: "Performance",     desc: "Speed optimization and Core Web Vitals tuning." },
              ].map((s) => (
                <div key={s.name} className="card" style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <div style={{ color: ACCENT, marginTop: "0.2rem" }}><s.icon width={18} height={18} /></div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: "0.9rem" }}>{s.name}</div>
                    <div style={{ fontSize: "0.78rem", color: MUTED }}>{s.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── INFRASTRUCTURE ── */}
      <div className="section">
        <h2 className="section-title">Infrastructure &amp; Tools</h2>
        <div className="grid-4">
          {[
            { icon: Icon.GitBranch, name: "Git / GitHub" },
            { icon: Icon.Cloud,     name: "AWS" },
            { icon: Icon.Box,       name: "Docker" },
            { icon: Icon.Terminal,  name: "Linux" },
          ].map((t) => (
            <div key={t.name} className="infra-card">
              <div className="infra-name">{t.name}</div>
              <div style={{ color: ACCENT, opacity: 0.7 }}><t.icon width={24} height={24} /></div>
            </div>
          ))}
        </div>
      </div>

      {/* ── PROFICIENCY ── */}
      <div className="section">
        <div className="card" style={{ padding: "2.5rem" }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: "2rem" }}>Technical Proficiency</h2>
          <div className="proficiency-grid">
            {[
              { title: "Clean Code Standards", text: "Readable, maintainable architecture built to scale and easy for other developers to work with." },
              { title: "Performance Strategy",  text: "Optimized load times, responsive design, and Core Web Vitals best practices." },
              { title: "API Development",       text: "Building and consuming RESTful APIs with Django, Flask, and Node.js." },
              { title: "Database Design",       text: "Structured SQL and NoSQL data models using MongoDB and Supabase." },
            ].map((p) => (
              <div key={p.title} className="proficiency-item">
                <div className="proficiency-title">✦ {p.title}</div>
                <div className="proficiency-text">{p.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── CTA ── */}
      <div className="cta-block">
        <h2>Need a custom stack?</h2>
        <p>Whether you need a web application or WordPress solution, let's build the right architecture for your goals.</p>
        <div className="btn-row" style={{ justifyContent: "center" }}>
          <button className="btn-primary" onClick={() => setPage("hire")}>Discuss My Project</button>
          <button className="btn-ghost"   onClick={() => setPage("portfolio")}>View Past Work</button>
        </div>
      </div>

      <Footer setPage={setPage} />
    </div>
  );
}
