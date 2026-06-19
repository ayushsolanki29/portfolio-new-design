export const TECH_OPTIONS = [
  { name: "React", slug: "react", color: "61DAFB" },
  { name: "Next.js", slug: "nextdotjs", color: "000000" },
  { name: "TypeScript", slug: "typescript", color: "3178C6" },
  { name: "JavaScript", slug: "javascript", color: "F7DF1E" },
  { name: "Node.js", slug: "nodedotjs", color: "5FA04E" },
  { name: "Tailwind CSS", slug: "tailwindcss", color: "06B6D4" },
  { name: "Figma", slug: "figma", color: "F24E1E" },
  { name: "Supabase", slug: "supabase", color: "3ECF8E" },
  { name: "PostgreSQL", slug: "postgresql", color: "4169E1" },
  { name: "MongoDB", slug: "mongodb", color: "47A248" },
  { name: "Prisma", slug: "prisma", color: "2D3748" },
  { name: "Vercel", slug: "vercel", color: "000000" },
  { name: "Firebase", slug: "firebase", color: "FFCA28" },
  { name: "Docker", slug: "docker", color: "2496ED" },
  { name: "AWS", slug: "aws", color: "232F3E", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
  { name: "GraphQL", slug: "graphql", color: "E10098" },
  { name: "Stripe", slug: "stripe", color: "008CDD" },
  { name: "Framer Motion", slug: "framer", color: "0055FF" },
  { name: "Cloudinary", slug: "cloudinary", color: "3448C5" },
  { name: "Svelte", slug: "svelte", color: "FF3E00" },
  { name: "Vue.js", slug: "vuedotjs", color: "4FC08D" },
  { name: "PHP", slug: "php", color: "777BB4" },
  { name: "SQL", slug: "sql", color: "CC2927", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg" },
  { name: "Hostinger", slug: "hostinger", color: "673EE5", iconUrl: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/hostinger-icon.svg" },
  { name: "VS Code", slug: "vscode", color: "007ACC", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" },
  { name: "jQuery", slug: "jquery", color: "0769AD" }
];
// Helper to look up full object by slug
export const getTechBySlug = (slug) => {
  return TECH_OPTIONS.find(t => t.slug === slug) || { name: slug, slug, color: "111111" };
};
