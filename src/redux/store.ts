import { combineReducers, configureStore, PreloadedState } from '@reduxjs/toolkit'
import catalogSlice from './slices/CatalogSlice'
import cartSlice from './slices/CartSlice'
import authSlice from './slices/AuthSlice'

const rootReducer = combineReducers({
    catalog: catalogSlice,
    cart: cartSlice,
    auth: authSlice
})

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
    return configureStore({
        reducer: rootReducer,
        preloadedState
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']