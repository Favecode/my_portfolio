import Footer from "./Footer";
import { ACCENT, MUTED, CARD, BORDER } from "../constants";
import {
  Briefcase,
  Code2,
  Target,
  Layers,
  Rocket,
} from "lucide-react";

import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function About({ setPage }) {
  return (
    <div className="page fade-in">

      {/* HERO */}
      <div className="about-hero">
        <div>
          <div className="eyebrow">Full-Stack & WordPress Engineer</div>

          <h1 className="hero-title">
            Building <span>scalable web systems</span> and high-performance WordPress solutions.
          </h1>

          <p
            className="hero-sub"
            style={{ fontSize: "1.05rem", lineHeight: "1.8" }}
          >
            Full-Stack Developer specializing in React, TypeScript, Python,
            and enterprise WordPress development. I build fast, scalable,
            and conversion-focused digital products — from custom CMS
            platforms to complex backend systems and APIs.
          </p>

          <button
            className="btn-ghost"
            style={{
              marginTop: "0.8rem",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              fontSize: "0.9rem",
            }}
            onClick={() => setPage("portfolio")}
          >
            <Rocket size={16} /> View Projects
          </button>
        </div>

        <div className="about-img">
          <div className="about-img-inner">
            wordpress.engine + fullstack.core<br /><br />
            {">"} custom themes<br />
            {">"} scalable APIs<br />
            {">"} optimized performance
          </div>
        </div>
      </div>

      {/* PHILOSOPHY */}
      <div className="section">
        <h2 className="section-title" style={{ textAlign: "center" }}>
          My Development Focus
        </h2>

        <div className="philosophy-grid">

          <div className="card">
            <div className="card-icon"><Code2 /></div>
            <div className="card-title">Full-Stack Engineering</div>
            <div className="card-text">
              Building complete systems using React, Node.js, Python, and APIs that scale.
            </div>
          </div>

          <div className="card">
            <div className="card-icon"><Layers /></div>
            <div className="card-title">WordPress Architecture</div>
            <div className="card-text">
              Custom themes, plugins, Gutenberg blocks, and performance-optimized WP systems.
            </div>
          </div>

          <div className="card">
            <div className="card-icon"><Target /></div>
            <div className="card-title">Performance & Conversion</div>
            <div className="card-text">
              Fast-loading websites designed to improve SEO, engagement, and business results.
            </div>
          </div>

        </div>
      </div>

      {/* TOOLKIT */}
      <div className="section">
        <div className="eyebrow">Technical Stack</div>

        <h2 className="section-title">
          Full-Stack + WordPress Expertise
        </h2>

        <div className="philosophy-grid">

          <div className="card">
            <div className="card-title">Frontend Development</div>
            <div className="card-text">
              React.js, Next.js, TypeScript, Tailwind CSS, Framer Motion
            </div>
          </div>

          <div className="card">
            <div className="card-title">Backend Systems</div>
            <div className="card-text">
              Node.js, Python, Django, FastAPI, Flask, REST & GraphQL APIs
            </div>
          </div>

          <div className="card">
            <div className="card-title">WordPress Development</div>
            <div className="card-text">
              Custom Themes, Custom Plugins, Elementor, Gutenberg Blocks, WP Optimization
            </div>
          </div>

          <div className="card">
            <div className="card-title">Cloud & DevOps</div>
            <div className="card-text">
              AWS, Azure, GCP, Docker, CI/CD, Kubernetes, GitHub Actions
            </div>
          </div>

        </div>
      </div>

      {/* WORDPRESS VALUE SECTION (IMPORTANT) */}
      <div className="section">
        <h2 className="section-title" style={{ textAlign: "center" }}>
          What I Do in WordPress
        </h2>

        <div className="philosophy-grid">

          <div className="card">
            <div className="card-title">Custom WordPress Themes</div>
            <div className="card-text">
              Fully custom, lightweight, SEO-optimized themes built from scratch (no bloated templates).
            </div>
          </div>

          <div className="card">
            <div className="card-title">Plugin Development</div>
            <div className="card-text">
              Custom plugins for business logic, automation, integrations, and advanced functionality.
            </div>
          </div>

          <div className="card">
            <div className="card-title">Performance Optimization</div>
            <div className="card-text">
              Speed optimization, caching, database tuning, and Core Web Vitals improvement.
            </div>
          </div>

        </div>
      </div>

      {/* CTA */}
      <div className="cta-block">
        <h2>Let’s build your next web solution</h2>
        <p>
          Full-stack applications and WordPress systems designed for performance, scalability, and growth.
        </p>

        <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
          <a href="https://github.com" target="_blank" rel="noreferrer">
            <FaGithub size={20} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <FaLinkedin size={20} />
          </a>
          <a href="https://x.com/myfaveguy" target="_blank" rel="noreferrer">
            <FaTwitter size={20} />
          </a>
        </div>

        <button
          className="btn-primary"
          onClick={() => setPage("hire")}
          style={{ marginTop: "1rem", fontSize: "0.9rem" }}
        >
          Hire Me
        </button>
      </div>

      <Footer setPage={setPage} />
    </div>
  );
}