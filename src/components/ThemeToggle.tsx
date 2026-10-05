"use client";

import { useSyncExternalStore } from "react";

type Theme = "light" | "dark";

function getPreferredTheme(): Theme {
  if (typeof window === "undefined") {
    return "light";
  }

  try {
    const stored = window.localStorage.getItem("theme");
    if (stored === "light" || stored === "dark") return stored;
  } catch { /* Theme switching still works when storage is unavailable. */ }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
  document.documentElement.style.colorScheme = theme;
}

function subscribeToTheme(callback: () => void) {
  function syncPreferredTheme() {
    applyTheme(getPreferredTheme());
    callback();
  }
  function onStorage(event: StorageEvent) {
    if (event.key === "theme" || event.key === null) syncPreferredTheme();
  }
  const media = window.matchMedia("(prefers-color-scheme: dark)");
  media.addEventListener("change", syncPreferredTheme);
  window.addEventListener("storage", onStorage);
  window.addEventListener("theme-change", callback);

  return () => {
    media.removeEventListener("change", syncPreferredTheme);
    window.removeEventListener("storage", onStorage);
    window.removeEventListener("theme-change", callback);
  };
}

function getThemeSnapshot(): Theme | null {
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
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
    try {
      window.localStorage.setItem("theme", nextTheme);
    } catch { /* Use the current theme for this tab without persisting it. */ }
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
      className="font-accent inline-flex h-11 min-w-20 items-center justify-center gap-2 border border-[#211d1e]/50 bg-white px-3 text-xs text-[#211d1e] hover:border-[#782f40] hover:text-[#782f40] focus:outline-none focus:ring-2 focus:ring-[#782f40] focus:ring-offset-4 dark:border-white/30 dark:bg-[#18181b] dark:text-stone-100 dark:hover:border-[#ceb888] dark:hover:text-[#ceb888] dark:focus:ring-[#ceb888] dark:focus:ring-offset-[#101012]"
      aria-label={ariaLabel}
      onClick={toggleTheme}
    >
      <span>{label}</span>
    </button>
  );
}
