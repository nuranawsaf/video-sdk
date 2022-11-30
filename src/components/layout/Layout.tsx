import React from "react";
import { Header } from "./DasktopNavbar/Header";
import { Sidebar } from "./DasktopNavbar/Sidebar";

export const Layout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="h-screen  flex overflow-hidden">
      <aside className="w-[6rem] xl:w-[15rem]   h-full bg-white shadow-sm">
        <Sidebar />
      </aside>
      <main className="flex-1 h-full flex flex-col shadow-sm">
        <Header />
        <div className="flex-1 overflow-scroll">{children}</div>
      </main>
    </div>
  );
};
