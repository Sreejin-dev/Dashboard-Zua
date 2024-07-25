"use client"
import Image from "next/image";
import React from "react";
import person from "../../assets/zoulogo.jpeg";

function TeamMember({ name, role }) {
  return (
    <div className="p-4">
      <div className="shadow-md filter md:grayscale hover:grayscale-0 bg-gray-800 text-white rounded-md overflow-hidden p-10 hover:p-5 hover:bg-[#DC143C] duration-500">
        <Image
          src={person}
          priority
          placeholder="blur"
          alt={name}
          className="w-full border-4 rounded-full border-red-600 hover:border-white"
        />
        <div className="p-4 text-center">
          <h2 className="text-xl font-bold">{name}</h2>
          <p className="text-gray-200">{role}</p>
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
    <div className="min-h-svh md:pt-10 pt-20 flex flex-col items-center justify-center gap-y-2">
      <div className="absolute top-5 left-5">
        <a href="/" >
          <button className="bg-gradient-to-r from-[#0AF2A9] to-[#077ACB] hover:bg-emerald-600 transition-all duration-500 text-white border-2 p-2 font-mono font-bold rounded-3xl">
            Back
          </button>
        </a>
      </div>
      <h2 className="text-red-500 text-5xl font-bold font-sans">Our Team</h2>
      <p className="text-white text-lg font-serif">about our team members</p>
      <div className="flex max-md:flex-col gap-4">
        {team.map((member, index) => (
          <TeamMember key={index} name={member.name} role={member.role} />
        ))}
      </div>
    </div>
  );
}

export default Team;
