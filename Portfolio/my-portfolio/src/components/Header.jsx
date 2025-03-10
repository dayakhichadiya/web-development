import React from "react";

const Header = () => {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-gray-900 to-black shadow-lg py-4 px-6 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">Daya Khichadiya</h1>
        <div className="space-x-6">
          <button onClick={() => handleScroll("about")} className="text-gray-300 hover:text-indigo-400 transition">About</button>
          <button onClick={() => handleScroll("projects")} className="text-gray-300 hover:text-indigo-400 transition">Projects</button>
          <button onClick={() => handleScroll("contact")} className="text-gray-300 hover:text-indigo-400 transition">Contact</button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
