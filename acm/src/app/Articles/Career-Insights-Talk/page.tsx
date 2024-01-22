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
            "/Talk.jpg",
            "/CareerTalk/2.jpeg",
            "/CareerTalk/3.jpeg",
            "/CareerTalk/4.jpeg",
          ]}
        />
      </div>
      {/* <div className="p-6 md:p-16 md:px-32 md:w-[50rem] "> */}
      <div className="grid  md:grid-cols-6 p-6 gap-10 md:p-16 md:px-32 ">
        <div className=" col-start-1 md:col-span-4">
          <h1 className={`${museoModerno.className} font-black text-4xl mb-2`}>
            A Talk On Career Insights
          </h1>
          <p className={`${spaceGrotesk.className} font-thin`}>
            C-codes student association along with ACM Goa students chapter of
            computer engineering department, DBCE ,Fatorda organized a Panel
            Discussion on career insights. The talk was conducted on 27 August
            2022, for second and third year computer engineering students. The
            resource people of the workshop were from Open Destination limited
            (ODL) and they were Mr. Milind Anvekar- SVP operations Customer
            experience-SaaS , Ms. Rupal Karande- VP Projects Architects , mobile
            development,project management. Mr. Rupesh Kargaonkar - team lead
            development (roles), training , Mr. Leon Mesquita- Head of
            professional services Product management,QA automation and Ms
            Amrapalli Nayak. The coordinators for the event were Dr. Gaurang
            Patkar, Prof. Merwyn D'souza, Prof. Amey K. Tilve and Prof. Sweta
            Rane.{" "}
          </p>
          <div className="h-12"></div>

          <h1 className={`${museoModerno.className} font-black text-2xl`}>
            Industry insights and career journeys in IT.
          </h1>
          <p className={`${spaceGrotesk.className} font-thin`}>
            The session commenced by welcoming the dignitaries of the day with
            the bouquet of flowers. The speakers shared their journey of how
            they turned from an engineering student to now leading the company.
            Mr.Milind Anvekar started by saying that future of IT industry is
            bright. He mentioned that there will be 20 times the present demand
            for digital stalls by 2024. Ms. Rupal shared with us her journey of
            being a strong independent women and also told us about the various
            positions that a CS student can get in the company.
          </p>
          <div className="h-12"></div>
          <h1 className={`${museoModerno.className} font-black text-2xl`}>
            Career paths in IT, overcoming family expectations, and diverse
            roles in tech companies.
          </h1>
          <p className={`${spaceGrotesk.className} font-thin`}>
            Mr. Leon mentioned that he was very keen in computer science from
            the beginning and chose to be an engineer inspite of coming from a
            family of doctors.He said that even if one is not good in
            programming there are different roles that a person can play in a
            tech company like being buisness analyst . Mr. Shakti shared with us
            his experience in software testing and game testing. Mr. Rupesh said
            that he was always interested in programming problem solving and he
            also trains people so that they ease out in an organization. Ms.
            Amrapali shared with us the story of how she convinced her parents
            to drop biology inspite of coming from the family of doctors and how
            she was always interested in computers. Ms. Rupal guided us on
            various positions being offered to the engineering student at the
            company , such as being project manager, team lead , technical
            architect, assistant development manager . Finally at the end of the
            session speakers answered all the questions asked by the students
            Mr. Milind at the end said “ Do the job you like to do or like the
            job you do”. The session concluded with a vote of thanks given by
            Prof. Merwyn D’souza. The event was very informative and a great
            success
          </p>
          <div className="h-12"></div>
        </div>

        <div className="h-32  md:col-span-2 rounded"></div>
      </div>
    </div>
  );
}
