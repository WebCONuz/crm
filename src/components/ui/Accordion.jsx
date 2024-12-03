import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const Accordion = ({ icon, title, data }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="px-2">
      <div
        onClick={() => setOpen(!open)}
        className={
          !open
            ? "cursor-pointer hover:text-blue-500 duration-200 py-[10px] px-4 flex items-center justify-between text-gray-500"
            : "cursor-pointer py-[10px] px-4 flex items-center justify-between text-white bg-blue-500 rounded-lg"
        }
      >
        <div className="flex items-center gap-x-2">
          {icon}
          <span className="font-semibold">{title}</span>
        </div>
        <IoIosArrowForward className={open && "rotate-90"} />
      </div>
      <div
        className={
          open
            ? "max-h-[800px] pl-8 py-3 duration-200 overflow-hidden"
            : "max-h-0 pl-8 py-0 duration-200 overflow-hidden"
        }
      >
        {data.map((item) => (
          <Link to="#" className="flex items-center w-full mb-3 gap-x-4">
            <div
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: item.color }}
            ></div>
            <span className="font-semibold text-gray-700">{item.title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
