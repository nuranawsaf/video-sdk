import clsx from "clsx";
import React from "react";
import { upcommingdata } from "./upcommingdata";

export const UpcommingClass = () => {
  return (
    <div className="lg:pt-1 xl:py-5 rounded-3xl bg-white h-full">
      <h4 className="font-semibold ml-3 xl:ml-6">Upcoming Classes</h4>
      <div className="lg:px-3 xl:px-6">
        {upcommingdata.map((item) => {
          return (
            <div className="flex justify-between items-center lg:py-1 xl:py-2 2xl:py-4 ">
              <div className="flex items-center gap-4">
                <div
                  className={clsx(
                    "text-white",
                    item.title == "English" && "bg-pink p-4 rounded-full",
                    item.title == "Photography" && "bg-downy p-4 rounded-full",
                    item.title == "History" && "bg-secondary p-4 rounded-full",
                    item.title == "Arts" && "bg-teritory p-4 rounded-full",
                    item.title == "General Science" &&
                      "bg-blue p-4 rounded-full",
                    item.title == "Music" && "bg-purpole p-4 rounded-full"
                  )}
                >
                  <item.icon />
                </div>

                <div>
                  <h6 className="font-semibold text-gray-700">{item.title}</h6>
                  <div className="flex items-center gap-1 text-teritory">
                    <item.dateIcon />
                    {item.date}
                  </div>
                </div>
              </div>

              <div className="text-teritory">
                <item.menuIcon />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
