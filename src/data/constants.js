// ─── src/data/constants.js ────────────────────────────────────────────────────

export const NAV_LINKS = ["Home", "About", "Portfolio", "Blog", "Stack", "Pricing"];

export const ACCENT = "#00e5b0";
export const MUTED  = "#7a9990";
export const BG     = "#0b0f0e";
export const CARD   = "#111816";
export const BORDER = "#1e2e2a";

import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project5.png";
import project6 from "../assets/project6.png";
import project7 from "../assets/project7.png";

// 1 USD ≈ 1600 NGN (2026 approx)
export const USD_RATE = 1600;
export const toUSD = (naira) => Math.round(naira / USD_RATE);

export const projects = [
  {
 id: 6,
  image: project6,
  type: "Web Development",
  title: "Doramart Cocktail & Drinks",
  desc: "A stylish cocktail bar website featuring signature drinks, reservations, events, and an elegant user experience.",
  filter: "web-development",
  link: "https://doramart.vercel.app/",
  color: "#722ed1"
},
  { id: 2, image: project2, type: "Web Development", title: "Blade and Crown", desc: "Blade and Crown brand site with a dark luxury aesthetic and service showcase.",                                                            filter: "web-development", link: "https://barbarshop-website.vercel.app/",   color: "#7c6dfa" },
  { id: 3, image: project3, type: "Web Development", title: "Glow's Haven",   desc: "Beauty and wellness brand site with an elegant, minimal product-focused layout.",                                                           filter: "web-development", link: "https://glowshaven.netlify.app/",          color: "#f759ab" },
  { id: 4, image: project1, type: "Web Development", title: "Savoria Foods",  desc: "A modern food ordering platform built with a clean, appetising user experience.",                                                           filter: "web-development", link: "https://savoriafoods.netlify.app/",        color: "#fa8c16" },
   { id: 1, image: project4, type: "Web Development", title: "Verve Market",   desc: "A modern, high-performance e-commerce storefront featuring seamless product browsing, responsive design, and a smooth checkout experience.", filter: "web-development", link: "https://nova-ecommerce-coral.vercel.app/", color: "#00e5b0" },
   {
  id: 5,  image: project7,
  type: "Web Development",
  title: "S&V Construction",
  desc: "A modern construction company website showcasing services, completed projects, and easy client contact.",
  filter: "web-development",
  link: "https://construction-teal-six.vercel.app/",
  color: "#d48806"
},

];

export const blogPosts = [
  { id: 1, category: "Web Design",       date: "June 10, 2026",  readTime: "8 min read", title: "How Much Does a Business Website Cost in Nigeria in 2026?",         desc: "A transparent breakdown of website pricing in Nigeria — from landing pages to full eCommerce platforms.", color: "#00e5b0", initials: "₦",  intro: "One of the most common questions I get from Nigerian business owners is: 'How much does a website cost?' The honest answer is — it depends. But in this guide, I'll break down exactly what determines pricing so you can budget confidently." },
  { id: 2, category: "Business Growth",  date: "May 28, 2026",   readTime: "6 min read", title: "10 Reasons Every Business Needs a Professional Website",              desc: "Discover why a professionally designed, SEO-optimised website is the most powerful marketing asset for any Nigerian business in 2026.", color: "#7c6dfa", initials: "10", intro: "Social media is useful. Word of mouth is powerful. But in 2026, if your business doesn't have a professional website, you're invisible to the majority of potential customers. Here are 10 reasons why every Nigerian business needs one." },
  { id: 3, category: "SEO",              date: "May 14, 2026",   readTime: "7 min read", title: "How SEO Helps Small Businesses Get More Customers",                   desc: "Learn how strategic SEO can place your business in front of customers who are actively searching for your products and services on Google.", color: "#fa8c16", initials: "🔍", intro: "Every day, thousands of Nigerians search Google for products and services just like yours. SEO is the process of making sure your website appears in those results. Done well, it's one of the most cost-effective forms of marketing available." },
  { id: 4, category: "Digital Strategy", date: "April 30, 2026", readTime: "5 min read", title: "Website vs Social Media: Which One Grows Your Business Faster?",      desc: "A practical comparison of websites and social media for Nigerian businesses — and why the smartest brands use both strategically.", color: "#f759ab", initials: "vs", intro: "This is one of the most common debates among Nigerian entrepreneurs: 'Do I really need a website, or is my Instagram page enough?' The answer is more nuanced than most people expect." },
  { id: 5, category: "Website Tips",     date: "April 12, 2026", readTime: "6 min read", title: "The Biggest Website Mistakes That Cost Businesses Sales",              desc: "Avoid the most common website design and SEO mistakes that silently drive potential customers away from your site every single day.", color: "#ff4d4f", initials: "!",  intro: "Most business owners know they need a website — but many have a website that is actively costing them customers. A poorly built site can damage your credibility, frustrate visitors, and rank so low on Google that nobody finds it." },
  { id: 6, category: "eCommerce",        date: "March 28, 2026", readTime: "6 min read", title: "How to Start Selling Online in Nigeria: A Complete Guide",             desc: "Everything you need to launch a profitable online store in Nigeria — from choosing the right platform to accepting payments securely.", color: "#36cfc9", initials: "🛒", intro: "Selling online in Nigeria has never been more accessible — but knowing where to start is the hardest part. This guide walks you through everything you need to launch a profitable online store." },
];

