/**
 * Sample thoughts data — hardcoded for now.
 * Later this can be replaced with Supabase fetch from a `thoughts` table.
 */

export const thoughtCategories = [
  "All",
  "Reflections",
  "Dev Notes",
  "Ideas",
  "Learning",
  "Behind the Scenes",
];

export const thoughts = [
  {
    id: 1,
    slug: "why-i-switched-from-php-to-nodejs",
    title: "Why I Switched from PHP to Node.js",
    excerpt:
      "After 2 years of writing PHP, I made the jump to Node.js. Here's what convinced me, what I miss, and what I'd tell someone in the same spot.",
    category: "Reflections",
    date: "2026-06-15",
    readingTime: "6 min read",
    accentColor: "#ede8ff",
    content: {
      blocks: [
        {
          id: "t1-h1",
          type: "header",
          data: { text: "The Breaking Point", level: 2 },
        },
        {
          id: "t1-p1",
          type: "paragraph",
          data: {
            text: "PHP was my first real language. I built everything with it — login systems, e-commerce stores, dashboards. It was comfortable. But comfort started to feel like a ceiling.",
          },
        },
        {
          id: "t1-p2",
          type: "paragraph",
          data: {
            text: "The moment I tried building a real-time chat feature, I hit a wall. Polling, long-polling, hacks on top of hacks. Meanwhile, Node.js had WebSockets baked right in. That was the first crack.",
          },
        },
        {
          id: "t1-h2",
          type: "header",
          data: { text: "What Made Node.js Click", level: 2 },
        },
        {
          id: "t1-p3",
          type: "paragraph",
          data: {
            text: "JavaScript everywhere. Frontend and backend sharing the same language felt like removing a tax I'd been paying for years. JSON flowed naturally. NPM had a package for everything. The ecosystem was alive.",
          },
        },
        {
          id: "t1-p4",
          type: "paragraph",
          data: {
            text: "But more than the tech, it was the <b>community</b>. Open-source projects, YouTube tutorials, Discord servers — the energy was different. People were building and sharing, not just writing documentation.",
          },
        },
        {
          id: "t1-h3",
          type: "header",
          data: { text: "What I Still Miss About PHP", level: 2 },
        },
        {
          id: "t1-l1",
          type: "list",
          data: {
            style: "unordered",
            items: [
              "Dead-simple deployment — just FTP your files and it works",
              "Laravel's elegance — Eloquent ORM is genuinely beautiful",
              "The maturity — PHP has 25+ years of battle-tested patterns",
              "Shared hosting support — $3/month hosting that just runs",
            ],
          },
        },
        {
          id: "t1-q1",
          type: "quote",
          data: {
            text: "The best language is the one that lets you ship what matters. PHP did that for me once. Node.js does it now.",
            caption: "",
          },
        },
        {
          id: "t1-p5",
          type: "paragraph",
          data: {
            text: "If you're in the same spot — stuck between what you know and what excites you — just build one project in the new thing. Don't overthink it. The code will tell you if it's right.",
          },
        },
      ],
    },
  },
  {
    id: 2,
    slug: "deploying-first-app-on-aws",
    title: "Deploying My First App on AWS — Lessons Learned",
    excerpt:
      "EC2, Nginx, SSL, PM2 — my first AWS deployment was a masterclass in patience. Here's the step-by-step chaos and what stuck.",
    category: "Dev Notes",
    date: "2026-06-08",
    readingTime: "8 min read",
    accentColor: "#fff0ea",
    content: {
      blocks: [
        {
          id: "t2-h1",
          type: "header",
          data: { text: "Day One: Just an EC2 Instance", level: 2 },
        },
        {
          id: "t2-p1",
          type: "paragraph",
          data: {
            text: "I spun up an EC2 instance with the confidence of someone who'd watched three YouTube videos. Ubuntu, t2.micro, free tier. Easy. Then I SSH'd in and stared at a blank terminal for 10 minutes.",
          },
        },
        {
          id: "t2-p2",
          type: "paragraph",
          data: {
            text: "Installing Node was fine. Cloning my repo was fine. Running <code>npm start</code> was fine. But then — 'how do I make this accessible from the internet?' That's where the real learning started.",
          },
        },
        {
          id: "t2-h2",
          type: "header",
          data: { text: "The Nginx + PM2 Combo", level: 2 },
        },
        {
          id: "t2-p3",
          type: "paragraph",
          data: {
            text: "Nginx as a reverse proxy was the first 'aha' moment. One config file that routes port 80 to your app running on 3000. PM2 keeps your app alive. Together, they turn a toy project into something production-ready.",
          },
        },
        {
          id: "t2-h3",
          type: "header",
          data: { text: "The SSL Struggle", level: 2 },
        },
        {
          id: "t2-p4",
          type: "paragraph",
          data: {
            text: "Let's Encrypt + Certbot should be simple. And it is — when your DNS is already pointing to your server. I spent 3 hours debugging why the certificate wouldn't issue, only to realize my A record was still pointing to the old Vercel deployment.",
          },
        },
        {
          id: "t2-q1",
          type: "quote",
          data: {
            text: "DevOps is 20% knowing what to do and 80% knowing what you forgot to do.",
            caption: "",
          },
        },
        {
          id: "t2-p5",
          type: "paragraph",
          data: {
            text: "But once that green padlock appeared in the browser — genuinely one of the most satisfying moments. I built this. I deployed this. It's mine.",
          },
        },
      ],
    },
  },
  {
    id: 3,
    slug: "art-of-debugging",
    title: "The Art of Debugging: My Mental Framework",
    excerpt:
      "Debugging isn't just reading error logs. It's a mindset — part detective work, part patience, part talking to a rubber duck.",
    category: "Ideas",
    date: "2026-05-22",
    readingTime: "5 min read",
    accentColor: "#edfce7",
    content: {
      blocks: [
        {
          id: "t3-h1",
          type: "header",
          data: { text: "Step 1: Read the Error (Really Read It)", level: 2 },
        },
        {
          id: "t3-p1",
          type: "paragraph",
          data: {
            text: "Most errors tell you exactly what's wrong. We just don't read them. We see red text and panic. Slow down. Read line by line. The stack trace is a map — follow it.",
          },
        },
        {
          id: "t3-h2",
          type: "header",
          data: { text: "Step 2: Reproduce Before You Fix", level: 2 },
        },
        {
          id: "t3-p2",
          type: "paragraph",
          data: {
            text: "If you can't reproduce the bug, you can't confirm you fixed it. Write a failing test, or at least know the exact steps. 'It sometimes crashes' isn't a bug report — it's a prayer.",
          },
        },
        {
          id: "t3-h3",
          type: "header",
          data: { text: "Step 3: Change One Thing at a Time", level: 2 },
        },
        {
          id: "t3-p3",
          type: "paragraph",
          data: {
            text: "The worst debugging habit: changing five things and hoping one of them works. You'll never know which fix was the real one. Discipline yourself. One change. Test. Repeat.",
          },
        },
        {
          id: "t3-q1",
          type: "quote",
          data: {
            text: "The best debuggers aren't the smartest. They're the most patient.",
            caption: "",
          },
        },
        {
          id: "t3-p4",
          type: "paragraph",
          data: {
            text: "And when all else fails? Walk away. Get coffee. Your subconscious is better at pattern matching than your stressed-out conscious mind.",
          },
        },
      ],
    },
  },
  {
    id: 4,
    slug: "building-in-public",
    title: "Building in Public: What I've Learned So Far",
    excerpt:
      "Sharing your work before it's perfect is terrifying. But it's also the fastest way to learn, grow, and connect with people who think like you.",
    category: "Reflections",
    date: "2026-05-10",
    readingTime: "7 min read",
    accentColor: "#fefce8",
    content: {
      blocks: [
        {
          id: "t4-h1",
          type: "header",
          data: { text: "The Fear of Being Seen", level: 2 },
        },
        {
          id: "t4-p1",
          type: "paragraph",
          data: {
            text: "My first public commit was embarrassing. Variable names like <code>x</code> and <code>temp</code>. No README. Console.logs everywhere. But I pushed it anyway. And nothing bad happened.",
          },
        },
        {
          id: "t4-p2",
          type: "paragraph",
          data: {
            text: "That's the secret nobody tells you — most people aren't judging your code. They're too busy worrying about their own. The few who do look? They're usually kind.",
          },
        },
        {
          id: "t4-h2",
          type: "header",
          data: { text: "What Changed for Me", level: 2 },
        },
        {
          id: "t4-l1",
          type: "list",
          data: {
            style: "unordered",
            items: [
              "I got feedback I never would have found alone",
              "People reached out for collaborations",
              "My GitHub became a living portfolio",
              "I held myself to a higher standard because others could see",
              "I found my people — devs who build for the joy of it",
            ],
          },
        },
        {
          id: "t4-q1",
          type: "quote",
          data: {
            text: "Building in public isn't about showing off. It's about showing up.",
            caption: "",
          },
        },
        {
          id: "t4-p3",
          type: "paragraph",
          data: {
            text: "Start small. Tweet a screenshot. Push a messy repo. Write a thread. You don't need to be an expert — you just need to be honest about where you are.",
          },
        },
      ],
    },
  },
  {
    id: 5,
    slug: "why-personal-projects-matter",
    title: "Why Personal Projects Matter More Than You Think",
    excerpt:
      "Your side projects aren't just portfolio fillers. They're proof that you can think, ship, and care about something beyond a paycheck.",
    category: "Learning",
    date: "2026-04-28",
    readingTime: "5 min read",
    accentColor: "#f0f4ff",
    content: {
      blocks: [
        {
          id: "t5-h1",
          type: "header",
          data: { text: "Beyond the Resume", level: 2 },
        },
        {
          id: "t5-p1",
          type: "paragraph",
          data: {
            text: "Interviewers can teach you a framework. They can't teach you curiosity. When someone sees that you built an app just because you wanted to solve a problem — that says more than any certification.",
          },
        },
        {
          id: "t5-h2",
          type: "header",
          data: { text: "What I Learned from My Side Projects", level: 2 },
        },
        {
          id: "t5-p2",
          type: "paragraph",
          data: {
            text: "Every side project taught me something my job couldn't. Deployment, DNS, database design, handling payments, error monitoring. These are the gaps between tutorials and real software.",
          },
        },
        {
          id: "t5-p3",
          type: "paragraph",
          data: {
            text: "My URL shortener taught me about database indexing. My chat app taught me about WebSockets. My portfolio (this site!) taught me about design systems and animations. None of these were assigned. All of them made me better.",
          },
        },
        {
          id: "t5-q1",
          type: "quote",
          data: {
            text: "The best developers I know have a graveyard of half-finished projects. Each one taught them something.",
            caption: "",
          },
        },
      ],
    },
  },
  {
    id: 6,
    slug: "my-dev-setup-2026",
    title: "My Setup: Tools I Can't Live Without",
    excerpt:
      "From VS Code extensions to terminal aliases — here's what my daily dev environment looks like and why each piece earns its place.",
    category: "Behind the Scenes",
    date: "2026-04-15",
    readingTime: "4 min read",
    accentColor: "#fce8f4",
    content: {
      blocks: [
        {
          id: "t6-h1",
          type: "header",
          data: { text: "The Editor: VS Code, Obviously", level: 2 },
        },
        {
          id: "t6-p1",
          type: "paragraph",
          data: {
            text: "I've tried Vim, Neovim, Sublime, even Zed. I keep coming back to VS Code. It's not the fastest or the coolest, but it's the most productive for me. Extensions are the real superpower.",
          },
        },
        {
          id: "t6-h2",
          type: "header",
          data: { text: "Must-Have Extensions", level: 2 },
        },
        {
          id: "t6-l1",
          type: "list",
          data: {
            style: "unordered",
            items: [
              "<b>ESLint + Prettier</b> — non-negotiable for any JS project",
              "<b>GitLens</b> — see who wrote what, when, and why",
              "<b>Thunder Client</b> — API testing without leaving the editor",
              "<b>Error Lens</b> — inline error highlighting that saves hours",
              "<b>Material Icon Theme</b> — because aesthetics matter",
            ],
          },
        },
        {
          id: "t6-h3",
          type: "header",
          data: { text: "Terminal & CLI", level: 2 },
        },
        {
          id: "t6-p2",
          type: "paragraph",
          data: {
            text: "Windows Terminal with Oh My Posh for the prompt. Git aliases for everything (<code>gs</code> for status, <code>gp</code> for push). PM2 for managing Node processes. And a healthy dose of <code>console.log</code> debugging — no shame.",
          },
        },
        {
          id: "t6-q1",
          type: "quote",
          data: {
            text: "Your tools don't make you a better developer. But the right tools remove friction so you can focus on what matters.",
            caption: "",
          },
        },
      ],
    },
  },
];
