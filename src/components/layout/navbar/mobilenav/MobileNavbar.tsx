import clsx from "clsx";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { MdOutlineMenu } from "react-icons/md";
import { sidebardata, SidebardataProps } from "../DasktopNavbar/sidebardata";

const MobileNavbar = () => {
  const router = useRouter();
  const [toggle, setToggle] = useState(false);

  return (
    <div className="md:hidden block">
      <div className="flex px-2 py-2 bg-white items-center justify-between shadow-md">
        <div>
          <h4 className="font-bold text-3xl">IQRA</h4>
        </div>
        <div>
          <div
            onClick={() => {
              setToggle(!toggle);
            }}
            className="text-teritory font-bold text-4xl"
          >
            <MdOutlineMenu className="cursor-pointer" />
          </div>
        </div>
      </div>
      <div>
        {toggle && (
          <div className="px-1 py-2 bg-white">
            {sidebardata.map((item, index) => {
              const isActive = router.pathname == item.href;
              return (
                <div
                  key={index}
                  className={clsx(
                    isActive
                      ? "text-primary border-l-4 h-8  flex items-center border-l-secondary"
                      : "text-teritory "
                  )}
                >
                  <div className="flex items-center gap-2 py-2 pl-2">
                    <item.icon className="" />
                    <a href={item.href} className="">
                      {item.title}
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileNavbar;
