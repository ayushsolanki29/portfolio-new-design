import SlideUpLink from "./SlideUpLink";
import WorkCard from "./WorkCard";

const projects = [
  {
    title: "Building the navigation 2.0",
    description:
      "Reducing navigation time on cloud.yellow.ai from point A to B by 50% to reduce user effort and frustration",
    href: "#project-nav",
    colorClass: "work-card--lavender",
    tags: [
      { label: "Interaction/UX design" },
      { label: "B2B SaaS" },
    ],
    techStack: [
      { name: "React", slug: "react", color: "61DAFB" },
      { name: "TypeScript", slug: "typescript", color: "3178C6" },
      { name: "Figma", slug: "figma", color: "F24E1E" },
      { name: "Tailwind CSS", slug: "tailwindcss", color: "06B6D4" },
    ],
  },
  {
    title: "Collaboration @ Postman",
    description:
      "Enabling 40M+ devs to stay on top of work via comments, notifications, collaboration and AI-native workflows",
    href: "#project-postman",
    colorClass: "work-card--peach",
    tags: [
      { label: "Product Design" },
      { label: "Coming Soon", type: "muted" },
    ],
    techStack: [
      { name: "React", slug: "react", color: "61DAFB" },
      { name: "Node.js", slug: "nodedotjs", color: "339933" },
      { name: "TypeScript", slug: "typescript", color: "3178C6" },
      { name: "AWS", slug: "amazonaws", color: "232F3E" },
      { name: "Postman", slug: "postman", color: "FF6C37" },
    ],
  },
  {
    title: "FinDo - Money made easy",
    description:
      "Building financial management and awareness as a second nature by triggering inherent motivation",
    href: "#project-findo",
    colorClass: "work-card--lime",
    tags: [
      { label: "Product Design" },
      { label: "🏆 Award Winner", type: "award" },
    ],
    techStack: [
      { name: "React", slug: "react", color: "61DAFB" },
      { name: "Next.js", slug: "nextdotjs", color: "000000" },
      { name: "Node.js", slug: "nodedotjs", color: "339933" },
      { name: "Figma", slug: "figma", color: "F24E1E" },
    ],
  },
  {
    title: "Growth @ Pet Warehouse",
    description:
      "Generating organic growth and virality by helping future pet parents find their best match",
    href: "#project-petwarehouse",
    colorClass: "work-card--yellow",
    tags: [
      { label: "UX/Marketing/Growth" },
      { label: "Coming Soon", type: "muted" },
    ],
    techStack: [
      { name: "JavaScript", slug: "javascript", color: "F7DF1E" },
      { name: "Python", slug: "python", color: "3776AB" },
      { name: "Figma", slug: "figma", color: "F24E1E" },
      { name: "Vercel", slug: "vercel", color: "000000" },
    ],
  },
];

export default function WorkSection() {
  return (
    <section id="work" className="px-5 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="flex items-center gap-3 text-[28px] font-bold text-neutral-950 sm:text-[32px] font-serif-display">
            <span aria-hidden="true">✦</span> Recent work
          </h2>
          <SlideUpLink
            href="#all-work"
            className="flex items-center gap-1 text-[15px] font-medium text-neutral-950 transition-colors hover:text-violet-600 group"
          >
            View all
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true"><path d="M7 17l9.2-9.2M17 17V7H7" /></svg>
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
