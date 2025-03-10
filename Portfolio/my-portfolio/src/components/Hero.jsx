import React from "react";
import { Link } from "react-router-dom";
import img1 from "../asstes/pic1.png"
import img2 from "../asstes/img2.png"
import img3 from "../asstes/img3.png"
import img4 from "../asstes/img4.png"
// import Contact from "./Contact";

const Hero = () => {
  return (
    <section id="hero" className="relative bg-[#0f172a] min-h-screen flex items-center justify-center">

      {/* Background */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>

      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center relative z-10">
        {/* left Section  */}
        <div className="md:w-1/2 text-white text-center md:text-left">
          <h2 className="text-lg text-red-400 font-semibold uppercase">Hello!</h2>
          <h1 className="text-4xl md:text-6xl font-bold mt-2">
            I Am <span className="text-red-400 typing-text">Daya Khichadiya</span>
          </h1>
          <p className="text-gray-300 text-lg mt-4">
            I'm a Web Developer with expertise in **React, Tailwind CSS, and modern UI/UX**.
            I create responsive, dynamic, and high-performance websites.
          </p>

          {/* CTA Buttons */}
          <div className="mt-6 space-x-4">
            
            <a href="/Download/DayaKhichadiya.pdf"
              className="bg-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-600 transition">
              Download CV
            </a>

            <Link to="/contact" className="bg-transparent border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition">
              Hire Me
            </Link>

            {/* <a href="" className="bg-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-600 transition" id="contact">Hire Me</a> */}
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
          <img
            src={img2}
            alt="Profile"
            className="w-72 h-72 object-cover rounded-full border-4 border-red-400 shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
