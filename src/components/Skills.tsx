import { ChapterLabel } from "@/components/ChapterLabel";
import { HalftoneBackground } from "@/components/HalftoneBackground";
import { MarginSticker } from "@/components/MarginSticker";
import { SketchBadge } from "@/components/SketchBadge";
import { site } from "@/data/site";
import { RevealOnScroll } from "@/components/RevealOnScroll";

const coreStack = [
  "TypeScript",
  "Next.js",
  "React",
  "Tailwind CSS",
  "Python",
  "Supabase",
  "PostgreSQL",
  "Vercel",
];

const skillGroups = [
  { title: "Languages", source: "Languages", icon: "code" },
  { title: "AI / Data", source: "AI / Data", icon: "data" },
  { title: "Cloud / Workflow", source: "Cloud / Workflow", icon: "cloud" },
  { title: "Backend / Full-Stack", source: "Full-Stack", icon: "stack" },
] as const;

function SkillGroupIcon({ icon }: { icon: (typeof skillGroups)[number]["icon"] }) {
  const baseClass = "h-4 w-4";

  if (icon === "code") {
    return (
      <svg aria-hidden="true" className={baseClass} viewBox="0 0 24 24" fill="none">
        <path d="m8 8-4 4 4 4M16 8l4 4-4 4M14 5l-4 14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (icon === "data") {
    return (
      <svg aria-hidden="true" className={baseClass} viewBox="0 0 24 24" fill="none">
        <path d="M5 18V9M12 18V5M19 18v-6M3 18h18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  if (icon === "cloud") {
    return (
      <svg aria-hidden="true" className={baseClass} viewBox="0 0 24 24" fill="none">
        <path d="M7 17.5h10a4 4 0 0 0 .7-7.94A5.5 5.5 0 0 0 7.12 8.2 4.7 4.7 0 0 0 7 17.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" className={baseClass} viewBox="0 0 24 24" fill="none">
      <path d="m12 4 8 4-8 4-8-4 8-4ZM4 12l8 4 8-4M4 16l8 4 8-4" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  );
}

function SkillPanel({
  title,
  skills,
  icon,
  className = "",
}: {
  title: string;
  skills: readonly string[];
  icon: (typeof skillGroups)[number]["icon"];
  className?: string;
}) {
  return (
    <article
      className={`loadout-panel manga-panel group overflow-hidden p-5 transition duration-200 hover:-translate-y-1 hover:shadow-[9px_9px_0_rgba(120,47,64,0.18)] dark:hover:shadow-[9px_9px_0_rgba(206,184,136,0.2)] sm:p-6 ${className}`}
    >
      <div className="absolute inset-0 halftone-field opacity-20" aria-hidden="true" />
      <div className="relative">
        <h3 className="flex items-center gap-3 border-b-2 border-[#211d1e]/20 pb-4 text-lg font-semibold text-[#211d1e] dark:border-white/15 dark:text-stone-50">
          <span className="grid h-9 w-9 place-items-center border border-[#782f40]/35 bg-[#782f40]/8 text-[#782f40] dark:border-[#ceb888]/35 dark:bg-[#ceb888]/10 dark:text-[#ceb888]">
            <SkillGroupIcon icon={icon} />
          </span>
          <span>{title}</span>
        </h3>
        <ul className="mt-5 flex flex-wrap gap-2">
          {skills.map((skill) => (
            <li key={skill}>
              <SketchBadge>{skill}</SketchBadge>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export function Skills() {
  return (
    <section
      className="relative isolate scroll-mt-28 overflow-hidden border-y-2 border-[#211d1e] bg-[#efefeb] px-5 py-24 text-[#211d1e] dark:border-stone-200 dark:bg-[#151517] dark:text-stone-50 sm:px-6 sm:py-32 lg:px-8"
      id="skills"
    >
      <HalftoneBackground className="-right-32 top-12 h-[32rem] w-[32rem] rotate-6 opacity-55" />
      <MarginSticker variant="mountains" className="bottom-24 left-4 -rotate-2" />
      <MarginSticker variant="web" className="right-5 top-44 rotate-2" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <RevealOnScroll>
          <ChapterLabel chapter="02" title="Toolkit" />
        </RevealOnScroll>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:auto-rows-fr">
          <RevealOnScroll variant="panel" className="md:col-span-2 lg:col-span-2 lg:row-span-2">
            <article className="loadout-panel manga-panel speed-lines group flex h-full min-h-72 flex-col overflow-hidden p-6 transition duration-200 hover:-translate-y-1 hover:shadow-[10px_10px_0_rgba(120,47,64,0.18)] dark:hover:shadow-[10px_10px_0_rgba(206,184,136,0.2)] sm:p-8">
              <div className="relative flex h-full flex-col">
                <div className="flex items-start justify-between gap-6 border-b-2 border-[#211d1e]/25 pb-5 dark:border-white/20">
                  <div>
                    <p className="font-accent text-xs uppercase text-[#782f40] dark:text-[#ceb888]">
                      Developer loadout
                    </p>
                    <h3 className="font-accent mt-2 text-3xl text-[#211d1e] dark:text-stone-50 sm:text-4xl">
                      Core Stack
                    </h3>
                  </div>
                  <svg aria-hidden="true" className="h-12 w-12 shrink-0 text-[#782f40] dark:text-[#ceb888]" viewBox="0 0 48 48" fill="none">
                    <path d="m24 5 16 8-16 8-16-8 16-8ZM8 22l16 8 16-8M8 31l16 8 16-8" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
                  </svg>
                </div>

                <ul className="mt-auto grid grid-cols-2 gap-x-5 gap-y-3 pt-7 sm:grid-cols-4">
                  {coreStack.map((skill) => (
                    <li
                      key={skill}
                      className="border-b border-[#211d1e]/20 pb-2 text-sm font-bold text-[#342f31] dark:border-white/15 dark:text-stone-200"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </RevealOnScroll>

          {skillGroups.map((group, index) => (
            <RevealOnScroll
              key={group.title}
              delay={Math.min(index * 25, 75)}
              variant="panel"
              className={index === 3 ? "md:col-span-2 lg:col-span-1" : ""}
            >
              <SkillPanel
                title={group.title}
                skills={site.skills[group.source]}
                icon={group.icon}
                className="h-full"
              />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
