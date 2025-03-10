import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../redux/productSlice";
import ProductCard from "../component/ProductCard";
import UserCard from "../component/UserCard";

const Shop = () => {
  const disptch = useDispatch();

  const { status, items } = useSelector((state) => state.product);

  console.log(status);

  console.log(items);

  useEffect(() => {
    disptch(fetchProducts());
  }, [disptch]);

  return (

    <div>
      <h1 className="heading">ProductData</h1>
      <div className="flex flex-wrap justify-evenly container mx-auto">
        {status === true && <p>Loading...</p>}
        {status === false &&
          product.map((products) => (
            <ProductCard key={products.product_id} product={products} />
          ))}
        {status === true && <p>Failed to load products.</p>}
      </div>
      <div>
      <h1 className="heading">UserData</h1>
      <div className="flex flex-wrap justify-evenly container mx-auto">
      {status === true && <p>Loading...</p>}
        {status === false &&
          users.map((users) => (
            <UserCard key={users.id} users={users} />
          ))}
        {status === true && <p>Failed to load Users.</p>}
      </div>
      </div>
    </div>
     );
};

export default Shop;
