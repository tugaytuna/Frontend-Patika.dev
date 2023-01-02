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

export const timerSlice = createSlice({
    name: "timer",
    initialState: {
        timerL: 60,
    },
    reducers: {
        stopTimer: (state,actions) => {
            state.timerL = 0
        },
        startTimer: (state) => {
            state.timerL = 60
        },

    }
})

export default counterSlice.reducer;
export const {nextOne} = counterSlice.actions;

export const timerSliceR = timerSlice.reducer;
export const {stopTimer, startTimer} = timerSlice.actions;