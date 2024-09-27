import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./HeaderComponent";
import FooterComponent from "./FooterComponent";

const LayoutComponent = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="px-8 py-4 flex-grow bg-zinc-200">
        <Outlet />
      </main>
      <FooterComponent />
    </div>
  );
};

export default LayoutComponent;
