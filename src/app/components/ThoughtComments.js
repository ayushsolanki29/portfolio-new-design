"use client";

import { useState, useEffect } from "react";
import { getComments, addComment } from "@/app/actions/thought";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, MessageSquare } from "lucide-react";

export default function ThoughtComments({ thoughtId, slug }) {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    async function fetchComments() {
      if (!thoughtId) return;
      const result = await getComments(thoughtId);
      if (result.success) {
        setComments(result.comments);
      }
      setIsLoading(false);
    }
    
    fetchComments();
  }, [thoughtId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    const formData = new FormData(e.currentTarget);
    formData.append("slug", slug);
    
    const result = await addComment(thoughtId, formData);
    
    if (result.success && result.comment) {
      // Optimistically add the comment to the list
      setComments(prev => [...prev, result.comment]);
      e.target.reset();
    } else {
      setError(result.error || "Failed to post comment");
    }
    
    setIsSubmitting(false);
  };

  return (
    <div className="mt-16">
      <h3 className="text-xl font-bold text-neutral-900 mb-8 flex items-center gap-2">
        <MessageSquare className="w-5 h-5 text-neutral-400" />
        Comments ({comments.length})
      </h3>
      
      {/* Comments List */}
      <div className="space-y-6 mb-10">
        {isLoading ? (
          <div className="flex items-center text-sm text-neutral-500">
            <Loader2 className="w-4 h-4 animate-spin mr-2" /> Loading comments...
          </div>
        ) : comments.length > 0 ? (
          comments.map(comment => (
            <div key={comment.id} className="bg-neutral-50/50 rounded-2xl p-5 border border-neutral-100">
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-neutral-900 text-sm">{comment.name}</span>
                <span className="text-xs text-neutral-400">
                  {new Date(comment.created_at).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric"
                  })}
                </span>
              </div>
              <p className="text-neutral-600 text-sm leading-relaxed whitespace-pre-wrap">
                {comment.content}
              </p>
            </div>
          ))
        ) : (
          <div className="text-sm text-neutral-500 py-4 italic">
            No comments yet. Be the first to share your thoughts!
          </div>
        )}
      </div>
      
      {/* Add Comment Form */}
      <div className="bg-white rounded-2xl p-6 md:p-8 border border-neutral-200/60 shadow-sm">
        <h4 className="font-semibold text-neutral-900 mb-6">Leave a comment</h4>
        
        {error && (
          <div className="mb-6 p-3 text-sm text-rose-600 bg-rose-50 border border-rose-100 rounded-xl">
            {error}
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1.5">
              Name
            </label>
            <Input 
              id="name" 
              name="name" 
              placeholder="How should we call you?" 
              required 
              maxLength={50}
              className="rounded-xl bg-neutral-50 border-neutral-200/60"
            />
          </div>
          
          <div>
            <label htmlFor="content" className="block text-sm font-medium text-neutral-700 mb-1.5">
              Message
            </label>
            <Textarea 
              id="content" 
              name="content" 
              placeholder="What are your thoughts on this?" 
              required 
              rows={4}
              maxLength={1000}
              className="rounded-xl bg-neutral-50 border-neutral-200/60 resize-none"
            />
          </div>
          
          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full sm:w-auto rounded-xl bg-neutral-900 text-white hover:bg-neutral-800"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Posting...
              </>
            ) : (
              "Post Comment"
            )}
          </Button>
        </form>
      </div>
    </div>
  );
}
