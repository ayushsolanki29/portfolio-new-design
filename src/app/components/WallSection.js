import Image from "next/image";
import VSCodeWidget from "./VSCodeWidget";
import NPMWidget from "./NPMWidget";
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
  );
}
