import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-white text-[#111111]">
      <Navbar />

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center px-5 pt-[140px] sm:pt-[160px] pb-12 sm:px-8 lg:px-12 text-center">
        <div className="nav-aura" aria-hidden="true" style={{ top: '80px', height: '300px', opacity: 0.6 }} />
        
        <h1 className="font-serif-display text-[48px] sm:text-[64px] lg:text-[72px] font-bold text-neutral-950 leading-tight mb-4 relative z-10">
          Curated with love
        </h1>
        <p className="text-[16px] sm:text-[18px] text-neutral-600 font-medium max-w-2xl mx-auto leading-relaxed relative z-10">
          Everything that shows me at my best, the journey of how far I've come you'll find here
        </p>

        {/* Info Banner */}
        <div className="mt-12 bg-[#f2f7fc] text-[#111111] px-5 py-4 sm:px-6 rounded-2xl flex items-start gap-3 max-w-3xl mx-auto text-left relative z-10 text-[14px] sm:text-[15px] font-medium leading-relaxed">
          <div className="bg-[#1a365d] text-white flex items-center justify-center rounded-full w-5 h-5 shrink-0 mt-[2px] text-xs font-serif italic">
            i
          </div>
          <p>
            Some projects are currently linked externally or they are work in-progress, but will soon be available here on the website.
          </p>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section className="px-5 pb-24 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

            {/* Card 1 — Building the navigation 2.0 */}
            <div className="work-card work-card--lavender group">
              <div className="work-card__tags">
                <span className="work-tag">Interaction/UX design</span>
                <span className="work-tag">B2B SaaS</span>
                <a href="#project-nav" className="work-card__arrow" aria-label="View project">↗</a>
              </div>
              <h3 className="work-card__title">Building the navigation 2.0</h3>
              <p className="work-card__desc">
                Reducing navigation time on cloud.yellow.ai from point A to B by
                50% to reduce user effort and frustration
              </p>
              <div className="work-card__img-wrap">
                <div className="work-card__img-placeholder" aria-label="Project image placeholder">
                  {/* Mockup for flowchart shown in screenshot */}
                  <div className="w-full h-full bg-white/60 backdrop-blur-sm rounded-xl border border-black/5 flex items-center justify-center p-4">
                     <div className="text-xs text-neutral-400 font-mono tracking-widest uppercase">Flowchart Diagram</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 — Collaboration @ Postman */}
            <div className="work-card work-card--peach group">
              <div className="work-card__tags">
                <span className="work-tag">Product Design</span>
                <span className="work-tag work-tag--muted">Coming Soon</span>
                <a href="#project-postman" className="work-card__arrow" aria-label="View project">↗</a>
              </div>
              <h3 className="work-card__title">Collaboration @ Postman</h3>
              <p className="work-card__desc">
                Enabling 40M+ devs to stay on top of work via comments,
                notifications, collaboration and AI-native workflows
              </p>
              <div className="work-card__img-wrap">
                <div className="work-card__img-placeholder" aria-label="Project image placeholder">
                  {/* Mockup for UI shown in screenshot */}
                  <div className="w-full h-full bg-white/60 backdrop-blur-sm rounded-xl border border-black/5 flex items-center justify-center p-4 shadow-sm">
                     <div className="text-xs text-neutral-400 font-mono tracking-widest uppercase">UI Mockups</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 — FinDo */}
            <div className="work-card work-card--lime group">
              <div className="work-card__tags">
                <span className="work-tag">Product Design</span>
                <span className="work-tag work-tag--award">🏆 Award Winner</span>
                <a href="#project-findo" className="work-card__arrow" aria-label="View project">↗</a>
              </div>
              <h3 className="work-card__title">FinDo - Money made easy</h3>
              <p className="work-card__desc">
                Building financial management and awareness as a second nature by
                triggering inherent motivation
              </p>
              <div className="work-card__img-wrap">
                <div className="work-card__img-placeholder" aria-label="Project image placeholder" />
              </div>
            </div>

            {/* Card 4 — Growth @ Pet Warehouse */}
            <div className="work-card work-card--yellow group">
              <div className="work-card__tags">
                <span className="work-tag">UX/Marketing/Growth</span>
                <span className="work-tag work-tag--muted">Coming Soon</span>
                <a href="#project-petwarehouse" className="work-card__arrow" aria-label="View project">↗</a>
              </div>
              <h3 className="work-card__title">Growth @ Pet Warehouse</h3>
              <p className="work-card__desc">
                Generating organic growth and virality by helping future pet
                parents seamlessly adopt instead of shop
              </p>
              <div className="work-card__img-wrap">
                <div className="work-card__img-placeholder" aria-label="Project image placeholder" />
              </div>
            </div>

            {/* Card 5 — PLG Referral program */}
            <div className="work-card bg-[#eaf5fc] group">
              <div className="work-card__tags">
                <span className="work-tag">UX/PLG Design</span>
                <span className="work-tag work-tag--muted">Coming Soon</span>
                <a href="#project-plg" className="work-card__arrow" aria-label="View project">↗</a>
              </div>
              <h3 className="work-card__title">PLG Referral program</h3>
              <p className="work-card__desc">
                Increasing sign-ups for Josh Skills app by using curiosity and social currency as inherent motivation
              </p>
              <div className="work-card__img-wrap">
                <div className="work-card__img-placeholder" aria-label="Project image placeholder">
                  <div className="w-full h-full flex items-center justify-center pt-8">
                     {/* Mockup for phone shown in screenshot */}
                     <div className="w-[180px] h-full bg-[#0051a8] rounded-t-3xl border-4 border-[#111111] border-b-0 relative overflow-hidden flex flex-col items-center shadow-lg">
                        <div className="w-16 h-4 bg-[#111111] rounded-b-xl absolute top-0"></div>
                        <div className="mt-12 w-20 h-20 rounded-full bg-blue-400 border-4 border-green-400 flex items-center justify-center overflow-hidden">
                           <div className="w-full h-full bg-[#e8c6a9]"></div>
                        </div>
                     </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 6 — CTA Card "Next could be ours..." */}
            <div className="group relative flex flex-col overflow-hidden rounded-[32px] bg-white border border-dashed border-neutral-300 p-8 sm:p-10 transition-transform duration-300 hover:-translate-y-1">
              <div className="relative z-10 flex flex-col items-start h-full">
                <div className="flex flex-wrap items-center gap-2 mb-6">
                  <span className="rounded-full bg-neutral-100 px-3 py-1 text-[11px] font-bold text-neutral-600 tracking-wide uppercase">Product type</span>
                  <span className="rounded-full bg-neutral-100 px-3 py-1 text-[11px] font-bold text-neutral-600 tracking-wide uppercase">Your industry</span>
                </div>
                <h3 className="font-serif-display text-[26px] font-bold text-neutral-950 mb-3">Next could be ours...</h3>
                <p className="text-[15px] leading-relaxed text-neutral-600">
                  Let's build something together?
                </p>
              </div>

              {/* Concentric dashed circles pattern */}
              <div className="absolute -bottom-1/4 -right-1/4 w-[300px] h-[300px] pointer-events-none opacity-20">
                <div className="absolute inset-0 rounded-full border border-dashed border-neutral-800 scale-[1.0]" />
                <div className="absolute inset-0 rounded-full border border-dashed border-neutral-800 scale-[0.7]" />
                <div className="absolute inset-0 rounded-full border border-dashed border-neutral-800 scale-[0.4]" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Faded Quote (Only on Work Page) */}
      <section className="px-5 pb-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-serif-display text-[48px] sm:text-[64px] lg:text-[76px] font-bold text-neutral-200/60 leading-[1.1] tracking-tight">
            If you never ask, the answer<br />is always a no.
          </h2>
        </div>
      </section>

      <Footer />
    </main>
  );
}
