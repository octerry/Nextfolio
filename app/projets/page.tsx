import Section from "@/component/section";
import Card from "@/component/card";

const CARDS:[
  {id:number, title:string, category:string, resume:string, url:string, state?:"classique"|"vedette"}
] = [
  {id:1, title:"Shrimp Quartet", category:"crevettes", resume:"Un orchestre de crevettes", url:"./projets/shrimp-quartet", state:"vedette"},
  {id:2, title:"Calendrier Crealab", category:"web", url:"./projets/calendrier-crealab", resume:"Systeme de reservation en ligne"},
  {id:3, title:"Crevette en 3D", category:"crevette", url:"./projets/3d-shrimp", resume:"Une crevette imprimee en 3D"},
  {id:4, title:"Page web stylée", category:"web", url:"./projets/page-web-stylee", resume:"Elle est vraiment stylée sa page"},
  {id:5, title:"League of Legends", category:"gaming", url:"./projets/league-of-legends", resume:"Il est trop fort à LOL"},
  {id:6, title:"One Piece Card Game", category:"oui", url:"./projets/one-piece-cg", resume:"Là je peux pas le défendre", state:"vedette"},
]

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
