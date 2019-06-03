import React from 'react'
import { NavLink } from 'react-router-dom'
import './style.scss'

const Header = () => {
  return(
    <header className="header-container">
      <NavLink to="/" exact activeClassName="active">Home</NavLink>
      <NavLink to="/Episodes" activeClassName="active">Episodes</NavLink>
      <NavLink to="/Characters" activeClassName="active">Characters</NavLink>
    </header>
  )
}
export default Header;