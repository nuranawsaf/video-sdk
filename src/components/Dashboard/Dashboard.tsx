import React from "react";
import { Layout } from "../layout/Layout";
import { Assignments } from "./assignment/Assignments";
import { RecentClass } from "./recentClass/RecentClass";
import { UpcommingClass } from "./upcommingClass/UpcommingClass";
import { VideoCall } from "./videoCall/VideoCall";

export const Dashboard = () => {
  return (
    <div className="h-screen ">
      <div className=" flex overflow-hidden m-4 gap-4">
        <aside className="lg:w-[60%] xl:w-[70%]  ">
          <VideoCall />
        </aside>
        <div className=" flex-1 max-h-full ">
          <UpcommingClass />
        </div>
      </div>
      <div className="flex overflow-hidden px-4 gap-4 rounded-3xl">
        <aside className="w-[35%]">
          <RecentClass />
        </aside>
        <div className="flex-1  max-h-full">
          <Assignments />
        </div>
      </div>
    </div>
  );
};
