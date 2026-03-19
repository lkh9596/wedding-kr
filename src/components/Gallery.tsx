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
    <section className="py-16" style={{ backgroundColor: "var(--color-soft-pink)" }}>
      <div className="section-divider mb-8 px-6">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <rect x="2" y="2" width="12" height="12" rx="1" stroke="#C9A96E" strokeWidth="0.8" opacity="0.5" />
          <circle cx="6" cy="6" r="1.5" stroke="#C9A96E" strokeWidth="0.6" opacity="0.4" />
          <path d="M2 12L6 8L9 11L12 7L14 10" stroke="#C9A96E" strokeWidth="0.6" opacity="0.4" />
        </svg>
      </div>

      <ScrollAnimation className="px-6">
        <h2
          className="text-center text-lg mb-8"
          style={{ fontFamily: "var(--font-serif)", color: "var(--color-charcoal)" }}
        >
          갤러리
        </h2>
      </ScrollAnimation>

      <ScrollAnimation delay={200}>
        <div
          ref={scrollRef}
          className="gallery-scroll flex gap-3 overflow-x-auto px-6 pb-4 snap-x snap-mandatory"
        >
          {photos.map((src, i) => (
            <div
              key={i}
              className="flex-shrink-0 snap-center rounded-xl overflow-hidden"
              style={{
                width: "260px",
                minWidth: "260px",
                aspectRatio: "3/4",
              }}
            >
              <img
                src={src}
                alt={`Photo ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center gap-1.5 mt-4">
          {photos.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                const el = scrollRef.current;
                if (!el) return;
                const card = el.children[i] as HTMLElement;
                card.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
              }}
              className="w-1.5 h-1.5 rounded-full transition-all duration-300 cursor-pointer"
              style={{
                backgroundColor: "var(--color-deep-rose)",
                opacity: i === activeIndex ? 0.8 : 0.2,
                transform: i === activeIndex ? "scale(1.3)" : "scale(1)",
              }}
              aria-label={`Go to photo ${i + 1}`}
            />
          ))}
        </div>
      </ScrollAnimation>
    </section>
  );
}
