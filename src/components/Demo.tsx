import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

export const Demo = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      {toggle && <p>Lorem is the most unsuccessful man</p>}
      <div
        className="ml-52 mt-52 text-6xl"
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        {toggle ? <AiOutlineMinus /> : <AiOutlinePlus />}
      </div>
    </div>
  );
};
