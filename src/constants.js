export const NAV_LINKS = ["Home", "About", "Portfolio", "Services", "Stack"];

export const ACCENT = "#00e5b0";
export const ACCENT2 = "#00c49a";
export const BG = "#0b0f0e";
export const CARD = "#111816";
export const CARD2 = "#141c1c";
export const BORDER = "#1e2e2a";
export const TEXT = "#e8f0ed";
export const MUTED = "#7a9990";


/* ✅ LOCAL IMAGES */
import project1 from "./assets/project1.png";
import project2 from "./assets/project2.png";
import project3 from "./assets/project3.png";
import project4 from "./assets/project4.png";

export const projects = [
  {
    id: 1,
    type: "Web Development",
    title: "Savoria Foods",
    desc: "A modern food ordering platform built with a clean, appetising user experience.",
    result: "⚡ Fast Load Time",
    filter: "web-development",
    image: project1,
    link: "https://savoriafoods.netlify.app/",
  },
  {
    id: 2,
    type: "Web Development",
    title: "Barbershop Website",
    desc: "Premium barbershop brand site with a dark luxury aesthetic and service showcase.",
    result: "💈 Bookings Up",
    filter: "web-development",
    image: project2,
    link: "https://barbarshop-website.vercel.app/",
  },
  {
    id: 3,
    type: "Web Development",
    title: "Glow's Haven",
    desc: "Beauty and wellness brand site with an elegant, minimal product-focused layout.",
    result: "📈 Ranking on Google",
    filter: "web-development",
    image: project3,
    link: "https://glowshaven.netlify.app/",
  },
  {
    id: 4,
    type: "E-commerce",
    title: "ShopWithX",
    desc: "A clean e-commerce storefront with intuitive product browsing and checkout flow.",
    result: "🛒 Optimised Checkout",
    filter: "web-development",
    image: project4,
    link: "https://shopwithx.netlify.app/",
  },
];
