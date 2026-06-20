export default function LifeSkills() {
  const skills = [
    { name: "Gaming", level: 90 },
    { name: "Traveling", level: 75 },
    { name: "Hiking", level: 45 },
    { name: "Singing and Dancing", level: -5 },
  ];

  return (
    <section className="w-full py-20 sm:py-32 bg-[#FAF9F8]">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <div className="grid md:grid-cols-[1fr_1.2fr] gap-16 md:gap-20 items-center">

          {/* Left Side */}
          <div>
            <div className="flex items-center gap-2 mb-4 text-[#0066FF] font-bold text-xs tracking-widest uppercase">
              <span className="text-[14px]">✦</span> EXPERTISE
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-neutral-900 mb-6 font-serif-display lowercase">
              life skills
            </h2>
            <p className="text-neutral-700 text-[15px] sm:text-base leading-relaxed">
              Some things I spend my time on when I'm not writing code or pushing pixels.
              Always leveling up, though some skills clearly need more work than others.
            </p>
          </div>

        {/* Right Side */}
          <div className="flex flex-col gap-8">
            {skills.map((skill) => {
              const isNegative = skill.level < 0;
              const absLevel = Math.abs(skill.level);
              
              return (
                <div key={skill.name} className="flex flex-col gap-3">
                  <div className="flex justify-between items-center text-[13px] font-bold tracking-wider text-neutral-800 uppercase mb-1">
                    <span>{skill.name}</span>
                    <span className={isNegative ? "text-red-500 text-[11px]" : "text-neutral-400 text-[12px]"}>
                      {isNegative ? `${skill.level}% (Lack of skill)` : `${skill.level}%`}
                    </span>
                  </div>
                  <div className="relative w-full h-[4px] bg-neutral-200 rounded-full mt-1">
                    {/* Visual 'Start' marker to show it's intentionally going out of bounds */}
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[2px] h-[10px] bg-neutral-400 z-10" />
                    
                    <div
                      className={`absolute top-0 h-full rounded-full transition-all duration-1000 ease-out ${
                        isNegative ? "right-full bg-red-500" : "left-0 bg-[#0066FF]"
                      }`}
                      style={{ width: `${absLevel}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
