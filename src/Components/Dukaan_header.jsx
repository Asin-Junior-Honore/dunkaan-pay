import React from "react";
import { RiMessage2Fill } from "react-icons/ri";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";

const Dukaan_header = () => {
  return (
    <div className="flex  realative flex-col-reverse lg:flex-row items-start justify-between border lg:items-center py-[8px]">
      <div className=" flex items-center  justify-center  space-x-3">
        <h2 className=" font-bold text-2xl">payouts</h2>
        <p className=" text-sm">how it works</p>
      </div>

      <div className="bg-[#F2F2F2]   px-2 rounded flex items-center space-x-2 my-4 lg:my-0">
        <IoSearchOutline />
        <input
          type="text"
          placeholder="search features tutorials..."
          className=" bg-transparent outline-none py-1"
        />
      </div>

      <div className=" space-x-3 flex justify-center items-center">
        <b className=" py-1 px-1 bg-[#c0c0c0] rounded-full">
          <RiMessage2Fill className="text-xl" />
        </b>
        <b className=" py-1 px-1 bg-[#c0c0c0] rounded-full">
          <IoMdArrowDropdown className="text-xl" />
        </b>
      </div>
    </div>
  );
};

export default Dukaan_header;
