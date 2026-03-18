"use client";

export default function Footer() {
  return (
    <footer
      style={{ backgroundColor: "var(--color-soft-pink)", padding: "48px 24px", textAlign: "center" }}
    >
      <div style={{ marginBottom: "16px" }}>
        <svg width="24" height="20" viewBox="0 0 24 20" fill="none" style={{ margin: "0 auto 16px", display: "block" }}>
          <path
            d="M12 20C12 20 1 12 1 6C1 2.7 3.7 0 7 0C9.3 0 11.2 1.5 12 3.5C12.8 1.5 14.7 0 17 0C20.3 0 23 2.7 23 6C23 12 12 20 12 20Z"
            fill="#C48B9F"
            opacity="0.15"
          />
        </svg>
      </div>

      <p
        style={{
          fontFamily: "var(--font-serif)",
          color: "var(--color-charcoal)",
          opacity: 0.6,
          fontSize: "14px",
          marginBottom: "8px",
        }}
      >
        이건호 & 에스더
      </p>

      <p
        style={{
          fontFamily: "var(--font-sans)",
          color: "var(--color-gold)",
          opacity: 0.5,
          fontSize: "12px",
          letterSpacing: "0.1em",
        }}
      >
        2027. 04. 03
      </p>

      <div
        style={{ marginTop: "32px", paddingTop: "24px", borderTop: "1px solid rgba(201,169,110,0.15)" }}
      >
        <p
          style={{ fontFamily: "var(--font-sans)", fontSize: "10px", opacity: 0.3 }}
        >
          Made with love
        </p>
      </div>
    </footer>
  );
}
