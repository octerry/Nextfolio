"use client"

import { useState } from "react"

export default function LikeButton() {
    const [like, setLike] = useState(false);

    const STYLE = like ? "border-red-500 bg-red-500 text-black" : "border-neutral-300 text-white"

    return (
        <button onClick={() => {setLike(!like)}} className={`rounded border px-3 py-1 text-sm ${STYLE}`} >
            {like ? "J'aime" : "J'aime pas"}
        </button>
    )
}