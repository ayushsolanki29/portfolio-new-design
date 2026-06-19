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

const partnerSlides = [...partners, ...partners];

export default function HeroSection() {
  return (
    <section className="relative flex flex-col px-5 pt-[78px] pb-12 sm:px-8 lg:px-12">
      <div className="hero-aura" aria-hidden="true" />

      <div
        id="home"
        className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center pb-10 pt-[88px] text-center sm:pt-[94px]"
      >
        <h1 className="font-serif-display mx-auto max-w-[1040px] text-[36px] font-bold leading-[1.05] text-neutral-950 sm:text-[64px] lg:text-[82px]">
          <span className="block whitespace-normal lg:whitespace-nowrap">
            I build, I ship, I scale
          </span>
          <span className="block">then I optimize.</span>
        </h1>

        <p className="mt-4 max-w-2xl text-[15px] sm:text-[19px] font-normal leading-snug text-slate-900 px-2">
          Fullstack Engineer — Node.js, Next.js, AWS & beyond.
        </p>

        <div className="mt-5 flex flex-wrap items-center justify-center gap-[8px] text-[11px] sm:text-[12px] font-bold px-4">
          <span className="rounded-md bg-lime-100 px-[7px] py-[3px] text-green-700">
            3+ years of experience
          </span>
          <span className="rounded-md bg-violet-100 px-[7px] py-[3px] text-violet-700">
            Production Engineer @ GIPL
          </span>
          <span className="rounded-md bg-amber-100 px-[7px] py-[3px] text-amber-700">
            🏆 Employee of the Month — Jul 2025
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
  );
}
