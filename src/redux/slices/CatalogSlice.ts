import {DatabaseType} from '../../@types/types'
import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'
import {catalogApi} from '../../api/api'

const initialState = {
    items: [] as DatabaseType[],
    loading: false,
    error: null
}

export const setItems = createAsyncThunk(
    'catalog/setItems',
    async function () {
        return await catalogApi.getItems()
    }
)

export const catalogSlice = createSlice({
        name: 'catalog',
        initialState,
        reducers: {
            setItems: (state, action: PayloadAction<DatabaseType[]>) => {
                state.items = action.payload
            },
            addItem: (state, action: PayloadAction<DatabaseType>) => {
                state.items = [...state.items, action.payload]
            }, // admin
            removeItems: (state, action: PayloadAction<number>) => {
                state.items.filter(i => i.id !== action.payload)
            } // admin
        },
        extraReducers: {
            // @ts-ignore
            [setItems.pending]: (state) => {
                state.loading = true
            },
            // @ts-ignore
            [setItems.fulfilled]: (state, action) => {
                state.loading = false
                state.items = action.payload
            },
            // @ts-ignore
            [setItems.rejected]: (state) => {
                // state.loading = true
            }
        }
    }
)

export const catalogActions = catalogSlice.actions
export default catalogSlice.reducer