export const testimonials = [
  { text: "Working with Favour transformed our online presence. Our website now loads faster, ranks better on Google, and generates far more enquiries than before.", author: "Adebayo O.", role: "CEO, Retail Business",     stars: 5 },
  { text: "Our eCommerce website increased online sales within weeks of launching. The Paystack integration and product management system work flawlessly.",          author: "Chioma N.",  role: "Founder, Fashion Brand",    stars: 5 },
  { text: "Professional, reliable and delivered exactly what we wanted. Our new corporate website reflects our brand identity perfectly.",                            author: "Emeka J.",   role: "Director, Consulting Firm", stars: 5 },
  { text: "The attention to detail was outstanding. Favour communicated clearly at every stage and the final result exceeded our expectations.",                       author: "Amaka T.",   role: "Marketing Manager, NGO",    stars: 5 },
  { text: "Our website now ranks on page one of Google for our target keywords. The SEO work alone has been worth the investment many times over.",                   author: "Kunle A.",   role: "Owner, Tech Startup",       stars: 5 },
];

export const faqs = [
  { q: "How much does a website cost in Nigeria?",    a: "Website pricing depends on your goals and features. A corporate website starts from ₦250,000 (~$156), an eCommerce website from ₦350,000 (~$219), and custom web applications from ₦500,000 (~$313). Every project includes a free consultation." },
  { q: "How long does website development take?",     a: "A standard corporate website takes 1–2 weeks. An eCommerce website typically takes 2–4 weeks. Custom web applications vary by complexity but are usually delivered within 4–8 weeks." },
  { q: "Do you build eCommerce websites?",            a: "Yes. I build full-featured eCommerce websites with Paystack and Flutterwave payment integration, product management, shopping cart, order tracking, customer dashboards, and SEO optimisation." },
  { q: "Do you work with international clients?",     a: "Yes — I work with clients across Nigeria, the UK, the US, Canada, and beyond. I accept payment via bank transfer, PayPal, and Wise." },
  { q: "Do you offer post-launch support?",           a: "Yes. Every project includes free post-launch support for bug fixes. After that, I offer monthly retainer packages for ongoing maintenance and new features." },
  { q: "Can you redesign my existing website?",       a: "Absolutely. I assess your current site, identify what's costing you leads and sales, and rebuild it with modern design, better performance, and stronger SEO — without losing your existing search rankings." },
];

export const HIRE_FAQS = [
  { q: "How long does a typical project take?",          a: "Most landing pages and small sites are delivered in 5–7 days. Larger web development projects typically take 2–4 weeks depending on complexity." },
  { q: "Do you work with international clients?",         a: "Yes — I work with clients across Nigeria, the UK, the US, Canada, and beyond. I'm comfortable with remote collaboration across time zones." },
  { q: "How do payments work?",                           a: "I typically work with a deposit upfront and the balance on completion. I accept bank transfer, PayPal, and Wise for international clients." },
  { q: "Do you offer post-launch support?",               a: "Yes. Every project includes free post-launch support for bug fixes. After that, I offer monthly retainer packages for ongoing maintenance." },
  { q: "Can you work with my existing codebase?",         a: "Absolutely. I'm comfortable jumping into existing React, Node.js, Django/Flask, and WordPress projects. I'll review the codebase first and give you an honest assessment." },
  { q: "What do you need from me to get started?",        a: "A brief description of your project, your goals, and your timeline. Design mockups help but aren't required — I can guide you through the process from scratch." },
];
