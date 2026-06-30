"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { UploadCloud, FolderGit2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function ImportProjectModal() {
  const router = useRouter();
  const fileInputRef = useRef(null);
  const [parsedData, setParsedData] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const cached = sessionStorage.getItem("cachedUploadedJson");
    if (cached) {
      try {
        const data = JSON.parse(cached);
        if (Array.isArray(data) && data.length > 0) {
          setParsedData(data);
        } else if (data && !Array.isArray(data)) {
          setParsedData([data]);
        }
      } catch (err) {}
    }
  }, []);

  const handleImportClick = () => {
    if (parsedData && parsedData.length > 0) {
      setIsDialogOpen(true);
    } else {
      fileInputRef.current?.click();
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const json = JSON.parse(event.target.result);
        const dataArray = Array.isArray(json) ? json : [json];
        setParsedData(dataArray);
        sessionStorage.setItem("cachedUploadedJson", JSON.stringify(dataArray));
        setError(null);
        setIsDialogOpen(true);
      } catch (err) {
        setError("Invalid JSON file. Please ensure the file is properly formatted.");
        console.error("Error parsing JSON:", err);
      }
    };
    reader.readAsText(file);
    // Reset input so the same file can be selected again
    e.target.value = "";
  };

  const handleProceed = (projectToImport, index) => {
    if (projectToImport) {
      const updatedData = [...parsedData];
      updatedData.splice(index, 1);
      
      setParsedData(updatedData);
      if (updatedData.length > 0) {
        sessionStorage.setItem("cachedUploadedJson", JSON.stringify(updatedData));
      } else {
        sessionStorage.removeItem("cachedUploadedJson");
      }

      sessionStorage.setItem("importProjectData", JSON.stringify(projectToImport));
      setIsDialogOpen(false);
      router.push("/admin/projects/new");
    }
  };

  return (
    <>
      <input
        type="file"
        accept=".json"
        className="hidden"
        ref={fileInputRef}
        onChange={handleFileChange}
      />
      <Button
        variant="outline"
        onClick={handleImportClick}
        className="inline-flex items-center justify-center gap-2 px-6 h-12 rounded-xl border-neutral-200/60 font-medium text-neutral-700 hover:bg-neutral-50 transition-colors shadow-sm bg-white"
      >
        <UploadCloud className="h-4 w-4" />
        {parsedData && parsedData.length > 0 ? `Pending Imports (${parsedData.length})` : "Import JSON"}
      </Button>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Import Project</DialogTitle>
            <DialogDescription>
              We found the following data in the JSON file. Proceeding will pre-fill the form so you can review and edit before adding it to your collection.
            </DialogDescription>
          </DialogHeader>

          {parsedData && (
            <div className="space-y-3 py-4 max-h-[60vh] overflow-y-auto pr-2">
              {(Array.isArray(parsedData) ? parsedData : [parsedData]).map((project, idx) => (
                <div key={idx} className="flex gap-4 items-start p-3 rounded-xl border border-neutral-100 bg-neutral-50/50 hover:bg-neutral-50 transition-colors">
                  <div className="relative w-20 h-20 bg-neutral-100 rounded-lg overflow-hidden shrink-0 border border-neutral-200/60">
                    {project.thumbnail ? (
                      <img
                        src={project.thumbnail}
                        alt={project.title || "Thumbnail"}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="flex items-center justify-center w-full h-full text-neutral-300">
                        <FolderGit2 className="h-6 w-6" />
                      </div>
                    )}
                  </div>
                  <div className="flex-1 space-y-1 min-w-0">
                    <h3 className="font-semibold text-neutral-900 text-base line-clamp-1">
                      {project.title || "Untitled Project"}
                    </h3>
                    {project.description && (
                      <p className="text-xs text-neutral-500 line-clamp-1">
                        {project.description}
                      </p>
                    )}
                    {project.techStacks && project.techStacks.length > 0 && (
                      <div className="flex flex-wrap gap-1 mt-1.5">
                        {project.techStacks.slice(0, 3).map((tech, i) => (
                          <span key={i} className="text-[9px] px-2 py-0.5 bg-white border border-neutral-200 rounded-full text-neutral-600 font-medium">
                            {tech.name}
                          </span>
                        ))}
                        {project.techStacks.length > 3 && (
                          <span className="text-[9px] px-2 py-0.5 bg-neutral-100 rounded-full text-neutral-500 font-medium">
                            +{project.techStacks.length - 3}
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="shrink-0 h-8 rounded-lg bg-white"
                    onClick={() => handleProceed(project, idx)}
                  >
                    Import
                  </Button>
                </div>
              ))}
            </div>
          )}

          {error && (
            <div className="p-3 text-sm text-rose-600 bg-rose-50 rounded-lg border border-rose-100">
              {error}
            </div>
          )}

          <DialogFooter className="flex sm:justify-between items-center w-full mt-2">
            <Button 
              variant="ghost" 
              onClick={() => fileInputRef.current?.click()} 
              className="text-neutral-500 hover:text-neutral-700 h-9"
            >
              Upload Different File
            </Button>
            <Button variant="outline" onClick={() => setIsDialogOpen(false)} className="rounded-xl w-full sm:w-auto mt-2 sm:mt-0">
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
