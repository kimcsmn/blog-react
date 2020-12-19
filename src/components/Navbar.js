import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return(
    <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
