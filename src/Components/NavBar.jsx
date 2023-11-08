import React from 'react'
import "./NavBar.css"
import { Link, useLocation } from 'react-router-dom'

const NavBar = () => {
      const location = useLocation();
      return (
            <nav className='container'>
                  <ul>
                        <li>
                              <Link className={`nav-link ${location.pathname === "/" ? 'active' : ''}`} aria-current="page" to="/">Home</Link>
                        </li>
                        <li>
                              <Link className={`nav-link ${location.pathname === "/saved" ? 'active' : ''}`} to="/saved">BookMarks</Link>
                        </li>
                  </ul>
            </nav>
      )
}

export default NavBar
