import React from "react";
import FruitList from "../components/FruitList/index.tsx";
import FruitJarComponent from "../components/FruitJarComponent/index.tsx";
import { ToasterWithMax } from "../components/ToasterComponent/index.tsx";

const Home = () => {
  return (
    <div className="flex">
      <div className="flex-[0.7] bg-white px-4 py-4 border rounded-xl">
        <FruitList />
      </div>
      <div className="flex-[0.3] bg-white px-4 py-4 border rounded-xl flex flex-col ml-4 h-full">
        <FruitJarComponent />
      </div>
      <ToasterWithMax />
    </div>
  );
};

export default Home;
