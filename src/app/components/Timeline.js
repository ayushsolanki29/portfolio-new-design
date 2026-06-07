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
      date: "September 2024",
      dateColor: "bg-[#fef3c7] text-[#92400e]",
      tag: "#LifeFlipped",
      tagColor: "bg-[#fce7f3] text-[#be185d]",
      title: "Moved to Bangalore, joined Postman",
      subtitle: "So far the most intense series of changes in my life",
      image: "https://images.unsplash.com/photo-1543269664-56d93c1b41a6?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: 2,
      date: "March 2024",
      dateColor: "bg-[#f3e8ff] text-[#6b21a8]",
      tag: "Most favourite",
      tagColor: "bg-[#e0f2fe] text-[#0369a1]",
      title: "1st in new office, 2nd time in BLR!",
      subtitle: "1 week of insane fun, another award for excellence ;)",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: 3,
      date: "May 2021",
      dateColor: "bg-[#f3e8ff] text-[#6b21a8]",
      tag: "The beginning",
      tagColor: "bg-[#fce7f3] text-[#be185d]",
      title: "Where it all began as a designer",
      subtitle: "Flew to Bangalore, first design job, first pizza party @ Josh Talks",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1000&auto=format&fit=crop"
    }
  ];

  return (
    <section className="px-5 py-24 sm:px-8 lg:px-12 max-w-6xl mx-auto flex flex-col md:flex-row relative">
      
      {/* Left Column (Sticky Header) */}
      <div className="md:w-1/3 mb-16 md:mb-0 relative z-10">
        <div className="sticky top-[120px]">
          <h2 className="font-serif-display text-[40px] sm:text-[48px] font-bold flex items-center gap-3 text-neutral-900">
            <span aria-hidden="true" className="text-[32px] sm:text-[40px]">✦</span> Timeline
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
                <span className={`text-[11px] font-bold px-3 py-1 rounded-full tracking-wide ${item.tagColor}`}>
                  {item.tag}
                </span>
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
