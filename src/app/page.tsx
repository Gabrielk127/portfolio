"use client";

import Header from "@/components/Header/Header";
import Testimonials from "@/components/Sections/Testimonials";
import Hero from "@/components/Sections/Hero";
import MyWork from "@/components/Sections/MyWork";
import ProfessionalExperience from "@/components/Sections/ProfessionalExperience";
import ProjectGrid from "@/components/Sections/ProjectCard";
import Freelance from "@/components/Sections/Freelance";
import Footer from "@/components/Header/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <section id="inicio">
        <Hero />
      </section>
      <section>
        <MyWork />
      </section>
      <section id="projetos">
        <ProjectGrid />
      </section>
      <section id="experiencia">
        <ProfessionalExperience />
      </section>
      <section id="depoimentos">
        <Testimonials />
      </section>
      <section id="freelance">
        <Freelance />
      </section>
      <Footer />
    </main>
  );
}
