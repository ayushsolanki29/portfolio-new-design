import Image from "next/image";

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

const navItems = ["Home", "Work", "About", "Contact"];
const partnerSlides = [...partners, ...partners];

const canvasImages = {
  awardPhoto:
    "https://framerusercontent.com/images/0XxjsIvPCrVsvt3sEtGgkUo.png?width=758&height=630",
  aboutWindow:
    "https://framerusercontent.com/images/XCVNkZ3Jzgp9PlprKmsbrZRkgv0.png?width=553&height=371",
};

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-[#111111]">
      <section className="relative flex flex-col px-5 py-[15px] pb-12 sm:px-8 lg:px-12">
        <div className="hero-aura" aria-hidden="true" />
        <div className="nav-aura" aria-hidden="true" />

        <header className="nav-shell relative z-10 mx-auto flex h-[54px] w-full max-w-[536px] items-center justify-between gap-4 rounded-2xl px-5">
          <a
            href="#home"
            className="brand-logo text-[15px]"
            aria-label="Ayush home"
          >
            AYUSH
          </a>

          <nav className="hidden items-center gap-[26px] text-[15px] sm:flex">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={
                  item === "Home"
                    ? "nav-link is-active"
                    : "nav-link text-neutral-950"
                }
              >
                {item}
              </a>
            ))}
          </nav>

          <a
            href="#resume"
            className="nav-resume h-[38px] rounded-xl border border-black/10 px-[17px] text-sm shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]"
          >
            Resume
          </a>
        </header>

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

          <a href="#contact" className="canvas-piece about-window">
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
            <Image
              src={canvasImages.awardPhoto}
              alt="Award winner photo"
              width={300}
              height={249}
              className="h-full w-full rounded-[10px] object-cover"
            />
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
    </main>
  );
}
