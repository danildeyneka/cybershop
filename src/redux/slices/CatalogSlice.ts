import {DatabaseType} from '../../@types/types'
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {catalogApi} from '../../api/api'

const initialState = {
    items: [] as DatabaseType[],
    loading: false,
}

export const setItems = createAsyncThunk(
    'catalog/setItems',
    async function () {
        const response = await catalogApi.getItems()
        if (response?.status === 200) {
            return response.data
        }
    }
)

export const addItem = createAsyncThunk(
    'catalog/addItem',
    async function (item: DatabaseType) {
        const response = await catalogApi.addItem(item)
        if (response?.status === 200) {
            // actions.addItem(item)
            // return response.data
            setItems()
        }
    }
)

export const removeItem = createAsyncThunk(
    'catalog/removeItem',
    async function (id: number) {
        const response = await catalogApi.deleteItem(id)
        if (response?.status === 200) {
            setItems()
            // actions.deleteItem(id)
        }
    }
)

export const catalogSlice = createSlice({
        name: 'catalog',
        initialState,
        reducers: {
            // addItem: (state, {payload}) => {
            //     state.items.push(payload)
            // },
            // deleteItem: (state, {payload}) => {
            //     state.items.filter(i => i.id !== payload)
            // }
        },
        extraReducers: (builder) => {
            builder.addCase(setItems.pending, (state) => {
                state.loading = true
            })
            builder.addCase(setItems.fulfilled, (state, {payload}) => {
                state.loading = false
                state.items = payload
            })
        }
    }
)

// const actions = catalogSlice.actions
export default catalogSlice.reducer