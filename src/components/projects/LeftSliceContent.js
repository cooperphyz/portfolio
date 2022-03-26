import React from 'react'
import './LeftSliceContent.css'
import { GoMarkGithub } from "react-icons/go";
import { BsLinkedin, BsFillJournalBookmarkFill } from "react-icons/bs"

import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';
import ParagraphContentPanel from './ParagraphContentPanel';

class LeftSliceDiv extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.clickToggle = this.clickToggle.bind(this);
  }

  clickToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
    console.log(this.state.isOpen)
  }
render() {
  return (
  <div id="outer-left"> 
    <div id="inner-left">
    <div className='headingtext'>
      {this.props.headingtext}
    </div>
    <div className='link'>
          <a href="https://github.com/cooperphyz">GitHub</a><GoMarkGithub className='link-icon'/>
        </div>
        <div className='link'>
          <a href="https://www.linkedin.com/in/gatlin-cooper/">Resume</a><BsFillJournalBookmarkFill className='link-icon'/>
        </div>
        <div className='link'>
          <a href="https://www.linkedin.com/in/gatlin-cooper/">LinkedIn</a><BsLinkedin className='link-icon'/>
        </div>
    </div>
</div>
  )
}
}

export default LeftSliceDiv