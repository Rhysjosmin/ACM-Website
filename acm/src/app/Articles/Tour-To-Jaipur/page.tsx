/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

import { MuseoModerno, Space_Grotesk } from "next/font/google";
import Link from "next/link";

const museoModerno = MuseoModerno({ subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export default function ArticlePage() {
  return (
    <div>
      <div>
        <Image
          className="w-screen"
          height={1000}
          width={1000}
          alt="Article Image"
          src={"/Jaipur.png"}
        />
        <div className="h-[2px] bg-white w-full">
          <div className="h-full w-32 bg-[#FF002E]"></div>
        </div>
      </div>
      {/* <div className="p-6 md:p-16 md:px-32 md:w-[50rem] "> */}
      <div className="grid  md:grid-cols-6 p-6 gap-10 md:p-16 md:px-32 ">
        <div className=" col-start-1 md:col-span-4">
          <h1 className={`${museoModerno.className} font-black text-4xl mb-2`}>
            Tour To Jaipur
          </h1>
          <p className={`${spaceGrotesk.className} font-thin`}>
            The DBCE ACM Chapter of{" "}
            <Link
              href={"https://dbcegoa.ac.in/"}
              className={`underline underline-offset-2 hover:text-sky-400`}
            >
              Don Bosco College of Engineering
            </Link>{" "}
            recently embarked on an exciting trip to the vibrant city of Jaipur.
            The trip was not only a great opportunity for the members to explore
            and relax but also a fantastic learning experience. The faculty
            members who accompanied the members were the faculty coordinator,
            Dr. Gaurang Patkar, and Mrs. Manisha Dessai. They played a crucial
            role in organizing and planning the trip. The leadership of the trip
            was led by Pratham Shah, the Chairman, who was assisted by Vadiraj
            Inamdar, the Vice-Chairman, and Rudra Kande, the Treasurer.
          </p>
          <div className="h-12"></div>

          <h1 className={`${museoModerno.className} font-black text-2xl`}>
            Industry Visits and Learning Experiences
          </h1>
          <p className={`${spaceGrotesk.className} font-thin`}>
            After reaching Jaipur, the group checked into their hotel and took
            some time to unwind. Later, they headed to Kishangar to visit the
            marble association where they were able to learn about the
            automation process and production pipeline. This visit gave the
            members a chance to witness firsthand how technology has been
            integrated into the production process of the marble industry. On
            the following day, the group visited the University of Rajasthan
            where they witnessed a hackathon taking place. They were able to
            interact with different technical and non-technical departments and
            learn about the innovative ideas being implemented by students. This
            experience proved to be enriching and informative. Later in the day,
            the group visited the World Trade Center where they had the chance
            to meet with startup companies. These companies gave them a
            presentation about their working style and business models. This
            visit proved to be a great opportunity for the members to learn
            about the dynamics of the startup industry in India.
          </p>
          <div className="h-12"></div>
          <h1 className={`${museoModerno.className} font-black text-2xl`}>
            Exploring Jaipur's Heritage
          </h1>
          <p className={`${spaceGrotesk.className} font-thin`}>
            The next day, the members explored the gems of Jaipur by visiting
            several forts such as Amer Fort, Jaigarh Fort, Nahagarh Fort, Jal
            Mahal, City Palace, Jantar Mantar, Hawa Mahal, and Albert Museum.
            During the visit, they learned about the rich history and culture of
            the city. The members were amazed by the intricate architecture and
            the historical significance of these places.
          </p>
          <div className="h-12"></div>
          <h1 className={`${museoModerno.className} font-black text-2xl`}>
            Reflection and Conclusion
          </h1>
          <p className={`${spaceGrotesk.className} font-thin`}>
            The last day of the trip was reserved for relaxation. The members
            were able to take a break and enjoy the city at their own pace. This
            allowed them to reflect on the experiences they had over the past
            few days. Overall, the trip was an excellent learning experience for
            the members of the DBCE ACM Chapter. They not only got to learn
            about the latest technologies and innovations but also had the
            chance to experience the rich cultural heritage of Jaipur. The
            members thoroughly enjoyed every moment of the trip and came back
            with fond memories that they will cherish for a long time.
          </p>
          <div className="h-12"></div>

          <h1 className={`${museoModerno.className} font-black text-2xl`}>
            Acknowledgments
          </h1>
          <p className={`${spaceGrotesk.className} font-thin`}>
            The success of any trip is not possible without the hard work and
            dedication of the faculty members who accompany the students. The
            DBCE ACM Chapter's trip to Jaipur was no exception. The faculty
            coordinator, Dr. Gaurang Patkar, and Mrs. Manisha Dessai were
            instrumental in organizing and planning the trip. Their guidance and
            support helped the members make the most out of this learning
            experience. Additionally, the trip was made possible by the efforts
            of the chapter's Chairman, Pratham Shah, who took the lead in
            organizing and coordinating the trip. He was ably assisted by
            Vadiraj Inamdar, the Vice-Chairman, and Rudra Kande, the Treasurer,
            who worked tirelessly to ensure that everything went smoothly. Their
            hard work paid off as the members had a fantastic time in Jaipur.
            The itinerary was well-planned, and the visits to the various sites
            and institutions were informative and engaging. The members were
            able to witness firsthand the application of technology and
            innovation in various industries, from the marble industry to the
            startup companies. The trip was not just about learning, but also
            about experiencing the culture and history of Jaipur. The members
            got to visit several forts, palaces, and museums, and learn about
            their significance and history.
          </p>
        </div>

        <div className="h-32  md:col-span-2 rounded"></div>
      </div>
    </div>
  );
}
