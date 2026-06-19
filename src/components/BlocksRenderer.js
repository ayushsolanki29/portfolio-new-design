export default function BlocksRenderer({ content }) {
  if (!content) return null;

  let data;
  try {
    data = typeof content === "string" ? JSON.parse(content) : content;
  } catch (e) {
    console.error("Failed to parse Editor.js JSON:", e);
    return null;
  }

  if (!data || !data.blocks || !Array.isArray(data.blocks)) {
    return null;
  }

  return (
    <div className="space-y-6">
      {data.blocks.map((block) => {
        switch (block.type) {
          case "header":
            const Tag = `h${block.data.level}`;
            const sizeClass = {
              1: "text-4xl lg:text-5xl",
              2: "text-3xl lg:text-4xl",
              3: "text-2xl lg:text-3xl",
              4: "text-xl lg:text-2xl",
              5: "text-lg lg:text-xl",
              6: "text-base lg:text-lg",
            }[block.data.level] || "text-xl";
            
            return (
              <Tag
                key={block.id}
                className={`font-serif-display font-bold text-neutral-900 mt-10 mb-4 ${sizeClass}`}
                dangerouslySetInnerHTML={{ __html: block.data.text }}
              />
            );
          
          case "paragraph":
            return (
              <p
                key={block.id}
                className="text-neutral-600 leading-relaxed text-[16px] sm:text-[18px]"
                dangerouslySetInnerHTML={{ __html: block.data.text }}
              />
            );
          
          case "list":
            const ListTag = block.data.style === "ordered" ? "ol" : "ul";
            const listClasses = block.data.style === "ordered" 
              ? "list-decimal list-outside ml-6 space-y-2 text-neutral-600 text-[16px] sm:text-[18px]"
              : "list-disc list-outside ml-6 space-y-2 text-neutral-600 text-[16px] sm:text-[18px]";
            return (
              <ListTag key={block.id} className={listClasses}>
                {block.data.items.map((item, i) => (
                  <li key={`${block.id}-${i}`} dangerouslySetInnerHTML={{ __html: item }} />
                ))}
              </ListTag>
            );
          
          case "image":
            return (
              <figure key={block.id} className="my-8">
                <img
                  src={block.data.file.url}
                  alt={block.data.caption || "Project image"}
                  className={`w-full rounded-2xl object-cover border border-neutral-200/50 ${
                    block.data.withBorder ? "border-neutral-300" : ""
                  } ${block.data.withBackground ? "bg-neutral-100 p-4" : ""}`}
                />
                {block.data.caption && (
                  <figcaption 
                    className="text-center text-sm text-neutral-500 mt-3"
                    dangerouslySetInnerHTML={{ __html: block.data.caption }}
                  />
                )}
              </figure>
            );

          case "quote":
            return (
              <blockquote key={block.id} className="border-l-4 border-neutral-300 pl-6 my-8 italic">
                <p className="text-xl text-neutral-700 font-serif-display" dangerouslySetInnerHTML={{ __html: block.data.text }} />
                {block.data.caption && (
                  <footer className="text-sm font-semibold text-neutral-500 mt-3">— {block.data.caption}</footer>
                )}
              </blockquote>
            );

          case "embed":
            return (
              <div key={block.id} className="my-8 aspect-video w-full rounded-2xl overflow-hidden border border-neutral-200/50 shadow-sm">
                <iframe
                  src={block.data.embed}
                  width="100%"
                  height="100%"
                  allowFullScreen
                  className="w-full h-full border-0"
                ></iframe>
              </div>
            );

          default:
            console.warn(`Unknown block type: ${block.type}`);
            return null;
        }
      })}
    </div>
  );
}
