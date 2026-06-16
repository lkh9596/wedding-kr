"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import ScrollAnimation from "./ScrollAnimation";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const photos = [
  `${basePath}/5.JPG`,
  `${basePath}/4.JPG`,
  `${basePath}/1.jpg`,
  `${basePath}/3.jpg`,
  `${basePath}/6.JPG`,
  `${basePath}/7.JPG`,
];

export default function Gallery() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const thumbnailRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const lastFocusedElementRef = useRef<HTMLElement | null>(null);
  const lightboxIndexRef = useRef<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const isLightboxOpen = lightboxIndex !== null;

  useEffect(() => {
    lightboxIndexRef.current = lightboxIndex;
  }, [lightboxIndex]);

  const openLightbox = useCallback((index: number) => {
    lastFocusedElementRef.current = thumbnailRefs.current[index] ?? (document.activeElement instanceof HTMLElement ? document.activeElement : null);
    setLightboxIndex(index);
  }, []);

  const closeLightbox = useCallback(() => {
    const currentIndex = lightboxIndexRef.current;
    // Return focus to the photo actually being viewed (which may differ from
    // the one originally clicked after prev/next), falling back to the opener.
    const returnTarget = (currentIndex !== null ? thumbnailRefs.current[currentIndex] : null) ?? lastFocusedElementRef.current;
    setLightboxIndex(null);
    window.requestAnimationFrame(() => {
      returnTarget?.focus();
    });
  }, []);

  const showPrevious = useCallback(() => {
    setLightboxIndex((current) => (current === null ? current : (current + photos.length - 1) % photos.length));
  }, []);

  const showNext = useCallback(() => {
    setLightboxIndex((current) => (current === null ? current : (current + 1) % photos.length));
  }, []);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const updateActiveIndex = () => {
      const scrollLeft = container.scrollLeft;
      // One card per view: stride = card width (offsetWidth - 2*padding) + gap.
      const itemWidth = container.offsetWidth - 24;
      if (itemWidth <= 0) return;
      const index = Math.round(scrollLeft / itemWidth);
      setActiveIndex(Math.min(index, photos.length - 1));
    };

    container.addEventListener("scroll", updateActiveIndex, { passive: true });
    window.addEventListener("resize", updateActiveIndex);
    return () => {
      container.removeEventListener("scroll", updateActiveIndex);
      window.removeEventListener("resize", updateActiveIndex);
    };
  }, []);

  useEffect(() => {
    if (!isLightboxOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusTimer = window.setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 0);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeLightbox();
        return;
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        showPrevious();
        return;
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        showNext();
        return;
      }

      if (event.key !== "Tab") return;

      const focusableElements = modalRef.current
        ? Array.from(
            modalRef.current.querySelectorAll<HTMLElement>(
              "button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])"
            )
          )
        : [];

      if (focusableElements.length === 0) {
        event.preventDefault();
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      // If focus has escaped the modal (e.g. onto a non-focusable element or
      // <body>), pull it back in before applying the wraparound logic.
      if (!modalRef.current?.contains(document.activeElement)) {
        event.preventDefault();
        firstElement.focus();
        return;
      }

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.clearTimeout(focusTimer);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeLightbox, isLightboxOpen, showNext, showPrevious]);

  return (
    <section style={{ backgroundColor: "var(--color-soft-pink)", paddingTop: "48px", paddingBottom: "48px" }}>
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
          style={{ display: "flex", gap: "24px", overflowX: "auto", padding: "0 24px 16px" }}
        >
          {photos.map((src, i) => (
            <button
              key={i}
              ref={(element) => {
                thumbnailRefs.current[i] = element;
              }}
              type="button"
              className="snap-center"
              onClick={() => openLightbox(i)}
              style={{
                width: "100%",
                minWidth: "0",
                flexShrink: 0,
                aspectRatio: "3/4",
                borderRadius: "12px",
                overflow: "hidden",
                border: "none",
                padding: 0,
                backgroundColor: "transparent",
                cursor: "zoom-in",
              }}
              aria-label={`사진 ${i + 1} 크게 보기`}
            >
              <img
                src={src}
                alt={`갤러리 사진 ${i + 1}`}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </button>
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
              aria-label={`사진 ${i + 1}로 이동`}
              aria-current={i === activeIndex ? "true" : undefined}
            />
          ))}
        </div>
      </ScrollAnimation>

      {lightboxIndex !== null && (
        <div
          ref={modalRef}
          role="dialog"
          aria-modal="true"
          aria-label="갤러리 사진 보기"
          onClick={(event) => {
            if (event.target === event.currentTarget) closeLightbox();
          }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 1000,
            backgroundColor: "rgba(0,0,0,0.82)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <button
            ref={closeButtonRef}
            type="button"
            onClick={closeLightbox}
            aria-label="갤러리 닫기"
            style={{
              position: "absolute",
              top: "18px",
              right: "18px",
              zIndex: 2,
              width: "40px",
              height: "40px",
              borderRadius: "9999px",
              border: "1px solid rgba(255,255,255,0.25)",
              backgroundColor: "rgba(255,255,255,0.12)",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          <button
            type="button"
            onClick={showPrevious}
            aria-label="이전 사진"
            style={{
              position: "absolute",
              left: "16px",
              top: "50%",
              zIndex: 2,
              transform: "translateY(-50%)",
              width: "42px",
              height: "42px",
              borderRadius: "9999px",
              border: "1px solid rgba(255,255,255,0.25)",
              backgroundColor: "rgba(255,255,255,0.12)",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <img
            src={photos[lightboxIndex]}
            alt={`갤러리 사진 ${lightboxIndex + 1}`}
            style={{
              maxWidth: "calc(100vw - 96px)",
              maxHeight: "calc(100vh - 112px)",
              objectFit: "contain",
              borderRadius: "10px",
              boxShadow: "0 12px 40px rgba(0,0,0,0.35)",
            }}
          />

          <button
            type="button"
            onClick={showNext}
            aria-label="다음 사진"
            style={{
              position: "absolute",
              right: "16px",
              top: "50%",
              zIndex: 2,
              transform: "translateY(-50%)",
              width: "42px",
              height: "42px",
              borderRadius: "9999px",
              border: "1px solid rgba(255,255,255,0.25)",
              backgroundColor: "rgba(255,255,255,0.12)",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      )}
    </section>
  );
}
