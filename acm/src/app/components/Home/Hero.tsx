import { MuseoModerno, Space_Grotesk } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { SVGProps } from "react";

const museoModerno = MuseoModerno({ subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export function IcBaselineChevronRight(props: SVGProps<SVGSVGElement>) {
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
        d="M10 6L8.59 7.41L13.17 12l-4.58 4.59L10 18l6-6z"
      ></path>
    </svg>
  );
}
