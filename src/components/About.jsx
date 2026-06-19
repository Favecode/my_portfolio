import Footer from "./Footer";
import { ACCENT, MUTED } from "../constants";
import { Code2, Target, Layers, Rocket, CheckCircle2 } from "lucide-react";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import profileImg from "../assets/profile.png";

export default function About({ setPage }) {
  return (
    <div className="page fade-in">

      {/* HERO */}
      <div className="about-hero">
        <div className="about-photo-col">
          <div className="about-photo-frame">
            <img src={profileImg} alt="Onaolapo Favour Emmanuel" />
            <div className="about-photo-monogram">OFE</div>
          </div>
          <div className="about-social-row">
            <a href="https://wa.me/2349164925583" target="_blank" rel="noreferrer"><FaWhatsapp size={16} /></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedin size={16} /></a>
            <a href="https://x.com/myfaveguy" target="_blank" rel="noreferrer"><FaTwitter size={16} /></a>
            <a href="https://github.com" target="_blank" rel="noreferrer"><FaGithub size={16} /></a>
          </div>
          
        </div>

        <div>
          <div className="eyebrow">Web Developer &amp; WordPress Engineer</div>
          <h1 className="hero-title">
            Building <span>scalable web systems</span> and high-performance WordPress solutions.
          </h1>
          <p className="hero-sub" style={{ fontSize: "1rem", marginTop: "1rem" }}>
            Web Developer specializing in React, JavaScript, Python,
            and enterprise WordPress development. I build fast, scalable,
            and conversion-focused digital products — from custom CMS
            platforms to complex backend systems and APIs.
          </p>
          <button
            className="btn-ghost about-hero-cta-desktop"
            style={{ marginTop: "1.2rem", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}
            onClick={() => setPage("portfolio")}
          >
            <Rocket size={16} /> View Projects
          </button>
        </div>

        {/* CODE BLOCK (matches Services page) */}
        <div className="code-block">
          <div className="code-dots">
            <span className="code-dot" style={{ background: "#ff5f56" }} />
            <span className="code-dot" style={{ background: "#ffbd2e" }} />
            <span className="code-dot" style={{ background: "#27c93f" }} />
          </div>

          <div className="code-line">
            → <span className="code-acc">favour</span>{" "}
            <span className="code-str">git:(main)</span> whoami
          </div>

          <br />

          <div>
            <span className="code-acc">■</span>{" "}
            <span className="code-key">React.js / JavaScript (ES6+)</span>
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
            <span className="code-key">WordPress Engineering</span>
          </div>
          <div>
            <span className="code-acc">■</span>{" "}
            <span className="code-key">MongoDB / Supabase</span>
          </div>
          <div>
            <span style={{ color: "#ffd580" }}>■</span>{" "}
            <span className="code-key">AWS / Docker</span>
          </div>
        </div>
      </div>

      {/* PHILOSOPHY */}
      <div className="section">
        <h2 className="section-title" style={{ textAlign: "center", marginBottom: "1.5rem" }}>
          My Development Focus
        </h2>
        <div className="philosophy-grid">
          <div className="card">
            <div className="card-icon"><Code2 /></div>
            <div className="card-title">Web Development Engineering</div>
            <div className="card-text">Building complete systems using React, Node.js, Python, and APIs that scale.</div>
          </div>
          <div className="card">
            <div className="card-icon"><Layers /></div>
            <div className="card-title">WordPress Architecture</div>
            <div className="card-text">Custom themes, plugins, Gutenberg blocks, and performance-optimized WP systems.</div>
          </div>
          <div className="card">
            <div className="card-icon"><Target /></div>
            <div className="card-title">Performance & Conversion</div>
            <div className="card-text">Fast-loading websites designed to improve SEO, engagement, and business results.</div>
          </div>
        </div>
      </div>

      {/* TOOLKIT */}
      <div className="section">
        <div className="eyebrow">Technical Stack</div>
        <h2 className="section-title">Web Development + WordPress Expertise</h2>
        <div className="philosophy-grid">
          <div className="card">
            <div className="card-title">Frontend Development</div>
            <div className="card-text">React.js, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Bootstrap</div>
          </div>
          <div className="card">
            <div className="card-title">Backend Systems</div>
            <div className="card-text">Node.js, Python, Django, Flask, RESTful APIs</div>
          </div>
          <div className="card">
            <div className="card-title">WordPress Development</div>
            <div className="card-text">Custom Themes, Custom Plugins, Elementor, Gutenberg Blocks, WP Optimization</div>
          </div>
          <div className="card">
            <div className="card-title">Cloud, DevOps &amp; Databases</div>
            <div className="card-text">AWS, Docker, SQL, MongoDB, Supabase, Git/GitHub, Linux</div>
          </div>
        </div>
      </div>

      {/* WORDPRESS VALUE */}
      <div className="section">
        <h2 className="section-title" style={{ textAlign: "center", marginBottom: "1.5rem" }}>
          What I Do in WordPress
        </h2>
        <div className="philosophy-grid">
          <div className="card">
            <div className="card-title">Custom WordPress Themes</div>
            <div className="card-text">Fully custom, lightweight, SEO-optimized themes built from scratch — no bloated templates.</div>
          </div>
          <div className="card">
            <div className="card-title">Plugin Development</div>
            <div className="card-text">Custom plugins for business logic, automation, integrations, and advanced functionality.</div>
          </div>
          <div className="card">
            <div className="card-title">Performance Optimization</div>
            <div className="card-text">Speed optimization, caching, database tuning, and Core Web Vitals improvement.</div>
          </div>
        </div>
      </div>

      {/* EXPERIENCE TIMELINE (NEW) */}
      <div className="section">
        <div className="eyebrow">Experience</div>
        <h2 className="section-title">How I got <span>here.</span></h2>

        <div className="timeline">
          {[
            {
              role: "Software Developer",
              company: "Lantop Infotech · Nigeria",
              desc: "Built and maintained responsive web applications. Integrated APIs and optimized applications for performance, SEO, and accessibility. Debugged code, dependencies, and environment issues to support smooth CI/CD workflows.",
              active: true,
            },
            {
              role: "Senior Python Developer",
              company: "Turing (Remote) · USA",
              desc: "Developed scalable backend services and RESTful APIs. Worked on backend systems and microservices. Managed cloud deployments and containerized applications. Built and maintained CI/CD pipelines to improve release efficiency.",
              active: true,
            },
            {
              role: "Freelance Web Developer",
              company: "Independent · Remote",
              desc: "Building web applications and WordPress systems for clients across Nigeria and internationally. Specialising in React, Node.js, and performance-optimised WordPress development.",
              active: true,
            },
            {
              role: "Self-Taught Web Development",
              company: "Independent Study & Practice",
              desc: "Learned and practiced web development at my own pace, building real projects along the way — not a straight line, but every step sharpened the skill set I bring today.",
              active: false,
            },
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

      {/* WHAT CLIENTS GET (NEW) */}
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
                <CheckCircle2 size={18} color={ACCENT} style={{ flexShrink: 0 }} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-block">
        <h2>Let's build your next web solution</h2>
        <p>Web development projects and WordPress systems designed for performance, scalability, and growth.</p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", marginBottom: "1rem" }}>
          <a href="https://wa.me/2349164925583" target="_blank" rel="noreferrer" style={{ color: "#00e5b0" }}>
            <FaWhatsapp size={22} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" style={{ color: "#00e5b0" }}>
            <FaLinkedin size={22} />
          </a>
          <a href="https://x.com/myfaveguy" target="_blank" rel="noreferrer" style={{ color: "#00e5b0" }}>
            <FaTwitter size={22} />
          </a>
        </div>
        <button className="btn-primary" onClick={() => setPage("hire")}>Hire Me</button>
      </div>

      <Footer setPage={setPage} />
    </div>
  );
}