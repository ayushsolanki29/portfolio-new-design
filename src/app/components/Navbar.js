"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import SlideUpLink from "./SlideUpLink";
import { siteConfig, navItems } from "@/config/site";

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastY = useRef(0);
  const pathname = usePathname();

  // Hide/show on scroll
  useEffect(() => {
    const onScroll = () => {
      if (menuOpen) return;
      const currentY = window.scrollY;
      if (currentY < 60) setVisible(true);
      else if (currentY < lastY.current) setVisible(true);
      else if (currentY > lastY.current + 4) setVisible(false);
      lastY.current = currentY;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [menuOpen]);

  // Close on route change
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  // Close on Escape
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") setMenuOpen(false); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  // Close on outside click
  const wrapperRef = useRef(null);
  useEffect(() => {
    const onClick = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [menuOpen]);

  const toggleMenu = useCallback(() => setMenuOpen((o) => !o), []);

  return (
    <div
      className={`nav-wrapper${visible ? " nav-wrapper--visible" : " nav-wrapper--hidden"}`}
      style={{ overflow: "visible" }}
    >
      <div className="nav-aura" aria-hidden="true" />

      {/* Wrapper positions pill + dropdown together */}
      <div
        ref={wrapperRef}
        className="relative mx-auto w-full max-w-[536px]"
      >
        {/* ── Pill ──────────────────────────────────────── */}
        <header className="nav-shell flex h-[54px] w-full items-center justify-between gap-4 rounded-2xl px-5 relative">
          {/* Logo */}
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
              style={{ width: "auto", height: "auto" }}
              priority
            />
          </SlideUpLink>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-[26px] text-[15px] sm:flex relative">
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <SlideUpLink
                  key={item.name}
                  href={item.path}
                  className={`nav-link relative z-10 ${isActive ? "is-active" : "text-neutral-950"}`}
                >
                  {item.name}
                </SlideUpLink>
              );
            })}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* Resume — desktop */}
            <a
              href={siteConfig.resumePath}
              download={siteConfig.resumeFileName}
              className="nav-resume h-[38px] rounded-xl border border-black/10 px-[17px] text-sm shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] hidden sm:flex items-center justify-center"
            >
              Resume
            </a>

            {/* Hamburger — mobile only */}
            <button
              className="sm:hidden flex flex-col items-center justify-center w-[38px] h-[38px] rounded-xl gap-[5px]"
              onClick={toggleMenu}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              <span className={`block h-[1.5px] w-[16px] bg-neutral-800 rounded-full transition-all duration-300 origin-center ${menuOpen ? "translate-y-[6.5px] rotate-45" : ""}`} />
              <span className={`block h-[1.5px] w-[16px] bg-neutral-800 rounded-full transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
              <span className={`block h-[1.5px] w-[16px] bg-neutral-800 rounded-full transition-all duration-300 origin-center ${menuOpen ? "-translate-y-[6.5px] -rotate-45" : ""}`} />
            </button>
          </div>
        </header>

        {/* ── Dropdown panel — same width as pill ───────── */}
        <div
          className={`sm:hidden absolute top-[calc(100%+8px)] left-0 right-0 rounded-2xl transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] origin-top ${
            menuOpen
              ? "opacity-100 scale-y-100 pointer-events-auto"
              : "opacity-0 scale-y-95 pointer-events-none"
          }`}
          style={{
            background: "rgba(250, 249, 248, 0.96)",
            backdropFilter: "blur(24px) saturate(1.2)",
            WebkitBackdropFilter: "blur(24px) saturate(1.2)",
            border: "1px solid rgba(17,17,17,0.07)",
            boxShadow: "0 20px 50px rgba(33,28,38,0.13), inset 0 1px 0 rgba(255,255,255,0.9)",
          }}
          aria-hidden={!menuOpen}
        >
          {/* Nav items */}
          <nav className="flex flex-col items-center gap-1 px-4 pt-5 pb-2">
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`w-full text-center py-3 rounded-xl text-[26px] font-bold font-serif-display transition-colors ${
                    isActive
                      ? "mobile-nav-active"
                      : "text-neutral-900 hover:text-neutral-500"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Resume pill */}
          <div className="px-4 pt-2 pb-5">
            <a
              href={siteConfig.resumePath}
              download={siteConfig.resumeFileName}
              className="flex items-center justify-center w-full py-3.5 rounded-2xl border border-neutral-200 bg-white text-neutral-900 text-[16px] font-semibold shadow-sm hover:bg-neutral-50 transition-colors"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
