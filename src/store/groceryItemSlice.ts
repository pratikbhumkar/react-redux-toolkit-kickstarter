import { createSlice } from "@reduxjs/toolkit";

export type GroceryItems = string[]

const groceryInitialState:GroceryItems = [];
const groceryItemSlice = createSlice({
    name: 'GroceryItem',
    initialState:groceryInitialState,
    reducers:{
        addItem:(state, action) =>{
            state.push(action.payload)
        },
        removeItem:(state, action) =>{
            return state.filter((item)=>item!== action.payload)
        }
    }
})

export const {addItem, removeItem} = groceryItemSlice.actions
export const groceryItemsReducer = groceryItemSlice.reducer