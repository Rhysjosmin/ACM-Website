"use client";

import { signIn } from "next-auth/react";
import React, { useRef } from "react";
import TextField from "@mui/material/TextField";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Image from "next/image";
import { MuseoModerno, Roboto } from "next/font/google";
import Google from "next-auth/providers/google";
const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#FF1155",
    },
  },
});
const museoModerno = MuseoModerno({
  subsets: ["latin"],
  weight: ["400", "900", "800"],
});
const roboto = Roboto({ subsets: ["latin"], weight: ["400"] });
export default function Page() {
  const userName = useRef("");
  const pass = useRef("");

  const onSubmit = async () => {
    const result = await signIn("credentials", {
      username: userName.current,
      password: pass.current,
      redirect: true,
      callbackUrl: "/",
    });
  };
  return (
    <main className="grid h-screen grid-cols-1 overflow-hidden">
      {/** <Image
        src={"/Sponges/tube.png"}
        className="object-cover w-full h-full "
        alt=""
        height={600}
        width={600}
      />
  */}

      <div className="flex flex-col items-center justify-center w-full h-full gap-2 text-black ">
        <div className={`${roboto.className} flex flex-col gap-1 w-72`}>
          <ThemeProvider theme={darkTheme}>
            <h1
              className={`${museoModerno.className} text-3xl text-white font-black mb-2`}
            >
              Sign In
            </h1>
            <TextField
              onChange={(e) => (userName.current = e.target.value)}
              label="Username"
              variant="outlined"
            />
            <TextField
              onChange={(e) => (pass.current = e.target.value)}
              label="Password"
              variant="outlined"
              type="password"
            />
            <Button
              variant="outlined"
              className="w-full h-12 mt-1"
              onClick={onSubmit}
            >
              Sign In
            </Button>
            22{" "}
          </ThemeProvider>
        </div>
      </div>
    </main>
  );
}
