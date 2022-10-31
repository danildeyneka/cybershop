import {DatabaseType} from '../../@types/types'
import {createSlice, PayloadAction} from '@reduxjs/toolkit'

const initialState = {
    items: [] as DatabaseType[]
}

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
    }
})

export const catalogActions = catalogSlice.actions
export default catalogSlice.reducer