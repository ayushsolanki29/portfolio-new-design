"use client";

import { useState, useEffect } from "react";
import { createProject, getProjectMetadataOptions } from "@/app/actions/project";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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

export default function NewProjectPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const [overviewData, setOverviewData] = useState("");
  const [selectedTech, setSelectedTech] = useState([]);
  const [metadataOptions, setMetadataOptions] = useState({ categories: [], roles: [], accentColors: [], tags: [] });
  const [previewImageUrl, setPreviewImageUrl] = useState("");

  useEffect(() => {
    async function fetchOptions() {
      const options = await getProjectMetadataOptions();
      setMetadataOptions(options);
    }
    fetchOptions();
  }, []);

  useEffect(() => {
    const importDataStr = sessionStorage.getItem("importProjectData");
    if (importDataStr) {
      try {
        const importData = JSON.parse(importDataStr);
        
        // Populate standard fields
        if (importData.title) {
          const titleEl = document.getElementById("title");
          if (titleEl) titleEl.value = importData.title;
        }
        if (importData.slug) {
          const slugEl = document.getElementById("slug");
          if (slugEl) {
            slugEl.value = importData.slug;
            slugEl.dataset.modified = "true";
          }
        }
        if (importData.liveUrl) {
          const liveUrlEl = document.getElementById("live_url");
          if (liveUrlEl) liveUrlEl.value = importData.liveUrl;
        }
        if (importData.githubUrl) {
          const githubUrlEl = document.getElementById("github_url");
          if (githubUrlEl) githubUrlEl.value = importData.githubUrl;
        }
        if (importData.description) {
          const subtitleEl = document.getElementById("subtitle");
          if (subtitleEl) subtitleEl.value = importData.description;
        }
        
        if (importData.createdAt) {
          const yearEl = document.getElementById("year");
          if (yearEl) yearEl.value = new Date(importData.createdAt).getFullYear();
        }
        
        if (importData.content) {
          try {
            JSON.parse(importData.content);
            setOverviewData(importData.content);
          } catch (e) {
            // If it's HTML or text, wrap in EditorJS block structure
            const fallbackData = {
              time: new Date().getTime(),
              blocks: [
                {
                  id: "imported-block",
                  type: "paragraph",
                  data: { text: importData.content }
                }
              ],
              version: "2.28.0"
            };
            setOverviewData(JSON.stringify(fallbackData));
          }
        }
        
        if (importData.thumbnail) {
          setImagePreview(importData.thumbnail);
          setPreviewImageUrl(importData.thumbnail);
        }
        
        if (importData.techStacks) {
          const techNames = importData.techStacks.map(t => t.name.toLowerCase().replace(/\s+/g, '-'));
          setSelectedTech(techNames);
        }
        
        sessionStorage.removeItem("importProjectData");
      } catch (err) {
        console.error("Failed to parse import data", err);
      }
    }
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImagePreview(url);
    } else {
      setImagePreview(null);
    }
  };

  // Simple auto-slug generator based on title
  const handleTitleChange = (e) => {
    const title = e.target.value;
    const slugInput = document.getElementById('slug');
    // Only auto-fill if slug is currently empty or matches the old auto-generated one
    if (slugInput && !slugInput.dataset.modified) {
      slugInput.value = title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)+/g, "");
    }
  };

  const handleSlugInput = (e) => {
    e.target.dataset.modified = "true";
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
    const result = await createProject(formData);

    if (result.success) {
      setSuccess(true);
      // Wait a moment then redirect back to projects list
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
          <h1 className="text-3xl font-serif-display font-bold text-neutral-900 tracking-tight">Create New Project</h1>
          <p className="text-neutral-500">Add a new case study to your portfolio.</p>
        </div>
      </div>

      <Card className="rounded-2xl shadow-sm border-neutral-200/60 overflow-hidden">
        <form onSubmit={handleSubmit}>
          <CardHeader className="bg-neutral-50/50 border-b border-neutral-100 pb-6">
            <CardTitle>Project Details</CardTitle>
            <CardDescription>Fill out the fields exactly as they appear on your case studies.</CardDescription>
          </CardHeader>
          <CardContent className="p-6 space-y-8">
            
            {error && (
              <div className="p-4 text-sm font-medium text-rose-600 bg-rose-50 border border-rose-100 rounded-xl">
                {error}
              </div>
            )}
            
            {success && (
              <div className="p-4 text-sm font-medium text-emerald-600 bg-emerald-50 border border-emerald-100 rounded-xl">
                Project created successfully! Redirecting...
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Title & Slug */}
              <div className="space-y-3">
                <Label htmlFor="title">Project Title</Label>
                <Input 
                  id="title" 
                  name="title" 
                  placeholder="e.g. Building the navigation 2.0" 
                  required 
                  onChange={handleTitleChange}
                  className="rounded-xl bg-neutral-50 border-neutral-200/60"
                />
              </div>
              <div className="space-y-3">
                <Label htmlFor="slug">URL Slug (Unique)</Label>
                <Input 
                  id="slug" 
                  name="slug" 
                  placeholder="e.g. navigation-2" 
                  required 
                  onInput={handleSlugInput}
                  className="rounded-xl bg-neutral-50 border-neutral-200/60 font-mono text-sm"
                />
              </div>

              {/* Category & Subtitle */}
              <div className="space-y-3">
                <Label htmlFor="category">Category</Label>
                <CreatableSelect 
                  name="category" 
                  options={metadataOptions.categories} 
                  placeholder="Select or create category..." 
                />
              </div>
              <div className="space-y-3">
                <Label htmlFor="subtitle">Subtitle / Impact Statement</Label>
                <Input 
                  id="subtitle" 
                  name="subtitle" 
                  placeholder="e.g. Reducing navigation time by 50%" 
                  className="rounded-xl bg-neutral-50 border-neutral-200/60"
                />
              </div>

              {/* Role & Year */}
              <div className="space-y-3">
                <Label htmlFor="role">Role</Label>
                <CreatableSelect 
                  name="role" 
                  options={metadataOptions.roles} 
                  placeholder="Select or create role..." 
                />
              </div>
              <div className="space-y-3">
                <Label htmlFor="year">Year</Label>
                <Input 
                  id="year" 
                  name="year" 
                  placeholder="e.g. 2023" 
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
                  />
                </div>

                <div className="space-y-3">
                  <Label htmlFor="accent_color">Accent Color (Hex)</Label>
                  <div className="flex gap-2">
                    <div className="flex-1">
                      <CreatableSelect 
                        name="accent_color" 
                        options={metadataOptions.accentColors} 
                        defaultValue="#E3F2FD"
                        placeholder="Select or enter hex..." 
                      />
                    </div>
                    <div className="w-10 h-10 rounded-lg border border-neutral-200/60 overflow-hidden shrink-0">
                      <input type="color" name="accent_color_picker" defaultValue="#E3F2FD" className="w-full h-14 -mt-2 cursor-pointer" onChange={(e) => {
                        const input = document.querySelector('input[name="accent_color"]');
                        if (input) {
                          input.value = e.target.value;
                          // Dispatch change event so React state updates if needed
                          input.dispatchEvent(new Event('change', { bubbles: true }));
                        }
                      }} />
                    </div>
                  </div>
                </div>
              </div>

            {/* URLs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div className="space-y-3">
                <Label htmlFor="live_url">Live URL (Optional)</Label>
                <Input 
                  id="live_url" 
                  name="live_url" 
                  type="url"
                  placeholder="https://example.com" 
                  className="rounded-xl bg-neutral-50 border-neutral-200/60"
                />
              </div>

              <div className="space-y-3">
                <Label htmlFor="github_url">GitHub URL (Optional)</Label>
                <Input 
                  id="github_url" 
                  name="github_url" 
                  type="url"
                  placeholder="https://github.com/ayushsolanki29/..." 
                  className="rounded-xl bg-neutral-50 border-neutral-200/60"
                />
              </div>
            </div>

              {/* Duration & Built With */}
              <div className="space-y-3">
                <Label htmlFor="duration">Duration</Label>
                <Input 
                  id="duration" 
                  name="duration" 
                  placeholder="e.g. 4 months" 
                  className="rounded-xl bg-neutral-50 border-neutral-200/60"
                />
              </div>
              <div className="space-y-3">
                <Label>Built With (Tech Stack)</Label>
                <TechStackSelect selectedSlugs={selectedTech} onChange={setSelectedTech} />
              </div>
            </div>

            <hr className="border-neutral-100" />

            {/* Preview Image */}
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
                      <p className="text-xs text-neutral-400">PNG, JPG, WEBP (Max 5MB)</p>
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
                  <input type="hidden" name="preview_image_url" value={previewImageUrl} />
                </label>
              </div>
            </div>

            <hr className="border-neutral-100" />

            {/* Overview / Content */}
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
                  Saving Project...
                </>
              ) : (
                "Create Project"
              )}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
