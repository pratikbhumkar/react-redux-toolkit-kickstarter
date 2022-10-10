import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./counterSlice";
import { groceryItemsReducer } from "./groceryItemSlice";
import { listenerMiddleware } from "./listenerMiddleware";

export const rootGlobalState = configureStore({
    reducer: {
        counter: counterReducer,
        groceryItems: groceryItemsReducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(listenerMiddleware.middleware),
})

export type RootGlobalState = ReturnType<typeof rootGlobalState.getState>