import React from "react";
import zuo from "@/assets/zoulogo.jpeg";
import Image from "next/image";
const main = () => {
  return (
    <div className="text-white flex justify-center items-center min-h-svh ">
      <div className="gap-8 flex flex-col items-center w-full px-10">
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
        <div className="font-bold gap-5 flex md:text-3xl max-md:flex-col w-full justify-center">
          <button className="text-[#24C8B0]  border-[#2A4A3D] border-4 p-2 px-10 rounded-3xl hover:border-[#0AF2A9] hover:text-[25px] transition-all">
            Invite Me
          </button>
          <a href="https://discord.com/oauth2/authorize?client_id=855283499526782996&permissions=704374636287&scope=bot%20applications.commands" className="border text-center rounded-full p-2 px-10 bg-gradient-to-r from-[#0AF2A9] to-[#077ACB] hover:border-blue-800 hover:text-[25px]  transition-all"> <button >
            Dashboard
          </button></a>
         
        </div>
      </div>
    </div>
  );
};

export default main;
