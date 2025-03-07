import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-gray-800">
              Task Manager
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/dashboard" className="text-gray-600 hover:text-gray-800">
              Dashboard
            </Link>
            <Link to="/tasks" className="text-gray-600 hover:text-gray-800">
              Tasks
            </Link>
            <Link to="/chat" className="text-gray-600 hover:text-gray-800">
              Chat
            </Link>
            <Link to="/profile" className="text-gray-600 hover:text-gray-800">
              Profile
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
