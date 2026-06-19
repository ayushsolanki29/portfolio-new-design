export default function ToolsSection() {
  const tools = [
    { name: "JavaScript", slug: "javascript", color: "F7DF1E" },
    { name: "TypeScript", slug: "typescript", color: "3178C6" },
    { name: "React", slug: "react", color: "61DAFB" },
    { name: "Next.js", slug: "nextdotjs", color: "111111" },
    { name: "Node.js", slug: "nodedotjs", color: "339933" },
    { name: "Tailwind CSS", slug: "tailwindcss", color: "06B6D4" },
    { name: "Python", slug: "python", color: "3776AB" },
    { name: "Git", slug: "git", color: "F05032" },
    { name: "GitHub", slug: "github", color: "181717" },
    { name: "VS Code", slug: "visualstudiocode", color: "007ACC" },
    { name: "Docker", slug: "docker", color: "2496ED" },
    { name: "AWS", slug: "amazonaws", color: "FF9900" },
    { name: "Vercel", slug: "vercel", color: "111111" },
    { name: "Figma", slug: "figma", color: "F24E1E" },
    { name: "Postman", slug: "postman", color: "FF6C37" },
    { name: "Slack", slug: "slack", color: "4A154B" },
    { name: "Notion", slug: "notion", color: "111111" },
    { name: "Spotify", slug: "spotify", color: "1ED760" },
  ];

  return (
    <section className="px-5 py-12 sm:py-24 sm:px-8 lg:px-12 max-w-5xl mx-auto">
      <div className="bg-white rounded-[32px] border border-neutral-200/60 shadow-sm p-6 sm:p-16 text-center">
        <h2 className="font-serif-display text-[32px] sm:text-[40px] font-bold text-neutral-900 mb-2">
          Tools I use
        </h2>
        <p className="text-[14px] sm:text-[17px] text-neutral-500 mb-8 sm:mb-12">
          This is how I create most of my magic
        </p>

        {/* Tool Grid */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-10">
          {tools.map((tool) => (
            <div 
              key={tool.name}
              className="flex flex-col items-center justify-center gap-3 group"
              title={tool.name}
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-neutral-50 rounded-2xl flex items-center justify-center border border-neutral-100 shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-md group-hover:bg-white">
                <img 
                  src={`https://cdn.simpleicons.org/${tool.slug}/${tool.color}`} 
                  alt={tool.name}
                  className="w-8 h-8 sm:w-9 sm:h-9 object-contain"
                  loading="lazy"
                />
              </div>
              <span className="text-[11px] font-semibold text-neutral-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {tool.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
