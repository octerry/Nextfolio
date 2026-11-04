import SearchBar from "@/component/searchbar";
import Hero from "@/component/hero";
import Button from "@/component/button";
import Section from "@/component/section";
import Card from "@/component/card";
import { CARDS } from "./DATA/cards";
import Accordion from "@/component/accordion";
import AdBanner from "@/component/ad-banner";

const QUESTIONS = [
  {id:1, label:"Comment on peut t'épouser ?", resume:"Je fais pas ça déso"},
  {id:2, label:"T'es sûr ?", resume:"T'es pas Ame"},
]

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-6">
      <SearchBar/>
      <Hero 
        title="Le goat du dev web" 
        text="Y'a pas de carabistouilles quand il t'embrouille" 
      />
      <Section title="Nos projets">
        <div className="grid gap-4 sm:grid-cols-3 my-3">
          {
            CARDS.slice(0,3).map((unit)=>(
              <Card key={unit.id} title={unit.title} category={unit.category} resume={unit.resume} url={unit.url} state={unit.state} />
            ))
          }
        </div>
        <Button href="/projets" label="Voir tous les projets" variante="contour" />
      </Section>
      <Section title="Questions fréquentes">
        <div>
          {
            QUESTIONS.map((unit)=>(
              <Accordion key={unit.id} label={unit.label} resume={unit.resume} />
            ))
          }
        </div>
      </Section>
      <AdBanner linkTo="https://playriftbound.com/fr-fr/" imgSrc="/riftbounds.jpg" label="Achètes." />
    </main>
  );
}
