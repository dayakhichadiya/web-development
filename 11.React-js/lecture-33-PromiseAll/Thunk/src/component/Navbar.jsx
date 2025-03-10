import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {

    const cartItem = useSelector((state) => state.cart)

    console.log(cartItem);

    return (
        <div>
            <ul className='flex justify-evenly p-4 bg-blue-700 text-white font-black'>
                <li><NavLink to="/">SHOP</NavLink></li>
                <li><NavLink to="/cart">CART ({cartItem.length})</NavLink></li>
            </ul>
        </div>
    )
} 

export default Navbar


// https://api.escuelajs.co/api/v1/products
