"use client"

import { useState } from "react"

type Props = {
    onClick:Function
}

export default function LikeButton({ onClick }:Props) {
    const [like, setLike] = useState(false);

    const STYLE = like ? "border-red-500 bg-red-500 text-black" : "border-neutral-300 text-white"

    function handleClick(e:React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();   // askip c'est pour éviter la redirection des trucs HTML
        e.stopPropagation();  // et celui là c'est pour NextJS et le Link
        setLike(!like);
        onClick(like);
    }

    return (
        <button onClick={(e) => handleClick(e)} className={`rounded border px-3 py-1 text-sm ${STYLE}`} >
            {like ? "J'aime" : "J'aime pas"}
        </button>
    )
}