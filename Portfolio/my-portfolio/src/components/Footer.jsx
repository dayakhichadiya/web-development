const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-black text-white py-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        
        {/* Footer Branding */}
        <h2 className="text-xl font-bold text-indigo-400">Daya Khichadiya</h2>
        
        {/* Footer Links */}
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#about" className="text-gray-300 hover:text-indigo-400 transition">About</a>
          <a href="#projects" className="text-gray-300 hover:text-indigo-400 transition">Projects</a>
          <a href="#contact" className="text-gray-300 hover:text-indigo-400 transition">Contact</a>
        </div>

        {/* Copyright Section */}
        <p className="text-gray-400 text-sm mt-4 md:mt-0">
          © {new Date().getFullYear()} Daya Khichadiya. All rights reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;
