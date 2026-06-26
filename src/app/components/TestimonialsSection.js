"use client";

import { useState, useRef, useEffect } from "react";
import { testimonials } from "@/config/site";

function TestimonialCard({ t, isDuplicate = false, className = "" }) {
  return (
    <div className={`t-card ${t.colorClass} ${className}`} aria-hidden={isDuplicate ? "true" : undefined}>
      <h3 className="t-card__name">{t.name}</h3>
      <p className="t-card__role">{t.role}</p>
      <p className="t-card__quote">{t.quote}</p>
      <div className="t-card__bottom">
        {t.icon && (
          <div className="t-card__doodle text-neutral-900/10" aria-hidden={!isDuplicate ? "true" : undefined}>
            <t.icon size={56} strokeWidth={1.5} />
          </div>
        )}
        {t.image && (
          <img src={t.image} alt={t.name} className={`w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] rounded-2xl shadow-md border border-neutral-100/50 mb-1 mr-1 ${t.isLogo ? "object-contain bg-white p-4" : "object-cover"}`} />
        )}
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const scrollContainerRef = useRef(null);

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, clientWidth } = scrollContainerRef.current;
    // Calculate which card is currently centered
    const index = Math.round(scrollLeft / clientWidth);
    if (index !== activeIndex && index >= 0 && index < testimonials.length) {
      setActiveIndex(index);
    }
  };

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      if (!scrollContainerRef.current) return;
      
      const container = scrollContainerRef.current;
      const { scrollLeft, scrollWidth, clientWidth } = container;
      const maxScrollLeft = scrollWidth - clientWidth;
      
      if (scrollLeft >= maxScrollLeft - 10) {
        // Go back to the first card
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        // Scroll forward by one card width + gap
        const firstChild = container.children[0];
        if (firstChild) {
          const itemWidth = firstChild.getBoundingClientRect().width;
          const gap = 32; // gap-8 = 2rem = 32px
          container.scrollBy({ left: itemWidth + gap, behavior: "smooth" });
        }
      }
    }, 3500);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section id="testimonials" className="py-16 overflow-hidden">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-12 mb-10">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
          <h2 className="flex items-center gap-3 text-[24px] font-bold text-neutral-950 sm:text-[32px] font-serif-display">
            <span aria-hidden="true">✦</span> What people say
          </h2>
          <p className="text-sm text-neutral-400 italic">…bribed all of them with pizzas</p>
        </div>
      </div>

      {/* ── Desktop: animated marquee ──────────────────── */}
      <div className="testimonial-marquee hidden sm:block">
        <div className="testimonial-track">
          {testimonials.map((t, idx) => (
            <TestimonialCard key={`orig-${idx}`} t={t} />
          ))}
          {testimonials.map((t, idx) => (
            <TestimonialCard key={`dup-${idx}`} t={t} isDuplicate />
          ))}
        </div>
      </div>

      {/* ── Mobile: snap slider with dots ───────────────── */}
      <div className="sm:hidden w-full flex flex-col items-center overflow-hidden">
        <div 
          ref={scrollContainerRef}
          onScroll={handleScroll}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="flex w-full overflow-x-auto snap-x snap-mandatory scrollbar-hide px-[10vw] pb-12 pt-8 gap-8 items-center"
        >
          {testimonials.map((t, idx) => (
            <TestimonialCard 
              key={idx} 
              t={t} 
              className="snap-center shrink-0 w-[80vw] max-w-[280px]" 
            />
          ))}
        </div>
        
        {/* Pagination Dots */}
        <div className="flex bg-neutral-300 rounded-full px-4 py-2 gap-2 -mt-4 z-10">
          {testimonials.map((_, idx) => (
            <div 
              key={idx} 
              className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${
                idx === activeIndex ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
