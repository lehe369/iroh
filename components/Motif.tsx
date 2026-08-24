"use client";

import { useEffect, useRef } from "react";
import { getGsap } from "@/lib/gsap";
import { useReducedMotion } from "@/lib/useReducedMotion";

/**
 * A single leaf that drifts almost imperceptibly as the page scrolls — tied
 * to overall scroll progress rather than looping on its own, so it reads as
 * having noticed the visitor rather than performing. Removed entirely under
 * reduced motion rather than merely toned down.
 */
export default function Motif() {
  const leafRef = useRef<SVGSVGElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;
    const { gsap, ScrollTrigger } = getGsap();
    const leaf = leafRef.current;
    if (!leaf) return;

    const ctx = gsap.context(() => {
      gsap.to(leaf, {
        y: "72vh",
        x: "6vw",
        rotate: 34,
        ease: "none",
        scrollTrigger: {
          trigger: document.body,
          start: "top top",
          end: "bottom bottom",
          scrub: 1.2,
        },
      });
      ScrollTrigger.refresh();
    });

    return () => ctx.revert();
  }, [reducedMotion]);

  if (reducedMotion) return null;

  return (
    <svg
      ref={leafRef}
      className="pointer-events-none fixed top-[10vh] right-[8vw] z-[3] opacity-[0.14]"
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M32 6C44 12 54 24 50 40c-3.6 14-16.4 20-27 16C10 51.6 6 39 10 27 14.6 13.4 24 7.4 32 6Z"
        stroke="var(--color-parchment-dim)"
        strokeWidth="1"
      />
      <path
        d="M14 46C24 34 32 20 34 8"
        stroke="var(--color-parchment-dim)"
        strokeWidth="0.75"
      />
    </svg>
  );
}
