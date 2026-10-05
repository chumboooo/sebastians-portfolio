import type { ExperienceItem } from "@/data/site";

type ExperienceTimelineProps = {
  items: ExperienceItem[];
  compact?: boolean;
};

export function ExperienceTimeline({
  items,
  compact = false,
}: ExperienceTimelineProps) {
  return (
    <div className="relative border-l-2 border-[#211d1e]/35 pl-6 dark:border-white/25 sm:pl-8">
      {items.map((item) => (
        <article
          key={`${item.role}-${item.organization}`}
          className={`relative border-b border-[#211d1e]/15 pt-1 last:border-b-0 last:pb-0 dark:border-white/10 ${
            compact ? "pb-8" : "pb-9"
          }`}
        >
          <span className="absolute -left-[1.94rem] top-1 h-3 w-3 rotate-45 border-2 border-[#f7f7f4] bg-[#782f40] dark:border-[#111113] dark:bg-[#ceb888] sm:-left-[2.44rem]" />
          <div className="grid gap-2 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-start">
            <div className="min-w-0">
              <p className="font-accent text-xs uppercase text-[#782f40] dark:text-[#ceb888]">
                {item.organization}
              </p>
              <h3 className="font-accent mt-2 text-2xl text-[#211d1e] dark:text-stone-50">
                {item.role}
              </h3>
            </div>
            <p className="w-fit border border-[#211d1e]/30 bg-white/60 px-3 py-1 text-sm font-semibold text-gray-700 dark:border-white/20 dark:bg-white/[0.04] dark:text-stone-300 sm:max-w-44">
              {item.dates}
            </p>
          </div>
          {item.previousRole ? (
            <p className="mt-3 text-sm font-semibold text-[#782f40] dark:text-[#ceb888]">
              {item.previousRole.role} → {item.role}
              <span className="mt-1 block font-normal text-gray-600 dark:text-stone-400">
                Previous role: {item.previousRole.dates}
              </span>
            </p>
          ) : null}
          <p className="mt-3 text-base leading-7 text-gray-700 dark:text-stone-300">
            {item.description}
          </p>
          {!compact && item.details?.length ? (
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-gray-700 dark:text-stone-300">
              {item.details.map((detail) => <li key={detail}>{detail}</li>)}
            </ul>
          ) : null}
          {item.tags?.length ? (
            <ul className="mt-3 flex flex-wrap gap-2 text-xs font-semibold text-[#782f40] dark:text-[#ceb888]">
              {item.tags.map((tag) => (
                <li key={tag} className="border border-current/25 px-2 py-1">{tag}</li>
              ))}
            </ul>
          ) : null}
        </article>
      ))}
    </div>
  );
}
