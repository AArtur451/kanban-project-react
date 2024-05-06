import React from "react";
import { FaChevronDown } from "react-icons/fa";
import img from "../assets/profile.png";

function AvatarGroup() {
  return (
    <div className="flex gap-1 items-center px-5 cursor-pointer">
      <img src={img} className="w-[40px] h-[40px]" />
      <FaChevronDown className="w-[30px]" />
    </div>
  );
}

export default AvatarGroup;
