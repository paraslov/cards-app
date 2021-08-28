import React from 'react'
import {useAppSelector} from '../../n2-bll/store/store'
import {Redirect} from 'react-router-dom'

export const Profile = () => {
    const isAuth = useAppSelector(state => state.auth.isAuth)
    const {_id, email, name, avatar, publicCardPacksCount} = useAppSelector(state => state.profile)

    if(!isAuth) return <Redirect to={'/login'} />

    return (
        <div>
            <div>Your email is: {email}</div>
            <div>Your name is: {name}</div>
            <div>Your avatar is: {avatar}</div>
            <div>Your public card packs count is: {publicCardPacksCount}</div>
            <div>Your id is: {_id}</div>
        </div>
    )
}