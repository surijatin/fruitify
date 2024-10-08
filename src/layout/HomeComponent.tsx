import React from "react";
import FruitListComponent from "components/FruitListComponent";
import FruitJarComponent from "components/FruitJarComponent";
import ToasterWithMax from "components/ToasterComponent";

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="flex-[0.6] bg-white px-4 py-4 border rounded-xl mb-4 md:mb-0">
        <FruitListComponent />
      </div>
      <div className="flex-[0.4] bg-white px-4 py-4 border rounded-xl flex flex-col md:ml-4 h-full">
        <FruitJarComponent />
      </div>
      <ToasterWithMax />
    </div>
  );
};

export default Home;
