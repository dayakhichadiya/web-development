import React from 'react'
import img1 from './assets/img1.jpg'
import img2 from './assets/img2.jpg'
import img3 from './assets/img3.jpg'
import img4 from './assets/img4.jpg'
import img5 from './assets/watch1.webp'

const List = () => {

    const ProductList = [
        {
            img: img1,
            id : 1,
            name : "Purse",
            price: 1000,
            discription: "Closure Type - This hobo bag comes with a long removable and adjustable shoulder strap, which can be used as a women shoulder bag or no Two handles with a detachable sling strap Model Name Is S Diamond Black 0_12. ..."
            
        },

        {
            id : 2,
            name : "HydroMATE",
            price: 1000,
            img: img2,
            discription: "Now its easier than ever to drink more water with our inspirational water bottle with time markings. Fun motivational quotes keep you inspired to reach you health and hydration HydroMATE Half Gallon BPA-Free Gym & Office Water Bottle with Handle..."
        },  

        {
            id : 3,
            name : "Shoes",
            price: 3500,
            img: img3,
            discription: "Ensure a comfortable running session by wearing this pair of steel grey running shoes from Campus. Owing to the premium quality mesh upper, it will offer the necessary Experience the brilliance of Support-Tech technology and Anti Slip Sole..."

        },

        {
            id : 4,
            name : "Perfume",
            price: 999,
            img: img4,
            discription:"A more passionate interpretation of COCO MADEMOISELLE. Patchouli, accentuated by a warm, ambery vanilla and tonka bean accord, contrasts with a heart of jasmine and rose and the freshness of citrus."
        },  

        {
            id : 5,
            name : "Wrist Watch",
            price: 2000,
            img: img5,
            discription: "Style Code Is Pe000025a. Pack Of Is 1. Strap Color Is Silver. Display Type Is Analog. Occasion Is Casual. Watch Type Is Wrist Watch. Net Quantity Is 1. Mechanism Is Quartz ..."
        },  

    ]
return(
    <>
    <div className='products-container '>
    {ProductList.filter((item) => item.price > 100).map((item) => (
        <ul className='border-2 border-gray-300 p-2 m-4 shadow-xl shadow-slate-900 rounded-md' key={item.id}>
            {item.img && (
                <li>
                    <img
                        className="h-52 w-52 m-4 rounded-md "
                        src={item.img}
                        alt={item.name || "Product"}
                    />
                </li>
            )}
            <li>Product ID: {item.id}</li>
            <li>Product Name: {item.name}</li>
            <li>Price: {item.price}/-</li>
            <li>Description: {item.discription}</li>
            <button className='buy-button'>Buy now</button>
        </ul>
    ))}
    </div>
</>
);
};

export default List;