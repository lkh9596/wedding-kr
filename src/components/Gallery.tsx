"use client";

import { useRef, useState, useEffect } from "react";
import ScrollAnimation from "./ScrollAnimation";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const photos = [
  `${basePath}/1.jpg`,
  `${basePath}/2.jpg`,
  `${basePath}/3.jpg`,
  `${basePath}/4.JPG`,
  `${basePath}/5.JPG`,
  `${basePath}/6.JPG`,
  `${basePath}/7.JPG`,
];

export default function Gallery() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const itemWidth = container.offsetWidth * 0.72 + 12;
      const index = Math.round(scrollLeft / itemWidth);
      setActiveIndex(Math.min(index, photos.length - 1));
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section style={{ backgroundColor: "var(--color-soft-pink)", paddingTop: "64px", paddingBottom: "64px" }}>
      <div className="section-divider" style={{ marginBottom: "32px", paddingLeft: "24px", paddingRight: "24px" }}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <rect x="2" y="2" width="12" height="12" rx="1" stroke="#C9A96E" strokeWidth="0.8" opacity="0.5" />
          <circle cx="6" cy="6" r="1.5" stroke="#C9A96E" strokeWidth="0.6" opacity="0.4" />
          <path d="M2 12L6 8L9 11L12 7L14 10" stroke="#C9A96E" strokeWidth="0.6" opacity="0.4" />
        </svg>
      </div>

      <ScrollAnimation style={{ paddingLeft: "24px", paddingRight: "24px" }}>
        <h2
          style={{ fontFamily: "var(--font-serif)", color: "var(--color-charcoal)", textAlign: "center", fontSize: "18px", marginBottom: "32px" }}
        >
          갤러리
        </h2>
      </ScrollAnimation>

      <ScrollAnimation delay={200}>
        <div
          ref={scrollRef}
          className="gallery-scroll snap-x"
          style={{ display: "flex", gap: "12px", overflowX: "auto", padding: "0 24px 16px" }}
        >
          {photos.map((src, i) => (
            <div
              key={i}
              className="snap-center"
              style={{
                width: "75%",
                minWidth: "0",
                flexShrink: 0,
                aspectRatio: "3/4",
                borderRadius: "12px",
                overflow: "hidden",
              }}
            >
              <img
                src={src}
                alt={`Photo ${i + 1}`}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          ))}
        </div>

        {/* Dots indicator */}
        <div style={{ display: "flex", justifyContent: "center", gap: "6px", marginTop: "16px" }}>
          {photos.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                const el = scrollRef.current;
                if (!el) return;
                const card = el.children[i] as HTMLElement;
                card.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
              }}
              style={{
                backgroundColor: "var(--color-deep-rose)",
                opacity: i === activeIndex ? 0.8 : 0.2,
                transform: i === activeIndex ? "scale(1.3)" : "scale(1)",
                width: "6px",
                height: "6px",
                borderRadius: "9999px",
                transition: "all 300ms",
                cursor: "pointer",
                border: "none",
                padding: 0,
              }}
              aria-label={`Go to photo ${i + 1}`}
            />
          ))}
        </div>
      </ScrollAnimation>
    </section>
  );
}
