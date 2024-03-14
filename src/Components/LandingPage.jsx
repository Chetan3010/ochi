/* eslint-disable no-unused-vars */
import React from 'react'
import { GoArrowUpRight } from "react-icons/go";

const LandingPage = () => {
  return (
   <div className="w-full h-screen bg-zinc-900 pt-1">
    <div className='textstructure mt-52 px-14'>
        {["we create","eye-opening","presentations"].map((item,index)=>{
            return (
                <div key={index} className='masker'>
                    <div className="m-fit flex items-center">
                        <h1 className="flex items-center h-full uppercase text-[9vw] leading-[7vw] font-['Founders_Grotesk_X-Condensed'] font-bold">{item}</h1>
                    </div>
                </div>
            )
        })}
    </div>
    <div className='border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center py-4 px-14'>
        {["For public and private companies","From the first pitch to IPO"].map((item,index)=>{
            return <p key={index} className='text-md font-light tracking-light leading-none'>{item}</p>
        })}
        <div className='start flex items-center gap-2'>
            <div className='px-5 py-2 border-[1px] border-zinc-400 font-light text-md uppercase rounded-full'>start the project</div>
            <div className='w-10 h-10 border-[1px] border-zinc-400 flex items-center justify-center rounded-full'>
                <span>
                    <GoArrowUpRight />
                </span>
            </div>
        </div>
        
    </div>
   </div>
  )
}

export default LandingPage