"use client";

import { useState } from "react";
import { createProject } from "@/app/actions/project";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { ArrowLeft, Loader2, UploadCloud } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NewProjectPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);

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
      // Wait a moment then redirect back to dashboard
      setTimeout(() => {
        router.push("/admin");
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
          href="/admin" 
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
                <Input 
                  id="category" 
                  name="category" 
                  placeholder="e.g. Interaction/UX design" 
                  required 
                  className="rounded-xl bg-neutral-50 border-neutral-200/60"
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
                <Input 
                  id="role" 
                  name="role" 
                  placeholder="e.g. Lead Product Designer" 
                  required 
                  className="rounded-xl bg-neutral-50 border-neutral-200/60"
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
                <Label htmlFor="built_with">Built With (Comma separated)</Label>
                <Input 
                  id="built_with" 
                  name="built_with" 
                  placeholder="e.g. React, TypeScript, Tailwind CSS" 
                  className="rounded-xl bg-neutral-50 border-neutral-200/60"
                />
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
                      <img src={imagePreview} alt="Preview" className="absolute inset-0 w-full h-full object-cover opacity-50" />
                      <div className="relative z-10 flex flex-col items-center justify-center bg-white/80 backdrop-blur-sm px-4 py-2 rounded-lg border border-neutral-200/50">
                        <UploadCloud className="w-6 h-6 mb-1 text-emerald-500" />
                        <p className="text-sm font-medium text-emerald-700">Image selected</p>
                        <p className="text-xs text-neutral-500">Click to change</p>
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
                </label>
              </div>
            </div>

            <hr className="border-neutral-100" />

            {/* Overview / Content */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <Label htmlFor="overview">Project Overview / Description</Label>
                <span className="text-xs text-neutral-400">Will be replaced with Rich Text Editor later</span>
              </div>
              <Textarea 
                id="overview" 
                name="overview" 
                placeholder="Users were struggling to navigate between modules efficiently..." 
                required 
                className="min-h-[200px] rounded-xl bg-neutral-50 border-neutral-200/60 resize-y"
              />
            </div>

          </CardContent>
          <CardFooter className="bg-neutral-50/50 border-t border-neutral-100 p-6 flex justify-end">
            <Button 
              type="button" 
              variant="outline" 
              className="mr-3 rounded-xl border-neutral-200"
              onClick={() => router.back()}
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
