"use client";

import ScrollAnimation from "./ScrollAnimation";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-16 pb-12">
      {/* Decorative top ornament */}
      <ScrollAnimation className="mb-8">
        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          className="ornament-animate mx-auto"
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
          className="text-center text-sm tracking-[0.3em] mb-10"
          style={{ fontFamily: "var(--font-serif)", color: "var(--color-deep-rose)" }}
        >
          WEDDING INVITATION
        </p>
      </ScrollAnimation>

      {/* Couple photo */}
      <ScrollAnimation delay={400} className="w-full max-w-[320px] mb-10">
        <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden">
          <img
            src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/main.JPG`}
            alt="이건호 & 에스더"
            className="w-full h-full object-cover"
          />
        </div>
      </ScrollAnimation>

      {/* Main greeting */}
      <ScrollAnimation delay={600}>
        <h1
          className="text-center text-2xl leading-relaxed mb-6"
          style={{ fontFamily: "var(--font-serif)", color: "var(--color-charcoal)" }}
        >
          소중한 분들을
          <br />
          초대합니다
        </h1>
      </ScrollAnimation>

      {/* Couple names */}
      <ScrollAnimation delay={800}>
        <div
          className="flex items-center justify-center gap-5 text-xl"
          style={{ fontFamily: "var(--font-serif)", color: "var(--color-charcoal)" }}
        >
          <span>이건호</span>
          <span
            className="text-sm"
            style={{ color: "var(--color-deep-rose)" }}
          >
            &
          </span>
          <span>에스더</span>
        </div>
      </ScrollAnimation>

      {/* Date summary */}
      <ScrollAnimation delay={1000}>
        <p
          className="text-center text-sm mt-6 tracking-wider"
          style={{ color: "var(--color-gold)", fontFamily: "var(--font-serif)" }}
        >
          2027. 04. 03 SAT PM 4:20
        </p>
        <p
          className="text-center text-xs mt-2 tracking-wider opacity-70"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          KU컨벤션 웨딩홀
        </p>
      </ScrollAnimation>

      {/* Scroll indicator */}
      <ScrollAnimation delay={1200} className="mt-12">
        <div className="flex flex-col items-center opacity-30">
          <div
            className="w-px h-8 animate-pulse"
            style={{ backgroundColor: "var(--color-gold)" }}
          />
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            className="mt-1"
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
