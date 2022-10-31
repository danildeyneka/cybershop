import {DatabaseType} from '../../@types/types'
import {createSlice, PayloadAction} from '@reduxjs/toolkit'

const initialState = {
    cart: [] as DatabaseType[]
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setCart: (state, action: PayloadAction<DatabaseType[]>) => {
            state.cart = action.payload
        },
        addCart: (state, action: PayloadAction<DatabaseType>) => {
            state.cart = [...state.cart, action.payload]
        },
        removeCart: (state, action: PayloadAction<number>) => {
            state.cart.filter(i => i.id !== action.payload)
        }
    }
})

export const cartActions = cartSlice.actions
export default cartSlice.reducer