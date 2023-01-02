import {configureStore} from '@reduxjs/toolkit'

import counterReducer from './counterSlice'
import {timerSliceR} from './counterSlice'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        timer: timerSliceR,
    }
})
