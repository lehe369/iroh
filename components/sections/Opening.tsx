import ScrollScrubText from "@/components/ScrollScrubText";

// TODO: review copy — placeholder manifesto in IROH's voice, first draft only.
const MANIFESTO_LINES = [
  "I grow on one slope in Kiwulella, where the mist sits low until well after sunrise.",
  "The bushes here have never been clipped from a mother plant chosen for yield.",
  "Each leaf that becomes æța te is rolled by hand, its oxidation judged by feel and by the warmth of that day’s air, not by a timer.",
  "I make very little tea in most months — not scarcity as strategy, but the honest limit of what careful hands can finish well.",
  "What arrives in your cup is simply what a few of us agreed, that week, was ready to be poured.",
];

export default function Opening() {
  return (
    <section id="top" className="relative">
      <div className="flex min-h-screen flex-col items-start justify-center gap-8 px-6 pt-24 sm:px-12 md:px-24">
        <p className="font-brush text-2xl text-accent-bright sm:text-3xl">
          Kiwulella Estate, Rathnapura
        </p>
        <h1 className="font-serif text-[15vw] leading-[0.95] font-normal tracking-tight text-parchment sm:text-[9rem] md:text-[10rem]">
          IROH
        </h1>
        <p className="max-w-md pl-1 font-serif text-xl italic text-parchment-dim sm:text-2xl">
          a taste of light in every sip
        </p>
      </div>

      <div className="px-6 pb-40 sm:px-12 md:px-24">
        <ScrollScrubText lines={MANIFESTO_LINES} className="max-w-4xl" />
      </div>

      <div id="opening-end" className="h-px w-full" aria-hidden="true" />
    </section>
  );
}
