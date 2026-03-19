"use client";

import ScrollAnimation from "./ScrollAnimation";

export default function RSVP() {
  return (
    <section style={{ padding: "64px 24px" }}>
      <div className="section-divider" style={{ marginBottom: "32px" }}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M1 4L8 9L15 4"
            stroke="#C9A96E"
            strokeWidth="0.8"
            opacity="0.5"
          />
          <rect x="1" y="3" width="14" height="10" rx="1" stroke="#C9A96E" strokeWidth="0.8" opacity="0.5" />
        </svg>
      </div>

      <ScrollAnimation>
        <h2
          style={{ fontFamily: "var(--font-serif)", color: "var(--color-charcoal)", textAlign: "center", fontSize: "18px", marginBottom: "12px" }}
        >
          참석 여부
        </h2>
      </ScrollAnimation>

      <ScrollAnimation delay={200}>
        <div
          style={{ maxWidth: "360px", margin: "0 auto", borderRadius: "12px", padding: "32px", textAlign: "center", backgroundColor: "rgba(255,255,255,0.5)" }}
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#C48B9F"
            strokeWidth="1"
            style={{ margin: "0 auto 16px", display: "block", opacity: 0.4 }}
          >
            <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
            <polyline points="10 9 9 9 8 9" />
          </svg>
          <p
            style={{ fontFamily: "var(--font-sans)", fontSize: "14px", opacity: 0.5 }}
          >
            준비 중입니다
          </p>
        </div>
      </ScrollAnimation>
    </section>
  );
}
