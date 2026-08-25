"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const SECTION_LINKS = [
  { href: "#estate", label: "The Estate" },
  { href: "#leaf", label: "The Leaf" },
  { href: "#hands", label: "The Hands" },
  { href: "#ritual", label: "The Ritual" },
  { href: "#standard", label: "The Standard" },
];

// TODO: replace with the real Shopify checkout URL for retail sales.
const SHOPIFY_RETAIL_URL = "https://iroh-tea.myshopify.com";

export default function Nav() {
  const [visible, setVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sentinel = document.getElementById("opening-end");
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Show the nav only once the sentinel has scrolled above the
        // viewport — not merely because it hasn't been reached yet.
        setVisible(!entry.isIntersecting && entry.boundingClientRect.top < 0);
      },
      { threshold: 0 }
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 bg-base/85 backdrop-blur-md transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.16,0.7,0.24,1)] ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none -translate-y-3 opacity-0"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-5 sm:px-10">
        <a
          href="#top"
          className="glow-on-hover flex items-center gap-3"
          aria-label="IROH — home"
        >
          <Image
            src="/logo.png"
            alt=""
            width={426}
            height={490}
            priority
            className="h-8 w-auto sm:h-9"
          />
          <span className="font-serif text-lg tracking-[0.14em] text-parchment">
            IROH
          </span>
        </a>

        <nav
          className="hidden items-center gap-7 md:flex"
          aria-label="Section navigation"
        >
          {SECTION_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm tracking-wide text-parchment-dim transition-colors duration-500 hover:text-parchment"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-6 md:flex">
          <a
            href="#partners"
            className="rounded-full border border-accent/60 px-4 py-1.5 text-sm tracking-wide text-parchment transition-[box-shadow,border-color] duration-500 hover:border-accent-bright hover:shadow-[0_0_16px_var(--color-accent-glow)]"
          >
            For Partners
          </a>
          <a
            href={SHOPIFY_RETAIL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs tracking-wide text-parchment-faint transition-colors duration-500 hover:text-parchment-dim"
          >
            Buy Retail
          </a>
        </div>

        <button
          type="button"
          className="text-sm tracking-wide text-parchment-dim md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </div>

      {menuOpen ? (
        <nav
          id="mobile-nav"
          className="flex flex-col gap-5 border-t border-parchment-faint/20 bg-base px-6 py-8 md:hidden"
          aria-label="Section navigation"
        >
          {SECTION_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-base text-parchment-dim hover:text-parchment"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#partners"
            className="text-base text-parchment"
            onClick={() => setMenuOpen(false)}
          >
            For Partners
          </a>
          <a
            href={SHOPIFY_RETAIL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-parchment-faint"
          >
            Buy Retail
          </a>
        </nav>
      ) : null}
    </header>
  );
}
