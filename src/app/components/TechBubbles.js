/**
 * TechBubbles
 * Renders a row of circular tech-icon bubbles from SimpleIcons CDN.
 *
 * Props:
 *   stack  — array of { name: string, slug: string, color: string }
 *   size   — bubble diameter in px (default 32)
 */
export default function TechBubbles({ stack = [], size = 32 }) {
  if (!stack.length) return null;

  return (
    <div className="work-card__tech">
      {stack.map((t) => (
        <div
          key={t.name}
          className="work-card__tech-bubble"
          title={t.name}
          style={{ width: size, height: size }}
        >
          <img
            src={`https://cdn.simpleicons.org/${t.slug}/${t.color}`}
            alt={t.name}
            loading="lazy"
            style={{ width: size * 0.5625, height: size * 0.5625 }}
          />
        </div>
      ))}
    </div>
  );
}
