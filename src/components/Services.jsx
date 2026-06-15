import Footer from "./Footer";
import { MUTED, ACCENT } from "../constants";
import { Code2, Server, Globe, Zap, Box, Cpu, CheckCircle2, ArrowRight } from "lucide-react";

export default function Services({ setPage }) {
  return (
    <div className="page fade-in">

      {/* HERO */}
      <div className="services-hero">
        <div>
          <div className="eyebrow">Expertise & Solutions</div>
          <h1 className="hero-title">
            Bridging code and <span>business strategy.</span>
          </h1>
          <p className="hero-sub" style={{ marginTop: "1rem" }}>
            Resilient digital infrastructure and high-performance user experiences
            that scale with your growth — from full-stack engineering to specialised
            WordPress architecture.
          </p>
        </div>

        <div className="code-block">
          <div className="code-dots">
            <span className="code-dot" style={{ background: "#ff5f56" }} />
            <span className="code-dot" style={{ background: "#ffbd2e" }} />
            <span className="code-dot" style={{ background: "#27c93f" }} />
          </div>
          <div className="code-line">→ <span className="code-acc">backend</span> <span className="code-str">git:(main)</span> ls stack/</div>
          <br />
          {[
            "Node.js / Express",
            "Python / Django",
            "REST & GraphQL",
            "PostgreSQL",
            "MongoDB / Redis",
          ].map((item) => (
            <div key={item}><span className="code-acc">■</span> <span className="code-key">{item}</span></div>
          ))}
          <div><span style={{ color: "#ffd580" }}>■</span> <span className="code-key">AWS Cloud Architecture</span></div>
        </div>
      </div>

      {/* FULL STACK */}
      <div className="section">
        <h2 className="section-title">Full Stack Engineering</h2>
        <div className="divider" style={{ margin: "0 0 1.5rem" }} />
        <div className="grid-2">
          <div className="card">
            <div className="card-icon"><Code2 /></div>
            <div className="card-title">Modern Frontend</div>
            <div className="card-text">
              Responsive, accessible, and fast user interfaces built with the modern web ecosystem.
            </div>
            <div style={{ marginTop: "0.75rem" }}>
              {["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vue.js"].map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </div>
          <div className="card">
            <div className="card-icon"><Server /></div>
            <div className="card-title">Robust Backend Systems</div>
            <div className="card-text">
              Scalable server-side architectures with clean API design, real-time capabilities,
              and cloud-native deployment patterns.
            </div>
            <div style={{ marginTop: "0.75rem" }}>
              {["Node.js", "Python", "PostgreSQL", "AWS", "Supabase", "REST API"].map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* WORDPRESS */}
      <div className="section">
        <h2 className="section-title">Specialised <span>WordPress</span> Services</h2>
        <p style={{ color: MUTED, fontSize: "0.88rem", marginBottom: "1.5rem", maxWidth: 500 }}>
          Moving beyond templates — engineering WordPress into a robust enterprise CMS.
        </p>
        <div className="grid-3">
          {[
            { icon: Globe, title: "Custom Theme Dev",         desc: "Lightweight, SEO-ready themes built with block-based patterns and zero bloat." },
            { icon: Box,   title: "Plugin Development",       desc: "Extending core functionality with secure, efficient, and well-documented custom plugins." },
            { icon: Zap,   title: "Performance Optimisation", desc: "Sub-second load times via advanced caching, database tuning, and Core Web Vitals." },
          ].map((s) => (
            <div key={s.title} className="card">
              <div className="card-icon"><s.icon /></div>
              <div className="card-title">{s.title}</div>
              <div className="card-text">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* PROCESS */}
      <div className="section">
        <h2 className="section-title" style={{ textAlign: "center" }}>Our Process</h2>
        <p style={{ color: MUTED, fontSize: "0.88rem", textAlign: "center", marginBottom: "1.5rem" }}>
          A transparent, results-driven journey from concept to deployment.
        </p>
        <div className="process-grid">
          {[
            { step: "01", icon: CheckCircle2, title: "Consultation", desc: "Discovery phase to align technical requirements with your business objectives." },
            { step: "02", icon: Globe,        title: "Design",       desc: "Architecting the UI/UX and system schemas for optimal flow." },
            { step: "03", icon: Cpu,          title: "Development",  desc: "Iterative coding cycles with regular updates and staging previews." },
            { step: "04", icon: ArrowRight,   title: "Launch",       desc: "Rigorous testing, optimisation, and seamless handover for deployment." },
          ].map((s) => (
            <div key={s.step} className="card" style={{ textAlign: "center" }}>
              <div style={{ color: ACCENT, marginBottom: "0.6rem" }}><s.icon size={20} /></div>
              <div style={{ fontFamily: "'Fira Code', monospace", fontSize: "0.65rem", color: ACCENT }}>{s.step}</div>
              <div className="card-title">{s.title}</div>
              <div className="card-text">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="cta-block">
        <h2>Ready to scale your digital presence?</h2>
        <p>Let's discuss how my technical expertise can solve your unique business challenges.</p>
        <div className="btn-row" style={{ justifyContent: "center" }}>
          <button className="btn-primary" onClick={() => setPage("hire")}>Schedule a Call</button>
          <button className="btn-ghost"   onClick={() => setPage("portfolio")}>View Portfolio</button>
        </div>
      </div>

      <Footer setPage={setPage} />
    </div>
  );
}
