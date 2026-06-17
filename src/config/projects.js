export const projects = [
  {
    slug: "navigation-2",
    title: "Building the navigation 2.0",
    tagline: "Reducing navigation time from point A to B by 50%",
    description:
      "Reducing navigation time on cloud.yellow.ai from point A to B by 50% to reduce user effort and frustration",
    colorClass: "work-card--lavender",
    accentColor: "#ede8ff",
    year: "2023",
    role: "Lead Product Designer",
    duration: "4 months",
    tags: [
      { label: "Interaction/UX design" },
      { label: "B2B SaaS" },
    ],
    techStack: [
      { name: "React", slug: "react", color: "61DAFB" },
      { name: "TypeScript", slug: "typescript", color: "3178C6" },
      { name: "Figma", slug: "figma", color: "F24E1E" },
      { name: "Tailwind CSS", slug: "tailwindcss", color: "06B6D4" },
    ],
    overview:
      "Users on cloud.yellow.ai were struggling to navigate between modules efficiently. Deep menu hierarchies and inconsistent patterns were creating friction at every step. This project aimed to rethink the entire navigation system — making it faster, more predictable, and intuitive.",
    problem:
      "The existing navigation had 4+ levels of nesting, caused users to lose context frequently, and had no persistent quick-access patterns. Support tickets related to 'can't find X' were growing week-over-week.",
    solution:
      "We introduced a two-rail navigation model: a persistent macro-level rail for top-level modules, and a contextual micro-rail for sub-sections. Combined with keyboard shortcuts and a command palette, navigation time dropped by 50% in usability testing.",
    impact: [
      "50% reduction in average navigation time",
      "32% drop in navigation-related support tickets",
      "NPS improvement of +18 points post-launch",
      "Adopted as the design system standard across 3 product teams",
    ],
    liveUrl: null,
    githubUrl: null,
  },
  {
    slug: "collaboration-postman",
    title: "Collaboration @ Postman",
    tagline: "Enabling 40M+ devs to stay on top of work",
    description:
      "Enabling 40M+ devs to stay on top of work via comments, notifications, collaboration and AI-native workflows",
    colorClass: "work-card--peach",
    accentColor: "#fff0ea",
    year: "2024",
    role: "Senior Product Designer",
    duration: "6 months",
    tags: [
      { label: "Product Design" },
      { label: "Coming Soon", type: "muted" },
    ],
    techStack: [
      { name: "React", slug: "react", color: "61DAFB" },
      { name: "Node.js", slug: "nodedotjs", color: "339933" },
      { name: "TypeScript", slug: "typescript", color: "3178C6" },
      { name: "AWS", slug: "amazonaws", color: "232F3E" },
      { name: "Postman", slug: "postman", color: "FF6C37" },
    ],
    overview:
      "Postman is used by 40M+ developers worldwide. The collaboration suite needed a complete rethink — from threaded comments on collections to AI-assisted workflow suggestions and real-time co-editing.",
    problem:
      "Teams using Postman for API development had no in-context way to communicate, track feedback, or stay aware of changes made by teammates. This led to async communication happening outside the tool entirely.",
    solution:
      "Designed a unified collaboration layer featuring inline comments on any API artifact, a smart notification center with relevance scoring, and AI-generated summaries of team activity. The system was designed to feel native, not bolted on.",
    impact: [
      "Shipped to 40M+ active users",
      "28% increase in team workspace retention",
      "AI summary feature saw 71% weekly active usage among teams",
      "Reduced context-switching by keeping communication inside Postman",
    ],
    liveUrl: "https://postman.com",
    githubUrl: null,
  },
  {
    slug: "findo",
    title: "FinDo - Money made easy",
    tagline: "Building financial awareness as a second nature",
    description:
      "Building financial management and awareness as a second nature by triggering inherent motivation",
    colorClass: "work-card--lime",
    accentColor: "#edfce7",
    year: "2022",
    role: "Full Stack Developer & Designer",
    duration: "3 months",
    tags: [
      { label: "Product Design" },
      { label: "🏆 Award Winner", type: "award" },
    ],
    techStack: [
      { name: "React", slug: "react", color: "61DAFB" },
      { name: "Next.js", slug: "nextdotjs", color: "000000" },
      { name: "Node.js", slug: "nodedotjs", color: "339933" },
      { name: "Figma", slug: "figma", color: "F24E1E" },
    ],
    overview:
      "FinDo is a financial management app that makes money habits feel less like a chore. By tapping into inherent motivation — progress, streaks, and visual feedback — it turns budgeting into something people actually want to do.",
    problem:
      "Most finance apps are transactional and anxiety-inducing. Users open them, feel bad, and close them. There was a gap for a product that built financial awareness through positive reinforcement rather than guilt.",
    solution:
      "FinDo uses behavioral design patterns — streaks, celebration moments, and adaptive goal nudges — to make users feel good about their financial journey. The UI was intentionally calm, using soft greens and rounded forms to reduce financial anxiety.",
    impact: [
      "🏆 Award Winner at the National UX Design Challenge",
      "4.9/5 rating in user testing sessions",
      "89% of users reported reduced financial anxiety",
      "Featured in 2 design publications",
    ],
    liveUrl: null,
    githubUrl: "https://github.com/ayushsolanki29",
  },
  {
    slug: "growth-pet-warehouse",
    title: "Growth @ Pet Warehouse",
    tagline: "Helping future pet parents adopt instead of shop",
    description:
      "Generating organic growth and virality by helping future pet parents seamlessly adopt instead of shop",
    colorClass: "work-card--yellow",
    accentColor: "#fefce8",
    year: "2023",
    role: "UX & Growth Designer",
    duration: "5 months",
    tags: [
      { label: "UX/Marketing/Growth" },
      { label: "Coming Soon", type: "muted" },
    ],
    techStack: [
      { name: "JavaScript", slug: "javascript", color: "F7DF1E" },
      { name: "Python", slug: "python", color: "3776AB" },
      { name: "Figma", slug: "figma", color: "F24E1E" },
      { name: "Vercel", slug: "vercel", color: "000000" },
    ],
    overview:
      "Pet Warehouse wanted to grow its adoption platform and create a viral loop that brought in new users organically. The project combined UX research, growth design, and data-driven experimentation to drive top-of-funnel growth.",
    problem:
      "The adoption journey was buried 4 clicks deep, emotionally flat, and had no referral or sharing mechanism. Conversion from browsing to adoption inquiry was under 3%.",
    solution:
      "Redesigned the adoption flow to lead with emotional connection — showing personality profiles and compatibility scores before logistics. Added a 'Share a pet' card mechanic that drove organic social sharing, and A/B tested 6 landing page variants.",
    impact: [
      "Conversion rate increased from 3% to 11.4%",
      "Organic social shares up 340%",
      "Cost per acquisition reduced by 62%",
      "Became the template for 3 other regional campaigns",
    ],
    liveUrl: null,
    githubUrl: null,
  },
  {
    slug: "plg-referral",
    title: "PLG Referral program",
    tagline: "Increasing sign-ups using curiosity and social currency",
    description:
      "Increasing sign-ups for Josh Skills app by using curiosity and social currency as inherent motivation",
    colorClass: "bg-[#eaf5fc]",
    accentColor: "#eaf5fc",
    year: "2023",
    role: "Product-Led Growth Designer",
    duration: "2 months",
    tags: [
      { label: "UX/PLG Design" },
      { label: "Coming Soon", type: "muted" },
    ],
    techStack: [
      { name: "React", slug: "react", color: "61DAFB" },
      { name: "Figma", slug: "figma", color: "F24E1E" },
      { name: "Firebase", slug: "firebase", color: "FFCA28" },
    ],
    overview:
      "Josh Skills needed a viral referral program that didn't feel transactional. The challenge was to design something that made sharing feel like status — not a chore. Using PLG principles, we built a program around curiosity hooks and social proof.",
    problem:
      "Existing referral flows were discount-first and felt cheap. Users didn't share because it felt like hawking a coupon, not recommending something genuinely useful.",
    solution:
      "Designed a 'sneak peek' referral mechanic — referred users got exclusive early access to content before it was published. The sharer got a social badge showing their influence reach. This made sharing feel like curation, not selling.",
    impact: [
      "Referral conversion rate of 34% (industry avg: 11%)",
      "25,000 new sign-ups in the first 6 weeks",
      "Average referral chain length of 2.8 (viral coefficient > 1)",
      "Lowest CAC channel in the entire acquisition mix",
    ],
    liveUrl: null,
    githubUrl: null,
  },
];

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug) ?? null;
}
