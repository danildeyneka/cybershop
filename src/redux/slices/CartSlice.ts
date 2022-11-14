import {DatabaseType} from '../../@types/types'
import {createSlice} from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: (JSON.parse(localStorage.getItem('cart') || '[]')) as DatabaseType[]
    },
    reducers: {
        addToCart: (state, {payload}) => {
            state.cart.push(payload)
            localStorage.setItem('cart', JSON.stringify(state.cart))
        },
        removeFromCart: (state, {payload}) => {
            state.cart = state.cart?.filter(i => +i.id !== payload)
            localStorage.setItem('cart', JSON.stringify(state.cart))
        },
        clearCart: (state) => {
            state.cart = []
            localStorage.setItem('cart', JSON.stringify([]))
        }
    }
})

export const cartActions = cartSlice.actions
export default cartSlice.reducer