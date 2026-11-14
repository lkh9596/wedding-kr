"use client";

import { useEffect, useRef, useState } from "react";

export default function CopyButton({ text, label = "복사" }: { text: string; label?: string }) {
  const [copied, setCopied] = useState(false);
  const resetTimer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(resetTimer.current), []);

  const showCopied = () => {
    setCopied(true);
    window.clearTimeout(resetTimer.current);
    resetTimer.current = window.setTimeout(() => setCopied(false), 2000);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      showCopied();
    } catch {
      const textArea = document.createElement("textarea");
      textArea.value = text;
      textArea.setAttribute("readonly", "");
      textArea.style.position = "fixed";
      textArea.style.opacity = "0";
      document.body.appendChild(textArea);
      textArea.select();
      const ok = document.execCommand("copy");
      document.body.removeChild(textArea);
      if (ok) showCopied();
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={copied ? "복사됨" : label}
      aria-live="polite"
      style={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        gap: "4px",
        flexShrink: 0,
        minHeight: "36px",
        padding: "0 12px",
        borderRadius: "9999px",
        fontSize: "13px",
        transition: "all 150ms",
        backgroundColor: copied ? "var(--color-rose-ink)" : "rgba(201,169,110,0.18)",
        color: copied ? "#fff" : "var(--color-charcoal)",
        fontFamily: "var(--font-sans)",
        border: "none",
        cursor: "pointer",
        whiteSpace: "nowrap",
      }}
    >
      {copied ? (
        <>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <polyline points="20 6 9 17 4 12" />
          </svg>
          복사됨
        </>
      ) : (
        <>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
            <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
          </svg>
          복사
        </>
      )}
    </button>
  );
}
