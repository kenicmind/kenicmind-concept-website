"use client";

import type { HTMLAttributes, ReactNode, CSSProperties } from "react";
import { useEffect, useRef, useState } from "react";

type Variant = "fade-up" | "fade-in" | "fade-left" | "fade-right" | "scale-in" | "stagger-container" | "stagger-item";

export function Reveal({
  children,
  variant = "fade-up",
  className = "",
  delay = 0,
  ...rest
}: { children: ReactNode; variant?: Variant; className?: string; delay?: number } & HTMLAttributes<HTMLDivElement>) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(() => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches);

  useEffect(() => {
    if (visible) return;
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.18 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [visible]);

  return (
    <div
      ref={ref}
      {...rest}
      className={`motion-reveal motion-reveal--${variant} ${visible ? "is-visible" : ""} ${className}`.trim()}
      style={{ "--reveal-delay": `${delay}ms`, ...(rest.style ?? {}) } as CSSProperties}
    >
      {children}
    </div>
  );
}
