import Image from "next/image";
import React from "react";
import bgimage from "@/assets/zoulogo.jpeg";

const Navbar = () => {
  return (
    <>
      <div className="max-lg:pt-10 lg:h-[132px] bg-[#009494] w-full flex justify-end px-4 sm:px-6 lg:px-8 py-4 relative z-10">
        <div className="flex  max-lg:justify-center max-lg:items-center justify-end items-end w-full gap-4 lg:gap-[340px]">
          <div className="bg-white group gap-2  z-0  relative flex  justify-between items-center   sm:w-[275px] px-3 lg:px-4 py-2">
            <h1>Application 1</h1>
            <span>&darr;</span>
            {/* datas */}
            <div className="absolute group-hover:block duration-500 bg-white h-56  top-10 left-0 w-full hidden">
              something
            </div>
          </div>
          <div className="flex gap-4 lg:gap-9 items-center  lg:mt-0">
            <Image
              src={bgimage}
              className="rounded-full w-14 h-14"
              alt="none"
            />
            <Image
              src={bgimage}
              className="rounded-full w-14 h-14"
              alt="none"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
