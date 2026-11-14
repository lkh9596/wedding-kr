"use client";

import CopyButton from "./CopyButton";
import ScrollAnimation from "./ScrollAnimation";

const VENUE_ADDRESS = "서울 광진구 아차산로36길 5";

const mapButton: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  gap: "6px",
  minHeight: "44px",
  padding: "0 18px",
  borderRadius: "9999px",
  fontSize: "14px",
  fontFamily: "var(--font-sans)",
  textDecoration: "none",
  whiteSpace: "nowrap",
};

const infoLabel: React.CSSProperties = {
  fontSize: "14px",
  fontWeight: 500,
  color: "var(--color-charcoal)",
  fontFamily: "var(--font-sans)",
};

const infoText: React.CSSProperties = {
  fontSize: "14px",
  lineHeight: "1.8",
  color: "var(--color-ink-muted)",
  paddingLeft: "24px",
  fontFamily: "var(--font-sans)",
};

const lineBadge: React.CSSProperties = {
  display: "inline-block",
  width: "18px",
  height: "18px",
  borderRadius: "50%",
  fontSize: "11px",
  color: "#fff",
  textAlign: "center",
  lineHeight: "18px",
  marginRight: "6px",
};

export default function Venue() {
  return (
    <section id="venue" style={{ padding: "36px 24px" }}>
      <div className="section-divider" style={{ marginBottom: "20px" }}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
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

      {/* Everything below is practical information, so it renders without a fade-in. */}
      <p
        style={{ fontFamily: "var(--font-serif)", color: "var(--color-charcoal)", textAlign: "center", fontSize: "16px", marginTop: "12px", marginBottom: "6px" }}
      >
        KU컨벤션 웨딩홀
      </p>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", marginBottom: "24px" }}>
        <p style={{ fontFamily: "var(--font-sans)", textAlign: "center", fontSize: "14px", color: "var(--color-ink-muted)" }}>
          {VENUE_ADDRESS}
        </p>
        <CopyButton text={VENUE_ADDRESS} label="주소 복사" />
      </div>

      {/* Map */}
      <div style={{ maxWidth: "360px", margin: "0 auto", marginBottom: "16px", borderRadius: "12px", overflow: "hidden", backgroundColor: "rgba(255,255,255,0.5)" }}>
        <iframe
          title="KU컨벤션 웨딩홀 위치 지도"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3163.7113307966206!2d127.0746261!3d37.53830149999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca4e7ac7792b9%3A0xeaff884567b6775a!2sKU%20Convention%20Wedding%20Hall!5e0!3m2!1sko!2skr!4v1773741385700!5m2!1sko!2skr"
          width="100%"
          height="250"
          style={{ border: 0, display: "block" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      {/* Map buttons */}
      <div style={{ display: "flex", justifyContent: "center", gap: "12px", marginBottom: "20px" }}>
        <a
          href="https://map.kakao.com/link/to/KU컨벤션웨딩홀,37.5383,127.0746"
          target="_blank"
          rel="noopener noreferrer"
          style={{ ...mapButton, backgroundColor: "#FEE500", color: "#3D3D3D" }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="#3D3D3D" aria-hidden="true">
            <path d="M12 3C6.5 3 2 6.5 2 10.8c0 2.8 1.8 5.2 4.5 6.6l-1 3.6c-.1.2.1.4.3.3l4.2-2.8c.7.1 1.3.1 2 .1 5.5 0 10-3.5 10-7.8S17.5 3 12 3z" />
          </svg>
          카카오맵
        </a>
        <a
          href="https://map.naver.com/p/search/KU컨벤션웨딩홀"
          target="_blank"
          rel="noopener noreferrer"
          style={{ ...mapButton, backgroundColor: "#03C75A", color: "#fff" }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="#fff" aria-hidden="true">
            <path d="M13.3 12.2L10.2 7.5H7v9h3.7v-4.7l3.1 4.7H17v-9h-3.7v4.7z" />
          </svg>
          네이버지도
        </a>
      </div>

      {/* Transportation info */}
      <div
        style={{ maxWidth: "360px", margin: "0 auto", borderRadius: "12px", padding: "20px", backgroundColor: "rgba(255,255,255,0.5)" }}
      >
        {/* Subway */}
        <div style={{ marginBottom: "20px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C48B9F" strokeWidth="1.5" aria-hidden="true">
              <rect x="4" y="3" width="16" height="14" rx="3" />
              <line x1="4" y1="10" x2="20" y2="10" />
              <circle cx="8" cy="14" r="1" />
              <circle cx="16" cy="14" r="1" />
              <line x1="8" y1="17" x2="6" y2="20" />
              <line x1="16" y1="17" x2="18" y2="20" />
            </svg>
            <span style={infoLabel}>지하철</span>
          </div>
          <div style={infoText}>
            <p style={{ marginBottom: "4px" }}>
              <span style={{ ...lineBadge, backgroundColor: "#33A23D" }} aria-label="2호선">2</span>
              건대입구역 5번출구
            </p>
            <p>
              <span style={{ ...lineBadge, backgroundColor: "#747F00" }} aria-label="7호선">7</span>
              건대입구역 4번출구
            </p>
          </div>
        </div>

        {/* Parking */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C48B9F" strokeWidth="1.5" aria-hidden="true">
              <rect x="3" y="6" width="18" height="14" rx="2" />
              <path d="M9 10h3c1.7 0 3 1.3 3 3s-1.3 3-3 3H9V10z" />
              <line x1="9" y1="13" x2="12" y2="13" />
            </svg>
            <span style={infoLabel}>주차</span>
          </div>
          <div style={infoText}>
            <p style={{ marginBottom: "4px" }}>KU컨벤션웨딩홀 전용주차장 이용 (1시간&nbsp;무료)</p>
            <p>건대 수의과대학 주차장 이용 (2시간&nbsp;무료)</p>
          </div>
        </div>
      </div>
    </section>
  );
}
