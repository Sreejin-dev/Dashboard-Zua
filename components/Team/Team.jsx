import Image from "next/image";
import React from "react";
import person from "@/assets/zoulogo.jpeg";

function TeamMember({ name, role }) {
  return (
    <div className="p-4  ">
      <div className="shadow-md bg-gray-800 text-white rounded-md overflow-hidden p-10 hover:p-5 transition-all  hover:bg-[#DC143C] duration-500">
        <Image
          src={person}
          alt={name}
          className="w-full border-4 rounded-full border-red-600 hover:border-white transition-all filter md:grayscale hover:grayscale-0"
        />
        <div className="p-4 text-center">
          <h2 className="text-xl font-bold">{name}</h2>
          <p className="text-gray-600  text-gray-200">{role}</p>
        </div>
      </div>
    </div>
  );
}

function Team() {
  const team = [
    { name: "SREEJIN CP", role: "WEB DEVELOPER & DESIGNER" },
    { name: "CRUZ GAMING", role: "BOT DEVELOPER & SAMP DEV" },
    { name: "RJR YT", role: "SAMP DEV & DC DESIGNER" },
    { name: "A.GFX", role: "DEVELOPER & CREATOR" },
  ];

  return (
    <div className="md:h-auto h-svh md:pt-10">
      <div className="text-center">
        {" "}
        <h2 className="text-green-500 text-5xl font-bold">Our Team</h2>
        <p className="text-green-200 text-lg font-bold">
          about our team members
        </p>
      </div>

      <br />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {team.map((member, index) => (
          <TeamMember key={index} name={member.name} role={member.role} />
        ))}
      </div>
    </div>
  );
}

export default Team;
