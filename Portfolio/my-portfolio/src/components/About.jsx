// import React from "react";
// import about from "../asstes/img3.png"

// const About = () => {
//   return (
//     <section id="about" className="py-20 px-6 bg-gradient-to-b from-gray-900 to-black text-white">
//       <div className="max-w-7xl mx-auto text-center">
//         <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
//         <img src={about} className="w-72 h-72 object-cover rounded-full border-4shadow-lg" ></img>
//         </div>
//         <h2 className="text-4xl font-extrabold text-indigo-400">About Me</h2>
//         <p className="mt-4 text-gray-300 text-lg">
//           I am a passionate **Web Developer** with expertise in **React.js, Tailwind CSS**, and **modern UI/UX**.
//           My goal is to create **responsive, high-performance, and visually appealing** websites.
//         </p>
//       </div>
//     </section>
//   );
// };

// export default About;


import React from "react";
import about from "../asstes/Photoroom-20250309_120434.png";
import about1 from "../asstes/about.jpeg"

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
        {/* Left Section - Image */}
        <div className="md:w-1/2 flex justify-center">
          <img src={about1} className="w-72 h-72 object-cover rounded-full border-4 border-indigo-500 shadow-lg" alt="About Me" />
        </div>

        {/* Right Section - Content */}
        <div className="md:w-1/2 text-center md:text-left mt-6 md:mt-0 md:pl-12">
          <h2 className="text-4xl font-extrabold text-indigo-400">About Me</h2>
          <p className="mt-4 text-gray-300 text-lg">
            I am a passionate <span className="font-semibold text-white">Web Developer</span> with expertise in 
            <span className="text-indigo-400"> React.js, Tailwind CSS</span>, and <span className="text-indigo-400">modern UI/UX</span>.
            My goal is to create <span className="text-red-400 font-semibold">responsive, high-performance</span>, 
            and visually appealing websites.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
