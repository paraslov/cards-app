import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {authAPI, TLoginParams, TLoginResponseType} from '../../n3-api/auth_api'

export const login = createAsyncThunk<TLoginResponseType, TLoginParams>('auth/login', async (payload, thunkAPI) => {
    try {
        const data = await authAPI.login(payload)
        return data
    } catch (err) {
        const error = err.response ? err.response.data.error : (err.message + ', more details in console')
        console.log('Error: ' + {...err})
        return thunkAPI.rejectWithValue(error)
    }
})

const slice = createSlice({
    name: 'authReducer',
    initialState: {
        isAuth: false,
    },
    reducers: {},
    extraReducers: builder => {
        builder.addCase(login.fulfilled, (state) => {
            state.isAuth = true
        })
    }
})

export const authReducer = slice.reducer