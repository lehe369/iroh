"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "@/lib/useReducedMotion";

type RevealSectionProps = {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section";
  delayMs?: number;
  id?: string;
};

/**
 * Shared reveal timing/easing for every section on the page: a single
 * IntersectionObserver-driven fade and quiet upward settle, fired once.
 * Under reduced motion the content is simply present, fully legible,
 * with no transition at all.
 */
export default function RevealSection({
  children,
  className = "",
  as = "div",
  delayMs = 0,
  id,
}: RevealSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [reducedMotion]);

  const Tag = as;
  const isVisible = reducedMotion || visible;

  return (
    <Tag
      id={id}
      ref={ref}
      className={`transition-[opacity,transform] duration-[850ms] ease-[cubic-bezier(0.16,0.7,0.24,1)] ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      } ${className}`}
      style={{ transitionDelay: reducedMotion ? "0ms" : `${delayMs}ms` }}
    >
      {children}
    </Tag>
  );
}
