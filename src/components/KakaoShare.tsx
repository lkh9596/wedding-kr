"use client";

import { useEffect, useRef, useState } from "react";

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
// Always share the deployed URL — never localhost or a preview origin, which
// KakaoTalk can't open on another device.
const SITE_URL = "https://lkh9596.github.io/wedding-kr/";

function copyWithFallback(text: string): Promise<boolean> {
  if (navigator.clipboard?.writeText) {
    return navigator.clipboard.writeText(text).then(
      () => true,
      () => legacyCopy(text)
    );
  }
  return Promise.resolve(legacyCopy(text));
}

function legacyCopy(text: string): boolean {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.setAttribute("readonly", "");
  textArea.style.position = "fixed";
  textArea.style.opacity = "0";
  document.body.appendChild(textArea);
  textArea.select();
  let ok = false;
  try {
    ok = document.execCommand("copy");
  } catch {
    ok = false;
  }
  document.body.removeChild(textArea);
  return ok;
}

const shareButton: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  gap: "8px",
  minHeight: "44px",
  padding: "0 22px",
  borderRadius: "9999px",
  fontFamily: "var(--font-sans)",
  whiteSpace: "nowrap",
  cursor: "pointer",
};

export default function KakaoShare() {
  const [status, setStatus] = useState("");
  const statusTimer = useRef<number | undefined>(undefined);

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

  useEffect(() => () => window.clearTimeout(statusTimer.current), []);

  const flashStatus = (message: string) => {
    setStatus(message);
    window.clearTimeout(statusTimer.current);
    statusTimer.current = window.setTimeout(() => setStatus(""), 2500);
  };

  const handleKakaoShare = () => {
    if (!window.Kakao?.isInitialized()) {
      flashStatus("카카오톡 공유를 준비하고 있어요. 잠시 후 다시 눌러 주세요.");
      return;
    }

    window.Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: "이건호 ♥ 에스더 결혼합니다",
        description: "2027년 4월 3일 토요일 오후 4시 20분\nKU컨벤션 웨딩홀 (건국대학교)",
        imageUrl: `${SITE_URL}main.JPG`,
        link: {
          mobileWebUrl: SITE_URL,
          webUrl: SITE_URL,
        },
      },
      buttons: [
        {
          title: "청첩장 보기",
          link: {
            mobileWebUrl: SITE_URL,
            webUrl: SITE_URL,
          },
        },
      ],
    });
  };

  const handleLinkShare = async () => {
    if (navigator.share) {
      navigator.share({
        title: "이건호 ♥ 에스더 결혼합니다",
        text: "2027년 4월 3일 토요일 오후 4시 20분\nKU컨벤션 웨딩홀 (건국대학교)",
        url: SITE_URL,
      }).catch(() => {});
      return;
    }

    const copied = await copyWithFallback(SITE_URL);
    flashStatus(copied ? "링크가 복사되었습니다." : "링크를 복사하지 못했어요. 주소창의 링크를 복사해 주세요.");
  };

  return (
    <section style={{ padding: "36px 24px" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "12px" }}>
        <button
          type="button"
          onClick={handleKakaoShare}
          style={{ ...shareButton, fontSize: "14px", backgroundColor: "#FEE500", color: "#3D3D3D", border: "none" }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="#3D3D3D" aria-hidden="true">
            <path d="M12 3C6.5 3 2 6.5 2 10.8c0 2.8 1.8 5.2 4.5 6.6l-1 3.6c-.1.2.1.4.3.3l4.2-2.8c.7.1 1.3.1 2 .1 5.5 0 10-3.5 10-7.8S17.5 3 12 3z" />
          </svg>
          카카오톡으로 공유하기
        </button>

        <button
          type="button"
          onClick={handleLinkShare}
          style={{ ...shareButton, fontSize: "13px", backgroundColor: "rgba(255,255,255,0.6)", color: "var(--color-charcoal)", border: "1px solid rgba(201,169,110,0.35)" }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
            <circle cx="18" cy="5" r="3" />
            <circle cx="6" cy="12" r="3" />
            <circle cx="18" cy="19" r="3" />
            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
          </svg>
          링크 공유하기
        </button>

        {/* Always rendered so screen readers announce updates. */}
        <p
          role="status"
          aria-live="polite"
          style={{ minHeight: "20px", fontFamily: "var(--font-sans)", fontSize: "13px", color: "var(--color-ink-muted)", textAlign: "center" }}
        >
          {status}
        </p>
      </div>
    </section>
  );
}
