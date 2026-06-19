/**
 * PageHero
 * The centered hero block used at the top of Work, About, and Contact pages.
 * Handles the nav-aura background effect, heading, and optional subtitle.
 *
 * Props:
 *   heading   — main h1 text (string or JSX)
 *   subtitle  — paragraph beneath (string or JSX, optional)
 *   children  — any additional content rendered below the subtitle
 *   className — extra classes on <section>
 *   auraStyle — override style on the nav-aura div
 */
export default function PageHero({
  heading,
  subtitle,
  children,
  className = "",
  auraStyle = {},
}) {
  return (
    <section
      className={`relative flex flex-col items-center justify-center px-5 pt-[140px] sm:pt-[160px] pb-12 sm:px-8 lg:px-12 text-center ${className}`}
    >
      <div
        className="nav-aura"
        aria-hidden="true"
        style={{ top: "80px", height: "300px", opacity: 0.6, ...auraStyle }}
      />

      <h1 className="font-serif-display text-[34px] sm:text-[56px] lg:text-[72px] font-bold text-neutral-950 leading-tight mb-4 relative z-10">
        {heading}
      </h1>

      {subtitle && (
        <p className="text-[15px] sm:text-[18px] text-neutral-600 font-medium max-w-2xl mx-auto leading-relaxed relative z-10 px-2">
          {subtitle}
        </p>
      )}

      {children}
    </section>
  );
}
