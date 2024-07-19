import Link from "next/link";
import React from "react";

const Menu = () => {
  return (
    <div className="w-[30%] flex flex-col items-center px-5  bg-[#009494]">
      <div className="text-white text-2xl font-bold flex flex-col gap-10">
        <h1>Guild information</h1>
        <Link href={"/GuildManage"}>📗 Application </Link>
        <Link href={"/GuildManage"}>🎟 Tickets</Link>
        <Link href={"/GuildManage"}>💲 Premium</Link>
        <Link href={"/GuildManage"}>⚙ Config</Link>
      </div>
    </div>
  );
};

export default Menu;
