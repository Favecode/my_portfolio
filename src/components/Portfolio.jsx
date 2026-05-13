import { useState } from "react";
import Footer from "./Footer";
import "../index.css";
import { projects } from "../constants";

export default function Portfolio({ setPage }) {
  const [filter, setFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const filtered =
    filter === "all"
      ? projects
      : projects.filter((p) => p.filter === filter);

  return (
    <div className="page fade-in">
      {/* HEADER */}
      <div style={{ padding: "4rem 2.5rem 2rem", maxWidth: 900 }}>
        <div className="eyebrow">Featured Works</div>
        <h1 className="hero-title">
          Custom-engineered <span>solutions</span>.
        </h1>
        <p className="hero-sub">
          A selection spanning full-stack applications and WordPress systems.
        </p>
      </div>

      {/* FILTER */}
      <div className="filter-row">
        {["all", "full-stack", "wordpress"].map((f) => (
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
      <div className="portfolio-grid" style={{ maxWidth: 1100, margin: "0 auto" }}>
        {filtered.map((p, i) => (
          <div key={p.id} className={`portfolio-card fade-in stagger-${(i % 5) + 1}`}>
            
            {/* MAIN IMAGE */}
            <div className="portfolio-img">
              <img src={p.images[0]} alt={p.title} />
            </div>

            <div className="portfolio-card-body">
              <div className="portfolio-type">{p.type}</div>
              <div className="portfolio-card-title">{p.title}</div>
              <div className="portfolio-card-desc">{p.desc}</div>

              {/* CLICK BUTTON */}
              <div
                className="view-link"
                style={{ cursor: "pointer" }}
                onClick={() => setSelectedProject(p)}
              >
                View Project →
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ✅ MODAL (IMAGE POPUP) */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            
            <h2 style={{ marginBottom: "1rem" }}>
              {selectedProject.title}
            </h2>

            <div className="modal-grid">
              {selectedProject.images.map((img, i) => (
                <img key={i} src={img} alt="" className="modal-img" />
              ))}
            </div>

            <button
              className="btn-primary"
              style={{ marginTop: "1rem" }}
              onClick={() => setSelectedProject(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* CTA */}
      <div className="cta-block">
        <h2>Have a project in mind?</h2>
        <p>Let’s build something powerful together.</p>

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