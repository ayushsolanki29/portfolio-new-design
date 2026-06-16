import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import WallSection from "./components/WallSection";
import WorkSection from "./components/WorkSection";
import TestimonialsSection from "./components/TestimonialsSection";
import Affirmations from "./components/Affirmations";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-[#111111]">
      <Navbar />
      <HeroSection />
      <WallSection />
      <WorkSection />
      
      <TestimonialsSection />
      <Affirmations />
      <FAQ />
      <Footer />
    </main>
  );
}
