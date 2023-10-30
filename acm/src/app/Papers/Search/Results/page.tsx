import Link from "next/link";

import { Space_Grotesk } from "next/font/google";


const spaceGrotesk=Space_Grotesk({ subsets: ["latin"]})

import SearchBar from "@/app/components/SearchBar";
function PaperResult() {
  return (
    <button  className={`bg-[#161616] hover:bg-[#1b1b1b] border transition border-transparent hover:border-[#333333] ${spaceGrotesk.className} flex h-32 md:h-20 w-[calc(100vw-8rem)] gap-4 p-4`}>
      <div className="flex-grow">
        <p className="text-left">
          Energy-Efficient Visual Search by Eye Movement and Low-Latency Spiking
          Neural Network
        </p>
        <span className="flex gap-2 text-xs font-thin">
          <Link href={""} className="text-[#6284FF] hover:text-[#96adff] underline">Yunhui Zhou</Link>
          <Link href={""} className="text-[#6284FF] hover:text-[#96adff] underline">Dongqi Han</Link>
          <Link href={""} className="text-[#6284FF] hover:text-[#96adff] underline">Yuguo Yu</Link>
        </span>
      </div>
      <div className="h-full w-[1px] bg-gray-800"></div>
      <div className="text-sm w-32 font-thin">
        <p>Wed, 11 Oct 2023</p>
      </div>
    </button>
  );
}

export default function SearchResults() {
  return (
    <div className="flex flex-col items-center">
      <div className="mt-8">
        <SearchBar query={'Hello'} />
      </div>
      <div className="mt-8 grid gap-2 h-auto pb-16">
        <PaperResult />
        <PaperResult />
        <PaperResult />
        <PaperResult />
        <PaperResult />
        <PaperResult />
      </div>
    </div>
  );
}
