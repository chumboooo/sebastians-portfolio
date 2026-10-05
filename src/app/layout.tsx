import type { Metadata } from "next";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { IBM_Plex_Sans, RocknRoll_One } from "next/font/google";
import { site } from "@/data/site";
import "./globals.css";

const bodyFont = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const accentFont = RocknRoll_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-accent",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.links.portfolio),
  title: site.seo.title,
  description: site.seo.description,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.links.portfolio,
    siteName: site.seo.title,
    title: site.seo.title,
    description: site.seo.description,
  },
  twitter: {
    card: "summary_large_image",
    title: site.seo.title,
    description: site.seo.description,
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const themeScript = `
    (() => {
      let theme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      try {
        const stored = localStorage.getItem("theme");
        if (stored === "light" || stored === "dark") theme = stored;
      } catch {}
      document.documentElement.classList.toggle("dark", theme === "dark");
      document.documentElement.style.colorScheme = theme;
    })();
  `;

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script id="theme-init" strategy="beforeInteractive">
          {themeScript}
        </Script>
      </head>
      <body className={`${bodyFont.variable} ${accentFont.variable}`}>
        <a
          href="#main-content"
          className="fixed left-4 top-4 z-[100] -translate-y-24 rounded border-2 border-[#211d1e] bg-[#fffefa] px-4 py-3 font-semibold text-[#211d1e] focus:translate-y-0"
        >
          Skip to content
        </a>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
