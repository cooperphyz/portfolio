import React from 'react'
import './ProjectPopup.css'


const ProjectPopup = ({popupheading, popuptext, open}) => {
  if (!open) return null
  return (
    <div className='project-popup-container'>
        <div className='project-popup-heading'>
            <h1>{popupheading}</h1>

        </div>
        <div className='project-popup-content'>
        {
            popuptext.map((language) =>
            <p className='language-tag'>{language}</p>
            )
        }   
        </div>
    </div>
  )
}

export default ProjectPopup