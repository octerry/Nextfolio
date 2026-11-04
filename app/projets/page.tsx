"use client"

import SearchBar from "@/component/searchbar";
import ProjectCards from "@/component/project-cards";
import AdBanner from "@/component/ad-banner";

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <SearchBar/>
      <ProjectCards/> {/*> J'ai fait un composant pour le use client */}
      <AdBanner linkTo="https://www.youtube.com/watch?v=YAgJ9XugGBo" imgSrc="/fish.gif" label="Fish." />
    </main>
  );
}
