// ─── src/components/TestimonialCarousel.jsx ──────────────────────────────────
// Uses .testimonial-* classes from global.css

import { useState, useEffect } from "react";
import { Icon } from "./Icons";
import { testimonials } from "../data/constants";

export default function TestimonialCarousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive((a) => (a + 1) % testimonials.length), 5000);
    return () => clearInterval(t);
  }, []);

  const t = testimonials[active];

  return (
    <div className="testimonial-carousel">
      <div className="testimonial-card-main">
        <div className="testimonial-stars">
          {Array.from({ length: t.stars }).map((_, i) => (
            <Icon.Star key={i} width={16} height={16} fill="#00e5b0" stroke="#00e5b0" />
          ))}
        </div>
        <p className="testimonial-text">"{t.text}"</p>
        <div className="testimonial-author">
          <div className="testimonial-avatar">{t.author[0]}</div>
          <div>
            <div className="testimonial-name">{t.author}</div>
            <div className="testimonial-role">{t.role}</div>
          </div>
        </div>
      </div>
      <div className="testimonial-dots">
        {testimonials.map((_, i) => (
          <button
            key={i}
            className={`testimonial-dot${i === active ? " active" : ""}`}
            onClick={() => setActive(i)}
            aria-label={`Testimonial ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
