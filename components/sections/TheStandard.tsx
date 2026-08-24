import RevealSection from "@/components/RevealSection";
import ChopSeal from "@/components/ChopSeal";

// TODO: confirm actual certification status with the estate before launch —
// these are placeholder statuses only.
const CERTIFICATIONS = [
  {
    name: "Ceylon Lion Logo",
    status: "In progress" as const,
    body: "Sri Lanka Tea Board authentication mark for pure Ceylon-origin tea. Application in review.",
  },
  {
    name: "EU Organic",
    status: "In progress" as const,
    body: "Estate is in its conversion period; no synthetic inputs have been used on these rows in over two years.",
  },
  {
    name: "FSC",
    status: "Held" as const,
    body: "The forest margin bordering the estate is under Forest Stewardship Council management.",
  },
  {
    name: "Fairtrade",
    status: "In progress" as const,
    body: "Wage and labour audit scheduled; certification application to follow.",
  },
];

export default function TheStandard() {
  return (
    <section id="standard" className="relative px-6 py-32 sm:px-12 md:px-24">
      <ChopSeal className="mb-20" />
      <RevealSection>
        <div className="mb-16 max-w-2xl">
          <span className="font-brush text-lg text-accent-bright">
            for buyers who verify
          </span>
          <h2 className="mt-4 font-serif text-5xl leading-tight text-parchment sm:text-6xl">
            The Standard
          </h2>
          <p className="prose-measure mt-6 font-body text-lg leading-[1.9] text-parchment-dim">
            We would rather show you where we actually stand than round up.
            Some marks are held; others are underway, honestly labelled as
            such.
          </p>
        </div>

        <div className="grid gap-px overflow-hidden rounded-sm border border-parchment-faint/20 bg-parchment-faint/10 sm:grid-cols-2 lg:grid-cols-4">
          {CERTIFICATIONS.map((cert) => (
            <div key={cert.name} className="flex flex-col gap-4 bg-base p-8">
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-serif text-lg text-parchment">
                  {cert.name}
                </h3>
                <span
                  className={`shrink-0 rounded-full border px-2.5 py-0.5 text-[0.65rem] tracking-[0.1em] uppercase ${
                    cert.status === "Held"
                      ? "border-accent/50 text-accent-bright"
                      : "border-parchment-faint/40 text-parchment-faint"
                  }`}
                >
                  {cert.status}
                </span>
              </div>
              <p className="font-body text-sm leading-[1.75] text-parchment-dim">
                {cert.body}
              </p>
            </div>
          ))}
        </div>
      </RevealSection>
    </section>
  );
}
