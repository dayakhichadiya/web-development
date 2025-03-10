import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";


const ProductCard = ({ product }) => {

    const dispatch = useDispatch()

  return (
    <div>
      <ul>
        <li>{product.name}</li>
        <li>{product.age}</li>
        <button onClick={() => dispatch(addToCart(product))}>addToCart</button>
      </ul>
    </div>
  );
};

export default ProductCard;
