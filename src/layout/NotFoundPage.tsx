import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage: React.FC = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center space-y-6">
      <h1 className="text-5xl font-extrabold mb-6">404 - Page Not Found</h1>
      <p className="text-xl text-center max-w-lg">
        Oops! Looks like you took a wrong turn at the banana 🍌 aisle. Let's
        peel out of here and find those fruits!
      </p>
      <Link
        to="/"
        className="text-blue-600 hover:text-blue-800 text-xl font-semibold transition duration-300 ease-in-out transform hover:scale-105 underline"
      >
        Go to Home Page
      </Link>
    </div>
  );
};

export default NotFoundPage;
