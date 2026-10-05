"use client";

import { type MouseEvent, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/data/site";
import { ThemeToggle } from "@/components/ThemeToggle";

const navItems = site.nav.filter((item) => item.label !== "Home");

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  function resolveHref(href: string) {
    return pathname === "/" || !href.startsWith("#") ? href : `/${href}`;
  }

  useEffect(() => {
    if (!isOpen) return;

    menuRef.current?.querySelector<HTMLAnchorElement>("a[href]")?.focus();
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
        menuButtonRef.current?.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1024px)");
    const closeOnDesktop = () => {
      if (desktop.matches) setIsOpen(false);
    };
    desktop.addEventListener("change", closeOnDesktop);
    return () => desktop.removeEventListener("change", closeOnDesktop);
  }, []);

  useEffect(() => {
    if (pathname !== "/" || !("IntersectionObserver" in window)) {
      return;
    }

    const hero = document.getElementById("home");
    if (!hero) {
      return;
    }

    let heroHasLeftViewport = hero.getBoundingClientRect().bottom <= 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          heroHasLeftViewport = true;
          return;
        }

        if (heroHasLeftViewport && window.location.hash) {
          window.history.replaceState(
            null,
            "",
            `${window.location.pathname}${window.location.search}`,
          );
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, [pathname]);

  function handleSectionClick(
    event: MouseEvent<HTMLAnchorElement>,
    href: string,
  ) {
    if (
      pathname !== "/" || !href.startsWith("#") ||
      event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey
    ) {
      return;
    }

    const target = document.querySelector<HTMLElement>(href);
    if (!target) {
      return;
    }

    event.preventDefault();
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    target.scrollIntoView({
      behavior: prefersReducedMotion ? "auto" : "smooth",
      block: "start",
    });
    window.history.replaceState(
      null,
      "",
      `${window.location.pathname}${window.location.search}`,
    );
  }

  return (
    <header className="sticky top-0 z-50 px-4 py-4 sm:px-6 lg:px-8">
      <nav
        className="mx-auto grid max-w-6xl grid-cols-[1fr_auto] items-center gap-3 border-2 border-[#211d1e] bg-[#fffefa]/92 px-4 py-2.5 shadow-[4px_4px_0_rgba(33,29,30,0.18)] backdrop-blur dark:border-stone-200 dark:bg-[#171719]/92 dark:shadow-[4px_4px_0_rgba(206,184,136,0.18)] lg:grid-cols-[1fr_auto_1fr]"
        aria-label="Primary navigation"
      >
        <div className="hidden lg:block" aria-hidden="true" />

        <div className="hidden items-center justify-center gap-2 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={resolveHref(item.href)}
              target={item.href === site.links.resume || item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href === site.links.resume || item.href.startsWith("http") ? "noreferrer" : undefined}
              onClick={(event) => handleSectionClick(event, item.href)}
              className="sketch-link rounded-full px-3 py-2 text-sm font-semibold text-gray-700 hover:bg-[#782f40]/5 hover:text-[#782f40] focus:outline-none focus:ring-2 focus:ring-[#782f40] focus:ring-offset-4 dark:text-stone-300 dark:hover:bg-[#ceb888]/10 dark:hover:text-[#ceb888] dark:focus:ring-[#ceb888] dark:focus:ring-offset-[#101012]"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="col-start-2 flex items-center justify-end gap-2 lg:col-start-3">
          <ThemeToggle />
          <button
            ref={menuButtonRef}
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center border border-[#211d1e]/50 bg-white text-[#211d1e] hover:border-[#782f40] focus:outline-none focus:ring-2 focus:ring-[#782f40] focus:ring-offset-4 dark:border-white/30 dark:bg-[#18181b] dark:text-stone-100 dark:hover:border-[#ceb888] dark:focus:ring-[#ceb888] dark:focus:ring-offset-[#101012] lg:hidden"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            aria-controls="menu-drawer"
            onClick={() => setIsOpen((value) => !value)}
          >
            <span className="sr-only">{isOpen ? "Close menu" : "Open menu"}</span>
            <span className="flex w-4 flex-col gap-1.5" aria-hidden="true">
              <span
                className={`h-0.5 rounded-full bg-current transition-transform ${
                  isOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`h-0.5 rounded-full bg-current transition-opacity ${isOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`h-0.5 rounded-full bg-current transition-transform ${
                  isOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-[-1] bg-black/30 transition-opacity lg:hidden ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden="true"
        onClick={() => {
          setIsOpen(false);
          menuButtonRef.current?.focus();
        }}
      />

      <div
        ref={menuRef}
        id="menu-drawer"
        aria-hidden={!isOpen}
        inert={!isOpen}
        onBlur={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget) && event.relatedTarget !== menuButtonRef.current) {
            setIsOpen(false);
          }
        }}
        className={`absolute right-4 top-24 max-h-[calc(100dvh-7rem)] w-[min(calc(100vw-2rem),24rem)] overflow-y-auto border-2 border-[#211d1e] bg-[#fffefa] p-4 shadow-[5px_5px_0_rgba(33,29,30,0.18)] transition-[opacity,transform] dark:border-stone-200 dark:bg-[#18181b] dark:shadow-[5px_5px_0_rgba(206,184,136,0.18)] sm:right-6 lg:hidden ${
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
              target={item.href === site.links.resume || item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href === site.links.resume || item.href.startsWith("http") ? "noreferrer" : undefined}
              className="border-b border-[#211d1e]/15 px-4 py-3 text-base font-semibold text-[#211d1e] transition-transform last:border-b-0 hover:bg-[#782f40]/5 hover:text-[#782f40] focus:outline-none focus:ring-2 focus:ring-[#782f40] dark:border-white/10 dark:text-stone-100 dark:hover:bg-[#ceb888]/10 dark:hover:text-[#ceb888] dark:focus:ring-[#ceb888]"
              onClick={(event) => {
                if (item.href.startsWith("#")) menuButtonRef.current?.focus();
                handleSectionClick(event, item.href);
                setIsOpen(false);
              }}
              tabIndex={isOpen ? undefined : -1}
            >
              {item.label}
            </a>
          ))}
          {pathname !== "/experience" ? (
            <Link
              href="/experience"
              className="mt-2 border-2 border-[#782f40] px-4 py-3 text-base font-semibold text-[#782f40] transition-transform hover:bg-[#782f40] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#782f40] focus:ring-offset-2 dark:border-[#ceb888] dark:text-[#ceb888] dark:hover:bg-[#ceb888] dark:hover:text-[#211d1e] dark:focus:ring-[#ceb888]"
              onClick={() => setIsOpen(false)}
              tabIndex={isOpen ? undefined : -1}
            >
              More Experience
            </Link>
          ) : (
            <Link
              href="/#experience"
              className="mt-2 border-2 border-[#782f40] px-4 py-3 text-base font-semibold text-[#782f40] transition-transform hover:bg-[#782f40] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#782f40] focus:ring-offset-2 dark:border-[#ceb888] dark:text-[#ceb888] dark:hover:bg-[#ceb888] dark:hover:text-[#211d1e] dark:focus:ring-[#ceb888]"
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
