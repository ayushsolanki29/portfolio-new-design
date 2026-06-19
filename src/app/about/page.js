import PageShell from "../components/PageShell";
import PageHero from "../components/PageHero";
import FadedQuote from "../components/FadedQuote";
import Timeline from "../components/Timeline";
import ToolsSection from "../components/ToolsSection";
import MusicSection from "../components/MusicSection";

export default function AboutPage() {
  return (
    <PageShell className="overflow-hidden">
      <PageHero
        heading="Still finding myself..."
        subtitle={
          <>
            An engineer who builds things that scale. Full-stack at heart,
            DevOps by necessity, and a thinker who's not afraid to speak his
            mind. You'll find me owning the truth, questioning what I see,
            lingering on the little things.
          </>
        }
        className="pb-12 sm:pb-24"
      >
        {/* Photo Fan Gallery */}
        <div className="mt-10 sm:mt-20 relative flex justify-center items-center w-full max-w-4xl mx-auto h-[220px] sm:h-[340px] transform scale-[0.65] sm:scale-100 origin-top sm:origin-center">
          {[
            {
              src: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=600&auto=format&fit=crop",
              alt: "Pasta",
              style: { transform: "translateX(-180px) rotate(-12deg) translateY(20px)" },
            },
            {
              src: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=600&auto=format&fit=crop",
              alt: "Cat",
              style: { transform: "translateX(-90px) rotate(-6deg) translateY(5px)", zIndex: 10 },
            },
            {
              src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=600&auto=format&fit=crop",
              alt: "Portrait",
              style: { transform: "translateX(0) rotate(0deg) translateY(-10px)", zIndex: 20 },
              wide: true,
            },
            {
              src: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=600&auto=format&fit=crop",
              alt: "Guitar",
              style: { transform: "translateX(90px) rotate(6deg) translateY(5px)", zIndex: 10 },
            },
            {
              src: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=600&auto=format&fit=crop",
              alt: "Airplane",
              style: { transform: "translateX(180px) rotate(12deg) translateY(20px)" },
            },
          ].map((photo) => (
            <div
              key={photo.alt}
              className={`absolute ${photo.wide ? "w-[200px] sm:w-[240px]" : "w-[180px] sm:w-[220px]"} aspect-[3/4] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-white/20 transition-transform duration-500 hover:scale-105 hover:z-50`}
              style={photo.style}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </PageHero>

      <Timeline />
      <ToolsSection />
      <MusicSection />

      <FadedQuote className="pt-16">
        Knowing what you don't
        <br />
        want is a big step towards
        <br />
        getting what you do.
      </FadedQuote>
    </PageShell>
  );
}
