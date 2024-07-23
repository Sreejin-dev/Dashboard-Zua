"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import menu from '../../assets/menu.png'
const Menu = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <>
      <Image src={menu} alt="menu"
        className="max-md:w-[10%] w-10   p-1 left-1  absolute  top-1 z-50 bg-transparent block lg:hidden"
        onClick={toggleMenu}
      >
        
      </Image>
      <div
        className={`lg:w-[30%] max-lg:top-0 max-lg:pt-10 z-30 max-lg:fixed max-lg:w-full max-lg:h-screen flex flex-col items-center px-5 bg-[#009494] transition-all duration-300 ${
          isMenuVisible ? "block" : "hidden"
        } lg:flex  lg:block`}
      >
        <div className="text-white text-2xl font-bold flex flex-col gap-10 max-lg:items-center">
          <h1>Guild information</h1>
          <Link href="/GuildManage">📗 Application</Link>
          <Link href="/GuildManage">🎟 Tickets</Link>
          <Link href="/GuildManage">💲 Premium</Link>
          <Link href="/GuildManage">⚙ Config</Link>
        </div>
      </div>
    </>
  );
};

export default Menu;
