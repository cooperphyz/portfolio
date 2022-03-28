import React from 'react'
import './ParagraphContentPanel.css'

const ParagraphContentPanel = ({children, parheader}) => {
  return (
    <div className='paragraph-container'>
      <div className='paragraph-content'>
        <div className='paragraph-topdecoration'/>
        <div className='paragraph-header'>
            {parheader}
        </div>
        <div className='paragraph-text'>
          {children}
        </div>
      </div>
    </div>
  )
}

export default ParagraphContentPanel