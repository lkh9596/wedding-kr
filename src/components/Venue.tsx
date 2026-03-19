"use client";

import ScrollAnimation from "./ScrollAnimation";

export default function Venue() {
  return (
    <section style={{ padding: "64px 24px" }}>
      <div className="section-divider" style={{ marginBottom: "32px" }}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M8 1C5.2 1 3 3.2 3 6C3 10 8 15 8 15C8 15 13 10 13 6C13 3.2 10.8 1 8 1Z"
            stroke="#C9A96E"
            strokeWidth="0.8"
            fill="none"
            opacity="0.5"
          />
          <circle cx="8" cy="6" r="2" stroke="#C9A96E" strokeWidth="0.6" opacity="0.4" />
        </svg>
      </div>

      <ScrollAnimation>
        <h2
          style={{ fontFamily: "var(--font-serif)", color: "var(--color-charcoal)", textAlign: "center", fontSize: "18px", marginBottom: "8px" }}
        >
          오시는 길
        </h2>
      </ScrollAnimation>

      <ScrollAnimation delay={100}>
        <p
          style={{ fontFamily: "var(--font-serif)", color: "var(--color-charcoal)", textAlign: "center", fontSize: "15px", marginTop: "16px", marginBottom: "4px" }}
        >
          KU컨벤션 웨딩홀
        </p>
        <p style={{ fontFamily: "var(--font-sans)", textAlign: "center", fontSize: "12px", opacity: 0.5, marginBottom: "32px" }}>
          서울 광진구 아차산로36길 5
        </p>
      </ScrollAnimation>

      {/* Map */}
      <ScrollAnimation delay={200}>
        <div style={{ maxWidth: "360px", margin: "0 auto", marginBottom: "16px", borderRadius: "12px", overflow: "hidden" }}>
          <iframe
            src="https://map.kakao.com/link/map/KU컨벤션웨딩홀,37.5383,127.0746"
            width="100%"
            height="250"
            style={{ border: 0 }}
            loading="lazy"
          />
        </div>
      </ScrollAnimation>

      {/* Map buttons */}
      <ScrollAnimation delay={300}>
        <div style={{ display: "flex", justifyContent: "center", gap: "12px", marginBottom: "24px" }}>
          <a
            href="https://map.kakao.com/link/to/KU컨벤션웨딩홀,37.5383,127.0746"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              padding: "8px 16px",
              borderRadius: "9999px",
              fontSize: "12px",
              backgroundColor: "#FEE500",
              color: "#3D3D3D",
              fontFamily: "var(--font-sans)",
              textDecoration: "none",
              whiteSpace: "nowrap",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="#3D3D3D">
              <path d="M12 3C6.5 3 2 6.5 2 10.8c0 2.8 1.8 5.2 4.5 6.6l-1 3.6c-.1.2.1.4.3.3l4.2-2.8c.7.1 1.3.1 2 .1 5.5 0 10-3.5 10-7.8S17.5 3 12 3z" />
            </svg>
            카카오맵
          </a>
          <a
            href="https://map.naver.com/v5/search/KU컨벤션웨딩홀"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              padding: "8px 16px",
              borderRadius: "9999px",
              fontSize: "12px",
              backgroundColor: "#03C75A",
              color: "#fff",
              fontFamily: "var(--font-sans)",
              textDecoration: "none",
              whiteSpace: "nowrap",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="#fff">
              <path d="M13.3 12.2L10.2 7.5H7v9h3.7v-4.7l3.1 4.7H17v-9h-3.7v4.7z" />
            </svg>
            네이버지도
          </a>
        </div>
      </ScrollAnimation>

      {/* Transportation info */}
      <ScrollAnimation delay={400}>
        <div
          style={{ maxWidth: "360px", margin: "0 auto", borderRadius: "12px", padding: "20px", backgroundColor: "rgba(255,255,255,0.5)" }}
        >
          {/* Subway */}
          <div style={{ marginBottom: "20px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C48B9F" strokeWidth="1.5">
                <rect x="4" y="3" width="16" height="14" rx="3" />
                <line x1="4" y1="10" x2="20" y2="10" />
                <circle cx="8" cy="14" r="1" />
                <circle cx="16" cy="14" r="1" />
                <line x1="8" y1="17" x2="6" y2="20" />
                <line x1="16" y1="17" x2="18" y2="20" />
              </svg>
              <span style={{ fontSize: "12px", fontWeight: 500, color: "var(--color-charcoal)", fontFamily: "var(--font-sans)" }}>
                지하철
              </span>
            </div>
            <div style={{ fontSize: "12px", lineHeight: "1.8", opacity: 0.6, paddingLeft: "24px", fontFamily: "var(--font-sans)" }}>
              <p style={{ marginBottom: "4px" }}>
                <span style={{ display: "inline-block", width: "16px", height: "16px", borderRadius: "50%", fontSize: "10px", color: "#fff", textAlign: "center", lineHeight: "16px", marginRight: "6px", backgroundColor: "#33A23D" }}>2</span>
                건대입구역 5번출구
              </p>
              <p>
                <span style={{ display: "inline-block", width: "16px", height: "16px", borderRadius: "50%", fontSize: "10px", color: "#fff", textAlign: "center", lineHeight: "16px", marginRight: "6px", backgroundColor: "#747F00" }}>7</span>
                건대입구역 4번출구
              </p>
            </div>
          </div>

          {/* Parking */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C48B9F" strokeWidth="1.5">
                <rect x="3" y="6" width="18" height="14" rx="2" />
                <path d="M9 10h3c1.7 0 3 1.3 3 3s-1.3 3-3 3H9V10z" />
                <line x1="9" y1="13" x2="12" y2="13" />
              </svg>
              <span style={{ fontSize: "12px", fontWeight: 500, color: "var(--color-charcoal)", fontFamily: "var(--font-sans)" }}>
                주차
              </span>
            </div>
            <div style={{ fontSize: "12px", lineHeight: "1.8", opacity: 0.6, paddingLeft: "24px", fontFamily: "var(--font-sans)" }}>
              <p style={{ marginBottom: "4px" }}>KU컨벤션웨딩홀 전용주차장 이용 (1시간 무료)</p>
              <p>건대 수의과대학 주차장 이용 (2시간 무료)</p>
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </section>
  );
}
