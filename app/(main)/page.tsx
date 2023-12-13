"use client";

import { About } from "./_components/about/about";
import { Contact } from "./_components/contact/contact";
import { Hero } from "./_components/hero/Hero";
import { Links } from "./_components/links/links";
import { Navigation } from "./_components/navigation/navigation";
import { Project } from "./_components/project/project";
import { Skills } from "./_components/skills/Skills";

export default function Home() {
  return (
    <div className="w-screen flex items-center flex-col gap-2 pt-6">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Links />
      <Project />
      <Contact />
    </div>
  );
}
