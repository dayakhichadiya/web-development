// import React, { useContext } from "react";
// import { useParams } from "react-router-dom";
// import { ProductsContext } from "./ProductContext";

// const ProductView = () => {
//   const { productId } = useParams(); // Get productId from the URL
//   const { products, toggleWishlist, isInWishlist } = useContext(ProductsContext);

//   const product = products.find((p) => p.id === parseInt(productId));

//   if (!product) {
//     return <p>Product not found.</p>;
//   }

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
//       <img
//         src={product.image}
//         alt={product.title}
//         className="w-48 h-48 object-contain mb-4"
//       />
//       <p className="text-xl mb-4">₹{Math.round(product.price * 80).toLocaleString()}</p>

//       <button
//         onClick={() => toggleWishlist(product)}
//         className="px-4 py-2 flex items-center gap-2 rounded-md transition"
//       >
//         {isInWishlist(product.id) ? (
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-6 w-6 text-red-500"
//             viewBox="0 0 24 24"
//             fill="currentColor"
//           >
//             <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
//           </svg>
//         ) : (
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-6 w-6 text-gray-700"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           >
//             <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
//           </svg>
//         )}
//         {isInWishlist(product.id) ? "Remove from Wishlist" : "Add to Wishlist"}
//       </button>
//     </div>
//   );
// };

// export default ProductView;
import React, { useContext } from "react";
import { useParams } from "react-router-dom"; // Import useParams to access URL params
import { ProductsContext } from "./ProductContext";

const ProductView = () => {
  const { productId } = useParams(); // Get productId from the URL
  const { products, toggleWishlist, isInWishlist } = useContext(ProductsContext);

  const product = products.find((p) => p.id === parseInt(productId)); // Find the product using productId

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
      <img
        src={product.image}
        alt={product.title}
        className="w-48 h-48 object-contain mb-4"
      />
      <p className="text-xl mb-4">
        ₹{Math.round(product.price * 80).toLocaleString()}
      </p>
      <button
        onClick={() => toggleWishlist(product)}
        className="px-4 py-2 flex items-center gap-2 rounded-md transition"
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
  );
};

export default ProductView;

