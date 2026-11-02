import Section from "@/component/section";
import Card from "@/component/card";

const CARDS = [
  {id:1, title:"Shrimp Quartet", category:"crevettes", resume:"Un orchestre de crevettes"},
  {id:2, title:"Calendrier Crealab", category:"web", resume:"Systeme de reservation en ligne"},
  {id:3, title:"Crevette en 3D", category:"crevette", resume:"Une crevette imprimee en 3D"},
  {id:4, title:"Page web stylée", category:"web", resume:"Elle est vraiment stylée sa page"},
  {id:5, title:"League of Legends", category:"gaming", resume:"Il est trop fort à LOL"},
  {id:6, title:"One Piece Card Game", category:"oui", resume:"Là je peux pas le défendre"},
]

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
            <Section title="Nos projets">
              <div className="grid gap-4 sm:grid-cols-3 my-3">
                {
                  CARDS.map((unit)=>(
                    <Card key={unit.id} title={unit.title} category={unit.category} resume={unit.resume} />
                  ))
                }
              </div>
            </Section>
    </main>
  );
}
