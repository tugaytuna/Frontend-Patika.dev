import {createSlice} from '@reduxjs/toolkit'
import { store } from '../store'

export const noteSlice = createSlice({
    name: "notes",
    initialState: {
        value: {
            id: 1,
            noteDetail: "tugay naber",
            color: "red",
        },
    },
    reducers: {
       
    }
})

export default noteSlice.reducer;