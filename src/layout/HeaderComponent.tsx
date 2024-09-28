import React, { useState } from "react";
import { Avatar } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Badge } from "antd";
import { Drawer } from "antd";

const Header = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const closeDrawer = () => {
    setDrawerVisible(false);
  };

  return (
    <div className="border-b flex px-4 md:px-16 pt-4">
      <div className="w-full flex justify-start">
        <img src="/logo.png" alt="Instamart Logo" className="h-24" />
      </div>
      <div className="ml-auto flex items-center md:hidden">
        <Badge count={1}>
          <Avatar
            icon={<ShoppingCartOutlined />}
            size={"large"}
            onClick={showDrawer}
          />
        </Badge>
      </div>
      <div className="ml-auto flex items-center hidden md:flex">
        <Avatar
          src="/avatar.png"
          size={"large"}
          className="text-white bg-gray-400 hover:cursor-pointer"
        />
        <div className="ml-2 flex flex-col">
          <span className="text-gray-800 font-semibold">Jatin Suri</span>
          <span className="text-gray-800 text-sm">surijatin16@gmail.com</span>
        </div>
        <Drawer
          title="Basic Drawer"
          onClose={closeDrawer}
          visible={drawerVisible}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Drawer>
      </div>
    </div>
  );
};

export default Header;
