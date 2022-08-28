import {configureStore} from '@reduxjs/toolkit'
import shopSlice from './slices/ShopSlice'

export const store = configureStore({
    reducer: {
        catalog: shopSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch