"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MuseoModerno, Space_Grotesk } from "next/font/google";
import { SVGProps } from "react";
import {
  MaterialSymbolsEditOutlineRounded,
  MaterialSymbolsDarkModeOutline,
  MaterialSymbolsSettingsOutlineRounded,
  MaterialSymbolsLogoutRounded,
  MaterialSymbolsMenuRounded,
  MaterialSymbolsPerson,
  MaterialSymbolsLoginRounded,
} from "./icons";
import { usePathname } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { signIn, signOut } from "next-auth/react";
const museoModerno = MuseoModerno({ subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

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
      className={`absolute w-48 bg-[#0a0a0a] rounded-2xl right-16 top-[5.5rem] flex flex-col overflow-hidden transition ${
        isMenuOpen
          ? "opacity-0 pointer-events-none"
          : "opacity-100 pointer-events-auto"
      }`}
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
        <button className="flex items-center h-10 gap-2 pl-4 hover:bg-white/5">
          <MaterialSymbolsDarkModeOutline />
          <p>Theme</p>
        </button>
        <Link
          href={"/Settings"}
          className="flex items-center h-10 gap-2 p-1 pl-4 hover:bg-white/5"
        >
          <MaterialSymbolsSettingsOutlineRounded />
          <p>Settings</p>
        </Link>
      </div>
      <hr className="border-white/40" />
      <div className="w-full">
        <button className="flex items-center w-full gap-2 p-1 pl-4 h-11 hover:bg-white/5">
          <MaterialSymbolsLogoutRounded />
          <p>Log Out</p>
        </button>
      </div>
    </div>
  );
}

function NavLinks() {
  const path = usePathname();

  return (
    <>
      <Link
        href={"/"}
        className={`${
          path == "/" ? "text-blue-600" : ""
        } h-10 md:h-14 p-4 md:p-0 flex transition hover:bg-zinc-900 md:hover:text-blue-500 md:hover:bg-transparent items-center`}
      >
        Home
      </Link>
      <Link
        href={"/Papers/Search"}
        className={`${
          path.includes("/Papers/Search") ? "text-blue-600" : ""
        } h-10 md:h-14 p-4 md:p-0 flex transition hover:bg-zinc-900 md:hover:text-blue-500 md:hover:bg-transparent items-center`}
      >
        Papers
      </Link>
      <Link
        href={"/Internship-details"}
        className={`${
          path == "/Internship-details" ? "text-blue-600" : ""
        } h-10 md:h-14 p-4 md:p-0 flex transition hover:bg-zinc-900 md:hover:text-blue-500 md:hover:bg-transparent items-center`}
      >
        Internship Details
      </Link>
    </>
  );
}
export default function NavBar() {
  const [topMenuToggle, setTopMenuToggle] = useState(true);
  const [expandedLinkToggle, setExpandedLinkToggle] = useState(false);
  return (
    <div className="relative z-10 w-full ">
      <div className="w-full h-28 bg-[#111111] grid grid-cols-3 items-center place-content-center px-8 md:px-16 ">
        <div className="gap-4 hidden md:flex text-center text-white  font-thin ${museoModerno.className}">
          <NavLinks />
        </div>

        <button
          onClick={() => {
            setExpandedLinkToggle(!expandedLinkToggle);
          }}
          className="flex items-center justify-center w-12 h-12 gap-4 rounded-full md:hidden"
        >
          <MaterialSymbolsMenuRounded className="w-8 h-8" />
        </button>
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
        <div className="rounded-full w-11 h-11 justify-self-end ">
          <DropdownMenu>
            <DropdownMenuTrigger className="rounded-full w-min">
              <Profile />
            </DropdownMenuTrigger>
            {/* <DropdownMenuSeparator /> */}
            <DropdownMenuContent className="absolute w-56 right-[calc(-2.75rem/2)]   bg-zinc-950 border-white/10">
              <DropdownMenuLabel>Rhys Rodrigues</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="z-50  focus:bg-zinc-900/60 cursor-pointer">
                <Link href={""} className="flex items-center gap-2">
                  <MaterialSymbolsPerson />
                  Profile
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="z-50  focus:bg-zinc-900/60 cursor-pointer">
                <button
                  onClick={() => signOut()}
                  className="flex items-center gap-2"
                >
                  <MaterialSymbolsLogoutRounded /> Logout
                </button>
              </DropdownMenuItem>
              <DropdownMenuItem className="z-50  focus:bg-zinc-900/60 cursor-pointer">
                <button
                  onClick={() => signIn()}
                  className="flex items-center gap-2"
                >
                  <MaterialSymbolsLoginRounded /> Login
                </button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        {/* <div
          className="rounded-full w-11 h-11 justify-self-end "
          onClick={() => {
            setTopMenuToggle(!topMenuToggle);
          }}
        >
          <Profile />
        </div> */}
      </div>

      <TopMenu isMenuOpen={topMenuToggle} />

      <div className="from-transparent via-[#FF005C] to-transparent  bg-gradient-to-l h-[1px] w-full "></div>
      <div
        className={`${
          expandedLinkToggle
            ? "h-auto opacity-100 pointer-events-auto"
            : "h-0 opacity-0 pointer-events-none"
        } md:hidden w-full transition-all bg-[#111111]  border-b border-white/10 flex flex-col   font-thin`}
      >
        <NavLinks />
      </div>
    </div>
  );
}
