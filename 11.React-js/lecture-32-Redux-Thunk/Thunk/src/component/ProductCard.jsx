// import React from "react";
// import { useDispatch } from "react-redux";
// import { addToCart } from "../Redux/cartSlice";

// const ProductCard = ({ product }) => {

//     const dispatch = useDispatch()

//   return (
//     <div className="bg-white shadow-xl rounded-xl p-4 max-w-xs">
        
//         <img src={product.img} 
//         alt={product.name}
//         className="w-full h-50 object-cover rounded-lg" />
//          <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
//       <p className="text-gray-600 text-sm">{product.description || "No description available."}</p>
//       <p className="text-green-600 font-bold mt-2">${product.price}</p>
//       <button className="mt-3 bg-blue-500 text-white py-1 px-4 rounded-md hover:bg-blue-600"
//       onClick={() => dispatch(addToCart(product))}>

//         Add to Cart
//       </button>
//     </div>
//   );
// };

// export default ProductCard;

import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/cartSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="flex-shrink-0">
        <img
          src={product.img}
          alt={product.name}
          className="h-48 w-48 object-cover"
        />
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
