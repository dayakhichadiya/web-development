// import React from "react";
// import { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { fetchProducts } from "../redux/productSlice";
// import ProductCard from "../component/ProductCard";
// import UserCard from "../component/UserCard";

// const Shop = () => {
//   const dispatch = useDispatch();

//   const { status, items } = useSelector((state) => state.product);

//   console.log(status);

//   console.log(items);

//   useEffect(() => {
//     dispatch(fetchProducts());
//   }, [dispatch]);

//   return (

//     <div>
//       <h1 className="heading">ProductData</h1>
//       <div className="flex flex-wrap justify-evenly container mx-auto">
//         {status === true && <p>Loading...</p>}
//         {status === false &&
//           product.map((products) => (
//             <ProductCard key={products.product_id} product={products} />
//           ))}
//         {status === true && <p>Failed to load products.</p>}
//       </div>

//       <div>
//       <h1 className="heading">UserData</h1>
//       <div className="flex flex-wrap justify-evenly container mx-auto">
//       {status === true && <p>Loading...</p>}
//         {status === false &&
//           users.map((users) => (
//             <UserCard key={users.id} users={users} />
//           ))}
//         {status === true && <p>Failed to load Users.</p>}
//       </div>
//       </div>
//     </div>
//      );
// };

// export default Shop;



import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../redux/productSlice";
import { fetchUsers } from "../redux/userSlice";
import ProductCard from "../component/ProductCard";
import UserCard from "../component/UserCard";

const Shop = () => {
  const dispatch = useDispatch();
  
  const { status, items } = useSelector((state) => state.product);
  const { usersStatus, users } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div>
      <h1 className="heading">Product Data</h1>
      <div className="flex flex-wrap justify-evenly container mx-auto">
        {status === "loading" && <p>Loading products...</p>}
        {status === "failed" && <p>Failed to load products.</p>}
        {status === "succeeded" &&
          items.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>

      <h1 className="heading">User Data</h1>
      <div className="flex flex-wrap justify-evenly container mx-auto">
        {usersStatus === "loading" && <p>Loading users...</p>}
        {usersStatus === "failed" && <p>Failed to load users.</p>}
        {usersStatus === "succeeded" &&
          users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
      </div>
    </div>
  );
};

export default Shop;
