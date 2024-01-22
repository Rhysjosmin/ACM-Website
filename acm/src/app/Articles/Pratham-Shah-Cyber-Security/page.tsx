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
          Images={[
            "/CyberSecurity/IMG-20231101-WA0032.jpg",
            "/CyberSecurity/IMG-20231101-WA0029.jpg",
            "/CyberSecurity/IMG-20231101-WA0030.jpg",
            "/CyberSecurity/IMG-20231101-WA0033.jpg",
            "/CyberSecurity/IMG-20231101-WA0023.jpg",
            "/CyberSecurity/IMG-20231101-WA0025.jpg",
          ]}
        />
      </div>
      {/* <div className="p-6 md:p-16 md:px-32 md:w-[50rem] "> */}
      <div className="grid  md:grid-cols-6 p-6 gap-10 md:p-16 md:px-32 ">
        <div className=" col-start-1 md:col-span-4">
          <h1 className={`${museoModerno.className} font-black text-4xl mb-2`}>
            Talk On Cyber Security By{" "}
            <Link
              href={"https://www.linkedin.com/in/cyberwarrior02/"}
              className={"underline underline-offset-2 hover:text-blue-400"}
            >
              Pratham Shah
            </Link>
          </h1>
          <p className={`${spaceGrotesk.className} font-thin`}>
            The DBCE ACM chapter, on the 1st of November 2023, orchestrated an
            enlightening session titled "Cyber Security - Protecting Your
            Digital World." The event aimed to familiarize its members with the
            intricate realm of cybersecurity and featured{" "}
            <Link
              href={"https://www.linkedin.com/in/cyberwarrior02/"}
              className={"underline underline-offset-2 hover:text-blue-400"}
            >
              Mr. Pratham Shah
            </Link>
            , a distinguished Final Year Computer Engineering Student, as the
            resource person. In this dynamic session, participants delved into
            the very essence of cybersecurity, exploring its significance in the
            ever-evolving digital landscape.
          </p>
          <div className="h-12" />

          <h1 className={`${museoModerno.className} font-black text-2xl`}>
            Hands-On Demonstrations on Cyber Threats
          </h1>
          <p className={`${spaceGrotesk.className} font-thin`}>
            One of the highlights of the session was a hands-on demonstration
            segment led by{" "}
            <Link
              href={"https://www.linkedin.com/in/cyberwarrior02/"}
              className={"underline underline-offset-2 hover:text-blue-400"}
            >
              Mr. Pratham Shah
            </Link>
            . Participants actively engaged in practical exercises focused on
            two prominent cyber threats - SQL Injection and HTML Injection. This
            interactive approach not only heightened awareness but also equipped
            attendees with valuable insights into the methods employed by
            cybercriminals. The tangible experience fostered a deeper
            understanding of the potential vulnerabilities that individuals and
            organizations face in the digital sphere.
          </p>
          <div className="h-12" />
          <h1 className={`${museoModerno.className} font-black text-2xl`}>
            Interactive Q&A Session
          </h1>
          <p className={`${spaceGrotesk.className} font-thin`}>
            Following the engaging demonstrations, the session seamlessly
            transitioned into an interactive Q&A segment. Attendees had the
            opportunity to pose questions, seek clarifications, and engage in
            meaningful discussions with{" "}
            <Link
              href={"https://www.linkedin.com/in/cyberwarrior02/"}
              className={"underline underline-offset-2 hover:text-blue-400"}
            >
              Mr. Pratham Shah
            </Link>
            . This segment proved to be instrumental in solidifying the
            knowledge gained during the demonstrations. The exchange of ideas
            and insights enriched the learning experience, empowering
            participants to comprehend the nuances of cybersecurity and its
            practical implications.
          </p>
          <div className="h-12" />
          <h1 className={`${museoModerno.className} font-black text-2xl`}>
            A Thankful Conclusion
          </h1>
          <p className={`${spaceGrotesk.className} font-thin`}>
            As the session drew to a close,{" "}
            <Link
              href={"https://www.linkedin.com/in/sweta-m-723625214/"}
              className={"underline underline-offset-2 hover:text-blue-400"}
            >
              Prof. Sweta Morajkar
            </Link>
            , the academic stalwart at DBCE, delivered a heartfelt vote of
            thanks. She expressed deep appreciation for the invaluable insights
            shared by &nbsp;
            <Link
              href={"https://www.linkedin.com/in/cyberwarrior02/"}
              className={"underline underline-offset-2 hover:text-blue-400"}
            >
              Mr. Pratham Shah
            </Link>
            , acknowledging the significance of the session in enhancing the
            understanding of cybersecurity among the participants. The event not
            only served as a platform for learning but also fostered a sense of
            community within the DBCE ACM chapter, emphasizing the collective
            commitment to safeguarding the digital world.
          </p>
          <div className="h-12" />
        </div>

        <div className="h-32  md:col-span-2 rounded" />
      </div>
    </div>
  );
}
