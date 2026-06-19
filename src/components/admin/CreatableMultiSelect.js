"use client";

import { useState, useRef, useEffect } from "react";
import { X, Search, Plus } from "lucide-react";

export default function CreatableMultiSelect({ name, options = [], defaultValues = [], placeholder = "Search or create tags..." }) {
  const [selected, setSelected] = useState(defaultValues);
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

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

  const filteredOptions = options.filter(
    (o) =>
      o.toLowerCase().includes(search.toLowerCase()) &&
      !selected.includes(o)
  );

  const exactMatch = options.find(o => o.toLowerCase() === search.toLowerCase());
  const alreadySelected = selected.find(s => s.toLowerCase() === search.toLowerCase());

  const handleSelect = (val) => {
    if (!selected.includes(val)) {
      setSelected([...selected, val]);
    }
    setSearch("");
    setIsOpen(false);
  };

  const handleRemove = (valToRemove) => {
    setSelected(selected.filter((s) => s !== valToRemove));
  };

  return (
    <div className="w-full space-y-3" ref={containerRef}>
      {/* Hidden input to pass the array to Server Action via comma separated string like the original */}
      <input type="hidden" name={name} value={selected.join(", ")} />

      {/* Selected Chips */}
      {selected.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {selected.map((val) => (
            <div
              key={val}
              className="flex items-center gap-2 bg-white border border-neutral-200/60 pl-3 pr-1 py-1 rounded-full text-sm font-medium shadow-sm"
            >
              <span className="text-neutral-700">{val}</span>
              <button
                type="button"
                onClick={() => handleRemove(val)}
                className="p-1 hover:bg-neutral-100 rounded-full text-neutral-400 hover:text-rose-500 transition-colors"
              >
                <X className="w-3 h-3" />
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Search Input & Dropdown */}
      <div className="relative">
        <div className="flex items-center bg-neutral-50 border border-neutral-200/60 rounded-xl px-3 focus-within:border-neutral-400 focus-within:ring-2 focus-within:ring-neutral-100 transition-all">
          <Search className="w-4 h-4 text-neutral-400" />
          <input
            type="text"
            className="w-full bg-transparent border-0 focus:ring-0 px-2 py-2.5 text-sm outline-none"
            placeholder={placeholder}
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setIsOpen(true);
            }}
            onFocus={() => setIsOpen(true)}
          />
        </div>

        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-1 max-h-60 overflow-y-auto bg-white border border-neutral-200/60 rounded-xl shadow-lg z-50 py-1">
            {filteredOptions.length > 0 && filteredOptions.map((opt) => (
              <button
                key={opt}
                type="button"
                onClick={() => handleSelect(opt)}
                className="w-full flex items-center px-3 py-2 hover:bg-neutral-50 transition-colors text-left text-sm text-neutral-700"
              >
                {opt}
              </button>
            ))}
            
            {search.trim() && !exactMatch && !alreadySelected && (
              <button
                type="button"
                onClick={() => handleSelect(search.trim())}
                className="w-full flex items-center gap-2 px-3 py-2 hover:bg-emerald-50 transition-colors text-left text-sm text-emerald-700 border-t border-neutral-100"
              >
                <Plus className="w-4 h-4" />
                Create "{search.trim()}"
              </button>
            )}
            
            {filteredOptions.length === 0 && (!search.trim() || alreadySelected) && (
              <div className="px-3 py-2 text-sm text-neutral-500 text-center">No options found</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
