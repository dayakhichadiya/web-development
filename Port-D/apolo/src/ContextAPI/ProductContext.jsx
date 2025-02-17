import React, { createContext, useState, useEffect } from 'react';

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [wishlist, setWishlist] = useState([]);

    useEffect(() => {

        const savedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
        setWishlist(savedWishlist);

        const fetchProducts = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products'); 
                const data = await response.json();
                console.log("Fetched Products:", data);
                setProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };
            fetchProducts();
    }, []);

    const toggleWishlist = (product) => {
        setWishlist((prevWishlist) => {
          const updatedWishlist = prevWishlist.some((item) => item.id === product.id)
            ? prevWishlist.filter((item) => item.id !== product.id)
            : [...prevWishlist, product];
            
          localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
          return updatedWishlist;
        });
      };

    const isInWishlist = (productId) =>
        wishlist.some((item) => item.id === productId);

    return (
        <ProductsContext.Provider
            value={{ products, wishlist, toggleWishlist, isInWishlist }}
        >
            {children}
        </ProductsContext.Provider>
    );
};
