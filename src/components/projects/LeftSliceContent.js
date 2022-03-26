import React from 'react'
import './LeftSliceContent.css'

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
    <div className='leftslice-img-container'>
      <div className='fade'/>
      <img className='leftslice-img' src='https://i.imgur.com/cb9Bvul.png'></img>
    </div>
    </div>
</div>
  )
}
}

export default LeftSliceDiv