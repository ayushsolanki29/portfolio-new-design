"use client";

import { useState, useEffect } from "react";
import { updateProject } from "@/app/actions/project";
import { getProjectMetadataOptions } from "@/app/actions/project";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { ArrowLeft, Loader2, UploadCloud } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import TechStackSelect from "@/components/admin/TechStackSelect";
import CreatableSelect from "@/components/admin/CreatableSelect";
import CreatableMultiSelect from "@/components/admin/CreatableMultiSelect";

const Editor = dynamic(() => import("@/components/admin/Editor"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center min-h-[300px] w-full bg-neutral-50 rounded-xl border border-neutral-200/60 text-neutral-400">
      <Loader2 className="h-6 w-6 animate-spin mr-2" /> Loading editor...
    </div>
  ),
});

export default function EditProjectForm({ project }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  
  const [imagePreview, setImagePreview] = useState(project.preview_image || null);
  const [overviewData, setOverviewData] = useState(
    typeof project.overview === "string" 
      ? project.overview 
      : (project.overview ? JSON.stringify(project.overview) : "")
  );
  const [selectedTech, setSelectedTech] = useState(project.built_with || []);
  const [metadataOptions, setMetadataOptions] = useState({ categories: [], roles: [], accentColors: [], tags: [] });

  useEffect(() => {
    async function fetchOptions() {
      const options = await getProjectMetadataOptions();
      setMetadataOptions(options);
    }
    fetchOptions();
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImagePreview(url);
    }
  };

  const handleSlugInput = (e) => {
    e.target.value = e.target.value
      .toLowerCase()
      .replace(/[\s_]+/g, "-")
      .replace(/[^a-z0-9-]/g, "");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    const formData = new FormData(e.currentTarget);
    const result = await updateProject(project.id, formData);

    if (result.success) {
      setSuccess(true);
      setTimeout(() => {
        router.push("/admin/projects");
      }, 2000);
    } else {
      setError(result.error);
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-8">
      <div className="flex items-center gap-4 mb-8">
        <Link 
          href="/admin/projects" 
          className="inline-flex items-center justify-center h-10 w-10 rounded-xl hover:bg-neutral-100 text-neutral-600 transition-colors"
        >
          <ArrowLeft className="h-5 w-5" />
        </Link>
        <div>
          <h1 className="text-3xl font-serif-display font-bold text-neutral-900 tracking-tight">Edit Project</h1>
          <p className="text-neutral-500">Update the details of your case study.</p>
        </div>
      </div>

      <Card className="rounded-2xl shadow-sm border-neutral-200/60 overflow-hidden">
        <form onSubmit={handleSubmit}>
          <input type="hidden" name="current_image_url" value={project.preview_image || ""} />
          
          <CardHeader className="bg-neutral-50/50 border-b border-neutral-100 pb-6">
            <CardTitle>Project Details</CardTitle>
            <CardDescription>Update the fields exactly as you want them to appear on your portfolio.</CardDescription>
          </CardHeader>
          <CardContent className="p-6 space-y-8">
            
            {error && (
              <div className="p-4 text-sm font-medium text-rose-600 bg-rose-50 border border-rose-100 rounded-xl">
                {error}
              </div>
            )}
            
            {success && (
              <div className="p-4 text-sm font-medium text-emerald-600 bg-emerald-50 border border-emerald-100 rounded-xl">
                Project updated successfully! Redirecting...
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <Label htmlFor="title">Project Title</Label>
                <Input 
                  id="title" 
                  name="title" 
                  defaultValue={project.title}
                  required 
                  className="rounded-xl bg-neutral-50 border-neutral-200/60"
                />
              </div>
              <div className="space-y-3">
                <Label htmlFor="slug">URL Slug (Unique)</Label>
                <Input 
                  id="slug" 
                  name="slug" 
                  defaultValue={project.slug}
                  required 
                  onInput={handleSlugInput}
                  className="rounded-xl bg-neutral-50 border-neutral-200/60 font-mono text-sm"
                />
              </div>

              <div className="space-y-3">
                <Label htmlFor="category">Category</Label>
                <CreatableSelect 
                  name="category" 
                  options={metadataOptions.categories} 
                  defaultValue={project.category}
                  placeholder="Select or create category..." 
                />
              </div>
              <div className="space-y-3">
                <Label htmlFor="subtitle">Subtitle / Impact Statement</Label>
                <Input 
                  id="subtitle" 
                  name="subtitle" 
                  defaultValue={project.subtitle}
                  className="rounded-xl bg-neutral-50 border-neutral-200/60"
                />
              </div>

              <div className="space-y-3">
                <Label htmlFor="role">Role</Label>
                <CreatableSelect 
                  name="role" 
                  options={metadataOptions.roles} 
                  defaultValue={project.role}
                  placeholder="Select or create role..." 
                />
              </div>
              <div className="space-y-3">
                <Label htmlFor="year">Year</Label>
                <Input 
                  id="year" 
                  name="year" 
                  defaultValue={project.year}
                  required 
                  className="rounded-xl bg-neutral-50 border-neutral-200/60"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-3">
                  <Label htmlFor="tags">Tags</Label>
                  <CreatableMultiSelect 
                    name="tags" 
                    options={metadataOptions.tags} 
                    defaultValues={project.tags || []}
                  />
                </div>

                <div className="space-y-3">
                  <Label htmlFor="accent_color">Accent Color (Hex)</Label>
                  <div className="flex gap-2">
                    <div className="flex-1">
                      <CreatableSelect 
                        name="accent_color" 
                        options={metadataOptions.accentColors} 
                        defaultValue={project.accent_color}
                        placeholder="Select or enter hex..." 
                      />
                    </div>
                    <div className="w-10 h-10 rounded-lg border border-neutral-200/60 overflow-hidden shrink-0">
                      <input type="color" name="accent_color_picker" defaultValue={project.accent_color || "#000000"} className="w-full h-14 -mt-2 cursor-pointer" onChange={(e) => {
                        const input = document.querySelector('input[name="accent_color"]');
                        if (input) {
                          input.value = e.target.value;
                          input.dispatchEvent(new Event('change', { bubbles: true }));
                        }
                      }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div className="space-y-3">
                <Label htmlFor="live_url">Live URL (Optional)</Label>
                <Input 
                  id="live_url" 
                  name="live_url" 
                  type="url"
                  defaultValue={project.live_url}
                  className="rounded-xl bg-neutral-50 border-neutral-200/60"
                />
              </div>

              <div className="space-y-3">
                <Label htmlFor="github_url">GitHub URL (Optional)</Label>
                <Input 
                  id="github_url" 
                  name="github_url" 
                  type="url"
                  defaultValue={project.github_url}
                  className="rounded-xl bg-neutral-50 border-neutral-200/60"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <Label htmlFor="duration">Duration</Label>
                <Input 
                  id="duration" 
                  name="duration" 
                  defaultValue={project.duration}
                  className="rounded-xl bg-neutral-50 border-neutral-200/60"
                />
              </div>
              <div className="space-y-3">
                <Label>Built With (Tech Stack)</Label>
                <TechStackSelect selectedSlugs={selectedTech} onChange={setSelectedTech} />
              </div>
            </div>

            <hr className="border-neutral-100" />

            <div className="space-y-3">
              <Label htmlFor="preview_image">Preview Image</Label>
              <div className="flex items-center justify-center w-full">
                <label htmlFor="preview_image" className="flex flex-col items-center justify-center w-full h-32 border-2 border-neutral-200/60 border-dashed rounded-xl cursor-pointer bg-neutral-50 hover:bg-neutral-100 transition-colors overflow-hidden relative">
                  {imagePreview ? (
                    <>
                      <img src={imagePreview} alt="Preview" className="absolute inset-0 w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity flex flex-col items-center justify-center">
                        <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg border border-neutral-200/50 flex flex-col items-center">
                          <UploadCloud className="w-6 h-6 mb-1 text-emerald-600" />
                          <p className="text-sm font-medium text-emerald-700">Change Image</p>
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <UploadCloud className="w-8 h-8 mb-3 text-neutral-400" />
                      <p className="mb-2 text-sm text-neutral-500"><span className="font-semibold">Click to select image</span> or drag and drop</p>
                    </div>
                  )}
                  <input 
                    id="preview_image" 
                    name="preview_image" 
                    type="file" 
                    accept="image/*" 
                    className="hidden" 
                    onChange={handleImageChange}
                  />
                </label>
              </div>
            </div>

            <hr className="border-neutral-100" />

            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <Label htmlFor="overview">Project Overview / Description</Label>
              </div>
              <input type="hidden" name="overview" value={overviewData} />
              <Editor value={overviewData} onChange={setOverviewData} />
            </div>

          </CardContent>
          <CardFooter className="bg-neutral-50/50 border-t border-neutral-100 p-6 flex justify-end">
            <Button 
              type="button" 
              variant="outline" 
              className="mr-3 rounded-xl border-neutral-200"
              onClick={() => router.push("/admin/projects")}
              disabled={loading}
            >
              Cancel
            </Button>
            <Button 
              type="submit" 
              className="rounded-xl bg-neutral-900 text-white hover:bg-neutral-800 px-8"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Updating...
                </>
              ) : (
                "Update Project"
              )}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
