import Image from "next/image";
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
    <section className="relative isolate scroll-mt-28 px-5 py-24 sm:px-6 sm:py-32 lg:px-8" id="about">
      <div className="mx-auto max-w-6xl">
        <RevealOnScroll className="rounded-[1.75rem] border border-gray-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-[#18181b] sm:p-8 lg:p-10">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-semibold tracking-tight text-[#211d1e] dark:text-stone-50 sm:text-5xl">
                About Me!
              </h2>
              <div className="mt-6 grid gap-5 text-base leading-8 text-gray-700 dark:text-stone-300 lg:text-[1.03rem]">
                {site.about.split("\n\n").map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {friends ? (
                <div
                  className="overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 dark:border-white/10 dark:bg-[#121214] sm:col-span-2"
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
                  <p className="border-t border-gray-200/80 px-4 py-2.5 text-xs font-bold uppercase tracking-[0.16em] text-gray-500 dark:border-white/10 dark:text-stone-400">
                    {friends.label}
                  </p>
                </div>
              ) : null}

              {[chewie, art].filter(Boolean).map((image) => (
                <div
                  key={image!.label}
                  className="overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 dark:border-white/10 dark:bg-[#121214]"
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
                  <p className="border-t border-gray-200/80 px-4 py-2.5 text-xs font-bold uppercase tracking-[0.16em] text-gray-500 dark:border-white/10 dark:text-stone-400">
                    {image!.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
