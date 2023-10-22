"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MuseoModerno, Space_Grotesk } from "next/font/google";
import { SVGProps } from "react";

const museoModerno = MuseoModerno({ subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export function MaterialSymbolsDarkModeOutline(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M12 21q-3.75 0-6.375-2.625T3 12q0-3.75 2.625-6.375T12 3q.35 0 .688.025t.662.075q-1.025.725-1.638 1.888T11.1 7.5q0 2.25 1.575 3.825T16.5 12.9q1.375 0 2.525-.613T20.9 10.65q.05.325.075.662T21 12q0 3.75-2.625 6.375T12 21Zm0-2q2.2 0 3.95-1.213t2.55-3.162q-.5.125-1 .2t-1 .075q-3.075 0-5.238-2.163T9.1 7.5q0-.5.075-1t.2-1q-1.95.8-3.163 2.55T5 12q0 2.9 2.05 4.95T12 19Zm-.25-6.75Z"
      ></path>
    </svg>
  );
}

export function MaterialSymbolsSettingsOutlineRounded(
  props: SVGProps<SVGSVGElement>
) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M13.875 22h-3.75q-.375 0-.65-.25t-.325-.625l-.3-2.325q-.325-.125-.613-.3t-.562-.375l-2.175.9q-.35.125-.7.025t-.55-.425L2.4 15.4q-.2-.325-.125-.7t.375-.6l1.875-1.425Q4.5 12.5 4.5 12.337v-.674q0-.163.025-.338L2.65 9.9q-.3-.225-.375-.6t.125-.7l1.85-3.225q.175-.35.537-.438t.713.038l2.175.9q.275-.2.575-.375t.6-.3l.3-2.325q.05-.375.325-.625t.65-.25h3.75q.375 0 .65.25t.325.625l.3 2.325q.325.125.613.3t.562.375l2.175-.9q.35-.125.7-.025t.55.425L21.6 8.6q.2.325.125.7t-.375.6l-1.875 1.425q.025.175.025.338v.674q0 .163-.05.338l1.875 1.425q.3.225.375.6t-.125.7l-1.85 3.2q-.2.325-.563.438t-.712-.013l-2.125-.9q-.275.2-.575.375t-.6.3l-.3 2.325q-.05.375-.325.625t-.65.25Zm-1.825-6.5q1.45 0 2.475-1.025T15.55 12q0-1.45-1.025-2.475T12.05 8.5q-1.475 0-2.488 1.025T8.55 12q0 1.45 1.012 2.475T12.05 15.5Zm0-2q-.625 0-1.063-.438T10.55 12q0-.625.438-1.063t1.062-.437q.625 0 1.063.438T13.55 12q0 .625-.438 1.063t-1.062.437ZM12 12Zm-1 8h1.975l.35-2.65q.775-.2 1.438-.588t1.212-.937l2.475 1.025l.975-1.7l-2.15-1.625q.125-.35.175-.737T17.5 12q0-.4-.05-.787t-.175-.738l2.15-1.625l-.975-1.7l-2.475 1.05q-.55-.575-1.212-.962t-1.438-.588L13 4h-1.975l-.35 2.65q-.775.2-1.437.588t-1.213.937L5.55 7.15l-.975 1.7l2.15 1.6q-.125.375-.175.75t-.05.8q0 .4.05.775t.175.75l-2.15 1.625l.975 1.7l2.475-1.05q.55.575 1.213.963t1.437.587L11 20Z"
      ></path>
    </svg>
  );
}

export function MaterialSymbolsLogoutRounded(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M5 21q-.825 0-1.413-.588T3 19V5q0-.825.588-1.413T5 3h6q.425 0 .713.288T12 4q0 .425-.288.713T11 5H5v14h6q.425 0 .713.288T12 20q0 .425-.288.713T11 21H5Zm12.175-8H10q-.425 0-.713-.288T9 12q0-.425.288-.713T10 11h7.175L15.3 9.125q-.275-.275-.275-.675t.275-.7q.275-.3.7-.313t.725.288L20.3 11.3q.3.3.3.7t-.3.7l-3.575 3.575q-.3.3-.713.288t-.712-.313q-.275-.3-.263-.713t.288-.687l1.85-1.85Z"
      ></path>
    </svg>
  );
}

export function MaterialSymbolsEditOutlineRounded(
  props: SVGProps<SVGSVGElement>
) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M5 19h1.4l8.625-8.625l-1.4-1.4L5 17.6V19ZM19.3 8.925l-4.25-4.2l1.4-1.4q.575-.575 1.413-.575t1.412.575l1.4 1.4q.575.575.6 1.388t-.55 1.387L19.3 8.925ZM4 21q-.425 0-.713-.288T3 20v-2.825q0-.2.075-.388t.225-.337l10.3-10.3l4.25 4.25l-10.3 10.3q-.15.15-.337.225T6.825 21H4ZM14.325 9.675l-.7-.7l1.4 1.4l-.7-.7Z"
      ></path>
    </svg>
  );
}

