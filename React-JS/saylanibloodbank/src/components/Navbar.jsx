import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">
          <Link to="/">SaylaniBloodBank</Link>
        </div>
        <div className="space-x-4">
        <Link to="/" className="text-gray-300 hover:text-white">
            Home
          </Link>
          <Link to="/blood-form" className="text-gray-300 hover:text-white">
          Bloodform
          </Link>
          <Link to="/blood-list" className="text-gray-300 hover:text-white">
            BloodList
          </Link>
          <Link to="/chat" className="text-gray-300 hover:text-white">
            Chat
          </Link>
        </div>
        <div className="flex gap-5">
          <Link to="/login" className="text-gray-300 hover:text-white">
            Login
          </Link>
          <Link to="/register" className="text-gray-300 hover:text-white">
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
