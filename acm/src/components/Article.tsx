import Image from "next/image";
import Link from "next/link";
import { Space_Grotesk } from "next/font/google";
import { MaterialSymbolsLightOpenInNewRounded } from "./icons";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export default function Article(props: any) {
  return (
    <Link href={props.address}>
      {/* <div className="aspect-[5/3.5] w-[calc(100vw-2.5rem)] md:w-[100%] md:h-[26rem]  rounded-lg md:rounded-2xl relative overflow-hidden"> */}
      <div className="relative flex flex-col w-full h-full border rounded-lg border-white/10 group hover:border-white/30 md:rounded-2xl overflow-clip">
        <Image
          height={800}
          width={800}
          src={props.image}
          className="object-cover w-full h-auto aspect-video"
          alt="Article Image"
        />

        <div
          className={`${spaceGrotesk.className} relative text-white flex-grow flex items-center  p-4 md:p-4 lg:pt-6  bg-zinc-900 group-hover:bg-zinc-800 transition w-full`}
        >
          <p className="flex-grow">{props.name}</p>
          <MaterialSymbolsLightOpenInNewRounded className="self-start p-0.5 ml-2 text-xl opacity-0 group-hover:opacity-100" />
        </div>
      </div>
    </Link>
  );
}
