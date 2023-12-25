import Image from "next/image";

import { MuseoModerno, Space_Grotesk } from "next/font/google";

export default function Page() {
  return (
    <div className="flex gap-2 flex-wrap">
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}

function Card() {
  return (
    <div className="flex bg-emerald-400 p-2">
      <Image src={"/Jaipur.png"} alt="" height={400} width={400} />
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti
        possimus accusamus tempore quo quia, distinctio fugiat magni atque
        laborum ut, eum itaque praesentium molestias sint a officiis quod.
        Eveniet, impedit?
      </p>
    </div>
  );
}
