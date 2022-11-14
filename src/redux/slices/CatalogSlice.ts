import {DatabaseType} from '../../@types/types'
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {catalogApi} from '../../api/catalogApi'


const initialState = {
    items: [] as DatabaseType[],
    loading: false,
    awaitingArr: [] as number[],
    rerender: false // inits database rerender after admin action
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
        return item
    }
)

export const deleteItem = createAsyncThunk(
    'catalog/deleteItem',
    async function (id: number) {
        await catalogApi.deleteItem(id)
        return id
    }
)

const catalogSlice = createSlice({
        name: 'catalog',
        initialState,
        reducers: {
            fillAwaitingArray: (state, {payload}) => {
                state.awaitingArr.push(payload)
            }
        },
        extraReducers: (builder) => {
            builder
                .addCase(setItems.pending, (state) => {
                    state.loading = true
                })
                .addCase(setItems.fulfilled, (state, {payload}) => {
                    state.loading = false
                    state.items = payload
                })
                .addCase(addItem.pending, (state) => {
                    state.loading = true
                })
                .addCase(addItem.fulfilled, state => {
                    state.loading = false
                    state.rerender = !state.rerender
                })
                .addCase(deleteItem.fulfilled, (state, {payload}) => {
                    state.awaitingArr = state.awaitingArr.filter(id => id !== payload)
                    state.items = state.items.filter(i => +i.id !== +payload)
                })
        }
    }
)

export const catalogActions = catalogSlice.actions
export default catalogSlice.reducer