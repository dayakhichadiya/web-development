import React, { useContext } from "react";
import { Link } from "react-router-dom"; 
import { ProductsContext } from "./ProductContext";

const ShopPage = () => {
  const { products, toggleWishlist, isInWishlist } = useContext(ProductsContext);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <div key={product.id} className="bg-white p-4 rounded-lg shadow-md">
          <img
            src={product.image}
            alt={product.title}
            className="w-32 h-32 object-contain mb-4"
          />
          <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
          
          <Link
            to={`/product/${product.id}`}
            className="text-blue-500 hover:underline"
          >
            View Product
          </Link>

          <button
            onClick={() => toggleWishlist(product)}
            className="px-4 py-2 mt-4 flex items-center gap-2 rounded-md transition"
          >
            {isInWishlist(product.id) ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-red-500"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-700"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            )}
            {isInWishlist(product.id) ? "Remove from Wishlist" : "Add to Wishlist"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default ShopPage;
