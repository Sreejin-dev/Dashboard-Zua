import Menu from "@/components/GuildManage/Menu";
import React from "react";
import Navbar from "@/components/GuildManage/Navbar";
import Main from "@/components/GuildManage/Main";

const page = () => {
  return (
    <>
      <Navbar />
      {/* First  ,  Second section with  Menu Area */}
      <div className="lg:flex">
        <Menu /> {/* Menu responsive on work pending ... 7/20/2024 */}
        <Main />
      </div>
    </>
  );
};

export default page;
