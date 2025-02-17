import React from 'react'
import { NavLink, Outlet} from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const {isAuth, setIsAuth} =  useAuth()
  return (
    <>
    <div className='bg-gray-400'>
    <div className='p-4 bg-white flex justify-center font-bold space-x-10'>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">AboutUs</NavLink>
            <NavLink to="/contact">ContactUs</NavLink>
            {
              isAuth ? <button onClick={() => setIsAuth(false)}>Logout</button> :
              <NavLink to="/login">Login</NavLink>
            }
              <NavLink to="/signup">Signup</NavLink>

    </div>
    </div>
    <Outlet/>
    </>
  )
}

export default Navbar