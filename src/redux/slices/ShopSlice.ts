import {DatabaseType} from '../../@types/types'
import {createSlice, PayloadAction} from '@reduxjs/toolkit'

const initialState = {
    items: [] as DatabaseType[],
    cart: [] as DatabaseType[],
    favourites: [] as DatabaseType[]
}

export const shopSlice = createSlice({
    name: 'catalog',
    initialState,
    reducers: {
        setItems: (state, action: PayloadAction<DatabaseType[]>) => {
            state.items = action.payload
        },
        setCart: (state, action: PayloadAction<DatabaseType[]>) => {
            state.cart = action.payload
        },
        addCart: (state, action: PayloadAction<DatabaseType>) => {
            state.cart = [...state.cart, action.payload]
        },
        removeCart: (state, action: PayloadAction<number>) => {
            state.cart.filter(i => i.id !== action.payload)
        },
        setFavourites: (state, action: PayloadAction<DatabaseType[]>) => {
            state.favourites = action.payload
        },
        addFavourites: (state, action: PayloadAction<DatabaseType>) => {
            state.favourites = [...state.favourites, action.payload]
        },
        removeFavourites: (state, action: PayloadAction<number>) => {
            state.favourites.filter(i => i.id !== action.payload)
        }
    }
})

export const catalogActions = shopSlice.actions
export default shopSlice.reducer