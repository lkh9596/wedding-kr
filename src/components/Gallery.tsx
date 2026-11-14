"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import ScrollAnimation from "./ScrollAnimation";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const photos = [
  `${basePath}/5.JPG`,
  `${basePath}/4.JPG`,
  `${basePath}/1.jpg`,
  `${basePath}/6.JPG`,
  `${basePath}/8.jpg`,
  `${basePath}/9.jpg`,
  `${basePath}/10.jpg`,
];

// Minimum horizontal travel (px) for a lightbox swipe.
const SWIPE_THRESHOLD = 40;

const lightboxNavButton: React.CSSProperties = {
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  zIndex: 2,
  width: "44px",
  height: "44px",
  borderRadius: "9999px",
  border: "1px solid rgba(255,255,255,0.3)",
  backgroundColor: "rgba(0,0,0,0.35)",
  color: "#fff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export default function Gallery() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const thumbnailRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const lastFocusedElementRef = useRef<HTMLElement | null>(null);
  const lightboxIndexRef = useRef<number | null>(null);
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);
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

    let frame = 0;
    const updateActiveIndex = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        // The active photo is the card whose centre is nearest the carousel's centre.
        const containerRect = container.getBoundingClientRect();
        const center = containerRect.left + containerRect.width / 2;
        let nearest = 0;
        let nearestDistance = Infinity;
        thumbnailRefs.current.forEach((card, i) => {
          if (!card) return;
          const rect = card.getBoundingClientRect();
          const distance = Math.abs(rect.left + rect.width / 2 - center);
          if (distance < nearestDistance) {
            nearestDistance = distance;
            nearest = i;
          }
        });
        setActiveIndex(nearest);
      });
    };

    container.addEventListener("scroll", updateActiveIndex, { passive: true });
    window.addEventListener("resize", updateActiveIndex);
    return () => {
      cancelAnimationFrame(frame);
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

  const handleTouchStart = (event: React.TouchEvent) => {
    if (event.touches.length !== 1) {
      touchStartRef.current = null; // ignore pinch-zoom
      return;
    }
    touchStartRef.current = { x: event.touches[0].clientX, y: event.touches[0].clientY };
  };

  const handleTouchEnd = (event: React.TouchEvent) => {
    const start = touchStartRef.current;
    touchStartRef.current = null;
    if (!start || event.changedTouches.length === 0) return;
    const dx = event.changedTouches[0].clientX - start.x;
    const dy = event.changedTouches[0].clientY - start.y;
    if (Math.abs(dx) < SWIPE_THRESHOLD || Math.abs(dx) <= Math.abs(dy)) return;
    if (dx < 0) showNext();
    else showPrevious();
  };

  return (
    <section style={{ backgroundColor: "var(--color-soft-pink)", paddingTop: "36px", paddingBottom: "36px" }}>
      <div className="section-divider" style={{ marginBottom: "20px", paddingLeft: "24px", paddingRight: "24px" }}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <rect x="2" y="2" width="12" height="12" rx="1" stroke="#C9A96E" strokeWidth="0.8" opacity="0.5" />
          <circle cx="6" cy="6" r="1.5" stroke="#C9A96E" strokeWidth="0.6" opacity="0.4" />
          <path d="M2 12L6 8L9 11L12 7L14 10" stroke="#C9A96E" strokeWidth="0.6" opacity="0.4" />
        </svg>
      </div>

      <ScrollAnimation style={{ paddingLeft: "24px", paddingRight: "24px" }}>
        <h2
          style={{ fontFamily: "var(--font-serif)", color: "var(--color-charcoal)", textAlign: "center", fontSize: "18px", marginBottom: "24px" }}
        >
          갤러리
        </h2>
      </ScrollAnimation>

      <ScrollAnimation delay={100}>
        {/* Cards are 82% wide so the neighbouring photos peek in. The spacer items let the
            first and last cards snap to the centre (end padding on a scrolling
            flex container isn't reliable across browsers). */}
        <div
          ref={scrollRef}
          className="gallery-scroll snap-x"
          style={{ display: "flex", gap: "12px", overflowX: "auto", paddingBottom: "4px" }}
        >
          <div aria-hidden="true" style={{ flex: "0 0 calc(9% - 12px)" }} />
          {photos.map((src, i) => (
            <button
              key={src}
              ref={(element) => {
                thumbnailRefs.current[i] = element;
              }}
              type="button"
              className="snap-center"
              onClick={() => openLightbox(i)}
              style={{
                flex: "0 0 82%",
                aspectRatio: "3/4",
                borderRadius: "12px",
                overflow: "hidden",
                border: "none",
                padding: 0,
                backgroundColor: "rgba(255,255,255,0.4)",
                cursor: "zoom-in",
              }}
              aria-label={`사진 ${i + 1} 크게 보기`}
            >
              <img
                src={src}
                alt={`갤러리 사진 ${i + 1}`}
                loading={i === 0 ? "eager" : "lazy"}
                decoding="async"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </button>
          ))}
          <div aria-hidden="true" style={{ flex: "0 0 calc(9% - 12px)" }} />
        </div>

        <p
          style={{ fontFamily: "var(--font-sans)", textAlign: "center", fontSize: "14px", color: "var(--color-charcoal)", marginTop: "12px", letterSpacing: "0.05em" }}
        >
          {activeIndex + 1} / {photos.length}
        </p>
        <p
          style={{ fontFamily: "var(--font-sans)", textAlign: "center", fontSize: "13px", color: "var(--color-ink-muted)", marginTop: "4px" }}
        >
          좌우로 넘겨보세요 · 눌러서 크게 보기
        </p>
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
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 1000,
            backgroundColor: "rgba(0,0,0,0.88)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <p
            aria-live="polite"
            style={{ position: "absolute", top: "28px", left: "20px", color: "#fff", fontFamily: "var(--font-sans)", fontSize: "14px", letterSpacing: "0.05em", pointerEvents: "none" }}
          >
            {lightboxIndex + 1} / {photos.length}
          </p>

          <button
            ref={closeButtonRef}
            type="button"
            onClick={closeLightbox}
            aria-label="갤러리 닫기"
            style={{
              position: "absolute",
              top: "16px",
              right: "12px",
              zIndex: 2,
              width: "44px",
              height: "44px",
              borderRadius: "9999px",
              border: "1px solid rgba(255,255,255,0.25)",
              backgroundColor: "rgba(255,255,255,0.12)",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          {/* The image gets nearly the full width; prev/next sit on its edges. */}
          <div style={{ position: "relative", marginTop: "24px" }}>
            <img
              src={photos[lightboxIndex]}
              alt={`갤러리 사진 ${lightboxIndex + 1}`}
              className="lightbox-img"
              style={{
                display: "block",
                maxWidth: "calc(100vw - 24px)",
                objectFit: "contain",
                borderRadius: "10px",
                boxShadow: "0 12px 40px rgba(0,0,0,0.35)",
              }}
            />

            <button
              type="button"
              onClick={showPrevious}
              aria-label="이전 사진"
              style={{ ...lightboxNavButton, left: "8px" }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            <button
              type="button"
              onClick={showNext}
              aria-label="다음 사진"
              style={{ ...lightboxNavButton, right: "8px" }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
