"use client";

import { useState } from "react";
import ThoughtCard from "./ThoughtCard";

export default function ThoughtsGrid({ thoughts, categories }) {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? thoughts
      : thoughts.filter((t) => t.category === activeCategory);

  return (
    <>
      {/* Category filter pills */}
      <div className="thought-filters">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`thought-filter-pill ${
              activeCategory === cat ? "thought-filter-pill--active" : ""
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 mt-8">
        {filtered.map((thought) => (
          <ThoughtCard key={thought.id} {...thought} />
        ))}
      </div>

      {/* Empty state */}
      {filtered.length === 0 && (
        <div className="text-center py-20">
          <p className="text-neutral-400 text-[15px] font-medium">
            No thoughts in this category yet.
          </p>
        </div>
      )}
    </>
  );
}
