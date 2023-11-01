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
      <ArticleImage Image={"/Cyber Security-VoteOfThanks.jpg"} />
      <div className="p-6 md:p-16 md:px-32">
        <h1 className={`${museoModerno.className} font-black text-4xl mb-2`}>
          DBCE ACM Chapter has a talk on "Cyber Security: Protecting Your
          Digital World"
        </h1>
        <p>
          On the 1st of November 2023, the DBCE ACM chapter organized an
          insightful session centered around the critical topic of Cyber
          Security. The event, titled "Cyber Security - Protecting Your Digital
          World," aimed to enlighten the attendees about the significance of
          cybersecurity in today's rapidly evolving digital landscape.
        </p>
        <div className="h-12"></div>
        <h1 className={`${museoModerno.className} font-black text-2xl`}>Introduction to Cybersecurity Concepts</h1>
        <p>
          The session kicked off with an introduction to the fundamental
          concepts of cybersecurity. Attendees had the opportunity to grasp the
          essence of this crucial field, understanding its relevance and
          importance in safeguarding digital information.
        </p>
        <div className="h-12"></div>
        <h1 className={`${museoModerno.className} font-black text-2xl`}>Engaging Demonstrations by Mr. Pratham Shah</h1>
        <p>
          A pivotal highlight of the event was a hands-on demonstration segment
          led by Mr. Pratham Shah, a knowledgeable Final Year Computer
          Engineering Student. Through practical exercises, participants delved
          into the complexities of SQL Injection and HTML Injection. These
          interactive exercises not only enhanced the attendees' understanding
          but also provided them with practical skills, making the learning
          experience engaging and dynamic.
        </p>
        <div className="h-12"></div>
        <h1 className={`${museoModerno.className} font-black text-2xl`}>Interactive Q&A Session</h1>
        <p>
          Following the demonstrations, the attendees actively participated in
          an interactive question and answer session. This segment allowed
          participants to seek clarifications, discuss specific concerns, and
          deepen their knowledge by engaging directly with the resource person.
          The exchange of ideas and information during this session further
          enriched the learning experience.
        </p>
        <div className="h-12"></div>
        <h1 className={`${museoModerno.className} font-black text-2xl`}>Vote of Thanks by Prof. Sweta Morajkar</h1>
        <p>
          The session concluded on a positive note with a vote of thanks
          delivered by Prof. Sweta Morajkar. She expressed gratitude for the
          valuable insights shared during the session, emphasizing the
          importance of such events in fostering awareness and understanding
          among the members. The event not only provided knowledge but also
          created a platform for active learning and discussion, contributing
          significantly to the educational endeavors of the DBCE ACM chapter.
        </p>
        <div className="h-32"></div>
      </div>
    </div>
  );
}
