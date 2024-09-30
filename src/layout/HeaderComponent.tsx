import React from "react";
import { Avatar } from "antd";

const Header = () => {
  return (
    <div className="border-b flex px-16 pt-4">
      <div className="w-full flex justify-center md:justify-start">
        <img src="/logo.png" alt="Instamart Logo" className="h-24" />
      </div>
      <div className="ml-auto flex items-center hidden md:flex">
        <Avatar
          src="/avatar.png"
          size={"large"}
          className="text-white bg-gray-400 hover:cursor-pointer"
        />
        <div className="ml-2 flex flex-col">
          <a
            href="http://jatinsuri.in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 font-semibold"
          >
            Jatin Suri
          </a>
          <span className="text-gray-800 text-sm">surijatin16@gmail.com</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
