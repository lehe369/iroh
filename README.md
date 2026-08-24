# IROH

Marketing site for IROH, a small-batch handrolled Ceylon tea producer from
Kiwulella Estate, Rathnapura District, Sri Lanka. Built with Next.js (App
Router), TypeScript, Tailwind CSS, GSAP/ScrollTrigger and Lenis.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Before launch

A few things are placeholders on purpose and need real values before this
goes live — search the codebase for `TODO:` to find all of them:

- **Shopify retail URL** — `components/Nav.tsx` and
  `components/sections/QuietClose.tsx` (`SHOPIFY_RETAIL_URL`).
- **Wholesale inquiry endpoint** — `app/api/wholesale-inquiry/route.ts`
  currently accepts and logs submissions only; wire it to a CRM, email
  provider, or database.
- **Opening manifesto copy** — `components/sections/Opening.tsx`, marked
  `// TODO: review copy`, is a first draft in IROH's voice.
- **Certification statuses** — `components/sections/TheStandard.tsx`; confirm
  actual Ceylon Lion Logo / EU Organic / FSC / Fairtrade status with the
  estate.
- **Contact details and social links** — `components/sections/QuietClose.tsx`.

## Notes

- Dark mode is the only theme, by design (see the brief this site was built
  from — extreme two-tone restraint plus one accent color).
- Motion is built with GSAP ScrollTrigger + Lenis and fully respects
  `prefers-reduced-motion`, falling back to static, fully legible content
  with no animation.
- Deploy target is Vercel; connecting this repo through Vercel's GitHub
  integration will auto-deploy on every push.
