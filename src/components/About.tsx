import Image from "next/image";
import { ChapterLabel } from "@/components/ChapterLabel";
import { MangaCard } from "@/components/MangaCard";
import { MarginSticker } from "@/components/MarginSticker";
import { SketchBadge } from "@/components/SketchBadge";
import { site } from "@/data/site";
import { RevealOnScroll } from "@/components/RevealOnScroll";

export function About() {
  const imagesByLabel = Object.fromEntries(
    site.images.about.map((image) => [image.label, image]),
  );
  const friends = imagesByLabel.Friends;
  const chewie = imagesByLabel.Chewie;
  const art = imagesByLabel.Art;

  return (
    <section className="relative isolate scroll-mt-28 overflow-hidden px-5 py-24 sm:px-6 sm:py-32 lg:px-8" id="about">
      <MarginSticker variant="llama" className="left-5 top-1/4 -rotate-3" />
      <MarginSticker variant="sun" className="bottom-24 right-5 rotate-3" />
      <div className="relative z-10 mx-auto max-w-6xl">
        <RevealOnScroll variant="panel">
          <ChapterLabel chapter="05" title="About" />
          <MangaCard className="overflow-hidden p-6 sm:p-8 lg:p-10">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="max-w-2xl">
              <div className="grid gap-5 text-base leading-8 text-gray-700 dark:text-stone-300 lg:text-[1.03rem]">
                {site.about.split("\n\n").map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-7 flex flex-wrap gap-2.5" aria-label="Interests and focus areas">
                {site.profileTags.map((tag) => (
                  <SketchBadge key={tag}>{tag}</SketchBadge>
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {friends ? (
                <div
                  className="overflow-hidden border-2 border-[#211d1e] bg-[#efefeb] dark:border-stone-200 dark:bg-[#121214] sm:col-span-2"
                >
                  <div className="relative aspect-[16/9] bg-white dark:bg-[#18181b]">
                    <Image
                      src={friends.src}
                      alt={friends.alt}
                      fill
                      sizes="(min-width: 1024px) 520px, (min-width: 640px) 80vw, 100vw"
                      className="object-contain p-2"
                    />
                  </div>
                  <p className="font-accent border-t-2 border-[#211d1e] px-4 py-2.5 text-xs uppercase text-gray-600 dark:border-stone-200 dark:text-stone-400">
                    {friends.label}
                  </p>
                </div>
              ) : null}

              {[chewie, art].filter(Boolean).map((image) => (
                <div
                  key={image!.label}
                  className="overflow-hidden border-2 border-[#211d1e] bg-[#efefeb] dark:border-stone-200 dark:bg-[#121214]"
                >
                  <div className="relative aspect-[4/5] bg-white dark:bg-[#18181b]">
                    <Image
                      src={image!.src}
                      alt={image!.alt}
                      fill
                      sizes="(min-width: 1024px) 250px, (min-width: 640px) 40vw, 100vw"
                      className="object-contain p-2"
                    />
                  </div>
                  <p className="font-accent border-t-2 border-[#211d1e] px-4 py-2.5 text-xs uppercase text-gray-600 dark:border-stone-200 dark:text-stone-400">
                    {image!.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
          </MangaCard>
        </RevealOnScroll>
      </div>
    </section>
  );
}
