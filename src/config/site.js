import { ThumbsUp, Star, Heart, Zap } from "lucide-react";

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
      "I have ~3.5 yrs total experience in data-driven UX, systems thinking, scaling SaaS products & AI UX, and some in B2C via freelance as well",
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

export const testimonials = [
  {
    name: "Akshay Prajapati",
    role: "Operations Manager @Speedy Laundry",
    image: "/testimonials/akshay.jfif",
    quote:
      "Ayush delivered our Speedy Laundry website on time with outstanding quality — modern, professional, and perfectly on-brand. His attention to detail and clear communication made the entire process seamless. Highly recommend!",
    colorClass: "t-card--cream",
    icon: ThumbsUp,
  },
  {
    name: "Chandrakant Rathod",
    role: "Chief Technical Officer @ GIPL",
    quote:
      "Ayush is a talented Software Developer who consistently delivers quality work. He has strong technical skills, a proactive attitude, and excellent problem-solving abilities. It has been a pleasure working with him.",
    colorClass: "t-card--white",
    image: "/testimonials/ck.webp",
    icon: Star,
  },
  {
    name: "Suresh Prajapati",
    role: "Owner @ Cassio Dry Cleaners",
    quote:
      "From day one, Ayush treated our website as if it were his own business. He made the process easy—no technical jargon, just honest communication and consistent progress. The final website looks fantastic and perfectly captures our vision. Highly recommend him!",
    colorClass: "t-card--peach",
    icon: Heart,
  },
  {
    name: "Ronak Patel",
    role: "Mobile Development Head @ GIPL",
    quote:
      "Working with Ayush is always a great experience. He consistently ships clean, reliable backend code and grasps complex requirements instantly. He’s a natural problem solver who hits deadlines without breaking a sweat. Highly recommend him for any backend work!",
    colorClass: "t-card--lavender",
    image: "/testimonials/ronak.png",
    icon: Zap,
  }
];
