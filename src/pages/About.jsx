// ─── src/pages/About.jsx ──────────────────────────────────────────────────────
import "../styles/About.css";
import Footer from "../components/Footer";
import { Icon } from "../components/Icons";
import { ACCENT, MUTED } from "../data/constants";
import profileImg from "../assets/profile.png";

export default function About({ setPage }) {
  return (
    <div className="page fade-in">

      {/* ── HERO ── */}
      <div className="about-hero">
        <div className="about-photo-col">
          <div className="about-photo-frame">
      <img
        src={profileImg}
        alt="Onaolapo Emmanuel"
        className="about-photo-img"
      />
            
          </div>
          <div className="about-social-row">
            <a href="https://wa.me/2349164925583"  target="_blank" rel="noreferrer"><Icon.WA       width={16} height={16} /></a>
            <a href="https://linkedin.com"          target="_blank" rel="noreferrer"><Icon.LinkedIn width={16} height={16} /></a>
            <a href="https://x.com/myfaveguy"       target="_blank" rel="noreferrer"><Icon.Twitter  width={16} height={16} /></a>
          </div>
        </div>

        <div>
          <div className="eyebrow">Web Developer &amp; Designer</div>
          <h1 className="hero-title">
            Building <span>scalable web systems</span> and high-performance WordPress solutions.
          </h1>
          <p className="hero-sub" style={{ fontSize: "1rem", marginTop: "1rem" }}>
            Web Developer specializing in React, JavaScript, Python, and enterprise WordPress development.
            I build fast, scalable, and conversion-focused digital products — from custom CMS platforms
            to complex backend systems and APIs.
          </p>
          <button
            className="btn-ghost about-hero-cta-desktop"
            style={{ marginTop: "1.2rem", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}
            onClick={() => setPage("portfolio")}
          >
            <Icon.Rocket width={16} height={16} /> View Projects
          </button>
        </div>

        {/* Code block */}
        <div className="code-block" style={{ minWidth: "220px" }}>
          <div className="code-dots">
            <span className="code-dot" style={{ background: "#ff5f56" }} />
            <span className="code-dot" style={{ background: "#ffbd2e" }} />
            <span className="code-dot" style={{ background: "#27c93f" }} />
          </div>
          <div className="code-line">
            → <span className="code-acc">favour</span>{" "}
            <span style={{ color: "#ffd580" }}>git:(main)</span> whoami
          </div>
          <br />
          {[
            ["■", "React.js / JavaScript"],
            ["■", "Python / Node.js"],
            ["■", "Django / Flask"],
            ["■", "WordPress Engineering"],
            ["■", "MongoDB / Supabase"],
          ].map(([d, l]) => (
            <div key={l}><span className="code-acc">{d}</span> <span className="code-key">{l}</span></div>
          ))}
          <div><span style={{ color: "#ffd580" }}>■</span> <span className="code-key">AWS / Docker</span></div>
        </div>
      </div>

      {/* Mobile CTA */}
      <div style={{ textAlign: "center", padding: "0 1rem 1rem" }}>
        <button
          className="btn-ghost about-hero-cta-mobile"
          style={{ alignItems: "center", gap: "0.5rem" }}
          onClick={() => setPage("portfolio")}
        >
          <Icon.Rocket width={16} height={16} /> View Projects
        </button>
      </div>

      {/* ── DEVELOPMENT FOCUS ── */}
      <div className="section">
        <h2 className="section-title" style={{ textAlign: "center", marginBottom: "1.5rem" }}>
          My Development Focus
        </h2>
        <div className="philosophy-grid">
          {[
            { icon: Icon.Code2,      title: "Web Development",         text: "Building complete systems using React, Node.js, Python, and APIs that scale." },
            { icon: Icon.Layers,     title: "WordPress Architecture",   text: "Custom themes, plugins, Gutenberg blocks, and performance-optimized WP systems." },
            { icon: Icon.TrendingUp, title: "Performance & Conversion", text: "Fast-loading websites designed to improve SEO, engagement, and business results." },
          ].map((c) => (
            <div key={c.title} className="card">
              <div className="card-icon"><c.icon width={18} height={18} /></div>
              <div className="card-title">{c.title}</div>
              <div className="card-text">{c.text}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── EXPERIENCE TIMELINE ── */}
      <div className="section">
        <div className="eyebrow">Experience</div>
        <h2 className="section-title">How I got <span>here.</span></h2>
        <div className="timeline">
          {[
            { role: "Software Developer",        company: "Lantop Infotech · Nigeria",    desc: "Built and maintained responsive web applications. Integrated APIs and optimized applications for performance, SEO, and accessibility.", active: true  },
            { role: "Senior Python Developer",    company: "Turing (Remote) · USA",        desc: "Developed scalable backend services and RESTful APIs. Managed cloud deployments and containerized applications.",                       active: true  },
            { role: "Freelance Web Developer",    company: "Independent · Remote",          desc: "Building web applications and WordPress systems for clients across Nigeria and internationally.",                                       active: true  },
            { role: "Self-Taught Web Development",company: "Independent Study & Practice", desc: "Learned and practiced web development at my own pace, building real projects along the way.",                                           active: false },
          ].map((e) => (
            <div key={e.role} className="timeline-item">
              <div className={`timeline-dot${e.active ? "" : " muted"}`} />
              <div className="timeline-role">{e.role}</div>
              <div className="timeline-company">{e.company}</div>
              <div className="timeline-desc">{e.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── WHAT TO EXPECT ── */}
      <div className="section">
        <div className="card" style={{ padding: "2.5rem" }}>
          <div className="eyebrow">Working With Me</div>
          <h2 className="section-title">What you can <span>always expect.</span></h2>
          <div className="about-checklist">
            {[
              "Clear timeline and milestone delivery from day one",
              "Regular progress updates — you're never left in the dark",
              "Mobile-first, SEO-ready code on every project",
              "Fast load times as a standard, not a bonus",
              "Post-launch support and bug fixes included",
              "Clean handoff so you're never dependent on me",
            ].map((item) => (
              <div key={item} className="about-check-item">
                <Icon.CheckCircle width={18} height={18} style={{ color: ACCENT, flexShrink: 0 }} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── CTA ── */}
      <div className="cta-block">
        <h2>Let's build your next web solution</h2>
        <p>Web development projects and WordPress systems designed for performance, scalability, and growth.</p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", marginBottom: "1rem" }}>
          <a href="https://wa.me/2349164925583" target="_blank" rel="noreferrer" style={{ color: ACCENT }}><Icon.WA       width={22} height={22} /></a>
          <a href="https://linkedin.com"         target="_blank" rel="noreferrer" style={{ color: ACCENT }}><Icon.LinkedIn width={22} height={22} /></a>
          <a href="https://x.com/myfaveguy"      target="_blank" rel="noreferrer" style={{ color: ACCENT }}><Icon.Twitter  width={22} height={22} /></a>
        </div>
        <button className="btn-primary" onClick={() => setPage("hire")}>Hire Me</button>
      </div>

      <Footer setPage={setPage} />
    </div>
  );
}
