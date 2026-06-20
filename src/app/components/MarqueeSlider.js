"use client";

import { useEffect, useRef } from "react";

export default function MarqueeSlider({ images, direction = "left", speed = 1 }) {
  const trackRef = useRef(null);
  const posRef = useRef(0);

  useEffect(() => {
    let animationFrameId;
    let lastScrollY = window.scrollY;

    const loop = () => {
      const currentScrollY = window.scrollY;
      const scrollDelta = currentScrollY - lastScrollY;
      lastScrollY = currentScrollY;

      // Base auto-scroll speed (pixels per frame)
      const baseSpeed = direction === "left" ? -1 : 1;
      
      // Scroll parallax effect
      // Add extra movement when scrolling
      const scrollEffect = direction === "left" ? -(scrollDelta * 0.8) : (scrollDelta * 0.8);

      posRef.current += baseSpeed + scrollEffect;

      if (trackRef.current && trackRef.current.children.length > 0) {
         // Get the exact width of one set of images
         const singleSetWidth = trackRef.current.children[0].offsetWidth;
         
         // Wrap the position infinitely
         if (posRef.current <= -singleSetWidth) {
           posRef.current += singleSetWidth;
         } else if (posRef.current > 0) {
           posRef.current -= singleSetWidth;
         }
         
         trackRef.current.style.transform = `translateX(${posRef.current}px)`;
      }

      animationFrameId = requestAnimationFrame(loop);
    };

    animationFrameId = requestAnimationFrame(loop);
    
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [direction]);

  return (
    <div className="relative w-full overflow-hidden flex py-4">
      <div ref={trackRef} className="flex will-change-transform">
        {[0, 1, 2, 3].map((setIndex) => (
          <div key={setIndex} className="flex shrink-0">
            {images.map((src, i) => (
              <div 
                key={i} 
                className="shrink-0 w-[260px] sm:w-[320px] aspect-[4/5] rounded-[24px] overflow-hidden shadow-sm relative group cursor-grab active:cursor-grabbing mr-4 sm:mr-6"
              >
                <img 
                  src={src} 
                  alt={`Slide ${i}`} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 pointer-events-none" 
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
