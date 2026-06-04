import { site } from "@/data/site";
import { RevealOnScroll } from "@/components/RevealOnScroll";

export function Experience() {
  return (
    <section className="relative isolate scroll-mt-28 px-5 py-24 sm:px-6 sm:py-32 lg:px-8" id="experience">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <RevealOnScroll>
          <h2 className="text-3xl font-semibold tracking-tight text-[#211d1e] dark:text-stone-50 sm:text-5xl">
            Experience
          </h2>
        </RevealOnScroll>

        <RevealOnScroll className="relative border-l border-gray-200 pl-6 dark:border-white/10 sm:pl-8" delay={40}>
          {site.experience.map((item) => (
            <article key={`${item.role}-${item.organization}`} className="relative pb-9 last:pb-0">
              <span className="absolute -left-[1.95rem] top-1 h-3 w-3 rounded-full border-2 border-[#fbfbfa] bg-[#782f40] dark:border-[#101012] dark:bg-[#ceb888] sm:-left-[2.45rem]" />
              <div className="grid gap-2 sm:grid-cols-[1fr_auto] sm:items-start">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#782f40] dark:text-[#ceb888]">
                    {item.organization}
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold tracking-tight text-[#211d1e] dark:text-stone-50">
                    {item.role}
                  </h3>
                </div>
                <p className="rounded-full border border-gray-200 bg-white px-3 py-1 text-sm font-semibold text-gray-600 dark:border-white/10 dark:bg-[#18181b] dark:text-stone-300">
                  {item.dates}
                </p>
              </div>
              <p className="mt-3 text-base leading-7 text-gray-700 dark:text-stone-300">
                {item.description}
              </p>
            </article>
          ))}
        </RevealOnScroll>
      </div>
    </section>
  );
}
