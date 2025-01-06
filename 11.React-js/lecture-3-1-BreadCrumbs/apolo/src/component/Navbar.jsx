import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';
import BreadCrumb from './BreadCrumb';

const Navbar = () => {
  return (
    <>
      <div className='bg-gray-400'>
        <div className='bg-blue-400 p-4 font-bold flex jusitify-center space-x-6 '>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">AboutUs</NavLink>
          <NavLink to="/help">ContactUs</NavLink>
          <NavLink to="/career">Career</NavLink>
        </div>
        <main>
          <BreadCrumb />
          <Outlet />
        </main>
      </div>
    </>
  )
}

export default Navbar