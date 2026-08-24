"use client";

import { useState, type FormEvent } from "react";
import RevealSection from "@/components/RevealSection";
import ChopSeal from "@/components/ChopSeal";

const VOLUME_OPTIONS = [
  "Sampling only, for now",
  "Under 25kg / year",
  "25–100kg / year",
  "100–500kg / year",
  "500kg+ / year",
];

type SubmitState = "idle" | "submitting" | "success" | "error";

export default function ForPartners() {
  const [state, setState] = useState<SubmitState>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("submitting");

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/wholesale-inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error("Request failed");
      setState("success");
      form.reset();
    } catch {
      setState("error");
    }
  }

  return (
    <section id="partners" className="relative px-6 py-32 sm:px-12 md:px-24">
      <ChopSeal className="mb-20" />
      <RevealSection className="grid gap-14 md:grid-cols-[0.85fr_1.15fr] md:gap-20">
        <div>
          <span className="font-brush text-lg text-accent-bright">
            wholesale &amp; export
          </span>
          <h2 className="mt-4 font-serif text-5xl leading-tight text-parchment sm:text-6xl">
            For Partners
          </h2>
          <p className="prose-measure mt-6 font-body text-lg leading-[1.9] text-parchment-dim">
            We work with a small number of specialty importers each season,
            deliberately. Tell us who you are and what volume you&rsquo;re
            considering, and we&rsquo;ll reply from the estate directly — usually
            within a few days, never through a form-letter.
          </p>
        </div>

        {state === "success" ? (
          <div className="flex flex-col items-start gap-3 border border-accent/40 px-8 py-10">
            <p className="font-serif text-2xl text-parchment">
              Received, with thanks.
            </p>
            <p className="font-body text-base text-parchment-dim">
              We read every inquiry ourselves. Expect a reply from the
              estate, not an autoresponder.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-7">
            <Field label="Company" name="company" required />
            <Field label="Country" name="country" required />

            <div className="flex flex-col gap-2">
              <label
                htmlFor="volume"
                className="text-xs tracking-[0.14em] text-parchment-faint uppercase"
              >
                Volume interest
              </label>
              <select
                id="volume"
                name="volume"
                required
                defaultValue=""
                className="border-b border-parchment-faint/40 bg-transparent py-2 font-body text-parchment outline-none transition-colors duration-500 focus:border-accent-bright"
              >
                <option value="" disabled>
                  Select a range
                </option>
                {VOLUME_OPTIONS.map((option) => (
                  <option key={option} value={option} className="bg-base">
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="message"
                className="text-xs tracking-[0.14em] text-parchment-faint uppercase"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="resize-none border-b border-parchment-faint/40 bg-transparent py-2 font-body text-parchment outline-none transition-colors duration-500 focus:border-accent-bright"
              />
            </div>

            <button
              type="submit"
              disabled={state === "submitting"}
              className="mt-2 w-fit rounded-full border border-accent px-8 py-3 font-body text-sm tracking-wide text-parchment transition-[box-shadow,border-color] duration-500 hover:border-accent-bright hover:shadow-[0_0_20px_var(--color-accent-glow)] disabled:opacity-60"
            >
              {state === "submitting" ? "Sending…" : "Send Inquiry"}
            </button>

            {state === "error" ? (
              <p className="text-sm text-accent-bright">
                Something went wrong on our end — please try again, or write
                to us directly.
              </p>
            ) : null}
          </form>
        )}
      </RevealSection>
    </section>
  );
}

function Field({
  label,
  name,
  required,
}: {
  label: string;
  name: string;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={name}
        className="text-xs tracking-[0.14em] text-parchment-faint uppercase"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type="text"
        required={required}
        className="border-b border-parchment-faint/40 bg-transparent py-2 font-body text-parchment outline-none transition-colors duration-500 focus:border-accent-bright"
      />
    </div>
  );
}
