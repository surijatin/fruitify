import React from "react";
import FruitList from "../components/FruitList/index.tsx";
import FruitJarComponent from "../components/FruitJarComponent/index.tsx";

const Home = () => {
  return (
    <div className="flex">
      <div className="flex-[0.6] bg-white px-4 border rounded-xl">
        <FruitList />
      </div>
      <div className="flex-[0.4] bg-white px-4 border rounded-xl flex flex-col ml-4">
        <FruitJarComponent />
      </div>
    </div>
  );
};

export default Home;
