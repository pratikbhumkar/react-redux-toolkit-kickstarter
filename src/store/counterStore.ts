import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./counterSlice";

export const counterState = configureStore({
    reducer: {
        counter: counterReducer
    }
})

export type CounterState = ReturnType<typeof counterState.getState>