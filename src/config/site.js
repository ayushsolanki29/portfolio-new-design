import { ThumbsUp, Star, Heart, Zap, Award, TrendingUp, CheckCircle, Briefcase, ShieldCheck, MessageSquare, Rocket, Gamepad2 } from "lucide-react";

export const siteConfig = {
  name: "Ayush Solanki",
  shortName: "AYUSH",
  title: "Fullstack Engineer & DevOps",
  tagline: "Fullstack Engineer | DevOps & Cloud Deployment",
  email: "ayushsolanki2901@gmail.com",
  phone: "+91 9723054735",
  location: "Ahmedabad, Gujarat, India",
  website: "https://ayushsolanki.site",
  resumePath: "https://docs.google.com/document/d/1Qe1c6Dycj3fqEha4wQZFME381kGGFfNz/edit?usp=sharing&ouid=108383743240215142495&rtpof=true&sd=true",
  resumeFileName: "Ayush_Solanki_Resume.pdf",
  socials: {
    github: "https://github.com/ayushsolanki29",
    linkedin: "https://www.linkedin.com/in/ayush-solanki-a3909625a/",
    instagram: "ayushsolanki.exe",
    x: "@ayushsolanki29",
    facebook: "ayushsolanki29",
  },
  copyrightYear: "2026",
};

export const ctaConfig = {
  heading: "Let's work together?",
  body: "Want to talk about design, ideas, tech, coffee, music or just anything in general? Feel free to hit me up!",
  buttonLabel: "Send message",
  buttonHref: "/contact",
};

export const navItems = [
  { name: "Home", path: "/" },
  { name: "Work", path: "/work" },

  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];
