import Link from "next/link";
import PageShell from "../components/PageShell";
import PageHero from "../components/PageHero";
import FadedQuote from "../components/FadedQuote";
import WorkCard from "../components/WorkCard";
import { IconArrowNE } from "../components/Icons";
import { projects } from "../../config/projects";

export default function WorkPage() {
  return (
    <PageShell>
      <PageHero
        heading="Curated with love"
        subtitle="Everything that shows me at my best, the journey of how far I've come you'll find here"
      >
        {/* Info Banner */}
        <div className="mt-12 bg-[#f2f7fc] text-[#111111] px-5 py-4 sm:px-6 rounded-2xl flex items-start gap-3 max-w-3xl mx-auto text-left relative z-10 text-[14px] sm:text-[15px] font-medium leading-relaxed">
          <div className="bg-[#1a365d] text-white flex items-center justify-center rounded-full w-5 h-5 shrink-0 mt-[2px] text-xs font-serif italic">
            i
          </div>
          <p>
            Some projects are currently linked externally or they are work
            in-progress, but will soon be available here on the website.
          </p>
        </div>
      </PageHero>

      {/* Projects Grid */}
      <section className="px-5 pb-24 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {projects.map((project) => (
              <WorkCard key={project.slug} {...project} />
            ))}

            {/* CTA Card */}
            <div className="group relative flex flex-col overflow-hidden rounded-[32px] bg-white border border-dashed border-neutral-300 p-6 sm:p-10 transition-transform duration-300 hover:-translate-y-1">
              <div className="relative z-10 flex flex-col items-start h-full">
                <div className="flex flex-wrap items-center gap-2 mb-5 sm:mb-6">
                  <span className="rounded-full bg-neutral-100 px-3 py-1 text-[10px] sm:text-[11px] font-bold text-neutral-600 tracking-wide uppercase">
                    Product type
                  </span>
                  <span className="rounded-full bg-neutral-100 px-3 py-1 text-[10px] sm:text-[11px] font-bold text-neutral-600 tracking-wide uppercase">
                    Your industry
                  </span>
                </div>
                <h3 className="font-serif-display text-[24px] sm:text-[26px] font-bold text-neutral-950 mb-2 sm:mb-3">
                  Next could be ours...
                </h3>
                <p className="text-[14px] sm:text-[15px] leading-relaxed text-neutral-600">
                  Let's build something together?
                </p>
                <Link
                  href="/contact"
                  className="mt-5 sm:mt-6 inline-flex items-center gap-2 rounded-full bg-[#111111] text-white px-5 py-2.5 text-[13px] font-semibold hover:bg-neutral-700 transition-colors"
                >
                  Get in touch
                  <IconArrowNE width={13} height={13} />
                </Link>
              </div>

              {/* Concentric dashed circles */}
              <div className="absolute -bottom-1/4 -right-1/4 w-[300px] h-[300px] pointer-events-none opacity-20">
                <div className="absolute inset-0 rounded-full border border-dashed border-neutral-800 scale-[1.0]" />
                <div className="absolute inset-0 rounded-full border border-dashed border-neutral-800 scale-[0.7]" />
                <div className="absolute inset-0 rounded-full border border-dashed border-neutral-800 scale-[0.4]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <FadedQuote>
        If you never ask, the answer
        <br />
        is always a no.
      </FadedQuote>
    </PageShell>
  );
}