export function MaterialSymbolsMenuRounded(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M4 18q-.425 0-.713-.288T3 17q0-.425.288-.713T4 16h16q.425 0 .713.288T21 17q0 .425-.288.713T20 18H4Zm0-5q-.425 0-.713-.288T3 12q0-.425.288-.713T4 11h16q.425 0 .713.288T21 12q0 .425-.288.713T20 13H4Zm0-5q-.425 0-.713-.288T3 7q0-.425.288-.713T4 6h16q.425 0 .713.288T21 7q0 .425-.288.713T20 8H4Z"
      ></path>
    </svg>
  );
}





function Profile() {

  return (
    <div 
      className={`w-11 h-11 border border-white/40 hover:border-[#0075FF] transition rounded-full p-0.5`}
    >
      <Image
        width={100}
        height={100}
        alt="Profile Picture"
        src={"/profile.png"}
        className="rounded-3xl"
      />
    </div>
  );
}

function TopMenu({ isMenuOpen }: any) {

  return (
    <div
      className={`absolute w-48 bg-[#0a0a0a] rounded-2xl right-16 top-[5.5rem] flex flex-col overflow-hidden transition ${isMenuOpen?'opacity-0 pointer-events-none':'opacity-100 pointer-events-auto'}`}
    >
      <div className="flex justify-center pt-4">
        <div className="flex flex-col items-center pt4">
          <div className={`w-11 h-11 rounded-full justify-self-end relative`}>
            <Image
              width={100}
              height={100}
              alt="Profile Picture"
              src={"/profile.png"}
              className="rounded-3xl"
            />
            <div className="w-6 h-6 rounded-full bg-[#0d0d0d] grid place-items-center absolute -right-1 -bottom-1">
              <MaterialSymbolsEditOutlineRounded />
            </div>
          </div>
          <h1
            className={`${spaceGrotesk.className} font-thin text-[12px] text-white/90 mt-2`}
          >
            Rhys Josmin
          </h1>
          <p className="font-thin text-[10px] -mt-1 text-white/50">
            rod.rhys20031@gmail.com
          </p>
        </div>
      </div>
      <div className="flex flex-col mt-1">
        <button className="flex items-center pl-4 gap-2 h-10 hover:bg-white/5">
          <MaterialSymbolsDarkModeOutline />
          <p>Theme</p>
        </button>
        <Link href={'/Settings'} className="flex items-center pl-4 gap-2 p-1 h-10 hover:bg-white/5">
          <MaterialSymbolsSettingsOutlineRounded />
          <p>Settings</p>
        </Link>
      </div>
      <hr className="border-white/40" />
      <div className="w-full">
        <button className="flex items-center pl-4 gap-2 p-1 h-11 w-full hover:bg-white/5">
          <MaterialSymbolsLogoutRounded />
          <p>Log Out</p>
        </button>
      </div>
    </div>
  );
}

export default function NavBar() {
  const [topMenuToggle,setTopMenuToggle]=useState(false)

  return (
    <div className=" z-10 w-full relative">
      <div className="w-full h-28 bg-[#111111] grid grid-cols-3 items-center place-content-center px-8 md:px-16 ">
        <div className="gap-4 hidden md:flex">
          <Link
            href={"/"}
            className={` text-center text-white  font-thin ${museoModerno.className} `}
          >
            Home
          </Link>
          <Link
            href={"/Papers/Search"}
            className={`text-center text-white  font-thin ${museoModerno.className}`}
          >
            Papers
          </Link>
        </div>
        <div className="gap-4 flex md:hidden">
          <MaterialSymbolsMenuRounded className="w-10 h-10" />
        </div>
        <div className="flex flex-col items-center">
          <Link href={"/"}>
            <div
              className={`text-center text-white text-lg md:text-3xl font-black  ${museoModerno.className}`}
            >
              DBCE ACM
            </div>
          </Link>
          <div
            className={`w-56 h-7 text-center text-white text-xs -mt-1  md:text-lg font-thin ${museoModerno.className}`}
          >
            Student Chapter
          </div>
        </div>
      
  
      <div className="rounded-full w-11 h-11  justify-self-end"  onClick={()=>{setTopMenuToggle(!topMenuToggle)}}>

        <Profile />
      </div>
      </div>

      <TopMenu isMenuOpen={topMenuToggle} />

      <div className="from-transparent via-[#FF005C] to-transparent  bg-gradient-to-l h-[1px] w-full "></div>
    </div>
  );
}
