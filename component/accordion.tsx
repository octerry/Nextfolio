"use client"

import { useState } from "react"

type Props = {
    label:string
    resume:string
}

export default function Accordion({ label, resume }:Props) {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <button onClick={()=>setOpen(!open)} >{label}</button>
            {open && <p>{resume}</p>}
        </div>
    )
}