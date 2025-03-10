// import { createSlice , createAsyncThunk } from "@reduxjs/toolkit"
// import axios from "axios"

// export const fetchProducts = createAsyncThunk("products/fetchProducts" , async () => {
//     const response = await axios.get('https://fakestoreapi.com/products')
//     return response.data;
// })
 

// export const fetchUsers = createAsyncThunk("products/fetchUsers" , async (_ , {dispatch}) => {     //1
//     const users = await dispatch(fetchProducts()).unwrap();
//     console.log('users' , users);
    
//    const response = await axios.get('https://fakestoreapi.com/users')
//    return response.data
// })

// const productSlice = createSlice({
//     name:"products",
//     initialState:{
//         product: [],
//         items:[],
//         status:"idle",
//         error:null,
//     },
//     extraReducers:(builder) => {
//         builder
//         .addCase(fetchProducts.pending , (state) => {
//             state.status = "loading";
//         })
//         .addCase(fetchProducts.fulfilled , (state , action) => {
//             state.status = "succeeded";
//             state.items = action.payload
//         })
//         .addCase(fetchProducts.rejected , (state) => {
//             state.status = "failed";
//         })

//         .addCase(fetchUsers.pending, (state) => {
//             state.loading = true;
//         })
//         .addCase(fetchUsers.fulfilled, (state, action) => {
//             state.loading = false;
//             state.users = action.payload;
//         })
//         .addCase(fetchUsers.rejected, (state, action) => {
//             state.loading = false;
//             state.error = action.error.message;
//         });
//     }
// })

// export default productSlice.reducer


import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Fetch products
export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
  const response = await axios.get("https://fakestoreapi.com/products");
  return response.data;
});

// Fetch users
export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {  
  const response = await axios.get("https://fakestoreapi.com/users");
  return response.data;
});

const productSlice = createSlice({
  name: "product",
  initialState: {
    items: [],
    status: "idle",
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default productSlice.reducer;
