"use client";

import { useEffect, useRef } from "react";
import EditorJS from "@editorjs/editorjs";

// We import plugins here
// Note: Since this component is dynamically imported with ssr: false, it is safe to use window/document
import Header from "@editorjs/header";
import List from "@editorjs/list";
import ImageTool from "@editorjs/image";
import Embed from "@editorjs/embed";
import Quote from "@editorjs/quote";
import LinkTool from "@editorjs/link";

export default function Editor({ value, onChange }) {
  const editorRef = useRef(null);

  useEffect(() => {
    // Initialize editor if it doesn't exist
    if (!editorRef.current) {
      let initialData;
      try {
        initialData = value ? JSON.parse(value) : undefined;
      } catch (err) {
        console.error("EditorJS parsing error. Falling back to undefined.", err);
        initialData = undefined;
      }

      const editor = new EditorJS({
        holder: "editorjs-container",
        data: initialData,
        placeholder: "Write your project overview here...",
        tools: {
          header: {
            class: Header,
            inlineToolbar: true,
            config: {
              placeholder: "Enter a heading",
              levels: [2, 3, 4],
              defaultLevel: 2,
            },
          },
          list: {
            class: List,
            inlineToolbar: true,
          },
          image: {
            class: ImageTool,
            config: {
              endpoints: {
                byFile: "/api/upload", // Your custom backend file uploader endpoint
              },
            },
          },
          embed: {
            class: Embed,
            inlineToolbar: true,
          },
          quote: {
            class: Quote,
            inlineToolbar: true,
          },
          linkTool: {
            class: LinkTool,
            // You can add a custom endpoint here for fetching URL metadata if needed
          },
        },
        onChange: async (api) => {
          const data = await api.saver.save();
          // We pass the stringified JSON back up
          onChange(JSON.stringify(data));
        },
      });

      editorRef.current = editor;
    }

    // Cleanup
    return () => {
      if (editorRef.current && editorRef.current.destroy) {
        editorRef.current.destroy();
        editorRef.current = null;
      }
    };
  }, []);

  return (
    <div className="w-full bg-neutral-50 rounded-xl border border-neutral-200/60 p-4 prose prose-neutral max-w-none">
      <div id="editorjs-container" className="min-h-[300px]" />
    </div>
  );
}
