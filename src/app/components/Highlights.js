"use client";

import React from "react";

export default function Highlights() {
  return (
    <section className="px-5 sm:px-8 lg:px-12 py-20 bg-white">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 md:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-neutral-200 pb-8">
          <div>
            <h2 className="text-[32px] sm:text-[42px] md:text-[54px] font-bold text-neutral-950 font-serif-display leading-tight mb-4">
              My Professional Impact
            </h2>
            <p className="text-[16px] sm:text-[18px] text-neutral-500 font-medium max-w-md">
              A quick look by the numbers.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Top Left: Large */}
          <div className="md:col-span-2 bg-neutral-50 rounded-[32px] p-8 md:p-12 border border-neutral-100 flex flex-col justify-between group transition-transform hover:scale-[1.01]">
            <div className="mb-12">
              <span className="text-[12px] uppercase tracking-widest font-bold text-neutral-400 mb-4 block">Trust & Scale</span>
              <h3 className="text-[40px] md:text-[56px] font-bold text-neutral-900 leading-[1.1] font-serif-display tracking-tight">
                35+ Businesses <br /> Powered
              </h3>
            </div>
            <p className="text-[16px] md:text-[18px] text-neutral-500 font-medium leading-relaxed max-w-lg">
              Engineering and deploying production-ready applications that business owners and teams rely on every single day.
            </p>
          </div>

          {/* Top Right: Small */}
          <div className="md:col-span-1 bg-white rounded-[32px] p-8 md:p-12 border border-neutral-200 shadow-sm flex flex-col justify-between group transition-transform hover:scale-[1.02]">
            <div className="mb-10">
              <span className="text-[12px] uppercase tracking-widest font-bold text-emerald-500 mb-4 block">Profit Optimization</span>
              <h3 className="text-[36px] md:text-[48px] font-bold text-emerald-600 leading-[1.1] font-serif-display tracking-tight">
                ~40% Off
              </h3>
              <p className="text-[16px] font-bold text-emerald-800/80 mt-1">Infrastructure Bills</p>
            </div>
            <p className="text-[15px] text-neutral-500 font-medium leading-relaxed">
              Smart optimization of server resources and database queries to slash monthly cloud costs without sacrificing application performance.
            </p>
          </div>

          {/* Bottom Left: Small */}
          <div className="md:col-span-1 bg-[#fff8eb] rounded-[32px] p-8 md:p-12 border border-[#ffeccc] flex flex-col justify-between group transition-transform hover:scale-[1.02]">
            <div className="mb-10">
              <span className="text-[12px] uppercase tracking-widest font-bold text-amber-600 mb-4 block">Revenue & Growth</span>
              <h3 className="text-[36px] md:text-[42px] font-bold text-amber-700 leading-[1.1] font-serif-display tracking-tight">
                ₹1,00,000+
              </h3>
              <p className="text-[16px] font-bold text-amber-800 mt-1">Revenue Milestone</p>
            </div>
            <p className="text-[15px] text-amber-900/70 font-medium leading-relaxed">
              Built the entire core technical platform for a new business, directly supporting its path to its first ₹1,00,000 in revenue.
            </p>
          </div>

          {/* Bottom Right: Medium */}
          <div className="md:col-span-2 bg-neutral-900 rounded-[32px] p-8 md:p-12 border border-neutral-800 flex flex-col justify-between group transition-transform hover:scale-[1.01]">
            <div className="mb-12">
              <span className="text-[12px] uppercase tracking-widest font-bold text-neutral-400 mb-4 block">Technical Leadership</span>
              <h3 className="text-[40px] md:text-[56px] font-bold text-white leading-[1.1] font-serif-display tracking-tight">
                Leading with <br /> Impact
              </h3>
            </div>
            <p className="text-[16px] md:text-[18px] text-neutral-400 font-medium leading-relaxed max-w-lg">
              Head of an 8–10 person engineering team, managing end-to-end delivery from a blank canvas to live, scaling products.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
