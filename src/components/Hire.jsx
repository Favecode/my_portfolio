import { useState } from "react";
import Footer from "./Footer";
import { ACCENT, MUTED } from "../constants";
export default function Hire({ setPage }) {
  const [sent, setSent] = useState(false);

  return (
    <div className="page fade-in">
      <div className="contact-layout">
        <div>
          <div className="eyebrow">Contact</div>
          <h1 className="hero-title" style={{ fontSize: "clamp(2rem,5vw,3rem)" }}>
            Let's build something <span>great together.</span>
          </h1>
          <p className="hero-sub">
            Ready to elevate your digital presence? Whether it's a complex full-stack application
            or a high-performance WordPress site, I'm here to help you engineer success.
          </p>
          <div className="contact-info" style={{ marginTop: "2rem" }}>
            {[
              { icon: "✆", label: "Phone", val: "2349164925583" },
              { icon: "✉", label: "Email", val: "emmanuelonaolapo11@gmail.com" },
              { icon: "𝕏", label: "X (Twitter)", val: "@myfaveguy" },
            ].map(c => (
              <div key={c.label} className="contact-item">
                <div className="contact-icon">{c.icon}</div>
                <div>
                  <div className="contact-label">{c.label}</div>
                  <div className="contact-val">{c.val}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card" style={{ padding: "2rem" }}>
          {sent ? (
            <div style={{ textAlign: "center", padding: "3rem 0" }}>
              <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>✦</div>
              <h3 style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>Message Sent!</h3>
              <p style={{ color: MUTED, fontSize: "0.85rem" }}>I'll get back to you within 24 hours.</p>
            </div>
          ) : (
            <>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Name</label>
                  <input className="form-input" placeholder="John Doe" />
                </div>
                <div className="form-group">
                  <label className="form-label">Email</label>
                  <input className="form-input" placeholder="john@example.com" />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">Project Type</label>
                <select className="form-select">
                  <option>Full-stack Web Application</option>
                  <option>WordPress Site</option>
                  <option>E-commerce Platform</option>
                  <option>SaaS Dashboard</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Message</label>
                <textarea
                  className="form-textarea"
                  placeholder="Tell me about your vision, goals, and any specific requirements..."
                />
              </div>
              <button className="submit-btn" onClick={() => setSent(true)}>
                Send Project Inquiry →
              </button>
            </>
          )}
        </div>
      </div>

      <div className="section">
        <div className="eyebrow" style={{ textAlign: "center" }}>Answers</div>
        <h2 className="section-title" style={{ textAlign: "center", fontSize: "2rem" }}>Quick FAQ</h2>
        <div className="grid-2">
          {[
            { icon: "◎", title: "Project Timelines", body: "Every project is unique. A standard WordPress launch typically takes 4-7 days, while complex full-stack applications range from 1–2 weeks depending on the scope and technical requirements." },
            { icon: "◎", title: "Pricing & Investment", body: "I provide value-based pricing. WordPress projects generally start at $-, while custom web applications begin at $-. Each quote is tailored to the specific business impact and technical complexity of your request." },
          ].map(f => (
            <div key={f.title} className="card">
              <div style={{ color: ACCENT, marginBottom: "0.5rem" }}>{f.icon}</div>
              <div style={{ fontSize: "1rem", fontWeight: 700, color: ACCENT, marginBottom: "0.6rem" }}>{f.title}</div>
              <div className="card-text">{f.body}</div>
            </div>
          ))}
        </div>
      </div>

      <Footer setPage={setPage} />
    </div>
  );
}
