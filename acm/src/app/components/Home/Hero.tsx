import { MuseoModerno, Space_Grotesk } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { SVGProps } from "react";

const museoModerno = MuseoModerno({ subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export function IcBaselineChevronRight(props: SVGProps<SVGSVGElement>) {
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
        d="M10 6L8.59 7.41L13.17 12l-4.58 4.59L10 18l6-6z"
      ></path>
    </svg>
  );
}

export default function Hero() {
  return (
    <div className="p-8 md:p-16 h-full relative text-white">
      <div className="flex w-full justify-between h-[33rem] md:h-[28rem]">
        <div className="md:w-[650px]">
          <h1 className={`${museoModerno.className} font-black  text-4xl`}>
            Advancing Computing as a Science & Profession
          </h1>
          <p className={`${spaceGrotesk.className} font-thin mt-2`}>
            In our vision, computing is the driving force behind a better
            tomorrow. We are more than professionals; we are architects of
            positive change, using our skills to solve future challenges. With
            unwavering commitment, we bridge gaps and empower communities,
            shaping a harmonious world. Join us in this journey where computing
            becomes a beacon guiding humanity toward a brighter, equitable
            future.
          </p>
        </div>
        <div>
          <Image
            height={500}
            width={500}
            className="mr-0 -mt-32 hidden md:block"
            alt="BlobGif"
            src={"/blob.gif"}
          />
        </div>
      </div>
      <div className="absolute left-8 md:left-auto w-64 bottom-8 md:bottom-20 md:right-16 hover:bg-neutral-900 hover:border-zinc-800 border border-transparent p-3 rounded-lg transition">
        <Link href={"/"} className="flex items-center">
          <p className="">
            Register for the cyber security talk by Pratham Shah
          </p>
          <IcBaselineChevronRight className="w-16 h-16" />
        </Link>
      </div>
    </div>
  );
}
