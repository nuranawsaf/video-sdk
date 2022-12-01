import React from "react";
import { CgRecord } from "react-icons/cg";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { AiOutlineAudioMuted } from "react-icons/ai";
import { HiOutlineVideoCamera } from "react-icons/hi";
import { BsChatLeftText, BsFullscreen } from "react-icons/bs";
import { SlOptions } from "react-icons/sl";

export const VideoCall = () => {
  return (
    <div className="flex    text-teritory  relative  px-2 md:px-0 mt-2 md:mt-0">
      <div className="bg-red-500 text-sm md:text-base h-max px-3 rounded-md text-red-500 font-semibold absolute bg-opacity-5  top-4 right-4">
        Leave
      </div>
      <div className=" md:w-fit ">
        <img
          className="md:rounded-t-3xl rounded-t-lg  max-w-full"
          src="/assests/images/asian-girl.jpg"
          alt=""
        />
        <div className=" flex justify-between items-center px-2 md:px-8 pt-2 pb-2 md:pt-4 md:pb-4  bg-white rounded-b-lg md:rounded-b-3xl">
          <div className="flex items-center ">
            <div className="">
              <CgRecord className="text-center w-full md:text-2xl" />
              <h6 className="hidden md:block">Record</h6>
            </div>
            <div className="ml-3 md:ml-6">
              <MdOutlinePeopleAlt className="text-center w-full md:text-2xl" />
              <h6 className="hidden md:block">Classmate</h6>
            </div>
          </div>
          <div className="flex gap-2 md:gap-4">
            <div className="border  h-max p-2 md:p-3 rounded-full text-black text-xs md:text-2xl">
              <AiOutlineAudioMuted />
            </div>
            <div className="text-xs md:text-2xl border  h-max p-2 md:p-3 rounded-full text-white bg-red-400">
              <HiOutlineVideoCamera />
            </div>
            <div className="text-xs md:text-2xl border  h-max p-2 md:p-3 rounded-full text-black">
              <BsChatLeftText />
            </div>
          </div>

          <div className="flex gap-3 md:gap-6  md:text-2xl">
            <SlOptions />
            <BsFullscreen />
          </div>
        </div>
      </div>
    </div>
  );
};
