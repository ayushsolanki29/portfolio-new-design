"use client";

import { useState } from "react";
import { Eye, Heart, MessageSquare, Trash2, Loader2 } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { getComments, deleteComment } from "@/app/actions/thought";
import { Button } from "@/components/ui/button";

export default function AdminThoughtStats({ thoughtId, viewCount = 0, likeCount = 0 }) {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [deletingId, setDeletingId] = useState(null);

  const fetchComments = async () => {
    setIsLoading(true);
    const result = await getComments(thoughtId);
    if (result.success) {
      setComments(result.comments);
    }
    setIsLoading(false);
  };

  const handleOpenChange = (open) => {
    setIsOpen(open);
    if (open) {
      fetchComments();
    }
  };

  const handleDelete = async (commentId) => {
    if (!confirm("Are you sure you want to delete this comment?")) return;
    setDeletingId(commentId);
    
    const result = await deleteComment(commentId);
    
    if (result.success) {
      setComments(prev => prev.filter(c => c.id !== commentId));
    } else {
      alert("Failed to delete comment: " + result.error);
    }
    setDeletingId(null);
  };

  return (
    <div className="flex items-center gap-4 text-xs font-medium text-neutral-500 mt-4 pt-4 border-t border-neutral-100">
      <div className="flex items-center gap-1.5" title="Views">
        <Eye className="w-3.5 h-3.5" />
        {viewCount || 0}
      </div>
      <div className="flex items-center gap-1.5" title="Likes">
        <Heart className="w-3.5 h-3.5" />
        {likeCount || 0}
      </div>
      
      <Dialog open={isOpen} onOpenChange={handleOpenChange}>
        <DialogTrigger className="flex items-center gap-1.5 hover:text-neutral-900 transition-colors ml-auto" title="Manage Comments">
          <MessageSquare className="w-3.5 h-3.5" />
          Comments
        </DialogTrigger>
        <DialogContent className="max-w-md w-full max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Manage Comments</DialogTitle>
          </DialogHeader>
          
          <div className="space-y-4 mt-4">
            {isLoading ? (
              <div className="flex items-center justify-center py-8 text-neutral-500">
                <Loader2 className="w-5 h-5 animate-spin mr-2" /> Loading...
              </div>
            ) : comments.length > 0 ? (
              comments.map(comment => (
                <div key={comment.id} className="bg-neutral-50 rounded-xl p-4 border border-neutral-100 flex items-start gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-semibold text-neutral-900 text-sm truncate">{comment.name}</span>
                      <span className="text-[10px] text-neutral-400">
                        {new Date(comment.created_at).toLocaleDateString()}
                      </span>
                    </div>
                    <p className="text-neutral-600 text-sm whitespace-pre-wrap break-words">{comment.content}</p>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-8 w-8 text-rose-500 hover:text-rose-600 hover:bg-rose-50 shrink-0"
                    onClick={() => handleDelete(comment.id)}
                    disabled={deletingId === comment.id}
                  >
                    {deletingId === comment.id ? <Loader2 className="h-4 w-4 animate-spin" /> : <Trash2 className="h-4 w-4" />}
                  </Button>
                </div>
              ))
            ) : (
              <div className="text-center py-8 text-neutral-500 text-sm">
                No comments on this thought yet.
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
