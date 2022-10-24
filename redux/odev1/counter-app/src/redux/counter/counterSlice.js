import {createSlice} from '@reduxjs/toolkit'


export const counterSlice = createSlice({
    name: "counter",
    initialState: {
        value: 0,
    },
    reducers: {
        increment: (state,actions) => {
            state.value += 1;
            console.log(actions.payload)
        },
        decrement: (state) => {
            state.value -= 1;
        },
    },
})

export const {increment, decrement} = counterSlice.actions;
export default counterSlice.reducer;