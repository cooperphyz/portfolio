import React from 'react'
import './LeftSliceContent.css'
import { GoMarkGithub } from "react-icons/go";
import { BsLinkedin, BsFillJournalBookmarkFill } from "react-icons/bs"

const LeftSliceDiv = () => {
  return (
<div id="outer-left">
    <div id="inner-left">
    <div className='headingtext'>
      Quick Access Links and Resources
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

export default LeftSliceDiv