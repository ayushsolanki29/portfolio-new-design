"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight, LockKeyhole, Mail } from "lucide-react";

export default function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter();
  const supabase = createClient();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      router.refresh();
      router.push("/admin");
    }
  };

  return (
    <div className="relative min-h-screen bg-[#fbfaf8] flex flex-col items-center justify-center p-4 sm:p-8 overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-purple-200/40 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-rose-200/40 blur-[120px] pointer-events-none" />

      <div className="w-full max-w-[420px] relative z-10 animate-in fade-in slide-in-from-bottom-8 duration-700 ease-out">
        
        {/* Header Section */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-neutral-900 text-white shadow-xl shadow-neutral-900/20 mb-6 transform transition-transform hover:scale-105 duration-300">
            <span className="font-serif-display font-bold text-xl tracking-tight">AS</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-neutral-900 tracking-tight font-serif-display mb-2">
            Welcome back, Ayush
          </h1>
          <p className="text-neutral-500 text-sm sm:text-base">
            Your personal creative portal awaits. Enter your credentials to continue.
          </p>
        </div>

        {/* Login Form Container */}
        <div className="bg-white/70 backdrop-blur-xl border border-white/40 shadow-2xl shadow-neutral-200/50 rounded-[2rem] p-8 sm:p-10">
          <form onSubmit={handleLogin} className="space-y-6">
            
            {error && (
              <div className="p-4 text-sm font-medium text-rose-600 bg-rose-50/80 border border-rose-100 rounded-2xl animate-in fade-in slide-in-from-top-2 duration-300">
                {error}
              </div>
            )}

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-neutral-500 ml-1">
                  Email Address
                </Label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-neutral-400 group-focus-within:text-neutral-900 transition-colors">
                    <Mail className="h-5 w-5" />
                  </div>
                  <Input
                    id="email"
                    type="email"
                    placeholder="name@example.com"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-11 h-14 rounded-2xl bg-white/50 border-neutral-200/60 focus:bg-white focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-900 transition-all shadow-sm"
                    suppressHydrationWarning
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-xs font-semibold uppercase tracking-wider text-neutral-500 ml-1">
                  Password
                </Label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-neutral-400 group-focus-within:text-neutral-900 transition-colors">
                    <LockKeyhole className="h-5 w-5" />
                  </div>
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-11 h-14 rounded-2xl bg-white/50 border-neutral-200/60 focus:bg-white focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-900 transition-all shadow-sm"
                    suppressHydrationWarning
                  />
                </div>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full h-14 rounded-2xl bg-neutral-900 hover:bg-neutral-800 text-white font-medium text-base group transition-all shadow-lg shadow-neutral-900/20 active:scale-[0.98]"
              disabled={loading}
            >
              {loading ? (
                "Signing in..."
              ) : (
                <span className="flex items-center justify-center gap-2">
                  Sign In
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              )}
            </Button>
          </form>
        </div>

        <div className="mt-8 text-center">
          <p className="text-xs text-neutral-400 font-medium">
            Secure Admin Portal &copy; {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </div>
  );
}