export const footerItems = [
  { name: "Home", path: "/" },
  { name: "Work", path: "/work" },
  { name: "Thoughts", path: "/thoughts" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export const faqData = [
  {
    question: "What is my experience like?",
    answer:
      "I have ~4.5 yrs total experience in data-driven UX, systems thinking, scaling SaaS products & AI UX, and some in B2C via freelance as well",
  },
  {
    question: "What makes me stand out?",
    answer:
      "I blend creativity with deep analytical thinking. I don't just design interfaces; I solve complex product problems and align user needs with business goals.",
  },
  {
    question: "What are my values?",
    answer:
      "Empathy, collaboration, and continuous learning. I believe in designing with people, not just for them, and always iterating based on feedback.",
  },
  {
    question: "How I measure success?",
    answer:
      "By looking at both qualitative user feedback and quantitative metrics like task completion rate, time on task, and overall user satisfaction.",
  },
  {
    question: "What is my working style?",
    answer:
      "Highly collaborative and iterative. I like to involve stakeholders early, prototype quickly, and validate assumptions through testing.",
  },
  {
    question: "Do I offer freelance services?",
    answer:
      "Yes, I am open to select freelance opportunities depending on my current bandwidth. Feel free to reach out to discuss potential projects.",
  },
];

// Testimonials array configuration
// --------------------------------
// - Keep the length of quotes consistent (around 200-250 characters max) to maintain visual balance.
// - Available color classes: "t-card--cream", "t-card--white", "t-card--peach", "t-card--lavender".
// - Try to rotate colors and use different icons from lucide-react to add visual variety.
export const testimonials = [
  {
    name: "Akshay Prajapati",
    role: "Operations Manager @Speedy Laundry",
    image: "/testimonials/akshay.jfif",
    quote:
      "Ayush delivered our Speedy Laundry website on time with outstanding quality. It looks modern, professional, and perfectly on brand. His clear communication made the entire process seamless. Highly recommended!",
    colorClass: "t-card--cream",
    icon: ThumbsUp,
  },
  {
    name: "Chandrakant Rathod",
    role: "Chief Technical Officer @ GIPL",
    quote:
      "Ayush is a talented Software Developer who consistently delivers quality work. He brings strong technical skills, a proactive attitude, and excellent problem solving abilities. A real pleasure to work with him.",
    colorClass: "t-card--white",
    image: "/testimonials/ck.webp",
    icon: Star,
  },
  {
    name: "Suresh Prajapati",
    role: "Owner @ Cassio Dry Cleaners",
    quote:
      "From day one, Ayush treated our website as if it were his own business. He made the process easy with no technical jargon, just honest communication and consistent progress. The final website looks fantastic!",
    colorClass: "t-card--peach",
    icon: Heart,
  },
  {
    name: "Ronak Patel",
    role: "Mobile Development Head @ GIPL",
    quote:
      "Working with Ayush is always a great experience. He consistently ships clean and reliable backend code and grasps complex requirements instantly. He is a natural problem solver who hits deadlines easily.",
    colorClass: "t-card--lavender",
    image: "/testimonials/ronak.jpg",
    icon: Zap,
  },
  {
    name: "Bhargav Parmar",
    role: "Tech Head @ Impexina Global Pvt Ltd",
    quote:
      "I am highly satisfied with this software. The user interface is modern, intuitive, and very friendly. The logic implementation is incredibly well designed, making the workflow smooth and improving our efficiency.",
    colorClass: "t-card--cream",
    image: "/testimonials/bhargav.jpeg",
    icon: Award,
  },
  {
    name: "Nikita Soni",
    role: "Operation Head @ Impexina Global Pvt Ltd",
    quote:
      "The software is very well developed and covers all operational requirements effectively. The logic behind each module is excellent. I especially appreciate the Summary section for quick insights. Truly practical.",
    colorClass: "t-card--white",
    image: "/testimonials/Nikita.jpeg",
    icon: TrendingUp,
  },
  {
    name: "Harshita Rao",
    role: "Documentation Head @ Impexina Global Pvt Ltd",
    quote:
      "The Packing List and Invoice modules are extremely well structured. The valuation functionality saves considerable time during documentation processes. The design is clean and professional, making things efficient.",
    colorClass: "t-card--peach",
    image: "/testimonials/Harshita.jpeg",
    icon: CheckCircle,
  },
  {
    name: "Asha Kacha",
    role: "Logistics Head @ Impexina Global Pvt Ltd",
    quote:
      "The Loading Sheet module is one of the strongest features. It simplifies logistics planning and helps manage shipments efficiently. The system is well organized and very easy to navigate. A great accuracy boost.",
    colorClass: "t-card--lavender",
    image: "/testimonials/asha.jpeg",
    icon: Briefcase,
  },
  {
    name: "P. S. Harikrishna",
    role: "Director @ Impexina Global Pvt Ltd",
    quote:
      "This software transformed how we manage import operations, integrating documentation, logistics, and reporting into a single platform. It has increased productivity, improved visibility, and enhanced our control.",
    colorClass: "t-card--cream",
    image: "/testimonials/harikrishna.jfif",
    icon: ShieldCheck,
  },
  {
    name: "Overall Company Feedback",
    role: "Company Feedback @ Impexina Global Pvt Ltd",
    quote:
      "This software provides a complete solution for import business management. It is easy to use, highly efficient, and backed by strong business logic. It has significantly reduced manual work and boosted teamwork.",
    colorClass: "t-card--white",
    image: "/companies/impexina.jpeg",
    icon: MessageSquare,
    isLogo: true,
  },
  {
    name: "Vraj Darji",
    role: "Marketing Head @ GIPL",
    quote:
      "I had a great experience working with Ayush on my billing software. He showed excellent skills and delivered a reliable solution. He was professional, understood my needs quickly, and finished everything on time.",
    colorClass: "t-card--peach",
    image: "/testimonials/vraj-darji.jpeg",
    icon: Rocket,
  },
  {
    name: "Abishek",
    role: "FOUNDER @ steam-games.in",
    quote:
      "Working with Ayush was a great experience. He delivered a clean, modern, and friendly game shop website that is fast and responsive. He was patient, communicated clearly, and completed everything on time for us.",
    colorClass: "t-card--lavender",
    icon: Gamepad2,
  }
];
