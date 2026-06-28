// ─── src/pages/Portfolio.jsx ──────────────────────────────────────────────────
import { useState } from "react";
import "../styles/Portfolio.css";
import Footer from "../components/Footer";
import { Icon } from "../components/Icons";
import { projects } from "../data/constants";

export default function Portfolio({ setPage }) {
  const [filter, setFilter] = useState("all");
  const filtered = filter === "all" ? projects : projects.filter((p) => p.filter === filter);

  return (
    <div className="page fade-in">

      {/* ── HERO ── */}
      <div className="portfolio-hero">
        <div>
          <div className="eyebrow">My Work</div>
          <h1 className="hero-title">Custom-engineered <span>solutions.</span></h1>
          <p className="hero-sub" style={{ marginTop: "0.75rem" }}>
            A selection spanning web development projects and WordPress systems.
          </p>
        </div>

        <div className="code-block">
          <div className="code-dots">
            <span className="code-dot" style={{ background: "#ff5f56" }} />
            <span className="code-dot" style={{ background: "#ffbd2e" }} />
            <span className="code-dot" style={{ background: "#27c93f" }} />
          </div>
          <div className="code-line">
            → <span className="code-acc">portfolio</span>{" "}
            <span style={{ color: "#ffd580" }}>git:(main)</span> npm run build
          </div>
          <br />
          {[
            ["■", "React.js"],
            ["■", "Node.js / Express"],
            ["■", "Custom WordPress"],
            ["■", "Supabase / MongoDB"],
            ["■", "Deployed & Live"],
          ].map(([d, l]) => (
            <div key={l}><span className="code-acc">{d}</span> <span className="code-key">{l}</span></div>
          ))}
          <div><span style={{ color: "#ffd580" }}>■</span> <span className="code-key">100% Conversion-Ready</span></div>
        </div>
      </div>

      {/* ── FILTER ── */}
      <div className="filter-row">
        {["all", "web-development"].map((f) => (
          <button
            key={f}
            className={`filter-btn${filter === f ? " active" : ""}`}
            onClick={() => setFilter(f)}
          >
            {f === "all" ? "All" : "Web Development"}
          </button>
        ))}
      </div>

      {/* ── PROJECT GRID ── */}
      <div className="portfolio-grid-page">
        {filtered.map((p, i) => (
          <div key={p.id} className={`portfolio-card-page fade-in stagger-${(i % 5) + 1}`}>
            <div
              className="portfolio-img-page"
              style={{
                background: `linear-gradient(135deg,${p.color}22,${p.color}08)`,
                borderBottom: `1px solid ${p.color}22`,
              }}
            >
              {p.image
                ? <img src={p.image} alt={p.title} loading="lazy" />
                : <span style={{ color: p.color, fontSize: "2.5rem", fontWeight: 900 }}>{p.title[0]}</span>}
            </div>
            <div className="portfolio-card-body-page">
              <div className="portfolio-type-label">{p.type}</div>
              <div className="portfolio-title-text">{p.title}</div>
              <div className="portfolio-desc-text">{p.desc}</div>
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="view-link"
                onClick={(e) => e.stopPropagation()}
              >
                View Live Site →
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* ── CTA ── */}
      <div className="cta-block">
        <h2>Have a project in mind?</h2>
        <p>Let's build something powerful together.</p>
        <div className="btn-row" style={{ justifyContent: "center" }}>
          <button className="btn-primary" onClick={() => setPage("hire")}>Start Your Project</button>
        </div>
      </div>

      <Footer setPage={setPage} />
    </div>
  );
}
