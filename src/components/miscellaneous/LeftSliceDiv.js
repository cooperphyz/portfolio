import React from 'react'
import './LeftSliceDiv.css'
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
          <a href="https://github.com/cooperphyz">GitHub</a><GoMarkGithub size={70}/>
        </div>
        <div className='link'>
          <a href="https://www.linkedin.com/in/gatlin-cooper/">Resume</a><BsFillJournalBookmarkFill size={70}/>
        </div>
        <div className='link'>
          <a href="https://www.linkedin.com/in/gatlin-cooper/">LinkedIn</a><BsLinkedin size={70}/>
        </div>
    </div>
</div>
  )
}

export default LeftSliceDiv