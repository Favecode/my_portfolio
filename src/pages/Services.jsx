// ─── src/pages/Services.jsx ───────────────────────────────────────────────────
import "../styles/Services.css";
import Footer from "../components/Footer";
import { Icon } from "../components/Icons";
import { ACCENT, MUTED } from "../data/constants";

export default function Services({ setPage }) {
  return (
    <div className="page fade-in">

      {/* ── HERO ── */}
      <div className="services-hero">
        <div>
          <div className="eyebrow">Expertise &amp; Solutions</div>
          <h1 className="hero-title" style={{ fontSize: "clamp(2rem,5vw,3.2rem)" }}>
            Bridging code and <span>business strategy.</span>
          </h1>
          <p className="hero-sub">
            We build resilient digital infrastructure and high-performance user experiences
            that scale with your growth. From web development engineering to specialised
            WordPress architecture.
          </p>
        </div>

        <div className="code-block">
          <div className="code-dots">
            <span className="code-dot" style={{ background: "#ff5f56" }} />
            <span className="code-dot" style={{ background: "#ffbd2e" }} />
            <span className="code-dot" style={{ background: "#27c93f" }} />
          </div>
          <div className="code-line">
            → <span className="code-acc">backend</span>{" "}
            <span style={{ color: "#ffd580" }}>git:(main)</span> ls stack/
          </div>
          <br />
          {[
            ["■", "Node.js"],
            ["■", "Python / Django / Flask"],
            ["■", "RESTful APIs"],
            ["■", "MongoDB / Supabase"],
            ["■", "SQL"],
          ].map(([d, l]) => (
            <div key={l}><span className="code-acc">{d}</span> <span className="code-key">{l}</span></div>
          ))}
          <div><span style={{ color: "#ffd580" }}>■</span> <span className="code-key">AWS / Docker</span></div>
        </div>
      </div>

      {/* ── WEB DEVELOPMENT ── */}
      <div className="section">
        <h2 className="section-title">Web Development Engineering</h2>
        <div className="divider" style={{ margin: "0 0 1.5rem" }} />
        <div className="grid-2">
          <div className="card">
            <div className="card-icon"><Icon.Code2 width={18} height={18} /></div>
            <div className="card-title">Modern Frontend</div>
            <div className="card-text">Responsive, accessible, and blindingly fast user interfaces built with the modern web ecosystem.</div>
            <div style={{ marginTop: "1rem" }}>
              {["React.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"].map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </div>
          <div className="card">
            <div className="card-icon"><Icon.Server width={18} height={18} /></div>
            <div className="card-title">Robust Backend Systems</div>
            <div className="card-text">Scalable server-side architectures with clean API design, real-time capabilities, and cloud-native deployment patterns.</div>
            <div style={{ marginTop: "1rem" }}>
              {["Node.js", "Python", "Django", "Flask", "RESTful APIs", "Supabase"].map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── WORDPRESS ── */}
      <div className="section">
        <h2 className="section-title">Specialised <span>WordPress</span> Services</h2>
        <p style={{ color: MUTED, fontSize: "0.88rem", marginBottom: "2rem", maxWidth: 500 }}>
          Moving beyond simple templates. We engineer WordPress into a robust enterprise CMS
          through custom development and technical optimisation.
        </p>
        <div className="grid-3">
          {[
            { icon: Icon.Globe, title: "Custom Theme Dev",          desc: "Lightweight, accessible, and SEO-ready themes built with block-based patterns and zero bloat." },
            { icon: Icon.Box,   title: "Plugin Development",        desc: "Extending core functionality with secure, efficient, and well-documented custom plugins." },
            { icon: Icon.Zap,   title: "Performance Optimisation",  desc: "Sub-second load times via advanced caching, database tuning, and Core Web Vitals refinement." },
          ].map((s) => (
            <div key={s.title} className="card">
              <div className="card-icon"><s.icon width={18} height={18} /></div>
              <div className="card-title">{s.title}</div>
              <div className="card-text">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── PROCESS ── */}
      <div className="section">
        <h2 className="section-title" style={{ textAlign: "center" }}>Our Process</h2>
        <p style={{ color: MUTED, fontSize: "0.88rem", textAlign: "center", marginBottom: "2rem" }}>
          A transparent, results-driven journey from initial concept to deployment.
        </p>
        <div className="process-grid">
          {[
            { step: "01", icon: Icon.ShieldCheck, title: "Consultation", desc: "Discovery phase to align technical requirements with your business objectives." },
            { step: "02", icon: Icon.Globe,       title: "Design",       desc: "Architecting the UI/UX and system database schemas for optimal flow." },
            { step: "03", icon: Icon.Cpu,         title: "Development",  desc: "Iterative coding cycles with regular updates and staging previews." },
            { step: "04", icon: Icon.ArrowRight,  title: "Launch",       desc: "Rigorous testing, optimisation, and seamless handover for deployment." },
          ].map((s) => (
            <div key={s.step} className="card" style={{ textAlign: "center" }}>
              <div style={{ color: ACCENT, marginBottom: "0.6rem" }}>
                <s.icon width={20} height={20} style={{ margin: "0 auto" }} />
              </div>
              <div style={{ fontFamily: "'Fira Code',monospace", fontSize: "0.65rem", color: ACCENT }}>{s.step}</div>
              <div className="card-title">{s.title}</div>
              <div className="card-text">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── CTA ── */}
      <div className="cta-block">
        <h2>Ready to scale your digital presence?</h2>
        <p>Let's discuss how our technical expertise can solve your unique business challenges.</p>
        <div className="btn-row" style={{ justifyContent: "center" }}>
          <button className="btn-primary" onClick={() => setPage("hire")}>Schedule a Call</button>
          <button className="btn-ghost"   onClick={() => setPage("portfolio")}>View Portfolio</button>
        </div>
      </div>

      <Footer setPage={setPage} />
    </div>
  );
}
