import { site } from "@/data/site";
import { ProjectCard } from "@/components/ProjectCard";
import { RevealOnScroll } from "@/components/RevealOnScroll";

export function Projects() {
  return (
    <section className="relative isolate scroll-mt-28 px-5 py-24 sm:px-6 sm:py-32 lg:px-8" id="projects">
      <div className="mx-auto max-w-6xl">
        <RevealOnScroll>
          <h2 className="mb-10 text-3xl font-semibold tracking-tight text-[#211d1e] dark:text-stone-50 sm:mb-12 sm:text-5xl">
            Featured Work
          </h2>
        </RevealOnScroll>
        <div className="grid gap-8 sm:gap-10">
          {site.projects.map((project, index) => (
            <RevealOnScroll key={project.name} delay={index * 30}>
              <ProjectCard project={project} index={index} />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
