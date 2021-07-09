import React from 'react'
import Navbar from './Navbar'
import '../styles/global.css'

export default function Layout({ children }) {
    return (
        <div className="layout">
            <Navbar/>
            <div className="content">
                { children }
            </div>
            <footer>
                <p>Copyright 2021 Jongjin Jung</p>
            </footer>
        </div>
    )
}