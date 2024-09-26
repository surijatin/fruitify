import React from "react";
import { Avatar } from "antd";

const Header = () => {
  return (
    <div className="border-b flex px-32 pt-4">
      <div>
        <img src="/logo.png" alt="Instamart Logo" className="h-24" />
      </div>
      <div className="ml-auto flex items-center">
        <Avatar
          src="/avatar.png"
          size={"large"}
          className="text-white bg-gray-400 hover:cursor-pointer"
        />
        <div className="ml-2 flex flex-col">
          <span className="text-gray-800 font-semibold">Jatin Suri</span>
          <span className="text-gray-800 text-sm">surijatin16@gmail.com</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
