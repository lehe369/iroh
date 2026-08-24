import ScrollScrubText from "@/components/ScrollScrubText";
import RevealSection from "@/components/RevealSection";
import ChopSeal from "@/components/ChopSeal";

const LEAF_LINES = [
  "Most Ceylon tea today grows from clones — cuttings of a single high-yield mother bush, replicated by the thousand.",
  "Kiwulella grows seedling bushes instead. Each one raised from seed. Each one genetically its own.",
  "Locally, this old varietal is called æța te — roughly, “the true leaf.”",
  "No two bushes taste quite the same. That unevenness is the point, not the flaw.",
  "It yields less, resists uniform picking, and cannot be scaled easily — which is exactly why so few estates still grow it.",
];

export default function TheLeaf() {
  return (
    <section id="leaf" className="relative">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(to bottom, var(--color-base) 0%, var(--color-base-2) 18%, var(--color-base-2) 82%, var(--color-base) 100%)",
        }}
        aria-hidden="true"
      />
      <ScrollScrubText lines={LEAF_LINES} pin eyebrow="æța te" />

      <div className="px-6 py-28 sm:px-12 md:px-24">
        <ChopSeal className="mb-16" />
        <RevealSection className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-20">
          <h2 className="font-serif text-4xl leading-tight text-parchment sm:text-5xl">
            Seedling, not clone
          </h2>
          <div className="flex flex-col gap-6">
            <p className="prose-measure font-body text-lg leading-[1.9] text-parchment-dim">
              A seedling bush is grown from a seed, not a cutting, which
              means it carries a genetic combination no other bush shares.
              Across a field of clonal tea, every bush is effectively the
              same plant. Across Kiwulella&rsquo;s older rows, every bush is
              a small variation — in leaf shape, in vigor, in the flavour it
              eventually gives.
            </p>
            <p className="prose-measure font-body text-lg leading-[1.9] text-parchment-dim">
              That makes æța te harder to manage and impossible to
              standardise at scale, which is precisely why it now covers
              only a small and shrinking share of Ceylon&rsquo;s tea
              gardens. We keep it because the resulting cup carries a
              complexity clonal tea rarely reaches.
            </p>
          </div>
        </RevealSection>
      </div>
    </section>
  );
}
