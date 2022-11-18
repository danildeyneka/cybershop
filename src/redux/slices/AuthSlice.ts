import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {authApi} from '../../api/authApi'
import {UsersDataType} from '../../@types/types'

export const login = createAsyncThunk(
    'auth/login',
    async function (payload: UsersDataType) {
        const users = await authApi.getUsers()
        return (users?.data[0].name === payload.name) && (users?.data[0].password === payload.password);
    }
)

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        authorized: JSON.parse(JSON.parse(localStorage.getItem('auth') || 'false')) as boolean, // boolean at init load was in string format that's why I double parsed
        awaiting: false
    },
    reducers: {
        logout: (state) => {
            state.authorized = false
            localStorage.setItem('auth', JSON.stringify('false'))
        }
    },
    extraReducers: builder => {
        builder
            .addCase(login.pending, state => {
                state.awaiting = true
            })
            .addCase(login.fulfilled, (state, {payload}) => {
                state.awaiting = false
                state.authorized = payload
                localStorage.setItem('auth', JSON.stringify(payload))
            })
    }
})

export const authActions = authSlice.actions
export default authSlice.reducer