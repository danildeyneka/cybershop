import {DatabaseType} from '../../@types/types'
import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    items: [] as DatabaseType[],
    cart: [] as DatabaseType[],
    favourites: [] as DatabaseType[]
}

export const catalogSlice = createSlice({
    name: 'catalog',
    initialState,
    reducers: {
        setItems: (state, action) => {
            state.items = action.payload
        },
        setCart: (state, action) => {
            state.cart = action.payload
        },
        setFavourites: (state, action) => {
            state.favourites = action.payload
        }
    }
})

export const catalogActions = catalogSlice.actions
export default catalogSlice.reducer