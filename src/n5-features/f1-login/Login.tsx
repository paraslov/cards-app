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

    if (isAuth) return <Redirect to={PATH.PROFILE}/>

    return (
        <div className={s.container}>
            <div className={s.loginContainer}>
                <form onSubmit={formik.handleSubmit} className={s.form}>
                    <div className={s.header}>
                        <h2>It-incubator</h2>
                        <h3>Sign in</h3>
                    </div>
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
                    <div>
                        <SuperCheckbox name={'rememberMe'} onChange={formik.handleChange}
                                        children={'remember me'}/>
                    </div>
                    <span>Forgot password</span>
                    <SuperButton className={s.loginItem} type={'submit'}>Sign in</SuperButton>
                    <span>Don't have an account?</span>
                    <NavLink to={PATH.REGISTRATION}>Sign up</NavLink>
                </form>
            </div>
        </div>
    )
}