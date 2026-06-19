"use client";

import { useState } from "react";
import { deleteProject } from "@/app/actions/project";
import { Button } from "@/components/ui/button";
import { Trash2, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";

export function DeleteProjectButton({ id, imageUrl }) {
  const [isDeleting, setIsDeleting] = useState(false);
  const router = useRouter();

  const handleDelete = async () => {
    if (!confirm("Are you sure you want to delete this project? This action cannot be undone.")) return;
    
    setIsDeleting(true);
    const result = await deleteProject(id, imageUrl);
    
    if (!result.success) {
      alert("Failed to delete project: " + result.error);
      setIsDeleting(false);
    } else {
      router.refresh();
    }
  };

  return (
    <Button 
      variant="destructive" 
      size="icon" 
      className="rounded-xl h-9 w-9 bg-rose-50 hover:bg-rose-100 text-rose-600 border-none shadow-none"
      onClick={handleDelete}
      disabled={isDeleting}
    >
      {isDeleting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Trash2 className="h-4 w-4" />}
    </Button>
  );
}
