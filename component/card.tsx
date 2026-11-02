import LikeButton from "./likeButton"

type Props = {
    title:string
    category:string
    resume:string
    etat?: "classique" | "vedette"
}

export default function Card({ title, category, resume, etat="classique" }:Props) {
    return (
        <article className="rounded-lg border p-5 border-neutral-200">
            {etat === "vedette" && <p>En vedette</p>}
            <p className="text-xs uppercase text-neutral-500">{category}</p>
            <h3 className="mt-1 font-semibold">{title}</h3>
            <p className="mt-2 text-sm text-neutral-600">{resume}</p>
            <LikeButton/>
        </article>
    )
}