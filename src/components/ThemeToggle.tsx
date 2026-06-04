"use client";

import { useSyncExternalStore } from "react";

type Theme = "light" | "dark";

function getPreferredTheme(): Theme {
  if (typeof window === "undefined") {
    return "light";
  }

  const stored = window.localStorage.getItem("theme");
  if (stored === "light" || stored === "dark") {
    return stored;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
  document.documentElement.style.colorScheme = theme;
}

function subscribeToTheme(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener("theme-change", callback);

  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener("theme-change", callback);
  };
}

function getThemeSnapshot(): Theme | null {
  return getPreferredTheme();
}

function getServerThemeSnapshot(): Theme | null {
  return null;
}

export function ThemeToggle() {
  const theme = useSyncExternalStore(
    subscribeToTheme,
    getThemeSnapshot,
    getServerThemeSnapshot,
  );

  function toggleTheme() {
    const activeTheme = theme ?? getPreferredTheme();
    const nextTheme = activeTheme === "dark" ? "light" : "dark";
    window.localStorage.setItem("theme", nextTheme);
    applyTheme(nextTheme);
    window.dispatchEvent(new Event("theme-change"));
  }

  const label = theme ? (theme === "dark" ? "Dark" : "Light") : "Theme";
  const ariaLabel = theme
    ? `Switch to ${theme === "dark" ? "light" : "dark"} mode`
    : "Toggle color theme";

  return (
    <button
      type="button"
      className="inline-flex h-10 items-center gap-2 rounded-full border border-gray-200 bg-white px-3 text-sm font-semibold text-[#211d1e] transition hover:border-[#782f40] hover:text-[#782f40] focus:outline-none focus:ring-2 focus:ring-[#782f40] focus:ring-offset-4 dark:border-white/15 dark:bg-[#18181b] dark:text-stone-100 dark:hover:border-[#ceb888] dark:hover:text-[#ceb888] dark:focus:ring-[#ceb888] dark:focus:ring-offset-[#101012]"
      aria-label={ariaLabel}
      onClick={toggleTheme}
    >
      <span>{label}</span>
    </button>
  );
}
