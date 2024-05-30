import React, { useState } from "react";
import { AiOutlineClose, AiOutlinePlus } from "react-icons/ai";

const Faq = ({ title, description }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="mx-auto flex-col py-[2px] px-[20px] sm:max-w-screen-md">
      <div className="my-[2px] flex justify-between bg-[#303030] py-4 px-[2px] sm:py-5">
        <h1 className="text-lg sm:text-2xl">{title}</h1>
        {show ? (
          <AiOutlineClose
            onClick={() => setShow(!show)}
            className="h-8 w-8 cursor-pointer"
          />
        ) : (
          <AiOutlinePlus
            onClick={() => setShow(!show)}
            className="h-8 w-8 cursor-pointer"
          />
        )}
      </div>
      {show && (
        <div className="bg-[#303030]">
          <p className="px-2 py-4 text-lg sm:py-4 sm:text-2xl ">
            {description}
          </p>
        </div>
      )}
      
    </div>
  );
};

export default Faq;
