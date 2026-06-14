"use client";

import Image from "next/image";
import { useCallback, useRef, useState } from "react";
import { ProjectLinkModal } from "@/components/ProjectLinkModal";
import { SketchBadge } from "@/components/SketchBadge";
import type { Project } from "@/data/site";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const cardRef = useRef<HTMLElement | null>(null);
  const projectLinks = [
    { label: "View Code", href: project.githubUrl },
    { label: project.demoLabel ?? "Open Demo", href: project.demoUrl },
  ].filter((link): link is { label: string; href: string } =>
    Boolean(link.href && link.href !== "#"),
  );
  const hasProjectLinks = projectLinks.length > 0;

  const openProjectDialog = useCallback(() => {
    setIsOpen(true);
  }, []);

  const closeProjectDialog = useCallback(() => {
    setIsOpen(false);
  }, []);

  const handleCardKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openProjectDialog();
    }
  };

  return (
    <>
      <article
        ref={cardRef}
        role="button"
        tabIndex={0}
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        aria-label={`Open links for ${project.name}`}
        onClick={openProjectDialog}
        onKeyDown={handleCardKeyDown}
        className="manga-panel manga-project group flex h-full flex-col overflow-hidden text-left outline-none transition duration-200 hover:-translate-y-1 hover:shadow-[10px_10px_0_rgba(120,47,64,0.22)] focus-visible:ring-2 focus-visible:ring-[#782f40] focus-visible:ring-offset-4 dark:hover:shadow-[10px_10px_0_rgba(206,184,136,0.24)] dark:focus-visible:ring-[#ceb888] dark:focus-visible:ring-offset-[#101012]"
      >
        <div className="speed-lines relative border-b-2 border-[#211d1e] bg-[#efefeb] p-3 transition-colors dark:border-stone-200 dark:bg-[#121214]">
          <div className="relative grid aspect-[2/1] place-items-center overflow-hidden border border-[#211d1e]/35 bg-white dark:border-white/25 dark:bg-[#18181b]">
            {project.screenshot?.src ? (
              <Image
                src={project.screenshot.src}
                alt={project.screenshot.alt}
                fill
                sizes="(min-width: 1024px) 31vw, (min-width: 768px) 46vw, 100vw"
                className="object-contain p-2 transition duration-200 group-hover:scale-[1.015]"
              />
            ) : (
              <div className="px-6 py-8 text-center">
                <p className="text-xs font-bold uppercase text-[#782f40] dark:text-[#ceb888]">
                  Screenshot coming soon
                </p>
                <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-stone-400">
                  Add a product screenshot later.
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <div>
            <div className="flex items-center gap-3">
              <span className="font-accent text-xs text-[#782f40] dark:text-[#ceb888]">{`Panel 0${index + 1}`}</span>
              <span className="h-0.5 flex-1 bg-[#211d1e]/25 dark:bg-white/20" />
              <span className="font-accent text-[0.65rem] uppercase text-gray-600 dark:text-stone-400">
                {project.arcLabel}
              </span>
            </div>

            <p className="mt-4 text-xs font-bold uppercase text-[#782f40] dark:text-[#ceb888]">
              {project.label}
            </p>
            <h3 className="font-accent mt-2 text-2xl text-[#211d1e] dark:text-stone-50 sm:text-3xl">
              {project.name}
            </h3>
            <p className="mt-3 text-sm leading-6 text-gray-700 dark:text-stone-300 sm:text-base">
              {project.description}
            </p>

            <p className="mt-4 border-l-4 border-[#782f40]/65 pl-3 text-xs leading-5 text-gray-600 dark:border-[#ceb888]/65 dark:text-stone-400 sm:text-sm sm:leading-6">
              {project.focus}
            </p>
          </div>

          <div className="mt-auto pt-5">
            <div className="flex flex-wrap gap-1.5">
              {project.stack.map((item) => (
                <SketchBadge key={item} className="px-2 py-0.5 text-[0.68rem]">
                  {item}
                </SketchBadge>
              ))}
            </div>

            <div className="mt-5">
              <span className="font-accent inline-flex items-center gap-2 border-b-2 border-[#782f40] pb-1 text-xs text-[#782f40] transition group-hover:gap-3 dark:border-[#ceb888] dark:text-[#ceb888]">
                {hasProjectLinks ? "Open project links" : "Links coming soon"}
                <span aria-hidden="true">&rarr;</span>
              </span>
            </div>
          </div>
        </div>
      </article>

      {isOpen ? (
        <ProjectLinkModal
          project={project}
          actions={projectLinks}
          hasActions={hasProjectLinks}
          onClose={closeProjectDialog}
        />
      ) : null}
    </>
  );
}
