"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import WorkCard from "./WorkCard";
import { getPublicProjects } from "@/app/actions/project";
import Link from "next/link";
import { IconArrowNE } from "./Icons";
import { Loader2 } from "lucide-react";

export default function WorkGrid({ initialProjects }) {
  const [projects, setProjects] = useState(initialProjects);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const observerRef = useRef(null);

  const loadMore = useCallback(async () => {
    if (loading || !hasMore) return;
    setLoading(true);
    
    const nextPage = page + 1;
    const { success, projects: newProjects } = await getPublicProjects(nextPage, 4);
    
    if (success && newProjects.length > 0) {
      setProjects((prev) => [...prev, ...newProjects]);
      setPage(nextPage);
      if (newProjects.length < 4) {
        setHasMore(false);
      }
    } else {
      setHasMore(false);
    }
    
    setLoading(false);
  }, [page, loading, hasMore]);

  // Intersection Observer to detect scroll to bottom
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMore();
        }
      },
      { threshold: 0.1 }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, [loadMore]);

  return (
    <>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {projects.map((project) => (
          <WorkCard 
            key={project.id} 
            {...project} 
            description={project.subtitle}
            accentColor={project.accent_color}
            builtWith={project.built_with}
            previewImage={project.preview_image}
          />
        ))}

        {/* CTA Card always at the end, or wait, does the CTA card stay as a regular card? 
            Since we want it at the end of the grid, we render it after all projects.
        */}
        {!hasMore && (
          <div className="group relative flex flex-col overflow-hidden rounded-[32px] bg-white border border-dashed border-neutral-300 p-6 sm:p-10 transition-transform duration-300 hover:-translate-y-1">
            <div className="relative z-10 flex flex-col items-start h-full">
              <div className="flex flex-wrap items-center gap-2 mb-5 sm:mb-6">
                <span className="rounded-full bg-neutral-100 px-3 py-1 text-[10px] sm:text-[11px] font-bold text-neutral-600 tracking-wide uppercase">
                  Product type
                </span>
                <span className="rounded-full bg-neutral-100 px-3 py-1 text-[10px] sm:text-[11px] font-bold text-neutral-600 tracking-wide uppercase">
                  Your industry
                </span>
              </div>
              <h3 className="font-serif-display text-[24px] sm:text-[26px] font-bold text-neutral-950 mb-2 sm:mb-3">
                Next could be ours...
              </h3>
              <p className="text-[14px] sm:text-[15px] leading-relaxed text-neutral-600">
                Let's build something together?
              </p>
              <Link
                href="/contact"
                className="mt-5 sm:mt-6 inline-flex items-center gap-2 rounded-full bg-[#111111] text-white px-5 py-2.5 text-[13px] font-semibold hover:bg-neutral-700 transition-colors"
              >
                Get in touch
                <IconArrowNE width={13} height={13} />
              </Link>
            </div>

            <div className="absolute -bottom-1/4 -right-1/4 w-[300px] h-[300px] pointer-events-none opacity-20">
              <div className="absolute inset-0 rounded-full border border-dashed border-neutral-800 scale-[1.0]" />
              <div className="absolute inset-0 rounded-full border border-dashed border-neutral-800 scale-[0.7]" />
              <div className="absolute inset-0 rounded-full border border-dashed border-neutral-800 scale-[0.4]" />
            </div>
          </div>
        )}
      </div>

      {/* Loading Trigger */}
      {hasMore && (
        <div ref={observerRef} className="py-12 flex justify-center items-center">
          {loading ? (
            <Loader2 className="w-6 h-6 animate-spin text-neutral-400" />
          ) : (
            <div className="w-px h-6 bg-transparent" /> // Invisible trigger
          )}
        </div>
      )}
    </>
  );
}
