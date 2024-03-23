/* eslint-disable no-unused-vars */
import React from "react";

const Cards = () => {
  return (
    <div className="w-full h-screen bg-zinc-100 px-14 flex items-center gap-5 py-20">
      <div className="cardcontainer w-1/2 h-[55vh] ">
        <div className="card relative rounded-xl w-full h-full bg-[#004d43] flex items-center justify-center">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt="ochi"
          />
          <button className="absolute left-8 bottom-8 z-20 rounded-full text-[#cdea68] border-[1px] font-['Neue_Montreal'] px-4 py-1 border-[#cdea68]">
            &copy;2019-2022
          </button>
        </div>
      </div>
      <div className="cardcontainer w-1/2 h-[55vh] flex gap-5">
        <div className="relative card rounded-xl w-1/2 h-full bg-[#192826] flex justify-center items-center">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
            alt="ochi"
          />
          <button className="absolute left-8 bottom-8 z-20 rounded-full text-zinc-100 border-[1px] font-['Neue_Montreal'] px-4 py-1 border-zinc-100 uppercase">
            rating 5.0 on clutch
          </button>
        </div>
        <div className="relative card rounded-xl w-1/2 h-full bg-[#192826] flex justify-center items-center">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
            alt="ochi"
          />
          <button className="absolute left-8 bottom-8 z-20 rounded-full text-zinc-100 border-[1px] font-['Neue_Montreal'] px-4 py-1 border-zinc-100 uppercase">
            business bootcamp alumni
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
