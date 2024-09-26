import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LayoutComponent from "./layout/LayoutComponent.tsx";
import Home from "./layout/HomeComponent.tsx";

export default function App() {
  return (
    <Router>
      <div className="h-screen flex">
        <div className="hidden md:block"></div>
        <div className="flex flex-col w-full">
          <Routes>
            <Route path="/" element={<LayoutComponent />}>
              <Route index element={<Home />} />
            </Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}
