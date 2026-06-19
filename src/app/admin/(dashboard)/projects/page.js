import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import Link from "next/link";
import { Plus, FolderGit2, ExternalLink } from "lucide-react";
import { DeleteProjectButton } from "@/components/admin/DeleteProjectButton";
import { CldImage } from "next-cloudinary";
import Image from "next/image";

export const dynamic = "force-dynamic";

export default async function AdminProjectsPage() {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);

  const { data: projects, error } = await supabase
    .from("projects")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching projects:", error);
  }

  return (
    <div className="max-w-5xl mx-auto py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-serif-display font-bold text-neutral-900 tracking-tight">Projects</h1>
          <p className="text-neutral-500 mt-1">Manage your portfolio case studies.</p>
        </div>
        <Link 
          href="/admin/projects/new" 
          className="inline-flex items-center justify-center gap-2 px-6 h-12 rounded-xl bg-neutral-900 text-white font-medium hover:bg-neutral-800 transition-colors shadow-sm"
        >
          <Plus className="h-4 w-4" />
          Add Project
        </Link>
      </div>

      {projects && projects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="group bg-white rounded-2xl border border-neutral-200/60 shadow-sm overflow-hidden hover:shadow-md transition-all">
              {/* Image Thumbnail */}
              <div className="relative w-full h-48 bg-neutral-100 overflow-hidden">
                {project.preview_image ? (
                  // We handle standard URLs or Cloudinary URLs. If you use next-cloudinary, you can adapt it, but since preview_image is a full URL, we use standard img
                  <img
                    src={project.preview_image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="flex items-center justify-center w-full h-full text-neutral-300">
                    <FolderGit2 className="h-12 w-12" />
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-semibold text-neutral-900 line-clamp-1">{project.title}</h3>
                    <p className="text-sm text-neutral-500 mt-1">{project.category}</p>
                  </div>
                </div>

                {/* Footer / Actions */}
                <div className="flex items-center justify-between mt-6 pt-4 border-t border-neutral-100">
                  <span className="text-xs font-medium text-neutral-400 uppercase tracking-wider">{project.year}</span>
                  <div className="flex items-center gap-2">
                    <Link 
                      href={`/work/${project.slug}`} 
                      target="_blank"
                      className="inline-flex items-center justify-center h-9 w-9 rounded-xl bg-neutral-50 hover:bg-neutral-100 text-neutral-600 transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </Link>
                    <DeleteProjectButton id={project.id} imageUrl={project.preview_image} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-24 px-4 bg-white rounded-2xl border border-neutral-200/60 border-dashed text-center">
          <div className="w-16 h-16 rounded-2xl bg-neutral-50 flex items-center justify-center mb-6">
            <FolderGit2 className="h-8 w-8 text-neutral-400" />
          </div>
          <h3 className="text-lg font-semibold text-neutral-900 mb-2">No projects yet</h3>
          <p className="text-neutral-500 max-w-md mb-8">
            You haven't added any projects to your portfolio. Click the button below to create your first case study.
          </p>
          <Link 
            href="/admin/projects/new" 
            className="inline-flex items-center justify-center gap-2 px-6 h-12 rounded-xl bg-neutral-900 text-white font-medium hover:bg-neutral-800 transition-colors"
          >
            <Plus className="h-4 w-4" />
            Create First Project
          </Link>
        </div>
      )}
    </div>
  );
}
