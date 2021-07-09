import { Link } from 'gatsby'
import React from 'react'

export default function Navbar() {
    return (
        <nav>
            <h1>Portfolio</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/projects">Personal Projects</Link>
            </div>
        </nav>
    )
}
