import ChopSeal from "@/components/ChopSeal";
import RevealSection from "@/components/RevealSection";

// TODO: replace with the real Shopify checkout URL for retail sales.
const SHOPIFY_RETAIL_URL = "https://iroh-tea.myshopify.com";

export default function QuietClose() {
  return (
    <footer className="relative px-6 pt-28 pb-16 sm:px-12 md:px-24">
      <RevealSection className="flex flex-col items-start gap-16">
        <ChopSeal />

        <p className="max-w-lg font-serif text-3xl leading-tight text-parchment sm:text-4xl">
          a taste of light in every sip
        </p>

        <div className="flex w-full flex-col gap-10 border-t border-parchment-faint/20 pt-10 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex flex-col gap-2">
            <span className="text-xs tracking-[0.14em] text-parchment-faint uppercase">
              Estate
            </span>
            <a
              href="mailto:hello@iroh-tea.com"
              className="font-body text-parchment-dim transition-colors duration-500 hover:text-parchment"
            >
              hello@iroh-tea.com
            </a>
            <span className="font-body text-sm text-parchment-faint">
              Kiwulella Estate, Rathnapura District, Sri Lanka
            </span>
          </div>

          <div className="flex flex-col gap-2 sm:items-end">
            <span className="text-xs tracking-[0.14em] text-parchment-faint uppercase">
              Elsewhere
            </span>
            <div className="flex gap-5">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-sm text-parchment-dim transition-colors duration-500 hover:text-parchment"
              >
                Instagram
              </a>
              <a
                href={SHOPIFY_RETAIL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-sm text-parchment-faint transition-colors duration-500 hover:text-parchment-dim"
              >
                Buy Retail
              </a>
            </div>
          </div>
        </div>

        <p className="font-body text-xs text-parchment-faint">
          © {new Date().getFullYear()} IROH Tea, Kiwulella Estate. Made in
          small amounts, on purpose.
        </p>
      </RevealSection>
    </footer>
  );
}
