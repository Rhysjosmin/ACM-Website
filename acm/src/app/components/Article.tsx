import Image from "next/image";
import Link from "next/link";
import { Space_Grotesk } from "next/font/google";
import { SVGProps } from "react";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

function MaterialSymbolsArrowForward(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M16.175 13H4v-2h12.175l-5.6-5.6L12 4l8 8l-8 8l-1.425-1.4l5.6-5.6Z"
      ></path>
    </svg>
  );
}

export default function Article(props: any) {
  return (
    <Link href={props.address} className="">
      <div className="aspect-[5/3.5] w-[calc(100vw-2.5rem)] md:w-auto md:h-[26rem]  rounded-lg md:rounded-2xl relative overflow-hidden group">
        <Image
          height={800}
          width={800}
          src={props.image}
          className="w-full h-full object-cover absolute"
          alt="Article Image"
        />
        <div
          className={`${spaceGrotesk.className} text-white flex items-center justify-between absolute bottom-0 p-4 pt-4 h-auto bg-gradient-to-t bg-black w-full transition-all group-hover:bg-[#0075FF]`}
        >
          <p>{props.name}</p>
          <MaterialSymbolsArrowForward className="text-xl mr-8 opacity-0 transition-all group-hover:opacity-100 group-hover:mr-1 group-hover:text-2xl" />
        </div>
      </div>
    </Link>
  );
}
