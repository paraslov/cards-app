import {Redirect, Route, Switch} from 'react-router-dom'
import {Profile} from '../../n5-features/f4-profile/Profile'
import {Login} from '../../n5-features/f1-login/Login'
import {Test} from '../../n6-tests&trash/Test'
import {Registration} from '../../n5-features/f2-registration/Registration'
import {RestorePassword} from '../../n5-features/f3-password/RestorePassword'
import {SetNewPassword} from '../../n5-features/f3-password/SetNewPassword'

export const PATH = {
    LOGIN: '/login',
    REGISTRATION: '/registration',
    RESTORE_PASS: '/restore-password',
    SET_NEW_PASS: '/set-new-password',
    NOT_FOUND: '/404',
    PROFILE: '/profile',
    TEST: '/test'
}


export const Routes = () => {
    return (
        <div>
            <Switch>
                <Route exact path={'/'} render={() => <Redirect to={PATH.PROFILE}/>}/>
                <Route path={PATH.PROFILE} render={() => <Profile/>}/>
                <Route path={PATH.LOGIN} render={() => <Login/>}/>
                <Route path={PATH.REGISTRATION} render={() => <Registration/>}/>
                <Route path={PATH.RESTORE_PASS} render={() => <RestorePassword />}/>
                <Route path={PATH.SET_NEW_PASS} render={() => <SetNewPassword/>}/>
                <Route path={PATH.NOT_FOUND} render={() => <div><h1>404 - PAGE NOT FOUND</h1></div>}/>
                <Route path={PATH.TEST} render={() => <Test/>}/>
            </Switch>
        </div>
    )

}