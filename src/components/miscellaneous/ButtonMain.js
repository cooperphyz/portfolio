import React from 'react'
import './ButtonMain.css'

const ButtonMain = (props) => {
  return (
    <div className='button-container'>
        <div className='button-main'>
          <a href={props.hreflink}>{props.buttonlabel} {props.icon}</a>
        </div>
    </div>
  )
}

export default ButtonMain