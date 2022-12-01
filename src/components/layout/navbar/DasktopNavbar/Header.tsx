import React from "react";
import { BiSearch } from "react-icons/bi";
import { MdOutlineMail, MdNotificationsNone } from "react-icons/md";
import { BiChevronDown } from "react-icons/bi";
import { useRouter } from "next/router";

export const Header = () => {
  const { asPath } = useRouter();

  return (
    <div className="bg-white md:px-3 lg:px-8 w-full py-5 flex items-center justify-between">
      <div>
        <h3 className="font-semibold">Dashboard</h3>
      </div>

      <div className=" flex items-center w-max h-full">
        <div className="relative">
          <BiSearch className=" absolute top-[6px] text-teritory" />
          <input
            type="search"
            className="ml-7"
            placeholder="Search anywhere"
            name=""
            id=""
          />
        </div>

        <div className="flex items-center text-teritory gap-7 text-xl">
          <div>
            <MdOutlineMail />
          </div>

          <div>
            <MdNotificationsNone />
          </div>
        </div>

        <div className="ml-16 flex items-center">
          <h5 className="font-semibold">Kulsum Ara</h5>

          <div className="ml-2">
            <img
              className="w-8 h-8 rounded-full"
              src="https://images.unsplash.com/photo-1602233158242-3ba0ac4d2167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80"
              alt=""
            />
          </div>

          <BiChevronDown className="text-teritory ml-2" />
        </div>
      </div>
    </div>
  );
};
