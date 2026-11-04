"use client"

import { useState } from "react"

import Section from "./section"
import Card from "./card"
import { CARDS } from "@/app/DATA/cards"

export default function ProjectCards() {
    const [newCards, setNewCards] = useState(CARDS);
    const [vedette, setVedette] = useState(false);
    const [search, setSearch] = useState("");

    function updateCards() {
        
    }

    function handleVedetteChange(e:React.ChangeEvent<HTMLInputElement>) {
        console.log(e.target.checked);
    }

    function handleTextChange(e:React.ChangeEvent<HTMLInputElement>) {
        console.log(e.target.value);
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
                newCards.map((unit)=>(
                <Card key={unit.id} title={unit.title} category={unit.category} resume={unit.resume} url={unit.url} state={unit.state} />
                ))
            }
            </div>
        </Section>
    )
}