'use client'

import { useState } from "react"

export default function SearchBar() {
    const [content, setContent] = useState('');
    const crevette = 'crevette'

    function handleText(e:React.KeyboardEvent) {
        if (e.code != "Backspace") {
            setContent(crevette.slice(0,content.length+1));
        } else {
            if (content.length-1 >= 0) setContent(crevette.slice(0,content.length-1));
        }
    }

    return (
        <input placeholder="Rechercher dans la page" className="m-1.5 px-3 border-solid border-1 border-gray-500 rounded-3xl" value={content} type="text" onKeyDown={e => handleText(e)} onChange={()=>{}} />
    ) 
}