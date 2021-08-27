import React from 'react'
import './App.css'
import {Routes} from '../routes/Routes'
import {Header} from '../../n4-common/components/c1-Header/Header'
import {HashRouter} from 'react-router-dom'

function App() {
    return (
        <div>
            <HashRouter>
                <Header/>
                <Routes/>
            </HashRouter>
        </div>
    )
}

export default App
