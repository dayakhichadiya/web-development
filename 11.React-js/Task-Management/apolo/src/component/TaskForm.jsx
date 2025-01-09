// import React from 'react'
// import { Link, Outlet } from 'react-router'


// const TaskForm = () => {
//   return (
//     <>
//     <div className=' border-2 border-black max-w-lg h-[470px] px-6 justify-center mx-auto mt-14 '>
//     <div className='pt-4 text-center'>
//         <h1 className='text-3xl font-bold text-center'>TaskForm</h1>
//     </div>
//     <div>
//         <span className='block'>Name</span>
//         <input type='text' placeholder='Enter the Name' className='mt-1' required></input>
//     </div>
//     <div>
//         <span className='block'>Email</span>
//         <input type='email' placeholder='Enter the email' className='mt-1' required></input>
//     </div>
//     <div>
//         <span className='block'>password</span>
//         <input type='password' placeholder='Enter the password' className='mt-1 ' required></input>
//     </div>


//     <div className='h-10 w-20 p-2 m-4 rounded-md text-center bg-violet-500'>
//         <Link to="/TaskList">
//         <button type='submit'>Submit</button>
//         </Link>
//     </div>
//     <Outlet/>
//     </div>

//     </>
//   )
// }

// export default TaskForm

import React from 'react';
import { Link } from 'react-router';

const TaskForm = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-sm p-6 bg-white border border-gray-300 rounded shadow-lg shadow-slate-700">
                <h1 className="mb-4 text-2xl font-bold text-center">TaskForm</h1>
                <form>
                    <div className="mb-4">
                        <label
                            htmlFor="name"
                            className="block mb-1 text-md font-semibold text-gray-700"
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Enter the Name"
                            className="w-full px-3 py-2 text-sm border border-gray-400 rounded "
                        />
                    </div>

                    <div className="mb-4">
                        <label
                            htmlFor="email"
                            className="block mb-1 text-md font-semibold text-gray-700"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter the email"
                            className="w-full px-3 py-2 text-sm border border-gray-400 rounded"
                        />
                    </div>

                    <div className="mb-6">
                        <label
                            htmlFor="password"
                            className="block mb-1 text-md font-semibold text-gray-700"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter the password"
                            className="w-full px-3 py-2 text-sm border border-gray-400 rounded"
                        />
                    </div>
                    <Link to="/TaskList">     
                    <button
                        type="submit"
                        className="w-full px-4 py-2 text-white bg-purple-500 rounded hover:bg-purple-600 "
                    >
                        Submit
                    </button>
                    </Link>
                </form>
            </div>
        </div>
    );
};

export default TaskForm;
