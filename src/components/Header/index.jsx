import React from 'react'
import { Link } from 'react-router-dom'
import './style.scss'

const Header = () => {
    return(
        <header className="header-container">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/news">News</Link>
        </header>
    )
}
export default Header;