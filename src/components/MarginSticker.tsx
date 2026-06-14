type MarginStickerProps = {
  variant:
    | "mountains"
    | "adventure"
    | "sail"
    | "llama"
    | "chullo"
    | "hummingbird"
    | "sun"
    | "web";
  className?: string;
};

export function MarginSticker({
  variant,
  className = "",
}: MarginStickerProps) {
  const sharedProps = {
    "aria-hidden": true,
    viewBox: "0 0 96 96",
    fill: "none",
    className: "h-full w-full",
  };

  return (
    <div
      className={`side-sticker pointer-events-none absolute hidden text-[#782f40] xl:block xl:h-14 xl:w-14 2xl:h-20 2xl:w-20 dark:text-[#ceb888] ${className}`}
      aria-hidden="true"
    >
      {variant === "mountains" ? (
        <svg {...sharedProps}>
          <path d="m8 72 23-34 13 18 12-15 32 31H8Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
          <path d="m23 50 8-12 8 12M50 49l6-8 8 8M15 79h66" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="73" cy="27" r="8" stroke="currentColor" strokeWidth="2.5" />
        </svg>
      ) : null}

      {variant === "adventure" ? (
        <svg {...sharedProps}>
          <path d="M24 55c3-21 12-33 25-33 12 0 21 12 23 33" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
          <path d="M21 51c15 7 36 8 54 1l7 10c-22 10-49 9-69-1l8-10Z" fill="var(--card)" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
          <path d="M29 47c13 4 25 4 38 0" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
          <path d="m55 26 7-8 3 10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ) : null}

      {variant === "sail" ? (
        <svg {...sharedProps}>
          <circle cx="71" cy="24" r="9" stroke="currentColor" strokeWidth="2.5" />
          <path d="M19 70h59M43 67V25l24 29H43M39 34 22 57h17" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M15 76c9-5 18 5 27 0s18 5 27 0 13 1 16 0" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      ) : null}

      {variant === "llama" ? (
        <svg {...sharedProps}>
          <path d="M35 31 30 13c-1-4 4-6 7-2l8 13M61 31l5-18c1-4-4-6-7-2l-8 13" fill="var(--card)" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
          <path d="M32 27c8-7 24-7 32 0 7 6 7 20 1 27-3 4-7 6-10 7v17H41V61c-4-1-8-3-11-7-6-7-5-21 2-27Z" fill="var(--card)" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
          <ellipse cx="40" cy="40" rx="2.5" ry="3.5" fill="currentColor" />
          <ellipse cx="56" cy="40" rx="2.5" ry="3.5" fill="currentColor" />
          <path d="M43 49c3-3 7-3 10 0M48 49v5M44 55c3 2 5 2 8 0M34 79c8-6 20-6 28 0" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" />
        </svg>
      ) : null}

      {variant === "chullo" ? (
        <svg {...sharedProps}>
          <path d="M29 57c0-22 7-36 19-36s19 14 19 36H29Z" fill="var(--card)" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
          <path d="M28 55h40v10H28V55ZM38 38l10-9 10 9-10 9-10-9Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
          <path d="M35 65v17M61 65v17M32 82l3-4 3 4M58 82l3-4 3 4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="48" cy="14" r="6" fill="var(--card)" stroke="currentColor" strokeWidth="2.5" />
        </svg>
      ) : null}

      {variant === "hummingbird" ? (
        <svg {...sharedProps}>
          <path d="M12 48c18-4 29-15 35-31 3 13 1 23-5 31 12-9 26-11 42-5-12 3-22 9-30 18-7 8-16 12-27 10 6-4 11-9 14-14-9 3-19 0-29-9Z" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
          <path d="m74 47 13-4M27 71l-8 10M34 70l-3 14" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
        </svg>
      ) : null}

      {variant === "sun" ? (
        <svg {...sharedProps}>
          <circle cx="48" cy="48" r="17" fill="var(--card)" stroke="currentColor" strokeWidth="3" />
          <circle cx="48" cy="48" r="6" stroke="currentColor" strokeWidth="2.5" />
          <path d="M48 8v18M48 70v18M8 48h18M70 48h18M20 20l13 13M63 63l13 13M76 20 63 33M33 63 20 76" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          <path d="m40 43 8-5 8 5v10l-8 5-8-5V43Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        </svg>
      ) : null}

      {variant === "web" ? (
        <svg {...sharedProps}>
          <path d="M10 10 10 88M10 10 34 88M10 10 58 80M10 10 79 62M10 10 88 36M10 10H88" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
          <path d="M10 29c9 0 17-3 24-9M10 49c18 0 34-7 47-20M10 70c30 0 54-12 72-34" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" />
          <circle cx="10" cy="10" r="4" fill="currentColor" />
        </svg>
      ) : null}
    </div>
  );
}
