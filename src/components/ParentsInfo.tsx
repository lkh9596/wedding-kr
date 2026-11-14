"use client";

import ScrollAnimation from "./ScrollAnimation";

export default function ParentsInfo() {
  return (
    <section style={{ padding: "36px 24px" }}>
      {/* Divider */}
      <div className="section-divider" style={{ marginBottom: "20px" }}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path
            d="M8 1L9.5 6.5H15L10.5 9.5L12 15L8 11.5L4 15L5.5 9.5L1 6.5H6.5L8 1Z"
            stroke="#C9A96E"
            strokeWidth="0.8"
            fill="none"
            opacity="0.5"
          />
        </svg>
      </div>

      <ScrollAnimation>
        <p
          style={{ fontFamily: "var(--font-serif)", lineHeight: "2.2", textAlign: "center", fontSize: "14px", marginBottom: "32px", opacity: 0.8 }}
        >
          서로가 마주보며 다져온 사랑을
          <br />
          이제 함께 한 곳을 바라보며
          <br />
          걸어가고자 합니다.
          <br />
          <br />
          저희 두 사람이 사랑의 이름으로
          <br />
          지켜나갈 수 있도록
          <br />
          오셔서 축복해 주십시오.
        </p>
      </ScrollAnimation>

      {/* Names stay visible immediately: parents' guests look for these first. */}
      <div
        style={{ fontFamily: "var(--font-serif)", textAlign: "center", fontSize: "16px", lineHeight: "2.4" }}
      >
        <p>
          <span style={{ color: "var(--color-ink-muted)" }}>이한행</span>
          <span aria-hidden="true" style={{ color: "var(--color-gold)", margin: "0 4px" }}>·</span>
          <span style={{ color: "var(--color-ink-muted)" }}>박경숙</span>
          <span style={{ color: "var(--color-ink-muted)", fontSize: "14px", margin: "0 8px" }}>의 차남</span>
          <span style={{ color: "var(--color-charcoal)", fontWeight: 500 }}>이건호</span>
        </p>
        <p>
          <span style={{ color: "var(--color-ink-muted)" }}>Jim Tan Rui Xia</span>
          <span style={{ color: "var(--color-ink-muted)", fontSize: "14px", margin: "0 8px" }}>의 삼녀</span>
          <span style={{ color: "var(--color-charcoal)", fontWeight: 500 }}>에스더</span>
        </p>
      </div>
    </section>
  );
}
