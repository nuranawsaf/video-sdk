import React from "react";
import { CgRecord } from "react-icons/cg";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { AiOutlineAudioMuted } from "react-icons/ai";
import { HiOutlineVideoCamera } from "react-icons/hi";
import { BsChatLeftText, BsFullscreen } from "react-icons/bs";
import { SlOptions } from "react-icons/sl";

export const VideoCall = () => {
  return (
    <div className="flex    text-teritory  relative">
      <div className="bg-red-500 h-max px-3 rounded-md text-red-500 font-semibold absolute bg-opacity-5  top-4 right-4">
        Leave
      </div>
      <div className=" w-fit">
        <img
          className="rounded-t-3xl"
          src="/assests/images/asian-girl.jpg"
          alt=""
        />
        <div className=" flex justify-between items-center px-8 pt-4 pb-4  bg-white rounded-b-3xl">
          <div className="flex items-center ">
            <div className="">
              <CgRecord className="text-center w-full text-2xl" />
              <h6>Record</h6>
            </div>
            <div className="ml-6">
              <MdOutlinePeopleAlt className="text-center w-full text-2xl" />
              <h6>Classmate</h6>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="border  h-max p-3 rounded-full text-black text-2xl">
              <AiOutlineAudioMuted />
            </div>
            <div className="text-2xl border  h-max p-3 rounded-full text-white bg-red-400">
              <HiOutlineVideoCamera />
            </div>
            <div className="text-2xl border  h-max p-3 rounded-full text-black">
              <BsChatLeftText />
            </div>
          </div>

          <div className="flex gap-6 text-2xl">
            <SlOptions />
            <BsFullscreen />
          </div>
        </div>
      </div>
    </div>
  );
};
