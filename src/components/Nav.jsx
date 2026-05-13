import { NAV_LINKS, MUTED } from "../constants";
export default function Nav({ page, setPage }) {
  return (
    <nav className="nav">
      <button className="nav-logo" onClick={() => setPage("portfolio")}>favecodes</button>
      <div className="nav-links">
        {NAV_LINKS.map(l => (
          <button
            key={l}
            className={`nav-link${page === l.toLowerCase() ? " active" : ""}`}
            onClick={() => setPage(l.toLowerCase())}
          >
            {l}
          </button>
        ))}
      </div>
      <button className="hire-btn" onClick={() => setPage("hire")}>Hire Me</button>
    </nav>
  );
}
