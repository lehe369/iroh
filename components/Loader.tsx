"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useReducedMotion } from "@/lib/useReducedMotion";

/**
 * A brief, quiet intro: the wordmark settles into place before the Opening
 * section is revealed. No spinner, no progress bar — just patience.
 */
export default function Loader() {
  const [visible, setVisible] = useState(true);
  const overlayRef = useRef<HTMLDivElement>(null);
  const markRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    document.documentElement.style.overflow = "hidden";

    if (reducedMotion) {
      const timeout = window.setTimeout(() => {
        document.documentElement.style.overflow = "";
        setVisible(false);
      }, 300);
      return () => window.clearTimeout(timeout);
    }

    const overlay = overlayRef.current;
    const mark = markRef.current;
    const tagline = taglineRef.current;
    if (!overlay || !mark || !tagline) return;

    const tl = gsap.timeline({
      onComplete: () => {
        document.documentElement.style.overflow = "";
        setVisible(false);
      },
    });

    tl.set(mark, { opacity: 0, letterSpacing: "0.5em" })
      .set(tagline, { opacity: 0 })
      .to(mark, {
        opacity: 1,
        letterSpacing: "0.14em",
        duration: 1.6,
        ease: "power2.out",
      })
      .to(tagline, { opacity: 0.75, duration: 0.9, ease: "power1.out" }, "-=0.5")
      .to({}, { duration: 0.7 })
      .to(overlay, { opacity: 0, duration: 0.9, ease: "power1.inOut" });

    return () => {
      tl.kill();
    };
  }, [reducedMotion]);

  if (!visible) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[90] flex flex-col items-center justify-center gap-4 bg-base"
      aria-hidden="true"
    >
      <div
        ref={markRef}
        className="font-serif text-3xl tracking-[0.14em] text-parchment sm:text-4xl"
      >
        IROH
      </div>
      <p
        ref={taglineRef}
        className="font-brush text-lg text-accent-bright sm:text-xl"
      >
        a taste of light in every sip
      </p>
    </div>
  );
}
