import { site } from "@/data/site";
import { RevealOnScroll } from "@/components/RevealOnScroll";

function SkillGroupIcon({ group }: { group: string }) {
  const baseClass = "h-4 w-4";

  if (group === "Languages") {
    return (
      <svg aria-hidden="true" className={baseClass} viewBox="0 0 24 24" fill="none">
        <path d="m8 8-4 4 4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="m16 8 4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="m14 5-4 14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  if (group === "Full-Stack") {
    return (
      <svg aria-hidden="true" className={baseClass} viewBox="0 0 24 24" fill="none">
        <path d="M4.5 6.5h15v11h-15v-11Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M8 20h8M12 17.5V20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  if (group === "AI/Data") {
    return (
      <svg aria-hidden="true" className={baseClass} viewBox="0 0 24 24" fill="none">
        <path d="M12 4.5v15M6.5 8.5v7M17.5 8.5v7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M6.5 12h11M9 6.5h6M9 17.5h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" className={baseClass} viewBox="0 0 24 24" fill="none">
      <path d="M7 17.5h10a4 4 0 0 0 .7-7.94A5.5 5.5 0 0 0 7.12 8.2 4.7 4.7 0 0 0 7 17.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M9 13h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function Skills() {
  return (
    <section
      className="relative isolate flex min-h-[92vh] scroll-mt-28 items-center bg-gray-50 px-5 py-24 text-[#211d1e] dark:bg-[#141416] dark:text-stone-50 sm:px-6 sm:py-32 lg:px-8"
      id="skills"
    >
      <div className="mx-auto max-w-6xl">
        <RevealOnScroll>
          <h2 className="mb-12 text-3xl font-semibold tracking-tight sm:mb-16 sm:text-5xl">
            Toolkit
          </h2>
        </RevealOnScroll>

        <RevealOnScroll className="grid gap-5 md:grid-cols-2 lg:gap-6" delay={40}>
          {Object.entries(site.skills).map(([group, skills]) => (
            <article
              key={group}
              className="rounded-[1.25rem] border border-gray-200/55 bg-white/35 p-6 dark:border-white/[0.06] dark:bg-white/[0.025] sm:p-7"
            >
              <h3 className="flex items-center gap-3 text-xl font-semibold text-[#211d1e] dark:text-stone-50">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-[#782f40]/8 text-[#782f40] dark:bg-[#ceb888]/10 dark:text-[#ceb888]">
                  <SkillGroupIcon group={group} />
                </span>
                <span>{group}</span>
              </h3>
              <ul className="mt-6 flex flex-wrap gap-2.5 text-sm leading-6 text-gray-700 dark:text-stone-300">
                {skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full bg-white/80 px-3.5 py-1.5 text-xs font-semibold text-gray-700 shadow-sm shadow-gray-200/40 dark:bg-white/[0.045] dark:text-stone-200 dark:shadow-none"
                  >
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </RevealOnScroll>
      </div>
    </section>
  );
}
