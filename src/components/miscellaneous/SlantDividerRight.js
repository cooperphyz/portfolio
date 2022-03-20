import React from 'react'
import './SlantDividerRight.css';
import { GoMarkGithub } from "react-icons/go";
import { BsLinkedin, BsFillJournalBookmarkFill } from "react-icons/bs"


const SlantDivider = (props) => {
  return (
    <div className='content-container-right'>
      <div className='content-text-right'>
        <h1>{props.heading}</h1>
        <div className='link'>
          <a href="https://github.com/cooperphyz">GitHub</a><GoMarkGithub size={70}/>
        </div>
        <div className='link'>
          <a href="https://www.linkedin.com/in/gatlin-cooper/">Resume</a><BsFillJournalBookmarkFill size={70}/>
        </div>
        <div className='link'>
          <a href="https://www.linkedin.com/in/gatlin-cooper/">LinkedIn</a><BsLinkedin size={70}/>
        </div>
      </div>
      
      <div className='content-panel-right-top'/>
      <div className='content-panel-right-bottom'/>
      <div className='border-right-bottom'/>
      <div className='border-right-top'/>
    </div>
  )
}

export default SlantDivider