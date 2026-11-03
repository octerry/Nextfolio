"use client"

import Link from "next/link"
import LikeButton from "./likeButton"
import { useState } from "react"

type Props = {
    title:string
    category:string
    resume:string
    url:string
    state?: "classique" | "vedette"
}

export default function Card({ title, category, resume, url, state="classique" }:Props) {
    const [style, setStyle] = useState("border-neutral-2O0")

    function handleLike(like:boolean) {
        setStyle(`border-${like?"neutral-200":"red-500"}`)
    }

    return (
        <Link href={url} className={`rounded-lg border p-5 ${style}`}>
            {state === "vedette" && <p>En vedette</p>}
            <p className="text-xs uppercase text-neutral-500">{category}</p>
            <h3 className="mt-1 font-semibold">{title}</h3>
            <p className="mt-2 text-sm text-neutral-600">{resume}</p>
            <LikeButton onClick={handleLike} />
        </Link>
    )
}