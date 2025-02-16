"use client";

import Header from "@/components/Header/Header";
import Hero from "@/components/Sections/Hero";
import MyWork from "@/components/Sections/MyWork";
import PortfolioGrid from "@/components/Sections/PortfolioGrid";

export default function Home() {
  return (
    <main>
      <Header />
      <section>
        <Hero />
      </section>
      <section>
        <MyWork />
      </section>
      <section>
        <PortfolioGrid />
      </section>
    </main>
  );
}
