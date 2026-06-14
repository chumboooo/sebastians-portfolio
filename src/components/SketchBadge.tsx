import type { ReactNode } from "react";

type SketchBadgeProps = {
  children: ReactNode;
  className?: string;
};

export function SketchBadge({
  children,
  className = "",
}: SketchBadgeProps) {
  return (
    <span
      className={`inline-flex -rotate-[0.5deg] items-center border border-[#211d1e]/35 bg-white/70 px-2.5 py-1 text-xs font-bold text-[#342f31] shadow-[2px_2px_0_rgba(33,29,30,0.1)] dark:border-white/25 dark:bg-white/[0.06] dark:text-stone-200 dark:shadow-[2px_2px_0_rgba(206,184,136,0.1)] ${className}`}
    >
      {children}
    </span>
  );
}
