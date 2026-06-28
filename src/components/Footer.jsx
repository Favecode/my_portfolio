// ─── src/components/Footer.jsx ────────────────────────────────────────────────
import "../styles/Footer.css";

const NAV_FOOTER = ["Home","About","Portfolio","Blog","Stack","Pricing","Hire"];

export default function Footer({ setPage }) {
  return (
    <footer className="footer">
      <div>
        <div className="footer-logo">fave<span style={{ color: "#7a9990" }}>.</span>codes</div>
        <div className="footer-sub">Precision engineering for modern business solutions.</div>
      </div>

      <div className="footer-col">
        <h4>Connect</h4>
        <a href="https://wa.me/2349164925583"    target="_blank" rel="noreferrer">WhatsApp</a>
        <a href="https://linkedin.com"            target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="https://x.com/myfaveguy"         target="_blank" rel="noreferrer">Twitter</a>
        <a href="mailto:faveecodes5@gmail.com">Email</a>
      </div>

      <div className="footer-col">
        <h4>Navigation</h4>
        {NAV_FOOTER.map((l) => (
          <button key={l} onClick={() => setPage(l.toLowerCase())}>{l}</button>
        ))}
      </div>
    </footer>
  );
}
