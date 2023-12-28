"use client";

import { signOut } from "next-auth/react"
import React, { useRef } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Image from "next/image";
import {  DM_Serif_Display, Playfair_Display } from "next/font/google";
import { useRouter } from "next/navigation";
const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: '#ff8f00',
    },
  },
});
const playfair=Playfair_Display({subsets:['latin']})
const dmSerif=DM_Serif_Display({subsets:['latin'],weight:['400']})
export default function Page(){
  const userName = useRef("");
  const pass = useRef("");

  // const onSubmit = async () => {
  //   const result = await signOut("credentials", {
  //     username: userName.current,
  //     password: pass.current,
  //     redirect: true,
  //     callbackUrl: "/",
  //   });
  // };
  const router=useRouter()
  return (
    <main className="grid  h-screen overflow-hidden">
      {/* <Image
        src={"/Sponges/tube.png"}
        className="h-full object-cover w-full  "
        alt=""
        height={400}
        width={400}
        
      /> */}

      <div className="text-black flex flex-col gap-2 items-center justify-center w-full h-full ">
        <div className="flex flex-col w-72 gap-1">
          <ThemeProvider theme={darkTheme}>
            {/* <h1 className={`${dmSerif.className} text-3xl text-white font-black mb-2`}>Sign Out</h1> */}
            <h1 className={` text-3xl text-white font-black mb-2`}>Sign Out</h1>
            <Button
              variant="outlined"
              className="w-full h-12 mt-1"
              onClick={()=>signOut()}
            >
              Sign Out
            </Button>
            <Button
              variant="outlined"
              className="w-full h-12 mt-1"
              onClick={()=>router.back()}
            >
            Go Back
            </Button>
          </ThemeProvider>
        </div>
      </div>
    </main>
  );
};


