"use client";

import ScrollAnimation from "./ScrollAnimation";

export default function OurStory() {
  return (
    <section className="py-16 px-6">
      <div className="section-divider mb-8">
        <svg width="20" height="14" viewBox="0 0 20 14" fill="none">
          <path
            d="M10 14C10 14 1 8 1 4.5C1 2 3 0 5.5 0C7.5 0 9 1.5 10 3C11 1.5 12.5 0 14.5 0C17 0 19 2 19 4.5C19 8 10 14 10 14Z"
            stroke="#C48B9F"
            strokeWidth="0.8"
            fill="none"
            opacity="0.4"
          />
        </svg>
      </div>

      <ScrollAnimation>
        <h2
          className="text-center text-lg mb-8"
          style={{ fontFamily: "var(--font-serif)", color: "var(--color-charcoal)" }}
        >
          우리의 이야기
        </h2>
      </ScrollAnimation>

      <ScrollAnimation delay={200}>
        <div className="max-w-[360px] mx-auto">
          <p
            className="text-center text-sm leading-[2.2] opacity-70"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            페루에서의 우연한 만남으로
            <br />
            시작된 인연이
            <br />
            남미, 미국, 홍콩, 한국을 거쳐
            <br />
            깊은 사랑이 되었습니다.
            <br />
            <br />
            함께한 여정 속에서
            <br />
            평생의 동반자임을 확신하게 된 우리,
            <br />
            그 약속의 시작을
            <br />
            소중한 분들과 함께하고 싶습니다.
          </p>
        </div>
      </ScrollAnimation>
    </section>
  );
}
