// ─── src/pages/Blog.jsx ───────────────────────────────────────────────────────
import { useState } from "react";
import "../styles/Blog.css";
import Footer from "../components/Footer";
import { Icon } from "../components/Icons";
import { blogPosts, MUTED } from "../data/constants";

// ── Build full article objects from blogPosts ──────────────────────────────
const articles = blogPosts.map((p) => ({
  ...p,
  sections: [
    {
      heading: "Getting the Full Picture",
      body: "This article covers the topic in full detail with practical insights tailored for Nigerian businesses. Read on to discover actionable strategies you can implement today.",
    },
    {
      heading: "Why This Matters for Your Business",
      body: "Understanding this topic can fundamentally change how you approach your online presence and help you make better decisions about your digital investments.",
    },
  ],
  faq: [
    {
      q: "How do I get started?",
      a: "Book a free consultation — I'll walk you through everything you need to know and create a clear plan for your project.",
    },
  ],
  tags: [p.category.toLowerCase(), "website", "nigeria", "web developer"],
}));

// ── Article detail view ────────────────────────────────────────────────────
function ArticleView({ article, onBack }) {
  return (
    <div className="page fade-in">
      <div className="blog-article-wrap">
        <button className="blog-back-btn" onClick={onBack}>
          <Icon.ArrowLeft width={16} height={16} /> Back to Articles
        </button>

        <div className="blog-article-header">
          <span className="blog-article-category" style={{ color: article.color }}>
            {article.category}
          </span>
          <h1 className="blog-article-title">{article.title}</h1>
          <div className="blog-article-meta">
            <span><Icon.Calendar width={13} height={13} /> {article.date}</span>
            <span><Icon.Clock    width={13} height={13} /> {article.readTime}</span>
          </div>
          <p className="blog-article-intro">{article.intro}</p>
        </div>

        <div className="blog-article-body">
          {article.sections.map((s, i) => (
            <div key={i} className="blog-article-section">
              <h2 className="blog-article-h2">{s.heading}</h2>
              <p className="blog-article-p">{s.body}</p>
            </div>
          ))}
        </div>

        {article.faq && (
          <div className="blog-article-faq">
            <h2 className="blog-article-h2">Frequently Asked Questions</h2>
            {article.faq.map((f, i) => (
              <div key={i} className="blog-faq-item">
                <div className="blog-faq-q">{f.q}</div>
                <div className="blog-faq-a">{f.a}</div>
              </div>
            ))}
          </div>
        )}

        <div className="blog-article-tags">
          <Icon.Tag width={13} height={13} style={{ color: MUTED }} />
          {article.tags.map((t) => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>

        <div className="blog-article-cta">
          <h3>Ready to build a website that actually grows your business?</h3>
          <p>Get a free consultation — no obligation, no jargon, just a clear plan.</p>
          <a
            href="https://wa.me/2349164925583"
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
            style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", textDecoration: "none" }}
          >
            Chat on WhatsApp →
          </a>
        </div>
      </div>
      <Footer setPage={() => {}} />
    </div>
  );
}

// ── Blog listing page (6 articles) ────────────────────────────────────────
export default function Blog({ setPage }) {
  const [activeArticle, setActiveArticle] = useState(null);

  if (activeArticle !== null) {
    return (
      <ArticleView
        article={articles[activeArticle]}
        onBack={() => setActiveArticle(null)}
      />
    );
  }

  return (
    <div className="page fade-in">
      <div className="section">
        <div style={{ marginBottom: "2.5rem" }}>
          <div className="eyebrow">Blog</div>
          <h1 className="section-title" style={{ fontSize: "clamp(1.8rem,4vw,2.6rem)" }}>
            Expert insights on <span>websites &amp; growth.</span>
          </h1>
          <p style={{ color: MUTED, marginTop: "0.5rem", maxWidth: 560 }}>
            SEO tips, digital marketing strategies and business growth guides for Nigerian entrepreneurs.
          </p>
        </div>

        {/* 6 articles grid */}
        <div className="blog-page-grid">
          {articles.map((post, i) => (
            <article
              key={post.id}
              className={`blog-page-card fade-in stagger-${i + 1}`}
              onClick={() => setActiveArticle(i)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && setActiveArticle(i)}
            >
              <div className="blog-page-bar" style={{ background: post.color }} />
              <div className="blog-page-body">
                <div className="blog-page-meta">
                  <span style={{ color: post.color, fontWeight: 700, fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                    {post.category}
                  </span>
                  <span style={{ color: "#2e4a44" }}>·</span>
                  <span style={{ color: MUTED, fontSize: "0.72rem", display: "flex", alignItems: "center", gap: 4 }}>
                    <Icon.Calendar width={11} height={11} />{post.date}
                  </span>
                  <span style={{ color: "#2e4a44" }}>·</span>
                  <span style={{ color: MUTED, fontSize: "0.72rem", display: "flex", alignItems: "center", gap: 4 }}>
                    <Icon.Clock width={11} height={11} />{post.readTime}
                  </span>
                </div>
                <h2 className="blog-page-title">{post.title}</h2>
                <p className="blog-page-desc">{post.intro.slice(0, 160)}…</p>
                <div className="blog-page-read">
                  Read Article <Icon.ChevronRight width={14} height={14} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <Footer setPage={setPage} />
    </div>
  );
}
