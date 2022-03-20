import React from 'react'
import './SlantDividerRight.css';
import { GoMarkGithub } from "react-icons/go";


const SlantDivider = (props) => {
  return (
    <div className='content-container-right'>
      <div className='content-text-right'>
        <h1>{props.heading}</h1>
        <div className='link'>
          <p>GitHub </p><GoMarkGithub size={70}/>
        </div>
        <p>Resume</p>
        <p>LinkedIn</p>
      </div>
      
      <div className='content-panel-right-top'/>
      <div className='content-panel-right-bottom'/>
      <div className='border-right-bottom'/>
      <div className='border-right-top'/>
    </div>
  )
}

export default SlantDivider