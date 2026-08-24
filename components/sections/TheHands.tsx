import ScrollScrubText from "@/components/ScrollScrubText";
import RevealSection from "@/components/RevealSection";
import ChopSeal from "@/components/ChopSeal";

const HANDS_LINES = [
  "Every leaf is withered on bamboo trays until it turns supple — twelve hours, or twenty, depending on the day’s humidity.",
  "Rolling is done by hand, in small batches, to break the leaf’s cell walls without shredding it.",
  "Oxidation is judged by smell and by touch, by hands that have done this for years — not by a countdown.",
  "On a cool, damp morning the same leaf oxidises differently than it did the week before. We adjust by feel, every time.",
  "In peak season we finish perhaps sixty kilograms in a month. That ceiling is deliberate.",
];

export default function TheHands() {
  return (
    <section id="hands" className="relative">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(to bottom, var(--color-base) 0%, var(--color-base-2) 18%, var(--color-base-2) 82%, var(--color-base) 100%)",
        }}
        aria-hidden="true"
      />
      <ScrollScrubText lines={HANDS_LINES} pin eyebrow="orthodox method" />

      <div className="px-6 py-28 sm:px-12 md:px-24">
        <ChopSeal className="mb-16" />
        <RevealSection className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-20">
          <h2 className="font-serif text-4xl leading-tight text-parchment sm:text-5xl">
            Made by hand, on purpose
          </h2>
          <div className="flex flex-col gap-6">
            <p className="prose-measure font-body text-lg leading-[1.9] text-parchment-dim">
              We work orthodox — the older, slower manufacturing method that
              keeps the leaf whole through withering, rolling, oxidation and
              firing, rather than cutting it down for speed. It costs us
              volume. It gives back a leaf you can still recognise in the
              cup, and a liquor with more range than a CTC process leaves
              room for.
            </p>
            <p className="prose-measure font-body text-lg leading-[1.9] text-parchment-dim">
              No stage is run on a fixed clock. The person rolling a batch
              is the same person who decides when it has oxidised enough,
              judging by colour, aroma, and the give of the leaf between
              their fingers. It is slower than a sensor would be. It is also
              the only way we trust to get it right.
            </p>
          </div>
        </RevealSection>
      </div>
    </section>
  );
}
