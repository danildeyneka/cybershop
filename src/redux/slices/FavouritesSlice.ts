import {DatabaseType} from '../../@types/types'
import {createSlice, PayloadAction} from '@reduxjs/toolkit'

const initialState = {
    favourites: [] as DatabaseType[]
}

export const favouritesSlice = createSlice({
    name: 'favourites',
    initialState,
    reducers: {
        setFavourites: (state, action: PayloadAction<DatabaseType[]>) => {
            state.favourites = action.payload
        },
        addFavourites: (state, action: PayloadAction<DatabaseType>) => {
            state.favourites = [...state.favourites, action.payload]
        },
        removeFavourites: (state, action: PayloadAction<number>) => {
            state.favourites.filter(i => i.id !== action.payload)
        }
    }
})

export const favouritesActions = favouritesSlice.actions
export default favouritesSlice.reducer