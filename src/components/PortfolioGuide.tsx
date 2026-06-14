type PortfolioGuideProps = {
  callout: string;
};

export function PortfolioGuide({ callout }: PortfolioGuideProps) {
  return (
    <aside
      className="guide-card manga-panel relative mx-auto w-full max-w-sm overflow-hidden px-5 pb-5 pt-4 lg:ml-auto"
      aria-label="Portfolio llama guide"
    >
      <div className="absolute inset-0 halftone-field opacity-35" aria-hidden="true" />

      <div className="relative">
        <div className="mb-2 flex justify-end">
          <span
            className="peru-flag-badge"
            aria-label="Peruvian flag"
            title="Peru"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </span>
        </div>

        <div className="mx-auto w-48 text-[#211d1e] dark:text-stone-100">
          <svg
            aria-hidden="true"
            viewBox="0 0 240 280"
            fill="none"
            className="h-auto w-full"
          >
            <path
              className="llama-ear llama-ear-left"
              d="M85 62C74 47 73 25 83 17c9-6 21 9 28 31"
              fill="var(--card)"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              className="llama-ear llama-ear-right"
              d="M155 62c11-15 12-37 2-45-9-6-21 9-28 31"
              fill="var(--card)"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M78 68c-6-9-1-20 9-23 3-11 16-17 27-11 8-9 23-8 30 2 12-3 24 5 24 17 9 7 8 20-1 26 4 11-3 22-14 24-2 12-14 19-25 16-9 7-22 5-28-4-12 1-22-9-20-21-10-7-11-20-2-26Z"
              fill="var(--card)"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinejoin="round"
            />
            <path
              d="M94 64c10-12 42-12 52 0 7 9 8 30 2 42-7 11-18 18-28 18s-21-7-28-18c-6-12-5-33 2-42Z"
              fill="var(--background)"
              stroke="currentColor"
              strokeWidth="3.5"
              strokeLinejoin="round"
            />
            <path
              d="M92 64c1-14 11-22 24-20 7-5 17-2 20 5 8-1 14 5 13 14-7-4-13-3-18 2-6-6-14-6-20 0-6-5-12-5-19-1Z"
              fill="var(--card)"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinejoin="round"
            />
            <path
              d="M99 77c4-3 9-3 13 0M128 77c4-3 9-3 13 0"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <ellipse cx="105" cy="82" rx="4" ry="5.5" fill="currentColor" />
            <ellipse cx="135" cy="82" rx="4" ry="5.5" fill="currentColor" />
            <ellipse
              cx="120"
              cy="101"
              rx="20"
              ry="15"
              fill="var(--card)"
              stroke="currentColor"
              strokeWidth="3"
            />
            <path
              d="M115 97c3-2 7-2 10 0-1 4-3 5-5 5s-4-1-5-5ZM120 102v5M112 109c5 4 11 4 16 0"
              stroke="currentColor"
              strokeWidth="2.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M99 115c-8 9-7 20 0 27-7 8-5 20 3 26-7 9-4 21 5 26-5 9 1 20 11 22h7c10-2 16-13 11-22 9-5 12-17 5-26 8-6 10-18 3-26 7-7 8-18 0-27-10 10-35 10-45 0Z"
              fill="var(--card)"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinejoin="round"
            />
            <path
              className="llama-jersey"
              d="M101 210c-14 3-26 11-34 24l10 32h86l10-32c-8-13-20-21-34-24-10 8-28 8-38 0Z"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinejoin="round"
            />
            <path
              className="llama-sash"
              d="M106 216h22l25 50h-23l-24-50Z"
            />
            <path
              d="M99 211c7 7 14 10 21 10s14-3 21-10"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <p className="speech-bubble relative mt-1 border-2 border-[#211d1e] bg-[#fffefa] px-4 py-3 text-[0.82rem] font-semibold leading-5 text-[#211d1e] dark:border-stone-100 dark:bg-[#111113] dark:text-stone-100 sm:text-sm sm:leading-6">
          {callout}
        </p>
      </div>
    </aside>
  );
}
