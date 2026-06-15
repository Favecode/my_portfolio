import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Footer from "./Footer";
import { MUTED } from "../constants";

// ─── EmailJS Credentials (USE YOUR REAL PUBLIC KEY) ────────────────
const SERVICE_ID  = "service_81owciq";
const TEMPLATE_ID = "template_hyx525o";
const PUBLIC_KEY  = "GIM0M0rWD-mnRFJnv"; // ← REPLACE THIS
// ───────────────────────────────────────────────────────────────────

export default function Hire({ setPage }) {
  const formRef = useRef(null);
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    projectType: "Full-stack Web Application",
    message: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) {
      alert("Please fill all required fields");
      return;
    }

    setLoading(true);

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          project_type: form.projectType,
          message: form.message,
          to_name: "Favour",
        },
        PUBLIC_KEY
      );

      setSent(true);
      setForm({
        name: "",
        email: "",
        projectType: "Full-stack Web Application",
        message: "",
      });
    } catch (err) {
      console.error("EmailJS error:", err);
      alert(
        "Failed to send message.\n\n" +
        (err.text || err.message || "Unknown error")
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page fade-in">
      <div className="contact-layout">

        {/* LEFT — INFO */}
        <div>
          <div className="eyebrow">Contact</div>
          <h1 className="hero-title">
            Let's build something <span>great together.</span>
          </h1>

          <p className="hero-sub" style={{ marginTop: "1rem" }}>
            Ready to elevate your digital presence? Whether it's a complex
            full-stack application or a high-performance WordPress site,
            I'm here to engineer your success.
          </p>

          <div className="contact-info" style={{ marginTop: "2rem" }}>
            {[
              { icon: "✆", label: "Phone", val: "+234 916 492 5583" },
              { icon: "✉", label: "Email", val: "faveecodes5@gmail.com" },
              { icon: "𝕏", label: "X (Twitter)", val: "@myfaveguy" },
            ].map((c) => (
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

        {/* RIGHT — FORM */}
        <div className="card" style={{ padding: "2rem" }}>
          {sent ? (
            <div style={{ textAlign: "center", padding: "3rem 0" }}>
              <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>✦</div>
              <h3 style={{ marginBottom: "0.5rem" }}>Message Sent!</h3>
              <p style={{ color: MUTED, fontSize: "0.85rem" }}>
                I'll get back to you within 24 hours.
              </p>

              <button
                className="btn-ghost"
                style={{ marginTop: "1rem" }}
                onClick={() => setSent(false)}
              >
                Send another message
              </button>
            </div>
          ) : (
            <>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Name</label>
                  <input
                    className="form-input"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Email</label>
                  <input
                    className="form-input"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Project Type</label>
                <select
                  className="form-select"
                  name="projectType"
                  value={form.projectType}
                  onChange={handleChange}
                >
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
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your vision, goals, and requirements..."
                />
              </div>

              <button
                type="button"
                className="submit-btn"
                onClick={handleSubmit}
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Project Inquiry →"}
              </button>
            </>
          )}
        </div>
      </div>

      <Footer setPage={setPage} />
    </div>
  );
}