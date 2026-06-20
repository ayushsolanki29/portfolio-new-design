import {
  Averia_Serif_Libre,
  Geist,
  Geist_Mono,
  Nanum_Pen_Script,
  Poppins,
  Dancing_Script,
} from "next/font/google";
import "./globals.css";
import ContextMenu from "./components/ContextMenu";
import CursorTrail from "./components/CursorTrail";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const averiaSerif = Averia_Serif_Libre({
  variable: "--font-averia-serif",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const nanumPen = Nanum_Pen_Script({
  variable: "--font-nanum-pen",
  weight: "400",
  subsets: ["latin"],
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Ayush Solanki | Fullstack Engineer & DevOps",
    template: "%s | Ayush Solanki",
  },
  description:
    "Ayush Solanki is a Fullstack Engineer with 3+ years of experience building and deploying scalable web applications. Specialising in Node.js, Next.js, React, PostgreSQL, AWS, and CI/CD pipelines.",
  keywords: [
    "Fullstack Engineer",
    "Backend Developer",
    "Node.js",
    "Next.js",
    "React",
    "Express.js",
    "PostgreSQL",
    "MySQL",
    "AWS",
    "DevOps",
    "CI/CD",
    "Nginx",
    "REST API",
    "BullMQ",
    "Redis",
    "Razorpay",
    "Stripe",
    "PHP",
    "Prisma ORM",
    "Ayush Solanki",
    "Portfolio",
  ],
  authors: [{ name: "Ayush Solanki", url: "https://github.com/ayushsolanki29" }],
  creator: "Ayush Solanki",
  publisher: "Ayush Solanki",
  metadataBase: new URL("https://ayushsolanki.site"),
  alternates: {
    canonical: "/",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Ayush Solanki",
    title: "Ayush Solanki | Fullstack Engineer & DevOps",
    description:
      "Fullstack Engineer with 3+ years building production SaaS platforms, REST APIs, and cloud infrastructure on AWS. Node.js · Next.js · PostgreSQL · CI/CD.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ayush Solanki — Fullstack Engineer & DevOps",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@ayushsolanki29",
    creator: "@ayushsolanki29",
    title: "Ayush Solanki | Fullstack Engineer & DevOps",
    description:
      "Building and shipping 15+ live production apps with Node.js, Next.js, PostgreSQL, and AWS. 3+ years of fullstack & DevOps experience.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  appleWebApp: {
    title: "Ayush Solanki",
    capable: true,
  },
  other: {
    "msapplication-TileColor": "#ffffff",
  },
};

import AnalyticsTracker from "./components/AnalyticsTracker";

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${averiaSerif.variable} ${poppins.variable} ${nanumPen.variable} ${dancingScript.variable} h-full antialiased`}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-full flex flex-col">
        <AnalyticsTracker />
        <CursorTrail />
        <ContextMenu />
        {children}
      </body>
    </html>
  );
}
