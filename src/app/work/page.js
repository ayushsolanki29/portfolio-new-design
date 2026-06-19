import Link from "next/link";
import PageShell from "../components/PageShell";
import PageHero from "../components/PageHero";
import FadedQuote from "../components/FadedQuote";
import WorkGrid from "../components/WorkGrid";
import { getPublicProjects } from "@/app/actions/project";

export const revalidate = 0; // Disable caching for now to always show latest projects

export default async function WorkPage() {
  const { success, projects } = await getPublicProjects(1, 4);
  const safeProjects = success ? projects : [];

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
          <WorkGrid initialProjects={safeProjects} />
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
