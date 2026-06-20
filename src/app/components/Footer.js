"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function Footer() {
  const words = ["build", "create", "design", "invent"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="relative w-full bg-[#FAF9F8] overflow-hidden pt-24 sm:pt-32 pb-8 text-neutral-900 mt-10 border-t border-neutral-100">

      {/* Huge Background Text Overlay */}
      <div className="absolute bottom-[-20px] sm:bottom-[-40px] left-0 w-full flex justify-center pointer-events-none select-none z-10">
        <h1
          className="text-[120px] sm:text-[220px] lg:text-[300px] font-black tracking-tighter leading-none font-serif-display uppercase bg-clip-text text-transparent"
          style={{ backgroundImage: "linear-gradient(0deg, rgba(0, 0, 0, 0) 24%, rgba(0, 0, 0, 0.05) 91%)" }}
        >
          {siteConfig.shortName}
        </h1>
      </div>

      <div className="relative z-20 mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12 md:gap-20 mb-24 sm:mb-40">

          {/* Left Content */}
          <div className="max-w-2xl">
            <div className="flex items-center flex-wrap gap-x-4 gap-y-2 mb-2">
              <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-neutral-900">
                lets
              </h2>
              <span className="relative inline-flex items-center min-w-[150px] sm:min-w-[180px] md:min-w-[240px] h-[60px] sm:h-[80px] align-middle">
                {words.map((word, index) => (
                  <span
                    key={word}
                    className={`absolute left-0 font-display text-6xl sm:text-7xl md:text-8xl font-normal leading-none text-[#0066FF] transition-all duration-700 ease-in-out ${index === currentIndex
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4 pointer-events-none"
                      }`}
                  >
                    {word}
                  </span>
                ))}
              </span>
            </div>
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-neutral-900 mb-16">
              incredible work together.
            </h2>

            <div className="flex flex-wrap gap-12 sm:gap-24">
              <div>
                <span className="block text-xs sm:text-sm font-medium text-neutral-500 mb-2 tracking-wide uppercase">Email</span>
                <a href={`mailto:${siteConfig.email}`} className="text-base sm:text-lg font-bold text-neutral-800 hover:text-[#0066FF] transition-colors">
                  {siteConfig.email}
                </a>
              </div>
              <div>
                <span className="block text-xs sm:text-sm font-medium text-neutral-500 mb-2 tracking-wide uppercase">Social</span>
                <div className="flex gap-4">
                  <a
                    href={siteConfig.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 bg-white text-neutral-900 rounded-full flex items-center justify-center hover:bg-[#0066FF] hover:text-white transition-all shadow-sm border border-neutral-200"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                  </a>
                  <a
                    href={siteConfig.socials.github}
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 bg-white text-neutral-900 rounded-full flex items-center justify-center hover:bg-[#0066FF] hover:text-white transition-all shadow-sm border border-neutral-200"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Floating Video Frame */}
          <div className="w-full max-w-[280px] md:max-w-[340px] bg-white p-1.5 sm:p-2 rounded-[18px] sm:rounded-[22px] shadow-[0_20px_40px_rgba(0,0,0,0.15)] transform -rotate-2 hover:rotate-0 transition-transform duration-500 mx-auto md:mx-0 border-[1px] border-neutral-200 relative z-20">
            <div className="w-full aspect-[16/9] sm:aspect-[21/9] overflow-hidden rounded-[14px] sm:rounded-[16px] bg-neutral-900">
              <video
                src="https://framerusercontent.com/assets/ZFhoqlxuV09Rbo2TYA3i62HyQ.mp4"
                loop
                preload="auto"
                muted
                playsInline
                autoPlay
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="relative z-10 border-t border-neutral-200 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs sm:text-sm font-medium text-neutral-500">
          <p>© {siteConfig.copyrightYear} {siteConfig.name}</p>
          <div className="bg-neutral-900 text-white px-3 py-1.5 rounded-full text-[11px] font-bold shadow-sm">
            Crafted with Next.js
          </div>
        </div>
      </div>
    </footer>
  );
}
