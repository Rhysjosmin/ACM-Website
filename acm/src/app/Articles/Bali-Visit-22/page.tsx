/* eslint-disable react/no-unescaped-entities */

import { MuseoModerno, Space_Grotesk } from "next/font/google";
import Link from "next/link";
import { ImageGallery } from "@/components/ImageGallery";

const museoModerno = MuseoModerno({ subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export default function ArticlePage() {
  return (
    <div>
      <div>
        <ImageGallery
          Duration={5000}
          Images={["/Bali_1/Bali1.jpg", "/Bali_1/Bali2.jpg"]}
        />
      </div>
      {/* <div className="p-6 md:p-16 md:px-32 md:w-[50rem] "> */}
      <div className="grid  md:grid-cols-6 p-6 gap-10 md:p-16 md:px-32 ">
        <div className=" col-start-1 md:col-span-4">
          <h1 className={`${museoModerno.className} font-black text-4xl mb-2`}>
            Poster Making Competition in Bali 2022
          </h1>
          <p className={`${spaceGrotesk.className} font-thin`}>
            Don Bosco College of Engineering, through its ACM student chapter,
            took a pioneering step in fostering technological awareness among
            the youth. The institution organized a Poster Making Competition at
            Government High School, Balli Goa, on September 24, 2022. The event
            aimed to engage students from both senior (Standard VIII-X) and
            junior (Standard V-VII) categories in creatively exploring the
            theme, "Technologies for Rural Livelihood.
          </p>
          <div className="h-12"></div>

          <h1 className={`${museoModerno.className} font-black text-2xl`}>
            Inspiration from the Headmistress
          </h1>
          <p className={`${spaceGrotesk.className} font-thin`}>
            The initiative received a warm welcome from Ms. Alpa Dessai, the
            Headmistress of Government High School, Balli. She acknowledged the
            efforts of the ACM team, which included Dr. Gaurang Patkar, Prof.
            Sweta Morajkar, and DBCE ACM student members Mr. Pratham Shah and
            Ms. Gauravi Kamat. Ms. Dessai expressed her appreciation for the
            initiative, recognizing its potential to inspire students and bring
            out their best. It was an encouraging start to an event designed to
            encourage students to delve into the possibilities that technology
            holds for rural livelihoods. .
          </p>
          <div className="h-12"></div>
          <h1 className={`${museoModerno.className} font-black text-2xl`}>
            Students' Active Participation
          </h1>
          <p className={`${spaceGrotesk.className} font-thin`}>
            The heart of the event lay in the active participation of the
            students, who embraced the challenge with enthusiasm. Their
            creativity shone through as they skillfully crafted posters that not
            only showcased their artistic talents but also conveyed a profound
            understanding of technologies suited for rural livelihoods. The
            competition provided a platform for students to channel their
            energies into creating visually appealing and informative
            representations of technology's role in shaping the future of rural
            communities.
          </p>
          <div className="h-12"></div>
          <h1 className={`${museoModerno.className} font-black text-2xl`}>
            Appreciation and Prizes
          </h1>
          <p className={`${spaceGrotesk.className} font-thin`}>
            As a culmination of the event, the hard work and dedication of the
            students were duly recognized. The beautifully crafted posters were
            met with admiration, and prizes were awarded in each category to
            honor the outstanding efforts. This acknowledgment served not only
            as a reward for the participants but also as motivation for them to
            continue exploring the intersection of technology and rural
            development. The Poster Making Competition at Don Bosco College of
            Engineering proved to be an inspiring initiative, fostering a spirit
            of innovation and technological exploration among the younger
            generation.
          </p>
          <div className="h-12"></div>
        </div>

        <div className="h-32  md:col-span-2 rounded"></div>
      </div>
    </div>
  );
}
