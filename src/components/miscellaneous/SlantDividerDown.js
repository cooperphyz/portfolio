import React from 'react'
import './SlantDividerDown.css';

const SlantDividerDown = (props) => {
  return (
    <div className='content-container'>
      <div className='content-text'>
        <h1>{props.heading}</h1>
        <p>{props.par1}</p>
        <p>{props.par2}</p>
        <p>{props.par3}</p>
      </div>
      
      <div className='downcontent-panel-top'/>
      <div className='downcontent-panel-bottom'/>
      <div className='downborder-bottom'/>
      <div className='downborder-top'/>
    </div>
  )
}

export default SlantDividerDown