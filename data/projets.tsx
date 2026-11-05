
interface ApiContent {
  id:number, title:string, category:string, url:string, description:string
};

export const API:{ [id: string]:ApiContent; } = {
  "shrimp-quartet":{id:1, title:"Shrimp Quartet", category:"crevettes", url:"/shrimp-quartet.jpg", description:"Shrimp Quartet est un orchestre de crevette modélisé et animé en 3D avec une musique goofy, c'est pas Thomas qui l'a fait mais il en est addicte"},
  "calendrier-crealab":{id:2, title:"Calendrier Crealab", category:"web", url:"/calendrier-crealab.png", description:"Le calendrier Crealab, carry par Thomas est un calendrier pour le CreaLab"},
  "3d-shrimp":{id:3, title:"Crevette en 3D", category:"crevette", url:"/3d-shrimp.webp", description:"Une crevette... imprimée en 3D..."},
  "page-web-stylee":{id:4, title:"Page web stylée", category:"web", url:"/page-web-stylee.webp", description:"Ce goat a fait pleins de pages Web goatesque mais jamais de Portfolio donc j'étais obligé d'en faire un pour lui"},
  "league-of-legends":{id:5, title:"League of Legends", category:"gaming", url:"/league-of-legends.jpg", description:"Blah blah blah, Séraphine, blah blah blah j'y connais rien au jeu"},
  "one-piece-cg":{id:6, title:"One Piece Card Game", category:"oui", url:"/one-piece-cg.jpeg", description:"Là je peux rien faire pour lui, il se fait détruire par Gabriel"},
}
