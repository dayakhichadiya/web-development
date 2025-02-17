import React from "react";

const Navbar = () => {
    return (
      <nav className="bg-gradient-to-r from-indigo-600 to-purple-600 p-4 shadow-lg fixed w-full top-0 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-extrabold text-white">MyApp</h1>
          <ul className="flex space-x-6">
            <li><a href="#" className="text-white hover:text-gray-200 transition duration-300">Home</a></li>
            <li><a href="#" className="text-white hover:text-gray-200 transition duration-300">About</a></li>
            <li><a href="#" className="text-white hover:text-gray-200 transition duration-300">Services</a></li>
            <li><a href="#" className="text-white hover:text-gray-200 transition duration-300">Contact</a></li>
          </ul>
        </div>
      </nav>
    );
  };
  
  export default Navbar;