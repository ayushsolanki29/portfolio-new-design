"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown, Check, Plus } from "lucide-react";

export default function CreatableSelect({ name, options = [], defaultValue = "", placeholder = "Select or create..." }) {
  const [value, setValue] = useState(defaultValue);
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

  const filteredOptions = options.filter(o => 
    o.toLowerCase().includes(search.toLowerCase())
  );

  const exactMatch = options.find(o => o.toLowerCase() === search.toLowerCase());

  const handleSelect = (val) => {
    setValue(val);
    setSearch("");
    setIsOpen(false);
  };

  return (
    <div className="relative w-full" ref={containerRef}>
      <input type="hidden" name={name} value={value} />
      
      <div 
        className="flex items-center justify-between w-full bg-neutral-50 border border-neutral-200/60 rounded-xl px-3 py-2 cursor-text"
        onClick={() => setIsOpen(true)}
      >
        {isOpen ? (
          <input
            type="text"
            className="w-full bg-transparent border-0 focus:ring-0 p-0 text-sm outline-none"
            placeholder={placeholder}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            autoFocus
          />
        ) : (
          <div className="w-full text-sm text-neutral-900 truncate min-h-[20px]">
            {value || <span className="text-neutral-400">{placeholder}</span>}
          </div>
        )}
        <ChevronDown className={`w-4 h-4 text-neutral-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-1 max-h-60 overflow-y-auto bg-white border border-neutral-200/60 rounded-xl shadow-lg z-50 py-1">
          {filteredOptions.length > 0 ? (
            filteredOptions.map((opt) => (
              <button
                key={opt}
                type="button"
                onClick={() => handleSelect(opt)}
                className="w-full flex items-center justify-between px-3 py-2 hover:bg-neutral-50 transition-colors text-left text-sm"
              >
                <span className="text-neutral-700">{opt}</span>
                {value === opt && <Check className="w-4 h-4 text-emerald-500" />}
              </button>
            ))
          ) : (
            <div className="px-3 py-2 text-sm text-neutral-500 text-center">No existing options</div>
          )}
          
          {search.trim() && !exactMatch && (
            <button
              type="button"
              onClick={() => handleSelect(search.trim())}
              className="w-full flex items-center gap-2 px-3 py-2 hover:bg-emerald-50 transition-colors text-left text-sm text-emerald-700 border-t border-neutral-100"
            >
              <Plus className="w-4 h-4" />
              Create "{search.trim()}"
            </button>
          )}
        </div>
      )}
    </div>
  );
}
