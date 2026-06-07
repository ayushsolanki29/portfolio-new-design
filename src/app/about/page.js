import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Timeline from "../components/Timeline";
import ToolsSection from "../components/ToolsSection";
import MusicSection from "../components/MusicSection";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-[#111111] overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center px-5 pt-[160px] pb-24 sm:px-8 lg:px-12 text-center">
        <div className="nav-aura" aria-hidden="true" style={{ top: '80px', height: '300px', opacity: 0.6 }} />
        
        <h1 className="font-serif-display text-[48px] sm:text-[64px] lg:text-[72px] font-bold text-neutral-950 leading-tight mb-6 relative z-10">
          Still finding myself...
        </h1>
        <p className="text-[15px] sm:text-[17px] text-neutral-600 font-medium max-w-[640px] mx-auto leading-relaxed relative z-10">
          An engineer <span aria-hidden="true">&gt;</span> designer, a thinker, an ally who's not afraid to speak his mind. You'll find me owning the truth, questioning what I see, lingering on the little things.
        </p>

        {/* Photo Fan Gallery */}
        <div className="mt-20 relative flex justify-center items-center w-full max-w-4xl mx-auto h-[280px] sm:h-[340px] perspective-[1200px]">
          
          {/* Image 1: Far Left */}
          <div className="absolute w-[180px] sm:w-[220px] aspect-[3/4] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-white/20 transition-transform duration-500 hover:scale-105 hover:z-50"
               style={{ transform: 'translateX(-180px) rotate(-12deg) translateY(20px)' }}>
            <img src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=600&auto=format&fit=crop" alt="Pasta" className="w-full h-full object-cover" />
          </div>

          {/* Image 2: Inner Left */}
          <div className="absolute w-[180px] sm:w-[220px] aspect-[3/4] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-white/20 transition-transform duration-500 hover:scale-105 hover:z-50"
               style={{ transform: 'translateX(-90px) rotate(-6deg) translateY(5px)', zIndex: 10 }}>
            <img src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=600&auto=format&fit=crop" alt="Cat" className="w-full h-full object-cover" />
          </div>

          {/* Image 3: Center */}
          <div className="absolute w-[200px] sm:w-[240px] aspect-[3/4] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-white/20 transition-transform duration-500 hover:scale-105 hover:z-50"
               style={{ transform: 'translateX(0) rotate(0deg) translateY(-10px)', zIndex: 20 }}>
            <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=600&auto=format&fit=crop" alt="Portrait" className="w-full h-full object-cover" />
          </div>

          {/* Image 4: Inner Right */}
          <div className="absolute w-[180px] sm:w-[220px] aspect-[3/4] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-white/20 transition-transform duration-500 hover:scale-105 hover:z-50"
               style={{ transform: 'translateX(90px) rotate(6deg) translateY(5px)', zIndex: 10 }}>
            <img src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=600&auto=format&fit=crop" alt="Guitar" className="w-full h-full object-cover" />
          </div>

          {/* Image 5: Far Right */}
          <div className="absolute w-[180px] sm:w-[220px] aspect-[3/4] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-white/20 transition-transform duration-500 hover:scale-105 hover:z-50"
               style={{ transform: 'translateX(180px) rotate(12deg) translateY(20px)' }}>
            <img src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=600&auto=format&fit=crop" alt="Airplane" className="w-full h-full object-cover" />
          </div>

        </div>
      </section>

      {/* Timeline Section */}
      <Timeline />

      {/* Tools Section */}
      <ToolsSection />

      {/* Music Section */}
      <MusicSection />

      {/* Faded Quote (Only on About Page) */}
      <section className="px-5 pt-16 pb-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-serif-display text-[48px] sm:text-[64px] lg:text-[76px] font-bold text-neutral-200/60 leading-[1.1] tracking-tight">
            Knowing what you don't<br />want is a big step towards<br />getting what you do.
          </h2>
        </div>
      </section>

      <Footer />
    </main>
  );
}
