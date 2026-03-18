"use client";

import ScrollAnimation from "./ScrollAnimation";

export default function ParentsInfo() {
  return (
    <section className="py-16 px-6">
      {/* Divider */}
      <div className="section-divider mb-12">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
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
          className="text-center text-sm leading-loose mb-10 opacity-80"
          style={{ fontFamily: "var(--font-serif)", lineHeight: "2.2" }}
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

      <ScrollAnimation delay={200}>
        <div
          className="text-center text-[15px] leading-[2.8]"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          <p>
            <span className="opacity-60">이한행</span>
            <span className="mx-1 opacity-30" style={{ color: "var(--color-gold)" }}>·</span>
            <span className="opacity-60">박경숙</span>
            <span className="opacity-50 text-sm mx-2">의 차남 </span>
            <span className="font-medium" style={{ color: "var(--color-charcoal)" }}>건호</span>
          </p>
          <p>
            <span className="opacity-60">OOO</span>
            <span className="mx-1 opacity-30" style={{ color: "var(--color-gold)" }}>·</span>
            <span className="opacity-60">OOO</span>
            <span className="opacity-50 text-sm mx-2">의 삼녀 </span>
            <span className="font-medium" style={{ color: "var(--color-charcoal)" }}>에스더</span>
          </p>
        </div>
      </ScrollAnimation>
    </section>
  );
}
