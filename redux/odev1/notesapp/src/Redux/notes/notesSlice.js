import {createSlice} from '@reduxjs/toolkit'
// import { store } from '../store'

export const noteSlice = createSlice({
    name: "notes",
    initialState: {
        value:  [{
            id: 1,
            noteDetail: "test note",
            color: "red",
        },
        {
            id: 2,
            noteDetail: "test note 2",
            color: "yellow",
        },
        {
            id: 3,
            noteDetail: "test note 3",
            color: "gray",
        },
        {
            id: 4,
            noteDetail: "test note 4",
            color: "pink",
        },]
    },
    reducers: {
       addNote: (state,actions) => {
        // console.log(actions.payload)

        // console.log(state.value[1].color)
        // state.value.push({id: 5, noteDetail: "add by call", color:"yellow"})
        state.value = actions.payload;
       }
    }
})

export const searchSlice = createSlice({
    name: "search",
    initialState: {
        value: {
            searchDetail: "t",
        }
    },
    reducers: {
       setData: (state,actions) => {
        state.value = actions.payload;
       }
    }
})


export default noteSlice.reducer;
export const {addNote} = noteSlice.actions;
export const {setData} = searchSlice.actions;
export const searchSliceR = searchSlice.reducer;
