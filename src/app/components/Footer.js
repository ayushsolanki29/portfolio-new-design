"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Heart } from "lucide-react";
import { siteConfig } from "@/config/site";
import SocialInfo from "./SocialInfo";

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
                <span className="block text-xs sm:text-sm font-medium text-neutral-500 mb-4 tracking-wide uppercase">Find me online</span>
                <SocialInfo />
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

        <div className="relative z-10 border-t border-neutral-200 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs sm:text-sm font-medium text-neutral-500">
          <p>© {siteConfig.copyrightYear} {siteConfig.name}</p>
          <div className="bg-neutral-900 text-white px-3 py-1.5 rounded-full text-[11px] font-bold shadow-sm flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Available for Freelance
          </div>
        </div>
      </div>
    </footer>
  );
}
