import PageShell from "../components/PageShell";
import Timeline from "../components/Timeline";
import ToolsSection from "../components/ToolsSection";
import LifeSkills from "../components/LifeSkills";
import MarqueeSlider from "../components/MarqueeSlider";
import FadedQuote from "../components/FadedQuote";
import MusicSection from "../components/MusicSection";
MusicSection

export default function AboutPage() {
  const tripPhotos = [
    "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=600&auto=format&fit=crop"
  ];

  const passionPhotos = [
    "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=600&auto=format&fit=crop"
  ];

  return (
    <PageShell className="overflow-hidden bg-[#FAF9F8]">
      {/* Hero Section */}
      <div className="mx-auto max-w-5xl px-5 sm:px-8 pt-24 pb-16 sm:pt-32 sm:pb-24">
        <div className="grid md:grid-cols-[1fr_1.2fr] gap-12 md:gap-20 items-center">
          {/* Polaroid Photo */}
          <div className="w-full max-w-[340px] mx-auto md:mr-auto md:ml-0 bg-white p-4 pb-12 shadow-[0_20px_50px_rgba(33,28,38,0.1)] border border-neutral-200 transform -rotate-3 transition-transform hover:rotate-0 duration-300">
            <div className="w-full aspect-[4/5] bg-neutral-200 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=600&auto=format&fit=crop"
                alt="Portrait"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text Content */}
          <div>
            <div className="flex items-center gap-2 mb-4 text-[#0066FF] font-bold text-xs tracking-widest uppercase">
              <span className="text-[14px]">✦</span> ABOUT ME
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-neutral-900 mb-6 font-serif-display lowercase">
              a little about myself
            </h1>
            <div className="text-neutral-700 text-[15px] sm:text-base leading-relaxed space-y-5">
              <p>
                My journey into design started long before product design. I began with graphic design at a young age, spending years experimenting with Photoshop, branding projects, and freelance work. During college, I worked part-time designing websites, emails, and social media campaigns, which helped me build a strong foundation across different areas of design.
              </p>
              <p>
                Today, I work on consumer and enterprise products, where I enjoy turning complex workflows into experiences that feel simple and intuitive. I'm particularly drawn to problems that sit at the intersection of user needs, business goals, and technical constraints.
              </p>
            </div>
            <div className="mt-8 text-[#0066FF] text-4xl sm:text-5xl font-handwritten transform -rotate-2">
              Ayush.
            </div>
          </div>
        </div>
      </div>

      {/* Timeline & Tools */}
      <Timeline />
      <ToolsSection />
      <MusicSection />


      {/* Life Skills */}
      <LifeSkills />

      {/* Bottom Slider Section */}
      <div className="w-full py-16 sm:py-24 bg-white border-t border-neutral-100 overflow-hidden">
        <div className="mx-auto max-w-5xl px-5 sm:px-8 text-center mb-12">
          <span className="text-neutral-500 font-medium text-sm tracking-wider uppercase mb-3 block">When Outside</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 font-serif-display">I Like to go on short trips</h2>
        </div>
        <div className="mb-20">
          <MarqueeSlider images={tripPhotos} direction="right" speed={30} />
        </div>

        <div className="mx-auto max-w-5xl px-5 sm:px-8 text-center mb-12">
          <span className="text-neutral-500 font-medium text-sm tracking-wider uppercase mb-3 block">Another Passion</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 font-serif-display">I Love to design and build</h2>
        </div>
        <div>
          <MarqueeSlider images={passionPhotos} direction="left" speed={40} />
        </div>
      </div>

      <FadedQuote className="py-16 bg-[#FAF9F8]">
        Knowing what you don't
        <br />
        want is a big step towards
        <br />
        getting what you do.
      </FadedQuote>
    </PageShell>
  );
}
