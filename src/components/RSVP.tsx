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
          style={{ maxWidth: "400px", margin: "0 auto", borderRadius: "12px", overflow: "hidden" }}
        >
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSdvKX3_EwzPlh-Fvo9IAW1t_UZG-WaXjY7Z_oC2WZSvm4sBMA/viewform?embedded=true"
            width="100%"
            height="700"
            style={{ border: 0 }}
          >
            로드 중…
          </iframe>
        </div>
      </ScrollAnimation>
    </section>
  );
}
