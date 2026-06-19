"use client";

import { useState, useRef, useEffect } from "react";
import { TECH_OPTIONS, getTechBySlug } from "@/config/techStack";
import { X, Search } from "lucide-react";

export default function TechStackSelect({ selectedSlugs = [], onChange }) {
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  const filteredOptions = TECH_OPTIONS.filter(
    (t) =>
      t.name.toLowerCase().includes(search.toLowerCase()) &&
      !selectedSlugs.includes(t.slug)
  );

  const handleSelect = (slug) => {
    onChange([...selectedSlugs, slug]);
    setSearch("");
    setIsOpen(false);
  };

  const handleRemove = (slugToRemove) => {
    onChange(selectedSlugs.filter((s) => s !== slugToRemove));
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="w-full space-y-3" ref={containerRef}>
      {/* Selected Chips */}
      {selectedSlugs.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {selectedSlugs.map((slug) => {
            const tech = getTechBySlug(slug);
            return (
              <div
                key={slug}
                className="flex items-center gap-2 bg-white border border-neutral-200/60 pl-2 pr-1 py-1 rounded-full text-sm font-medium shadow-sm"
              >
                <img
                  src={tech.iconUrl || `https://cdn.simpleicons.org/${tech.slug}/${tech.color}`}
                  alt={tech.name}
                  className="w-4 h-4 object-contain"
                />
                <span className="text-neutral-700">{tech.name}</span>
                <button
                  type="button"
                  onClick={() => handleRemove(slug)}
                  className="p-1 hover:bg-neutral-100 rounded-full text-neutral-400 hover:text-rose-500 transition-colors"
                >
                  <X className="w-3 h-3" />
                </button>
              </div>
            );
          })}
        </div>
      )}

      {/* Search Input & Dropdown */}
      <div className="relative">
        <div className="flex items-center bg-neutral-50 border border-neutral-200/60 rounded-xl px-3 focus-within:border-neutral-400 focus-within:ring-2 focus-within:ring-neutral-100 transition-all">
          <Search className="w-4 h-4 text-neutral-400" />
          <input
            type="text"
            className="w-full bg-transparent border-0 focus:ring-0 px-2 py-2.5 text-sm outline-none"
            placeholder="Search technologies..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setIsOpen(true);
            }}
            onFocus={() => setIsOpen(true)}
          />
        </div>

        {isOpen && filteredOptions.length > 0 && (
          <div className="absolute top-full left-0 right-0 mt-1 max-h-60 overflow-y-auto bg-white border border-neutral-200/60 rounded-xl shadow-lg z-50 py-1">
            {filteredOptions.map((tech) => (
              <button
                key={tech.slug}
                type="button"
                onClick={() => handleSelect(tech.slug)}
                className="w-full flex items-center gap-3 px-3 py-2 hover:bg-neutral-50 transition-colors text-left"
              >
                <img
                  src={tech.iconUrl || `https://cdn.simpleicons.org/${tech.slug}/${tech.color}`}
                  alt={tech.name}
                  className="w-5 h-5 object-contain"
                />
                <span className="text-sm font-medium text-neutral-700">
                  {tech.name}
                </span>
              </button>
            ))}
          </div>
        )}
      </div>
      
      {/* Hidden input to pass the array to the Next.js Server Action */}
      <input type="hidden" name="built_with" value={JSON.stringify(selectedSlugs)} />
    </div>
  );
}
