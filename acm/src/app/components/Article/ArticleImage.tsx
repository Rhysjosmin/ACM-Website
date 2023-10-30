/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";


export default function ArticleImage(props:any) {
  return (
    <div>
    <Image
      className="w-screen"
      height={1000}
      width={1000}
      alt="Article Image"
      src={props.Image}
    />
    <div className="h-[2px] bg-white w-full">
      <div className="h-full w-32 bg-[#FF002E]"></div>
    </div>
  </div>
  );
}
