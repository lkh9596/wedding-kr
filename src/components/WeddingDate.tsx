"use client";

import ScrollAnimation from "./ScrollAnimation";

const GOOGLE_CAL_URL = "https://calendar.google.com/calendar/render?action=TEMPLATE&text=" +
  encodeURIComponent("이건호 ♥ 에스더 결혼식") +
  "&dates=20270403T072000Z/20270403T092000Z" +
  "&location=" + encodeURIComponent("KU컨벤션 웨딩홀, 서울 광진구 아차산로36길 5") +
  "&details=" + encodeURIComponent("2027년 4월 3일 토요일 오후 4시 20분\nKU컨벤션 웨딩홀");

function handleAddToCalendar() {
  window.open(GOOGLE_CAL_URL, "_blank");
}

export default function WeddingDate() {
  return (
    <section style={{ backgroundColor: "var(--color-soft-pink)", padding: "64px 24px" }}>
      <div className="section-divider" style={{ marginBottom: "32px" }}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <circle cx="8" cy="8" r="5" stroke="#C9A96E" strokeWidth="0.8" opacity="0.5" />
          <circle cx="8" cy="8" r="2" stroke="#C9A96E" strokeWidth="0.6" opacity="0.4" />
        </svg>
      </div>

      <ScrollAnimation>
        <h2
          style={{ fontFamily: "var(--font-serif)", color: "var(--color-charcoal)", textAlign: "center", fontSize: "18px", marginBottom: "8px" }}
        >
          예식 안내
        </h2>
      </ScrollAnimation>

      <ScrollAnimation delay={100}>
        <p
          style={{ fontFamily: "var(--font-serif)", color: "var(--color-charcoal)", textAlign: "center", fontSize: "15px", marginTop: "16px", marginBottom: "8px" }}
        >
          2027년 4월 3일 토요일
        </p>
        <p
          style={{ fontFamily: "var(--font-serif)", color: "var(--color-deep-rose)", textAlign: "center", fontSize: "15px", marginBottom: "32px" }}
        >
          오후 4시 20분
        </p>
      </ScrollAnimation>

      {/* Venue name & Calendar button */}
      <ScrollAnimation delay={300}>
        <p style={{ fontFamily: "var(--font-sans)", textAlign: "center", fontSize: "12px", opacity: 0.5, marginBottom: "16px" }}>
          KU컨벤션 웨딩홀
        </p>
        <div style={{ display: "flex", justifyContent: "center", paddingBottom: "16px" }}>
          <button
            onClick={handleAddToCalendar}
            className="btn-calendar"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "5px",
              padding: "7px 16px",
              borderRadius: "9999px",
              fontFamily: "var(--font-sans)",
              fontSize: "11px",
              backgroundColor: "var(--color-deep-rose)",
              color: "#fff",
              border: "none",
              whiteSpace: "nowrap",
              cursor: "pointer",
            }}
          >
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            캘린더에 추가
          </button>
        </div>
      </ScrollAnimation>
    </section>
  );
}
