import { useState } from "react";
import Footer from "./Footer";
import { ArrowLeft, Calendar, Clock, ChevronRight, Tag } from "lucide-react";

/* ─────────────────────────────────────
   FULL ARTICLE CONTENT
───────────────────────────────────── */
const articles = [
  {
    id: 1,
    category: "Web Design",
    date: "June 10, 2026",
    readTime: "8 min read",
    color: "#00e5b0",
    title: "How Much Does a Business Website Cost in Nigeria in 2026?",
    metaDesc: "A transparent breakdown of website pricing in Nigeria in 2026 — from landing pages to eCommerce platforms.",
    intro: "One of the most common questions I get from Nigerian business owners is: 'How much does a website cost?' The honest answer is — it depends. But in this guide, I'll break down exactly what determines pricing so you can budget confidently and avoid being overcharged.",
    sections: [
      {
        heading: "Why Website Prices Vary So Much",
        body: "Website pricing in Nigeria ranges from ₦30,000 for a basic template site to ₦2,000,000+ for a complex custom web application. That's a huge range — and it's because 'website' covers wildly different things. A five-page brochure site is nothing like a custom eCommerce platform with payment integration, inventory management, and a customer dashboard. The price reflects the complexity, the time invested, and the expertise of the developer."
      },
      {
        heading: "Corporate / Business Website: ₦250,000 – ₦350,000",
        body: "This is the most popular package for small and medium businesses in Nigeria. It typically includes up to 10 pages (Home, About, Services, Contact, etc.), mobile-responsive design, a contact form, WhatsApp integration, Google Maps, basic on-page SEO, SSL certificate, speed optimisation, social media links, and training so you can update content yourself. This is your digital shopfront — and at this price point, it should look professional enough to compete with any established brand."
      },
      {
        heading: "eCommerce Website: ₦350,000 – ₦500,000",
        body: "If you want to sell products online, expect to invest more. A proper eCommerce site needs a shopping cart, secure checkout, Paystack and Flutterwave payment integration (essential for Nigerian customers), product search, inventory management, customer accounts, order tracking, coupon systems, and email notifications. Done properly, an eCommerce site pays for itself quickly through online sales. Done poorly, it drives customers away."
      },
      {
        heading: "Custom Web Application: ₦500,000+",
        body: "Custom dashboards, SaaS platforms, booking systems, real estate portals — these are bespoke solutions built entirely from scratch for your specific workflow. Pricing starts at ₦500,000 and scales with complexity. These projects include custom authentication, database architecture, API integrations, admin panels, analytics, and cloud deployment."
      },
      {
        heading: "What Drives the Cost Up",
        body: "Several factors increase a project's price: the number of pages and features, whether custom animations or illustrations are needed, third-party integrations (payment gateways, CRM systems, booking tools), multilingual support, advanced SEO work, and ongoing maintenance agreements. Always get a detailed quote that lists exactly what is included — vague pricing is a red flag."
      },
      {
        heading: "What About Cheap Websites Under ₦50,000?",
        body: "They exist — and they are usually built on free templates with minimal customisation, no SEO, slow loading speeds, and poor mobile design. They may look presentable at first glance but they won't rank on Google, won't convert visitors into customers, and often need a complete rebuild within a year. Investing in a professional website from the start is almost always cheaper in the long run."
      },
      {
        heading: "Getting Started",
        body: "The best way to get an accurate quote is to have a clear conversation about your goals. What pages do you need? Do you want to sell online? Do you already have a logo and brand colours? The clearer you are about your requirements, the more accurate your quote will be. Book a free consultation and I'll walk you through everything."
      },
    ],
    faq: [
      { q: "Can I pay in instalments?", a: "Yes — most projects can be split into two or three payments: a deposit to begin, a midpoint payment, and a final payment on delivery." },
      { q: "Does the price include hosting?", a: "Hosting is usually a separate annual cost. I'll recommend the best hosting option for your budget and traffic needs." },
      { q: "How long does it take?", a: "A corporate website typically takes 1–2 weeks. An eCommerce site takes 2–4 weeks. Custom apps vary by scope." },
    ],
    tags: ["website cost Nigeria", "web developer Nigeria", "business website", "eCommerce website"],
  },
  {
    id: 2,
    category: "Business Growth",
    date: "May 28, 2026",
    readTime: "6 min read",
    color: "#7c6dfa",
    title: "10 Reasons Every Business Needs a Professional Website",
    metaDesc: "Discover why a professional website is the most powerful marketing asset for any Nigerian business in 2026.",
    intro: "Social media is useful. Word of mouth is powerful. But in 2026, if your business doesn't have a professional website, you're invisible to the majority of potential customers. Here are 10 reasons why every Nigerian business — regardless of size or industry — needs one.",
    sections: [
      { heading: "1. Your Customers Are Searching Online", body: "Over 100 million Nigerians use the internet. When someone needs a product or service, their first move is to search on Google. If you don't have a website, you don't exist in that search — and your competitor who does will get the customer instead." },
      { heading: "2. A Website Works 24/7", body: "Your staff go home. Your website doesn't. A professional website answers questions, showcases your services, collects enquiries, and even processes orders around the clock — without any extra cost after the initial build." },
      { heading: "3. It Builds Credibility Instantly", body: "Consumers are increasingly sceptical of businesses that only have a social media presence. A professional website with a custom domain, clear information, and strong design signals that you are legitimate, established, and trustworthy." },
      { heading: "4. You Own It — Unlike Social Media", body: "Instagram can change its algorithm. Facebook can suspend your account. Your website belongs to you permanently. It is the only online asset you fully control, and that makes it the foundation of any sensible digital marketing strategy." },
      { heading: "5. It Ranks on Google", body: "A properly optimised website can appear at the top of Google search results for your target keywords — for free, month after month. That is organic traffic that costs nothing beyond your initial SEO investment, and it compounds over time." },
      { heading: "6. It Showcases Your Work", body: "A portfolio of completed projects, case studies, client testimonials, and before-and-after results tells your story far more powerfully than any social media post. It gives prospective clients the confidence to choose you." },
      { heading: "7. It Enables eCommerce", body: "Want to sell products nationwide — or even internationally — without a physical shop? A website makes that possible. With integrated payment gateways like Paystack and Flutterwave, you can accept payments safely and automatically." },
      { heading: "8. It Supports All Your Marketing", body: "Running ads? The ad needs somewhere to send people. Sending emails? They link to your website. Handing out business cards? People will look you up. Your website is the hub that every other marketing channel points to." },
      { heading: "9. It Collects Customer Data", body: "With the right setup, your website tells you exactly how many people visited, which pages they read, where they came from, and what they did. That data helps you make better decisions about what to sell, what to promote, and where to advertise." },
      { heading: "10. Your Competitors Already Have One", body: "If your competitors have professional websites and you don't, you are already losing business to them. Levelling the playing field — or better yet, having a better website than them — is one of the fastest ways to win market share." },
    ],
    faq: [
      { q: "Is a website better than social media?", a: "Both have their place, but your website is the only platform you own and control. Use social media to drive traffic to your website, not as a replacement for it." },
      { q: "What if I'm a small business with a small budget?", a: "A professional website doesn't have to be expensive. A clean, fast, well-optimised five-page site will outperform a bloated twenty-page site. Start small and grow." },
    ],
    tags: ["professional website", "business website Nigeria", "why have a website", "small business website"],
  },
  {
    id: 3,
    category: "SEO",
    date: "May 14, 2026",
    readTime: "7 min read",
    color: "#fa8c16",
    title: "How SEO Helps Small Businesses Get More Customers",
    metaDesc: "Learn how SEO can place your Nigerian business in front of customers actively searching for your products and services on Google.",
    intro: "Every day, thousands of Nigerians search Google for products and services just like yours. SEO — Search Engine Optimisation — is the process of making sure your website appears in those results. Done well, it is one of the most cost-effective forms of marketing available to small businesses.",
    sections: [
      { heading: "What Is SEO in Plain Language?", body: "SEO is the set of techniques used to improve where your website appears in Google search results. When someone types 'web designer in Lagos' or 'best tailors in Abuja', Google decides which websites to show and in what order. SEO is how you influence that decision in your favour." },
      { heading: "Why SEO Matters More Than Ads", body: "Paid adverts stop the moment your budget runs out. SEO results, once achieved, keep delivering traffic for months or years at no additional cost. Most users also trust organic results more than adverts — they scroll past ads and click on the first organic result. That trust is hard to put a price on." },
      { heading: "On-Page SEO: What Happens on Your Website", body: "On-page SEO includes the words on your pages, your page titles and meta descriptions, your URL structure, your image alt tags, your heading hierarchy (H1, H2, H3), and your internal links. Every page of your website should be built around a specific keyword that your ideal customer is searching for." },
      { heading: "Technical SEO: What Google Sees Behind the Scenes", body: "Google also evaluates how your website is built. Page speed is critical — a slow website ranks lower and drives visitors away. Mobile responsiveness is essential; Google now ranks the mobile version of your site first. Secure HTTPS connections, clean code, proper schema markup, and a well-structured sitemap all contribute to better rankings." },
      { heading: "Local SEO: Getting Found in Your City", body: "For Nigerian businesses serving a local area, local SEO is particularly powerful. This means optimising your Google Business Profile, using location-specific keywords ('web developer in Port Harcourt'), getting listed in local directories, and earning reviews from local customers. Done well, local SEO can put you at the very top of Google Maps results." },
      { heading: "Content Marketing and Blogging", body: "Publishing regular, helpful blog articles on topics your customers search for is one of the most powerful long-term SEO strategies. Each article is a new door into your website. Over time, a well-maintained blog can generate thousands of monthly visitors without spending a naira on adverts." },
      { heading: "How Long Does SEO Take?", body: "SEO is not instant — it typically takes 3–6 months to see significant results. But unlike advertising, the results are cumulative. Every month you invest in SEO, your position strengthens. Businesses that start early build a competitive advantage that is very difficult for later entrants to overcome." },
    ],
    faq: [
      { q: "Can I do SEO myself?", a: "Basic on-page SEO is learnable, but technical SEO and content strategy require expertise. Most businesses get far better results working with an experienced developer." },
      { q: "How much does SEO cost in Nigeria?", a: "Monthly SEO retainers in Nigeria typically range from ₦50,000 to ₦200,000 depending on the competitiveness of your industry and the scope of work." },
      { q: "Does social media help SEO?", a: "Indirectly — social media can drive traffic to your website and increase brand awareness, but social signals are not a direct Google ranking factor." },
    ],
    tags: ["SEO Nigeria", "SEO services", "Google ranking", "small business website", "website designer Nigeria"],
  },
  {
    id: 4,
    category: "Digital Strategy",
    date: "April 30, 2026",
    readTime: "5 min read",
    color: "#f759ab",
    title: "Website vs Social Media: Which One Grows Your Business Faster?",
    metaDesc: "A practical comparison of websites and social media for Nigerian businesses — and why the smartest brands use both strategically.",
    intro: "This is one of the most common debates among Nigerian entrepreneurs: 'Do I really need a website, or is my Instagram page enough?' The answer is more nuanced than most people expect — and understanding it could save you a lot of wasted marketing budget.",
    sections: [
      { heading: "What Social Media Does Well", body: "Social media platforms — Instagram, Facebook, TikTok, Twitter — are outstanding for building awareness, engaging with your audience, running targeted adverts, and showing the personality behind your brand. They have massive built-in audiences and, for certain businesses, can generate significant leads directly. The barrier to entry is low and you can start immediately." },
      { heading: "The Problem With Only Using Social Media", body: "You do not own your social media following. If Instagram changes its algorithm tomorrow, your reach can drop to near zero overnight. Accounts get hacked, suspended, or shadowbanned without warning. The platform owns your audience — you are just renting space on it. Building your entire business on rented land is a risk no serious business should take." },
      { heading: "What a Website Does That Social Media Cannot", body: "Your website belongs to you permanently. It ranks on Google and can attract customers who have never heard of you. It works 24/7 without you posting content. It collects customer data through forms and analytics. It can process payments, bookings, and enquiries automatically. It looks more professional to corporate clients and partners. And crucially, it builds long-term SEO value that compounds month after month." },
      { heading: "The Real Answer: Use Both Together", body: "The most successful Nigerian businesses online use social media to drive traffic to their website — not as a replacement for it. They post on Instagram. The call to action sends people to their website. The website converts visitors into enquiries, sales, or bookings. The data from the website informs their next social media campaign. This is the flywheel that actually builds a sustainable online business." },
      { heading: "Which Grows Faster?", body: "Social media can generate quick results — a single viral post can bring thousands of visitors to your page in hours. But that traffic is temporary. A website grows more slowly but more steadily. After 12 months of consistent SEO, a well-built website can generate more reliable monthly leads than any social media profile. For long-term growth, the website wins. For speed and brand awareness, social media wins. You need both." },
      { heading: "For eCommerce, the Website Wins Outright", body: "If you want to sell products, a website with integrated payment processing gives customers a far more professional and trustworthy buying experience than DM-based transactions on Instagram. It also scales — you can handle hundreds of orders simultaneously without the manual effort of responding to every enquiry." },
    ],
    faq: [
      { q: "I'm just starting out — which should I set up first?", a: "Get a professional website first. Then build your social media profiles and link everything back to it. Your website is your foundation." },
      { q: "Can a website replace social media?", a: "Not entirely. Social media has unique advantages for community building and paid advertising. But a website is the home base that makes all your social media efforts more effective." },
    ],
    tags: ["website vs social media", "business website", "digital strategy", "responsive website", "website designer Nigeria"],
  },
  {
    id: 5,
    category: "Website Tips",
    date: "April 12, 2026",
    readTime: "6 min read",
    color: "#ff4d4f",
    title: "The Biggest Website Mistakes That Cost Businesses Sales",
    metaDesc: "Avoid the most common website design and SEO mistakes that silently drive potential customers away from your site every day.",
    intro: "Most business owners know they need a website — but many have a website that is actively costing them customers. A poorly built site can damage your credibility, frustrate visitors, and rank so low on Google that nobody finds it. Here are the biggest mistakes to avoid.",
    sections: [
      { heading: "Mistake 1: Slow Loading Speed", body: "Studies consistently show that more than half of visitors leave a website if it takes longer than 3 seconds to load. In Nigeria, where many users are on mobile data connections, speed is even more critical. Uncompressed images, bloated code, cheap hosting, and too many plugins are the most common culprits. A fast website is not a luxury — it is a basic requirement." },
      { heading: "Mistake 2: Not Mobile-Friendly", body: "Over 80% of internet users in Nigeria browse on their phones. If your website isn't fully optimised for mobile — meaning it's easy to read, navigate, and use on a small screen — you are frustrating the vast majority of your visitors. Google also ranks mobile-friendly sites higher, so poor mobile design hurts your SEO as well as your user experience." },
      { heading: "Mistake 3: No Clear Call to Action", body: "Many websites look beautiful but fail to tell visitors what to do next. Every page should have a clear, visible call to action — 'Call Us Now', 'Get a Free Quote', 'Buy This Product', 'Book an Appointment'. Without it, visitors leave without doing anything, and a potential sale is lost." },
      { heading: "Mistake 4: No SEO at All", body: "A website that nobody can find on Google is essentially invisible. On-page SEO — keyword-optimised page titles, meta descriptions, heading structure, image alt tags, internal links — needs to be built into every page from the start. Retrofitting SEO onto a poorly structured site is expensive and time-consuming." },
      { heading: "Mistake 5: Outdated or Missing Contact Information", body: "Surprisingly common — businesses that have changed their phone number, moved locations, or changed email addresses but never updated their website. A customer who can't reach you will simply contact a competitor. Your contact information should be on every page, easy to find, and always up to date." },
      { heading: "Mistake 6: Poor Quality Images", body: "Blurry, pixelated, or irrelevant images destroy trust immediately. Invest in good photography of your products, your team, and your workspace. If professional photos aren't possible yet, use high-quality stock images that match your brand. Never use stretched or low-resolution images on a professional business site." },
      { heading: "Mistake 7: No SSL Certificate (No HTTPS)", body: "If your website shows 'Not Secure' in the browser address bar, visitors will leave immediately — especially if you're asking for payments or personal information. An SSL certificate (which gives you HTTPS) is a basic security requirement and also a minor Google ranking signal. All professional websites should have one." },
      { heading: "Mistake 8: Trying to Do Too Much", body: "Some websites try to cram every service, every product, every piece of information onto one page in the hope that something will convert. The result is confusing and overwhelming. A focused website with a clear message, a defined audience, and a single primary call to action will always outperform a cluttered one." },
    ],
    faq: [
      { q: "My website was built years ago — should I redesign it?", a: "If it's slow, not mobile-friendly, not ranking on Google, or doesn't reflect your current brand, yes — a redesign is almost always worth the investment." },
      { q: "How do I know if my website is hurting my business?", a: "Check your Google Analytics. If your bounce rate is over 70%, your average session duration is under 30 seconds, or you're getting no enquiries from the site, those are clear warning signs." },
      { q: "Can you fix my existing website instead of rebuilding?", a: "Sometimes — it depends on how it was originally built. I offer website audits and can advise whether a targeted fix or a full rebuild is the right approach for your situation." },
    ],
    tags: ["website mistakes", "website redesign", "SEO services", "responsive website", "website maintenance"],
  },
];

