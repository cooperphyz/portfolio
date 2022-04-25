import React, { useState } from 'react'
import './Navbar.css'
import { GiHamburgerMenu } from "react-icons/gi"
import { AiOutlineClose } from "react-icons/ai"
import Fade from 'react-reveal/Fade';

const Navbar = () => {

  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () =>{
    setHamburgerOpen(!hamburgerOpen)
  }

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
      { !hamburgerOpen ? <GiHamburgerMenu onClick={toggleHamburger} size={50} color={'white'}/> : null }
      </div>
      <Fade right when={hamburgerOpen}>
      { hamburgerOpen ? <div className='hamburger-menu'>
          <AiOutlineClose className='hamburger-close' onClick={toggleHamburger} size={50} color= {'white'}/>
          { hamburgerOpen ?
          <ul className='hamburger-items'>
            <li className='hamburger-item'><a href="/">Home</a></li>
            <hr/>
            <li className='hamburger-item'><a href="/about">About</a></li>
            <hr/>
            <li className='hamburger-item'><a href="/projects">Projects</a></li>
          </ul>
          : '' }
        </div> : '' }
      </Fade>
      <Fade when={hamburgerOpen}>
        { hamburgerOpen ? <div className='hamburger-background-blur'/> : ''}
      </Fade>
    </div>
  )
}

export default Navbar