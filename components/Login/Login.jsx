import React from "react";
import zou from "@/assets/zoulogo.jpeg";
import Image from "next/image";

const Login = () => {
  return (
    <div className="text-white flex justify-center ">
      <a href="/">
        {" "}
        <button className=" bg-gradient-to-r from-[#0AF2A9] to-[#077ACB]  absolute left-3 top-3 hover:bg-emerald-600 transition-all duration-500 text-white border-2 p-2 font-mono font-bold rounded-3xl">
          Back
        </button>
      </a>
      {/* zou bot */}
      <div className="md:flex text-center gap-32 items-center pt-20">
        <div>
          <Image
            className="rounded-full"
            priority
            width={300}
            alt="zou"
            src={zou}
          />
        </div>
        <div>
          <h1 className="text-6xl font-bold pt-5  font-sans">
            Zou-Bot <br /> Dashboard
          </h1>
          <p className="pb-5">
            Serving <span className="font-bold ">1,049,015,591</span> members
            <br />
            In <span className="font-bold">9,417,467 </span> servers
          </p>
          <a
            href="https://discord.com/oauth2/authorize?client_id=855283499526782996&permissions=704374636287&scope=bot%20applications.commands
"
            className="border font-semibold  text-lg bg-transparent  rounded-3xl md:p-2 md:px-16 p-3 px-16 hover:text-blue-700 hover:bg-white duration-500"
          >
            <button>Log in With Discord</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
