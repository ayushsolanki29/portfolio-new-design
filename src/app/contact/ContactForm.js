"use client";

import { useActionState, useEffect, useRef } from "react";
import { submitContactForm } from "@/app/actions/contact";
import { IconCheckCircle } from "../components/Icons";
import { Loader2 } from "lucide-react";

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContactForm, null);
  const formRef = useRef(null);

  useEffect(() => {
    if (state?.success) {
      formRef.current?.reset();
    }
  }, [state]);

  if (state?.success) {
    return (
      <div className="flex flex-col items-center justify-center h-full min-h-[300px] text-center px-6 bg-neutral-50/50 rounded-3xl border border-neutral-100">
        <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-4">
          <IconCheckCircle width={32} height={32} />
        </div>
        <h3 className="text-xl font-bold text-neutral-900 mb-2">Message Sent!</h3>
        <p className="text-neutral-500">I've received your message and will get back to you shortly.</p>
        <button 
          onClick={() => window.location.reload()}
          className="mt-6 text-sm font-semibold text-violet-600 hover:text-violet-700"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form ref={formRef} action={formAction} className="flex flex-col gap-5 sm:gap-6 pt-0 sm:pt-4">
      {state?.error && (
        <div className="p-4 bg-rose-50 text-rose-600 text-sm font-medium rounded-xl border border-rose-100">
          {state.error}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          type="text"
          name="name"
          required
          disabled={isPending}
          placeholder="What should I call you?"
          className="w-full bg-neutral-100/60 border border-neutral-200 rounded-xl px-5 py-4 text-[15px] outline-none focus:border-violet-400 focus:bg-white transition-all placeholder:text-neutral-400 disabled:opacity-50"
        />

        <div className="relative">
          <input
            type="email"
            name="email"
            required
            disabled={isPending}
            placeholder="Email"
            className="w-full bg-neutral-100/60 border border-neutral-200 rounded-xl px-5 py-4 text-[15px] outline-none focus:border-violet-400 focus:bg-white transition-all placeholder:text-neutral-400 disabled:opacity-50"
          />
        </div>
      </div>

      <textarea
        name="message"
        required
        disabled={isPending}
        placeholder="What's on your mind?"
        rows={6}
        className="w-full bg-neutral-100/60 border border-transparent rounded-2xl px-5 py-5 text-[15px] outline-none focus:border-violet-400 focus:bg-white transition-all placeholder:text-neutral-400 resize-none disabled:opacity-50"
      />

      <button 
        type="submit"
        disabled={isPending}
        className="w-full bg-black text-white rounded-2xl py-4 font-semibold text-[15px] hover:bg-neutral-800 transition-colors shadow-lg shadow-black/10 disabled:opacity-70 flex items-center justify-center gap-2"
      >
        {isPending && <Loader2 className="w-5 h-5 animate-spin" />}
        {isPending ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
