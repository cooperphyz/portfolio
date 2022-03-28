import React from 'react'
import './About.css'
import Footer from '../footer/Footer'
import ParagraphContentPanel from '../miscellaneous/ParagraphContentPanel'

const About = () => {
  return (
    <div className='encompass-about'>
      <div className='about-container'>
        <div className='about-content'>
          <ParagraphContentPanel />
        </div>
      </div>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default About