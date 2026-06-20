"use client";

import { useState, useEffect, useRef } from "react";
import { Eye, Heart } from "lucide-react";
import { incrementThoughtView, likeThought } from "@/app/actions/thought";

export default function ThoughtEngagement({ slug, initialViewCount = 0, initialLikeCount = 0 }) {
  const [viewCount, setViewCount] = useState(initialViewCount);
  const [likeCount, setLikeCount] = useState(initialLikeCount);
  const [isLiked, setIsLiked] = useState(false);
  const [isLiking, setIsLiking] = useState(false);
  
  const hasIncremented = useRef(false);

  useEffect(() => {
    // Check if liked previously
    const likedThoughts = JSON.parse(localStorage.getItem("likedThoughts") || "{}");
    if (likedThoughts[slug]) {
      setIsLiked(true);
    }

    // Check if viewed recently to prevent spamming refresh
    const viewedThoughts = JSON.parse(localStorage.getItem("viewedThoughts") || "{}");
    const now = new Date().getTime();
    const lastViewed = viewedThoughts[slug];
    
    // Only increment view if not viewed in last 24 hours, or never viewed
    // Also protect against strict mode double-firing with hasIncremented
    if (!hasIncremented.current && (!lastViewed || now - lastViewed > 24 * 60 * 60 * 1000)) {
      hasIncremented.current = true;
      incrementThoughtView(slug);
      
      // Update local storage
      viewedThoughts[slug] = now;
      localStorage.setItem("viewedThoughts", JSON.stringify(viewedThoughts));
      
      // Optimistically increment local view count
      setViewCount(prev => prev + 1);
    }
  }, [slug]);

  const handleLike = async () => {
    if (isLiked || isLiking) return;
    
    setIsLiking(true);
    
    // Optimistic UI update
    setLikeCount(prev => prev + 1);
    setIsLiked(true);
    
    // Save to local storage
    const likedThoughts = JSON.parse(localStorage.getItem("likedThoughts") || "{}");
    likedThoughts[slug] = true;
    localStorage.setItem("likedThoughts", JSON.stringify(likedThoughts));
    
    // Call server action
    await likeThought(slug);
    
    setIsLiking(false);
  };

  return (
    <div className="flex items-center gap-4 py-6 border-t border-b border-neutral-100 my-10">
      <div className="flex items-center gap-2 text-neutral-500 font-medium text-sm">
        <Eye className="w-4 h-4" />
        <span>{viewCount} {viewCount === 1 ? "view" : "views"}</span>
      </div>
      
      <div className="w-px h-4 bg-neutral-200"></div>
      
      <button 
        onClick={handleLike}
        disabled={isLiked || isLiking}
        className={`flex items-center gap-2 font-medium text-sm transition-all group ${
          isLiked 
            ? "text-rose-500" 
            : "text-neutral-500 hover:text-rose-500"
        }`}
      >
        <div className={`p-1.5 rounded-full transition-colors ${
          isLiked ? "bg-rose-50" : "bg-neutral-50 group-hover:bg-rose-50"
        }`}>
          <Heart 
            className={`w-4 h-4 transition-transform ${isLiked ? "fill-current scale-110" : "group-hover:scale-110"}`} 
          />
        </div>
        <span>{likeCount} {likeCount === 1 ? "like" : "likes"}</span>
      </button>
    </div>
  );
}
