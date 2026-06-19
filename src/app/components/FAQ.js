"use client";

import { useState } from "react";
import { faqData } from "@/config/site";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0); // First one open by default as in the image

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-12 sm:py-20 px-5 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-[32px] sm:text-[42px] font-bold text-neutral-950 font-serif-display mb-3">
            Got questions?
          </h2>
          <p className="text-[15px] text-neutral-500 font-medium">
            Some basics answered here, reach out for more
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-neutral-100 shadow-sm overflow-hidden p-2 sm:p-4">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`border-b border-neutral-100 last:border-none`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between text-left py-4 sm:py-5 px-3 sm:px-6 focus:outline-none group"
                >
                  <div className="flex items-start sm:items-center gap-3 sm:gap-4">
                    <span
                      className={`text-[20px] sm:text-[22px] font-light leading-none w-5 flex justify-center transition-colors mt-0.5 sm:mt-0 ${
                        isOpen ? "text-neutral-400" : "text-neutral-400 group-hover:text-neutral-600"
                      }`}
                      style={{ marginTop: isOpen ? "-2px" : undefined }}
                    >
                      {isOpen ? "×" : "+"}
                    </span>
                    <span className="text-[15px] sm:text-[16px] font-medium text-neutral-900 leading-snug">
                      {faq.question}
                    </span>
                  </div>
                </button>
                
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-[300px] sm:max-h-[200px] opacity-100 mb-5 sm:mb-6" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="pl-11 sm:pl-14 pr-4 sm:pr-6 text-[14px] sm:text-[15px] leading-relaxed text-neutral-600">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Placeholder Image Section */}
        <div className="mt-12 sm:mt-16 py-8 sm:py-12 border-t border-b border-neutral-100 flex justify-center">
          <div className="w-full bg-neutral-200 rounded-2xl overflow-hidden aspect-[16/9] sm:aspect-[2/1] relative flex items-center justify-center text-neutral-400">
            {/* Visual placeholder, could be replaced with an actual <Image /> */}
            <span className="font-medium text-sm sm:text-base">Image Placeholder</span>
          </div>
        </div>
      </div>
    </section>
  );
}
