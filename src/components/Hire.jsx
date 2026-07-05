import { useState } from "react";
import Footer from "./Footer";
import { MUTED, ACCENT } from "../constants";
import { ChevronDown, ChevronUp } from "lucide-react";

/* ── FAQ Accordion item ── */
function FAQItem({ q, a, isOpen, onToggle }) {
  return (
    <div className={`faq-item${isOpen ? " open" : ""}`} onClick={onToggle}>
      <div className="faq-question">
        <span>{q}</span>
        {isOpen ? <ChevronUp size={18} color={ACCENT} /> : <ChevronDown size={18} />}
      </div>
      {isOpen && <div className="faq-answer">{a}</div>}
    </div>
  );
}

const FAQS = [
  {
    q: "How long does a typical project take?",
    a: "Most landing pages and small sites are delivered in 5–7 days. Larger projects typically take 2–4 weeks depending on complexity.",
  },
  {
    q: "Do you work with international clients?",
    a: "Yes — I work with clients across Nigeria and internationally. Remote collaboration is not an issue.",
  },
  {
    q: "What do you need from me to get started?",
    a: "A short project description, goals, and timeline. I’ll guide you through the rest.",
  },
  {
    q: "How do payments work?",
    a: "Deposit upfront, balance on completion. For large projects, milestones are used.",
  },
  {
    q: "Do you offer post-launch support?",
    a: "Yes. Free bug fixes after launch, with optional monthly maintenance.",
  },
  {
    q: "Can you work with my existing codebase?",
    a: "Absolutely. I can work with React, WordPress, and existing projects.",
  },
];

export default function Hire({ setPage }) {
  const [sent, setSent] = useState(false);
  const [openFAQ, setOpenFAQ] = useState(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    projectType: "Web Development Project",
    message: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) {
      alert("Please fill all required fields");
      return;
    }

    // 🔴 YOUR WHATSAPP NUMBER (no +, no spaces)
    const phoneNumber = "2349164925583";

    const text = `
New Project Inquiry 🚀

Name: ${form.name}
Email: ${form.email}
Project Type: ${form.projectType}

Message:
${form.message}
`;

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      text
    )}`;

    window.open(whatsappURL, "_blank");

    setSent(true);
    setForm({
      name: "",
      email: "",
      projectType: "Web Development Project",
      message: "",
    });
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
            Ready to elevate your digital presence? Whether it's a custom web app
            or a high-performance website, I'm ready to help.
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

          <div className="availability-card">
            <div className="availability-dot" />
            <div>
              <div className="availability-title">Currently Available</div>
              <div className="availability-desc">
                Open to freelance projects and remote roles.
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT — FORM */}
        <div className="card" style={{ padding: "2rem" }}>
          {sent ? (
            <div style={{ textAlign: "center", padding: "3rem 0" }}>
              <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>🟢</div>
              <h3>WhatsApp Opened!</h3>
              <p style={{ color: MUTED, fontSize: "0.85rem" }}>
                Please tap <b>Send</b> in WhatsApp to complete your message.
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
                  <option>Web Development Project</option>
                  <option>WordPress Site</option>
                  <option>E-commerce Platform</option>
                  <option>Dashboard / Web App</option>
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
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="button"
                className="submit-btn"
                onClick={handleSubmit}
              >
                Send via WhatsApp →
              </button>
            </>
          )}
        </div>
      </div>

      {/* FAQ */}
      <div className="section">
        <div className="eyebrow">FAQ</div>
        <h2 className="section-title">
          Questions clients <span>always ask.</span>
        </h2>

        <div className="faq-list">
          {FAQS.map((faq, i) => (
            <FAQItem
              key={faq.q}
              q={faq.q}
              a={faq.a}
              isOpen={openFAQ === i}
              onToggle={() => setOpenFAQ(openFAQ === i ? null : i)}
            />
          ))}
        </div>
      </div>

      <Footer setPage={setPage} />
    </div>
  );
}