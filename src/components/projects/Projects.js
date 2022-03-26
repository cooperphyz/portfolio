import React from 'react'
import SlantDividerDown from '../miscellaneous/SlantDividerDown';
import SlantedBanner from '../miscellaneous/SlantedBanner';
import LeftSliceContent from './LeftSliceContent'
import RightSliceContent from './RightSliceContent'
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
            <LeftSliceContent headingtext={"BDA-Explorer"} languages={["Ruby on Rails", "HTML", "CSS", "Bootstrap"]}/>
          </Fade>
        </div>
        <div className='project2-display'>
          <Fade right>
            <RightSliceContent/>
          </Fade>
        </div>
    </div>
  )
}

export default Projects