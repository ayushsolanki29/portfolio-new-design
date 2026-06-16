import Image from "next/image";
import Navbar from "./components/Navbar";
import FAQ from "./components/FAQ";
import Affirmations from "./components/Affirmations";
import Footer from "./components/Footer";
import NPMWidget from "./components/NPMWidget";
import VSCodeWidget from "./components/VSCodeWidget";
import SlideUpLink from "./components/SlideUpLink";

const partners = [
  {
    name: "happy pet",
    src: "https://framerusercontent.com/images/I2yTv2Y8lYW4KO4I4wWduOsiJQ.png?height=298&width=1056",
    width: 120,
    height: 34,
  },
  {
    name: "JOSH TALKS",
    src: "https://framerusercontent.com/images/McNhgA7Wiel5fyRX0Ia5brtes.png?height=400&width=1318",
    width: 96,
    height: 29,
  },
  {
    name: "PET WAREHOUSE",
    src: "https://framerusercontent.com/images/uXzxhZHggsUtSc276l0pRFotTF8.png?height=313&width=1469",
    width: 122,
    height: 26,
  },
  {
    name: "Yellow.ai",
    src: "https://framerusercontent.com/images/jv95svl5pbBqtymA3LLVaPh5AI.png?height=276&width=1536",
    width: 120,
    height: 22,
  },
  {
    name: "POSTMAN",
    src: "https://framerusercontent.com/images/ZQRKHkGjFEZ9ymzK8UQi7t2zVo.png?height=277&width=1483",
    width: 126,
    height: 24,
  },
];

const partnerSlides = [...partners, ...partners];

