import Section from "@/component/section";
import Card from "@/component/card";
import { CARDS } from "../DATA/cards";

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
            <Section title="Nos projets">
              <div className="grid gap-4 sm:grid-cols-3 my-3">
                {
                  CARDS.map((unit)=>(
                    <Card key={unit.id} title={unit.title} category={unit.category} resume={unit.resume} url={unit.url} state={unit.state} />
                  ))
                }
              </div>
            </Section>
    </main>
  );
}
