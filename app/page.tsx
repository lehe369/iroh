import Opening from "@/components/sections/Opening";
import TheEstate from "@/components/sections/TheEstate";
import TheLeaf from "@/components/sections/TheLeaf";
import TheHands from "@/components/sections/TheHands";
import TheRitual from "@/components/sections/TheRitual";
import TheStandard from "@/components/sections/TheStandard";
import ForPartners from "@/components/sections/ForPartners";
import QuietClose from "@/components/sections/QuietClose";
import Motif from "@/components/Motif";

export default function Home() {
  return (
    <main className="relative">
      <Motif />
      <Opening />
      <TheEstate />
      <TheLeaf />
      <TheHands />
      <TheRitual />
      <TheStandard />
      <ForPartners />
      <QuietClose />
    </main>
  );
}
