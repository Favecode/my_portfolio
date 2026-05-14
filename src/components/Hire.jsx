import { useState } from "react";
import Footer from "./Footer";
import { ACCENT, MUTED } from "../constants";
import { supabase } from "../supabaseClient";

export default function Hire({ setPage }) {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  // FORM STATE
  const [form, setForm] = useState({
    name: "",
    email: "",
    projectType: "Full-stack Web Application",
    message: ""
  });

  // HANDLE INPUT CHANGE
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // SUBMIT TO SUPABASE
  const handleSubmit = async (e) => {
    if (e) e.preventDefault();

    // basic validation (optional but good)
    if (!form.name || !form.email || !form.message) {
      alert("Please fill all required fields");
      return;
    }

    setLoading(true);

    const { error } = await supabase.from("contacts").insert([
      {
        name: form.name,
        email: form.email,
        project_type: form.projectType,
        message: form.message
      }
    ]);

    setLoading(false);

    if (error) {
      console.error(error);
      alert("Something went wrong. Try again.");
      return;
    }

    setSent(true);

    // reset form after success
    setForm({
      name: "",
      email: "",
      projectType: "Full-stack Web Application",
      message: ""
    });
  };

  return (
    <div className="page fade-in">
      <div className="contact-layout">
        <div>
          <div className="eyebrow">Contact</div>

          <h1
            className="hero-title"
            style={{ fontSize: "clamp(2rem,5vw,3rem)" }}
          >
            Let's build something <span>great together.</span>
          </h1>

          <p className="hero-sub">
            Ready to elevate your digital presence? Whether it's a complex full-stack application
            or a high-performance WordPress site, I'm here to help you engineer success.
          </p>

          <div className="contact-info" style={{ marginTop: "2rem" }}>
            {[
              { icon: "✆", label: "Phone", val: "2349164925583" },
              { icon: "✉", label: "Email", val: "favouronaolapo945@gmail.com" },
              { icon: "𝕏", label: "X (Twitter)", val: "@myfaveguy" }
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

        <div className="card" style={{ padding: "2rem" }}>
          {sent ? (
            <div style={{ textAlign: "center", padding: "3rem 0" }}>
              <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>✦</div>
              <h3 style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>
                Message Sent!
              </h3>
              <p style={{ color: MUTED, fontSize: "0.85rem" }}>
                I'll get back to you within 24 hours.
              </p>

              <button
                onClick={() => setSent(false)}
                style={{
                  marginTop: "1rem",
                  padding: "10px 16px",
                  cursor: "pointer"
                }}
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