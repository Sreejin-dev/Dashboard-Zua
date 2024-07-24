"use client";
import React, { useState } from "react";

const Headerph = () => {
  const [hidden, setHidden] = useState(false);

  const toggleHidden = () => {
    setHidden(!hidden);
  };

  return (
    <div className="md:hidden md:w-full text-center absolute z-50 overflow-hidden pointer-events-none">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className={`w-10 h-10 text-white pointer-events-auto ${
          hidden ? "hidden" : "block"
        }`}
        onClick={toggleHidden}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
        />
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className={` text-white w-10 h-10 pointer-events-auto ${
          hidden ? "block" : "hidden"
        }`}
        onClick={toggleHidden}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>

      <header
        className={` bg-black flex  items-center  justify-center h-svh ${
          hidden ? "translate-x-1" : "translate-x-[-100%]"
        } duration-300`}
      >
        <div onClick={toggleHidden} className="p-5">
          <nav className="pointer-events-auto ">
            <ul className="flex flex-col gap-5 text-2xl font-bold text-[#0F75B3] transition-all">
              <li>
                <a href="#" className="hover:font-normal">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:font-normal">
                  About
                </a>
              </li>
              <li>
                <a href="Team" className="hover:font-normal">
                  Team
                </a>
              </li>
              <li>
                <a href="Linkhere" className="hover:font-normal">
                  Discord
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white flex bg-gradient-to-r from-[#0AF2A9] to-[#077ACB] px-2 font-mono border rounded-2xl hover:border-[#0AF2A9] hover:opacity-85 transition-all"
                >
                  <button>Join now</button>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Headerph;
