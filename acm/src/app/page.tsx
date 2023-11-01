


import Link from "next/link";
import Article from "./components/Article";
import Hero from "./components/Home/Hero";

import { MuseoModerno, Space_Grotesk } from "next/font/google";
import { SVGProps } from "react";

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
      <Hero />
      <div className="min-h-screen bg-white text-black py-8 md:p-16">
        <h1 className={`${museoModerno.className} text-3xl font-black ml-4`}>
          Articles
        </h1>
        <div className="grid md:grid-cols-2 place-items-center gap-3">
          <Article
            name="Talk : Cyber Security: Protecting Your Digital World"
            address="/Articles/Talk-On-Cyber-Security-Pratham-Shah"
            image="/Cyber Security-Pratham-shah.jpg"
          />
          <Article
            name="Tour To Jaipur"
            address="/Articles/Tour-To-Jaipur"
            image="/Hindware.jpeg"
          />
          <Article
            name="Visit To A School In Bali"
            address="/Articles/Visit-To-School-in-Bali-2023"
            image="/Bali.jpg"
          />
          <Article
            name="A Talk On Career Insights"
            address="/Articles/Talk-On-Career-Insights"
            image="/Talk.jpg"
          />
          <Article
            name="The DBCE ACM Student Chapter Inauguration"
            address="/Articles/Acm-Student-chapter-inauguration"
            image="/Innaugration.jpeg"
          />
          <Article
            name="Bee Farm Visit"
            address="/Articles/Bee-Farm-Visit"
            image="/BeeFarmVisit.jpg"
          />
        </div>
      </div>
      <div className="p-8 md:p-16 text-white">
        <div>
          <h1 className={`${museoModerno.className} text-3xl font-black`}>
            Research Papers
          </h1>
          <p className={`${spaceGrotesk.className} mt-2 font-thin  md:w-[50rem]`}>
            In the realm of DBCE ACM, intellectual excellence finds its truest
            expression through a curated collection of exceptional research
            papers. Authored by esteemed scholars, erudite professors, and
            accomplished graduates, these manuscripts stand as pillars of our
            commitment to advancing knowledge. Within this repository, you will
            discover a diverse array of meticulously crafted papers spanning
            various disciplines. Each document represents a profound exploration
            of concepts, theories, and innovative methodologies, illuminating
            the intersections of human understanding. As you delve into our
            collection, you embark on a transformative journey through the
            cutting-edge landscape of contemporary research, where curiosity
            meets innovation, shaping the future of academia. Explore the depths
            of these scholarly insights, and join us in the pursuit of
            intellectual curiosity and academic excellence.
          </p>

<div className="relative h-28">
    {/* <Link href={"/Papers/Search"} className="z-10 absolute bg-[#0075FF] transition hover:bg-[#5da9ff] p-3 mt-6 w-48 flex gap-3 items-center justify-between"> */}
    <Link href={"/"} className="z-10 absolute bg-[#0075FF] transition hover:bg-[#5da9ff] p-3 mt-6 w-48 flex gap-3 items-center justify-between">
           
              <MaterialSymbolsSearchRounded className="w-8 h-8" />
              Search For Papers (Coming Soon)
       
    </Link>
          <div className="absolute -top-8  left-20 -z-10 blur-3xl opacity-60">
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
