import Image from "next/image";
import Link from "next/link";
import { Space_Grotesk, MuseoModerno } from "next/font/google";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });
const museoModerno = MuseoModerno({ subsets: ["latin"] });

export default function Footer() {
  return (
    <div>
      <div className="h-[1px] w-full bg-gradient-to-l from-transparent to-transparent via-white"></div>
      <div className="md:h-[28rem] w-full bg-[#111111] flex items-center flex-col md:flex-row">
        <div className="flex-grow text-white md:ml-4 flex md:h-[26rem] flex-col justify-end p-4 py-8">
          <p className={`${spaceGrotesk.className}`}>
            Advancing Computing as a Science & Profession
          </p>
          <h1 className={`${museoModerno.className} font-black text-3xl`}>
            DBCE ACM
          </h1>
        </div>
        <div className="w-full md:w-auto">
          <iframe
            className="border-none h-[26rem]  w-full md:w-[40rem] md:mr-[1rem]"
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3848.5562037216996!2d73.96689591435725!3d15.291979163859711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfb1631736de9d%3A0x980720b4516a7a5!2sDon%20Bosco%20College%20Of%20Engineering!5e0!3m2!1sen!2sin!4v1670427168557!5m2!1sen!2sin"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
