import {configureStore} from '@reduxjs/toolkit';

import noteReducer from './notes/notesSlice';

export const store = configureStore({
    reducer: {
        notes: noteReducer,
    }
});