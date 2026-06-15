import { useState } from "react";
import Footer from "./Footer";
import { projects } from "../constants";

export default function Portfolio({ setPage }) {
  const [filter, setFilter] = useState("all");

  const filtered =
    filter === "all" ? projects : projects.filter((p) => p.filter === filter);

  return (
    <div className="page fade-in">

      {/* HEADER */}
      <div className="section" style={{ paddingBottom: "1rem" }}>
        <div className="eyebrow">Featured Works</div>
        <h1 className="hero-title">
          Custom-engineered <span>solutions</span>.
        </h1>
        <p className="hero-sub" style={{ marginTop: "0.75rem" }}>
          A selection spanning full-stack applications and WordPress systems.
        </p>
      </div>

      {/* FILTER */}
      <div className="filter-row">
        {["all", "full-stack"].map((f) => (
          <button
            key={f}
            className={`filter-btn ${filter === f ? "active" : ""}`}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>

      {/* PROJECT GRID */}
      <div className="portfolio-grid">
        {filtered.map((p, i) => (
          <div key={p.id} className={`portfolio-card fade-in stagger-${(i % 5) + 1}`}>
            <div className="portfolio-img">
              <img src={p.image} alt={p.title} />
            </div>
            <div className="portfolio-card-body">
              <div className="portfolio-type">{p.type}</div>
              <div className="portfolio-card-title">{p.title}</div>
              <div className="portfolio-card-desc">{p.desc}</div>
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="view-link"
              >
                View Project →
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
