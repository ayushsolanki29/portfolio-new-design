"use client";

import { useState, useEffect } from "react";
import { updateThought, getThoughtCategories } from "@/app/actions/thought";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { ArrowLeft, Loader2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import CreatableSelect from "@/components/admin/CreatableSelect";

const Editor = dynamic(() => import("@/components/admin/Editor"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center min-h-[300px] w-full bg-neutral-50 rounded-xl border border-neutral-200/60 text-neutral-400">
      <Loader2 className="h-6 w-6 animate-spin mr-2" /> Loading editor...
    </div>
  ),
});

const CATEGORY_OPTIONS = [
  "Reflections",
  "Dev Notes",
  "Ideas",
  "Learning",
  "Behind the Scenes",
];

const ACCENT_COLORS = [
  { label: "Lavender", value: "#ede8ff" },
  { label: "Peach", value: "#fff0ea" },
  { label: "Lime", value: "#edfce7" },
  { label: "Yellow", value: "#fefce8" },
  { label: "Sky Blue", value: "#f0f4ff" },
  { label: "Rose", value: "#fce8f4" },
];

export default function EditThoughtForm({ thought }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [contentData, setContentData] = useState(
    thought.content ? JSON.stringify(thought.content) : ""
  );
  const [categories, setCategories] = useState(CATEGORY_OPTIONS);

  useEffect(() => {
    async function fetchOptions() {
      const dbCategories = await getThoughtCategories();
      const combined = new Set([...CATEGORY_OPTIONS, ...dbCategories]);
      setCategories(Array.from(combined));
    }
    fetchOptions();
  }, []);

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
    const result = await updateThought(thought.id, formData);

    if (result.success) {
      setSuccess(true);
      setTimeout(() => {
        router.push("/admin/thoughts");
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
          href="/admin/thoughts" 
          className="inline-flex items-center justify-center h-10 w-10 rounded-xl hover:bg-neutral-100 text-neutral-600 transition-colors"
        >
          <ArrowLeft className="h-5 w-5" />
        </Link>
        <div>
          <h1 className="text-3xl font-serif-display font-bold text-neutral-900 tracking-tight">Edit Thought</h1>
          <p className="text-neutral-500">Update your thought.</p>
        </div>
      </div>

      <Card className="rounded-2xl shadow-sm border-neutral-200/60 overflow-hidden">
        <form onSubmit={handleSubmit}>
          <CardHeader className="bg-neutral-50/50 border-b border-neutral-100 pb-6">
            <CardTitle>Thought Details</CardTitle>
            <CardDescription>Update the details of your thought.</CardDescription>
          </CardHeader>
          <CardContent className="p-6 space-y-8">
            
            {error && (
              <div className="p-4 text-sm font-medium text-rose-600 bg-rose-50 border border-rose-100 rounded-xl">
                {error}
              </div>
            )}
            
            {success && (
              <div className="p-4 text-sm font-medium text-emerald-600 bg-emerald-50 border border-emerald-100 rounded-xl">
                Thought updated successfully! Redirecting...
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Title */}
              <div className="space-y-3">
                <Label htmlFor="title">Title</Label>
                <Input 
                  id="title" 
                  name="title" 
                  defaultValue={thought.title}
                  required 
                  className="rounded-xl bg-neutral-50 border-neutral-200/60"
                />
              </div>

              {/* Slug */}
              <div className="space-y-3">
                <Label htmlFor="slug">URL Slug (Unique)</Label>
                <Input 
                  id="slug" 
                  name="slug" 
                  defaultValue={thought.slug}
                  required 
                  onInput={handleSlugInput}
                  className="rounded-xl bg-neutral-50 border-neutral-200/60 font-mono text-sm"
                />
              </div>

              {/* Category */}
              <div className="space-y-3">
                <Label htmlFor="category">Category</Label>
                <CreatableSelect 
                  name="category" 
                  options={categories} 
                  defaultValue={thought.category}
                  placeholder="Select or create category..." 
                />
              </div>

              {/* Accent Color */}
              <div className="space-y-3 md:col-span-2">
                <Label>Accent Color</Label>
                <div className="flex flex-wrap gap-3">
                  {ACCENT_COLORS.map((color) => (
                    <label key={color.value} className="cursor-pointer">
                      <input 
                        type="radio" 
                        name="accent_color" 
                        value={color.value} 
                        className="sr-only peer" 
                        defaultChecked={thought.accent_color === color.value || (!thought.accent_color && color.value === "#ede8ff")}
                      />
                      <div className="flex items-center gap-2 px-3 py-2 rounded-xl border border-neutral-200/60 peer-checked:border-neutral-900 peer-checked:bg-neutral-50 transition-all">
                        <div 
                          className="w-5 h-5 rounded-full border border-neutral-200 shrink-0" 
                          style={{ background: color.value }} 
                        />
                        <span className="text-sm font-medium text-neutral-700">{color.label}</span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Excerpt */}
            <div className="space-y-3">
              <Label htmlFor="excerpt">Excerpt</Label>
              <Textarea 
                id="excerpt" 
                name="excerpt" 
                rows={3}
                defaultValue={thought.excerpt}
                placeholder="A brief summary that shows on the card (1-2 sentences)..." 
                className="rounded-xl bg-neutral-50 border-neutral-200/60 resize-none"
              />
            </div>

            <hr className="border-neutral-100" />

            {/* Content / Rich Text */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <Label htmlFor="content">Content</Label>
              </div>
              <input type="hidden" name="content" value={contentData} />
              <Editor value={contentData} onChange={setContentData} />
            </div>

          </CardContent>
          <CardFooter className="bg-neutral-50/50 border-t border-neutral-100 p-6 flex justify-end">
            <Button 
              type="button" 
              variant="outline" 
              className="mr-3 rounded-xl border-neutral-200"
              onClick={() => router.push("/admin/thoughts")}
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
                "Update Thought"
              )}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
