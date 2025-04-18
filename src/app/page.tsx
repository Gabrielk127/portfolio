"use client";

import Header from "@/components/layout/Header/Header";
import SectionTestimonials from "@/components/Sections/SectionTestimonials";
import SectionMyWork from "@/components/Sections/SectionMyWork";
import SectionExperience from "@/components/Sections/SectionExperience";
import SectionFreelance from "@/components/Sections/SectionFreelance";
import Footer from "@/components/layout/Footer";
import SectionHero from "@/components/Sections/SectionHero";
import SectionProjects from "@/components/Sections/SectionProjects";
import { useEffect, useState } from "react";
import { SectionCta } from "@/components/Sections/SectionCta";

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <main>
      <Header />
      <SectionHero />
      <SectionMyWork />
      <SectionCta />
      <SectionProjects />
      <SectionExperience />
      <SectionTestimonials />
      <SectionFreelance />
      <Footer />
    </main>
  );
}
