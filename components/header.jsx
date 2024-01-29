import React from "react";

const Navheader = () => {
  return (
    <div className="md:block hidden">
     
      <header>
        <div className="p-5">
          <nav className="flex justify-center ">
            <ul className="flex gap-5 text-lg  font-bold text-[#0F75B3]">
              <li>
                <a href="#" className="hover:font-normal">Home</a>
              </li>
              <li>
                <a href="#" className="hover:font-normal">About</a>
              </li>
              <li>
                <a href="#" className="hover:font-normal">Team</a>
              </li>
              <li>
                <a
                  href=""
                  className="text-white flex  bg-gradient-to-r from-[#0AF2A9] to-[#077ACB] px-2  font-mono border rounded-2xl  hover:border-[#0AF2A9] hover:opacity-85 transition-all"
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

export default Navheader;
