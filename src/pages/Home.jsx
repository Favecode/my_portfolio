// ─── src/pages/Home.jsx ───────────────────────────────────────────────────────
import { createPortal } from "react-dom";
import "../styles/Home.css";
import Footer from "../components/Footer";
import FAQ from "../components/FAQ";
import TestimonialCarousel from "../components/TestimonialCarousel";
import { Icon } from "../components/Icons";
import { useReveal, useCountUp } from "../hooks/index";
import { projects, blogPosts, faqs, ACCENT, MUTED } from "../data/constants";

// ── Animated stat counter ──
function StatItem({ num, suffix, label }) {
  const { ref, display } = useCountUp(num, 1800, suffix);
  return (
    <div ref={ref} className="home-stat-item">
      <div className="home-stat-num">{display}</div>
      <div className="home-stat-label">{label}</div>
    </div>
  );
}

export default function Home({ setPage }) {
  const heroR      = useReveal(0.05);
  const logosR     = useReveal(0.1);
  const whyR       = useReveal(0.1);
  const portfolioR = useReveal(0.1);
  const stackR     = useReveal(0.1);
  const blogR      = useReveal(0.1);
  const testR      = useReveal(0.1);
  const faqR       = useReveal(0.1);

  const homeBlogPosts = blogPosts.slice(0, 3); // 3 posts on home page

  return (
    <div className="page fade-in">

      {/* ── HERO ── */}
      <section
        ref={heroR.ref}
        className={`hero-saas reveal${heroR.visible ? " visible" : ""}`}
        aria-label="Hero"
      >
        <div className="hero-grid-bg" aria-hidden="true" />
        <div className="hero-saas-inner">
          <div className="eyebrow hero-eyebrow">🇳🇬 &nbsp;Nigeria's #1 Web Developer &amp; Designer</div>
          <h1 className="hero-saas-title">
            Professional Website Designer &amp; <span>Full Stack Web Developer</span> in Nigeria
          </h1>
          <p className="hero-saas-sub">
            I help businesses, startups and eCommerce brands build fast, SEO-optimized websites
            that attract customers, increase sales and grow revenue.
          </p>
          <div className="btn-row hero-saas-btns">
            <button className="btn-primary" onClick={() => setPage("hire")}>Get Free Consultation →</button>
            <button className="btn-ghost"   onClick={() => setPage("portfolio")}>View Portfolio</button>
          </div>
          <div className="hero-trust-badges">
            {[
              { icon: <Icon.Search       width={13} height={13} />, label: "SEO Optimized"      },
              { icon: <Icon.Smartphone   width={13} height={13} />, label: "Mobile Responsive"  },
              { icon: <Icon.Zap          width={13} height={13} />, label: "Fast Loading"        },
              { icon: <Icon.Shield       width={13} height={13} />, label: "Secure"              },
              { icon: <Icon.TrendingUp   width={13} height={13} />, label: "Google Friendly"    },
              { icon: <Icon.ShoppingCart width={13} height={13} />, label: "eCommerce Ready"    },
            ].map((b) => (
              <div key={b.label} className="hero-trust-badge">
                <span className="hero-trust-icon">{b.icon}</span>
                <span>{b.label}</span>
              </div>
            ))}
          </div>
          <div className="home-socials">
            <a href="https://wa.me/2349164925583"                       target="_blank" rel="noreferrer"><Icon.WA       width={18} height={18} /></a>
            <a href="https://linkedin.com/in/favour-onaolapo-a78b99416" target="_blank" rel="noreferrer"><Icon.LinkedIn width={18} height={18} /></a>
            <a href="https://x.com/myfaveguy"                           target="_blank" rel="noreferrer"><Icon.Twitter  width={18} height={18} /></a>
          </div>
        </div>

        {/* Stats strip — always anchored at bottom of hero */}
        <div className="home-stats">
          <StatItem num="20"  suffix="+" label="Projects Delivered"  />
          <StatItem num="3"   suffix="+" label="Years Experience"     />
          <StatItem num="100" suffix="%" label="Client Satisfaction"  />
          <StatItem num="2"   suffix="x" label="Faster Delivery"      />
        </div>
      </section>

      {/* ── LOGO MARQUEE ── */}
      <section
        ref={logosR.ref}
        className={`logos-section reveal${logosR.visible ? " visible" : ""}`}
        aria-label="Trusted by"
      >
        <div className="logos-inner">
          <div className="eyebrow" style={{ textAlign: "center", marginBottom: "1.5rem" }}>
            Trusted by Businesses &amp; Startups Across Nigeria
          </div>
          <div className="logos-track" aria-hidden="true">
            {["RetailNG","StartHub","ShopEase","FinEdge","GreenBuild","SwiftPay","NovaTech","BrandXcel"].map((n) => (
              <div key={n} className="logo-placeholder">{n}</div>
            ))}
            {/* Duplicate for seamless loop */}
            {["RetailNG","StartHub","ShopEase","FinEdge","GreenBuild","SwiftPay","NovaTech","BrandXcel"].map((n) => (
              <div key={n + "-d"} className="logo-placeholder" aria-hidden="true">{n}</div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE ME ── */}
      <section ref={whyR.ref} className={`section reveal${whyR.visible ? " visible" : ""}`} aria-labelledby="why-title">
        <div className="section-header-row">
          <div>
            <div className="eyebrow">Why Clients Choose Me</div>
            <h2 className="section-title" id="why-title">Everything you need to <span>grow online.</span></h2>
          </div>
        </div>
        <div className="grid-3" style={{ gap: "1rem" }}>
          {[
            { icon: Icon.Globe,        title: "Modern Website Design",   desc: "Pixel-perfect, fast-loading websites built to reflect your brand and convert visitors into customers." },
            { icon: Icon.ShoppingCart, title: "eCommerce Development",   desc: "Full-featured online stores with Paystack & Flutterwave integration, product management, and order tracking." },
            { icon: Icon.Search,       title: "SEO Optimization",        desc: "Strategic on-page SEO, schema markup, and Core Web Vitals optimisation so Google finds and ranks your site." },
            { icon: Icon.Code2,        title: "WordPress Development",   desc: "Custom WordPress themes and plugins built from scratch — fast, secure, and easy for you to manage." },
            { icon: Icon.Wrench,       title: "Website Maintenance",     desc: "Monthly maintenance packages covering security, backups, updates, and performance monitoring." },
            { icon: Icon.RefreshCw,    title: "Website Redesign",        desc: "Transform your outdated website into a modern, high-performing asset that attracts and converts customers." },
          ].map((s) => (
            <div key={s.title} className="card">
              <div className="card-icon"><s.icon width={18} height={18} /></div>
              <div className="card-title">{s.title}</div>
              <div className="card-text">{s.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── PORTFOLIO PREVIEW (3 projects) ── */}
      <section ref={portfolioR.ref} className={`section reveal${portfolioR.visible ? " visible" : ""}`}>
        <div className="section-header-row">
          <div>
            <div className="eyebrow">Recent Work</div>
            <h2 className="section-title">Custom-engineered <span>solutions.</span></h2>
          </div>
          <button className="btn-ghost" onClick={() => setPage("portfolio")} style={{ flexShrink: 0 }}>View All →</button>
        </div>
        <div className="portfolio-grid">
          {projects.slice(0, 3).map((p) => (
            <div key={p.id} className="portfolio-card">
              <div
                className="portfolio-img"
                style={{ background: `linear-gradient(135deg,${p.color}22,${p.color}08)`, borderBottom: `1px solid ${p.color}22` }}
              >
                {p.image
                  ? <img src={p.image} alt={p.title} loading="lazy" />
                  : <span style={{ color: p.color, fontSize: "2.5rem", fontWeight: 900 }}>{p.title[0]}</span>}
              </div>
              <div className="portfolio-card-body">
                <div className="portfolio-type">{p.type}</div>
                <div className="portfolio-card-title">{p.title}</div>
                <div className="portfolio-card-desc">{p.desc}</div>
                <a href={p.link} target="_blank" rel="noopener noreferrer" className="view-link">View Project →</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── STACK PREVIEW ── */}
      <section ref={stackR.ref} className={`section reveal${stackR.visible ? " visible" : ""}`}>
        <div className="section-header-row">
          <div>
            <div className="eyebrow">Tech Stack</div>
            <h2 className="section-title">Crafting excellence with a <span>modern stack.</span></h2>
          </div>
          <button className="btn-ghost" onClick={() => setPage("stack")} style={{ flexShrink: 0 }}>Full Stack →</button>
        </div>
        <div className="home-stack-grid">
          {[
            { icon: Icon.Code2,     name: "React / Next.js",  color: "#61dafb" },
            { icon: Icon.Layers,    name: "Tailwind CSS",      color: "#38bdf8" },
            { icon: Icon.Server,    name: "Node.js",           color: "#8cc84b" },
            { icon: Icon.Cpu,       name: "Python / Django",   color: "#ffd43b" },
            { icon: Icon.Database,  name: "PostgreSQL",        color: "#336791" },
            { icon: Icon.Globe,     name: "WordPress",         color: "#21759b" },
            { icon: Icon.Cloud,     name: "AWS / Cloud",       color: "#ff9900" },
            { icon: Icon.GitBranch, name: "Docker / Git",      color: ACCENT   },
          ].map((t) => (
            <div key={t.name} className="home-stack-pill">
              <t.icon width={16} height={16} style={{ color: t.color, flexShrink: 0 }} />
              <span>{t.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── BLOG PREVIEW (3 articles) ── */}
      <section ref={blogR.ref} className={`section reveal${blogR.visible ? " visible" : ""}`}>
        <div className="section-header-row">
          <div>
            <div className="eyebrow">Latest Articles</div>
            <h2 className="section-title">Expert insights on <span>websites &amp; growth.</span></h2>
            <p style={{ color: MUTED, fontSize: "0.87rem", marginTop: "0.4rem" }}>
              SEO tips, digital marketing strategies and business growth guides for Nigerian entrepreneurs.
            </p>
          </div>
          <button className="btn-ghost" onClick={() => setPage("blog")} style={{ flexShrink: 0 }}>All Articles →</button>
        </div>
        <div className="blog-grid">
          {homeBlogPosts.map((post) => (
            <article key={post.id} className="blog-card">
              <div className="blog-img">
  <img
    src={post.image}
    alt={post.title}
    loading="lazy"
  />
</div>
              <div className="blog-body">
                <div className="blog-meta">
                  <span className="blog-category" style={{ color: post.color }}>{post.category}</span>
                  <span className="blog-meta-sep">·</span>
                  <span style={{ display: "flex", alignItems: "center", gap: 3 }}>
                    <Icon.Calendar width={11} height={11} />{post.date}
                  </span>
                  <span className="blog-meta-sep">·</span>
                  <span style={{ display: "flex", alignItems: "center", gap: 3 }}>
                    <Icon.Clock width={11} height={11} />{post.readTime}
                  </span>
                </div>
                <h3 className="blog-title">{post.title}</h3>
                <p className="blog-desc">{post.desc}</p>
                <button className="blog-read-more" onClick={() => setPage("blog")}>
                  Read Article <Icon.ArrowRight width={13} height={13} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section ref={testR.ref} className={`section reveal${testR.visible ? " visible" : ""}`}>
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <div className="eyebrow">Client Testimonials</div>
          <h2 className="section-title">What clients say about <span>working with me.</span></h2>
        </div>
        <TestimonialCarousel />
      </section>

      {/* ── FAQ ── */}
      <section ref={faqR.ref} className={`section reveal${faqR.visible ? " visible" : ""}`}>
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <div className="eyebrow">FAQ</div>
          <h2 className="section-title">Frequently asked <span>questions.</span></h2>
        </div>
        <FAQ items={faqs} />
      </section>

      {/* ── CTA ── */}
      <div className="cta-block">
        <h2>Let's build your next web solution</h2>
        <p>Full-stack applications and WordPress systems designed for performance, scalability, and measurable growth.</p>
        <div className="btn-row" style={{ justifyContent: "center" }}>
          <button className="btn-primary" onClick={() => setPage("hire")}>Start a Project</button>
          <button className="btn-ghost"   onClick={() => setPage("portfolio")}>See My Work</button>
        </div>
      </div>

      <Footer setPage={setPage} />

      {/* WhatsApp floating button */}
      {createPortal(
        <a
          href="https://wa.me/2349164925583?text=Hi%20Favour%2C%20I%20want%20a%20website%20for%20my%20business."
          target="_blank" rel="noreferrer"
          className="whatsapp-float"
          aria-label="Chat on WhatsApp"
        >
          <Icon.WA width={28} height={28} />
          <span className="whatsapp-float-pulse" aria-hidden="true" />
        </a>,
        document.body
      )}
    </div>
  );
}
