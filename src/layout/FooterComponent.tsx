import React from "react";

const FooterComponent: React.FC = () => {
  return (
    <footer className="bg-neutral-100 text-white text-center py-4 border-t-2 border-slate-300">
      <p className="text-lg font-semibold">
        <span className="text-slate-600">Designed</span>{" "}
        <span className="text-slate-400">and</span>
        <span className="text-slate-600"> developed</span>{" "}
        <span className="text-slate-400">by</span>
        <a
          href="http://jatinsuri.in"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-600 underline py-1 rounded"
        >
          {" "}
          Jatin Suri
        </a>
      </p>
    </footer>
  );
};

export default FooterComponent;
