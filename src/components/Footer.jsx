import { NAV_LINKS, MUTED } from "../constants";
export default function Footer({ setPage }) {
  return (
    <>
      <footer className="footer">
        <div>
          <div className="footer-logo">favecodes</div>
          <div className="footer-sub">Precision engineering for modern business solutions.</div>
        </div>
        <div className="footer-col">
          <h4>Connect</h4>
          <a href="https://wa.me/2349164925583">Whatsapp</a>
          <a href="#">LinkedIn</a>
          <a href="https://x.com/myfaveguy">Twitter</a>
          <a href="mailto:faveecodes5@gmail.com">Email</a>
        </div>
        <div className="footer-col">
          <h4>Navigation</h4>
          {NAV_LINKS.map(l => (
            <button
              key={l}
              style={{
                display: "block",
                background: "none",
                border: "none",
                fontSize: "0.82rem",
                color: MUTED,
                marginBottom: "0.4rem",
                cursor: "pointer",
                padding: 0,
                fontFamily: "inherit",
                textAlign: "left",
              }}
              onClick={() => setPage(l.toLowerCase())}
            >
              {l}
            </button>
          ))}
        </div>
      </footer>
      
    </>
  );
}
