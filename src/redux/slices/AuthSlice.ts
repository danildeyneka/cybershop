import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {authApi} from '../../api/authApi'
import {UsersDataType} from '../../@types/types'

export const getUsers = createAsyncThunk(
    'auth/getUsers',
    async function () {
        const res = await authApi.getUsers()
        return (res?.data)
    }
)

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        usersData: [] as UsersDataType[],
        authorized: JSON.parse(localStorage.getItem('auth') || 'false') as boolean,
        awaiting: false as boolean
    },
    reducers: {
        login: (state, {payload}) => {
            if (
                state.usersData?.forEach(user => (user.name === payload.name && user.password === payload.password))
            ) {
                state.authorized = true
                localStorage.setItem('auth', JSON.stringify('true'))
            }
        },
        logout: (state) => {
            state.authorized = false
            localStorage.setItem('auth', JSON.stringify('false'))
        }

    },
    extraReducers: builder => {
        builder
            .addCase(getUsers.pending, state => {
                state.awaiting = true
            })
            .addCase(getUsers.fulfilled, (state, {payload}) => {
                state.awaiting = false
                state.usersData = payload
            })
    }
})
