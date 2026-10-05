import type { Metadata } from "next";
import { site } from "@/data/site";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Hero } from "@/components/Hero";
import { Highlights } from "@/components/Highlights";
import { Navigation } from "@/components/Navigation";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";

export const metadata: Metadata = {
  alternates: { canonical: site.links.portfolio },
};

export default function Home() {
  return (
    <>
      <Navigation />
      <main id="main-content" tabIndex={-1} className="outline-none">
        <Hero />
        <Projects />
        <Experience />
        <Skills />
        <Highlights />
        <About />
        <Contact />
      </main>
    </>
  );
}
