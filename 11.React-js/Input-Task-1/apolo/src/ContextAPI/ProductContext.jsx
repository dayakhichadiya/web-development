import React, { createContext, useState, useEffect } from 'react';

// Create the context
export const ProductsContext = createContext();

// Provider component
export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [wishlist, setWishlist] = useState([]);

    // Fetch products from an API
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products'); // Example API
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };
            fetchProducts();
    }, []);

    // Toggle wishlist
    const toggleWishlist = (product) => {
        setWishlist((prevWishlist) =>
            prevWishlist.some((item) => item.id === product.id)
                ? prevWishlist.filter((item) => item.id !== product.id)
                : [...prevWishlist, product]
        );
    };

    // Check if a product is in the wishlist
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
