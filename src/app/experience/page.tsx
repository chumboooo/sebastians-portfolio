import type { Metadata } from "next";
import Link from "next/link";
import { ChapterLabel } from "@/components/ChapterLabel";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { MangaCard } from "@/components/MangaCard";
import { MarginSticker } from "@/components/MarginSticker";
import { Navigation } from "@/components/Navigation";
import { site, type ExperienceItem } from "@/data/site";

export const metadata: Metadata = {
  title: "Experience | Sebastian Davalos",
  description:
    "Technical leadership, AI evaluation, and campus support experience from Sebastian Davalos.",
};

const categories: ExperienceItem["category"][] = [
  "Technical Leadership",
  "AI / Evaluation Work",
  "Campus & Student Support",
];

export default function ExperiencePage() {
  return (
    <>
      <Navigation />
      <main className="relative isolate overflow-hidden px-5 pb-24 pt-16 sm:px-6 sm:pb-32 sm:pt-20 lg:px-8">
        <MarginSticker variant="mountains" className="left-5 top-48 -rotate-2" />
        <MarginSticker variant="sun" className="right-5 top-[38rem] rotate-3" />
        <MarginSticker variant="hummingbird" className="bottom-40 left-5 -rotate-3" />

        <div className="relative z-10 mx-auto max-w-6xl">
          <ChapterLabel
            chapter="04"
            title="Full Experience"
            level={1}
            className="mb-5 sm:mb-6"
          />
          <p className="max-w-2xl text-base leading-7 text-gray-700 dark:text-stone-300">
            Technical leadership, AI evaluation work, and campus support roles.
          </p>
          <Link
            href="/#experience"
            className="font-accent mt-7 inline-flex items-center gap-2 border-b-2 border-[#782f40] pb-1 text-sm text-[#782f40] transition hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#782f40] focus:ring-offset-4 dark:border-[#ceb888] dark:text-[#ceb888] dark:focus:ring-[#ceb888] dark:focus:ring-offset-[#111113]"
          >
            <span aria-hidden="true">&larr;</span>
            Back to portfolio
          </Link>

          <div className="mt-14 grid gap-8 lg:mt-16">
            {categories.map((category, index) => {
              const items = site.experience.filter(
                (item) => item.category === category,
              );

              return (
                <MangaCard
                  as="section"
                  key={category}
                  className="overflow-hidden p-6 sm:p-8 lg:p-10"
                  aria-labelledby={`experience-category-${index}`}
                >
                  <div className="absolute inset-0 halftone-field opacity-15" aria-hidden="true" />
                  <div className="relative grid gap-8 lg:grid-cols-[0.55fr_1.45fr]">
                    <div>
                      <h2
                        id={`experience-category-${index}`}
                        className="font-accent text-2xl text-[#211d1e] dark:text-stone-50 sm:text-3xl"
                      >
                        {category}
                      </h2>
                    </div>
                    <ExperienceTimeline items={items} />
                  </div>
                </MangaCard>
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
}
