"use client";

import ScrollAnimation from "./ScrollAnimation";

export default function Hero() {
  return (
    <section style={{ position: "relative", minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", paddingLeft: "24px", paddingRight: "24px", paddingTop: "64px", paddingBottom: "48px" }}>
      {/* Decorative top ornament */}
      <ScrollAnimation style={{ marginBottom: "32px" }}>
        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          className="ornament-animate"
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
      </ScrollAnimation>

      {/* Greeting */}
      <ScrollAnimation delay={200}>
        <p
          style={{ fontFamily: "var(--font-serif)", color: "var(--color-deep-rose)", textAlign: "center", fontSize: "14px", letterSpacing: "0.3em", marginBottom: "40px" }}
        >
          WEDDING INVITATION
        </p>
      </ScrollAnimation>

      {/* Couple photo */}
      <ScrollAnimation delay={400} style={{ width: "100%", maxWidth: "320px", marginBottom: "40px" }}>
        <div style={{ position: "relative", width: "100%", aspectRatio: "3/4", borderRadius: "16px", overflow: "hidden" }}>
          <img
            src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/main.JPG`}
            alt="이건호 & 에스더"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      </ScrollAnimation>

      {/* Main greeting */}
      <ScrollAnimation delay={600}>
        <h1
          style={{ fontFamily: "var(--font-serif)", color: "var(--color-charcoal)", textAlign: "center", fontSize: "24px", lineHeight: "1.625", marginBottom: "24px" }}
        >
          소중한 분들을
          <br />
          초대합니다
        </h1>
      </ScrollAnimation>

      {/* Couple names */}
      <ScrollAnimation delay={800}>
        <div
          style={{ fontFamily: "var(--font-serif)", color: "var(--color-charcoal)", display: "flex", alignItems: "center", justifyContent: "center", gap: "20px", fontSize: "20px" }}
        >
          <span>이건호</span>
          <span
            style={{ color: "var(--color-deep-rose)", fontSize: "14px" }}
          >
            &
          </span>
          <span>에스더</span>
        </div>
      </ScrollAnimation>

      {/* Date summary */}
      <ScrollAnimation delay={1000}>
        <p
          style={{ color: "var(--color-gold)", fontFamily: "var(--font-serif)", textAlign: "center", fontSize: "14px", marginTop: "24px", letterSpacing: "0.05em" }}
        >
          2027. 04. 03 SAT PM 4:20
        </p>
        <p
          style={{ fontFamily: "var(--font-sans)", textAlign: "center", fontSize: "12px", marginTop: "8px", letterSpacing: "0.05em", opacity: 0.7 }}
        >
          KU컨벤션 웨딩홀
        </p>
      </ScrollAnimation>

      {/* Scroll indicator */}
      <ScrollAnimation delay={1200} style={{ marginTop: "48px" }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", opacity: 0.3 }}>
          <div
            className="animate-pulse"
            style={{ backgroundColor: "var(--color-gold)", width: "1px", height: "32px" }}
          />
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            style={{ marginTop: "4px" }}
          >
            <path
              d="M2 4L6 8L10 4"
              stroke="#C9A96E"
              strokeWidth="1"
              fill="none"
            />
          </svg>
        </div>
      </ScrollAnimation>
    </section>
  );
}
