import React from "react";
import AvatarGroup from "./AvatarGroup";

export const Header = () => {
  return (
    <header>
      <div className="h-[55px] px-4 py-1 bg-[#0067A3] flex justify-between text-white">
        <p className="font-bold text-[28px]">Awesome Kanban Board</p>
        <AvatarGroup />
      </div>
    </header>
  );
};
