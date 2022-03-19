import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='nav'>
      <nav className='navbar'>
        <div className='brand-title'>
          <li><a href="/">Gatlin Cooper</a></li>
        </div>
        <ul>
          <li><a href="/">About</a></li>
          <li><a href="/">Projects</a></li>
          <li><a href="/">Academics</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar