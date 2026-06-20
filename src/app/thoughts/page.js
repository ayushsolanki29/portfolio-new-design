import PageShell from "../components/PageShell";
import PageHero from "../components/PageHero";
import FadedQuote from "../components/FadedQuote";
import ThoughtsGrid from "../components/ThoughtsGrid";
import { getPublicThoughts } from "@/app/actions/thought";

export const revalidate = 0;

export const metadata = {
  title: "Thoughts — Ayush Solanki",
  description:
    "Personal reflections, dev notes, and ideas from a fullstack engineer. Thinking out loud about code, craft, and everything in between.",
};

const defaultCategories = [
  "All",
  "Reflections",
  "Dev Notes",
  "Ideas",
  "Learning",
  "Behind the Scenes",
];

export default async function ThoughtsPage() {
  const { success, thoughts } = await getPublicThoughts(1, 50);
  const safeThoughts = success ? thoughts : [];

  return (
    <PageShell>
      <PageHero
        heading="Thinking out loud..."
        subtitle="Raw reflections, dev notes, and ideas that don't fit anywhere else. Not polished articles — just honest thoughts from someone who builds things and thinks about why."
      />

      {/* Thoughts Grid */}
      <section className="px-5 pb-24 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <ThoughtsGrid thoughts={safeThoughts} categories={defaultCategories} />
        </div>
      </section>

      <FadedQuote>
        Write to think.
        <br />
        Think to build.
        <br />
        Build to learn.
      </FadedQuote>
    </PageShell>
  );
}
