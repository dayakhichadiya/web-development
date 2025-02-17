import React from 'react'
import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = 10;

const ProductSlice = createSlice( {

  name : 'reducer',
  initialState,
  reducers:{
    increment : state => state + 1,
    decrement : state => state -1
  }
})

export const {increment, decrement} = ProductSlice.actions

export default ProductSlice.reducer

// export const store = configureStore({
//     reducer:{
//         counter : ProductSlice.reducer
//     }
// })