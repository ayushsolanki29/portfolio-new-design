import SlideUpLink from "./SlideUpLink";
import WorkCard from "./WorkCard";
import { IconArrowNE } from "./Icons";
import { projects as allProjects } from "../../config/projects";

// Show only the first 4 on the home page
const projects = allProjects.slice(0, 4);

export default function WorkSection() {
  return (
    <section id="work" className="px-5 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="flex items-center gap-3 text-[28px] font-bold text-neutral-950 sm:text-[32px] font-serif-display">
            <span aria-hidden="true">✦</span> Recent work
          </h2>
          <SlideUpLink
            href="/work"
            className="flex items-center gap-1 text-[15px] font-medium text-neutral-950 transition-colors hover:text-violet-600 group"
          >
            View all
            <IconArrowNE width={15} height={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </SlideUpLink>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {projects.map((project, idx) => (
            <WorkCard key={idx} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
