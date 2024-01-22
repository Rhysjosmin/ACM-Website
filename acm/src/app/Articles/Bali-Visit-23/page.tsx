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
          Duration={3000}
          Images={[
            "/Bali-Visit-2/_SH00011.JPG",
            "/Bali-Visit-2/_SH00015.JPG",
            "/Bali-Visit-2/_SH00020.JPG",
            "/Bali-Visit-2/_SH00121.JPG",
            "/Bali-Visit-2/_SH00133.JPG",
            "/Bali-Visit-2/_SH00142.JPG",
            "/Bali-Visit-2/_SH00147.JPG",
            "/Bali-Visit-2/_SH00169.JPG",
            "/Bali-Visit-2/_SH00173.JPG",
            "/Bali-Visit-2/_SH00174.JPG",
            "/Bali-Visit-2/_SH00178.JPG",
            "/Bali-Visit-2/_SH00180.JPG",
            "/Bali-Visit-2/_SH00185.JPG",
            "/Bali-Visit-2/_SH00188.JPG",
            "/Bali-Visit-2/_SH00190.JPG",
            "/Bali-Visit-2/_SH00194.JPG",
            "/Bali-Visit-2/_SH00195.JPG",
            "/Bali-Visit-2/_SH00197.JPG",
            "/Bali-Visit-2/_SH00201.JPG",
            "/Bali-Visit-2/IMG-20231121-WA0005.jpg",
            "/Bali-Visit-2/IMG-20231121-WA0006.jpg",
            "/Bali-Visit-2/IMG-20231121-WA0007.jpg",
            "/Bali-Visit-2/IMG-20231121-WA0008.jpg",
            "/Bali-Visit-2/IMG-20231121-WA0008.jpg",
          ]}
        />
      </div>
      {/* <div className="p-6 md:p-16 md:px-32 md:w-[50rem] "> */}
      <div className="grid  md:grid-cols-6 p-6 gap-10 md:p-16 md:px-32 ">
        <div className=" col-start-1 md:col-span-4">
          <h1 className={`${museoModerno.className} font-black text-4xl mb-2`}>
            Competition In Bali 2023
          </h1>
          <p className={`${spaceGrotesk.className} font-thin`}></p>
          <div className="h-12"></div>

          <h1 className={`${museoModerno.className} font-black text-2xl`}></h1>
          <p className={`${spaceGrotesk.className} font-thin`}></p>
        </div>

        <div className="h-32  md:col-span-2 rounded"></div>
      </div>
    </div>
  );
}
