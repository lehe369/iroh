import RevealSection from "@/components/RevealSection";
import ChopSeal from "@/components/ChopSeal";

const FACTS = [
  { label: "District", value: "Rathnapura, Sabaragamuwa Province" },
  { label: "Elevation", value: "≈ 700m above sea level" },
  { label: "Rainfall", value: "≈ 4,000mm annually" },
  { label: "Soil", value: "Lateritic, iron-rich, fast-draining" },
];

export default function TheEstate() {
  return (
    <section id="estate" className="relative px-6 py-32 sm:px-12 md:px-24">
      <ChopSeal className="mb-20" />
      <RevealSection className="grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-20">
        <div>
          <span className="font-brush text-lg text-accent-bright">
            Kiwulella, Rathnapura
          </span>
          <h2 className="mt-4 font-serif text-5xl leading-tight text-parchment sm:text-6xl">
            The Estate
          </h2>
        </div>

        <div className="flex flex-col gap-10">
          <p className="prose-measure font-body text-lg leading-[1.9] text-parchment-dim">
            Rathnapura sits in Sri Lanka&rsquo;s wet zone — one of the
            wettest districts on the island, and the tea here grows
            accordingly: fast, dense, and green almost to excess. Kiwulella
            Estate holds a single hillside at roughly 700 metres, bordered by
            secondary forest that keeps the air humid and the light broken.
            The soil is old laterite, red-yellow and iron-rich, draining
            quickly after the frequent afternoon rain.
          </p>
          <p className="prose-measure font-body text-lg leading-[1.9] text-parchment-dim">
            None of this was chosen to be picturesque. It is simply the
            ground we have, and the ground shapes what we can honestly grow.
          </p>

          <dl className="mt-4 grid grid-cols-1 gap-x-8 gap-y-6 border-t border-parchment-faint/20 pt-8 sm:grid-cols-2">
            {FACTS.map((fact) => (
              <div key={fact.label}>
                <dt className="text-xs tracking-[0.16em] text-parchment-faint uppercase">
                  {fact.label}
                </dt>
                <dd className="mt-1 font-serif text-lg text-parchment">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </RevealSection>
    </section>
  );
}
