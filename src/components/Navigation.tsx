"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/data/site";
import { ThemeToggle } from "@/components/ThemeToggle";

const navItems = site.nav.filter((item) => item.label !== "Home");

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  function resolveHref(href: string) {
    return pathname === "/" || !href.startsWith("#") ? href : `/${href}`;
  }

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header className="sticky top-0 z-50 px-4 py-4 sm:px-6 lg:px-8">
      <nav
        className="mx-auto grid max-w-6xl grid-cols-[1fr_auto] items-center gap-3 border-2 border-[#211d1e] bg-[#fffefa]/92 px-4 py-2.5 shadow-[4px_4px_0_rgba(33,29,30,0.18)] backdrop-blur dark:border-stone-200 dark:bg-[#171719]/92 dark:shadow-[4px_4px_0_rgba(206,184,136,0.18)] md:grid-cols-[1fr_auto_1fr]"
        aria-label="Primary navigation"
      >
        <div className="hidden md:block" aria-hidden="true" />

        <div className="hidden items-center justify-center gap-2 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={resolveHref(item.href)}
              className="sketch-link px-3 py-2 text-sm font-semibold text-gray-700 transition hover:text-[#782f40] focus:outline-none focus:ring-2 focus:ring-[#782f40] focus:ring-offset-4 dark:text-stone-300 dark:hover:text-[#ceb888] dark:focus:ring-[#ceb888] dark:focus:ring-offset-[#101012]"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="col-start-2 flex items-center justify-end gap-2 md:col-start-3">
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center border border-[#211d1e]/50 bg-white text-[#211d1e] transition hover:border-[#782f40] focus:outline-none focus:ring-2 focus:ring-[#782f40] focus:ring-offset-4 dark:border-white/30 dark:bg-[#18181b] dark:text-stone-100 dark:hover:border-[#ceb888] dark:focus:ring-[#ceb888] dark:focus:ring-offset-[#101012] md:hidden"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            aria-controls="menu-drawer"
            onClick={() => setIsOpen((value) => !value)}
          >
            <span className="sr-only">{isOpen ? "Close menu" : "Open menu"}</span>
            <span className="flex w-4 flex-col gap-1.5" aria-hidden="true">
              <span
                className={`h-0.5 rounded-full bg-current transition ${
                  isOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`h-0.5 rounded-full bg-current transition ${isOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`h-0.5 rounded-full bg-current transition ${
                  isOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-[-1] bg-black/30 transition md:hidden ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden="true"
        onClick={() => setIsOpen(false)}
      />

      <div
        id="menu-drawer"
        aria-hidden={!isOpen}
        className={`absolute right-4 top-20 w-[min(calc(100vw-2rem),24rem)] border-2 border-[#211d1e] bg-[#fffefa] p-4 shadow-[5px_5px_0_rgba(33,29,30,0.18)] transition dark:border-stone-200 dark:bg-[#18181b] dark:shadow-[5px_5px_0_rgba(206,184,136,0.18)] sm:right-6 md:hidden ${
          isOpen
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        }`}
      >
        <div className="grid gap-1">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={resolveHref(item.href)}
              className="border-b border-[#211d1e]/15 px-4 py-3 text-base font-semibold text-[#211d1e] transition last:border-b-0 hover:bg-[#782f40]/5 hover:text-[#782f40] focus:outline-none focus:ring-2 focus:ring-[#782f40] dark:border-white/10 dark:text-stone-100 dark:hover:bg-[#ceb888]/10 dark:hover:text-[#ceb888] dark:focus:ring-[#ceb888]"
              onClick={() => setIsOpen(false)}
              tabIndex={isOpen ? undefined : -1}
            >
              {item.label}
            </a>
          ))}
          {pathname !== "/experience" ? (
            <Link
              href="/experience"
              className="mt-2 border-2 border-[#782f40] px-4 py-3 text-base font-semibold text-[#782f40] transition hover:bg-[#782f40] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#782f40] focus:ring-offset-2 dark:border-[#ceb888] dark:text-[#ceb888] dark:hover:bg-[#ceb888] dark:hover:text-[#211d1e] dark:focus:ring-[#ceb888]"
              onClick={() => setIsOpen(false)}
              tabIndex={isOpen ? undefined : -1}
            >
              More Experience
            </Link>
          ) : (
            <Link
              href="/#experience"
              className="mt-2 border-2 border-[#782f40] px-4 py-3 text-base font-semibold text-[#782f40] transition hover:bg-[#782f40] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#782f40] focus:ring-offset-2 dark:border-[#ceb888] dark:text-[#ceb888] dark:hover:bg-[#ceb888] dark:hover:text-[#211d1e] dark:focus:ring-[#ceb888]"
              onClick={() => setIsOpen(false)}
              tabIndex={isOpen ? undefined : -1}
            >
              Portfolio Home
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
