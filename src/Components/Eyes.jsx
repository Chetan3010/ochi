/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

const Eyes = () => {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    });
  });
  return (
    <div className="eyes w-full h-screen overflow-hidden ">
      <div
        data-scroll
        data-scroll-speed="-.7"
        className="relative w-full h-full bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg')]"
      >
        <div className="flex justify-between absolute w-1/3 h-70 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
          <div className="w-[14vw] h-[14vw] flex justify-center items-center rounded-full bg-zinc-100">
            <div className="w-2/3 h-2/3 relative rounded-full bg-zinc-900">
              <div
                style={{
                  transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                }}
                className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-5"
              >
                <div className="w-8 h-8 rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>
          <div className="w-[14vw] h-[14vw] flex justify-center items-center rounded-full bg-zinc-100">
            <div className="w-2/3 h-2/3 relative rounded-full bg-zinc-900">
              <div
                style={{
                  transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                }}
                className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-5"
              >
                <div className="w-8 h-8 rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eyes;
