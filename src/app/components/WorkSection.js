import SlideUpLink from "./SlideUpLink";
import WorkCard from "./WorkCard";
import { IconArrowNE } from "./Icons";
import { getPublicProjects } from "@/app/actions/project";

export default async function WorkSection() {
  const { success, projects } = await getPublicProjects(1, 4);
  const safeProjects = success ? projects : [];

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
          {safeProjects.map((project) => (
            <WorkCard
              key={project.id}
              slug={project.slug}
              title={project.title}
              description={project.subtitle}
              tags={project.tags || []}
              accentColor={project.accent_color}
              builtWith={project.built_with}
              previewImage={project.preview_image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