const canvasImages = {
  aboutWindow:
    "https://framerusercontent.com/images/XCVNkZ3Jzgp9PlprKmsbrZRkgv0.png?width=553&height=371",
};

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-[#111111]">
      <Navbar />
      <section className="relative flex flex-col px-5 pt-[78px] pb-12 sm:px-8 lg:px-12">
        <div className="hero-aura" aria-hidden="true" />


        <div
          id="home"
          className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center pb-10 pt-[88px] text-center sm:pt-[94px]"
        >
          <h1 className="font-serif-display mx-auto max-w-[1040px] text-[51px] font-bold leading-[0.98] text-neutral-950 sm:text-[75px] lg:text-[82px]">
            <span className="block whitespace-normal lg:whitespace-nowrap">
              I see, I think, I design
            </span>
            <span className="block">then I overthink.</span>
          </h1>

          <p className="mt-[16px] max-w-2xl text-[19px] font-normal leading-tight text-slate-900">
            An ally for cause, a full-time designer and researcher.
          </p>

          <div className="mt-[22px] flex flex-wrap items-center justify-center gap-[10px] text-[12px] font-bold">
            <span className="rounded-md bg-lime-100 px-[7px] py-[3px] text-green-700">
              3+ years of experience
            </span>
            <span className="rounded-md bg-violet-100 px-[7px] py-[3px] text-violet-700">
              Design @ Microsoft
            </span>
          </div>

          <div
            className="partner-slider mt-[78px] w-full max-w-[890px]"
            aria-label="Partner logos"
          >
            <div className="partner-track">
              {partnerSlides.map((partner, index) => (
                <div
                  key={`${partner.name}-${index}`}
                  className="partner-slide"
                  aria-hidden={index >= partners.length}
                >
                  <Image
                    src={partner.src}
                    alt={index < partners.length ? partner.name : ""}
                    width={partner.width}
                    height={partner.height}
                    className="h-auto max-h-8 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      <section id="about" className="relative px-5 pb-16 sm:px-8 lg:px-12">
        <div className="wall-canvas mx-auto">
          <VSCodeWidget />

          <a href="/contact" className="canvas-piece about-window">
            <Image
              src={canvasImages.aboutWindow}
              alt="Know more about me"
              width={220}
              height={148}
              className="h-auto w-full"
            />
          </a>

          <div className="canvas-piece wall-sign-wrapper">
            <svg
              className="absolute left-1/2 -top-[65px] w-[140px] h-[70px] -translate-x-1/2 overflow-visible pointer-events-none"
              viewBox="0 0 140 70"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Strings */}
              <path d="M70 12 L10 75 M70 12 L130 75" stroke="#111111" strokeWidth="4" strokeLinecap="round" />
              {/* Nail */}
              <circle cx="70" cy="8" r="6" stroke="#111111" strokeWidth="4" fill="white" />
            </svg>
            <div className="wall-sign font-handwritten">
              This is my wall
            </div>
          </div>

          <div className="canvas-piece smile-doodle" aria-hidden="true">
            <span />
          </div>

          <NPMWidget />

          <a
            href="https://github.com/ayushsolanki29"
            target="_blank"
            rel="noopener noreferrer"
            className="canvas-piece github-badge-cluster cursor-pointer block"
          >
            <h3 className="text-[17px] font-bold text-neutral-800 mb-3 font-serif-display ml-1 tracking-wide flex items-center gap-2">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" className="text-neutral-700"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
              Achievements
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-400 opacity-0 group-hover:opacity-100 transition-opacity"><path d="M7 17l9.2-9.2M17 17V7H7" /></svg>
            </h3>
            <div className="grid grid-cols-3 gap-2.5">
              {/* Pull Shark */}
              <div className="relative group">
                <img src="https://github.githubassets.com/assets/pull-shark-default-498c279a747d.png" alt="Pull Shark" className="w-[54px] h-[54px] drop-shadow-sm rounded-full object-cover" />
                <div className="absolute -bottom-1 -right-1 bg-neutral-200/90 text-neutral-800 text-[10px] font-bold px-1.5 py-0 rounded-full shadow-sm border border-neutral-300">
                  x2
                </div>
              </div>
              <img src="https://github.githubassets.com/assets/pair-extraordinaire-default-579438a20e01.png" alt="Pair Extraordinaire" className="w-[54px] h-[54px] drop-shadow-sm rounded-full object-cover" />
              <img src="https://github.githubassets.com/assets/yolo-default-be0bbff04951.png" alt="YOLO" className="w-[54px] h-[54px] drop-shadow-sm rounded-full object-cover" />

              <img src="https://github.githubassets.com/assets/quickdraw-default-39c6aec8ff89.png" alt="Quickdraw" className="w-[54px] h-[54px] drop-shadow-sm rounded-full object-cover" />
              <img src="https://github.githubassets.com/assets/starstruck-default-b6610abad518.png" alt="Starstruck" className="w-[54px] h-[54px] drop-shadow-sm rounded-full object-cover" />
              <img src="https://github.githubassets.com/assets/arctic-code-vault-contributor-default-df8d74122a06.png" alt="Arctic Code Vault" className="w-[54px] h-[54px] drop-shadow-sm rounded-full object-cover" />
            </div>
          </a>

          <div className="canvas-piece winner-card">
            <span className="pronoun-badge">he/him</span>
            <div className="h-full w-full rounded-[10px] bg-neutral-200" aria-label="Award winner photo placeholder" />
            <div className="medal" aria-hidden="true">
              <span>★</span>
            </div>
          </div>

          <div className="canvas-piece sticky-note font-handwritten">
            <p>
              My portfolio is still under construction, trying to curate my
              chaos into an order, it takes time.
            </p>
            <p>Do check out my work though :)</p>
          </div>
        </div>
      </section>


      {/* Recent Work Section */}
      <section id="work" className="px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          {/* Section header */}
          <div className="mb-8 flex items-center justify-between">
            <h2 className="flex items-center gap-3 text-[28px] font-bold text-neutral-950 sm:text-[32px] font-serif-display">
              <span aria-hidden="true">✦</span> Recent work
            </h2>
            <SlideUpLink
              href="#all-work"
              className="flex items-center gap-1 text-[15px] font-medium text-neutral-950 transition-colors hover:text-violet-600"
            >
              View all <span aria-hidden="true">↗</span>
            </SlideUpLink>
          </div>

          {/* Project grid */}
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
              <div className="work-card__tech">
                {[
                  { name: "React", slug: "react", color: "61DAFB" },
                  { name: "TypeScript", slug: "typescript", color: "3178C6" },
                  { name: "Figma", slug: "figma", color: "F24E1E" },
                  { name: "Tailwind CSS", slug: "tailwindcss", color: "06B6D4" },
                ].map((t) => (
                  <div key={t.name} className="work-card__tech-bubble" title={t.name}>
                    <img src={`https://cdn.simpleicons.org/${t.slug}/${t.color}`} alt={t.name} loading="lazy" />
                  </div>
                ))}
              </div>
              <div className="work-card__img-wrap">
                <div className="work-card__img-placeholder" aria-label="Project image placeholder" />
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
              <div className="work-card__tech">
                {[
                  { name: "React", slug: "react", color: "61DAFB" },
                  { name: "Node.js", slug: "nodedotjs", color: "339933" },
                  { name: "TypeScript", slug: "typescript", color: "3178C6" },
                  { name: "AWS", slug: "amazonaws", color: "232F3E" },
                  { name: "Postman", slug: "postman", color: "FF6C37" },
                ].map((t) => (
                  <div key={t.name} className="work-card__tech-bubble" title={t.name}>
                    <img src={`https://cdn.simpleicons.org/${t.slug}/${t.color}`} alt={t.name} loading="lazy" />
                  </div>
                ))}
              </div>
              <div className="work-card__img-wrap">
                <div className="work-card__img-placeholder" aria-label="Project image placeholder" />
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
              <div className="work-card__tech">
                {[
                  { name: "React", slug: "react", color: "61DAFB" },
                  { name: "Next.js", slug: "nextdotjs", color: "000000" },
                  { name: "Node.js", slug: "nodedotjs", color: "339933" },
                  { name: "Figma", slug: "figma", color: "F24E1E" },
                ].map((t) => (
                  <div key={t.name} className="work-card__tech-bubble" title={t.name}>
                    <img src={`https://cdn.simpleicons.org/${t.slug}/${t.color}`} alt={t.name} loading="lazy" />
                  </div>
                ))}
              </div>
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
                parents find their best match
              </p>
              <div className="work-card__tech">
                {[
                  { name: "JavaScript", slug: "javascript", color: "F7DF1E" },
                  { name: "Python", slug: "python", color: "3776AB" },
                  { name: "Figma", slug: "figma", color: "F24E1E" },
                  { name: "Vercel", slug: "vercel", color: "000000" },
                ].map((t) => (
                  <div key={t.name} className="work-card__tech-bubble" title={t.name}>
                    <img src={`https://cdn.simpleicons.org/${t.slug}/${t.color}`} alt={t.name} loading="lazy" />
                  </div>
                ))}
              </div>
              <div className="work-card__img-wrap">
                <div className="work-card__img-placeholder" aria-label="Project image placeholder" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 overflow-hidden">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-12 mb-10">
          <div className="flex items-baseline justify-between">
            <h2 className="flex items-center gap-3 text-[28px] font-bold text-neutral-950 sm:text-[32px] font-serif-display">
              <span aria-hidden="true">✦</span> What people say
            </h2>
            <p className="text-sm text-neutral-400 italic">…bribed all of them with pizzas</p>
          </div>
        </div>

        {/* Marquee wrapper — pauses on hover of any card */}
        <div className="testimonial-marquee">
          <div className="testimonial-track">

            {/* ── Original set ── */}
            <div className="t-card t-card--cream">
              <h3 className="t-card__name">Shubhangi Gupta</h3>
              <p className="t-card__role">Sr. Product designer @ yellow.ai</p>
              <p className="t-card__quote">Ayush is extremely passionate about design. Be it visuals, motion, design system he likes to work in all domains within UX. He owns skills that sets him apart from others.</p>
              <div className="t-card__bottom">
                <div className="t-card__doodle t-doodle--100" aria-hidden="true">100</div>
                <div className="t-card__photo t-card__photo--placeholder" aria-label="Shubhangi Gupta" />
              </div>
            </div>

            <div className="t-card t-card--white">
              <h3 className="t-card__name">Gautham Menon</h3>
              <p className="t-card__role">Product manager @ atomicwork</p>
              <p className="t-card__quote">He's consistently brought a fresh pair of eyes and questioned the status quo. A cut above in polish, empathy and creativity</p>
              <div className="t-card__bottom">
                <div className="t-card__doodle t-doodle--flower" aria-hidden="true" />
                <div className="t-card__photo t-card__photo--placeholder" aria-label="Gautham Menon" />
              </div>
            </div>

            <div className="t-card t-card--white">
              <h3 className="t-card__name">Priya S Thomas</h3>
              <p className="t-card__role">Design Lead @ yellow.ai</p>
              <p className="t-card__quote">Ayush as a designer has been great. He has made a significant impact in the team. He's adaptive &amp; attentive to detail. His skills combined with a strong ethic delivers great results.</p>
              <div className="t-card__bottom">
                <div className="t-card__doodle t-doodle--pencil" aria-hidden="true" />
                <div className="t-card__photo t-card__photo--placeholder" aria-label="Priya S Thomas" />
              </div>
            </div>

            <div className="t-card t-card--peach">
              <h3 className="t-card__name">Taanvi Chhetri</h3>
              <p className="t-card__role">Design Manager @ Postman</p>
              <p className="t-card__quote">He is a sharp, curious designer who blends creativity with precision. He's proactive, open to feedback, and elevates both design quality and team efficiency.</p>
              <div className="t-card__bottom">
                <div className="t-card__doodle t-doodle--star" aria-hidden="true" />
                <div className="t-card__photo t-card__photo--placeholder" aria-label="Taanvi Chhetri" />
              </div>
            </div>

            <div className="t-card t-card--white">
              <h3 className="t-card__name">Hitarthi Bhinde</h3>
              <p className="t-card__role">UX Design @ Google</p>
              <p className="t-card__quote">Working with him has been a great experience. He excels at solving problems promptly. His attention to detail and distinguishable skills make him an invaluable asset</p>
              <div className="t-card__bottom">
                <div className="t-card__doodle t-doodle--bolt" aria-hidden="true" />
                <div className="t-card__photo t-card__photo--placeholder" aria-label="Hitarthi Bhinde" />
              </div>
            </div>

            <div className="t-card t-card--lavender">
              <h3 className="t-card__name">Jeroen Van Der Poll</h3>
              <p className="t-card__role">Sr. Product Designer @ Postman</p>
              <p className="t-card__quote">He brings creative energy, curiosity, and a strong growth mindset. He's quick with ideas, eager to learn, and a collaborative problem-solver, an asset to any team</p>
              <div className="t-card__bottom">
                <div className="t-card__doodle t-doodle--burst" aria-hidden="true" />
                <div className="t-card__photo t-card__photo--placeholder" aria-label="Jeroen Van Der Poll" />
              </div>
            </div>

            <div className="t-card t-card--white">
              <h3 className="t-card__name">Akshay Sharma</h3>
              <p className="t-card__role">Sr. Software Engineer @ Postman</p>
              <p className="t-card__quote">He is thoughtful, collaborative, balances speed with quality. His user-obsession, eye for detail and adaptability make him a valuable partner in driving product clarity and direction</p>
              <div className="t-card__bottom">
                <div className="t-card__doodle t-doodle--sparkles" aria-hidden="true" />
                <div className="t-card__photo t-card__photo--placeholder" aria-label="Akshay Sharma" />
              </div>
            </div>

            {/* ── Duplicate set (aria-hidden for a11y) ── */}
            <div className="t-card t-card--cream" aria-hidden="true">
              <h3 className="t-card__name">Shubhangi Gupta</h3>
              <p className="t-card__role">Sr. Product designer @ yellow.ai</p>
              <p className="t-card__quote">Ayush is extremely passionate about design. Be it visuals, motion, design system he likes to work in all domains within UX. He owns skills that sets him apart from others.</p>
              <div className="t-card__bottom">
                <div className="t-card__doodle t-doodle--100">100</div>
                <div className="t-card__photo t-card__photo--placeholder" />
              </div>
            </div>

            <div className="t-card t-card--white" aria-hidden="true">
              <h3 className="t-card__name">Gautham Menon</h3>
              <p className="t-card__role">Product manager @ atomicwork</p>
              <p className="t-card__quote">He's consistently brought a fresh pair of eyes and questioned the status quo. A cut above in polish, empathy and creativity</p>
              <div className="t-card__bottom">
                <div className="t-card__doodle t-doodle--flower" />
                <div className="t-card__photo t-card__photo--placeholder" />
              </div>
            </div>

            <div className="t-card t-card--white" aria-hidden="true">
              <h3 className="t-card__name">Priya S Thomas</h3>
              <p className="t-card__role">Design Lead @ yellow.ai</p>
              <p className="t-card__quote">Ayush as a designer has been great. He has made a significant impact in the team. He's adaptive &amp; attentive to detail. His skills combined with a strong ethic delivers great results.</p>
              <div className="t-card__bottom">
                <div className="t-card__doodle t-doodle--pencil" />
                <div className="t-card__photo t-card__photo--placeholder" />
              </div>
            </div>

            <div className="t-card t-card--peach" aria-hidden="true">
              <h3 className="t-card__name">Taanvi Chhetri</h3>
              <p className="t-card__role">Design Manager @ Postman</p>
              <p className="t-card__quote">He is a sharp, curious designer who blends creativity with precision. He's proactive, open to feedback, and elevates both design quality and team efficiency.</p>
              <div className="t-card__bottom">
                <div className="t-card__doodle t-doodle--star" />
                <div className="t-card__photo t-card__photo--placeholder" />
              </div>
            </div>

            <div className="t-card t-card--white" aria-hidden="true">
              <h3 className="t-card__name">Hitarthi Bhinde</h3>
              <p className="t-card__role">UX Design @ Google</p>
              <p className="t-card__quote">Working with him has been a great experience. He excels at solving problems promptly. His attention to detail and distinguishable skills make him an invaluable asset</p>
              <div className="t-card__bottom">
                <div className="t-card__doodle t-doodle--bolt" />
                <div className="t-card__photo t-card__photo--placeholder" />
              </div>
            </div>

            <div className="t-card t-card--lavender" aria-hidden="true">
              <h3 className="t-card__name">Jeroen Van Der Poll</h3>
              <p className="t-card__role">Sr. Product Designer @ Postman</p>
              <p className="t-card__quote">He brings creative energy, curiosity, and a strong growth mindset. He's quick with ideas, eager to learn, and a collaborative problem-solver, an asset to any team</p>
              <div className="t-card__bottom">
                <div className="t-card__doodle t-doodle--burst" />
                <div className="t-card__photo t-card__photo--placeholder" />
              </div>
            </div>

            <div className="t-card t-card--white" aria-hidden="true">
              <h3 className="t-card__name">Akshay Sharma</h3>
              <p className="t-card__role">Sr. Software Engineer @ Postman</p>
              <p className="t-card__quote">He is thoughtful, collaborative, balances speed with quality. His user-obsession, eye for detail and adaptability make him a valuable partner in driving product clarity and direction</p>
              <div className="t-card__bottom">
                <div className="t-card__doodle t-doodle--sparkles" />
                <div className="t-card__photo t-card__photo--placeholder" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Affirmations Section */}
      <Affirmations />

      {/* FAQ Section */}
      <FAQ />

      {/* Footer Section */}
      <Footer />
    </main>
  );
}
