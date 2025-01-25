// import React, { useState } from 'react';

// const ProductPage = () => {
//   const [wishlist, setWishlist] = useState([]);

//   const products = [
//     { id: 1, name: 'Product 1', price: '5550' },
//     { id: 2, name: 'Product 2', price: '2330' },
//     { id: 3, name: 'Product 3', price: '9000' },
//   ];

//   const toggleWishlist = (product) => {
//     setWishlist((prevWishlist) => {
//       if (prevWishlist.some((item) => item.id === product.id)) {
//         return prevWishlist.filter((item) => item.id !== product.id);
//       } else {
//         return [...prevWishlist, product];
//       }
//     });
//   };

//   const isInWishlist = (productId) => {
//     return wishlist.some((item) => item.id === productId);
//   };

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       <h1 className="text-3xl font-bold text-center mb-8">Shop Page</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {products.map((product) => (
//           <div
//             key={product.id}
//             className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center"
//           >
//             <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
//             <p className="text-gray-600 mb-4">{product.price}</p>
//             <button
//               onClick={() => toggleWishlist(product)}
//               className={`px-4 py-2 rounded-md transition ${
//                 isInWishlist(product.id)
//                   ? 'bg-green-500 text-white hover:bg-green-600'
//                   : 'bg-blue-400 text-white hover:bg-blue-500'
//               }`}
//             >
//               {isInWishlist(product.id) ? 'Remove from Wishlist ❤️' : 'Add to Wishlist ♡'}
//             </button>
//           </div>
//         ))}
//       </div>

//       <div className="mt-12">
//         <h2 className="text-2xl font-bold mb-4">Your Wishlist</h2>
//         {wishlist.length > 0 ? (
//           <ul className="space-y-3">
//             {wishlist.map((item) => (
//               <li key={item.id} className="bg-white p-3 rounded-lg shadow-sm">
//                 {item.name} - {item.price}
//               </li>
//             ))} 
//           </ul>
//         ) : (
//           <p className="text-gray-600">Your wishlist is empty.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ProductPage;


import React, { useState } from 'react';

const ShopPage = () => {
  const [wishlist, setWishlist] = useState([]);

  const products = [
    { id: 1, name: 'Product 1', price: '5550' },
    { id: 2, name: 'Product 2', price: '3000' },
    { id: 3, name: 'Product 3', price: '2200' },
  ];

  const isInWishlist = (productId) => {
    for (let i = 0; i < wishlist.length; i++) {
      if (wishlist[i].id === productId) {
        return true;
      }
    }
    return false;
  };

  const toggleWishlist = (product) => {
    if (isInWishlist(product.id)) {
      setWishlist((prevWishlist) =>
        prevWishlist.filter((item) => item.id !== product.id)
      );
    } else {
      setWishlist((prevWishlist) => [...prevWishlist, product]);
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8">Shop Page</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center"
          >
            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
            <p className="text-gray-600 mb-4">{product.price}</p>
            <button
              onClick={() => toggleWishlist(product)}
              className={`px-4 py-2 rounded-md transition ${
                isInWishlist(product.id)
                  ? 'bg-red-500 text-white hover:bg-red-600'
                  : 'bg-blue-300 text-gray-700 hover:bg-blue-400'
              }`}
            >
              {isInWishlist(product.id)
                ? 'Remove from Wishlist ❤️'
                : 'Add to Wishlist ♡'}
            </button>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Your Wishlist</h2>
        {wishlist.length > 0 ? (
          <ul className="space-y-3">
            {wishlist.map((item) => (
              <li key={item.id} className="bg-white p-3 rounded-lg shadow-sm">
                {item.name} - {item.price}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600">Your wishlist is empty.</p>
        )}
      </div>
    </div>
  );
};

export default ShopPage;
