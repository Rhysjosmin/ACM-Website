import Image from "next/image";
import Link from "next/link";
import { Space_Grotesk } from 'next/font/google'

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] })


export default function Article(props: any) {
    return (
        <Link href={props.address}>
        <div className="aspect-[5/3.5] w-[calc(100vw-10px)] md:w-auto md:h-[26rem]  rounded-lg md:rounded-2xl relative overflow-hidden" >
            <Image height={800} width={800} src={props.image} className="w-full h-full object-cover absolute" alt="Article Image"/>
            <p className={`${spaceGrotesk.className} text-white absolute bottom-0 p-4 pt-6 h-16 bg-gradient-to-t from-black via-zinc-950 via-90% to-transparent w-full`}>{props.name}</p>
        </div>
        </Link>
    )
}
