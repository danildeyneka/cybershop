import {configureStore} from '@reduxjs/toolkit'
import catalogSlice from './slices/CatalogSlice'
import cartSlice from './slices/CartSlice'

export const store = configureStore({
    reducer: {
        catalog: catalogSlice,
        cart: cartSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch