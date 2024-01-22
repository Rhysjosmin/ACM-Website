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
          Duration={4000}
          Images={[
            "/BeeVisit/IMG-20221126-WA0018.jpg",
            "/BeeVisit/IMG-20221126-WA0022.jpg",
            "/BeeVisit/IMG-20221126-WA0023.jpg",
            "/BeeVisit/IMG-20221126-WA0024.jpg",
            "/BeeVisit/IMG-20221126-WA0027.jpg",
            "/BeeVisit/IMG-20221126-WA0030.jpg",
            "/BeeVisit/IMG-20221126-WA0031.jpg",
            "/BeeVisit/IMG-20221126-WA0036.jpg",
            "/BeeVisit/IMG-20221126-WA0042.jpg",
            "/BeeVisit/IMG-20221126-WA0043.jpg",
            "/BeeVisit/IMG-20221126-WA0038.jpg",
          ]}
        />
      </div>
      {/* <div className="p-6 md:p-16 md:px-32 md:w-[50rem] "> */}
      <div className="grid  md:grid-cols-6 p-6 gap-10 md:p-16 md:px-32 ">
        <div className=" col-start-1 md:col-span-4">
          <h1 className={`${museoModerno.className} font-black text-4xl mb-2`}>
            Bee Farm Visit
          </h1>
          <p className={`${spaceGrotesk.className} font-thin`}>
            In the bustling world of the ACM students' chapter at DBCE, an
            exciting exploration took place as they delved into the secrets of
            Raika Honey Apiary in Goa. This unique visit aimed to unravel the
            intriguing concept of the "Bees Algorithm," shedding light on the
            fascinating world of swarm intelligence.
          </p>
          <div className="h-12" />

          <h1 className={`${museoModerno.className} font-black text-2xl`}>
            Bees Algorithm - Nature's Blueprint for Collaboration 🌐
          </h1>
          <p className={`${spaceGrotesk.className} font-thin`}>
            At the heart of the exploration was the Bees Algorithm, a marvel
            inspired by the collaborative efforts of nature's pollinators.
            Similar to the intricate dance of bees as they search for nectar,
            the algorithm exemplifies swarm intelligence. It serves as a
            classical model where numerous individuals come together, mimicking
            the collective power of a bee colony to solve complex problems and
            optimize various scenarios.
          </p>
          <div className="h-12"></div>
          <h1 className={`${museoModerno.className} font-black text-2xl`}>
            Navigating Complexity Through Bees Algorithm 🐝🔍
          </h1>
          <p className={`${spaceGrotesk.className} font-thin`}>
            As the students absorbed the wisdom of nature's architects, they
            discovered the algorithm's applications in navigating complexity.
            Much like bees efficiently locate and prioritize sources of nectar,
            the Bees Algorithm offers insights into problem-solving and
            optimization. This eye-opening experience at Raika Honey Apiary not
            only showcased the wonders of the natural world but also provided a
            tangible link between the intricate dance of bees and the algorithms
            that can shape our technological future.
          </p>
        </div>
        <div className="h-32  md:col-span-2 rounded" />
      </div>
    </div>
  );
}
