"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import SlideUpLink from "./SlideUpLink";
import { siteConfig, navItems } from "@/config/site";

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const lastY = useRef(0);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      if (currentY < 60) {
        setVisible(true);
      } else if (currentY < lastY.current) {
        setVisible(true);
      } else if (currentY > lastY.current + 4) {
        setVisible(false);
      }
      lastY.current = currentY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`nav-wrapper${visible ? " nav-wrapper--visible" : " nav-wrapper--hidden"}`}
    >
      <div className="nav-aura" aria-hidden="true" />
      <header className="nav-shell mx-auto flex h-[54px] w-full max-w-[536px] items-center justify-between gap-4 rounded-2xl px-5 relative">
        <SlideUpLink
          href="/"
          className="brand-logo flex items-center justify-center"
          aria-label={`${siteConfig.name} home`}
        >
          <Image
            src="/ayush-logo.png"
            alt={`${siteConfig.name} Logo`}
            width={68}
            height={19}
            className="object-contain"
            priority
          />
        </SlideUpLink>

        <nav className="hidden items-center gap-[26px] text-[15px] sm:flex relative">
          {navItems.map((item) => {
            const isActive = pathname === item.path || (pathname === '/' && item.path === '/#home');

            return (
              <SlideUpLink
                key={item.name}
                href={item.path}
                className={`nav-link relative z-10 ${isActive
                  ? "is-active"
                  : "text-neutral-950"
                  }`}
              >
                {item.name}
              </SlideUpLink>
            );
          })}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href={siteConfig.resumePath}
            download={siteConfig.resumeFileName}
            className="nav-resume h-[38px] rounded-xl border border-black/10 px-[17px] text-sm shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] flex items-center justify-center"
          >
            Resume
          </a>
        </div>
      </header>
    </div>
  );
}
