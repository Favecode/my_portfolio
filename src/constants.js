export const NAV_LINKS = ["Portfolio", "Services", "Stack", "About"];

export const ACCENT = "#00e5b0";
export const ACCENT2 = "#00c49a";
export const BG = "#0b0f0e";
export const CARD = "#111816";
export const CARD2 = "#141c1c";
export const BORDER = "#1e2e2a";
export const TEXT = "#e8f0ed";
export const MUTED = "#7a9990";


/* ✅ LOCAL IMAGES */
import screen from "./assets/screen.png";
import screen2 from "./assets/screen2.png";
import screen3 from "./assets/screen3.png";

import a from "./assets/a.png";
import b from "./assets/b.png";
import c from "./assets/c.png";
import d from "./assets/d.png";
import { FaArrowUp19 } from "react-icons/fa6";

import a1 from "./assets/a1.png";
import a2 from "./assets/a2.png";
import a3 from "./assets/a3.png";
import a4 from "./assets/a4.png";
import a5 from "./assets/a5.png";

import q1 from "./assets/q1.png";
import q2 from "./assets/q2.png";
import q3 from "./assets/q3.png";
import q4 from "./assets/q4.png";
import q5 from "./assets/q5.png";

export const projects = [
  {
    id: 1,
    type: "Full Stack",
    title: "E-commerce Platform",
    desc: "Headless commerce engine built with Next.js and Stripe API integration.",
    filter: "full-stack",
    images: [screen, screen2, screen3]
  },

  {
    id: 2,
    type: "SaaS Dashboard",
    title: "CloudMetrics Pro",
    desc: "Real-time enterprise monitoring tool with AWS Lambda backend.",
    filter: "full-stack",
    images: [ a, b, c, d]
  },

  {
    id: 3,
    type: "WordPress",
    title: "Custom WP Theme",
    desc: "Luxury brand Gutenberg-driven theme with performance optimisation.",
    filter: "wordpress",
    images: [ a1, a2, a3, a4, a5]
  },

  {
    id: 4,
    type: "WordPress",
    title: "News Portal",
    desc: "High-traffic editorial platform with advanced search system.",
    filter: "wordpress",
    images: [ q1, q2, q3, q4, q5 ]
  },


];