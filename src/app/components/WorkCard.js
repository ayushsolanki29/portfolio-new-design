import Link from "next/link";
import TechBubbles from "./TechBubbles";
import { IconArrowNE } from "./Icons";

export default function WorkCard({
  colorClass,
  accentColor,
  tags = [],
  href,
  slug,
  title,
  description,
  techStack,
  builtWith = [],
  previewImage,
}) {
  const destination = slug ? `/work/${slug}` : href;
  const isExternal = !slug && href && !href.startsWith("/");

  return (
    <div 
      className={`work-card ${colorClass || ""} group`}
      style={accentColor ? { background: accentColor } : {}}
    >
      {/* Tags + arrow */}
      <div className="work-card__tags">
        {tags.map((tag, i) => {
          const isString = typeof tag === 'string';
          const label = isString ? tag : tag.label;
          const type = isString ? '' : tag.type;
          return (
            <span
              key={i}
              className={`work-tag ${type === "award" ? "work-tag--award" : ""} ${type === "muted" ? "work-tag--muted" : ""}`}
            >
              {label}
            </span>
          );
        })}
        <Link
          href={destination}
          {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          className="work-card__arrow"
          aria-label={`View project: ${title}`}
        >
          <IconArrowNE width={18} height={18} />
        </Link>
      </div>

      {/* Title + description — whole block is a link */}
      <Link href={destination} className="block" aria-label={`Open ${title}`}>
        <h3 className="work-card__title">{title}</h3>
        <p className="work-card__desc">{description}</p>
      </Link>

      <TechBubbles stack={techStack || builtWith} />

      <div className="work-card__img-wrap relative">
        {previewImage ? (
          <img src={previewImage} alt={title} className="w-full h-full object-cover" />
        ) : (
          <div className="work-card__img-placeholder" aria-label="Project image placeholder" />
        )}
      </div>
    </div>
  );
}
