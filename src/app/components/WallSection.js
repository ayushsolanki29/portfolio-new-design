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
  );
}
