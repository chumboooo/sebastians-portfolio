"use client";

import Image from "next/image";
import { useCallback, useRef, useState } from "react";
import { ProjectLinkModal } from "@/components/ProjectLinkModal";
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
  ].filter((link): link is { label: string; href: string } => Boolean(link.href && link.href !== "#"));
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
        className="group overflow-hidden rounded-[1.5rem] border border-gray-200 bg-white text-left shadow-sm outline-none transition duration-200 hover:-translate-y-1 hover:border-[#782f40]/40 hover:shadow-md focus-visible:ring-2 focus-visible:ring-[#782f40] focus-visible:ring-offset-4 dark:border-white/10 dark:bg-[#18181b] dark:hover:border-[#ceb888]/45 dark:focus-visible:ring-[#ceb888] dark:focus-visible:ring-offset-[#101012]"
      >
        <div className="border-b border-gray-200 bg-gray-50 p-3 transition-colors group-hover:bg-white dark:border-white/10 dark:bg-[#121214] dark:group-hover:bg-[#151517] sm:p-4 lg:p-5">
          <div className="relative grid aspect-[16/9] place-items-center overflow-hidden rounded-[1.15rem] border border-gray-200 bg-white dark:border-white/10 dark:bg-[#18181b]">
            {project.screenshot?.src ? (
              <Image
                src={project.screenshot.src}
                alt={project.screenshot.alt}
                fill
                sizes="(min-width: 1024px) 1100px, 100vw"
                className="object-contain p-2 transition duration-200 group-hover:scale-[1.01] sm:p-3"
                priority={index === 0}
              />
            ) : (
              <div className="px-6 py-10 text-center">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#782f40] dark:text-[#ceb888]">
                  Screenshot coming soon
                </p>
                <p className="mt-3 max-w-sm text-sm leading-6 text-gray-600 dark:text-stone-400">
                  Add a product screenshot later.
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="p-6 sm:p-8 lg:p-9">
          <div>
            <div className="flex items-center gap-3">
              <span className="text-sm font-bold text-[#782f40] dark:text-[#ceb888]">{`0${index + 1}`}</span>
              <span className="h-px flex-1 bg-gray-200 dark:bg-white/10" />
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-gray-500 dark:text-stone-400">
                {project.label}
              </span>
            </div>

            <h3 className="mt-6 text-3xl font-semibold tracking-tight text-[#211d1e] dark:text-stone-50 sm:text-4xl">
              {project.name}
            </h3>
            <p className="mt-4 max-w-3xl text-base leading-7 text-gray-700 dark:text-stone-300 sm:text-lg sm:leading-8">
              {project.description}
            </p>

            <p className="mt-5 max-w-3xl border-l-2 border-[#782f40]/35 pl-4 text-sm leading-6 text-gray-600 dark:border-[#ceb888]/45 dark:text-stone-400 sm:text-base sm:leading-7">
              {project.focus}
            </p>
          </div>

          <div className="mt-7">
            <div className="flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-gray-200 bg-gray-50 px-2.5 py-1 text-xs font-semibold text-gray-700 dark:border-white/10 dark:bg-[#101012] dark:text-stone-200"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-7">
              <span className="inline-flex rounded-full border border-[#782f40]/20 bg-[#782f40]/5 px-3 py-1.5 text-sm font-semibold text-[#782f40] transition group-hover:border-[#782f40]/40 group-hover:bg-[#782f40]/10 dark:border-[#ceb888]/25 dark:bg-[#ceb888]/10 dark:text-[#ceb888] dark:group-hover:border-[#ceb888]/45">
                {hasProjectLinks ? "View project" : "Links coming soon"}
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
