import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../Redux/cartSlice';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);

  const dispatch = useDispatch()

  const removeItem = (id) => {
    dispatch(removeFromCart(id))
  }

  if (cartItems.length === 0) return <p className="text-center text-gray-500">Your cart is empty...</p>;


  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Cart Page</h1>
      <div>
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex flex-col md:flex-row items-center bg-white border rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={item.img}
              alt={item.name}
              className="w-full md:w-1/3 h-48 object-cover"
            />
            <div className="w-full md:w-1/3 p-4">
              <h2 className="text-xl font-semibold text-gray-800">{item.name}</h2>
              <p className="text-gray-600 mt-2">{item.description}</p>
              <p className="text-green-600 font-bold mt-2">${item.price}</p>
              <button className="bg-blue-500 text-white py-2 px-4 rounded mt-4 hover:bg-blue-600"
              onClick={()=> removeItem(item.id)}>
                Remove from Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
