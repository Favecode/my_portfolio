import Footer from "./Footer";
import { ACCENT, MUTED, CARD, BORDER } from "../constants";
import {
  Code2,
  Cpu,
  Globe,
  Server,
  Database,
  Box,
  Zap,
  ShieldCheck,
  Layers,
  GitBranch,
  Cloud,
  Terminal,
} from "lucide-react";

export default function Stack({ setPage }) {
  return (
    <div className="page fade-in">
      {/* HERO */}
      <div className="services-hero">
        <div>
          <div className="eyebrow">Technical Ecosystem</div>

          <h1 className="hero-title">
            Crafting digital excellence with a <span>focused stack.</span>
          </h1>

          <p className="hero-sub">
            I leverage a curated selection of reliable, production-ready
            technologies to build scalable, performant, and secure solutions —
            from web applications to WordPress systems.
          </p>
        </div>

        {/* CODE BLOCK (matches Services / About) */}
        <div className="code-block">
          <div className="code-dots">
            <span className="code-dot" style={{ background: "#ff5f56" }} />
            <span className="code-dot" style={{ background: "#ffbd2e" }} />
            <span className="code-dot" style={{ background: "#27c93f" }} />
          </div>

          <div className="code-line">
            → <span className="code-acc">stack</span>{" "}
            <span className="code-str">git:(main)</span> cat tools.json
          </div>

          <br />

          <div>
            <span className="code-acc">■</span>{" "}
            <span className="code-key">React.js / JavaScript (ES6+)</span>
          </div>
          <div>
            <span className="code-acc">■</span>{" "}
            <span className="code-key">HTML5 / CSS3 / Tailwind / Bootstrap</span>
          </div>
          <div>
            <span className="code-acc">■</span>{" "}
            <span className="code-key">Python / Node.js</span>
          </div>
          <div>
            <span className="code-acc">■</span>{" "}
            <span className="code-key">Django / Flask</span>
          </div>
          <div>
            <span className="code-acc">■</span>{" "}
            <span className="code-key">SQL / MongoDB / Supabase</span>
          </div>
          <div>
            <span style={{ color: "#ffd580" }}>■</span>{" "}
            <span className="code-key">AWS / Docker / Linux</span>
          </div>
        </div>
      </div>

      {/* FRONTEND */}
      <div className="section">
        <h2 className="section-title">Frontend Development</h2>

        <div className="grid-3">
          {[
            {
              icon: Code2,
              name: "React.js",
              desc: "Building dynamic, component-based user interfaces with focus on performance and state management.",
            },
            {
              icon: Globe,
              name: "JavaScript (ES6+)",
              desc: "Modern, clean JavaScript for interactive and responsive web experiences.",
            },
            {
              icon: Layers,
              name: "Tailwind CSS & Bootstrap",
              desc: "Utility-first and component-based styling for fast, scalable, responsive UI development.",
            },
          ].map((s) => (
            <div key={s.name} className="stack-hero-card">
              <div style={{ color: ACCENT, marginBottom: "0.6rem" }}>
                <s.icon size={20} />
              </div>

              <div className="stack-name">{s.name}</div>
              <div className="stack-desc">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* BACKEND + WORDPRESS */}
      <div className="section">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem" }}>

          {/* BACKEND */}
          <div>
            <h2 className="section-title">Backend</h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {[
                { icon: Server, name: "Node.js", desc: "Scalable APIs and backend logic." },
                { icon: Cpu, name: "Python / Django / Flask", desc: "Automation, RESTful APIs, and backend systems." },
                { icon: Database, name: "Databases", desc: "SQL, MongoDB, and Supabase systems." },
              ].map((s) => (
                <div
                  key={s.name}
                  className="card"
                  style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}
                >
                  <div style={{ color: ACCENT, marginTop: "0.2rem" }}>
                    <s.icon size={18} />
                  </div>

                  <div>
                    <div style={{ fontWeight: 700, fontSize: "0.9rem" }}>
                      {s.name}
                    </div>
                    <div style={{ fontSize: "0.78rem", color: MUTED }}>
                      {s.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* WORDPRESS */}
          <div>
            <h2 className="section-title">WordPress</h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {[
                { icon: Box, name: "Custom Themes", desc: "Lightweight and SEO-optimized WordPress themes." },
                { icon: GitBranch, name: "PHP Development", desc: "Custom plugins and backend WordPress logic." },
                { icon: Zap, name: "Performance", desc: "Speed optimization and Core Web Vitals tuning." },
              ].map((s) => (
                <div
                  key={s.name}
                  className="card"
                  style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}
                >
                  <div style={{ color: ACCENT, marginTop: "0.2rem" }}>
                    <s.icon size={18} />
                  </div>

                  <div>
                    <div style={{ fontWeight: 700, fontSize: "0.9rem" }}>
                      {s.name}
                    </div>
                    <div style={{ fontSize: "0.78rem", color: MUTED }}>
                      {s.desc}
                    </div>
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
            { icon: GitBranch, name: "Git / GitHub" },
            { icon: Cloud, name: "AWS" },
            { icon: Box, name: "Docker" },
            { icon: Terminal, name: "Linux" },
          ].map((t) => (
            <div key={t.name} className="infra-card">
              <div className="infra-name">{t.name}</div>

              <div style={{ color: ACCENT, fontSize: "1.5rem", opacity: 0.7 }}>
                <t.icon />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* PRO LEVEL SECTION */}
      <div className="section">
        <div
          style={{
            background: CARD,
            border: `1px solid ${BORDER}`,
            borderRadius: 20,
            padding: "2.5rem",
          }}
        >
          <h2
            style={{
              fontSize: "1.6rem",
              fontWeight: 800,
              marginBottom: "2rem",
              display: "flex",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            Technical Proficiency
          </h2>

          <div className="proficiency-grid">
            {[
              {
                title: "Clean Code Standards",
                text: "Readable, maintainable architecture built to scale and easy for other developers to work with.",
              },
              {
                title: "Performance Strategy",
                text: "Optimized load times, responsive design, and Core Web Vitals best practices.",
              },
              {
                title: "API Development",
                text: "Building and consuming RESTful APIs with Django, Flask, and Node.js.",
              },
              {
                title: "Database Design",
                text: "Structured SQL and NoSQL data models using MongoDB and Supabase.",
              },
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

        <p>
          Whether you need a web application or WordPress solution, let's build
          the right architecture for your goals.
        </p>

        <div className="btn-row" style={{ justifyContent: "center" }}>
          <button className="btn-primary" onClick={() => setPage("hire")}>
            Discuss My Project
          </button>

          <button className="btn-ghost" onClick={() => setPage("portfolio")}>
            View Past Work
          </button>
        </div>
      </div>

      <Footer setPage={setPage} />
    </div>
  );
}
