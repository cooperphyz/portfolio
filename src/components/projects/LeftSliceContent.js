import React, { useState } from 'react'
import './LeftSliceContent.css'
import ButtonMain from '../miscellaneous/ButtonMain'
import { AiFillPlayCircle, AiOutlineRead} from "react-icons/ai"
import { BsCode} from "react-icons/bs"
import ProjectPopup from '../projects/projectspopup/ProjectPopup';

const LeftSliceContent = (props) => {

  const [isOpen, setIsOpen] = useState(false)


  return (
  <div id="leftslice-outer-left">

    <button onClick={() => setIsOpen(true)}>Open Modal</button>

    <ProjectPopup open={isOpen}>
      Boogies
    </ProjectPopup>
    <div className='leftslice-img-container'>
      <div className='fade'/>
      <img className='leftslice-img' src={props.imageurl} alt="bda"/>
    </div>
    <div id="leftslice-inner-left">
    <div className='leftslice-headingtext'>
      {props.headingtext}
    </div>
    <div className='leftslice-tags'>
    {
      props.languages.map((language) =>
      <p className='language-tag'>{language}</p>
      )
    }
    </div>
    <div className='leftslice-buttons'>
      <div className='leftslice-sourcecode'>
      <ButtonMain buttonlabel={"Code"} icon={<BsCode/>} hreflink={props.codelink}/>
      </div>
      <div className='leftslice-project-live'>
      <ButtonMain buttonlabel={"Live"} icon={<AiFillPlayCircle/>} hreflink={props.livelink}/>
      </div>
      <div className='leftslice-read-more'>
      <ButtonMain buttonlabel={"Read More"} icon={<AiOutlineRead/>}/>
      </div>
    </div>
    </div>
</div>
  )
}

export default LeftSliceContent