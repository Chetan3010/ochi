/* eslint-disable no-unused-vars */
import { motion, useAnimation } from "framer-motion";
import React from "react";

const Feature = () => {
  const cards = [useAnimation(), useAnimation()];

  const onHover = (index) => {
    cards[index].start({ y: "0" });
  };

  const onHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };

  return (
    <div className="w-full py-20">
      <div className="w-full px-14 pb-14 border-b-2 border-zinc-700">
        <h1 className="font-['Neue_Montreal'] tracking-tight text-6xl">
          Featured projects
        </h1>
      </div>
      <div className="cards w-full flex gap-10 mt-10 px-14">
        <motion.div 
        onHoverStart={()=>onHover(0)}
        onHoverEnd={ ()=> onHoverEnd(0) }
        className="relative cardcontainer w-1/2 h-[75vh]">
          <h1 className="text flex overflow-hidden text-[#CDEA68] absolute left-full top-1/2 -translate-x-1/2 -translate-y-1/2 z-[9] leading-none tracking-tight text-8xl ">
            {"FYDE".split("").map((item, index) => (
              <motion.span
                initial={{ y: "100%" }}
                animate={cards[0]}
                transition={{ease: [0.22, 1, 0.36, 1],delay: index*.05}}
                className="inline-block"
                key={index}
              >
                {item}
              </motion.span>
            ))}
          </h1>
          <div className="card w-full h-full rounded-xl overflow-hidden">
            <img
              className="w-full h-full"
              src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
              alt="fyde"
            />
          </div>
        </motion.div>
        <motion.div 
        onHoverStart={()=>onHover(1)}
        onHoverEnd={()=> onHoverEnd(1) }
        className="relative cardcontainer w-1/2 h-[75vh]">
          <h1 className="text flex overflow-hidden text-[#CDEA68] absolute right-full top-1/2 -translate-y-1/2 translate-x-1/2 z-[10] leading-none tracking-tight text-8xl ">
            {"VISE".split("").map((item, index) => (
              <motion.span
                initial={{ y: "100%" }}
                animate={cards[1]}
                transition={{ease: [0.22, 1, 0.36, 1],delay: index*.05}}
                className="inline-block"
                key={index}
              >
                {item}
              </motion.span>
            ))}
          </h1>
          <div className="card w-full h-full rounded-xl overflow-hidden">
            <img
              className="w-full h-full"
              src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
              alt="vise"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Feature;
