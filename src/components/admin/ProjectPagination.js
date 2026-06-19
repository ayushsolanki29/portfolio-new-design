"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ProjectPagination({ totalItems, pageSize }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const currentPage = Number(searchParams.get("page")) || 1;
  const totalPages = Math.ceil(totalItems / pageSize) || 1;

  if (totalPages <= 1) return null;

  const createPageUrl = (pageNumber) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", pageNumber.toString());
    return `/admin/projects?${params.toString()}`;
  };

  return (
    <div className="flex items-center justify-between border-t border-neutral-200/60 pt-6 mt-8">
      <div className="text-sm text-neutral-500">
        Showing <span className="font-medium text-neutral-900">{(currentPage - 1) * pageSize + 1}</span> to <span className="font-medium text-neutral-900">{Math.min(currentPage * pageSize, totalItems)}</span> of <span className="font-medium text-neutral-900">{totalItems}</span> projects
      </div>
      
      <div className="flex items-center gap-2">
        <button
          onClick={() => router.push(createPageUrl(currentPage - 1))}
          disabled={currentPage <= 1}
          className="p-2 rounded-lg border border-neutral-200/60 hover:bg-neutral-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          <ChevronLeft className="w-4 h-4 text-neutral-600" />
        </button>
        
        <div className="flex items-center gap-1">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => router.push(createPageUrl(page))}
              className={`w-8 h-8 rounded-lg text-sm font-medium transition-colors ${
                currentPage === page 
                  ? "bg-neutral-900 text-white" 
                  : "hover:bg-neutral-50 text-neutral-600"
              }`}
            >
              {page}
            </button>
          ))}
        </div>

        <button
          onClick={() => router.push(createPageUrl(currentPage + 1))}
          disabled={currentPage >= totalPages}
          className="p-2 rounded-lg border border-neutral-200/60 hover:bg-neutral-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          <ChevronRight className="w-4 h-4 text-neutral-600" />
        </button>
      </div>
    </div>
  );
}
