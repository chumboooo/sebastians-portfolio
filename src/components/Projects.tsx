import { site } from "@/data/site";
import { ChapterLabel } from "@/components/ChapterLabel";
import { HalftoneBackground } from "@/components/HalftoneBackground";
import { ProjectCard } from "@/components/ProjectCard";
import { RevealOnScroll } from "@/components/RevealOnScroll";

export function Projects() {
  return (
    <section className="relative isolate scroll-mt-28 overflow-hidden px-3 py-24 sm:px-4 sm:py-32 lg:px-5" id="projects">
      <HalftoneBackground className="-left-48 top-24 h-96 w-96 -rotate-12 opacity-60" />
      <div className="relative z-10 mx-auto w-full max-w-[95vw]">
        <RevealOnScroll>
          <ChapterLabel chapter="01" title="Featured Work" />
        </RevealOnScroll>
        <div className="grid min-w-0 gap-5 md:grid-cols-2 2xl:grid-cols-3">
          {site.projects.map((project, index) => (
            <RevealOnScroll
              key={project.name}
              className="min-w-0"
              delay={index * 30}
              variant="panel"
            >
              <ProjectCard project={project} index={index} />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
