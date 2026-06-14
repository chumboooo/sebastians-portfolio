"use client";

import { useEffect, useId, useRef } from "react";
import type { Project } from "@/data/site";

type ProjectAction = {
  label: string;
  href: string;
};

type ProjectLinkModalProps = {
  project: Project;
  actions: ProjectAction[];
  hasActions: boolean;
  onClose: () => void;
};

export function ProjectLinkModal({
  project,
  actions,
  hasActions,
  onClose,
}: ProjectLinkModalProps) {
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const dialogTitleId = useId();
  const dialogDescriptionId = useId();

  useEffect(() => {
    const previousFocus = document.activeElement;
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      if (previousFocus instanceof HTMLElement) {
        previousFocus.focus();
      }
    };
  }, [onClose]);

  const handleDialogKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== "Tab") {
      return;
    }

    const focusableElements = dialogRef.current?.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
    );

    if (!focusableElements?.length) {
      return;
    }

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (event.shiftKey && document.activeElement === firstElement) {
      event.preventDefault();
      lastElement.focus();
    } else if (!event.shiftKey && document.activeElement === lastElement) {
      event.preventDefault();
      firstElement.focus();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 grid place-items-center bg-[#101012]/55 px-5 py-8 backdrop-blur-sm dark:bg-black/65"
      role="presentation"
      onClick={onClose}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={dialogTitleId}
        aria-describedby={dialogDescriptionId}
        className="manga-panel max-h-[calc(100dvh-4rem)] w-full max-w-sm overflow-x-hidden overflow-y-auto p-6 text-[#211d1e] dark:text-stone-50"
        onClick={(event) => event.stopPropagation()}
        onKeyDown={handleDialogKeyDown}
      >
        <p className="font-accent text-xs uppercase text-[#782f40] dark:text-[#ceb888]">
          Select destination
        </p>
        <h4 id={dialogTitleId} className="font-accent mt-2 text-2xl">
          {project.name}
        </h4>
        <p
          id={dialogDescriptionId}
          className="mt-3 text-sm leading-6 text-gray-600 dark:text-stone-400"
        >
          {hasActions ? "Where would you like to go?" : "Links coming soon."}
        </p>

        <div className="mt-6 grid gap-3">
          {actions.map((action) => (
            <a
              key={action.label}
              href={action.href}
              target="_blank"
              rel="noreferrer"
              className="border-2 border-[#211d1e] bg-[#f7f7f4] px-4 py-3 text-center text-sm font-bold text-[#211d1e] shadow-[3px_3px_0_rgba(33,29,30,0.16)] transition hover:-translate-y-0.5 hover:border-[#782f40] hover:text-[#782f40] focus:outline-none focus:ring-2 focus:ring-[#782f40] focus:ring-offset-4 dark:border-stone-200 dark:bg-[#111113] dark:text-stone-100 dark:hover:border-[#ceb888] dark:hover:text-[#ceb888] dark:focus:ring-[#ceb888] dark:focus:ring-offset-[#18181b]"
            >
              {action.label}
            </a>
          ))}
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            className="rounded-full border border-transparent px-4 py-3 text-sm font-semibold text-gray-600 transition hover:bg-gray-100 hover:text-[#211d1e] focus:outline-none focus:ring-2 focus:ring-[#782f40] focus:ring-offset-4 dark:text-stone-400 dark:hover:bg-white/5 dark:hover:text-stone-100 dark:focus:ring-[#ceb888] dark:focus:ring-offset-[#18181b]"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
