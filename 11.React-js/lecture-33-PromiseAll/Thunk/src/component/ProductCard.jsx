import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../Redux/cartSlice";
import { useEffect, useState } from "react";

const ProductCard = ({ product }) => {

  const cartData = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const add = cartData.some((item)=> item.product_id === product.product_id);

  return (
    <div className="flex bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="flex-shrink-0">
        <img
          src={product.img}
          alt={product.name}
          className="h-48 w-48 object-cover"
        />
        {
          <button 
          className="btn"
          onClick={
            add 
                ? () => dispatch(removeFromCart(product.product_id))
                : () => dispatch(addToCart(product))
          }
        >
          {add ? "removeFromCart" : "addToCart"}
        </button>
}
      </div>
      <div className="p-4 flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-semibold text-gray-800">{product.name}</h2>
          <p className="text-gray-600 mt-2">
            {product.description || "No description available."}
          </p>
        </div>
        <div className="mt-4">
          <p className="text-green-500 text-lg font-bold">${product.price}</p>
          <button
            className="mt-2 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            onClick={() => dispatch(addToCart(product))}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
