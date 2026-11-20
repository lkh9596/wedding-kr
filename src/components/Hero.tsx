"use client";

const GOOGLE_CAL_URL = "https://calendar.google.com/calendar/render?action=TEMPLATE&text=" +
  encodeURIComponent("이건호 ♥ 에스더 결혼식") +
  "&dates=20270403T072000Z/20270403T092000Z" +
  "&location=" + encodeURIComponent("KU컨벤션 웨딩홀 (건국대학교), 서울 광진구 아차산로36길 5") +
  "&details=" + encodeURIComponent("2027년 4월 3일 토요일 오후 4시 20분\nKU컨벤션 웨딩홀 (건국대학교)");

const SHORTCUTS = [
  { href: "#venue", label: "오시는 길" },
  { href: "#gift", label: "계좌 안내" },
  { href: "#contact", label: "연락처" },
];

function handleAddToCalendar() {
  window.open(GOOGLE_CAL_URL, "_blank");
}

// Staggered CSS entrance on load; the last item starts 400ms in.
const enter = (delayMs: number): React.CSSProperties => ({ animationDelay: `${delayMs}ms` });

export default function Hero() {
  return (
    <section
      className="hero"
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        paddingLeft: "24px",
        paddingRight: "24px",
        paddingTop: "32px",
        paddingBottom: "28px",
      }}
    >
      {/* Decorative top ornament */}
      <div className="hero-in" style={{ ...enter(0), marginBottom: "16px" }}>
        <svg
          width="40"
          height="40"
          viewBox="0 0 60 60"
          fill="none"
          aria-hidden="true"
          style={{ margin: "0 auto", display: "block" }}
        >
          <path
            d="M30 5C30 5 20 15 20 25C20 30.5 24.5 35 30 35C35.5 35 40 30.5 40 25C40 15 30 5 30 5Z"
            stroke="#C9A96E"
            strokeWidth="1"
            fill="none"
            opacity="0.6"
          />
          <path
            d="M30 15C30 15 24 21 24 27C24 30.3 26.7 33 30 33C33.3 33 36 30.3 36 27C36 21 30 15 30 15Z"
            stroke="#C48B9F"
            strokeWidth="0.8"
            fill="none"
            opacity="0.5"
          />
          <line x1="30" y1="35" x2="30" y2="55" stroke="#C9A96E" strokeWidth="0.8" opacity="0.4" />
          <line x1="22" y1="42" x2="30" y2="35" stroke="#C9A96E" strokeWidth="0.6" opacity="0.3" />
          <line x1="38" y1="42" x2="30" y2="35" stroke="#C9A96E" strokeWidth="0.6" opacity="0.3" />
        </svg>
      </div>

      {/* Greeting */}
      <p
        className="hero-in"
        style={{ ...enter(50), fontFamily: "var(--font-serif)", color: "var(--color-deep-rose)", textAlign: "center", fontSize: "13px", letterSpacing: "0.3em", marginBottom: "20px" }}
      >
        WEDDING INVITATION
      </p>

      {/* Couple photo: a 4:5 frame crops the empty backdrop above the couple.
          Crop with CSS only; main.JPG is also the share thumbnail. */}
      <div className="hero-in" style={{ ...enter(100), width: "100%", maxWidth: "280px", marginBottom: "24px" }}>
        <div style={{ position: "relative", width: "100%", aspectRatio: "4/5", borderRadius: "16px", overflow: "hidden" }}>
          <img
            src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/main.JPG`}
            alt="이건호 & 에스더"
            fetchPriority="high"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 60%" }}
          />
        </div>
      </div>

      {/* Main greeting */}
      <h1
        className="hero-in"
        style={{ ...enter(200), fontFamily: "var(--font-serif)", color: "var(--color-charcoal)", textAlign: "center", fontSize: "22px", lineHeight: "1.5", marginBottom: "12px" }}
      >
        소중한 분들을
        <br />
        초대합니다
      </h1>

      {/* Couple names */}
      <div
        className="hero-in"
        style={{ ...enter(250), fontFamily: "var(--font-serif)", color: "var(--color-charcoal)", display: "flex", alignItems: "center", justifyContent: "center", gap: "20px", fontSize: "20px" }}
      >
        <span>이건호</span>
        <span style={{ color: "var(--color-deep-rose)", fontSize: "14px" }}>&</span>
        <span>에스더</span>
      </div>

      {/* Date and venue */}
      <div className="hero-in" style={enter(300)}>
        <p
          style={{ color: "var(--color-gold-ink)", fontFamily: "var(--font-serif)", textAlign: "center", fontSize: "15px", marginTop: "14px", letterSpacing: "0.02em" }}
        >
          2027년 4월 3일 토요일 오후 4시 20분
        </p>
        <p
          style={{ color: "var(--color-ink-muted)", fontFamily: "var(--font-sans)", textAlign: "center", fontSize: "14px", marginTop: "4px" }}
        >
          KU컨벤션 웨딩홀 (건국대학교)
        </p>
      </div>

      {/* Add to calendar */}
      <div className="hero-in" style={{ ...enter(350), marginTop: "18px", display: "flex", justifyContent: "center" }}>
        <button
          type="button"
          onClick={handleAddToCalendar}
          className="btn-calendar"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            minHeight: "44px",
            padding: "0 20px",
            borderRadius: "9999px",
            fontFamily: "var(--font-sans)",
            fontSize: "14px",
            backgroundColor: "var(--color-rose-ink)",
            color: "#fff",
            border: "none",
            whiteSpace: "nowrap",
            cursor: "pointer",
          }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
          캘린더에 추가
        </button>
      </div>

      {/* Shortcuts for guests coming back for directions, accounts or phone numbers */}
      <nav aria-label="바로가기" className="hero-in" style={{ ...enter(400), marginTop: "8px" }}>
        <ul style={{ listStyle: "none", display: "flex", alignItems: "center", justifyContent: "center" }}>
          {SHORTCUTS.map((item, i) => (
            <li key={item.href} style={{ display: "flex", alignItems: "center" }}>
              {i > 0 && (
                <span aria-hidden="true" style={{ color: "var(--color-gold)", fontSize: "12px" }}>
                  ·
                </span>
              )}
              <a
                href={item.href}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  minHeight: "44px",
                  padding: "0 12px",
                  fontFamily: "var(--font-sans)",
                  fontSize: "14px",
                  color: "var(--color-ink-muted)",
                  textDecoration: "underline",
                  textDecorationColor: "rgba(110,100,95,0.35)",
                  textUnderlineOffset: "4px",
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
}
