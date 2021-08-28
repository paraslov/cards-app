import {instance} from './api'


const restorePassMessage = `<div style="background-color: lime; padding: 15px">
    password recovery link: <a href='https://paraslov.github.io/cards-app/#/set-new-password/$token$'>
                            link</a></div>`

export type TLoginParams = {
    email: string
    password: string
    rememberMe: boolean
}

export type TLoginResponseType = {
    _id: string,
    email: string,
    name: string,
    avatar: string,
    publicCardPacksCount: number,
}

export const authAPI = {
    login(payload: TLoginParams) {
        return instance.post<TLoginResponseType>('auth/login', {...payload}).then(res => res.data)
    },
    logout() {
        return instance.delete('auth/me').then(res => res.data)
    },
    register(email: string, password: string) {
        return instance.post('auth/register', {email, password}).then(res => res.data)
    },
    authMe() {
        return instance.post('auth/me').then(res => res.data)
    },
    restorePass(email: string) {
        return instance.post('auth/forgot', {email, from: 'cards-app <paraslovjm@gmail.com>', restorePassMessage})
            .then(res => res.data)
    },
    setNewPass(password: string, token: string) {
        return instance.post('auth/set-new-password', {password, token})
    }
}