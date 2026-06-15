import Footer from "./Footer";
import { ACCENT, MUTED, CARD, BORDER } from "../constants";
import { Code2, Cpu, Globe, Server, Database, Box, Zap, Layers, GitBranch, Cloud } from "lucide-react";

export default function Stack({ setPage }) {
  return (
    <div className="page fade-in">

      {/* HERO */}
      <div className="section" style={{ paddingBottom: "1rem" }}>
        <div className="eyebrow">Technical Ecosystem</div>
        <h1 className="hero-title">
          Crafting digital excellence with a <span>modern stack.</span>
        </h1>
        <p className="hero-sub" style={{ marginTop: "0.75rem" }}>
          A curated selection of industry-leading technologies to build scalable,
          performant, and secure solutions.
        </p>
      </div>

      {/* FRONTEND */}
      <div className="section">
        <h2 className="section-title">Frontend Development</h2>
        <div className="grid-3">
          {[
            { icon: Code2,  name: "React",       desc: "Dynamic, component-based UIs with focus on performance and state management." },
            { icon: Globe,  name: "Next.js",     desc: "SEO-friendly SSR framework for high-performance web applications." },
            { icon: Layers, name: "Tailwind CSS", desc: "Utility-first styling system for fast and scalable UI development." },
          ].map((s) => (
            <div key={s.name} className="stack-hero-card">
              <div style={{ color: ACCENT, marginBottom: "0.6rem" }}><s.icon size={20} /></div>
              <div className="stack-name">{s.name}</div>
              <div className="stack-desc">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* BACKEND + WORDPRESS */}
      <div className="section">
        <div className="grid-2">
          {/* BACKEND */}
          <div>
            <h2 className="section-title" style={{ marginBottom: "1rem" }}>Backend</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {[
                { icon: Server,   name: "Node.js",   desc: "Scalable APIs and backend logic." },
                { icon: Cpu,      name: "Python",    desc: "Automation, data processing, and backend systems." },
                { icon: Database, name: "Databases", desc: "PostgreSQL, MongoDB, Redis systems." },
              ].map((s) => (
                <div key={s.name} className="card" style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <div style={{ color: ACCENT, marginTop: "0.2rem" }}><s.icon size={18} /></div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: "0.9rem" }}>{s.name}</div>
                    <div style={{ fontSize: "0.78rem", color: MUTED }}>{s.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* WORDPRESS */}
          <div>
            <h2 className="section-title" style={{ marginBottom: "1rem" }}>WordPress</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {[
                { icon: Box,       name: "Custom Themes", desc: "Lightweight and SEO-optimized WordPress themes." },
                { icon: GitBranch, name: "PHP Dev",       desc: "Custom plugins and backend WordPress logic." },
                { icon: Zap,       name: "Performance",   desc: "Speed optimization and Core Web Vitals tuning." },
              ].map((s) => (
                <div key={s.name} className="card" style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <div style={{ color: ACCENT, marginTop: "0.2rem" }}><s.icon size={18} /></div>
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

      {/* INFRASTRUCTURE */}
      <div className="section">
        <h2 className="section-title">Infrastructure & Tools</h2>
        <div className="grid-4">
          {[
            { icon: GitBranch, name: "GIT" },
            { icon: Cloud,     name: "AWS" },
            { icon: Box,       name: "Docker" },
            { icon: Layers,    name: "Figma" },
          ].map((t) => (
            <div key={t.name} className="infra-card">
              <div className="infra-name">{t.name}</div>
              <div style={{ color: ACCENT, fontSize: "1.5rem", opacity: 0.7 }}><t.icon /></div>
            </div>
          ))}
        </div>
      </div>

      {/* PROFICIENCY */}
      <div className="section">
        <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 20, padding: "2rem" }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: "1.5rem" }}>
            Technical Proficiency
          </h2>
          <div className="proficiency-grid">
            {[
              { title: "Engineering Standards", text: "High-quality architecture using SOLID principles and scalable patterns." },
              { title: "Performance Strategy",  text: "Optimized Core Web Vitals, caching, and bundle efficiency techniques." },
              { title: "Security Architecture", text: "JWT auth, OAuth flows, and hardened backend systems." },
              { title: "Seamless Integrations", text: "Payment systems, CRMs, APIs, and headless CMS integrations." },
            ].map((p) => (
              <div key={p.title} className="proficiency-item">
                <div className="proficiency-title">✦ {p.title}</div>
                <div className="proficiency-text">{p.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-block">
        <h2>Need a custom stack?</h2>
        <p>Whether you need a SaaS platform or WordPress solution, let's build the right architecture.</p>
        <div className="btn-row" style={{ justifyContent: "center" }}>
          <button className="btn-primary" onClick={() => setPage("hire")}>Discuss My Project</button>
          <button className="btn-ghost"   onClick={() => setPage("portfolio")}>View Past Work</button>
        </div>
      </div>

      <Footer setPage={setPage} />
    </div>
  );
}
