import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div className='p-4 bg-gray-400 text-white font-bold flex justify-center space-x-8'>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/aboutPage">About Us</NavLink>
      <NavLink to="/shoppage">Shop Now</NavLink>
      <NavLink to="/productview">ProductView</NavLink>
    </div>
      {/* <Outlet/> */}
    </>
  )
}

export default Navbar