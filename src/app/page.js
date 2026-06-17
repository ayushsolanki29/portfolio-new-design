import PageShell from "./components/PageShell";
import HeroSection from "./components/HeroSection";
import WallSection from "./components/WallSection";
import WorkSection from "./components/WorkSection";
import TestimonialsSection from "./components/TestimonialsSection";
import Affirmations from "./components/Affirmations";
import FAQ from "./components/FAQ";

export default function Home() {
  return (
    <PageShell className="overflow-hidden">
      <HeroSection />
      <WallSection />
      <WorkSection />
      <TestimonialsSection />
      <Affirmations />
      <FAQ />
    </PageShell>
  );
}
