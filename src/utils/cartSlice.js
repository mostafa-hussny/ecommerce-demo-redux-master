import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        value: [],
    },
    reducers:{
        addItem: (state, action) => {
            state.value = state.value.find(item => item.id === action.payload.id) ? state.value : [...state.value, action.payload];
        },
        removeItem: (state, action) => {
            state.value = state.value.filter(item => item.id !== action.payload);
        },
        clearCart: (state) => {
            state.value = [];
        },
    },
})

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export const cartState = (state) => state.cart.value;

export default cartSlice.reducer;