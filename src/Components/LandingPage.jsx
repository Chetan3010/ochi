/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const LandingPage = () => {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.3"
      className="w-full h-screen bg-zinc-900 pt-1"
    >
      <div className="textstructure mt-36 px-14">
        {["we create", "eye-opening", "presentations"].map((item, index) => {
          return (
            <div key={index} className="masker">
              <div className="w-fit flex items-end overflow-hidden">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "8vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: "1" }}
                    className="mr-[1vw] w-[8vw] h-[5.7vw] -top-[1.2vw] rounded-md relative bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg')]"
                  ></motion.div>
                )}
                <h1 className="pt-[2vw] -mb-[1vw] flex items-center h-full uppercase text-[9vw] leading-[.75] font-['Founders_Grotesk_X_Condensed'] font-bold">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] border-zinc-800 mt-16 flex justify-between items-center py-4 px-14">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => {
          return (
            <p
              key={index}
              className="text-md font-light tracking-light leading-none"
            >
              {item}
            </p>
          );
        })}
        <div className="start flex items-center gap-2">
          <div className="px-5 py-2 border-[1px] border-zinc-400 font-light text-md uppercase rounded-full">
            start the project
          </div>
          <div className="w-10 h-10 border-[1px] border-zinc-400 flex items-center justify-center rounded-full">
            <span>
              <GoArrowUpRight />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
