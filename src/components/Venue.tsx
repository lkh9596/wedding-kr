"use client";

import ScrollAnimation from "./ScrollAnimation";

export default function Venue() {
  return (
    <section className="py-16 px-6">
      <div className="section-divider mb-8">
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
          className="text-center text-lg mb-2"
          style={{ fontFamily: "var(--font-serif)", color: "var(--color-charcoal)" }}
        >
          오시는 길
        </h2>
      </ScrollAnimation>

      <ScrollAnimation delay={100}>
        <p
          className="text-center text-[15px] mt-4 mb-1"
          style={{ fontFamily: "var(--font-serif)", color: "var(--color-charcoal)" }}
        >
          KU컨벤션 웨딩홀
        </p>
        <p className="text-center text-xs opacity-50 mb-8" style={{ fontFamily: "var(--font-sans)" }}>
          서울 광진구 아차산로36길 5
        </p>
      </ScrollAnimation>

      {/* Map */}
      <ScrollAnimation delay={200}>
        <div className="max-w-[420px] mx-auto mb-6 rounded-xl overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3163.7113307966206!2d127.0746261!3d37.53830149999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca4e7ac7792b9%3A0xeaff884567b6775a!2sKU%20Convention%20Wedding%20Hall!5e0!3m2!1sen!2skr!4v1773741385700!5m2!1sen!2skr"
            width="100%"
            height="280"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </ScrollAnimation>

      {/* Map buttons */}
      <ScrollAnimation delay={300}>
        <div className="flex justify-center gap-3 mb-10">
          <a
            href="https://map.kakao.com/link/to/KU컨벤션웨딩홀,37.5383,127.0746"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2.5 rounded-full text-xs"
            style={{
              backgroundColor: "#FEE500",
              color: "#3D3D3D",
              fontFamily: "var(--font-sans)",
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
            className="flex items-center gap-1.5 px-4 py-2.5 rounded-full text-xs"
            style={{
              backgroundColor: "#03C75A",
              color: "#fff",
              fontFamily: "var(--font-sans)",
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
          className="max-w-[360px] mx-auto rounded-xl p-6"
          style={{ backgroundColor: "rgba(255,255,255,0.5)" }}
        >
          {/* Subway */}
          <div className="mb-5">
            <div className="flex items-center gap-2 mb-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C48B9F" strokeWidth="1.5">
                <rect x="4" y="3" width="16" height="14" rx="3" />
                <line x1="4" y1="10" x2="20" y2="10" />
                <circle cx="8" cy="14" r="1" />
                <circle cx="16" cy="14" r="1" />
                <line x1="8" y1="17" x2="6" y2="20" />
                <line x1="16" y1="17" x2="18" y2="20" />
              </svg>
              <span
                className="text-xs font-medium"
                style={{ color: "var(--color-charcoal)", fontFamily: "var(--font-sans)" }}
              >
                지하철
              </span>
            </div>
            <div className="text-xs leading-relaxed opacity-60 pl-6" style={{ fontFamily: "var(--font-sans)" }}>
              <p className="mb-1">
                <span
                  className="inline-block w-4 h-4 rounded-full text-[10px] text-white text-center leading-4 mr-1.5"
                  style={{ backgroundColor: "#33A23D" }}
                >
                  2
                </span>
                건대입구역 5번출구
              </p>
              <p>
                <span
                  className="inline-block w-4 h-4 rounded-full text-[10px] text-white text-center leading-4 mr-1.5"
                  style={{ backgroundColor: "#747F00" }}
                >
                  7
                </span>
                건대입구역 4번출구
              </p>
            </div>
          </div>

          {/* Parking */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C48B9F" strokeWidth="1.5">
                <rect x="3" y="6" width="18" height="14" rx="2" />
                <path d="M9 10h3c1.7 0 3 1.3 3 3s-1.3 3-3 3H9V10z" />
                <line x1="9" y1="13" x2="12" y2="13" />
              </svg>
              <span
                className="text-xs font-medium"
                style={{ color: "var(--color-charcoal)", fontFamily: "var(--font-sans)" }}
              >
                주차
              </span>
            </div>
            <div className="text-xs leading-relaxed opacity-60 pl-6" style={{ fontFamily: "var(--font-sans)" }}>
              <p className="mb-1">KU컨벤션웨딩홀 전용주차장 이용 (1시간 무료)</p>
              <p>건대 수의과대학 주차장 이용 (2시간 무료)</p>
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </section>
  );
}
