import Image from "next/image";
import Navbar from "./components/Navbar";
import FAQ from "./components/FAQ";
import Affirmations from "./components/Affirmations";
import Footer from "./components/Footer";

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
          <div className="canvas-piece music-widget">
            <iframe
              data-testid="embed-iframe"
              title="I Want It That Way by Backstreet Boys"
              src="https://open.spotify.com/embed/track/5ThyDv6aRVU8AH4vXQNldF?utm_source=generator"
              width="100%"
              height="152"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />
          </div>

          <a href="/contact" className="canvas-piece about-window">
            <Image
              src={canvasImages.aboutWindow}
              alt="Know more about me"
              width={220}
              height={148}
              className="h-auto w-full"
            />
          </a>

          <div className="canvas-piece wall-sign font-handwritten">
            <span className="sign-ring" aria-hidden="true" />
            This is my wall
          </div>

          <div className="canvas-piece smile-doodle" aria-hidden="true">
            <span />
          </div>

          <div className="canvas-piece heart-doodle" aria-hidden="true" />

          <div className="canvas-piece award-tile">
            <div className="trophy">
              <span>★</span>
            </div>
            <p>
              2x Excellence
              <span>awardee @ yellow.ai</span>
            </p>
          </div>

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
            <a
              href="#all-work"
              className="flex items-center gap-1 text-[15px] font-medium text-neutral-950 transition-colors hover:text-violet-600"
            >
              View all <span aria-hidden="true">↗</span>
            </a>
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
