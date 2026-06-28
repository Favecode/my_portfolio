// ─── src/components/FAQ.jsx ───────────────────────────────────────────────────
// No separate CSS — uses .faq-* classes from global.css

import { useState } from "react";
import { Icon } from "./Icons";

export default function FAQ({ items }) {
  const [open, setOpen] = useState(null);
  return (
    <div className="faq-list">
      {items.map((item, i) => (
        <div key={i} className={`faq-item${open === i ? " open" : ""}`}>
          <button className="faq-question" onClick={() => setOpen(open === i ? null : i)}>
            <span className="faq-question-text">{item.q}</span>
            <span className="faq-toggle-icon">
              {open === i
                ? <Icon.ChevronUp  width={18} height={18} />
                : <Icon.ChevronDown width={18} height={18} />}
            </span>
          </button>
          {open === i && (
            <div className="faq-answer"><p>{item.a}</p></div>
          )}
        </div>
      ))}
    </div>
  );
}
