import React from "react";
import { Header } from "./navbar/DasktopNavbar/Header";
import { Sidebar } from "./navbar/DasktopNavbar/Sidebar";
import MobileNavbar from "./navbar/mobilenav/MobileNavbar";

export const Layout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <>
      <div>
        <div className="h-screen  flex md:overflow-hidden ">
          <aside className="md:w-[6rem] xl:w-[15rem]   h-full bg-white shadow-sm hidden md:block">
            <Sidebar />
          </aside>
          <main className="flex-1 h-full md:flex flex-col shadow-sm">
            <div className="hidden md:block">
              <Header />
            </div>
            <MobileNavbar />
            <div className="flex-1 overflow-scroll">{children}</div>
          </main>
        </div>
      </div>
    </>
  );
};
