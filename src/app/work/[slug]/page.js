import { notFound } from "next/navigation";
import Link from "next/link";
import PageShell from "../../components/PageShell";
import TechBubbles from "../../components/TechBubbles";
import { IconArrowNE, IconArrowLeft, IconArrowRight } from "../../components/Icons";
import { projects, getProjectBySlug } from "../../../config/projects";

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.title} — Ayush Solanki`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const {
    title, tagline, accentColor, year, role, duration,
    tags, techStack, overview, problem, solution, impact,
    liveUrl, githubUrl,
  } = project;

  return (
    <PageShell>
      {/* ── Hero ──────────────────────────────────────────── */}
      <section
        className="relative pt-[120px] sm:pt-[160px] pb-12 sm:pb-16 px-5 sm:px-8 lg:px-12"
        style={{ background: accentColor }}
      >
        <div
          className="nav-aura"
          aria-hidden="true"
          style={{ top: "80px", height: "300px", opacity: 0.5 }}
        />

        <div className="relative z-10 mx-auto max-w-4xl">
          {/* Back link */}
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-[13px] font-medium text-neutral-500 hover:text-neutral-900 transition-colors mb-6 sm:mb-8 group"
          >
            <IconArrowLeft
              width={16}
              height={16}
              className="transition-transform group-hover:-translate-x-0.5"
            />
            All work
          </Link>

          {/* Tags */}
          <div className="flex flex-wrap items-center gap-2 mb-4 sm:mb-5">
            {tags.map((tag, i) => (
              <span
                key={i}
                className={`work-tag ${tag.type === "award" ? "work-tag--award" : ""} ${tag.type === "muted" ? "work-tag--muted" : ""}`}
              >
                {tag.label}
              </span>
            ))}
          </div>

          <h1 className="font-serif-display text-[36px] sm:text-[56px] lg:text-[64px] font-bold text-neutral-950 leading-tight mb-3 sm:mb-4">
            {title}
          </h1>
          <p className="text-[16px] sm:text-[19px] text-neutral-600 leading-relaxed max-w-2xl">
            {tagline}
          </p>

          {/* Meta row */}
          <div className="mt-8 sm:mt-10 flex flex-wrap gap-6 sm:gap-10">
            {[
              { label: "Role", value: role },
              { label: "Year", value: year },
              { label: "Duration", value: duration },
            ].map((meta) => (
              <div key={meta.label}>
                <p className="text-[11px] font-semibold uppercase tracking-widest text-neutral-400 mb-1">
                  {meta.label}
                </p>
                <p className="text-[14px] font-medium text-neutral-800">{meta.value}</p>
              </div>
            ))}
          </div>

          {/* Tech stack */}
          <div className="mt-8 flex items-center gap-1">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-neutral-400 mr-3">
              Built with
            </p>
            <TechBubbles stack={techStack} />
          </div>

          {/* CTA buttons */}
          {(liveUrl || githubUrl) && (
            <div className="mt-8 flex flex-wrap gap-3">
              {liveUrl && (
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#111111] text-white px-5 py-2.5 text-[13px] font-semibold hover:bg-neutral-800 transition-colors"
                >
                  View live
                  <IconArrowNE width={13} height={13} />
                </a>
              )}
              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white text-[#111111] px-5 py-2.5 text-[13px] font-semibold hover:border-neutral-500 transition-colors"
                >
                  GitHub
                  <IconArrowNE width={13} height={13} />
                </a>
              )}
            </div>
          )}
        </div>
      </section>

      {/* ── Project preview ───────────────────────────────── */}
      <section className="px-5 sm:px-8 lg:px-12 -mt-6">
        <div className="mx-auto max-w-4xl">
          <div
            className="w-full h-[240px] sm:h-[360px] rounded-2xl overflow-hidden border border-black/5 shadow-sm flex items-center justify-center"
            style={{
              background: `linear-gradient(135deg, ${accentColor}, white)`,
            }}
            aria-label="Project preview"
          >
            <span className="text-[12px] sm:text-[13px] font-mono tracking-widest uppercase text-neutral-400">
              Project preview
            </span>
          </div>
        </div>
      </section>

      {/* ── Content ───────────────────────────────────────── */}
      <section className="px-5 sm:px-8 lg:px-12 py-12 sm:py-20">
        <div className="mx-auto max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10 lg:gap-16">
            {/* Main content */}
            <div className="space-y-10 sm:space-y-14">
              {[
                { label: "Overview", body: overview },
                { label: "The Problem", body: problem },
                { label: "The Solution", body: solution },
              ].map((section) => (
                <div key={section.label}>
                  <h2 className="project-section-label">{section.label}</h2>
                  <p className="project-body">{section.body}</p>
                </div>
              ))}
            </div>

            {/* Sidebar — Impact */}
            <aside>
              <div
                className="rounded-2xl p-5 sm:p-6 sticky top-[100px]"
                style={{ background: accentColor }}
              >
                <h3 className="text-[11px] font-semibold uppercase tracking-widest text-neutral-500 mb-4">
                  Impact
                </h3>
                <ul className="space-y-3">
                  {impact.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span
                        className="mt-[5px] w-1.5 h-1.5 rounded-full bg-neutral-800 shrink-0"
                        aria-hidden="true"
                      />
                      <span className="text-[14px] font-medium text-neutral-800 leading-snug">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ── Prev / Next navigation ────────────────────────── */}
      <ProjectNav currentSlug={slug} />
    </PageShell>
  );
}

function ProjectNav({ currentSlug }) {
  const idx = projects.findIndex((p) => p.slug === currentSlug);
  const prev = idx > 0 ? projects[idx - 1] : null;
  const next = idx < projects.length - 1 ? projects[idx + 1] : null;

  if (!prev && !next) return null;

  return (
    <nav
      aria-label="Project navigation"
      className="border-t border-neutral-100 px-5 sm:px-8 lg:px-12 py-8 sm:py-10"
    >
      <div className="mx-auto max-w-4xl flex items-center justify-between gap-4">
        {prev ? (
          <Link
            href={`/work/${prev.slug}`}
            className="group flex flex-col items-start max-w-[45%]"
          >
            <span className="text-[11px] font-semibold uppercase tracking-widest text-neutral-400 mb-1 flex items-center gap-1">
              <IconArrowLeft
                width={12}
                height={12}
                className="transition-transform group-hover:-translate-x-0.5"
              />
              Previous
            </span>
            <span className="text-[14px] sm:text-[15px] font-semibold text-neutral-800 group-hover:text-neutral-950 transition-colors line-clamp-1">
              {prev.title}
            </span>
          </Link>
        ) : (
          <div />
        )}

        {next ? (
          <Link
            href={`/work/${next.slug}`}
            className="group flex flex-col items-end text-right max-w-[45%]"
          >
            <span className="text-[11px] font-semibold uppercase tracking-widest text-neutral-400 mb-1 flex items-center gap-1">
              Next
              <IconArrowRight
                width={12}
                height={12}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </span>
            <span className="text-[14px] sm:text-[15px] font-semibold text-neutral-800 group-hover:text-neutral-950 transition-colors line-clamp-1">
              {next.title}
            </span>
          </Link>
        ) : (
          <div />
        )}
      </div>
    </nav>
  );
}
