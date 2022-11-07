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
        await cartApi.addCart(item)
    }
)

export const removeCart = createAsyncThunk(
    'cart/removeItem',
    async function (id: number) {
        await cartApi.removeCart(id)
        return id
    }
)

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: [] as DatabaseType[],
        loading: false,
        adding: false,
        removing: false
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(setCart.pending, state => {
            state.loading = true
        })
        builder.addCase(setCart.fulfilled, (state, {payload}) => {
            state.loading = false
            state.cart = payload
        })
        builder.addCase(addCart.pending, (state, {payload}) => {
            state.adding = true
        })
        builder.addCase(addCart.fulfilled, state => {
            state.adding = false
        })
        builder.addCase(removeCart.pending, state => {
            state.removing = true
        })
        builder.addCase(removeCart.fulfilled, (state, {payload}) => {
            state.removing = false
            state.cart = state.cart.filter(i => i.id !== payload)
        })
    }
})

export const actions = cartSlice.actions
export default cartSlice.reducer