import { useState } from "react";
import Footer from "./Footer";
import { projects } from "../constants";

export default function Portfolio({ setPage }) {
  const [filter, setFilter] = useState("all");

  const filtered =
    filter === "all" ? projects : projects.filter((p) => p.filter === filter);

  return (
    <div className="page fade-in">

      {/* HERO WITH CODE BLOCK */}
      <div className="portfolio-hero">
        <div>
          <div className="eyebrow">Featured Works</div>
          <h1 className="hero-title">
            Custom-engineered <span>solutions</span>.
          </h1>
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
            <span className="code-str">git:(main)</span> npm run build
          </div>
          <br />
          {[
            ["■", "React.js"],
            ["■", "Node.js / Express"],
            ["■", "Custom WordPress"],
            ["■", "Supabase / MongoDB"],
            ["■", "Deployed & Live"],
          ].map(([dot, label]) => (
            <div key={label}>
              <span className="code-acc">{dot}</span>{" "}
              <span className="code-key">{label}</span>
            </div>
          ))}
          <div>
            <span style={{ color: "#ffd580" }}>■</span>{" "}
            <span className="code-key">100% Conversion-Ready</span>
          </div>
        </div>
      </div>

      {/* FILTER ROW */}
      <div className="filter-row">
        {["all", "web-development"].map((f) => (
          <button
            key={f}
            className={`filter-btn ${filter === f ? "active" : ""}`}
            onClick={() => setFilter(f)}
          >
            {f === "all" ? "all" : "web development"}
          </button>
        ))}
      </div>

      {/* PROJECT GRID */}
      <div className="portfolio-grid">
        {filtered.map((p, i) => (
          <div
            key={p.id}
            className={`portfolio-card fade-in stagger-${(i % 5) + 1}`}
          >
            {/* PROJECT IMAGE */}
            <div className="portfolio-img">
              <img src={p.image} alt={p.title} />
              {p.result && (
                <div className="portfolio-result-badge">{p.result}</div>
              )}
            </div>

            {/* CARD BODY */}
            <div className="portfolio-card-body">
              <div className="portfolio-type">{p.type}</div>
              <div className="portfolio-card-title">{p.title}</div>
              <div className="portfolio-card-desc">{p.desc}</div>

              {/* VIEW LINK */}
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

      {/* CTA */}
      <div className="cta-block">
        <h2>Have a project in mind?</h2>
        <p>Let's build something powerful together.</p>
        <div className="btn-row" style={{ justifyContent: "center" }}>
          <button className="btn-primary" onClick={() => setPage("hire")}>
            Start Your Project
          </button>
        </div>
      </div>

      <Footer setPage={setPage} />
    </div>
  );
}
