import { useState } from 'react'
import React from 'react'
import { AnimalList } from './Data'
  

/* syntax : useState React Hook
 const [state, setState] = useState(initialValue)
 */

const State = () => {

    const [index, setIndex] = useState(0)
    const totalItems = 10;

    const nextClick = () => {
        if (index < totalItems - 1) {
            setIndex((prevIndex) => prevIndex + 1);
        }
    }
    const prevClick = () => {
        if (index > 0) {
            setIndex((prevIndex) => prevIndex - 1);
        }
    }

    let List = [AnimalList[index]]
    console.log(List);

  return (
    <>
    <h1 className='heading'>This is react component </h1>
    <button className='btn' onClick={prevClick}>Prev</button>
    <button className='btn' onClick={nextClick}>Next</button>

    <div className='flex flex-wrap justify-around gap-y-8'>
            {
                List.map((item) => {
                    return (
                        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img
                                    className="rounded-t-lg h-52 w-full object-cover object-top"
                                    src={item.image}
                                    alt=""
                                />
                            </a>
                            <div className="p-5">
                                <a href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                        {item.id}.
                                        {item.name}
                                    </h5>
                                </a>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                    {item.description}
                                </p>
                                <a
                                    href="#"
                                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    Read more
                                </a>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    
    </>
)
}

export default State
