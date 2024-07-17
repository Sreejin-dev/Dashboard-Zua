"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import imagenew from "@/assets/zoulogo.jpeg"
const Afterlogin = () => {
  const boxesData = [
    {
      id: [1,2,3],
      name: "gild 1",
      link: "box1-link",
      imageSrc:
        imagenew,
    },
  ];

  return (
    <>
    <h1 className="text-5xl text-green-500">Under maintenance 😁</h1>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper  ">
        <SwiperSlide>
          <div className="grid lg:grid-cols-3 pt-10 px-5 gap-10 place-items-center bg-gradient-to-l from-black to-gray-500 ">
            {boxesData.map((box) => (
              <div key={box.id}>
                <div className="bg-white rounded-lg w-[300px] h-[100px] flex text-black font-sans ">
                  <div className="w-full flex items-center justify-center">
                    <Image
                      src={box.imageSrc}
                      alt={box.name}
                      height={500}
                      width={500}
                      className="rounded-full object-fill  w-[60%] h-[90%]"
                    />
                  </div>
                  <div className="w-full flex flex-col justify-center gap-3 items-center">
                    <h1 className="text-2xl font-bold">{box.name}</h1>
                    <Link
                      href={box.link}
                      className="px-5 rounded-md text-2xl font-semibold  bg-cyan-400 flex"
                    >
                      invite
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SwiperSlide>

        <SwiperSlide>Slide 2</SwiperSlide>
      </Swiper>
    </>
  );
};

export default Afterlogin;
