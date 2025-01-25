import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Help = () => {
  return (
    <div>
    <h1>Help</h1>
    <p> Apple Support Page is just one example of a modern support page for consumer goods. The layout is clean and easy to navigate, making it easy for customers to find the information they need. The design also makes it evident that Apple cares about its customers and wants them to have an enjoyable experience.</p>
    <nav>
        <Link to="Ques">Ques</Link>
        <Link to="ContactUs">ContactUs</Link>
    </nav>
    <Outlet/>
    </div>
  )
}

export default Help