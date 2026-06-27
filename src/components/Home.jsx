import { useEffect, useRef, useState } from "react";
import Footer from "./Footer";
import { ACCENT } from "../constants";
import { projects } from "../constants";
import {
  Code2, Server, Globe, Layers, GitBranch, Cloud, Database, Cpu,
  ShoppingCart, Search, Wrench, RefreshCw, ChevronDown, ChevronUp,
  Star, CheckCircle, Zap, Shield, Smartphone, TrendingUp, MessageCircle,
  Calendar, Clock, ArrowRight,
} from "lucide-react";
import { FaLinkedin, FaTwitter, FaTiktok } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { createPortal } from "react-dom";

/* ── Animated counter hook ── */
function useCountUp(target, duration = 1800, suffix = "") {
  const [display, setDisplay] = useState("0" + suffix);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true); },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const numericTarget = parseInt(target.replace(/\D/g, ""), 10);
    const prefix = target.replace(/[0-9]/g, "").replace(suffix, "");
    const start = performance.now();
    const tick = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * numericTarget);
      setDisplay(prefix + current + suffix);
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [started, target, duration, suffix]);

  return { ref, display };
}

function StatItem({ num, suffix, label }) {
  const { ref, display } = useCountUp(num, 1800, suffix);
  return (
    <div ref={ref} className="home-stat-item">
      <div className="home-stat-num">{display}</div>
      <div className="home-stat-label">{label}</div>
    </div>
  );
}

