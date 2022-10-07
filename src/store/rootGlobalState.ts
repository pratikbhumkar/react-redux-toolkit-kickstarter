import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./counterSlice";
import { groceryItemsReducer } from "./groceryItemSlice";

export const rootGlobalState = configureStore({
    reducer: {
        counter: counterReducer,
        groceryItems: groceryItemsReducer
    }
})

export type RootGlobalState = ReturnType<typeof rootGlobalState.getState>