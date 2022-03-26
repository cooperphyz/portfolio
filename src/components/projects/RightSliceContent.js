import React from 'react'
import './RightSliceContent.css'

class RightSliceDiv extends React.Component {

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

  render () {
    return(
    <div id="outer-right">
      <div id="inner-right">
        <div div className='headingtext'>
          BDA-Explorer
        </div>
        <div className='link'>
          
        </div>
        <div className='link'>
          
        </div>
        <div className='link'>
          
        </div>
      </div>
    </div>
  )
}
}

export default RightSliceDiv