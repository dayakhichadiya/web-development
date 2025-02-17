
import React from "react";
import { useContext } from "react";
import { ProductsContext } from "./ProductContext";

const ProductView = () => {
  const { wishlist, toggleWishlist } = useContext(ProductsContext);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-6xl mx-auto p-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Your Wishlist</h1>
        {wishlist.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {wishlist.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-48 w-full object-contain p-4"
                />
                <div className="p-4">
                  <h2 className="text-lg font-semibold text-gray-700">
                    {product.title}
                  </h2>
                  <p className="text-gray-500 mt-1">${product.price}</p>
                  <button
                    onClick={() => toggleWishlist(product)}
                    className="mt-4 w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-colors duration-300"
                  >
                    Remove from Wishlist
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-96">
            <h2 className="text-xl font-medium text-gray-600">
              Your wishlist is empty.
            </h2>
            <p className="text-gray-500 mt-2">
              Visit the shop and add items to your wishlist!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductView;
