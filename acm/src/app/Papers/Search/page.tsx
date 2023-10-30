import Image from "next/image";
import Link from "next/link";

import { MuseoModerno, Space_Grotesk } from "next/font/google";
import SearchBar from "@/app/components/SearchBar";

const museoModerno = MuseoModerno({ subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });



export default function SearchPage() {

  return (
    <div className="flex flex-col items-center h-screen">
      <h1
        className={`${museoModerno.className} font-black text-2xl md:text-3xl mt-16 mb-6 `}
      >
        Research Paper Search
      </h1>

<SearchBar query='Search Papers'/>
      <div className="md:w-[45rem] w-[calc(100vw-4rem)]  mt-3">
        <ul
          className={`${spaceGrotesk.className} font-thin text-sm grid md:grid-cols-2 `}
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
