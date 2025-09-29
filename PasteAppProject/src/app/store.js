import { configureStore } from '@reduxjs/toolkit'
import pasteReducer from '../features/counter/PasteSlice'

export const store = configureStore({
    reducer: {
        paste: pasteReducer
    },
})