import React from 'react'
import './App.css'
import {Routes} from '../routes/Routes'
import {Header} from '../../n4-common/components/c1-Header/Header'
import {HashRouter} from 'react-router-dom'

function App() {
    return (
        <HashRouter>
            <div>
                <Header/>
                <Routes/>
                <h6>v.0.01</h6>
            </div>
        </HashRouter>
    )
}

export default App
