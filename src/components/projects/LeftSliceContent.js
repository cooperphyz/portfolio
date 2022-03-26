import React from 'react'
import './LeftSliceContent.css'
import { GoMarkGithub } from "react-icons/go";
import { BsLinkedin, BsFillJournalBookmarkFill } from "react-icons/bs"

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
  <div id="leftslice-outer-left"> 
    <div id="leftslice-inner-left">
    <div className='leftslice-headingtext'>
      {this.props.headingtext}
    </div>
    <div className='tags'>
    {
      this.languages = this.props.languages.map((language) =>
      <p className='language-tag'>{language}</p>
      )
    }
    </div>
    <div className='leftslice-link'>
          <a href="https://github.com/cooperphyz">GitHub</a><GoMarkGithub className='link-icon'/>
        </div>
        <div className='leftslice-link'>
          <a href="https://www.linkedin.com/in/gatlin-cooper/">Resume</a><BsFillJournalBookmarkFill className='link-icon'/>
        </div>
        <div className='leftslice-link'>
          <a href="https://www.linkedin.com/in/gatlin-cooper/">LinkedIn</a><BsLinkedin className='link-icon'/>
        </div>
    </div>
</div>
  )
}
}

export default LeftSliceDiv