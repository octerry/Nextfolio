import Link from "next/link";

type Props = {
    label: string;
    href: string;
    variante?: "plein"|"contour"
}

export default function Button({label, href, variante = "plein"}:Props) {
    const STYLE = variante === "plein"? "bg-white text-black" : "border border-white text-white"

    return (
        <button className={`${STYLE} rounded px-5 py-2`} >
            <Link href={href} >{label}</Link>
        </button>
    );
}