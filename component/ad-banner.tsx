import Image from "next/image";

type Props = {
    linkTo:string
    imgSrc:string
    label:string
}

export default function AdBanner({ linkTo, imgSrc, label }:Props) {
    return (
        <a href={linkTo} >
            <div>
                <h1 className="text-4xl mx-auto relative top-10 bg-black w-fit">{label}</h1>
                <Image className="w-full h-40 object-cover" src={imgSrc} width={1000} height={300} alt="ad"/>
            </div>
        </a>
    )
}