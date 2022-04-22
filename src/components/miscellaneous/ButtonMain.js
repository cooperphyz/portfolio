import React from 'react'
import './ButtonMain.css'

const ButtonMain = (props) => {
  return (
    <div className='button-container' onClick={props.onClick}>
        <div className='button-main' onClick={props.onClick}>
          <a href={props.hreflink}>{props.buttonlabel} {props.icon}</a>
        </div>
    </div>
  )
}

export default ButtonMain