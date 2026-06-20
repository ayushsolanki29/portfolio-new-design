import Link from "next/link";
import { IconArrowNE } from "./Icons";

export default function ThoughtCard({
  slug,
  title,
  excerpt,
  category,
  // Support both hardcoded (date) and Supabase (created_at) formats
  date,
  created_at,
  // Support both camelCase and snake_case
  readingTime,
  reading_time,
  accentColor,
  accent_color,
}) {
  const displayDate = date || created_at;
  const displayReadingTime = readingTime || reading_time;
  const displayAccentColor = accentColor || accent_color;

  const formattedDate = displayDate
    ? new Date(displayDate).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      })
    : "";

  return (
    <div
      className="thought-card group"
      style={displayAccentColor ? { background: displayAccentColor } : {}}
    >
      {/* Category + Reading time + Arrow */}
      <div className="thought-card__tags">
        <span className="thought-tag">{category}</span>
        {displayReadingTime && (
          <span className="thought-tag thought-tag--muted">{displayReadingTime}</span>
        )}
        <Link
          href={`/thoughts/${slug}`}
          className="thought-card__arrow"
          aria-label={`Read: ${title}`}
        >
          <IconArrowNE width={18} height={18} />
        </Link>
      </div>

      {/* Title + excerpt — whole block is a link */}
      <Link href={`/thoughts/${slug}`} className="block flex-1">
        <h3 className="thought-card__title">{title}</h3>
        <p className="thought-card__excerpt">{excerpt}</p>
      </Link>

      {/* Bottom row: date + decorative accent strip */}
      <div className="thought-card__footer">
        <time className="thought-card__date" dateTime={displayDate}>
          {formattedDate}
        </time>
        <div className="thought-card__accent-strip" aria-hidden="true" />
      </div>
    </div>
  );
}
