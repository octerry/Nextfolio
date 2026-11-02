import { ReactNode } from "react";

type Props = {
    title:string
    children:ReactNode
}

export default function Section({ title, children }:Props) {
    return (
        <section className="py-8">
            <h2>{title}</h2>
            {children}
        </section>
    );
}