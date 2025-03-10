import { configureStore } from "@reduxjs/toolkit";
import productReducer from './productSlice'
import cartReducer from './cartSlice'
import userReducer from "./userSlice";


const store = configureStore({
    reducer:{
        cart:cartReducer,
        product:productReducer,
        user: userReducer
    }
})

export default store