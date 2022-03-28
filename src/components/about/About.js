import React from 'react'
import './About.css'
import Footer from '../footer/Footer'
import ParagraphContentPanel from '../miscellaneous/ParagraphContentPanel'
import SlantDividerDown from '../miscellaneous/SlantDividerDown';
import SlantedBanner from '../miscellaneous/SlantedBanner';
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';
import { SiRubyonrails, SiCss3, SiHtml5, SiPython, SiJavascript, SiGithub, SiJava, SiSqlite, SiBootstrap, SiPostgresql } from "react-icons/si";
import { RiReactjsFill } from "react-icons/ri"

const About = () => {
  return (
    <div className='encompass-about'>
      <div className='about-container'>
      <SlantedBanner heading={"/about"}/>
        <div className='top-divider-banner'>
          <Slide top>
            <SlantDividerDown/>
          </Slide>
        </div>
        <div className='about-content'>
          <ParagraphContentPanel parheader={"About Me"}>
            <p>asdfsdfasdfsdf</p>
            <Fade left cascade>
            <div className='about-iconlist'>
              <SiRubyonrails className='about-icon'/>
              <RiReactjsFill className='about-icon'/>
              <SiCss3 className='about-icon'/>
              <SiHtml5 className='about-icon'/>
              <SiPython className='about-icon'/>
              <SiJavascript className='about-icon'/>
              <SiGithub className='about-icon'/>
              <SiJava className='about-icon'/>
              <SiSqlite className='about-icon'/>
              <SiBootstrap className='about-icon'/>
              <SiPostgresql className='about-icon'/>
            </div>
            </Fade>
          </ParagraphContentPanel>
        </div>
      </div>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default About