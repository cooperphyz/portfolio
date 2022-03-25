import React from 'react'
import './RightSliceContent.css'

import ParagraphContentPanel from './ParagraphContentPanel';

class LeftSliceDiv extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpen: true,
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
      <input type="submit" value="Search" onClick={this.clickToggle} />
  
      <div className='dropdown-content'>
        { this.state.isOpen ? <ParagraphContentPanel /> : null }
      </div>
    </div>  
  )
}
}

export default LeftSliceDiv