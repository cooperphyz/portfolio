import React from 'react'
import './Footer.css'
import { GoMarkGithub } from "react-icons/go";
import { BsLinkedin, BsFillJournalBookmarkFill } from "react-icons/bs"

const Footer = () => {
  return (
    <div>
      <div className='footer-topdecoration'/>
    <footer className='flex-wrapper'>
    <div className='footer-content'>
      <div className='footer-col1'>
        <h4 className='footer-col1-head'>Contact Information</h4>
        <ul className='footer-col1-list'>
          <p>Gatlin Cooper</p>
          <p>gjcooper99@gmail.com</p>
          <p>OSU-Cascades</p>
        </ul>
      </div>
      <div className='footer-col2'>
        <h4 className='footer-col2-head'>Links and Navigation</h4>
        <ul className='footer-col2-list'>
        <p><a href="https://github.com/cooperphyz">GitHub</a><GoMarkGithub size={20}/></p>
        <p><a href="https://www.linkedin.com/in/gatlin-cooper/">Resume</a><BsFillJournalBookmarkFill size={20}/></p>
        <p><a href="https://www.linkedin.com/in/gatlin-cooper/">LinkedIn </a><BsLinkedin size={20}/></p>
        </ul>
      </div>
      <div className='footer-col3'>
       <h4 className='footer-col3-head'>Quick Access Resources</h4>
       <ul className='footer-col3-list'>
        <p><a href="/">Home</a></p>
        <p><a href="/about">About</a></p>
        <p><a href="/projects">Projects</a></p>
        </ul>
      </div>
    </div>
    </footer>
    </div>
  ) 
}

export default Footer