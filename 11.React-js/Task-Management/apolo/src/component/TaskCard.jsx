import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {TaskContext} from "./TaskContext"

const TaskCard = () => {
    // const { tasks } = useContext(TaskContext);
  const location = useLocation();
  const tasks = location.state?.tasks || [];
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <div className="w-full max-w-4xl p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Task List</h2>
        <ul>
        {/* {tasks.map((task, index) => (
          <li key={index}>{task.name} - {task.desc}</li>
        ))} */}
      </ul>
        {tasks.length > 0 ? (
          <table className="w-full border-collapse border border-gray-300 text-left">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2">#Id</th>
                <th className="border border-gray-300 px-4 py-2">Title</th>
                <th className="border border-gray-300 px-4 py-2">Description</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task, index) => (
                <tr key={task.id || index} className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
                  <td className="border border-gray-300 px-4 py-2">{task.name}</td>
                  <td className="border border-gray-300 px-4 py-2">{task.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-center text-gray-600">No tasks available.</p>
        )}
        <div className="text-right mt-4">
          <Link
            to="/TaskList"
            className="inline-block px-6 py-2 text-sm font-medium text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Back to Add Task
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;


// import React, { useContext } from "react";
// import { Link } from "react-router-dom";
// import { TaskContext } from "./TaskContext";

// const TaskCard = () => {
//   const { tasks } = useContext(TaskContext);

//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
//       <div className="w-full max-w-4xl p-6 bg-white shadow-md rounded-lg">
//         <h2 className="text-2xl font-bold text-center mb-6">Task List</h2>
//         {tasks.length > 0 ? (
//           <table className="w-full border-collapse border border-gray-300 text-left">
//             <thead>
//               <tr className="bg-gray-100">
//                 <th className="border border-gray-300 px-4 py-2">#</th>
//                 <th className="border border-gray-300 px-4 py-2">Title</th>
//                 <th className="border border-gray-300 px-4 py-2">Description</th>
//               </tr>
//             </thead>
//             <tbody>
//               {tasks.map((task, index) => (
//                 <tr key={task.id || index} className="hover:bg-gray-50">
//                   <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
//                   <td className="border border-gray-300 px-4 py-2">{task.name}</td>
//                   <td className="border border-gray-300 px-4 py-2">{task.desc}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         ) : (
//           <p className="text-center text-gray-600">No tasks available.</p>
//         )}
//         <div className="text-right mt-4">
//           <Link
//             to="/TaskList"
//             className="inline-block px-6 py-2 text-sm font-medium text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
//           >
//             Back to Add Task
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TaskCard;

// // import React, { useContext } from "react";
// // import { TaskContext } from "./TaskContext";
// // import { useLocation } from "react-router";

// // const TaskCard = () => {
// //     const location = useLocation();
// //     const tasks = location.state?.tasks || [];
// // //   const { tasks } = useContext(TaskContext);

// //   return (
// //     <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
// //       <div className="w-full max-w-4xl p-6 bg-white shadow-md rounded-lg">
// //         <h2 className="text-2xl font-bold text-center mb-6">Task List</h2>
// //         {tasks.length > 0 ? (
// //           <table className="w-full border-collapse border border-gray-300 text-left">
// //             <thead>
// //               <tr className="bg-gray-100">
// //                 <th className="border border-gray-300 px-4 py-2">#</th>
// //                 <th className="border border-gray-300 px-4 py-2">Title</th>
// //                 <th className="border border-gray-300 px-4 py-2">Description</th>
// //               </tr>
// //             </thead>
// //             <tbody>
// //               {tasks.map((task, index) => (
// //                 <tr key={task.id || index} className="hover:bg-gray-50">
// //                   <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
// //                   <td className="border border-gray-300 px-4 py-2">{task.name}</td>
// //                   <td className="border border-gray-300 px-4 py-2">{task.desc}</td>
// //                 </tr>
// //               ))}
// //             </tbody>
// //           </table>
// //         ) : (
// //           <p className="text-center text-gray-600">No tasks available.</p>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default TaskCard;
