"use client";

import { type ReactNode, useEffect, useRef, useState } from "react";

type RevealOnScrollProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: "default" | "panel";
};

export function RevealOnScroll({
  children,
  className = "",
  delay = 0,
  variant = "default",
}: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isRevealedRef = useRef(true);
  const [isRevealed, setIsRevealed] = useState(true);

  useEffect(() => {
    const node = ref.current;
    if (!node) {
      return;
    }

    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    ) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting !== isRevealedRef.current) {
          isRevealedRef.current = entry.isIntersecting;
          setIsRevealed(entry.isIntersecting);
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${className} transition-transform duration-[400ms] ease-out motion-reduce:translate-y-0 motion-reduce:rotate-0 motion-reduce:scale-100 motion-reduce:opacity-100 motion-reduce:transition-none ${
        isRevealed
          ? "translate-y-0 rotate-0 scale-100 opacity-100"
          : variant === "panel"
            ? "translate-y-3 rotate-[0.25deg] scale-[0.985] opacity-100"
            : "translate-y-4 opacity-100"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
