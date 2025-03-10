import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:[],
    reducers:{

        addToCart:(state , action) => {
            const existingItem = state.find((item) => item.id === action.payload.id)
            if(!existingItem){
                state.push(action.payload)
            }
        },

        removeToCart:(state , action) => {
            return state.filter((item) => item.id !== action.payload)
        },

        emptyCart:() => {
            return []
        },
    }
})

export const {addToCart , removeToCart , emptyCart} = cartSlice.actions

export default cartSlice.reducer