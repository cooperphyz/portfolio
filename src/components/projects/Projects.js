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
          <Fade left delay={200}>
            <LeftSliceContent headingtext={"BDA-Explorer"} languages={["Ruby on Rails", "HTML", "CSS", "Bootstrap"]} imageurl={"https://i.imgur.com/NYXCgK2.png"}/>
          </Fade>
        </div>
        <div className='project2-display'>
        <Fade left delay={400}>
            <LeftSliceContent headingtext={"Vava Grounds"} languages={["React.js ", "HTML", "CSS", "JavaScript"]} imageurl={"https://i.imgur.com/p1xhPqn.png"}/>
          </Fade>
        </div>
        <div className='project3-display'>
        <Fade left delay={600}>
            <LeftSliceContent headingtext={"Wasteagram"} languages={["Flutter", "Dart", "Android SDK", "Firestore"]} imageurl={"https://i.imgur.com/qH9yqPU.png"}/>
          </Fade>
        </div>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default Projects