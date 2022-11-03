import {createSlice} from '@reduxjs/toolkit'

export const moneySlice = createSlice({
    name: "money",
    initialState: {
        moneyleft: 10000000,
    },
    reducers: {
        buySome: (state,actions) => {
            state.moneyleft = state.moneyleft - actions.payload;
        },
        sellSome: (state,actions) => {
            state.moneyleft = state.moneyleft + actions.payload;
        }
    }
})


export const productsSlice = createSlice({
    name: "products",
    initialState: {products: [{
            id: 1,
            name: "Big Mac",
            price: 2,
            img: "https://neal.fun/spend/images/big-mac.jpg",
            piece: 0
        },
        {
            id: 2,
            name: "Coca-Cola Pack",
            price: 5,
            img: "https://neal.fun/spend/images/coca-cola-pack.jpg",
            piece: 0
        },
        {
            id: 3,
            name: "Book",
            price: 15,
            img: "https://neal.fun/spend/images/book.jpg",
            piece: 0
        },
        {
            id: 4,
            name: "Video Game",
            price: 60,
            img: "https://neal.fun/spend/images/video-game.jpg",
            piece: 0
        },
        {
            id: 5,
            name: "Year of Netflix",
            price: 100,
            img: "https://neal.fun/spend/images/year-of-netflix.jpg",
            piece: 0
        },
        ],},

    reducers: {
        pieceIn: (state,actions) => {
            state.moneyleft = state.moneyleft - actions.payload;
        },
        pieceOut: (state,actions) => {
            state.moneyleft = state.moneyleft + actions.payload;
        },
        allUpdate: (state,actions) => {
            state.products = actions.payload;
        }
    }
})

export default moneySlice.reducer;
export const {buySome, sellSome} = moneySlice.actions;

export const productsSliceR = productsSlice.reducer;
export const {pieceIn, pieceOut, allUpdate} = productsSlice.actions;