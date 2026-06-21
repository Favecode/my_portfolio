import { useState } from "react";
import { NAV_LINKS } from "../constants";

export default function Nav({ page, setPage }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigateTo = (target) => {
    setPage(target);
    setMenuOpen(false);
  };

  return (
    <nav className="nav">
      <button className="nav-logo" onClick={() => navigateTo("home")}>
        <span className="nav-logo-bracket">&lt;</span>
        <span className="nav-logo-initials">FE</span>
        <span className="nav-logo-bracket">/&gt;</span>
      </button>

      <div className={`nav-links${menuOpen ? " open" : ""}`}>
        {NAV_LINKS.map((l) => (
          <button
            key={l}
            className={`nav-link${page === l.toLowerCase() ? " active" : ""}`}
            onClick={() => navigateTo(l.toLowerCase())}
          >
            {l}
          </button>
        ))}
      </div>

      <div className="nav-right">
        <button className="hire-btn" onClick={() => navigateTo("hire")}>
          Hire Me
        </button>
        <button
          className={`nav-toggle${menuOpen ? " open" : ""}`}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  );
}
