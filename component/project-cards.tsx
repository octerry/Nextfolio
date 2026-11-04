"use client"

import { useState } from "react"

import Section from "./section"
import Card from "./card"
import { CARDS } from "@/app/DATA/cards"

export default function ProjectCards() {
    const [newCards, setNewCards] = useState(CARDS);
    const [vedette, setVedette] = useState(false);
    const [search, setSearch] = useState('');

    function handleVedetteChange(e:React.ChangeEvent<HTMLInputElement>) {
        setVedette(e.target.checked);
        updateCards({v:e.target.checked});
    }

    function handleTextChange(e:React.ChangeEvent<HTMLInputElement>) {
        setSearch(e.target.value);
        updateCards({s:e.target.value});
    }

    function updateCards({s=search,v=vedette}:{s?:string, v?:boolean}) {
        let vedetteCards;
        if (v) {
            vedetteCards = CARDS.filter(e => {
                return e.state === "vedette";
            });
        } else {
            vedetteCards = CARDS;
        }

        const finalCards = vedetteCards.filter(e => {
            return e.title.toUpperCase().includes(s.toUpperCase()) || e.category.toUpperCase().includes(s.toUpperCase()) || e.resume.toUpperCase().includes(s.toUpperCase());
        });

        setNewCards(finalCards);
    }

    return (
        <Section title="Nos projets">
            <form>
                <label>
                    <input type="checkbox" onChange={e => handleVedetteChange(e)}/>
                    En vedette
                </label>
                <input type="text" placeholder="Rechercher le nom" onChange={e => handleTextChange(e)}/>
            </form>
            <div className="grid gap-4 sm:grid-cols-3 my-3">
            {
                newCards.length > 0 ?
                newCards.map((unit)=>(
                <Card key={unit.id} title={unit.title} category={unit.category} resume={unit.resume} url={unit.url} state={unit.state} />
                ))
                : <h1>Aucun résultat</h1>
            }
            </div>
        </Section>
    )
}