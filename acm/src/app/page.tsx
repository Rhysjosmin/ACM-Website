import Link from "next/link";
import Article from "@/components/Article";
import Image from "next/image";
import { MuseoModerno, Space_Grotesk } from "next/font/google";
import { SVGProps } from "react";
import { IcBaselineChevronRight } from "../components/icons";

const museoModerno = MuseoModerno({ subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

function MaterialSymbolsSearchRounded(props: SVGProps<SVGSVGElement>) {
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

export default function Home() {
  return (
    <div>
      <div className="relative h-full p-8 text-white md:p-16">
        <div className="flex w-full justify-between h-[36rem] md:h-[28rem]">
          <div className="md:w-[650px]">
            <h1 className={`${museoModerno.className} font-black  text-4xl`}>
              Advancing Computing as a Science & Profession
            </h1>
            <p className={`${spaceGrotesk.className} font-thin mt-2`}>
              Computing powers our vision for a better tomorrow. We&apos;re
              architects of positive change, using our skills to solve future
              challenges. Join us in shaping a harmonious world through
              computing, towards a brighter future for all
            </p>
          </div>
          <div>
            <Image
              height={500}
              width={500}
              className="hidden mr-0 -mt-32 md:block"
              alt="BlobGif"
              src={"/blob.gif"}
            />
          </div>
        </div>
        <div className="absolute w-64 p-3 transition border border-transparent rounded-lg md:left-auto bottom-8 md:bottom-20 right-8 md:right-16 hover:bg-neutral-900 hover:border-zinc-800">
          <Link href={"/"} className="flex items-center justify-between">
            <p className="">Register For The Tour</p>
            <IcBaselineChevronRight className="w-8 h-auto aspect-square" />
          </Link>
        </div>
      </div>
      <div className="p-4 py-8 text-white bg-zinc-950 md:p-16">
        <h1
          className={`${museoModerno.className} text-4xl font-black ml-1 mb-4`}
        >
          Articles
        </h1>
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 md:gap-1 ">
          <Article
            details="01 Jan 2024"
            name="Organized Competitions at A School in Bali"
            address="/Articles/Competition-Bali"
            image="/Bali23.JPG"
          />
          <Article
            details="01 Jan 2024"
            name="A Visit to BITS Pilani K K Birla Goa"
            address="/Articles/BITS-Pilani-visit-2023"
            image="/BITS-Pilan-birla.jpg"
          />
          <Article
            details="01 Jan 2024"
            name="Mr Pratham Shah gives a talk on Cyber Security"
            address="/Articles/Pratham-Shah-Cyber-Security"
            image="/CyberSecurity.jpg"
          />
          <Article
            details="01 Jan 2024"
            name="Tour To Jaipur"
            address="/Articles/Tour-To-Jaipur"
            image="/Hindware.jpeg"
          />
          <Article
            details="01 Jan 2024"
            name="Visit To A School In Bali"
            address="/Articles/"
            image="/Bali.jpg"
          />
          <Article
            details="01 Jan 2024"
            name="A Talk On Career Insights"
            address="/Articles/"
            image="/Talk.jpg"
          />
          <Article
            details="01 Jan 2024"
            name="The DBCE ACM Student Chapter Inauguration"
            address="/Articles/"
            image="/Innaugration.jpeg"
          />
        </div>
      </div>
      <div className="p-8 text-white md:p-16">
        <div>
          <h1 className={`${museoModerno.className} text-4xl font-black`}>
            Research Papers
          </h1>
          <p
            className={`${spaceGrotesk.className}  mt-2 font-thin  md:w-[50rem]`}
          >
            in The DBCE ACM Student Chapter, professors and creative minds
            author exceptional research papers. Delve into diverse, insightful
            manuscripts showcasing cutting-edge research. Join us in pursuing
            academic excellence!
          </p>

          <div className="relative h-28">
            <Link
              href={"/Papers/Search"}
              className="z-10 absolute bg-[#0075FF] transition hover:bg-[#5da9ff] p-3 mt-6 w-48 flex items-center justify-between"
            >
              <MaterialSymbolsSearchRounded className="w-6 h-6" />
              Search For Papers
            </Link>
            <div className="absolute -top-8 left-20 -z-10 blur-3xl opacity-60">
              <svg
                width="200"
                height="220"
                viewBox="265 275 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M355.202 274.16C379.059 277.423 390.159 303.287 406.882 320.612C423.07 337.381 447.227 349.141 449.932 372.291C452.813 396.953 437.389 419.393 420.557 437.646C402.871 456.825 381.256 473.674 355.202 475.021C328.024 476.425 299.277 466.372 282.724 444.769C267.392 424.76 275.692 397.487 276.484 372.291C277.235 348.432 272.206 322.853 287.143 304.232C303.277 284.119 329.657 270.665 355.202 274.16Z"
                  fill="#0075FF"
                  fillOpacity="0.51"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
