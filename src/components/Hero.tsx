import { PortfolioGuide } from "@/components/PortfolioGuide";
import { site } from "@/data/site";

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
      className="relative isolate flex min-h-[86vh] scroll-mt-28 items-center overflow-hidden px-5 pb-24 pt-14 sm:min-h-[90vh] sm:px-6 sm:pb-32 sm:pt-20 lg:px-8"
      id="home"
    >
      <div className="relative z-10 mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,0.42fr)] lg:items-center">
        <div className="hero-main-panel relative">
          <div className="hero-enter hero-enter-name">
            <h1 className="font-accent max-w-5xl text-5xl leading-[1.04] text-[#211d1e] dark:text-stone-50 sm:text-7xl lg:text-8xl">
              <span className="hero-name-motion">{site.name}</span>
            </h1>
          </div>

          <div className="hero-enter hero-enter-role">
            <p className="hero-role-underline mt-7 max-w-3xl text-sm font-bold uppercase leading-6 text-[#782f40] dark:text-[#ceb888]">
              {site.role} <span aria-hidden="true">/</span>{" "}
              <span className="whitespace-nowrap">{site.graduation}</span>
            </p>
            <p className="mt-6 max-w-3xl border-l-4 border-[#782f40] pl-4 text-xl font-semibold leading-8 text-[#4f1f2a] dark:border-[#ceb888] dark:text-[#ceb888] sm:text-2xl">
              {site.focus}
            </p>
          </div>

          <div className="hero-enter hero-enter-actions mt-10 flex flex-wrap items-center gap-x-5 gap-y-3">
            {heroLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={isExternalLink(link.href) ? "_blank" : undefined}
                rel={isExternalLink(link.href) ? "noreferrer" : undefined}
                className={
                  link.primary
                    ? "hero-action-pop border-2 border-[#211d1e] bg-[#782f40] px-5 py-3 text-sm font-bold text-white shadow-[4px_4px_0_#211d1e] focus:outline-none focus:ring-2 focus:ring-[#782f40] focus:ring-offset-4 dark:border-stone-100 dark:bg-[#ceb888] dark:text-[#211d1e] dark:shadow-[4px_4px_0_rgba(244,241,237,0.72)] dark:focus:ring-[#ceb888] dark:focus:ring-offset-[#101012]"
                    : "hero-action-pop sketch-link py-2 text-sm font-bold text-[#211d1e] hover:text-[#782f40] focus:outline-none focus:ring-2 focus:ring-[#782f40] focus:ring-offset-4 dark:text-stone-100 dark:hover:text-[#ceb888] dark:focus:ring-[#ceb888] dark:focus:ring-offset-[#101012]"
                }
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="hero-enter hero-enter-guide">
          <div className="guide-idle">
            <PortfolioGuide callout={site.heroCallout} />
          </div>
        </div>
      </div>
    </section>
  );
}
