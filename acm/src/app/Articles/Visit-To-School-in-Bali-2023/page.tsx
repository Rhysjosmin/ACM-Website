/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

import { MuseoModerno, Space_Grotesk } from "next/font/google";
import Link from "next/link";
import ArticleImage from "@/app/components/Article/ArticleImage";

const museoModerno = MuseoModerno({ subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export default function ArticlePage() {
  return (
    <div>
      <ArticleImage Image={'/Bali.jpg'}/>
      <div className="p-6 md:p-16 md:px-32">
        <h1 className={`${museoModerno.className} font-black text-4xl mb-2`}>
          Poster Making Competition Bali
        </h1>
        <p>
          Don Bosco College of Engineering under DBCE ACM student chapter
          organized Poster Making Competition for students of Government High
          School, Balli Goa under senior(Standard VIII-X) and junior category
          (Standard V-VII) on 24th September 2022.
        </p>
        <br />
        <p>
          The topic for poster competition was “Technologies for rural
          livelihood”. Ms.Alpa Dessai, the headmistress of Government High
          School, Balli, welcomed the ACM team: Dr. Gaurang Patkar, Prof. Sweta
          Morajkar & DBCE ACM student members Mr. Pratham Shah and Ms. Gauravi
          Kamat & appreciated them for taking this initiative that will make
          students work & bring the best out of them. The event received a good
          response with the active participation of students. Students were
          creative enough to highlight the technologies for rural livelihood.
          After putting in a lot of efforts, students were appreciated and
          felicitated for the beautiful posters made with the prizes under each
          category.
        </p>
        <div className="h-32"></div>
      </div>
    </div>
  );
}
