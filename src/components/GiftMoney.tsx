"use client";

import { useState } from "react";
import ScrollAnimation from "./ScrollAnimation";

export default function GiftMoney() {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const accountNumber = "은행명 000-000-000";
  const accountHolder = "이한행";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(`${accountNumber} ${accountHolder}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for older browsers
      const textArea = document.createElement("textarea");
      textArea.value = `${accountNumber} ${accountHolder}`;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section className="py-16 px-6" style={{ backgroundColor: "var(--color-soft-pink)" }}>
      <div className="section-divider mb-8">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M8 1L10 5.5H15L11 8.5L12.5 13L8 10L3.5 13L5 8.5L1 5.5H6L8 1Z"
            stroke="#C9A96E"
            strokeWidth="0.8"
            fill="none"
            opacity="0.5"
          />
        </svg>
      </div>

      <ScrollAnimation>
        <h2
          className="text-center text-lg mb-3"
          style={{ fontFamily: "var(--font-serif)", color: "var(--color-charcoal)" }}
        >
          마음 전하실 곳
        </h2>
        <p
          className="text-center text-xs opacity-50 mb-8"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          축하의 마음을 전해주세요
        </p>
      </ScrollAnimation>

      <ScrollAnimation delay={200}>
        <div style={{ maxWidth: "360px", margin: "0 auto" }}>
          {/* Groom side accordion */}
          <div
            className="rounded-xl overflow-hidden"
            style={{ backgroundColor: "rgba(255,255,255,0.6)" }}
          >
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="cursor-pointer"
              style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 20px", fontSize: "14px", fontFamily: "var(--font-sans)", color: "var(--color-charcoal)", backgroundColor: "transparent", border: "none" }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="1.5">
                  <path d="M20 6H4C2.9 6 2 6.9 2 8v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2z" />
                  <path d="M2 10h20" />
                </svg>
                <span>신랑측 계좌번호</span>
              </div>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="transition-transform duration-300"
                style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>

            <div className={`accordion-content ${isOpen ? "open" : ""}`}>
              <div className="px-5 pb-4">
                <div
                  className="flex items-center justify-between py-3 px-4 rounded-lg"
                  style={{ backgroundColor: "rgba(250,243,235,0.8)" }}
                >
                  <div>
                    <p className="text-xs opacity-50 mb-1" style={{ fontFamily: "var(--font-sans)" }}>
                      아버지 {accountHolder}
                    </p>
                    <p className="text-sm" style={{ fontFamily: "var(--font-sans)", color: "var(--color-charcoal)" }}>
                      {accountNumber}
                    </p>
                  </div>
                  <button
                    onClick={handleCopy}
                    className="relative flex items-center gap-1 px-3 py-1.5 rounded-full text-xs transition-all"
                    style={{
                      backgroundColor: copied ? "var(--color-deep-rose)" : "rgba(201,169,110,0.15)",
                      color: copied ? "#fff" : "var(--color-charcoal)",
                      fontFamily: "var(--font-sans)",
                    }}
                  >
                    {copied ? (
                      <>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        복사됨
                      </>
                    ) : (
                      <>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                          <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
                        </svg>
                        복사
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </section>
  );
}
