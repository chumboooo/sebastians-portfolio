import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Hero } from "@/components/Hero";
import { Highlights } from "@/components/Highlights";
import { Navigation } from "@/components/Navigation";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Highlights />
        <Experience />
        <About />
        <Contact />
      </main>
    </>
  );
}