/* ─────────────────────────────────────
   ARTICLE VIEW
───────────────────────────────────── */
function ArticleView({ article, onBack }) {
  return (
    <div className="page fade-in">
      <div className="blog-article-wrap">
        {/* Back button */}
        <button className="blog-back-btn" onClick={onBack}>
          <ArrowLeft size={16} /> Back to Articles
        </button>

        {/* Header */}
        <div className="blog-article-header">
          <span className="blog-article-category" style={{ color: article.color }}>
            {article.category}
          </span>
          <h1 className="blog-article-title">{article.title}</h1>
          <div className="blog-article-meta">
            <span><Calendar size={13} /> {article.date}</span>
            <span><Clock size={13} /> {article.readTime}</span>
          </div>
          <p className="blog-article-intro">{article.intro}</p>
        </div>

        {/* Body */}
        <div className="blog-article-body">
          {article.sections.map((s, i) => (
            <div key={i} className="blog-article-section">
              <h2 className="blog-article-h2">{s.heading}</h2>
              <p className="blog-article-p">{s.body}</p>
            </div>
          ))}
        </div>

        {/* FAQ */}
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

        {/* Tags */}
        <div className="blog-article-tags">
          <Tag size={13} style={{ color: "#7a9990" }} />
          {article.tags.map(t => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>

        {/* CTA */}
        <div className="blog-article-cta">
          <h3>Ready to build a website that actually grows your business?</h3>
          <p>Get a free consultation — no obligation, no jargon, just a clear plan.</p>
          <a href="https://wa.me/2349164925583?text=Hi%20Favour%2C%20I%20want%20a%20website%20for%20my%20business." target="_blank" rel="noreferrer" className="btn-primary" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", textDecoration: "none" }}>
            Chat on WhatsApp →
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
}

/* ─────────────────────────────────────
   BLOG LIST PAGE
───────────────────────────────────── */
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
        {/* Header */}
        <div style={{ marginBottom: "2.5rem" }}>
          <div className="eyebrow">Blog</div>
          <h1 className="section-title" style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)" }}>
            Expert insights on <span>websites &amp; growth.</span>
          </h1>
          <p style={{ color: "#7a9990", marginTop: "0.5rem", maxWidth: 560 }}>
            SEO tips, digital marketing strategies and business growth guides for Nigerian entrepreneurs.
          </p>
        </div>

        {/* Article grid */}
        <div className="blog-page-grid">
          {articles.map((post, i) => (
            <article
              key={post.id}
              className={`blog-page-card fade-in stagger-${i + 1}`}
              onClick={() => setActiveArticle(i)}
              role="button"
              tabIndex={0}
              onKeyDown={e => e.key === "Enter" && setActiveArticle(i)}
            >
              {/* Colour bar */}
              <div className="blog-page-bar" style={{ background: post.color }} />

              <div className="blog-page-body">
                <div className="blog-page-meta">
                  <span style={{ color: post.color, fontWeight: 700, fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.06em" }}>{post.category}</span>
                  <span style={{ color: "#2e4a44" }}>·</span>
                  <span style={{ color: "#7a9990", fontSize: "0.72rem", display: "flex", alignItems: "center", gap: 4 }}><Calendar size={11} />{post.date}</span>
                  <span style={{ color: "#2e4a44" }}>·</span>
                  <span style={{ color: "#7a9990", fontSize: "0.72rem", display: "flex", alignItems: "center", gap: 4 }}><Clock size={11} />{post.readTime}</span>
                </div>

                <h2 className="blog-page-title">{post.title}</h2>
                <p className="blog-page-desc">{post.intro.slice(0, 160)}…</p>

                <div className="blog-page-read">
                  Read Article <ChevronRight size={14} />
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
