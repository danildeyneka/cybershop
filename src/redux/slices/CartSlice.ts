import {DatabaseType} from '../../@types/types'
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {cartApi} from '../../api/api'

export const setCart = createAsyncThunk(
    'cart/setCart',
    async function () {
        const response = await cartApi.getCart()
        if (response?.status === 200) {
            return response.data
        }
    }
)

export const addCart = createAsyncThunk(
    'cart/addItem',
    async function (item: DatabaseType) {
        const response = await cartApi.addCart(item)
        if (response?.status === 200) {
            setCart()
        }
    }
)

export const removeCart = createAsyncThunk(
    'cart/removeItem',
    async function (id: number) {
        const response = await cartApi.removeCart(id)
        actions.removeCart(id)
        if (response?.status === 200) {
            console.log('adda')
            setCart()
        }
        return id
    }
)

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: [] as DatabaseType[],
        loading: false
    },
    reducers: {
        // addCart: (state, {payload}) => {
        //     state.cart.push(payload)
        // },
        removeCart: (state, {payload}) => {
            state.cart.filter(i => i.id !== payload)
        }
    },
    extraReducers: (builder) => {
        builder.addCase(setCart.pending, state => {
            state.loading = true
        })
        builder.addCase(setCart.fulfilled, (state, {payload}) => {
            state.loading = false
            state.cart = payload
        })
        builder.addCase(addCart.pending, state => {
            state.loading = true
        })
        builder.addCase(addCart.fulfilled, state => {
            state.loading = false
        })
        builder.addCase(removeCart.fulfilled, (state, {payload}) => {
            state.cart.filter(i => i.id !== payload)
        })
    },
})

export const actions = cartSlice.actions
export default cartSlice.reducer