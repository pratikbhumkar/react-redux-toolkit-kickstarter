import { createSlice } from "@reduxjs/toolkit";

type CounterStore = {
    value: number
}
const counterInitialState: CounterStore = {
    value : 0
};

export const counterSlice = createSlice({
    name: 'Counter',
    initialState : counterInitialState,
    reducers: {
        increment: state =>{
            state.value += 1
        },
        decrement: state =>{
            state.value -=1
        }
    }
})

export const {increment, decrement} = counterSlice.actions
export const counterReducer = counterSlice.reducer