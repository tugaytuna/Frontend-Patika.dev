import {createSlice} from '@reduxjs/toolkit'

export const moneySlice = createSlice({
    name: "money",
    initialState: {
        moneyleft: 10000000,
    },
    reducers: {
        buySome: (state,actions) => {
            state.value = state.value - actions.payload;
        },
        sellSome: (state,actions) => {
            state.value = state.value + actions.payload;
        }
    }
})

export default moneySlice.reducer;
export const {buySome, sellSome} = moneySlice.actions;