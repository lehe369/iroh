"use client";

import { useEffect, useRef } from "react";
import { getGsap } from "@/lib/gsap";
import { useReducedMotion } from "@/lib/useReducedMotion";

type ScrollScrubTextProps = {
  lines: string[];
  /** Briefly pins the section while lines light up top to bottom, then
   *  releases — reserved for the two or three key story beats. */
  pin?: boolean;
  eyebrow?: string;
  className?: string;
  lineClassName?: string;
};

function clamp01(value: number) {
  return Math.min(1, Math.max(0, value));
}

/**
 * Shared scroll-linked text reveal used across the site: lines start dim and
 * settled, and brighten into full legibility as the visitor's scroll
 * position crosses them. In `pin` mode the section holds still while every
 * line scrubs through in sequence before releasing the scroll.
 */
export default function ScrollScrubText({
  lines,
  pin = false,
  eyebrow,
  className = "",
  lineClassName = "",
}: ScrollScrubTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const lineRefs = useRef<(HTMLParagraphElement | null)[]>([]);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;
    const { gsap, ScrollTrigger } = getGsap();

    const ctx = gsap.context(() => {
      const validLines = lineRefs.current.filter(
        (el): el is HTMLParagraphElement => Boolean(el)
      );
      if (validLines.length === 0) return;

      gsap.set(validLines, { opacity: 0.16, filter: "blur(3px)", y: 16 });

      if (pin) {
        ScrollTrigger.create({
          trigger: containerRef.current,
          start: "top top",
          end: `+=${validLines.length * 340}`,
          pin: wrapperRef.current,
          scrub: 0.6,
          onUpdate: (self) => {
            const progress = self.progress * validLines.length;
            validLines.forEach((el, i) => {
              const local = clamp01(progress - i * 0.92);
              gsap.set(el, {
                opacity: 0.16 + local * 0.84,
                filter: `blur(${(1 - local) * 3}px)`,
                y: 16 * (1 - local),
              });
            });
          },
        });
      } else {
        validLines.forEach((el) => {
          gsap.to(el, {
            opacity: 1,
            filter: "blur(0px)",
            y: 0,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              end: "top 48%",
              scrub: 0.6,
            },
          });
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, [pin, reducedMotion, lines]);

  const lineNodes = (
    <div className="flex flex-col gap-5 sm:gap-6">
      {eyebrow ? (
        <span className="font-brush text-lg text-accent-bright sm:text-xl">
          {eyebrow}
        </span>
      ) : null}
      {lines.map((line, i) => (
        <p
          key={i}
          ref={(el) => {
            lineRefs.current[i] = el;
          }}
          className={`font-serif text-[7vw] leading-[1.15] font-normal text-parchment sm:text-[3.4rem] md:text-[3.9rem] ${lineClassName}`}
        >
          {line}
        </p>
      ))}
    </div>
  );

  if (!pin) {
    return (
      <div ref={containerRef} className={className}>
        {lineNodes}
      </div>
    );
  }

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <div
        ref={wrapperRef}
        className="flex min-h-screen flex-col justify-center px-6 py-24 sm:px-12 md:px-20"
      >
        {lineNodes}
      </div>
    </div>
  );
}
