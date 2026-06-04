import Image from "next/image";
import { site } from "@/data/site";
import { RevealOnScroll } from "@/components/RevealOnScroll";

export function Highlights() {
  const [presentationImage, planningImage] = site.images.hackathon;

  return (
    <section className="relative isolate scroll-mt-28 px-5 py-24 sm:px-6 sm:py-32 lg:px-8" id="highlights">
      <div className="mx-auto max-w-6xl">
        <RevealOnScroll className="overflow-hidden rounded-[1.75rem] border border-gray-200 bg-white shadow-sm dark:border-white/10 dark:bg-[#18181b]">
          <div className="mx-auto max-w-3xl px-6 pb-8 pt-8 text-center sm:px-8 sm:pt-10 lg:px-10">
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-[#782f40] dark:text-[#ceb888]">
              Awards
            </p>
            {site.highlights.map((highlight) => (
              <article key={highlight.title}>
                <h2 className="text-3xl font-semibold tracking-tight text-[#211d1e] dark:text-stone-50 sm:text-4xl">
                  NextEra Energy Hackathon &mdash; 3rd Place
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-gray-700 dark:text-stone-300 sm:text-lg">
                  {highlight.description}
                </p>
              </article>
            ))}
          </div>

          <div className="border-t border-gray-200 bg-gray-50 p-4 dark:border-white/10 dark:bg-[#121214] sm:p-5 lg:p-6">
            <div className="grid gap-4">
              {presentationImage ? (
                <figure
                  className="overflow-hidden rounded-2xl border border-gray-200 bg-white dark:border-white/10 dark:bg-[#18181b]"
                >
                  <div className="relative aspect-[16/10] lg:aspect-[16/9]">
                    <Image
                      src={presentationImage.src}
                      alt={presentationImage.alt}
                      fill
                      sizes="(min-width: 1024px) 1100px, 100vw"
                      className="object-contain p-2"
                    />
                  </div>
                  <figcaption className="border-t border-gray-200/80 px-4 py-2.5 text-xs font-bold uppercase tracking-[0.16em] text-gray-500 dark:border-white/10 dark:text-stone-400">
                    Presentation
                  </figcaption>
                </figure>
              ) : null}

              {planningImage ? (
                <figure className="mx-auto w-full max-w-4xl overflow-hidden rounded-2xl border border-gray-200 bg-white dark:border-white/10 dark:bg-[#18181b]">
                  <div className="relative aspect-[16/9]">
                    <Image
                      src={planningImage.src}
                      alt={planningImage.alt}
                      fill
                      sizes="(min-width: 1024px) 860px, 100vw"
                      className="object-contain p-2 sm:p-3"
                    />
                  </div>
                  <figcaption className="border-t border-gray-200/80 px-4 py-2.5 text-xs font-bold uppercase tracking-[0.16em] text-gray-500 dark:border-white/10 dark:text-stone-400">
                    Planning / Whiteboard
                  </figcaption>
                </figure>
              ) : null}
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
