/**
 * FadedQuote
 * The large, low-opacity display quote used at the bottom of Work and About pages.
 *
 * Props:
 *   children  — the quote text / JSX (use <br /> for line breaks)
 *   className — extra classes on <section>
 */
export default function FadedQuote({ children, className = "" }) {
  return (
    <section className={`px-5 pt-8 pb-16 sm:px-8 lg:px-12 ${className}`}>
      <div className="mx-auto max-w-5xl">
        <h2 className="font-serif-display text-[48px] sm:text-[64px] lg:text-[76px] font-bold text-neutral-200/60 leading-[1.1] tracking-tight">
          {children}
        </h2>
      </div>
    </section>
  );
}
