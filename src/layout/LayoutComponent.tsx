import React from "react";
import { Outlet } from "react-router-dom";
import Header from "layout/HeaderComponent";
import FooterComponent from "layout/FooterComponent";

const LayoutComponent = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="px-4 py-4 flex-grow bg-zinc-200">
        <Outlet />
      </main>
      <FooterComponent />
    </div>
  );
};

export default LayoutComponent;
