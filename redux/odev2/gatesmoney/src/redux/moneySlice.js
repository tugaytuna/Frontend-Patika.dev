import {createSlice} from '@reduxjs/toolkit'

export const moneySlice = createSlice({
    name: "money",
    initialState: {
        moneyleft: 10000000,
    },
    reducers: {

    }
})

export default moneySlice.reducer;