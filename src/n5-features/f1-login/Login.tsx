import React from 'react'
import {useFormik} from 'formik'
import SuperInputText from '../../n4-common/components/Elements/e3-SuperInputText/SuperInputText'
import SuperCheckbox from '../../n4-common/components/Elements/e2-SuperCheckboxe/SuperCheckbox'
import SuperButton from '../../n4-common/components/Elements/e1-SuperButton/SuperButton'
import s from './Login.module.scss'
import {NavLink, Redirect} from 'react-router-dom'
import {PATH} from '../../n1-app/routes/Routes'
import {useAppDispatch, useAppSelector} from '../../n2-bll/store/store'
import {login} from './auth_reducer'
import {TLoginParams} from '../../n3-api/auth_api'

export const Login = () => {

    const dispatch = useAppDispatch()
    const isAuth = useAppSelector(state => state.auth.isAuth)

    const formik = useFormik<TLoginParams>({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false,
        },
        onSubmit: values => {
            dispatch(login(values))
        }
    })

    if(isAuth) return <Redirect to={PATH.PROFILE}/>

    return (
        <div className={s.loginContainer}>
            <form onSubmit={formik.handleSubmit}>
                <SuperInputText name={'email'}
                                className={s.loginItem}
                                placeholder={'Enter your email'}
                                type={'text'}
                                onChange={formik.handleChange}
                                value={formik.values.email}/>
                <SuperInputText name={'password'}
                                className={s.loginItem}
                                placeholder={'Enter your password'}
                                type={'password'}
                                onChange={formik.handleChange}
                                value={formik.values.password}/>
                <SuperCheckbox className={s.loginItem} name={'rememberMe'} onChange={formik.handleChange}/>
                <NavLink to={PATH.REGISTRATION}>Don't have an account yet? Sign Up!</NavLink>
                <SuperButton className={s.loginItem} type={'submit'}>Sign in</SuperButton>
            </form>
        </div>
    )
}