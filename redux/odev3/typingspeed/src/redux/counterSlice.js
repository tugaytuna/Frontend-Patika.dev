import {createSlice} from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: "counter",
    initialState: {
        counterL: 0,
    },
    reducers: {
        nextOne: (state,actions) => {
            state.counterL = state.counterL + 1;
        },
    }
})

export default counterSlice.reducer;
export const {nextOne} = counterSlice.actions;
