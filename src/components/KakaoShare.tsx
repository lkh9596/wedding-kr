"use client";

import ScrollAnimation from "./ScrollAnimation";

export default function KakaoShare() {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "건호 ♥ 에스더 결혼합니다",
        text: "2027년 4월 3일 토요일 오후 4시 20분\nKU컨벤션 웨딩홀",
        url: window.location.href,
      }).catch(() => {});
    } else {
      alert("카카오톡 공유 기능은 모바일에서 이용 가능합니다.");
    }
  };

  return (
    <section className="py-12 px-6">
      <ScrollAnimation>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "12px" }}>
          <button
            onClick={handleShare}
            className="cursor-pointer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "10px 20px",
              borderRadius: "9999px",
              fontSize: "13px",
              backgroundColor: "#FEE500",
              color: "#3D3D3D",
              fontFamily: "var(--font-sans)",
              border: "none",
              whiteSpace: "nowrap",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#3D3D3D">
              <path d="M12 3C6.5 3 2 6.5 2 10.8c0 2.8 1.8 5.2 4.5 6.6l-1 3.6c-.1.2.1.4.3.3l4.2-2.8c.7.1 1.3.1 2 .1 5.5 0 10-3.5 10-7.8S17.5 3 12 3z" />
            </svg>
            카카오톡으로 공유하기
          </button>

          <button
            onClick={() => {
              if (navigator.share) {
                navigator.share({
                  title: "건호 ♥ 에스더 결혼합니다",
                  text: "2027년 4월 3일 토요일 오후 4시 20분\nKU컨벤션 웨딩홀",
                  url: window.location.href,
                }).catch(() => {});
              }
            }}
            className="cursor-pointer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "10px 20px",
              borderRadius: "9999px",
              fontSize: "12px",
              backgroundColor: "rgba(255,255,255,0.6)",
              color: "var(--color-charcoal)",
              fontFamily: "var(--font-sans)",
              border: "1px solid rgba(201,169,110,0.2)",
              whiteSpace: "nowrap",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="18" cy="5" r="3" />
              <circle cx="6" cy="12" r="3" />
              <circle cx="18" cy="19" r="3" />
              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
              <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
            </svg>
            링크 공유하기
          </button>
        </div>
      </ScrollAnimation>
    </section>
  );
}
