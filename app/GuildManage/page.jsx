import Menu from "@/components/GuildManage/Menu";
import React from "react";
import Navbar from "@/components/GuildManage/Navbar";
import Main from "@/components/GuildManage/Main";

const page = () => {
  return (
    <div>
      <Navbar />
      {/* First  ,  Second section with  Menu Area */}
      <div className="flex">
        <Menu />
        <Main />
      </div>
    </div>
  );
};

export default page;
