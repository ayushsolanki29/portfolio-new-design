import Image from "next/image";
import { Briefcase } from "lucide-react";

import gipl from "../../../public/companies/gipl.png";
import gvoice from "../../../public/companies/gvoice.png";
import houspire from "../../../public/companies/houspire.png";
import zodeck from "../../../public/companies/zodeck.png";
import talab from "../../../public/companies/talab.png";
import asknani from "../../../public/companies/asknani.png";
import speedyLaundry from "../../../public/companies/speedy-laundry.svg";
import cassio from "../../../public/companies/cassio-dry-cleaners.png";
import imexina from "../../../public/companies/impexina.jpeg";
import bennet from "../../../public/companies/bennet-trading.svg";
import slxm from "../../../public/companies/slexim.jpg";

const partners = [
  { name: "GIPL", src: gipl },
  { name: "Gvoice", src: gvoice },
  { name: "Houspire", src: houspire },
  { name: "Zodeck", src: zodeck },
  { name: "Talab", src: talab },
  { name: "AskNani", src: asknani },
  { name: "Speedy Laundry", src: speedyLaundry },
  { name: "Cassio Dry Cleaners", src: cassio },
  { name: "Imexina", src: imexina },
  { name: "Bennet Trading", src: bennet },
  { name: "SLXM", src: slxm },
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
            I write code that works,
          </span>
          <span className="block">and systems that scale.</span>
        </h1>

        <p className="mt-4 max-w-2xl text-[15px] sm:text-[19px] font-normal leading-snug text-slate-900 px-2">
          Fullstack Engineer ~ Node.js, Next.js, AWS & beyond.
        </p>

        <div className="mt-5 flex flex-wrap items-center justify-center gap-[8px] text-[11px] sm:text-[12px] font-bold px-4">
          <span className="rounded-md bg-lime-100 px-[7px] py-[3px] text-green-700">
            3+ years of experience
          </span>
          <span className="rounded-md bg-violet-100 px-[7px] py-[3px] text-violet-700">
            Production Engineer @ GIPL
          </span>
          <span className="flex items-center gap-1.5 rounded-md bg-amber-100 px-[7px] py-[3px] text-amber-700">
            <Briefcase size={12} strokeWidth={2.5} /> Available for Freelance
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
                className="partner-slide flex justify-center items-center"
                aria-hidden={index >= partners.length}
              >
                <Image
                  src={partner.src}
                  alt={index < partners.length ? partner.name : ""}
                  className="w-auto h-auto max-h-[44px] sm:max-h-[56px] max-w-[120px] sm:max-w-[150px] object-contain mix-blend-multiply"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
