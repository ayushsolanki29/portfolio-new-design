import { testimonials } from "@/config/site";

function TestimonialCard({ t, isDuplicate = false }) {
  return (
    <div className={`t-card ${t.colorClass}`} aria-hidden={isDuplicate ? "true" : undefined}>
      <h3 className="t-card__name">{t.name}</h3>
      <p className="t-card__role">{t.role}</p>
      <p className="t-card__quote">{t.quote}</p>
      <div className="t-card__bottom">
        <div className={`t-card__doodle ${t.doodleClass}`} aria-hidden={!isDuplicate ? "true" : undefined}>
          {t.doodleContent}
        </div>
        <div className="t-card__photo t-card__photo--placeholder" aria-label={!isDuplicate ? t.name : undefined} />
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-16 overflow-hidden">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-12 mb-10">
        <div className="flex items-baseline justify-between">
          <h2 className="flex items-center gap-3 text-[28px] font-bold text-neutral-950 sm:text-[32px] font-serif-display">
            <span aria-hidden="true">✦</span> What people say
          </h2>
          <p className="text-sm text-neutral-400 italic">…bribed all of them with pizzas</p>
        </div>
      </div>

      <div className="testimonial-marquee">
        <div className="testimonial-track">
          {/* Original set */}
          {testimonials.map((t, idx) => (
            <TestimonialCard key={`orig-${idx}`} t={t} />
          ))}

          {/* Duplicate set (aria-hidden for a11y) */}
          {testimonials.map((t, idx) => (
            <TestimonialCard key={`dup-${idx}`} t={t} isDuplicate />
          ))}
        </div>
      </div>
    </section>
  );
}
