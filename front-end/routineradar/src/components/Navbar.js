import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar bg-gradient-to-r from-black via-purple-800 to-black bg-opacity-90 w-full h-14 flex justify-between items-center"> 
      {/* Logo on the left */}
      <div className="logo text-2xl font-bold text-white ml-5">
        Routine Radar
      </div>

      {/* Navigation links on the right */}
      <div className="nav-links flex space-x-6 mr-5"> 
        <Link
          to="/"
          className="text-white hover:bg-purple-600 px-4 py-2 rounded-md transition duration-300 ease-in-out"
        >
          Dashboard
        </Link>
        <Link
          to="/activities"
          className="text-white hover:bg-purple-600 px-4 py-2 rounded-md transition duration-300 ease-in-out"
        >
          Activities
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;