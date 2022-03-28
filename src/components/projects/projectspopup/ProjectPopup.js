import React from 'react'
import './ProjectPopup.css'

const ProjectPopup = ({open, children}) => {
  if (!open) return null
  return (
    <div className='project-popup-container'>
        <div className='project-popup-heading'>
            <h1>BDA-Explorer</h1>
        </div>
        <div className='project-popup-content'>
            { children }
            <p>adkrfgjal;kerjkglejrglkerg</p>
            <p>adkrfgjrgergergal;kerjkgl34534ejrglkerg</p>
            <p>adkrfgjal;kerjkadfsglejrglkerg</p>
        </div>
    </div>
  )
}

export default ProjectPopup