import React from "react";

const HamburgerBtn = () => {
  return (
    <div className="flex cursor-pointer flex-col gap-1 p-4">
      <div className="h-1.5 w-1.5 rounded-full bg-black dark:bg-white"></div>
      <div className="h-1.5 w-1.5 rounded-full bg-black dark:bg-white"></div>
      <div className="h-1.5 w-1.5 rounded-full bg-black dark:bg-white"></div>
    </div>
  );
};

export default HamburgerBtn;
