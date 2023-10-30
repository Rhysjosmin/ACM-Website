/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import ArticleImage from "@/app/components/Article/ArticleImage";
import { MuseoModerno, Space_Grotesk } from "next/font/google";
import Link from "next/link";

const museoModerno = MuseoModerno({ subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export default function ArticlePage() {
  return (
    <div>
      <ArticleImage Image={'/Innaugration.jpeg'}/>
      <div className="p-6 md:p-16 md:px-32">
        <h1 className={`${museoModerno.className} font-black text-4xl mb-2`}>
          ACM Student Chapter Inauguration
        </h1>
        <p>
          The Department of Computer Engineering Don Bosco College of
          Engineering has registered for ACM Students Chapter named DBCE Goa ACM
          Student Chapter. A total of 23 student members and 4 Professional
          members have registered. The inaugural ceremony was scheduled on 6th
          July, 2022 at 3.30 pm. The chief Guest for the inaugural ceremony was
          Ms.Maria Choudhary, Principal MTS, Oracle India and ACM Chair Goa
          Professional Chapter in attendance with keynote speaker, Mr.Suhas
          Mallya, Executive Director, EMCO Goa Private Limited. ACM Professional
          members Dr.Vivek Kamat, Prof.Vandana Naik, DHE and Prof.Louella Colaco
          were also present for the inaugural function. The function commenced
          with digital lighting of lamp followed by the Principal, Dr. Neena
          Panandikar welcoming the gathering. Dr. Neena Panandikar highlighted
          the incredible progress the college has made in a span of ten years
          and shared the details of latest achievements in Computer Engineering
          Department.
        </p>

        <br />
        <p>
          Rev.Fr. Kinley D'Cruz appreciated the coordination done by the ACM
          student members and Faculty members. Introduction to Chapter members
          was done and Oath was taken by all the student members. Dr.Gaurang
          Patkar, HOD Computer introduced the Chief Guest. Speaking on the
          occasion, the Chief Guest, Ms.Maria Choudhary shared importance of ACM
          Membership and the details of events under ACM across India. She also
          motivated students to participate in different contests under ACM.
          Dr.Vivek,Prof. Vandana and Prof.Louella also gave higlights of the
          activities under ACM. Inaugural function was followed by a keynote by
          Mr. Suhas Mallya on the topic:” Business of Technology: Importance of
          Solution Orientation”. Mr Suhas spoke on value proposition and
          commercial proposition. He also stressed on solution oriented
          activities and innovations, making strong business case and leveraging
          rich ecosystem. The inaugural function concluded with a vote of
          thanks.
        </p>
        <div className="h-32"></div>
      </div>
    </div>
  );
}
