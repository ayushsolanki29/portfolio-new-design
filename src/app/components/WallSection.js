import Image from "next/image";
import VSCodeWidget from "./VSCodeWidget";
import NPMWidget from "./NPMWidget";
import { IconGitHub, IconArrowNE } from "./Icons";
import { siteConfig } from "@/config/site";

const canvasImages = {
  aboutWindow:
    "https://framerusercontent.com/images/XCVNkZ3Jzgp9PlprKmsbrZRkgv0.png?width=553&height=371",
};

export default function WallSection() {
  return (
    <section id="about" className="relative px-5 pb-16 sm:px-8 lg:px-12">

      {/* ── Desktop canvas (md+) ───────────────────────── */}
      <div className="wall-canvas mx-auto hidden md:block">
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
            <path d="M70 12 L10 75 M70 12 L130 75" stroke="#111111" strokeWidth="4" strokeLinecap="round" />
            <circle cx="70" cy="8" r="6" stroke="#111111" strokeWidth="4" fill="white" />
          </svg>
          <div className="wall-sign font-handwritten">This is my wall</div>
        </div>

        <div className="canvas-piece smile-doodle" aria-hidden="true">
          <span />
        </div>

        <NPMWidget />

        <a
          href={siteConfig.socials.github}
          target="_blank"
          rel="noopener noreferrer"
          className="canvas-piece github-badge-cluster cursor-pointer block"
        >
          <h3 className="text-[17px] font-bold text-neutral-800 mb-3 font-serif-display ml-1 tracking-wide flex items-center gap-2">
            <IconGitHub width={15} height={15} className="text-neutral-700" />
            Achievements
            <IconArrowNE width={12} height={12} className="text-neutral-400 opacity-0 group-hover:opacity-100 transition-opacity" />
          </h3>
          <div className="grid grid-cols-3 gap-2.5">
            <div className="relative group">
              <img src="https://github.githubassets.com/assets/pull-shark-default-498c279a747d.png" alt="Pull Shark" className="w-[54px] h-[54px] drop-shadow-sm rounded-full object-cover" />
              <div className="absolute -bottom-1 -right-1 bg-neutral-200/90 text-neutral-800 text-[10px] font-bold px-1.5 py-0 rounded-full shadow-sm border border-neutral-300">x2</div>
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
          <div className="medal" aria-hidden="true"><span>★</span></div>
        </div>

        <div className="canvas-piece sticky-note font-handwritten">
          <p>My portfolio is still under construction, trying to curate my chaos into an order, it takes time.</p>
          <p>Do check out my work though :)</p>
        </div>
      </div>

      {/* ── Mobile grid (< md) ────────────────────────── */}
      <div className="md:hidden grid grid-cols-2 gap-3 max-w-sm mx-auto">

        {/* VS Code widget */}
        <div className="col-span-2 mobile-widget-reset">
          <VSCodeWidget />
        </div>

        {/* Sign */}
        <div className="flex items-center justify-center bg-[#faf9f8] rounded-2xl border border-neutral-100 p-4 min-h-[90px]">
          <div className="wall-sign font-handwritten text-[18px] !transform-none !box-shadow-none !border-[3px] !rounded-[4px]">
            This is my wall
          </div>
        </div>

        {/* Sticky note */}
        <div className="bg-[#dcecff] rounded-2xl p-4 font-handwritten text-[#005ee8] text-[14px] leading-snug min-h-[90px] flex flex-col justify-center">
          <p>Under construction 🚧</p>
          <p className="mt-2">Check my work :)</p>
        </div>

        {/* NPM widget */}
        <div className="col-span-2 mobile-widget-reset">
          <NPMWidget />
        </div>

        {/* About window */}
        <a href="/contact" className="col-span-2 block rounded-2xl overflow-hidden border border-neutral-100 shadow-sm">
          <Image
            src={canvasImages.aboutWindow}
            alt="Know more about me"
            width={400}
            height={268}
            className="w-full h-auto"
          />
        </a>

        {/* GitHub achievements */}
        <a
          href={siteConfig.socials.github}
          target="_blank"
          rel="noopener noreferrer"
          className="col-span-2 bg-white rounded-2xl border border-neutral-100 shadow-sm p-4 flex flex-col gap-3"
        >
          <h3 className="text-[15px] font-bold text-neutral-800 font-serif-display flex items-center gap-2">
            <IconGitHub width={14} height={14} className="text-neutral-700" />
            GitHub Achievements
          </h3>
          <div className="flex flex-wrap gap-2">
            {[
              { src: "https://github.githubassets.com/assets/pull-shark-default-498c279a747d.png", alt: "Pull Shark", badge: "x2" },
              { src: "https://github.githubassets.com/assets/pair-extraordinaire-default-579438a20e01.png", alt: "Pair Extraordinaire" },
              { src: "https://github.githubassets.com/assets/yolo-default-be0bbff04951.png", alt: "YOLO" },
              { src: "https://github.githubassets.com/assets/quickdraw-default-39c6aec8ff89.png", alt: "Quickdraw" },
              { src: "https://github.githubassets.com/assets/starstruck-default-b6610abad518.png", alt: "Starstruck" },
              { src: "https://github.githubassets.com/assets/arctic-code-vault-contributor-default-df8d74122a06.png", alt: "Arctic Code Vault" },
            ].map((a) => (
              <div key={a.alt} className="relative">
                <img src={a.src} alt={a.alt} className="w-[48px] h-[48px] rounded-full object-cover drop-shadow-sm" />
                {a.badge && (
                  <div className="absolute -bottom-1 -right-1 bg-neutral-200/90 text-neutral-800 text-[9px] font-bold px-1.5 rounded-full border border-neutral-300">{a.badge}</div>
                )}
              </div>
            ))}
          </div>
        </a>

        {/* he/him + award card */}
        <div className="col-span-1 bg-neutral-100 rounded-2xl p-4 flex flex-col gap-2 min-h-[120px] relative">
          <span className="inline-flex self-start bg-[#3184ff] text-white text-[12px] font-bold px-2 py-0.5 rounded-full">he/him</span>
          <div className="flex-1 rounded-lg bg-neutral-200" />
        </div>

        {/* Smile doodle */}
        <div className="col-span-1 bg-[#faf9f8] rounded-2xl border border-neutral-100 flex items-center justify-center min-h-[120px]">
          <div className="w-[70px] h-[70px] border-[3px] border-neutral-800 rounded-full relative flex items-center justify-center">
            <div className="absolute top-[22px] left-[18px] w-[6px] h-[6px] rounded-full bg-neutral-800" />
            <div className="absolute top-[22px] right-[18px] w-[6px] h-[6px] rounded-full bg-neutral-800" />
            <div className="absolute bottom-[16px] left-[16px] w-[34px] h-[16px] border-b-[3px] border-neutral-800 rounded-b-full" />
          </div>
        </div>

      </div>
    </section>
  );
}
