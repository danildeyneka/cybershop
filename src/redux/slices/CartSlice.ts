import {DatabaseType} from '../../@types/types'
import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'
import {cartApi} from '../../api/api'

export const setCart = createAsyncThunk(
    'cart/setCart',
    async function () {
        await cartApi.getCart()
    }
)

export const addCart = createAsyncThunk(
    'cart/addItem',
    async function (item: DatabaseType) {
        const response = await cartApi.addCart(item)
        if (response?.status === 200) {
            return response.data
        }
    }
)

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: [] as DatabaseType[],
        loading: false
    },
    reducers: {
        addCart: (state, {payload}) => {
            state.cart.push(payload)
        },
        removeCart: (state, {payload}) => {
            state.cart.filter(i => i.id !== payload)
        }
    },
    extraReducers: (builder) => {
        builder.addCase(setCart.pending, state => {

        })
        builder.addCase(addCart.pending, state => {
            state.loading = true
        })
        builder.addCase(addCart.fulfilled, state => {
            state.loading = false
        })
    },
})

const actions = cartSlice.actions
export default cartSlice.reducer