import { site } from "@/data/site";
import { RevealOnScroll } from "@/components/RevealOnScroll";

const heroLinks = [
  { label: "View Resume", href: site.links.resume, primary: true },
  { label: "GitHub", href: site.links.github },
  { label: "LinkedIn", href: site.links.linkedin },
  { label: "Email", href: site.links.email },
];

function isExternalLink(href: string) {
  return href.startsWith("http");
}

export function Hero() {
  return (
    <section
      className="flex min-h-[82vh] scroll-mt-28 items-center px-5 pb-24 pt-14 sm:min-h-[86vh] sm:px-6 sm:pb-32 sm:pt-20 lg:px-8"
      id="home"
    >
      <div className="mx-auto w-full max-w-6xl">
        <RevealOnScroll>
          <div className="mb-8 h-px w-24 bg-[#782f40] dark:bg-[#ceb888]" />
        </RevealOnScroll>

        <RevealOnScroll delay={40}>
          <p className="max-w-3xl text-sm font-bold uppercase tracking-[0.2em] text-[#782f40] dark:text-[#ceb888]">
            {site.role} · <span className="whitespace-nowrap">{site.graduation}</span>
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={80}>
          <h1 className="mt-6 max-w-5xl text-5xl font-semibold leading-[0.98] tracking-tight text-[#211d1e] dark:text-stone-50 sm:text-7xl lg:text-8xl">
            {site.name}
          </h1>
        </RevealOnScroll>

        <RevealOnScroll delay={120}>
          <p className="mt-6 max-w-3xl text-xl font-semibold leading-8 text-[#4f1f2a] dark:text-[#ceb888] sm:text-2xl">
            {site.focus}
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={160}>
          <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-3">
            {heroLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={isExternalLink(link.href) ? "_blank" : undefined}
                rel={isExternalLink(link.href) ? "noreferrer" : undefined}
                className={
                  link.primary
                    ? "rounded-full bg-[#782f40] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#4f1f2a] focus:outline-none focus:ring-2 focus:ring-[#782f40] focus:ring-offset-4 dark:focus:ring-offset-[#101012]"
                    : "border-b border-gray-300 pb-1 text-sm font-semibold text-[#211d1e] transition hover:border-[#782f40] hover:text-[#782f40] focus:outline-none focus:ring-2 focus:ring-[#782f40] focus:ring-offset-4 dark:border-white/20 dark:text-stone-100 dark:hover:border-[#ceb888] dark:hover:text-[#ceb888] dark:focus:ring-[#ceb888] dark:focus:ring-offset-[#101012]"
                }
              >
                {link.label}
              </a>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
