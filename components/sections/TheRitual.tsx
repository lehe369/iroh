import RevealSection from "@/components/RevealSection";
import ChopSeal from "@/components/ChopSeal";

const STEPS = [
  {
    title: "Warm the vessel",
    body: "Rinse your pot or cup with hot water and empty it before adding leaf. A cold vessel steals heat the leaf needs.",
  },
  {
    title: "Measure by weight, not spoon",
    body: "2.5g of leaf for every 200ml of water. Hand-rolled leaf is looser than cut leaf — a level teaspoon will under-serve you.",
  },
  {
    title: "Bring water just off the boil",
    body: "90–95°C. A hard rolling boil scalds the leaf and flattens it; water that's too cool won't open it at all.",
  },
  {
    title: "Steep three minutes, first pour",
    body: "Start at three minutes and taste. Shorten next time if it reads sharp, extend slightly if it reads thin.",
  },
  {
    title: "Let it steep again",
    body: "A seedling-bush leaf this whole will usually give a fair second infusion, four to five minutes, often at a different register than the first.",
  },
];

export default function TheRitual() {
  return (
    <section id="ritual" className="relative px-6 py-32 sm:px-12 md:px-24">
      <ChopSeal className="mb-20" />
      <RevealSection className="grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-20">
        <div>
          <span className="font-brush text-lg text-accent-bright">
            how to brew it
          </span>
          <h2 className="mt-4 font-serif text-5xl leading-tight text-parchment sm:text-6xl">
            The Ritual
          </h2>
          <p className="prose-measure mt-6 font-body text-base leading-[1.9] text-parchment-faint">
            This is instruction, not persuasion. Brew it as you like — but
            if it&rsquo;s your first time with æța te, this is where we&rsquo;d
            start.
          </p>
        </div>

        <ol className="flex flex-col gap-8">
          {STEPS.map((step, i) => (
            <li key={step.title} className="flex gap-6">
              <span className="font-serif text-2xl text-accent-bright/80">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-serif text-xl text-parchment">
                  {step.title}
                </h3>
                <p className="prose-measure mt-2 font-body text-base leading-[1.8] text-parchment-dim">
                  {step.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </RevealSection>
    </section>
  );
}
