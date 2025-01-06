import React from 'react'
import { NavLink } from 'react-router'
// import ShopNow from './ShopNow'
// import Navbar from '../component/Navbar'

const Home = () => {
  return (
    <>
    <div>This is Home Page</div>
    <NavLink to='/ShopNow'>ShopNow</NavLink>
    </>
  )
}

export default Home