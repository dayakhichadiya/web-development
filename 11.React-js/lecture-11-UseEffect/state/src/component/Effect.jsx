import React from "react";
import { AnimalList } from "./Data";
import { useEffect, useState } from "react";


/* syntax : useState React Hook
 const [state, setState] = useState(initialValue)
 */

//  const Effect = () => {
//     const [count, setCount] = useState(0)
    
//     useEffect(() => {
//       setCount(prev => prev + 1)
//       return () => {
//         alert(`Click ${count}`)
//       }
//     })
//     return (
//       <div>
//       <h1 className="heading">This is useEffect hook in React</h1>
//       <button className="btn">Count</button>
//       </div>
//     )
//   }


const Effect = () => {

  const [data, setData] = useState([])
  console.log('Data', data)
  
  
  useEffect(() => {
    fetch('https://fakestoreapi.com/products') 
    .then(res => res.json())
    .then(res => setData(res))
  }, [])


  return (
    <div>
        <h1 className='heading'>This is React useEffect Hooks</h1>
        {
            data.map((item) => {
                return (
                    <>
                        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 first-line:">
                            <div className="flex flex-wrap justify-end px-4 pt-4">
                                <button
                                    id="dropdownButton"
                                    data-dropdown-toggle="dropdown"
                                    className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
                                    type="button"
                                >
                                    <span className="sr-only">Open dropdown</span>
                                    <svg
                                        className="w-5 h-5"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 16 3"
                                    >
                                        <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                                    </svg>
                                </button>
                                <div
                                    id="dropdown"
                                    className="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                                >
                                    <ul className="py-2" aria-labelledby="dropdownButton">
                                        <li>
                                            <a
                                                href="#"
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                            >
                                                Edit
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                            >
                                                Export Data
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                            >
                                                Delete
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="flex flex-col items-center pb-10">
                                <img
                                    className="w-24 h-24 mb-3 rounded-full shadow-lg"
                                    src={item.image}
                                    alt="Bonnie image"
                                />
                                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                                    {item.title}
                                </h5>
                                <span className="text-sm text-gray-500 dark:text-gray-400">
                                    {item.price}
                                </span>
                                <div className="flex mt-4 md:mt-6">
                                    <a
                                        href="#"
                                        className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    >
                                        Add To Cart
                                    </a>
                                    <a
                                        href="#"
                                        className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                                    >
                                        Read More
                                    </a>
                                </div>
                            </div>
                        </div>
                    </>

                )
            })
        }
    </div>
)
}


export default Effect












// const State = () => {
//   const [index, setIndex] = useState(0);
//   const [name, setName] = useState(false);

//   const toggle = () => {
//     setName(!name);
//   };

//   const totalItems = 10;

//   const nextClick = () => {
//     setIndex((prevIndex) => {
//       const newIndex = prevIndex + 1;
//       if (newIndex >= totalItems) {
//         return 0;
//       }
//       return newIndex;
//     });
//   };

//   const prevClick = () => {
//     if (index > 0) {
//       setIndex((prevIndex) => prevIndex - 1);
//     }
//   };

//   let List = [AnimalList[index]];
//   console.log(List);

//   return (
//     <>
//       <h1 className="heading">This is react component </h1>

//       <div className="flex flex-wrap justify-around gap-y-8 mt-6">
//         {List.map((item) => {
//           return (
//             <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
//               <a href="#">
//                 <img
//                   className="rounded-t-lg h-52 w-full object-cover object-top"
//                   src={item.image}
//                   alt=""
//                 />
//               </a>
//               <div className="p-5">
//                 <a href="#">
//                   <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
//                     {item.id}.{item.name}
//                   </h5>
//                 </a>
//                 {name && (
//                     <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
//                     {item.description}
//                     </p>
//                 )}
                
//                 <button
//                   onClick={toggle}
//                   className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//                   >
//                   {name ? "Read More" : "Read Less"}
//                 </button>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//       <button className="next-btn" onClick={prevClick}>
//         Prev
//       </button>
//       <button className="prev-btn" onClick={nextClick}>
//         Next
//       </button>
//     </>
//   );
// };

// export default State;
