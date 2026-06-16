const testimonials = [
  {
    name: "Shubhangi Gupta",
    role: "Sr. Product designer @ yellow.ai",
    quote: "Ayush is extremely passionate about design. Be it visuals, motion, design system he likes to work in all domains within UX. He owns skills that sets him apart from others.",
    colorClass: "t-card--cream",
    doodleClass: "t-doodle--100",
    doodleContent: "100",
  },
  {
    name: "Gautham Menon",
    role: "Product manager @ atomicwork",
    quote: "He's consistently brought a fresh pair of eyes and questioned the status quo. A cut above in polish, empathy and creativity",
    colorClass: "t-card--white",
    doodleClass: "t-doodle--flower",
  },
  {
    name: "Priya S Thomas",
    role: "Design Lead @ yellow.ai",
    quote: "Ayush as a designer has been great. He has made a significant impact in the team. He's adaptive & attentive to detail. His skills combined with a strong ethic delivers great results.",
    colorClass: "t-card--white",
    doodleClass: "t-doodle--pencil",
  },
  {
    name: "Taanvi Chhetri",
    role: "Design Manager @ Postman",
    quote: "He is a sharp, curious designer who blends creativity with precision. He's proactive, open to feedback, and elevates both design quality and team efficiency.",
    colorClass: "t-card--peach",
    doodleClass: "t-doodle--star",
  },
  {
    name: "Hitarthi Bhinde",
    role: "UX Design @ Google",
    quote: "Working with him has been a great experience. He excels at solving problems promptly. His attention to detail and distinguishable skills make him an invaluable asset",
    colorClass: "t-card--white",
    doodleClass: "t-doodle--bolt",
  },
  {
    name: "Jeroen Van Der Poll",
    role: "Sr. Product Designer @ Postman",
    quote: "He brings creative energy, curiosity, and a strong growth mindset. He's quick with ideas, eager to learn, and a collaborative problem-solver, an asset to any team",
    colorClass: "t-card--lavender",
    doodleClass: "t-doodle--burst",
  },
  {
    name: "Akshay Sharma",
    role: "Sr. Software Engineer @ Postman",
    quote: "He is thoughtful, collaborative, balances speed with quality. His user-obsession, eye for detail and adaptability make him a valuable partner in driving product clarity and direction",
    colorClass: "t-card--white",
    doodleClass: "t-doodle--sparkles",
  },
];

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
