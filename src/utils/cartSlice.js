import { createSlice, current } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload)
        },
        removeItem: (state, action) => {
            console.log(current(state.items));
           state.items =  state.items.filter(item => item.id !== action.payload)
        },
        clearCart: (state) => {
            state.items.length = 0;
        }
    }
})

export default cartSlice.reducer

export const {addItem, removeItem, clearCart} = cartSlice.actions