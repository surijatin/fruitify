import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./HeaderComponent.tsx";
import FooterComponent from "./FooterComponent.tsx";

const LayoutComponent = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="px-8 py-4 flex-grow">
        <Outlet />
      </main>
      <FooterComponent />
    </div>
  );
};

export default LayoutComponent;
