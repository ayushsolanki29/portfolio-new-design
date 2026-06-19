"use client";

import React from "react";

const affirmationsData = [
  { type: "image", color: "bg-[#EEEDFC]", content: "🌿" }, 
  { type: "text", color: "bg-[#F3FBE8]", content: "Today is a fresh start for you." },
  { type: "text", color: "bg-[#FDFDE8]", content: "You deserve all the good things." },
  { type: "image", color: "bg-[#EBF8F9]", content: "🌸" },
  { type: "text", color: "bg-[#FCECF3]", content: "Everything is going to be okay." },
  { type: "image", color: "bg-[#FDF3E8]", content: "✨" },
];

// Double the data to create an infinite scroll effect
const scrollData = [...affirmationsData, ...affirmationsData];

export default function Affirmations() {
  return (
    <section className="px-5 sm:px-8 lg:px-12 py-10">
      <div className="mx-auto max-w-5xl bg-white rounded-[32px] border border-neutral-100 shadow-sm py-10 sm:py-16 overflow-hidden">
        <div className="text-center mb-10 sm:mb-16 px-5">
          <h2 className="text-[32px] sm:text-[42px] font-bold text-neutral-950 font-serif-display mb-3">
            Some affirmations for you...
          </h2>
          <p className="text-[15px] sm:text-[16px] text-neutral-500 font-medium">
            Being kind is the way to be
          </p>
        </div>

        <div className="relative w-full overflow-hidden flex items-center group">
          {/* Fading Edges for the marquee */}
          <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

          <div className="flex w-max animate-affirmation-scroll gap-4 sm:gap-6 px-3">
            {scrollData.map((item, index) => (
              <div
                key={index}
                className={`w-[200px] h-[280px] sm:w-[260px] sm:h-[340px] flex-shrink-0 rounded-[24px] flex items-center justify-center p-6 sm:p-8 text-center transition-transform hover:scale-[1.02] cursor-default ${item.color}`}
              >
                {item.type === "text" ? (
                  <span className="text-[17px] sm:text-[20px] font-medium text-neutral-800 leading-snug">
                    {item.content}
                  </span>
                ) : (
                  <span className="text-[64px] sm:text-[80px] opacity-20 grayscale">{item.content}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
