import React from 'react'
import SlantDividerDown from '../miscellaneous/SlantDividerDown';
import SlantedBanner from '../miscellaneous/SlantedBanner';
import LeftSliceContent from './LeftSliceContent'
import Footer from '../footer/Footer';
import './Projects.css'

import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';

const Projects = () => {
  return (
    <div className='projects-container'>
        <SlantedBanner heading={"/projects"}/>
        <div className='top-divider-banner'>
          <Slide top>
            <SlantDividerDown/>
          </Slide>
        </div>
        <div className='project1-display'>
          <Fade left>
            <LeftSliceContent headingtext={"BDA-Explorer"} languages={["Ruby on Rails", "HTML", "CSS", "Bootstrap"]} imageurl={"https://i.imgur.com/NYXCgK2.png"}/>
          </Fade>
        </div>
        <div className='project2-display'>
          <Fade left>
            <LeftSliceContent headingtext={"Vava Grounds"} languages={["React.js", "HTML", "CSS", "JavaScript"]} imageurl={""}/>
          </Fade>
        </div>
        <div className='project3-display'>
          <Fade left>
            <LeftSliceContent headingtext={"Vava Grounds"} languages={["React.js", "HTML", "CSS", "JavaScript"]} imageurl={""}/>
          </Fade>
        </div>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default Projects