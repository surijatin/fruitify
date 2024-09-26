import React from "react";

const FooterComponent: React.FC = () => {
  return (
    <footer className="bg-gray-100 text-white text-center py-4">
      <p className="text-lg font-semibold">
        <span className="text-slate-600">Designed</span>{" "}
        <span className="text-slate-400">and</span>
        <span className="text-slate-600"> developed</span>{" "}
        <span className="text-slate-400">by</span>
        <span className="text-slate-600"> Jatin Suri</span>
      </p>
    </footer>
  );
};

export default FooterComponent;
