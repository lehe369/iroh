import type { Metadata } from "next";
import { Cormorant_Garamond, Lora, Yuji_Mai } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import CustomCursor from "@/components/CustomCursor";
import Loader from "@/components/Loader";
import Nav from "@/components/Nav";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const brush = Yuji_Mai({
  variable: "--font-brush",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "IROH — a taste of light in every sip",
  description:
    "Small-batch handrolled Ceylon tea from Kiwulella Estate, Rathnapura District, Sri Lanka. Grown and hand-processed from the rare seedling-bush varietal known locally as æța te.",
  openGraph: {
    title: "IROH — a taste of light in every sip",
    description:
      "Small-batch handrolled Ceylon tea from Kiwulella Estate, Rathnapura District, Sri Lanka.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${lora.variable} ${brush.variable}`}
    >
      <body className="has-custom-cursor">
        <div className="grain-layer" aria-hidden="true" />
        <CustomCursor />
        <Loader />
        <SmoothScrollProvider>
          <Nav />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
