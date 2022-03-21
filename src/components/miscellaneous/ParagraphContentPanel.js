import React from 'react'
import './ParagraphContentPanel.css'

const ParagraphContentPanel = () => {
  return (
    <div className='paragraph-content'>
        <div className='paragraph-topdecoration'/>
        <div className='paragraph-header'>
            Hello, my name is Gatlin Cooper.
        </div>
        <div className='paragraph-text'>
            <p>I am a senior year computer science student studying at OSU-Cascades.</p>
            <p>I love working with front-end frameworks, such as React.js and Ruby on Rails, to develop functional and practical web applications. </p>
            <p>Please feel free to browse the various sections of this website to learn more about me, my academics, and my projects.</p>
        </div>
    </div>
  )
}

export default ParagraphContentPanel