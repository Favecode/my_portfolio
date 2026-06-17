import { useEffect, useRef, useState } from "react";
import Footer from "./Footer";
import { ACCENT, MUTED } from "../constants";
import { projects } from "../constants";
import { Code2, Server, Globe, Layers, GitBranch, Cloud, Database, Cpu } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import profileImg from "../assets/profile.png";

/* ── Animated counter hook (triggers on scroll into view) ── */
function useCountUp(target, duration = 1800, suffix = "") {
  const [display, setDisplay] = useState("0" + suffix);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true); },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const numericTarget = parseInt(String(target).replace(/\D/g, ""), 10);
    const start = performance.now();
    const tick = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * numericTarget);
      setDisplay(current + suffix);
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [started, target, duration, suffix]);

  return { ref, display };
}

function StatItem({ num, suffix, label }) {
  const { ref, display } = useCountUp(num, 1800, suffix);
  return (
    <div ref={ref} className="home-stat-item">
      <div className="home-stat-num">{display}</div>
      <div className="home-stat-label">{label}</div>
    </div>
  );
}

export default function Home({ setPage }) {
  return (
    <div className="page fade-in">

      {/* ── HERO ── */}
      <div className="home-hero">
        <div className="home-hero-text">
          <div className="eyebrow">Web Developer &amp; WordPress Engineer ·</div>

          <h1 className="hero-title">
            Hi, I'm <span> Favor Emmanuel<br />Onaolapo.</span>
          </h1>

          <p className="hero-sub">
            I engineer high-performance web experiences — from pixel-perfect React frontends
            to scalable backend systems and custom WordPress architectures. I don't just write
            code; I build digital products that drive real business results.
          </p>

          <div className="btn-row" style={{ marginTop: "1.8rem" }}>
            <button className="btn-primary" onClick={() => setPage("hire")}>
              Hire Me →
            </button>
            <button className="btn-ghost" onClick={() => setPage("portfolio")}>
              View Portfolio
            </button>
          </div>

          <div className="home-socials">
            <a href="https://wa.me/2349164925583" target="_blank" rel="noreferrer" title="WhatsApp">
              <FaWhatsapp size={18} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" title="LinkedIn">
              <FaLinkedin size={18} />
            </a>
            <a href="https://x.com/myfaveguy" target="_blank" rel="noreferrer" title="X / Twitter">
              <FaTwitter size={18} />
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" title="GitHub">
              <FaGithub size={18} />
            </a>
          </div>
        </div>

        {/* PHOTO */}
        <div className="home-photo-wrap">
          <div className="home-photo-ring">
            <div className="home-photo-inner">
              <img
                src={profileImg}
                alt="Onaolapo Favour Emmanuel"
              />
              <div className="home-photo-monogram">OFE</div>
            </div>
          </div>
          <div className="home-photo-badge">
            <span className="home-photo-badge-dot" />
            Available for projects
          </div>
        </div>
      </div>

      {/* ── STATS (animated count-up on scroll) ── */}
      <div className="home-stats">
        <StatItem num={20} suffix="+" label="Projects Delivered" />
         <StatItem num={3}  suffix="+" label="Years Experience" />
        <StatItem num={100} suffix="%" label="Client Satisfaction" />
        <StatItem num={2}  suffix="x"  label="Faster Delivery" />
      </div>

      {/* PORTFOLIO PREVIEW */}
      <div className="section">
        <div className="section-header-row">
          <div>
            <div className="eyebrow">Featured Works</div>
            <h2 className="section-title">Custom-engineered <span>solutions</span>.</h2>
          </div>
          <button className="btn-ghost" onClick={() => setPage("portfolio")} style={{ flexShrink: 0 }}>
            View All →
          </button>
        </div>

        <div className="portfolio-grid" style={{ padding: 0 }}>
          {projects.slice(0, 3).map((p, i) => (
            <div key={p.id} className={`portfolio-card fade-in stagger-${i + 1}`}>
              <div className="portfolio-img">
                <img src={p.image} alt={p.title} />
                {p.result && <div className="portfolio-result-badge">{p.result}</div>}
              </div>
              <div className="portfolio-card-body">
                <div className="portfolio-type">{p.type}</div>
                <div className="portfolio-card-title">{p.title}</div>
                <div className="portfolio-card-desc">{p.desc}</div>
                <button
                  type="button"
                  className="view-link"
                  onClick={() => setPage("portfolio")}
                >
                  View Details →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SERVICES PREVIEW */}
      <div className="section-full" style={{ background: `linear-gradient(180deg, transparent 0%, rgba(0,229,176,0.02) 100%)` }}>
        <div className="section">
          <div className="section-header-row">
            <div>
              <div className="eyebrow">Expertise &amp; Solutions</div>
              <h2 className="section-title">Bridging code and <span>business strategy.</span></h2>
            </div>
            <button className="btn-ghost" onClick={() => setPage("services")} style={{ flexShrink: 0 }}>
              All Services →
            </button>
          </div>

          <div className="grid-3">
            {[
              { icon: Code2,  title: "Modern Frontend",       desc: "Blazing-fast, accessible UIs with React, JavaScript (ES6+), and Tailwind CSS.", tags: ["React", "Tailwind", "Bootstrap"] },
              { icon: Server, title: "Backend Systems",       desc: "Scalable APIs and server logic with Node.js, Python, Django, and Flask.", tags: ["Node.js", "Python", "Django"] },
              { icon: Globe,  title: "WordPress Engineering", desc: "Custom themes, plugins, and performance-optimised WordPress systems built from scratch.", tags: ["Custom Themes", "Plugins", "WP Speed"] },
            ].map((s) => (
              <div key={s.title} className="card">
                <div className="card-icon"><s.icon size={18} /></div>
                <div className="card-title">{s.title}</div>
                <div className="card-text">{s.desc}</div>
                <div style={{ marginTop: "0.75rem" }}>
                  {s.tags.map((t) => <span key={t} className="tag">{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── TESTIMONIALS (NEW) ── */}
      <div className="section">
        <div className="eyebrow">Client Feedback</div>
        <h2 className="section-title">What clients <span>say about me.</span></h2>

        <div className="testimonials-grid">
          {[
            {
              name: "Adebayo Okafor",
              role: "CEO, Savoria Foods",
              text: "Favour delivered our food ordering platform ahead of schedule. The site loads incredibly fast and our online orders increased noticeably within the first month. Extremely professional and communicative throughout.",
              avatar: "https://randomuser.me/api/portraits/men/75.jpg",
            },
            {
              name: "Chidi Nwosu",
              role: "Owner, The Barber's Den",
              text: "The barbershop website Favour built for us is simply stunning. Clients often tell us they booked because the website looked so premium. He understood exactly what we wanted and executed it perfectly.",
              avatar: "https://randomuser.me/api/portraits/men/32.jpg",
            },
            {
              name: "Sade Williams",
              role: "Founder, Glow's Haven",
              text: "Working with Favour was seamless from start to finish. He built our beauty brand site with such attention to detail. Our bounce rate dropped and we now rank on Google for our key services.",
              avatar: "https://randomuser.me/api/portraits/women/65.jpg",
            },
          ].map((t) => (
            <div key={t.name} className="testimonial-card">
              <p className="testimonial-text">"{t.text}"</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">
                  <img src={t.avatar} alt={`${t.name} portrait`} />
                </div>
                <div>
                  <div className="testimonial-name">{t.name}</div>
                  <div className="testimonial-role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── WHY HIRE ME (NEW) ── */}
      <div className="section">
        <div className="why-hire-grid">
          <div>
            <div className="eyebrow">Why Work With Me</div>
            <h2 className="section-title">
              I treat your business<br /><span>like my own.</span>
            </h2>
            <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.8, marginBottom: "1.5rem" }}>
              I don't disappear after delivery. I communicate clearly, meet deadlines,
              and build things that actually work in production — not just on localhost.
              You get senior-level thinking at every stage.
            </p>
            <button className="btn-primary" onClick={() => setPage("hire")}>
              Let's Talk →
            </button>
          </div>

          <div>
            {[
              { emoji: "⚡", title: "Fast Delivery", desc: "Most projects delivered in 1–3 weeks with regular progress updates." },
              { emoji: "🌍", title: "Remote-Ready", desc: "Experienced working across time zones with international teams and clients." },
              { emoji: "🔒", title: "Clean, Secure Code", desc: "Input validation and security best practices on every project." },
              { emoji: "📈", title: "Performance Obsessed", desc: "Fast load times and optimised Core Web Vitals by default." },
            ].map((w) => (
              <div key={w.title} className="why-item">
                <div className="why-emoji">{w.emoji}</div>
                <div>
                  <div className="why-title">{w.title}</div>
                  <div className="why-desc">{w.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* STACK PREVIEW */}
      <div className="section">
        <div className="section-header-row">
          <div>
            <div className="eyebrow">Technical Ecosystem</div>
            <h2 className="section-title">Crafting excellence with a <span>modern stack.</span></h2>
          </div>
          <button className="btn-ghost" onClick={() => setPage("stack")} style={{ flexShrink: 0 }}>
            Full Tech Stack →
          </button>
        </div>

        <div className="home-stack-grid">
          {[
            { icon: Code2,     name: "React.js",       color: "#61dafb" },
            { icon: Layers,    name: "Tailwind CSS",   color: "#38bdf8" },
            { icon: Server,    name: "Node.js",        color: "#8cc84b" },
            { icon: Cpu,       name: "Python / Django",color: "#ffd43b" },
            { icon: Database,  name: "MongoDB",        color: "#47A248" },
            { icon: Globe,     name: "Supabase",       color: "#3ecf8e" },
            { icon: Cloud,     name: "AWS / Docker",   color: "#ff9900" },
            { icon: GitBranch, name: "Git / Linux",    color: ACCENT },
          ].map((t) => (
            <div key={t.name} className="home-stack-pill">
              <t.icon size={16} style={{ color: t.color, flexShrink: 0 }} />
              <span>{t.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="cta-block">
        <h2>Let's build your next web solution</h2>
        <p>Web development projects and WordPress systems designed for performance, scalability, and measurable growth.</p>
        <div className="btn-row" style={{ justifyContent: "center" }}>
          <button className="btn-primary" onClick={() => setPage("hire")}>Start a Project</button>
          <button className="btn-ghost"   onClick={() => setPage("portfolio")}>See My Work</button>
        </div>
      </div>

      <Footer setPage={setPage} />
    </div>
  );
}
