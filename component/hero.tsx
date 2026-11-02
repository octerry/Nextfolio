import Button from "./button";

type Props = {
    title:string
    text:string
}

export default function Hero({ title, text }:Props) {
    return (
        <div className="py-16">
            <h1 className="max-w-xl test-4xl font-semibold">{title}</h1>
            <p className="mt-4 max-w-lg text-neutral-600">{text}</p>
            <div className="mt-8">
                <Button label="Voir les projets" href="/projets" />
            </div>
        </div>
    );
}