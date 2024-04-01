/* eslint-disable no-unused-vars */
import React from "react";
import pic from "../assets/img.jpg";
const About = () => {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.25"
      className="w-full  bg-[#CDEA68] rounded-t-3xl text-black "
    >
      <h1 className="font-['Neue_Montreal'] p-14 text-[4vw] leading-[4.5vw] tracking-tight">
        Ochi is a strategic partner for fast-growing tech businesses that need
        to raise funds, sell products, explain complex ideas, and hire great
        peo­ple.
      </h1>
      <div className="w-full flex px-14 py-4 gap-5 border-t-[1px] border-[#a1b562]">
        <div className="w-1/2 font-['Neue_Montreal']">
          <h1 className="text-6xl">Our approach:</h1>
          <button className="flex items-center gap-10 py-4 uppercase px-6 bg-zinc-900 mt-6 rounded-full text-white">
            Read More
            <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
          </button>
        </div>
        <div className="w-1/2 h-[70vh]">
          <img className="rounded-lg w-full h-full" src={pic} alt="img"></img>
        </div>
      </div>
    </div>
  );
};

export default About;
