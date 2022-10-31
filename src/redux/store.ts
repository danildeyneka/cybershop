import {configureStore} from '@reduxjs/toolkit'
import catalogSlice from './slices/CatalogSlice'
import cartSlice from './slices/CartSlice'
import favouritesSlice from './slices/FavouritesSlice'

export const store = configureStore({
    reducer: {
        catalog: catalogSlice,
        cart: cartSlice,
        favourites: favouritesSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch