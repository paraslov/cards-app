import {createSlice} from '@reduxjs/toolkit'
import {login} from '../f1-login/auth_reducer'


const slice = createSlice({
    name: 'profileReducer',
    initialState: {
        _id: '',
        email: '',
        name: '',
        avatar: '',
        publicCardPacksCount: 0,
    },
    reducers: {},
    extraReducers: builder => {
        builder.addCase(login.fulfilled, (state, payload) => {
            state._id = payload.payload._id
            state.email = payload.payload.email
            state.name = payload.payload.name
            state.avatar = payload.payload.avatar
            state.publicCardPacksCount = payload.payload.publicCardPacksCount
        })
    }
})

export const profileReducer = slice.reducer