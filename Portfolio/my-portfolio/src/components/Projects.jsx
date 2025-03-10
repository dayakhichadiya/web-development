// import React from "react";

// const projects = [
//   { id: 1, title: "E-commerce Website", desc: "A full-stack shopping site", img: "https://source.unsplash.com/400x300/?ecommerce" },
//   { id: 2, title: "Portfolio Site", desc: "A personal portfolio", img: "https://source.unsplash.com/400x300/?portfolio" },
// ];

// const Projects = () => {
//   return (
//     <section id="projects" className="max-w-7xl mx-auto text-center py-24 px-6">
//       <h2 className="text-4xl font-bold text-gray-800">My Projects</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
//         {projects.map((project) => (
//           <div key={project.id} className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition">
//             <img src={project.img} alt={project.title} className="w-full h-48 object-cover"/>
//             <div className="p-6">
//               <h3 className="text-xl font-bold text-gray-700">{project.title}</h3>
//               <p className="text-gray-500 mt-2">{project.desc}</p>
//               <a
//                 href="#"
//                 className="mt-4 inline-block bg-blue-500 text-white px-6 py-2 rounded-full shadow-lg hover:bg-blue-600 transition transform hover:scale-105"
//               >
//                 View Project
//               </a>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Projects;


const Projects = () => {
  const projects = [
    { title: "E-commerce Website", description: "Built with React & Tailwind CSS", link: "#" },
    { title: "Portfolio Website", description: "Designed for personal branding", link: "#" },
    { title: "Weather App", description: "Real-time weather updates using API", link: "#" },
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-indigo-400">My Projects</h2>
        <div className="grid md:grid-cols-3 gap-8 mt-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition">
              <h3 className="text-xl font-semibold text-indigo-300">{project.title}</h3>
              <p className="text-gray-400">{project.description}</p>
              <a href={project.link} className="mt-4 inline-block text-indigo-400 hover:text-indigo-300 transition">View Project →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
  