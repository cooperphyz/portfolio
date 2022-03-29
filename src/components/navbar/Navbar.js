import React from 'react'
import './Navbar.css'
import { GiHamburgerMenu } from "react-icons/gi"

const Navbar = () => {
  return (
    <div className='nav'>
      <nav className='navbar'>
        <div className='brand-title'>
          <li><a href="/">Home</a></li>
        </div>
        <ul>
          <li><a href="/about">About</a></li>
          <li><a href="/projects">Projects</a></li>
        </ul>
      </nav>
      <div className='hamburger'>
      <GiHamburgerMenu size={50} color={'white'}/>
      </div>
    </div>
  )
}

export default Navbar