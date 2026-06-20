import { notFound } from "next/navigation";
import Link from "next/link";
import PageShell from "../../components/PageShell";
import BlocksRenderer from "@/components/BlocksRenderer";
import { IconArrowLeft, IconArrowRight } from "../../components/Icons";
import ThoughtEngagement from "../../components/ThoughtEngagement";
import ThoughtComments from "../../components/ThoughtComments";
import { createClient } from "@supabase/supabase-js";

// Initialize public client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY
);

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const { data: thought } = await supabase.from("thoughts").select("*").eq("slug", slug).single();
  if (!thought) return {};
  return {
    title: `${thought.title} — Thoughts`,
    description: thought.excerpt,
  };
}

export default async function ThoughtDetailPage({ params }) {
  const { slug } = await params;
  const { data: thought } = await supabase.from("thoughts").select("*").eq("slug", slug).single();

  if (!thought) notFound();

  const {
    id,
    title,
    excerpt,
    category,
    created_at,
    reading_time,
    accent_color,
    view_count,
    like_count,
    content,
  } = thought;

  const formattedDate = new Date(created_at).toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  // Find prev/next
  const { data: allThoughts } = await supabase
    .from("thoughts")
    .select("title, slug")
    .order("created_at", { ascending: false });

  const idx = (allThoughts || []).findIndex((t) => t.slug === slug);
  const prev = idx > 0 ? allThoughts[idx - 1] : null;
  const next = idx < (allThoughts || []).length - 1 ? allThoughts[idx + 1] : null;

  return (
    <PageShell>
      {/* ── Hero ──────────────────────────────────────────── */}
      <section
        className="relative pt-[120px] sm:pt-[160px] pb-12 sm:pb-16 px-5 sm:px-8 lg:px-12"
        style={{ background: accent_color || "#ede8ff" }}
      >
        <div
          className="nav-aura"
          aria-hidden="true"
          style={{ top: "80px", height: "300px", opacity: 0.5 }}
        />

        <div className="relative z-10 mx-auto max-w-3xl">
          {/* Back link */}
          <Link
            href="/thoughts"
            className="inline-flex items-center gap-2 text-[13px] font-medium text-neutral-500 hover:text-neutral-900 transition-colors mb-6 sm:mb-8 group"
          >
            <IconArrowLeft
              width={16}
              height={16}
              className="transition-transform group-hover:-translate-x-0.5"
            />
            All thoughts
          </Link>

          {/* Category + reading time */}
          <div className="flex flex-wrap items-center gap-2 mb-4 sm:mb-5">
            <span className="thought-tag">{category}</span>
            {reading_time && (
              <span className="thought-tag thought-tag--muted">{reading_time}</span>
            )}
          </div>

          <h1 className="font-serif-display text-[32px] sm:text-[48px] lg:text-[56px] font-bold text-neutral-950 leading-tight mb-3 sm:mb-4">
            {title}
          </h1>
          {excerpt && (
            <p className="text-[15px] sm:text-[18px] text-neutral-600 leading-relaxed max-w-2xl">
              {excerpt}
            </p>
          )}

          {/* Date */}
          <div className="mt-6 sm:mt-8">
            <time
              dateTime={created_at}
              className="text-[13px] font-medium text-neutral-500"
            >
              {formattedDate}
            </time>
          </div>
        </div>
      </section>

      {/* ── Content ───────────────────────────────────────── */}
      <section className="px-5 sm:px-8 lg:px-12 py-12 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <div className="space-y-6 prose-neutral max-w-none">
            <BlocksRenderer content={content} />
          </div>
          
          {/* Engagement (Views & Likes) */}
          <ThoughtEngagement 
            slug={slug} 
            initialViewCount={view_count} 
            initialLikeCount={like_count} 
          />
          
          {/* Comments Section */}
          <ThoughtComments 
            thoughtId={id} 
            slug={slug} 
          />
        </div>
      </section>

      {/* ── Prev / Next navigation ────────────────────────── */}
      {(prev || next) && (
        <nav
          aria-label="Thought navigation"
          className="border-t border-neutral-100 px-5 sm:px-8 lg:px-12 py-8 sm:py-10"
        >
          <div className="mx-auto max-w-3xl flex items-center justify-between gap-4">
            {prev ? (
              <Link
                href={`/thoughts/${prev.slug}`}
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
                href={`/thoughts/${next.slug}`}
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
      )}
    </PageShell>
  );
}
