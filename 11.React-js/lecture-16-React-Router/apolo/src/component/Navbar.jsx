import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
    <div className='bg-gray-400 justify-center font-bold space-x-10'>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">AboutUs</NavLink>
            <NavLink to="/contact">ContactUs</NavLink>
        {/* <a href="/">Home</a>
        <a href="/AboutUs">AboutUs</a>
        <a href="/ContactUs">ContactUs</a> */}
    </div>
        <Outlet/>
    </>
  )
}

export default Navbar