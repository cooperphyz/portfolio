import React from 'react'
import LeftSliceDiv from '../miscellaneous/LeftSliceDiv';
import SlantDividerDown from '../miscellaneous/SlantDividerDown';
import SlantedBanner from '../miscellaneous/SlantedBanner';
import Footer from '../footer/Footer';
import ButtonMain from '../miscellaneous/ButtonMain';
import './Home.css';
import ParagraphContentPanel from '../miscellaneous/ParagraphContentPanel';
import Fade from 'react-reveal/Fade';
import { BsFillArrowRightSquareFill } from "react-icons/bs"

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({ show: !this.state.show });
  }
  render() {
  return (
    <div className='encompass-home'>
    <div className='home-container'>
      <SlantedBanner heading={"Gatlin Cooper"} subheading={"Web Application Developer"} icon={
      <ButtonMain hreflink="/projects" buttonlabel="View my Work" icon={<BsFillArrowRightSquareFill color={"white"} className={"button-icon"}/>}/>
      }/>
      <div className='top-divider-banner'>
        <SlantDividerDown/>
      </div>
      <div className='content-1'>
        <Fade left>
          <LeftSliceDiv/>
        </Fade>
      </div>
      <div className='content-2'>
        <ParagraphContentPanel parheader={"Hello, my name is Gatlin Cooper."}>
          <p>I am a senior year computer science student studying at OSU-Cascades.</p>
          <p>I love working with web application frameworks, particularly React.js and Ruby on Rails, to develop functional and practical web applications. </p>
          <p>Please feel free to browse the various sections of this website to learn more about me, my academics, and my projects.</p>
        </ParagraphContentPanel>
      </div>
    </div>
    <footer>
        <Footer/>
    </footer>
    </div>
  )
}
}

export default Home