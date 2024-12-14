import { useState } from "react";
import React from "react";
import { AnimalList } from "./Data";


/* syntax : useState React Hook
 const [state, setState] = useState(initialValue)
 */

const State = () => {
  const [index, setIndex] = useState(0);
  const [name, setName] = useState(false);
    
  const [direction, setDirection] = useState("")

  const toggle = () => {
    setName(!name);
  };

  const handleNavigate = (step) =>{
    setDirection(step > 0 ? "slide-in-from-left" : "slide-in-from-right");
  }

  const totalItems = 10;

  const nextClick = () => {
    // setDirection("slide-in-from-right");
    handleNavigate(-1);
    setName(false)
    setIndex((prevIndex) => {
      const newIndex = prevIndex + 1;
      if (newIndex >= totalItems) {
        return 0;
      }
      return newIndex;
    });
  };

  const prevClick = () => {
    // setDirection("slide-in-from-left");
    handleNavigate(1);
    setName(false)

    if (index > 0) {
      setIndex((prevIndex) => prevIndex - 1);
    }
  };

  let List = [AnimalList[index]];
  console.log(List);

  return (
    <>
      <h1 className="heading">This is react component </h1>

      <div className="flex flex-wrap justify-around gap-y-8 mt-6">
        {List.map((item) => {
          return (
            <div className="slide-in max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">

              <div className={`card ${direction}`}>
              <a href="#">
                <img
                  className="rounded-t-lg h-52 w-full object-cover object-top"
                  src={item.image}
                  alt=""
                />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight ">
                    {item.id}.{item.name}
                  </h5>
                </a>
                {name && (
                    <p className="mb-3 font-normal text-gray-400 dark:text-gray-400">
                    {item.description} Family [{item.family}]
                    </p>
                )}
                
                <button
                  onClick={toggle}
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                  {name ? "Read Less" : "Read More"}
                </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <button className="next-btn" onClick={prevClick}>
        Prev
      </button>
      <button className="prev-btn" onClick={nextClick} >
        Next
      </button>
    </>
  );
};

export default State;