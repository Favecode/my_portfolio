// ─── src/components/Nav.jsx ───────────────────────────────────────────────────
import { useState } from "react";
import "../styles/Nav.css";
import { NAV_LINKS } from "../data/constants";
import { Icon } from "./Icons";

export default function Nav({ page, setPage }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const nav = (target) => { setPage(target); setMenuOpen(false); };

  return (
    <nav className="nav">
      {/* Logo */}
      <button className="nav-logo" onClick={() => nav("home")} aria-label="Go to home">
        <div className="nav-logo-icon">
          <Icon.Code2 width={16} height={16} />
        </div>
        <span className="nav-logo-wordmark">fave<span>.codes</span></span>
      </button>

      {/* Desktop + mobile drawer links */}
      <div className={`nav-links${menuOpen ? " open" : ""}`}>
        {NAV_LINKS.map((l) => (
          <button
            key={l}
            className={`nav-link${page === l.toLowerCase() ? " active" : ""}${l === "Pricing" ? " pricing-link" : ""}`}
            onClick={() => nav(l.toLowerCase())}
          >
            {l}
          </button>
        ))}
        {/* Hire Me — only shown in mobile drawer */}
        <button className="nav-mobile-hire" onClick={() => nav("hire")}>Hire Me →</button>
      </div>

      {/* Right side */}
      <div className="nav-right">
        <button className="hire-btn desktop-only" onClick={() => nav("hire")}>Hire Me</button>
        <button
          className={`nav-toggle${menuOpen ? " open" : ""}`}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((p) => !p)}
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  );
}
