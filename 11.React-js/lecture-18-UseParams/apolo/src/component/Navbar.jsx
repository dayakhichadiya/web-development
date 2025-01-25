import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <div className='bg-gray-400'>
        <div className='bg-blue-400 p-4 font-bold flex jusitify-center text-center space-x-8 '>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">AboutUs</NavLink>
          <NavLink to="/help">ContactUs</NavLink>
          <NavLink to="/career">Career</NavLink>
        </div>
      </div>
      <Outlet />
    </>
  )
}

export default Navbar