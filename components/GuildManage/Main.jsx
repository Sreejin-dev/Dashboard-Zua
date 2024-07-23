import React from "react";
import DropDown from "./DropDown";

const Main = () => {
  const applicationData = [
    "Application starter message  ",
    "Button name ",
    "Application name ",
  ];

  return (
    <div className="lg:px-9 p-2 lg:py-7 flex max-lg:flex-col max-lg:gap-5  w-full font-bold">
      <div className="text-black flex flex-col  gap-7 w-full">
        {DropDown.map((data, id) => (
          <select
            key={id}
            className=" lg:w-[80%] py-2 px-2 "
            name="name"
            id="name"
          >
            <option value="hai">{data.name}</option>
            <option value="hai">{data.data1}</option>
            <option value="hai">{data.data2}</option>
            <option value="hai">{data.data3}</option>
          </select>
        ))}
        <button className=" lg:w-[80%] py-2 px-2  text-start bg-white">
          Application Ending message
        </button>
      </div>
      {/* Second Application section */}
      <div className="w-full flex flex-col gap-7 ">
        {applicationData.map((con, id) => (
          <button key={id} className="lg:w-[80%] py-2 px-2 text-start bg-white">
            {con}
          </button>
        ))}
        <textarea
          placeholder="Title"
          className="lg:w-[80%] h-16 px-2 text-start bg-white flex items-start justify-start p-2"
        ></textarea>
        <textarea
          name="names"
          id="name"
          placeholder="Description"
          className="lg:w-[80%] py-2 px-2 text-start bg-white h-[154px]"
        ></textarea>
        <h1 className="w-full text-center text-white text-2xl">
          Custom message
        </h1>
        <select className=" lg:w-[80%] py-2 px-2 " name="name" id="name">
          <option value="hai">Type</option>
          <option value="hai">abc</option>
          <option value="hai">abc</option>
          <option value="hai">abc</option>
        </select>

        <button className=" lg:w-[80%] py-2 px-2  text-start bg-white">
          Your message
        </button>

        <div className="flex gap-5">
          <button className="bg-white p-1">save</button>
          <button className="bg-white p-1">cancel</button>
        </div>
      </div>
    </div>
  );
};

export default Main;
