import {configureStore} from '@reduxjs/toolkit'

import moneyReducer from './moneySlice'
import {productsSliceR} from './moneySlice'

export const store = configureStore({
    reducer: {
        money: moneyReducer,
        products: productsSliceR,
    }
})
