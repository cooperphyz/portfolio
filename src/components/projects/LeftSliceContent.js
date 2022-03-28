import React, { useState } from 'react'
import './LeftSliceContent.css'
import ButtonMain from '../miscellaneous/ButtonMain'
import { AiFillPlayCircle, AiOutlineRead} from "react-icons/ai"
import { BsCode} from "react-icons/bs"
import ProjectPopup from '../projects/projectspopup/ProjectPopup';
import Fade from 'react-reveal/Fade';

const LeftSliceContent = (props, {children}) => {

  const [isOpen, setIsOpen] = useState(false)


  return (
  <div className='leftslice-container'>
   <div id="leftslice-outer-left">
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
        { props.livelinkenabled
          ? <ButtonMain buttonlabel={"Live"} icon={<AiFillPlayCircle/>} enabled={props.livelinkenabled} hreflink={props.livelink}/>
          : null
        }
      </div>
      <div className='leftslice-read-more'>
      <ButtonMain buttonlabel={"Read More"} onClick={() => setIsOpen(!isOpen)} icon={<AiOutlineRead/>}/>
      </div>
    </div>
    </div>
  </div>
  <div id='leftslice-popup'>
    <Fade top when={isOpen} >
      <ProjectPopup open={isOpen} onClose={() => setIsOpen(false)}
      popupheading={props.popupheading}
      popuptext={props.popuptext}>
      </ProjectPopup>
    </Fade>
    </div>
</div>  
  )
}

export default LeftSliceContent