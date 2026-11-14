"use client";

import { useEffect, useRef, ReactNode } from "react";

interface ScrollAnimationProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
}

// Longer delays leave guests staring at an empty area after they scroll.
const MAX_DELAY_MS = 150;

/**
 * Subtle fade-in for decorative and prose blocks. Don't wrap practical
 * information (addresses, maps, accounts, contacts) in this; that should be
 * visible the moment it scrolls into view.
 */
export default function ScrollAnimation({
  children,
  className = "",
  style,
  delay = 0,
}: ScrollAnimationProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (typeof IntersectionObserver === "undefined") {
      element.classList.add("visible");
      return;
    }

    const effectiveDelay = Math.min(Math.max(delay, 0), MAX_DELAY_MS);
    let timer: number | undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            timer = window.setTimeout(() => {
              entry.target.classList.add("visible");
            }, effectiveDelay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      window.clearTimeout(timer);
    };
  }, [delay]);

  return (
    <div ref={ref} className={`fade-in ${className}`.trim()} style={style}>
      {children}
    </div>
  );
}
