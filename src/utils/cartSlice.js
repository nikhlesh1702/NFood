import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice(
    {
        name: 'cart',
        initialState:
        {
            items: []
        },
        reducers:
        {
            addItem: (state, action) => {state.items.push(action.payload); } ,

            clearCart: (state, action)=>{
                state.items.length =0;
            },
            deleteItem: (state) =>{
                state.items.pop(); 
            }  

        },
    },
);

//CreateSlice will return an object which will look like this:
{/* 
  actions:
  {
    addItem,
    deleteItem,
    clearCart
  },
  reducer
*/}
export default cartSlice.reducer;

export const { addItem, deleteItem, clearCart } = cartSlice.actions