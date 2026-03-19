"use client";

import { useState } from "react";
import ScrollAnimation from "./ScrollAnimation";

interface Account {
  label: string;
  holder: string;
  bank: string;
  number: string;
}

const accounts: { title: string; items: Account[] }[] = [
  {
    title: "신랑측 계좌번호",
    items: [
      { label: "아버지", holder: "이한행", bank: "은행명", number: "000-000-000" },
    ],
  },
  {
    title: "신랑 계좌번호",
    items: [
      { label: "신랑", holder: "이건호", bank: "하나은행", number: "164-910697-26307" },
    ],
  },
];

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const textArea = document.createElement("textarea");
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <button
      onClick={handleCopy}
      style={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        gap: "4px",
        padding: "6px 12px",
        borderRadius: "9999px",
        fontSize: "12px",
        transition: "all 150ms",
        backgroundColor: copied ? "var(--color-deep-rose)" : "rgba(201,169,110,0.15)",
        color: copied ? "#fff" : "var(--color-charcoal)",
        fontFamily: "var(--font-sans)",
        border: "none",
        cursor: "pointer",
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
  );
}

function AccountAccordion({ title, items }: { title: string; items: Account[] }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ borderRadius: "12px", overflow: "hidden", backgroundColor: "rgba(255,255,255,0.6)" }}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 20px", fontSize: "14px", fontFamily: "var(--font-sans)", color: "var(--color-charcoal)", backgroundColor: "transparent", border: "none", cursor: "pointer" }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="1.5">
            <path d="M20 6H4C2.9 6 2 6.9 2 8v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2z" />
            <path d="M2 10h20" />
          </svg>
          <span>{title}</span>
        </div>
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 300ms" }}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      <div className={`accordion-content ${isOpen ? "open" : ""}`}>
        <div style={{ paddingLeft: "20px", paddingRight: "20px", paddingBottom: "16px", display: "flex", flexDirection: "column", gap: "8px" }}>
          {items.map((account, idx) => (
            <div
              key={idx}
              style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 16px", borderRadius: "8px", backgroundColor: "rgba(250,243,235,0.8)" }}
            >
              <div>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "12px", opacity: 0.5, marginBottom: "4px" }}>
                  {account.label} {account.holder}
                </p>
                <p style={{ fontFamily: "var(--font-sans)", color: "var(--color-charcoal)", fontSize: "14px" }}>
                  {account.bank} {account.number}
                </p>
              </div>
              <CopyButton text={`${account.bank} ${account.number} ${account.holder}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function GiftMoney() {
  return (
    <section style={{ backgroundColor: "var(--color-soft-pink)", padding: "64px 24px" }}>
      <div className="section-divider" style={{ marginBottom: "32px" }}>
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
          style={{ fontFamily: "var(--font-serif)", color: "var(--color-charcoal)", textAlign: "center", fontSize: "18px", marginBottom: "12px" }}
        >
          마음 전하실 곳
        </h2>
        <p
          style={{ fontFamily: "var(--font-sans)", textAlign: "center", fontSize: "12px", opacity: 0.5, marginBottom: "32px" }}
        >
          축하의 마음을 전해주세요
        </p>
      </ScrollAnimation>

      <ScrollAnimation delay={200}>
        <div style={{ maxWidth: "360px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "12px" }}>
          {accounts.map((group, idx) => (
            <AccountAccordion key={idx} title={group.title} items={group.items} />
          ))}
        </div>
      </ScrollAnimation>
    </section>
  );
}
