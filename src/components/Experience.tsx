import Link from "next/link";
import { ChapterLabel } from "@/components/ChapterLabel";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { MarginSticker } from "@/components/MarginSticker";
import { site } from "@/data/site";
import { RevealOnScroll } from "@/components/RevealOnScroll";

export function Experience() {
  const featuredExperience = site.experience.filter((item) => item.featured);

  return (
    <section className="relative isolate scroll-mt-28 overflow-hidden px-5 py-24 sm:px-6 sm:py-32 lg:px-8" id="experience">
      <MarginSticker variant="hummingbird" className="bottom-20 left-5 -rotate-3" />
      <div className="relative z-10 mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <RevealOnScroll className="lg:pr-8">
          <ChapterLabel chapter="04" title="Experience" />
          <Link
            href="/experience"
            className="font-accent inline-flex items-center gap-2 border-b-2 border-[#782f40] pb-1 text-sm text-[#782f40] transition hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#782f40] focus:ring-offset-4 dark:border-[#ceb888] dark:text-[#ceb888] dark:focus:ring-[#ceb888] dark:focus:ring-offset-[#111113]"
          >
            View more experience
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </RevealOnScroll>

        <RevealOnScroll delay={40}>
          <ExperienceTimeline items={featuredExperience} compact />
        </RevealOnScroll>
      </div>
    </section>
  );
}
