import React from 'react'
import './SlantDivider.css';

const SlantDivider = (props) => {
  return (
    <div className='content-container'>
      <div className='content-text'>
        <h1>{props.heading}</h1>
        <p>{props.par1}</p>
        <p>{props.par2}</p>
        <p>{props.par3}</p>
      </div>
      
      <div className='content-panel-top'/>
      <div className='content-panel-bottom'/>
      <div className='border-bottom'/>
      <div className='border-top'/>
    </div>
  )
}

export default SlantDivider