import {DatabaseType} from '../../@types/types'
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {catalogApi} from '../../api/api'

const initialState = {
    items: [] as DatabaseType[],
    loading: false
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
        await catalogApi.addItem(item)
    }
)

export const removeItem = createAsyncThunk(
    'catalog/removeItem',
    async function (id: number) {
        await catalogApi.deleteItem(id)
    }
)

export const catalogSlice = createSlice({
        name: 'catalog',
        initialState,
        reducers: {},
        extraReducers: (builder) => {
            builder
                .addCase(setItems.pending, (state) => {
                    state.loading = true
                })
                .addCase(setItems.fulfilled, (state, {payload}) => {
                    state.loading = false
                    state.items = payload
                })
        }
    }
)

export default catalogSlice.reducer