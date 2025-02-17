import { useDispatch, useSelector } from "react-redux";

const products = [
  { id: 1, name: "Laptop", price: "$999" },
  { id: 2, name: "Smartphone", price: "$599" },
  { id: 3, name: "Headphones", price: "$199" },
];

const Shop = () => {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist);

  const addToWishlist = (product) => {
    dispatch({ type: "ADD_TO_WISHLIST", payload: product });
  };

  const removeFromWishlist = (id) => {
    dispatch({ type: "REMOVE_FROM_WISHLIST", payload: id });
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Shop Page</h1>
      <div className="grid grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg">
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="text-gray-500">{product.price}</p>
            {wishlist.find((item) => item.id === product.id) ? (
              <button
                onClick={() => removeFromWishlist(product.id)}
                className="mt-2 bg-red-500 text-white px-4 py-2 rounded"
              >
                Remove from Wishlist
              </button>
            ) : (
              <button
                onClick={() => addToWishlist(product)}
                className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
              >
                Add to Wishlist
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
