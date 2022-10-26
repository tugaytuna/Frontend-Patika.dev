import {configureStore} from '@reduxjs/toolkit';

import noteReducer from './notes/notesSlice';
import {searchSliceR} from './notes/notesSlice';
// import searchSliceR from './notes/notesSlice';

export const store = configureStore({
    reducer: {
        notes: noteReducer,
        search: searchSliceR,
    }
});