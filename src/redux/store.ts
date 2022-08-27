import {configureStore} from '@reduxjs/toolkit'
import catalogSlice from './slices/CatalogSlice'

export const store = configureStore({
    reducer: {
        catalog: catalogSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch