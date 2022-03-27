import React from 'react'
import './LeftSliceContent.css'
import ButtonMain from '../miscellaneous/ButtonMain'
import { AiFillPlayCircle} from "react-icons/ai"
import { BsCode} from "react-icons/bs"

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
    <div className='leftslice-img-container'>
      <div className='fade'/>
      <img className='leftslice-img' src='https://i.imgur.com/NYXCgK2.png' alt="bda"/>
    </div>
    <div id="leftslice-inner-left">
    <div className='leftslice-headingtext'>
      {this.props.headingtext}
    </div>
    <div className='leftslice-tags'>
    {
      this.languages = this.props.languages.map((language) =>
      <p className='language-tag'>{language}</p>
      )
    }
    </div>
    <div className='leftslice-sourcecode'>
      <ButtonMain buttonlabel={"Code"} icon={<BsCode/>}/>
    </div>
    <div className='leftslice-project-live'>
    <ButtonMain buttonlabel={"Live"} icon={<AiFillPlayCircle/>}/>
    </div>
    </div>
</div>
  )
}
}

export default LeftSliceDiv