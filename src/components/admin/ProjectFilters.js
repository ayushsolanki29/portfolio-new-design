"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useState, useEffect } from "react";
import { Search, Filter, SortDesc } from "lucide-react";

export default function ProjectFilters({ categories = [] }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const [query, setQuery] = useState(searchParams.get("query") || "");
  
  // Debounce search input
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      createQueryString("query", query);
    }, 500);
    return () => clearTimeout(timeoutId);
  }, [query]);

  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value) {
        params.set(name, value);
      } else {
        params.delete(name);
      }
      
      // Reset to page 1 when filters change
      if (name !== 'page') {
        params.set('page', '1');
      }
      
      router.push(`/admin/projects?${params.toString()}`);
    },
    [searchParams, router]
  );

  return (
    <div className="flex flex-col md:flex-row gap-4 mb-6">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
        <input
          type="text"
          placeholder="Search projects..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full pl-9 pr-4 py-2.5 bg-white border border-neutral-200/60 rounded-xl text-sm focus:ring-2 focus:ring-neutral-100 outline-none transition-all"
        />
      </div>

      <div className="flex gap-4">
        <div className="relative min-w-[160px]">
          <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
          <select
            value={searchParams.get("category") || ""}
            onChange={(e) => createQueryString("category", e.target.value)}
            className="w-full pl-9 pr-8 py-2.5 bg-white border border-neutral-200/60 rounded-xl text-sm appearance-none focus:ring-2 focus:ring-neutral-100 outline-none transition-all cursor-pointer"
          >
            <option value="">All Categories</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        <div className="relative min-w-[160px]">
          <SortDesc className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
          <select
            value={searchParams.get("sort") || "newest"}
            onChange={(e) => createQueryString("sort", e.target.value)}
            className="w-full pl-9 pr-8 py-2.5 bg-white border border-neutral-200/60 rounded-xl text-sm appearance-none focus:ring-2 focus:ring-neutral-100 outline-none transition-all cursor-pointer"
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
            <option value="title-asc">Title (A-Z)</option>
            <option value="title-desc">Title (Z-A)</option>
          </select>
        </div>
      </div>
    </div>
  );
}
