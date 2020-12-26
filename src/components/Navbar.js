import React from 'react'
import { Link, NavLink, withRouter } from 'react-router-dom'

const Navbar = (props) => {
  // setInterval(() => {
  //   props.history.push('/about')
  // },2000)

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

export default withRouter(Navbar)
