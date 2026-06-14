import { ChapterLabel } from "@/components/ChapterLabel";
import { MangaCard } from "@/components/MangaCard";
import { MarginSticker } from "@/components/MarginSticker";
import { site } from "@/data/site";
import { RevealOnScroll } from "@/components/RevealOnScroll";

type ContactIcon = "email" | "linkedin" | "github";

const contactLinks = [
  { label: "Email", href: site.links.email, icon: "email" },
  { label: "LinkedIn", href: site.links.linkedin, icon: "linkedin" },
  { label: "GitHub", href: site.links.github, icon: "github" },
] satisfies { label: string; href: string; icon: ContactIcon }[];

function ContactLinkIcon({ icon }: { icon: ContactIcon }) {
  if (icon === "email") {
    return (
      <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="none">
        <path
          d="M4.5 6.75h15v10.5h-15V6.75Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path
          d="m5.25 7.5 6.75 5.25L18.75 7.5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (icon === "linkedin") {
    return (
      <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M6.94 8.98H3.88V20h3.06V8.98ZM5.41 4A1.77 1.77 0 1 0 5.4 7.54 1.77 1.77 0 0 0 5.41 4ZM20.12 13.98c0-3.02-1.61-4.42-3.76-4.42a3.25 3.25 0 0 0-2.94 1.62h-.04v-1.4h-2.93V20h3.05v-5.06c0-1.33.25-2.62 1.9-2.62 1.63 0 1.65 1.52 1.65 2.7V20h3.06v-6.02Z" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
      <path
        fillRule="evenodd"
        d="M12 3.5a8.5 8.5 0 0 0-2.69 16.56c.43.08.59-.18.59-.41v-1.49c-2.4.52-2.9-1.03-2.9-1.03-.39-.99-.95-1.25-.95-1.25-.78-.53.06-.52.06-.52.86.06 1.31.88 1.31.88.76 1.3 2 1.93 2.49.71.08-.55.3-.93.54-1.15-1.91-.22-3.92-.96-3.92-4.25 0-.94.34-1.7.88-2.3-.09-.22-.38-1.1.08-2.27 0 0 .72-.23 2.34.88A8.05 8.05 0 0 1 12 7.17c.72 0 1.45.1 2.13.29 1.62-1.11 2.33-.88 2.33-.88.47 1.17.18 2.05.09 2.27.55.6.88 1.36.88 2.3 0 3.3-2.01 4.03-3.93 4.24.31.27.58.79.58 1.6v2.36c0 .23.16.5.59.41A8.5 8.5 0 0 0 12 3.5Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function isExternalLink(href: string) {
  return href.startsWith("http");
}

export function Contact() {
  return (
    <section className="relative isolate flex min-h-[58vh] scroll-mt-28 items-center overflow-hidden px-5 py-20 sm:px-6 sm:py-24 lg:px-8" id="contact">
      <MarginSticker variant="sail" className="left-6 top-24 -rotate-3" />
      <RevealOnScroll className="relative z-10 mx-auto w-full max-w-4xl">
        <ChapterLabel chapter="06" title="Contact" className="justify-center" />
        <MangaCard className="speed-lines p-6 text-center sm:p-8 lg:p-10">
        <div className="mx-auto max-w-3xl">
          <p className="text-base text-gray-600 dark:text-stone-400">
            Reach out through email, LinkedIn, or GitHub.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={isExternalLink(link.href) ? "_blank" : undefined}
                rel={isExternalLink(link.href) ? "noreferrer" : undefined}
                className="group inline-flex min-w-36 items-center justify-center gap-3 border-2 border-[#211d1e] bg-[#fffefa] px-5 py-3 text-sm font-bold text-[#211d1e] shadow-[3px_3px_0_rgba(33,29,30,0.18)] transition hover:-translate-y-0.5 hover:border-[#782f40] hover:text-[#782f40] hover:shadow-[5px_5px_0_rgba(120,47,64,0.2)] focus:outline-none focus:ring-2 focus:ring-[#782f40] focus:ring-offset-4 dark:border-stone-200 dark:bg-[#111113] dark:text-stone-100 dark:hover:border-[#ceb888] dark:hover:text-[#ceb888] dark:hover:shadow-[5px_5px_0_rgba(206,184,136,0.2)] dark:focus:ring-[#ceb888] dark:focus:ring-offset-[#101012]"
              >
                <ContactLinkIcon icon={link.icon} />
                <span>{link.label}</span>
              </a>
            ))}
        </div>
        </MangaCard>
      </RevealOnScroll>
    </section>
  );
}
