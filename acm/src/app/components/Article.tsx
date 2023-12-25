import Image from "next/image";
import Link from "next/link";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export default function Article(props: any) {
  return (
    <Link href={props.address}>
      {/* <div className="aspect-[5/3.5] w-[calc(100vw-2.5rem)] md:w-[100%] md:h-[26rem]  rounded-lg md:rounded-2xl relative overflow-hidden"> */}
      <div className="w-full aspect-video h-auto lg:h-64 border border-white/10 group hover:border-white/30 rounded-lg md:rounded-2xl relative overflow-hidden">
        <Image
          height={800}
          width={800}
          src={props.image}
          className="w-full h-full object-cover "
          alt="Article Image"
        />
        <p
          className={`${spaceGrotesk.className} text-white absolute bottom-0 p-4 md:p-4 lg:pt-6 h-auto bg-zinc-900 group-hover:bg-zinc-800 transition w-full`}
        >
          {props.name}
        </p>
      </div>
    </Link>
  );
}
