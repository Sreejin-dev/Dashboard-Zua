"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import imagenew from "../../assets/zoulogo.jpeg";

const Afterlogin = () => {
  const boxData = [
    {
      name: "sadfsdfa",
      link: "box1-link",
      imageSrc: imagenew,
    },
    {
      name: "Hjkl;khjlkaa",
      link: "box1-link",
      imageSrc: imagenew,
    },
    {
      name: "Haa",
      link: "box1-link",
      imageSrc: imagenew,
    },
    {
      name: "blala",
      link: "box1-link",
      imageSrc: imagenew,
    },
    {
      name: "Haa",
      link: "box1-link",
      imageSrc: imagenew,
    },
  ];

  return (
    <div
      
      className="h-svh bg-black"
    >
      
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper ">
        <SwiperSlide>
          <div className="grid lg:grid-cols-3 pt-10 px-5 gap-10 place-items-center ">
            {boxData.map((box) => (
              <div key={box.id}>
                <div className="bg-black  shadow-inner shadow-slate-500 p-2 rounded-lg w-[300px] h-[100px] flex text-black font-sans">
                  <div className="w-full  flex items-center justify-center ">
                    <Image
                      src={box.imageSrc}
                      alt={box.name}
                      height={500}
                      width={500}
                      className="rounded-full object-fill w-[60%] h-[100%]"
                    />
                  </div>
                  <div className="w-full flex flex-col justify-center items-center gap-3">
                    <h1 className=" text-2xl font-bold text-white  overflow-hidden  max-w-32">
                      {box.name} {box.id}
                    </h1>
                    <Link
                      href={box.link}
                      className="px-5 py-[3px] rounded-md text-xl hover:opacity-65 duration-200 font-semibold bg-cyan-400 flex"
                    >
                      INVITE
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <h1 className="text-white">swiper slider</h1>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Afterlogin;
