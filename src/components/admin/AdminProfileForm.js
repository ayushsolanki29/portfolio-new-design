"use client";

import { useState } from "react";
import { updateProfile } from "@/app/actions/profile";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Loader2, User } from "lucide-react";

export default function AdminProfileForm({ initialProfile }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    const formData = new FormData(e.currentTarget);
    const result = await updateProfile(formData);

    if (result.success) {
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    } else {
      setError(result.error);
    }
    setLoading(false);
  };

  return (
    <Card className="rounded-2xl shadow-sm border-neutral-200/60 overflow-hidden">
      <form onSubmit={handleSubmit}>
        <CardHeader className="bg-neutral-50/50 border-b border-neutral-100 pb-6">
          <CardTitle>Personal Information</CardTitle>
          <CardDescription>Update your personal details and public profile.</CardDescription>
        </CardHeader>
        <CardContent className="p-6 space-y-6">
          
          {error && (
            <div className="p-4 text-sm font-medium text-rose-600 bg-rose-50 border border-rose-100 rounded-xl">
              {error}
            </div>
          )}
          
          {success && (
            <div className="p-4 text-sm font-medium text-emerald-600 bg-emerald-50 border border-emerald-100 rounded-xl">
              Profile updated successfully!
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-6">
            {/* Avatar Preview */}
            <div className="shrink-0 flex flex-col items-center gap-3">
              <div className="w-24 h-24 rounded-full bg-neutral-100 border border-neutral-200 flex items-center justify-center overflow-hidden">
                {initialProfile?.avatar_url ? (
                  <img src={initialProfile.avatar_url} alt="Avatar" className="w-full h-full object-cover" />
                ) : (
                  <User className="w-10 h-10 text-neutral-400" />
                )}
              </div>
            </div>

            <div className="flex-1 space-y-6">
              {/* Email (Read-only) */}
              <div className="space-y-3">
                <Label htmlFor="email">Email Address</Label>
                <Input 
                  id="email" 
                  defaultValue={initialProfile?.email || ""} 
                  disabled
                  readOnly
                  className="rounded-xl bg-neutral-50 border-neutral-200/60 text-neutral-500"
                />
                <p className="text-xs text-neutral-500">Your email is managed by your authentication provider.</p>
              </div>

              {/* Full Name */}
              <div className="space-y-3">
                <Label htmlFor="full_name">Full Name</Label>
                <Input 
                  id="full_name" 
                  name="full_name" 
                  defaultValue={initialProfile?.full_name || ""}
                  placeholder="e.g. Jane Doe" 
                  className="rounded-xl bg-neutral-50 border-neutral-200/60"
                />
              </div>

              {/* Avatar URL */}
              <div className="space-y-3">
                <Label htmlFor="avatar_url">Avatar URL</Label>
                <Input 
                  id="avatar_url" 
                  name="avatar_url" 
                  defaultValue={initialProfile?.avatar_url || ""}
                  placeholder="https://example.com/avatar.png" 
                  className="rounded-xl bg-neutral-50 border-neutral-200/60"
                />
              </div>

              {/* Bio */}
              <div className="space-y-3">
                <Label htmlFor="bio">Bio</Label>
                <Textarea 
                  id="bio" 
                  name="bio" 
                  rows={4}
                  defaultValue={initialProfile?.bio || ""}
                  placeholder="A short description about yourself..." 
                  className="rounded-xl bg-neutral-50 border-neutral-200/60 resize-none"
                />
              </div>
            </div>
          </div>

        </CardContent>
        <CardFooter className="bg-neutral-50/50 border-t border-neutral-100 p-6 flex justify-end">
          <Button 
            type="submit" 
            className="rounded-xl bg-neutral-900 text-white hover:bg-neutral-800 px-8"
            disabled={loading}
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Saving...
              </>
            ) : (
              "Save Changes"
            )}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
