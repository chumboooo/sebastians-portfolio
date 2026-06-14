import Image from "next/image";
import { ChapterLabel } from "@/components/ChapterLabel";
import { MangaCard } from "@/components/MangaCard";
import { MarginSticker } from "@/components/MarginSticker";
import { site } from "@/data/site";
import { RevealOnScroll } from "@/components/RevealOnScroll";

export function Highlights() {
  const [presentationImage, planningImage] = site.images.hackathon;

  return (
    <section className="relative isolate scroll-mt-28 px-5 py-24 sm:px-6 sm:py-32 lg:px-8" id="highlights">
      <MarginSticker variant="adventure" className="left-5 top-40 -rotate-6" />
      <MarginSticker variant="chullo" className="bottom-32 right-5 rotate-3" />
      <div className="relative z-10 mx-auto max-w-6xl">
        <RevealOnScroll>
          <ChapterLabel chapter="03" title="Awards" />
        </RevealOnScroll>

        <MangaCard className="overflow-hidden">
          <div className="speed-lines mx-auto px-6 pb-8 pt-8 text-center sm:px-8 sm:pt-10 lg:px-10">
            {site.highlights.map((highlight) => (
              <article key={highlight.title}>
                <p className="font-accent mb-4 text-xs uppercase text-[#782f40] dark:text-[#ceb888]">
                  Achievement unlocked
                </p>
                <h3 className="font-accent text-3xl text-[#211d1e] dark:text-stone-50 sm:text-4xl">
                  NextEra Energy Hackathon &mdash; 3rd Place
                </h3>
                <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-gray-700 dark:text-stone-300 sm:text-lg">
                  {highlight.description}
                </p>
              </article>
            ))}
          </div>

          <div className="border-t-2 border-[#211d1e] bg-[#efefeb] p-4 dark:border-stone-200 dark:bg-[#121214] sm:p-5 lg:p-6">
            <div className="grid gap-4">
              {presentationImage ? (
                <figure
                  className="overflow-hidden border border-[#211d1e]/40 bg-white dark:border-white/25 dark:bg-[#18181b]"
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
                  <figcaption className="font-accent border-t border-[#211d1e]/30 px-4 py-2.5 text-xs uppercase text-gray-600 dark:border-white/20 dark:text-stone-400">
                    Presentation
                  </figcaption>
                </figure>
              ) : null}

              {planningImage ? (
                <figure className="mx-auto w-full max-w-4xl overflow-hidden border border-[#211d1e]/40 bg-white dark:border-white/25 dark:bg-[#18181b]">
                  <div className="relative aspect-[16/9]">
                    <Image
                      src={planningImage.src}
                      alt={planningImage.alt}
                      fill
                      sizes="(min-width: 1024px) 860px, 100vw"
                      className="object-contain p-2 sm:p-3"
                    />
                  </div>
                  <figcaption className="font-accent border-t border-[#211d1e]/30 px-4 py-2.5 text-xs uppercase text-gray-600 dark:border-white/20 dark:text-stone-400">
                    Planning / Whiteboard
                  </figcaption>
                </figure>
              ) : null}
            </div>
          </div>
        </MangaCard>
      </div>
    </section>
  );
}
