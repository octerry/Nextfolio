import { notFound } from "next/navigation";
import Image from "next/image";
import { API } from "@/data/projets";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function Page({ params }:Props) {
  const { slug } = await params;

  if (API[slug] === undefined) {
    notFound();
  }

  return (
    <div className="flex justify-center items-center flex-col text-center">
      <h1 className="mt-3" >{API[slug].title}</h1>
      <h2>{API[slug].category}</h2>
      <Image src={API[slug].url} width={600} height={500} alt={slug} />
      <p>{API[slug].description}</p>
    </div>
  )
}