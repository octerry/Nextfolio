import Hero from "@/component/hero";
import Button from "@/component/button";
import Section from "@/component/section";
import Card from "@/component/card";
import Accordion from "@/component/accordion";

const CARDS = [
  {id:1, title:"Shrimp Quartet", category:"crevettes", resume:"Un orchestre de crevettes"},
  {id:2, title:"Calendrier Crealab", category:"web", resume:"Systeme de reservation en ligne"},
  {id:3, title:"Crevette en 3D", category:"crevette", resume:"Une crevette imprimee en 3D"},
]

const QUESTIONS = [
  {id:1, label:"Comment on peut t'épouser", resume:"Je fais pas ça déso"},
  {id:2, label:"T'es sûr ?", resume:"T'es Ame ? sinon non"},
]

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-6">
      <Hero 
        title="Le goat du dev web" 
        text="Y'a pas de carabistouilles quand il t'embrouille" 
      />
      <Section title="Nos projets">
        <div className="grid gap-4 sm:grid-cols-3 my-3">
          {
            CARDS.map((unit)=>(
              <Card key={unit.id} title={unit.title} category={unit.category} resume={unit.resume} />
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
    </main>
  );
}
