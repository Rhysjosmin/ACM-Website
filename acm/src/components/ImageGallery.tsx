"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
export function ImageGallery({ Images }: { Images: string[] }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loaderWidth, setLoaderWidth] = useState("0%");
  useEffect(() => {
    setTimeout(() => {
      setLoaderWidth(
        String(((currentImageIndex + 1) / Images.length) * 100) + "%"
      );
      setCurrentImageIndex((currentImageIndex + 1) % Images.length);
    }, 2000);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentImageIndex]);
  return (
    <>
      <Image
        className="w-screen h-auto aspect-video object-cover"
        height={1000}
        width={1000}
        alt="Article Image"
        src={Images[currentImageIndex % Images.length]}
      />
      <div className="h-[2px] bg-white w-full">
        <motion.div
          animate={{ width: loaderWidth }}
          transition={{ type: "tween" }}
          className={`h-full w-0
          }  duration-700  bg-[#FF002E]`}
        ></motion.div>
      </div>
    </>
  );
}
