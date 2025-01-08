import React from 'react'
import { Link, Outlet } from 'react-router'


const TaskForm = () => {
  return (
    <>
    <div className=' border-2 border-black max-w-lg h-[470px] px-6 justify-center mx-auto mt-14 '>
    <div className='pt-4 text-center'>
        <h1 className='text-3xl font-bold text-center'>TaskForm</h1>
    </div>
    <div>
        <span className='block'>Name</span>
        <input type='text' placeholder='Enter the Name' className='mt-1' required></input>
    </div>
    <div>
        <span className='block'>Email</span>
        <input type='email' placeholder='Enter the email' className='mt-1' required></input>
    </div>
    <div>
        <span className='block'>password</span>
        <input type='password' placeholder='Enter the password' className='mt-1 ' required></input>
    </div>
   

    <div className='h-10 w-20 p-2 m-4 rounded-md text-center bg-violet-500'>
        <Link to="/TaskList">
        <button type='submit'>Submit</button>
        </Link>
    </div>
    <Outlet/>
    </div>

    </>
  )
}

export default TaskForm