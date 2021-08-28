import React from 'react'
import { NavLink } from 'react-router-dom'
import {PATH} from '../../../../n1-app/routes/Routes'
import s from './Navbar.module.scss'

export const Navbar = () => {
    return (
        <div className={s.navbarContainer}>
            <NavLink to={PATH.PROFILE} className={s.link} activeClassName={s.active}>Profile</NavLink>
            <NavLink to={PATH.LOGIN} className={s.link} activeClassName={s.active}>Login</NavLink>
            <NavLink to={PATH.REGISTRATION} className={s.link} activeClassName={s.active}>Registration</NavLink>
            <NavLink to={PATH.RESTORE_PASS} className={s.link} activeClassName={s.active}>Restore</NavLink>
            <NavLink to={PATH.TEST} className={s.link} activeClassName={s.active}>Test</NavLink>
        </div>
    )
}