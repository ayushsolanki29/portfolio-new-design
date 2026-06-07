"use client";

import { useState } from "react";

const faqData = [
  {
    question: "What is my experience like?",
    answer:
      "I have ~3.5 yrs total experience in data-driven UX, systems thinking, scaling SaaS products & AI UX, and some in B2C via freelance as well",
  },
  {
    question: "What makes me stand out?",
    answer:
      "I blend creativity with deep analytical thinking. I don't just design interfaces; I solve complex product problems and align user needs with business goals.",
  },
  {
    question: "What are my values?",
    answer:
      "Empathy, collaboration, and continuous learning. I believe in designing with people, not just for them, and always iterating based on feedback.",
  },
  {
    question: "How I measure success?",
    answer:
      "By looking at both qualitative user feedback and quantitative metrics like task completion rate, time on task, and overall user satisfaction.",
  },
  {
    question: "What is my working style?",
    answer:
      "Highly collaborative and iterative. I like to involve stakeholders early, prototype quickly, and validate assumptions through testing.",
  },
  {
    question: "Do I offer freelance services?",
    answer:
      "Yes, I am open to select freelance opportunities depending on my current bandwidth. Feel free to reach out to discuss potential projects.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0); // First one open by default as in the image

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-20 px-5 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-[36px] sm:text-[42px] font-bold text-neutral-950 font-serif-display mb-3">
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
                  className="w-full flex items-center justify-between text-left py-5 px-4 sm:px-6 focus:outline-none group"
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`text-[22px] font-light leading-none w-5 flex justify-center transition-colors ${
                        isOpen ? "text-neutral-400" : "text-neutral-400 group-hover:text-neutral-600"
                      }`}
                      style={{ marginTop: isOpen ? "-2px" : "0" }}
                    >
                      {isOpen ? "×" : "+"}
                    </span>
                    <span className="text-[16px] font-medium text-neutral-900">
                      {faq.question}
                    </span>
                  </div>
                </button>
                
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-[200px] opacity-100 mb-6" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="pl-14 pr-6 text-[15px] leading-relaxed text-neutral-600">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Placeholder Image Section */}
        <div className="mt-16 py-12 border-t border-b border-neutral-100 flex justify-center">
          <div className="w-full bg-neutral-200 rounded-2xl overflow-hidden aspect-[16/9] sm:aspect-[2/1] relative flex items-center justify-center text-neutral-400">
            {/* Visual placeholder, could be replaced with an actual <Image /> */}
            <span className="font-medium">Image Placeholder</span>
          </div>
        </div>
      </div>
    </section>
  );
}
