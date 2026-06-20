import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import Link from "next/link";
import { Plus, Lightbulb, ExternalLink, Pencil } from "lucide-react";
import { DeleteThoughtButton } from "@/components/admin/DeleteThoughtButton";
import AdminThoughtStats from "@/components/admin/AdminThoughtStats";

export const dynamic = "force-dynamic";

export default async function AdminThoughtsPage() {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);

  const { data: thoughts, error } = await supabase
    .from("thoughts")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching thoughts:", error);
  }

  return (
    <div className="max-w-5xl mx-auto py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-serif-display font-bold text-neutral-900 tracking-tight">Thoughts</h1>
          <p className="text-neutral-500 mt-1">Manage your personal writings and reflections.</p>
        </div>
        <Link 
          href="/admin/thoughts/new" 
          className="inline-flex items-center justify-center gap-2 px-6 h-12 rounded-xl bg-neutral-900 text-white font-medium hover:bg-neutral-800 transition-colors shadow-sm"
        >
          <Plus className="h-4 w-4" />
          New Thought
        </Link>
      </div>

      {thoughts && thoughts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {thoughts.map((thought) => (
            <div key={thought.id} className="group bg-white rounded-2xl border border-neutral-200/60 shadow-sm overflow-hidden hover:shadow-md transition-all">
              {/* Accent Color Bar */}
              <div 
                className="w-full h-3" 
                style={{ background: thought.accent_color || '#ede8ff' }}
              />

              {/* Card Body */}
              <div className="p-5">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="rounded-full bg-neutral-100 px-2.5 py-0.5 text-[10px] font-bold text-neutral-500 tracking-wide uppercase">
                        {thought.category || "Uncategorized"}
                      </span>
                      {thought.reading_time && (
                        <span className="text-[11px] text-neutral-400 font-medium">
                          {thought.reading_time}
                        </span>
                      )}
                    </div>
                    <h3 className="font-semibold text-neutral-900 line-clamp-2 leading-snug">{thought.title}</h3>
                  </div>
                </div>

                {thought.excerpt && (
                  <p className="text-sm text-neutral-500 line-clamp-2 mb-2">{thought.excerpt}</p>
                )}
                
                <AdminThoughtStats 
                  thoughtId={thought.id} 
                  viewCount={thought.view_count} 
                  likeCount={thought.like_count} 
                />

                {/* Footer / Actions */}
                <div className="flex items-center justify-between pt-4 border-t border-neutral-100">
                  <span className="text-xs font-medium text-neutral-400">
                    {new Date(thought.created_at).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                  <div className="flex items-center gap-2">
                    <Link 
                      href={`/thoughts/${thought.slug}`} 
                      target="_blank"
                      className="inline-flex items-center justify-center h-9 w-9 rounded-xl bg-neutral-50 hover:bg-neutral-100 text-neutral-600 transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </Link>
                    <Link 
                      href={`/admin/thoughts/${thought.id}/edit`} 
                      className="inline-flex items-center justify-center h-9 w-9 rounded-xl bg-neutral-50 hover:bg-emerald-50 text-neutral-600 hover:text-emerald-600 transition-colors"
                    >
                      <Pencil className="h-4 w-4" />
                    </Link>
                    <DeleteThoughtButton id={thought.id} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-24 px-4 bg-white rounded-2xl border border-neutral-200/60 border-dashed text-center">
          <div className="w-16 h-16 rounded-2xl bg-neutral-50 flex items-center justify-center mb-6">
            <Lightbulb className="h-8 w-8 text-neutral-400" />
          </div>
          <h3 className="text-lg font-semibold text-neutral-900 mb-2">No thoughts yet</h3>
          <p className="text-neutral-500 max-w-md mb-8">
            Start writing your first thought — a reflection, dev note, or idea.
          </p>
          <Link 
            href="/admin/thoughts/new" 
            className="inline-flex items-center justify-center gap-2 px-6 h-12 rounded-xl bg-neutral-900 text-white font-medium hover:bg-neutral-800 transition-colors"
          >
            <Plus className="h-4 w-4" />
            Write First Thought
          </Link>
        </div>
      )}
    </div>
  );
}
