import {configureStore} from '@reduxjs/toolkit'
import {TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import {authReducer} from '../../n5-features/f1-login/auth_reducer'
import {registrationReducer} from '../../n5-features/f2-registration/registration_reducer'
import {passwordReducer} from '../../n5-features/f3-password/password_reducer'
import {profileReducer} from '../../n5-features/f4-profile/profile_reducer'


export const store = configureStore({
    reducer: {
        auth: authReducer,
        registration: registrationReducer,
        password: passwordReducer,
        profile: profileReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// Use throughout app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector