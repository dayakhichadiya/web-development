import React from 'react'
import { NavLink, Outlet} from 'react-router-dom';

const Navbar = () => {
  return (
    <>
    <div className='bg-gray-400'>
    <div className='p-4 bg-white flex justify-center font-bold space-x-10'>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">AboutUs</NavLink>
            <NavLink to="/contact">ContactUs</NavLink>
            <NavLink to="/blog">Blog</NavLink>
    </div>
    </div>
    <Outlet/>
    </>
  )
}

export default Navbar