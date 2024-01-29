import React from "react";
import zuo from "@/assets/zoulogo.jpeg";
import Image from "next/image";
const main = () => {
  return (
    <div className="text-white flex justify-center items-center h-svh  ">
      <div className="gap-8 flex flex-col items-center">
        <div className="flex justify-center">
          <Image
            placeholder="blur"
            className="rounded-full"
            width={200}
            src={zuo}
            alt=""
          />
        </div>
        <div className="flex justify-center text-[#28EFAC] font-bold text-6xl">
          <h1>Zua</h1>{" "}
        </div>
        <div className="font-bold gap-5 flex md:text-5xl">
          <button className="text-[#24C8B0]  border-[#2A4A3D] border-4 p-2 px-10 rounded-3xl hover:border-[#0AF2A9] hover:text-[45px] transition-all">
            Invite Me
          </button>
          <button className="border rounded-full p-2 px-10 bg-gradient-to-r from-[#0AF2A9] to-[#077ACB] hover:border-blue-800 hover:text-[45px]  transition-all">
            Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default main;
