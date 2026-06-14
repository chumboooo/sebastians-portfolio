type ChapterLabelProps = {
  chapter: string;
  title: string;
  className?: string;
  level?: 1 | 2;
};

export function ChapterLabel({
  chapter,
  title,
  className = "",
  level = 2,
}: ChapterLabelProps) {
  const Heading = level === 1 ? "h1" : "h2";

  return (
    <Heading
      className={`font-accent mb-10 flex flex-wrap items-baseline gap-x-3 gap-y-1 text-3xl text-[#211d1e] dark:text-stone-50 sm:mb-12 sm:text-5xl ${className}`}
    >
      <span className="text-sm uppercase text-[#782f40] dark:text-[#ceb888] sm:text-base">
        Chapter {chapter}:
      </span>
      <span>{title}</span>
    </Heading>
  );
}
