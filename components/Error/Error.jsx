import Image from "next/image";
import React from "react";
import animbg from "../../assets/Error animation/404bg.png";
import main from "../../assets/Error animation/404.png";
import light from "../../assets/Error animation/light.png";
import lightbulb from "../../assets/Error animation/tourch.png";
const Error = () => {
  return (
    <div className="h-svh flex items-center justify-center  ">
      <Image src={animbg} fill className="-z-10" alt="loading" />

      <Image
        src={light}
        className="absolute top-0 anim-error 2xl:h-[50%] 2xl:w-[10%]"
        alt="loading"
      />
      <Image
        src={lightbulb}
        className="absolute top-0 2xl:h-[20%] 2xl:w-[10%]"
        alt="loading"
      />
      <Image src={main} className="2xl:w-[30%]" alt="loading" />
    </div>
  );
};

export default Error;
