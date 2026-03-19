"use client";

import { useEffect } from "react";
import ScrollAnimation from "./ScrollAnimation";

declare global {
  interface Window {
    Kakao: {
      init: (key: string) => void;
      isInitialized: () => boolean;
      Share: {
        sendDefault: (options: Record<string, unknown>) => void;
      };
    };
  }
}

const KAKAO_KEY = "509f69cf3a948a498b7790421654fb55";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function KakaoShare() {
  useEffect(() => {
    const initKakao = () => {
      if (window.Kakao && !window.Kakao.isInitialized()) {
        window.Kakao.init(KAKAO_KEY);
      }
    };

    if (window.Kakao) {
      initKakao();
    } else {
      const interval = setInterval(() => {
        if (window.Kakao) {
          initKakao();
          clearInterval(interval);
        }
      }, 500);
      return () => clearInterval(interval);
    }
  }, []);

  const handleKakaoShare = () => {
    if (!window.Kakao?.isInitialized()) {
      alert("카카오 SDK가 로딩 중입니다. 잠시 후 다시 시도해주세요.");
      return;
    }

    window.Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: "이건호 ♥ 에스더 결혼합니다",
        description: "2027년 4월 3일 토요일 오후 4시 20분\nKU컨벤션 웨딩홀",
        imageUrl: `${window.location.origin}${basePath}/main.JPG`,
        link: {
          mobileWebUrl: window.location.href,
          webUrl: window.location.href,
        },
      },
      buttons: [
        {
          title: "청첩장 보기",
          link: {
            mobileWebUrl: window.location.href,
            webUrl: window.location.href,
          },
        },
      ],
    });
  };

  const handleLinkShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "이건호 ♥ 에스더 결혼합니다",
        text: "2027년 4월 3일 토요일 오후 4시 20분\nKU컨벤션 웨딩홀",
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href).then(() => {
        alert("링크가 복사되었습니다!");
      });
    }
  };

  return (
    <section style={{ padding: "48px 24px" }}>
      <ScrollAnimation>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "12px" }}>
          <button
            onClick={handleKakaoShare}
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
              cursor: "pointer",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#3D3D3D">
              <path d="M12 3C6.5 3 2 6.5 2 10.8c0 2.8 1.8 5.2 4.5 6.6l-1 3.6c-.1.2.1.4.3.3l4.2-2.8c.7.1 1.3.1 2 .1 5.5 0 10-3.5 10-7.8S17.5 3 12 3z" />
            </svg>
            카카오톡으로 공유하기
          </button>

          <button
            onClick={handleLinkShare}
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
              cursor: "pointer",
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
