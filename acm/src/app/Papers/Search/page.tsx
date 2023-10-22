import Image from "next/image";
import Link from "next/link";

import { MuseoModerno, Space_Grotesk } from "next/font/google";
import { SVGProps } from "react";

const museoModerno = MuseoModerno({ subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export function MaterialSymbolsSearchRounded(props: SVGProps<SVGSVGElement>) {
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
        d="M9.5 16q-2.725 0-4.612-1.888T3 9.5q0-2.725 1.888-4.612T9.5 3q2.725 0 4.612 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l5.6 5.6q.275.275.275.7t-.275.7q-.275.275-.7.275t-.7-.275l-5.6-5.6q-.75.6-1.725.95T9.5 16Zm0-2q1.875 0 3.188-1.313T14 9.5q0-1.875-1.313-3.188T9.5 5Q7.625 5 6.312 6.313T5 9.5q0 1.875 1.313 3.188T9.5 14Z"
      ></path>
    </svg>
  );
}

export default function ArticlePage() {

  return (
    <div className="flex flex-col items-center h-screen">
      <h1
        className={`${museoModerno.className} font-black text-3xl mt-16 mb-6 `}
      >
        Research Paper Search
      </h1>
      <div className="w-[45rem] flex h-12 relative">
        <input
          className="bg-[#0B0B0B] flex-grow indent-3 focus:outline-none focus:shadow-2xl transition"
          type="text"
        />
        <button className="bg-[#0075FF] hover:bg-[#53a3ff] transition w-12 h-12 grid place-items-center">
          <MaterialSymbolsSearchRounded className="w-8 h-8 " />
        </button>

        <svg className="absolute -z-10 -top-16 -right-16 blur-3xl opacity-25" width="177" height="203" viewBox="0 0 177 203" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M81.8816 1.39508C105.739 4.65856 116.838 30.5227 133.562 47.8469C149.749 64.616 173.906 76.3768 176.611 99.5268C179.492 124.188 164.068 146.628 147.236 164.881C129.55 184.06 107.935 200.91 81.8816 202.256C54.7028 203.661 25.9566 193.607 9.40353 172.005C-5.92888 151.996 2.37138 124.723 3.16354 99.5268C3.91371 75.667 -1.11493 50.0882 13.8221 31.4673C29.9557 11.3549 56.3358 -2.09943 81.8816 1.39508Z" fill="#0075FF"/>
</svg>

      </div>

      <div className="w-[45rem] mt-3">
        <ul
          className={`${spaceGrotesk.className} font-thin text-sm grid grid-cols-2 `}
        >
          <ul className="flex flex-col gap-0.5">
            <li>
              <Link href={"/?Q=hehe"}>Computer science advancements</Link>
            </li>
            <li>
              <Link href={""}>Artificial intelligence</Link>
            </li>
            <li>
              <Link href={""}>Cybersecurity challenges and solutions</Link>
            </li>
            <li>
              <Link href={""}>Computer vision</Link>
            </li>
          </ul>
          <ul className="flex flex-col gap-0.5">
            <li>
              <Link href={""}>Cloud computing innovations</Link>
            </li>
            <li>
              <Link href={""}>Big data analytics in computer science</Link>
            </li>
            <li>
              <Link href={""}>History of computer science</Link>
            </li>
            <li>
              <Link href={""}>Quantum computing developments</Link>
            </li>
          </ul>
        </ul>
        <button className="mt-6 bg-[#9747FF] hover:bg-[#b47bff] transition w-48 h-10">
          Surprise Me 🙀
        </button>
      </div>
    </div>
  );
}
