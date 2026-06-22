"use client";

import { useEffect, useRef, useState } from "react";

export default function Timeline() {
  const containerRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate how far the container has scrolled into view
      // We start filling when the top of the container hits the middle of the screen
      const startTrigger = windowHeight * 0.5;

      // The distance scrolled relative to the trigger point
      const scrolled = startTrigger - rect.top;

      // The total scrollable distance for the line to fill completely
      // We stop when the bottom of the container hits the middle of the screen
      const totalDistance = rect.height;

      // Calculate percentage
      let percentage = (scrolled / totalDistance) * 100;

      // Clamp between 0 and 100
      percentage = Math.max(0, Math.min(100, percentage));

      setProgress(percentage);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Initialize
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const timelineData = [
    {
      id: 1,
      date: "July 2025 - Present",
      dateColor: "bg-[#fef3c7] text-[#92400e]",
      tag: ["Working with the Team", "Corporate Life Started"],
      title: "Production Engineer @ Gohil Infotech",
      subtitle: "Leading an 8–10 person technical team, managing 35+ live AWS applications, and optimizing infrastructure by 40%.",
      image: "/about/gipl.jpeg"
    },
    {
      id: 3,
      date: "7 May - 10 May 2025",
      dateColor: "bg-[#dcfce7] text-[#166534]",
      tag: ["Client Meeting", "On-Site Work"],
      title: "Mumbai Trip for a Client's Software Project",
      subtitle: "Traveled to Mumbai to meet a major freelance client in person. Spent a few days collaborating directly with stakeholders, architecting scalable solutions, and experiencing the city's fast-paced energy.",
      image: "/about/mumbai-trip.jpeg"
    },
    {
      id: 2,
      date: "January 2022 - March 2025",
      dateColor: "bg-[#f3e8ff] text-[#6b21a8]",
      tag: "Freelance Era",
      title: "Freelance Full-Stack Developer",
      subtitle: "Built 20+ web applications including SaaS platforms, e-commerce, and CRM tools, managing end-to-end delivery.",
      image: "/about/freelance.jpeg"
    },
    {
      id: 4,
      date: "2021 - 2022",
      dateColor: "bg-[#fce7f3] text-[#be185d]",
      tag: ["Esports", "Competitive Gaming"],
      title: "Aspiring Esports Player",
      subtitle: "Dedicated time to playing competitive games at a global level. Built a strong foundation in strategic thinking, teamwork, and high-pressure decision-making before transitioning fully into software engineering.",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1000&auto=format&fit=crop"
    }
  ];

  return (
    <section className="px-5 py-12 sm:py-24 sm:px-8 lg:px-12 max-w-6xl mx-auto flex flex-col md:flex-row relative">

      {/* Left Column (Sticky Header) */}
      <div className="md:w-1/3 mb-12 sm:mb-16 md:mb-0 relative z-10">
        <div className="sticky top-[120px]">
          <h2 className="font-serif-display text-[32px] sm:text-[48px] font-bold flex items-center gap-3 text-neutral-900">
            <span aria-hidden="true" className="text-[28px] sm:text-[40px]">✦</span> Timeline
          </h2>
        </div>
      </div>

      {/* Right Column (Timeline Content) */}
      <div className="md:w-2/3 relative pl-8 md:pl-16" ref={containerRef}>

        {/* Background Line */}
        <div className="absolute left-0 top-3 bottom-0 w-[2px] bg-neutral-200/60 rounded-full" />

        {/* Animated Fill Line */}
        <div
          className="absolute left-0 top-3 w-[2px] bg-violet-500 rounded-full transition-all duration-100 ease-out z-0"
          style={{ height: `calc(${progress}% - 12px)` }}
        />

        {/* Timeline Items */}
        <div className="space-y-24">
          {timelineData.map((item, index) => (
            <div key={item.id} className="relative z-10">

              {/* Dot */}
              <div
                className="absolute -left-[39px] md:-left-[71px] top-1.5 w-[14px] h-[14px] rounded-full bg-neutral-900 border-[3px] border-white shadow-sm transition-colors duration-300"
                style={{
                  backgroundColor: progress >= (index / timelineData.length) * 100 ? '#111111' : '#a3a3a3',
                  boxShadow: '0 0 0 4px white'
                }}
              />

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-3">
                <span className={`text-[11px] font-bold px-3 py-1 rounded-full tracking-wide ${item.dateColor}`}>
                  {item.date}
                </span>
                {(Array.isArray(item.tag) ? item.tag : [item.tag]).map((t, idx) => {
                  const tagColors = [
                    "bg-[#e0f2fe] text-[#0369a1]", // blue
                    "bg-[#fce7f3] text-[#be185d]", // pink
                    "bg-[#fef3c7] text-[#92400e]", // yellow
                    "bg-[#dcfce7] text-[#166534]", // green
                    "bg-[#f3e8ff] text-[#6b21a8]"  // purple
                  ];
                  return (
                    <span key={idx} className={`text-[11px] font-bold px-3 py-1 rounded-full tracking-wide ${tagColors[idx % tagColors.length]}`}>
                      {t}
                    </span>
                  );
                })}
              </div>

              {/* Content */}
              <h3 className="font-serif-display text-[26px] sm:text-[32px] font-bold text-neutral-950 mb-3 leading-tight">
                {item.title}
              </h3>

              <p className="text-neutral-600 mb-6 text-[15px] sm:text-[16px] leading-relaxed">
                {item.subtitle}
              </p>

              {/* Image */}
              <div className="w-full aspect-[4/3] sm:aspect-video rounded-3xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.06)] bg-neutral-100 border border-black/5">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
              </div>

            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
