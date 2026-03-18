"use client";

export default function Footer() {
  return (
    <footer
      className="py-12 px-6 text-center"
      style={{ backgroundColor: "var(--color-soft-pink)" }}
    >
      <div className="mb-4">
        <svg width="24" height="20" viewBox="0 0 24 20" fill="none" className="mx-auto mb-4">
          <path
            d="M12 20C12 20 1 12 1 6C1 2.7 3.7 0 7 0C9.3 0 11.2 1.5 12 3.5C12.8 1.5 14.7 0 17 0C20.3 0 23 2.7 23 6C23 12 12 20 12 20Z"
            fill="#C48B9F"
            opacity="0.15"
          />
        </svg>
      </div>

      <p
        className="text-sm mb-2"
        style={{
          fontFamily: "var(--font-serif)",
          color: "var(--color-charcoal)",
          opacity: 0.6,
        }}
      >
        건호 & 에스더
      </p>

      <p
        className="text-xs tracking-wider"
        style={{
          fontFamily: "var(--font-sans)",
          color: "var(--color-gold)",
          opacity: 0.5,
        }}
      >
        2027. 04. 03
      </p>

      <div
        className="mt-8 pt-6"
        style={{ borderTop: "1px solid rgba(201,169,110,0.15)" }}
      >
        <p
          className="text-[10px] opacity-30"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          Made with love
        </p>
      </div>
    </footer>
  );
}
