"use client";

import { useEffect, useId, useRef } from "react";
import { createPortal } from "react-dom";
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
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const dialogTitleId = useId();
  const dialogDescriptionId = useId();

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    titleRef.current?.focus();
    document.body.style.overflow = "hidden";

    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
      if (previousFocus instanceof HTMLElement && previousFocus.isConnected) {
        previousFocus.focus({ preventScroll: true });
      }
    };
  }, []);

  // The portal and native top layer keep transforms, clipping and nav stacking
  // from constraining the modal. showModal handles background inertness and focus.
  return createPortal(
    <dialog
      ref={dialogRef}
      aria-labelledby={dialogTitleId}
      aria-describedby={dialogDescriptionId}
      className="project-dialog"
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        className="project-modal-panel manga-panel max-h-[calc(100dvh-4rem)] w-full max-w-sm overflow-x-hidden overflow-y-auto p-6 text-[#211d1e] dark:text-stone-50"
      >
        <p className="font-accent text-xs uppercase text-[#782f40] dark:text-[#ceb888]">
          Select destination
        </p>
        <h2 ref={titleRef} tabIndex={-1} id={dialogTitleId} className="font-accent mt-2 text-2xl outline-none">
          {project.name}
        </h2>
        <p
          id={dialogDescriptionId}
          className="mt-3 text-sm leading-6 text-gray-600 dark:text-stone-400"
        >
          {hasActions ? "Where would you like to go?" : "Links coming soon."}
        </p>

        {project.details?.length ? (
          <ul className="mt-4 list-disc space-y-2 pl-4 text-sm leading-6 text-gray-700 dark:text-stone-300">
            {project.details.map((detail) => <li key={detail}>{detail}</li>)}
          </ul>
        ) : null}

        <div className="mt-6 grid gap-3">
          {actions.map((action) => (
            <a
              key={action.label}
              href={action.href}
              target="_blank"
              rel="noreferrer"
              className="border-2 border-[#211d1e] bg-[#f7f7f4] px-4 py-3 text-center text-sm font-bold text-[#211d1e] shadow-[3px_3px_0_rgba(33,29,30,0.16)] transition-transform hover:-translate-y-0.5 hover:border-[#782f40] hover:text-[#782f40] focus:outline-none focus:ring-2 focus:ring-[#782f40] focus:ring-offset-4 dark:border-stone-200 dark:bg-[#111113] dark:text-stone-100 dark:hover:border-[#ceb888] dark:hover:text-[#ceb888] dark:focus:ring-[#ceb888] dark:focus:ring-offset-[#18181b]"
            >
              {action.label}
            </a>
          ))}
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-transparent px-4 py-3 text-sm font-semibold text-gray-600 transition-transform hover:bg-gray-100 hover:text-[#211d1e] focus:outline-none focus:ring-2 focus:ring-[#782f40] focus:ring-offset-4 dark:text-stone-400 dark:hover:bg-white/5 dark:hover:text-stone-100 dark:focus:ring-[#ceb888] dark:focus:ring-offset-[#18181b]"
          >
            Cancel
          </button>
        </div>
      </div>
    </dialog>,
    document.body,
  );
}
