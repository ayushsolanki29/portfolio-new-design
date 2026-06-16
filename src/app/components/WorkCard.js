export default function WorkCard({
  colorClass,
  tags,
  href,
  title,
  description,
  techStack,
}) {
  return (
    <div className={`work-card ${colorClass} group`}>
      <div className="work-card__tags">
        {tags.map((tag, index) => (
          <span
            key={index}
            className={`work-tag ${tag.type === "award" ? "work-tag--award" : ""} ${
              tag.type === "muted" ? "work-tag--muted" : ""
            }`}
          >
            {tag.label}
          </span>
        ))}
        <a href={href} className="work-card__arrow" aria-label="View project">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17l9.2-9.2M17 17V7H7" /></svg>
        </a>
      </div>
      <h3 className="work-card__title">{title}</h3>
      <p className="work-card__desc">{description}</p>
      <div className="work-card__tech">
        {techStack.map((t) => (
          <div key={t.name} className="work-card__tech-bubble" title={t.name}>
            <img src={`https://cdn.simpleicons.org/${t.slug}/${t.color}`} alt={t.name} loading="lazy" />
          </div>
        ))}
      </div>
      <div className="work-card__img-wrap">
        <div className="work-card__img-placeholder" aria-label="Project image placeholder" />
      </div>
    </div>
  );
}
