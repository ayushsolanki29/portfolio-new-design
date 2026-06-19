import { getTechBySlug } from "@/config/techStack";

/**
 * TechBubbles
 * Renders a row of circular tech-icon bubbles from SimpleIcons CDN.
 *
 * Props:
 *   stack  — array of string slugs or { name, slug, color } objects
 *   size   — bubble diameter in px (default 32)
 */
export default function TechBubbles({ stack = [], size = 32 }) {
  if (!stack || !stack.length) return null;

  return (
    <div className="work-card__tech">
      {stack.map((item) => {
        // If it's just a string slug, look it up in the dictionary.
        const t = typeof item === 'string' ? getTechBySlug(item) : item;
        
        return (
          <div
            key={t.slug || t.name}
            className="work-card__tech-bubble"
            title={t.name}
            style={{ width: size, height: size }}
          >
            <img
              src={t.iconUrl || `https://cdn.simpleicons.org/${t.slug}/${t.color}`}
              alt={t.name}
              loading="lazy"
              style={{ width: size * 0.5625, height: size * 0.5625, objectFit: "contain" }}
            />
          </div>
        );
      })}
    </div>
  );
}
