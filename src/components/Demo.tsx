import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { tododata } from "./demodata";
import MobileNavbar from "./layout/navbar/mobilenav/MobileNavbar";

export const Demo = () => {
  // const [toggle, setToggle] = useState(false);
  return (
    // <div>
    //   {toggle && <p>Lorem is the most unsuccessful man</p>}
    //   <div
    //     className="ml-52 mt-52 text-6xl"
    //     onClick={() => {
    //       setToggle(!toggle);
    //     }}
    //   >
    //     {toggle ? <AiOutlineMinus /> : <AiOutlinePlus />}
    //   </div>
    // </div>

    <div>
      {tododata.map((item, index) => {
        return (
          <div key={index}>
            <Hm onItem={item} />
          </div>
        );
      })}
    </div>
  );
};

const Hm = ({ onItem }: { onItem: any }) => {
  return (
    <div>
      <h3>{onItem.title}</h3>
    </div>
  );
};
