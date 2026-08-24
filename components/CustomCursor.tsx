"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useReducedMotion } from "@/lib/useReducedMotion";

/**
 * A small, quiet dot and ring that trail the pointer and widen gently near
 * interactive elements. Disabled entirely on touch devices and under
 * prefers-reduced-motion — the browser's native cursor takes over instead.
 */
export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;
    const isFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!isFinePointer) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const dotX = gsap.quickTo(dot, "x", { duration: 0.1, ease: "power3.out" });
    const dotY = gsap.quickTo(dot, "y", { duration: 0.1, ease: "power3.out" });
    const ringX = gsap.quickTo(ring, "x", { duration: 0.45, ease: "power3.out" });
    const ringY = gsap.quickTo(ring, "y", { duration: 0.45, ease: "power3.out" });

    const onMove = (event: PointerEvent) => {
      dotX(event.clientX);
      dotY(event.clientY);
      ringX(event.clientX);
      ringY(event.clientY);
    };

    const interactiveSelector = "a, button, [role='button'], input, textarea, select";

    const onOver = (event: PointerEvent) => {
      const target = event.target as HTMLElement;
      if (target.closest(interactiveSelector)) {
        gsap.to(ring, {
          width: 52,
          height: 52,
          opacity: 0.9,
          borderColor: "var(--color-accent-bright)",
          duration: 0.4,
          ease: "power2.out",
        });
      }
    };

    const onOut = (event: PointerEvent) => {
      const target = event.target as HTMLElement;
      if (target.closest(interactiveSelector)) {
        gsap.to(ring, {
          width: 30,
          height: 30,
          opacity: 0.6,
          borderColor: "var(--color-parchment-dim)",
          duration: 0.4,
          ease: "power2.out",
        });
      }
    };

    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerover", onOver);
    window.addEventListener("pointerout", onOut);

    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerover", onOver);
      window.removeEventListener("pointerout", onOut);
    };
  }, [reducedMotion]);

  if (reducedMotion) return null;

  return (
    <div className="cursor-fine-only">
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </div>
  );
}
