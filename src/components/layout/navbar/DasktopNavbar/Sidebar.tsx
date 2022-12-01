import clsx from "clsx";
import { useRouter } from "next/router";
import React from "react";
import MobileNavbar from "../mobilenav/MobileNavbar";
import { sidebardata, SidebardataProps } from "./sidebardata";

export const Sidebar = () => {
  const router = useRouter();

  return (
    <div className=" w-72 h-full">
      <p className="text-3xl px-2 xl:px-8 py-5 font-bold">IQRA</p>

      <div className="w-full ">
        {sidebardata.map((item: SidebardataProps, index) => {
          const isActive = router.pathname == item.href;
          return (
            <div
              key={index}
              className={clsx(
                isActive
                  ? "text-primary border-l-2 h-8 ml-[2px] flex items-center border-l-secondary"
                  : "text-teritory "
              )}
            >
              <div className="flex items-center  gap-3 font-semibold my-8 px-8">
                <a href={item.href}>
                  <item.icon className="text-xl  cursor-pointer" />
                </a>
                <div>
                  <a className="font-semibold hidden xl:block" href={item.href}>
                    {item.title}
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
