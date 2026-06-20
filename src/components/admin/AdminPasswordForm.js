"use client";

import { useState } from "react";
import { updatePassword } from "@/app/actions/profile";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Loader2, KeyRound } from "lucide-react";

export default function AdminPasswordForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    const formData = new FormData(e.currentTarget);
    const result = await updatePassword(formData);

    if (result.success) {
      setSuccess(true);
      e.target.reset(); // Clear the form fields
      setTimeout(() => setSuccess(false), 3000);
    } else {
      setError(result.error);
    }
    setLoading(false);
  };

  return (
    <Card className="rounded-2xl shadow-sm border-neutral-200/60 overflow-hidden mt-8">
      <form onSubmit={handleSubmit}>
        <CardHeader className="bg-neutral-50/50 border-b border-neutral-100 pb-6 flex flex-row items-start gap-4 space-y-0">
          <div className="p-2.5 bg-white border border-neutral-200/60 rounded-xl shadow-sm shrink-0">
            <KeyRound className="w-5 h-5 text-neutral-700" />
          </div>
          <div>
            <CardTitle>Account Security</CardTitle>
            <CardDescription className="mt-1">Change your dashboard password.</CardDescription>
          </div>
        </CardHeader>
        <CardContent className="p-6 space-y-6">
          
          {error && (
            <div className="p-4 text-sm font-medium text-rose-600 bg-rose-50 border border-rose-100 rounded-xl">
              {error}
            </div>
          )}
          
          {success && (
            <div className="p-4 text-sm font-medium text-emerald-600 bg-emerald-50 border border-emerald-100 rounded-xl">
              Password updated successfully!
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* New Password */}
            <div className="space-y-3">
              <Label htmlFor="new_password">New Password</Label>
              <Input 
                id="new_password" 
                name="new_password" 
                type="password"
                required
                minLength={6}
                placeholder="At least 6 characters" 
                className="rounded-xl bg-neutral-50 border-neutral-200/60"
              />
            </div>

            {/* Confirm Password */}
            <div className="space-y-3">
              <Label htmlFor="confirm_password">Confirm New Password</Label>
              <Input 
                id="confirm_password" 
                name="confirm_password" 
                type="password"
                required
                minLength={6}
                placeholder="Repeat new password" 
                className="rounded-xl bg-neutral-50 border-neutral-200/60"
              />
            </div>
          </div>
        </CardContent>
        <CardFooter className="bg-neutral-50/50 border-t border-neutral-100 p-6 flex justify-end">
          <Button 
            type="submit" 
            variant="outline"
            className="rounded-xl border-neutral-200 text-neutral-700 hover:bg-neutral-100 px-8"
            disabled={loading}
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Updating...
              </>
            ) : (
              "Update Password"
            )}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
