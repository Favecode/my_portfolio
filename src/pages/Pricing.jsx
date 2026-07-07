// ─── src/pages/Pricing.jsx ────────────────────────────────────────────────────
import { useState } from "react";
import "../styles/Pricing.css";
import Footer from "../components/Footer";
import { Icon } from "../components/Icons";
import { useReveal } from "../hooks/index";
import { ACCENT, MUTED, USD_RATE, toUSD } from "../data/constants";

const plans = [
  {
    tier: "Corporate Website",
    ngn:  { label: "₦250,000 – ₦350,000" },
    usd:  { label: `$${toUSD(250000)} – $${toUSD(350000)}` },
    desc: "Perfect for businesses that need a professional online presence.",
    features: [
      "Up to 2-4 pages",
      "Mobile Responsive",
      "Contact Form",
      "WhatsApp Integration",
      "Google Maps",
      "Basic SEO",
      "SSL Certificate",
      "Speed Optimization",
      "Social Media Integration",
      "Training Included",
    ],
    cta:     "Get Started →",
    primary: false,
    popular: false,
  },
  {
    tier: "E-commerce Website",
    ngn:  { label: "₦350,000 – ₦500,000" },
    usd:  { label: `$${toUSD(350000)} – $${toUSD(500000)}` },
    desc: "Built for brands ready to sell products and grow revenue online.",
    features: [
      "Unlimited Products",
      "Shopping Cart",
      "Secure Checkout",
      "Flutterwave Integration",
      "Paystack Integration",
      "Inventory Management",
      "Customer Dashboard",
      "Order Tracking",
      "Product Search",
      "Coupon System",
      "Email Notifications",
      "SEO Ready",
    ],
    cta:     "Start Selling →",
    primary: true,
    popular: true,
  },
  {
    tier: "Custom Web Application",
    ngn:  { label: "From ₦500,000+" },
    usd:  { label: `From $${toUSD(500000)}+` },
    desc: "Tailored solutions for complex workflows, dashboards, and platforms.",
    features: [
      "Custom Dashboard",
      "Authentication System",
      "API Integration",
      "Database Architecture",
      "Admin Panel",
      "Analytics & Reports",
      "Cloud Deployment",
      "Advanced Security",
      "Scalable Architecture",
      "Priority Support",
    ],
    cta:     "Book Consultation →",
    primary: false,
    popular: false,
  },
];

export default function Pricing({ setPage }) {
  const [currency, setCurrency] = useState("ngn"); // "ngn" | "usd"
  const r = useReveal(0.05);

  return (
    <div className="page fade-in">
      <section
        ref={r.ref}
        className={`section reveal${r.visible ? " visible" : ""}`}
        style={{ paddingTop: "clamp(3rem,6vw,5rem)" }}
      >
        {/* ── Header ── */}
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <div className="eyebrow">Website Pricing</div>
          <h1 className="section-title" style={{ fontSize: "clamp(1.8rem,4vw,2.6rem)" }}>
            Choose the package that <span>fits your business.</span>
          </h1>
          <p style={{ color: MUTED, fontSize: "0.9rem", marginTop: "0.5rem" }}>
            All prices shown in Nigerian Naira &amp; US Dollars. Free consultation included.
          </p>
        </div>

        {/* ── Currency toggle ── */}
        <div className="pricing-currency-toggle">
          <span style={{ fontSize: "0.82rem", color: MUTED }}>Show prices in:</span>
          <button
            className={`currency-toggle-btn${currency === "ngn" ? " active" : ""}`}
            onClick={() => setCurrency("ngn")}
          >
            ₦ Naira (NGN)
          </button>
          <button
            className={`currency-toggle-btn${currency === "usd" ? " active" : ""}`}
            onClick={() => setCurrency("usd")}
          >
            $ USD
          </button>
        </div>

        {/* ── Cards ── */}
        <div className="pricing-grid">
          {plans.map((plan) => (
            <div
              key={plan.tier}
              className={`pricing-card${plan.popular ? " pricing-card-featured" : ""}`}
            >
              {plan.popular && <div className="pricing-popular">Most Popular</div>}

              <div className="pricing-tier">{plan.tier}</div>

              {/* Primary price */}
              <div className="pricing-price">
                {currency === "ngn" ? plan.ngn.label : plan.usd.label}
              </div>

              {/* Secondary price — always show both currencies */}
              <div className="pricing-price-usd">
                {currency === "ngn"
                  ? `≈ ${plan.usd.label} USD`
                  : `≈ ${plan.ngn.label} NGN`}
              </div>

              <div className="pricing-desc">{plan.desc}</div>

              <ul className="pricing-features">
                {plan.features.map((f) => (
                  <li key={f}>
                    <Icon.CheckCircle width={13} height={13} style={{ color: ACCENT, flexShrink: 0 }} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`${plan.primary ? "btn-primary" : "btn-ghost"} pricing-btn`}
                onClick={() => setPage("hire")}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        <p style={{ textAlign: "center", color: MUTED, fontSize: "0.78rem", marginTop: "1.5rem" }}>
          * USD prices are approximate at $1 ≈ ₦{USD_RATE.toLocaleString()}.
          International payments accepted via PayPal &amp; Wise.
        </p>
      </section>

      {/* ── CTA ── */}
      <div className="cta-block">
        <h2>Not sure which package fits?</h2>
        <p>Book a free 30-minute consultation — I'll recommend the right solution for your goals and budget.</p>
        <div className="btn-row" style={{ justifyContent: "center" }}>
          <button className="btn-primary" onClick={() => setPage("hire")}>Get Free Consultation</button>
          <button className="btn-ghost"   onClick={() => setPage("portfolio")}>View Portfolio</button>
        </div>
      </div>

      <Footer setPage={setPage} />
    </div>
  );
}
