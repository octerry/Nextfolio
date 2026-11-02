import Link from "next/link"

type LinkUnit = {
    url:string;
    label:string;
}

const LINKS:LinkUnit[] = [
    {
        url:"/",
        label:"Accueil"
    },
    {
        url:"/projets",
        label:"Projets"
    }
]

export default function Header() {
    return (
        <nav className="flex items-center justify-between border-b border-neutral-200 py-4" >
            <Link href='/' className="font-semibold" >Thomas Shrimp</Link>
            <ul className="flex gap-6 text-sm text-neutral-600" >
                {
                    LINKS.map((unit) => (
                            <li key={LINKS.indexOf(unit)} >
                                <Link href={unit.url} >{unit.label}</Link>
                            </li>
                    ) )
                }
            </ul>
        </nav>
    )
}