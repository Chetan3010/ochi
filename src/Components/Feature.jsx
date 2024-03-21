/* eslint-disable no-unused-vars */
import React from "react";

export const Feature = () => {
  return (
    <div className="w-full py-20">
      <div className="w-full px-14 pb-14 border-b-2 border-zinc-700">
        <h1 className="font-['Neue_Montreal'] tracking-tight text-6xl">
          Featured projects
        </h1>
      </div>
      <div className="cards w-full flex gap-10 mt-10 px-14">
        <div className="relative cardcontainer w-1/2 h-[75vh]">
          <h1 className="text text-[#CDEA68] absolute left-full top-1/2 -translate-x-1/2 -translate-y-1/2 z-[9] leading-none tracking-tight text-8xl ">
            {"FYDE".split("").map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </h1>
          <div className="card w-full h-full rounded-xl overflow-hidden">
            <img
              className="w-full h-full"
              src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
              alt="fyde"
            />
          </div>
        </div>
        <div className="relative cardcontainer w-1/2 h-[75vh]">
          <h1 className="text text-[#CDEA68] absolute right-full top-1/2 -translate-y-1/2 translate-x-1/2 z-[10] leading-none tracking-tight text-8xl ">
            {"VISE".split("").map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </h1>
          <div className="card w-full h-full rounded-xl overflow-hidden">
            <img
              className="w-full h-full"
              src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
              alt="vise"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