/* ── Scroll reveal hook ── */
function useReveal(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

/* ── Testimonial carousel ── */
const testimonials = [
  {
    text: "Working with Favour transformed our online presence. Our website now loads faster, ranks better on Google, and generates far more enquiries than before.",
    author: "Adebayo O.",
    role: "CEO, Retail Business",
    stars: 5,
  },
  {
    text: "Our eCommerce website increased online sales within weeks of launching. The Paystack integration and product management system work flawlessly.",
    author: "Chioma N.",
    role: "Founder, Fashion Brand",
    stars: 5,
  },
  {
    text: "Professional, reliable and delivered exactly what we wanted. Our new corporate website reflects our brand identity perfectly.",
    author: "Emeka J.",
    role: "Director, Consulting Firm",
    stars: 5,
  },
  {
    text: "The attention to detail was outstanding. Favour communicated clearly at every stage and the final result exceeded our expectations.",
    author: "Amaka T.",
    role: "Marketing Manager, NGO",
    stars: 5,
  },
  {
    text: "Our website now ranks on page one of Google for our target keywords. The SEO work alone has been worth the investment many times over.",
    author: "Kunle A.",
    role: "Owner, Tech Startup",
    stars: 5,
  },
];

function TestimonialCarousel() {
  const [active, setActive] = useState(0);
  const total = testimonials.length;

  useEffect(() => {
    const t = setInterval(() => setActive((a) => (a + 1) % total), 5000);
    return () => clearInterval(t);
  }, [total]);

  const t = testimonials[active];
  return (
    <div className="testimonial-carousel">
      <div className="testimonial-card-main">
        <div className="testimonial-stars">
          {Array.from({ length: t.stars }).map((_, i) => (
            <Star key={i} size={16} fill="#00e5b0" color="#00e5b0" />
          ))}
        </div>
        <p className="testimonial-text">"{t.text}"</p>
        <div className="testimonial-author">
          <div className="testimonial-avatar">{t.author[0]}</div>
          <div>
            <div className="testimonial-name">{t.author}</div>
            <div className="testimonial-role">{t.role}</div>
          </div>
        </div>
      </div>
      <div className="testimonial-dots">
        {testimonials.map((_, i) => (
          <button
            key={i}
            className={`testimonial-dot${i === active ? " active" : ""}`}
            onClick={() => setActive(i)}
            aria-label={`Go to review ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

/* ── FAQ data ── */
const faqs = [
  {
    q: "How much does a website cost in Nigeria?",
    a: "Website pricing depends on your goals and features. A corporate website starts from ₦250,000, an eCommerce website from ₦350,000, and custom web applications from ₦500,000. Every project includes a free consultation to define your exact requirements and provide a precise quote.",
  },
  {
    q: "How long does website development take?",
    a: "A standard corporate website takes 1–2 weeks. An eCommerce website typically takes 2–4 weeks. Custom web applications vary by complexity but are usually delivered within 4–8 weeks. Timelines are confirmed during the initial consultation.",
  },
  {
    q: "Do you build eCommerce websites?",
    a: "Yes. I build full-featured eCommerce websites with Paystack and Flutterwave payment integration, product management, shopping cart, order tracking, customer dashboards, and SEO optimisation — designed specifically for Nigerian businesses.",
  },
  {
    q: "Can you redesign my existing website?",
    a: "Absolutely. Website redesign is one of my core services. I assess your current site, identify what's costing you leads and sales, and rebuild it with modern design, better performance, and stronger SEO — without losing your existing search rankings.",
  },
  {
    q: "Do you provide SEO services?",
    a: "Yes. Every website I build includes on-page SEO: semantic HTML structure, optimised meta tags, schema markup, image alt tags, and fast loading times. I also offer ongoing SEO as a separate service to grow your Google rankings over time.",
  },
  {
    q: "Will my website rank on Google?",
    a: "Good website structure is only the foundation — consistent SEO work determines your rankings. I build every site to Google's best practices (Core Web Vitals, mobile-first, structured data) and offer monthly SEO services to improve your visibility over time.",
  },
  {
    q: "Do you offer website maintenance?",
    a: "Yes. I offer monthly maintenance packages covering security updates, performance monitoring, backups, content updates, and technical support — so your website stays fast, secure, and up to date without any effort on your part.",
  },
  {
    q: "Can I update my website myself?",
    a: "Yes. All websites are built with an easy-to-use content management system (CMS). I also provide training so you can update text, images, blog posts, and products yourself without any technical knowledge.",
  },
  {
    q: "What technologies do you use?",
    a: "I use React, Next.js, and Tailwind CSS for modern frontends; Node.js, Python, and PostgreSQL for backend systems; and WordPress with custom themes and plugins for CMS-based projects. All projects are hosted on cloud infrastructure for reliability and speed.",
  },
  {
    q: "How do we get started?",
    a: "Simply click 'Get Free Consultation' or message me on WhatsApp at +2349164925583. We'll discuss your project goals, timeline, and budget — then I'll provide a clear proposal and project plan within 24 hours.",
  },
];

function FAQ() {
  const [open, setOpen] = useState(null);
  return (
    <div className="faq-list" itemScope itemType="https://schema.org/FAQPage">
      {faqs.map((item, i) => (
        <div
          key={i}
          className={`faq-item${open === i ? " open" : ""}`}
          itemScope
          itemProp="mainEntity"
          itemType="https://schema.org/Question"
        >
          <button
            className="faq-question"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            <span itemProp="name">{item.q}</span>
            <span className="faq-toggle-icon">
              {open === i ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </span>
          </button>
          {open === i && (
            <div
              className="faq-answer"
              itemScope
              itemProp="acceptedAnswer"
              itemType="https://schema.org/Answer"
            >
              <p itemProp="text">{item.a}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

/* ── Blog articles ── */
const blogPosts = [
  {
    id: 1,
    category: "Web Design",
    date: "June 10, 2026",
    readTime: "8 min read",
    title: "How Much Does a Business Website Cost in Nigeria in 2026?",
    desc: "A transparent, up-to-date breakdown of website pricing in Nigeria — from simple landing pages to full eCommerce platforms — so you can budget confidently.",
    color: "#00e5b0",
    initials: "₦",
  },
  {
    id: 2,
    category: "Business Growth",
    date: "May 28, 2026",
    readTime: "6 min read",
    title: "10 Reasons Every Business Needs a Professional Website",
    desc: "Discover why a professionally designed, SEO-optimised website is the most powerful marketing asset for any Nigerian business in 2026.",
    color: "#7c6dfa",
    initials: "10",
  },
  {
    id: 3,
    category: "SEO",
    date: "May 14, 2026",
    readTime: "7 min read",
    title: "How SEO Helps Small Businesses Get More Customers",
    desc: "Learn how strategic SEO can place your business in front of customers who are actively searching for your products and services on Google.",
    color: "#fa8c16",
    initials: "🔍",
  },
  {
    id: 4,
    category: "Digital Strategy",
    date: "April 30, 2026",
    readTime: "5 min read",
    title: "Website vs Social Media: Which One Grows Your Business Faster?",
    desc: "A practical comparison of websites and social media for Nigerian businesses — and why the smartest brands use both strategically.",
    color: "#f759ab",
    initials: "vs",
  },
  {
    id: 5,
    category: "Website Tips",
    date: "April 12, 2026",
    readTime: "6 min read",
    title: "The Biggest Website Mistakes That Cost Businesses Sales",
    desc: "Avoid the most common website design and SEO mistakes that silently drive potential customers away from your site every single day.",
    color: "#ff4d4f",
    initials: "!",
  },
];

export default function Home({ setPage }) {
  const heroReveal = useReveal(0.1);
  const logosReveal = useReveal(0.1);
  const whyReveal = useReveal(0.1);
  const pricingReveal = useReveal(0.1);
  const blogReveal = useReveal(0.1);
  const testimonialReveal = useReveal(0.1);
  const faqReveal = useReveal(0.1);

  return (
    <div className="page fade-in">

      {/* ═══════════════════════════════════
           SEO META (injected into <head> via Helmet or similar)
           Placed as comments here for developer reference:
           <title>Professional Website Designer & Full Stack Web Developer in Nigeria | Favour Emmanuel</title>
           <meta name="description" content="Hire Nigeria's top website designer and full stack web developer. Fast, SEO-optimized, mobile-responsive websites for businesses, startups and eCommerce brands." />
      ═══════════════════════════════════ */}

      {/* ═══════════════════════════════════
           HERO — SaaS-style, no photo
      ═══════════════════════════════════ */}
      <section
        className={`hero-saas reveal${heroReveal.visible ? " visible" : ""}`}
        ref={heroReveal.ref}
        aria-label="Hero"
      >
        {/* Background grid decoration */}
        <div className="hero-grid-bg" aria-hidden="true" />

        <div className="hero-saas-inner">
          <div className="eyebrow hero-eyebrow">
            🇳🇬 &nbsp;Nigeria's #1 Web Developer &amp; Designer
          </div>

          <h1 className="hero-saas-title">
            Professional Website Designer &amp; <span>Full Stack Web Developer</span> in Nigeria
          </h1>

          <p className="hero-saas-sub">
            I help businesses, startups and eCommerce brands build fast, SEO-optimized websites
            that attract customers, increase sales and grow revenue.
          </p>

          <div className="btn-row hero-saas-btns">
            <button className="btn-primary btn-glow-pulse" onClick={() => setPage("hire")}>
              Get Free Consultation →
            </button>
            <button className="btn-ghost" onClick={() => setPage("portfolio")}>
              View Portfolio
            </button>
          </div>

          {/* Trust badges */}
          <div className="hero-trust-badges">
            {[
              { icon: <Search size={13} />, label: "SEO Optimized" },
              { icon: <Smartphone size={13} />, label: "Mobile Responsive" },
              { icon: <Zap size={13} />, label: "Fast Loading" },
              { icon: <Shield size={13} />, label: "Secure" },
              { icon: <TrendingUp size={13} />, label: "Google Friendly" },
              { icon: <ShoppingCart size={13} />, label: "eCommerce Ready" },
            ].map((b) => (
              <div key={b.label} className="hero-trust-badge">
                <span className="hero-trust-icon">{b.icon}</span>
                <span>{b.label}</span>
              </div>
            ))}
          </div>

          {/* Socials */}
          <div className="home-socials" style={{ marginTop: "1.8rem" }}>
            <a href="https://wa.me/2349164925583" target="_blank" rel="noreferrer" title="WhatsApp">
              <FaWhatsapp size={18} />
            </a>
            <a href="https://www.linkedin.com/in/favour-onaolapo-a78b99416" target="_blank" rel="noreferrer" title="LinkedIn">
              <FaLinkedin size={18} />
            </a>
            <a href="https://x.com/myfaveguy" target="_blank" rel="noreferrer" title="X / Twitter">
              <FaTwitter size={18} />
            </a>
            <a href="https://www.tiktok.com/@myfaveguy" target="_blank" rel="noreferrer" title="TikTok">
              <FaTiktok size={18} />
            </a>
          </div>
        </div>

        {/* Stats strip */}
        <div className="home-stats hero-saas-stats">
          <StatItem num="20" suffix="+" label="Projects Delivered" />
          <StatItem num="3" suffix="+" label="Years Experience" />
          <StatItem num="100" suffix="%" label="Client Satisfaction" />
          <StatItem num="2" suffix="x" label="Faster Delivery" />
        </div>
      </section>

      {/* ═══════════════════════════════════
           TRUSTED BY — LOGO STRIP
      ═══════════════════════════════════ */}
      <section
        className={`logos-section reveal${logosReveal.visible ? " visible" : ""}`}
        ref={logosReveal.ref}
        aria-label="Trusted by businesses and startups"
      >
        <div className="logos-inner">
          <div className="eyebrow" style={{ textAlign: "center", marginBottom: "1.5rem" }}>
            Trusted by Businesses &amp; Startups Across Nigeria
          </div>
          <div className="logos-track" aria-hidden="true">
            {["RetailNG", "StartHub", "ShopEase", "FinEdge", "GreenBuild", "SwiftPay", "NovaTech", "BrandXcel"].map((name) => (
              <div key={name} className="logo-placeholder">{name}</div>
            ))}
            {/* Duplicate for seamless loop */}
            {["RetailNG", "StartHub", "ShopEase", "FinEdge", "GreenBuild", "SwiftPay", "NovaTech", "BrandXcel"].map((name) => (
              <div key={name + "-dup"} className="logo-placeholder" aria-hidden="true">{name}</div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
           WHY CLIENTS CHOOSE ME
      ═══════════════════════════════════ */}
      <section
        className={`section reveal${whyReveal.visible ? " visible" : ""}`}
        ref={whyReveal.ref}
        aria-labelledby="why-title"
      >
        <div className="section-header-row">
          <div>
            <div className="eyebrow">Why Clients Choose Me</div>
            <h2 className="section-title" id="why-title">
              Everything you need to <span>grow online.</span>
            </h2>
          </div>
        </div>

        <div className="grid-3" style={{ gap: "1rem" }}>
          {[
            {
              icon: <Globe size={18} />,
              title: "Modern Website Design",
              desc: "Pixel-perfect, fast-loading websites built to reflect your brand and convert visitors into customers.",
            },
            {
              icon: <ShoppingCart size={18} />,
              title: "eCommerce Development",
              desc: "Full-featured online stores with Paystack & Flutterwave integration, product management, and order tracking.",
            },
            {
              icon: <Search size={18} />,
              title: "SEO Optimization",
              desc: "Strategic on-page SEO, schema markup, and Core Web Vitals optimisation so Google finds and ranks your site.",
            },
            {
              icon: <Code2 size={18} />,
              title: "WordPress Development",
              desc: "Custom WordPress themes and plugins built from scratch — fast, secure, and easy for you to manage.",
            },
            {
              icon: <Wrench size={18} />,
              title: "Website Maintenance",
              desc: "Monthly maintenance packages covering security, backups, updates, and performance monitoring.",
            },
            {
              icon: <RefreshCw size={18} />,
              title: "Website Redesign",
              desc: "Transform your outdated website into a modern, high-performing asset that attracts and converts customers.",
            },
          ].map((s) => (
            <div key={s.title} className="card">
              <div className="card-icon">{s.icon}</div>
              <div className="card-title">{s.title}</div>
              <div className="card-text">{s.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════
           PRICING
      ═══════════════════════════════════ */}
      <section
        className={`section pricing-section reveal${pricingReveal.visible ? " visible" : ""}`}
        ref={pricingReveal.ref}
        aria-labelledby="pricing-title"
        style={{ background: "linear-gradient(180deg, transparent 0%, rgba(0,229,176,0.02) 100%)" }}
      >
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <div className="eyebrow">Website Pricing</div>
          <h2 className="section-title" id="pricing-title">
            Choose the package that <span>fits your business.</span>
          </h2>
          <p style={{ color: "#7a9990", fontSize: "0.9rem", marginTop: "0.5rem" }}>
            All prices are in Nigerian Naira. Free consultation included.
          </p>
        </div>

        <div className="pricing-grid">
          {/* Corporate */}
          <div className="pricing-card">
            <div className="pricing-tier">Corporate Website</div>
            <div className="pricing-price">₦250,000 <span className="pricing-dash">—</span> ₦350,000</div>
            <div className="pricing-desc">Perfect for businesses that need a professional online presence.</div>
            <ul className="pricing-features">
              {["Up to 10 pages","Mobile Responsive","Contact Form","WhatsApp Integration","Google Maps","Basic SEO","SSL Certificate","Speed Optimization","Social Media Integration","Training Included"].map(f => (
                <li key={f}><CheckCircle size={13} style={{ color: "#00e5b0", flexShrink: 0 }} /><span>{f}</span></li>
              ))}
            </ul>
            <button className="btn-ghost pricing-btn" onClick={() => setPage("hire")}>Get Started →</button>
          </div>

          {/* E-commerce — highlighted */}
          <div className="pricing-card pricing-card-featured">
            <div className="pricing-popular">Most Popular</div>
            <div className="pricing-tier">E-commerce Website</div>
            <div className="pricing-price">₦350,000 <span className="pricing-dash">—</span> ₦500,000</div>
            <div className="pricing-desc">Built for brands ready to sell products and grow revenue online.</div>
            <ul className="pricing-features">
              {["Unlimited Products","Shopping Cart","Secure Checkout","Flutterwave Integration","Paystack Integration","Inventory Management","Customer Dashboard","Order Tracking","Product Search","Coupon System","Email Notifications","SEO Ready"].map(f => (
                <li key={f}><CheckCircle size={13} style={{ color: "#00e5b0", flexShrink: 0 }} /><span>{f}</span></li>
              ))}
            </ul>
            <button className="btn-primary pricing-btn" onClick={() => setPage("hire")}>Start Selling →</button>
          </div>

          {/* Custom App */}
          <div className="pricing-card">
            <div className="pricing-tier">Custom Web Application</div>
            <div className="pricing-price">From ₦500,000<span style={{ fontSize: "1rem" }}>+</span></div>
            <div className="pricing-desc">Tailored solutions for complex workflows, dashboards, and platforms.</div>
            <ul className="pricing-features">
              {["Custom Dashboard","Authentication System","API Integration","Database Architecture","Admin Panel","Analytics & Reports","Cloud Deployment","Advanced Security","Scalable Architecture","Priority Support"].map(f => (
                <li key={f}><CheckCircle size={13} style={{ color: "#00e5b0", flexShrink: 0 }} /><span>{f}</span></li>
              ))}
            </ul>
            <button className="btn-ghost pricing-btn" onClick={() => setPage("hire")}>Book Consultation →</button>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
           BLOG
      ═══════════════════════════════════ */}
      <section
        className={`section reveal${blogReveal.visible ? " visible" : ""}`}
        ref={blogReveal.ref}
        aria-labelledby="blog-title"
      >
        <div className="section-header-row">
          <div>
            <div className="eyebrow">Latest Articles</div>
            <h2 className="section-title" id="blog-title">
              Expert insights on <span>websites &amp; growth.</span>
            </h2>
            <p style={{ color: "#7a9990", fontSize: "0.87rem", marginTop: "0.4rem" }}>
              SEO tips, digital marketing strategies and business growth guides for Nigerian entrepreneurs.
            </p>
          </div>
        </div>

        <div className="blog-grid">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="blog-card"
              itemScope
              itemType="https://schema.org/BlogPosting"
            >
              <div className="blog-img" style={{ background: `linear-gradient(135deg, ${post.color}22, ${post.color}08)`, borderBottom: `1px solid ${post.color}22` }}>
                <span className="blog-img-initials" style={{ color: post.color }}>{post.initials}</span>
              </div>
              <div className="blog-body">
                <div className="blog-meta">
                  <span className="blog-category" style={{ color: post.color }}>{post.category}</span>
                  <span className="blog-meta-sep">·</span>
                  <span className="blog-date"><Calendar size={11} style={{ verticalAlign: "middle", marginRight: 3 }} />{post.date}</span>
                  <span className="blog-meta-sep">·</span>
                  <span className="blog-readtime"><Clock size={11} style={{ verticalAlign: "middle", marginRight: 3 }} />{post.readTime}</span>
                </div>
                <h3 className="blog-title" itemProp="headline">{post.title}</h3>
                <p className="blog-desc" itemProp="description">{post.desc}</p>
                <button
                  className="blog-read-more"
                  onClick={() => setPage("blog")}
                  aria-label={`Read ${post.title}`}
                >
                  Read Article <ArrowRight size={13} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════
           TESTIMONIALS
      ═══════════════════════════════════ */}
      <section
        className={`section testimonial-section reveal${testimonialReveal.visible ? " visible" : ""}`}
        ref={testimonialReveal.ref}
        aria-labelledby="testimonials-title"
        style={{ background: "linear-gradient(180deg, transparent 0%, rgba(0,229,176,0.015) 100%)" }}
      >
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <div className="eyebrow">Client Testimonials</div>
          <h2 className="section-title" id="testimonials-title">
            What clients say about <span>working with me.</span>
          </h2>
        </div>
        <TestimonialCarousel />
      </section>

      {/* ═══════════════════════════════════
           FAQ
      ═══════════════════════════════════ */}
      <section
        className={`section reveal${faqReveal.visible ? " visible" : ""}`}
        ref={faqReveal.ref}
        aria-labelledby="faq-title"
      >
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <div className="eyebrow">FAQ</div>
          <h2 className="section-title" id="faq-title">
            Frequently asked <span>questions.</span>
          </h2>
        </div>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <FAQ />
        </div>
      </section>

      {/* ══════════════════════════════════
           PORTFOLIO PREVIEW  [UNCHANGED]
      ══════════════════════════════════ */}
      <div className="section">
        <div className="section-header-row">
          <div>
            <div className="eyebrow">Featured Works</div>
            <h2 className="section-title">Custom-engineered <span>solutions</span>.</h2>
          </div>
          <button className="btn-ghost" onClick={() => setPage("portfolio")} style={{ flexShrink: 0 }}>
            View All →
          </button>
        </div>

        <div className="portfolio-grid" style={{ padding: 0 }}>
          {projects.slice(0, 3).map((p, i) => (
            <div key={p.id} className={`portfolio-card fade-in stagger-${i + 1}`}>
              <div className="portfolio-img">
                <img src={p.image} alt={p.title} loading="lazy" />
              </div>
              <div className="portfolio-card-body">
                <div className="portfolio-type">{p.type}</div>
                <div className="portfolio-card-title">{p.title}</div>
                <div className="portfolio-card-desc">{p.desc}</div>
                <a href={p.link} target="_blank" rel="noopener noreferrer" className="view-link">
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>


      {/* ══════════════════════════════════
           STACK PREVIEW  [UNCHANGED]
      ══════════════════════════════════ */}
      <div className="section">
        <div className="section-header-row">
          <div>
            <div className="eyebrow">Technical Ecosystem</div>
            <h2 className="section-title">Crafting excellence with a <span>modern stack.</span></h2>
          </div>
          <button className="btn-ghost" onClick={() => setPage("stack")} style={{ flexShrink: 0 }}>
            Full Stack →
          </button>
        </div>

        <div className="home-stack-grid">
          {[
            { icon: Code2,     name: "React / Next.js",  color: "#61dafb" },
            { icon: Layers,    name: "Tailwind CSS",     color: "#38bdf8" },
            { icon: Server,    name: "Node.js",          color: "#8cc84b" },
            { icon: Cpu,       name: "Python / Django",  color: "#ffd43b" },
            { icon: Database,  name: "PostgreSQL",       color: "#336791" },
            { icon: Globe,     name: "WordPress",        color: "#21759b" },
            { icon: Cloud,     name: "AWS / Cloud",      color: "#ff9900" },
            { icon: GitBranch, name: "Docker / Git",     color: ACCENT },
          ].map((t) => (
            <div key={t.name} className="home-stack-pill">
              <t.icon size={16} style={{ color: t.color, flexShrink: 0 }} />
              <span>{t.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════
           CTA  [UNCHANGED]
      ══════════════════════════════════ */}
      <div className="cta-block">
        <h2>Let's build your next web solution</h2>
        <p>
          Full-stack applications and WordPress systems designed for performance,
          scalability, and measurable growth.
        </p>
        <div className="btn-row" style={{ justifyContent: "center" }}>
          <button className="btn-primary" onClick={() => setPage("hire")}>
            Start a Project
          </button>
          <button className="btn-ghost" onClick={() => setPage("portfolio")}>
            See My Work
          </button>
        </div>
      </div>

      <Footer setPage={setPage} />

      {/* ══════════════════════════════════
           FLOATING WHATSAPP BUTTON
      ══════════════════════════════════ */}
     {createPortal(
  <a 
    href="https://wa.me/2349164925583?text=Hi%20Favour%2C%20I%20want%20a%20website%20for%20my%20business."
    target="_blank"
    rel="noreferrer"
    className="whatsapp-float"
    aria-label="Chat on WhatsApp"
    title="Chat on WhatsApp"
  >
    <FaWhatsapp size={28} />
    <span className="whatsapp-float-pulse" aria-hidden="true" />
  </a>,
  document.body
)}

      {/* ══════════════════════════════════
           JSON-LD SCHEMA
      ══════════════════════════════════ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Person",
                "@id": "https://favecodes.com.ng/#person",
                "name": "Favour Emmanuel Onaolapo",
                "jobTitle": "Full Stack Web Developer & Website Designer",
                "url": "https://favecodes.com.ng",
                "sameAs": [
                  "https://www.linkedin.com/in/favour-onaolapo-a78b99416",
                  "https://x.com/myfaveguy",
                  "https://www.tiktok.com/@myfaveguy"
                ],
                "address": {
                  "@type": "PostalAddress",
                  "addressCountry": "NG",
                  "addressRegion": "Nigeria"
                }
              },
              {
                "@type": "LocalBusiness",
                "@id": "https://favecodes.com.ng/#business",
                "name": "Favour Emmanuel – Web Developer Nigeria",
                "description": "Professional website designer and full stack web developer in Nigeria. I build fast, SEO-optimized websites for businesses, startups and eCommerce brands.",
                "url": "https://favecodes.com.ng",
                "telephone": "+2349164925583",
                "priceRange": "₦₦",
                "address": {
                  "@type": "PostalAddress",
                  "addressCountry": "NG"
                },
                "areaServed": "Nigeria",
                "serviceType": ["Website Design", "Web Development", "SEO", "WordPress Development", "eCommerce Development"]
              }
            ]
          }),
        }}
      />
    </div>
  );
}
