import React from 'react'
import LeftSliceDiv from '../miscellaneous/LeftSliceDiv';
import SlantDividerDown from '../miscellaneous/SlantDividerDown';
import SlantedBanner from './SlantedBanner';
import Footer from '../footer/Footer';
import './Home.css';
import ParagraphContentPanel from '../miscellaneous/ParagraphContentPanel';
import Fade from 'react-reveal/Fade';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({ show: !this.state.show });
  }
  render() {
  return (
    <div className='encompass-home'>
    <div className='home-container'>
      <SlantedBanner/>
      <div className='top-divider-banner'>
        <SlantDividerDown/>
      </div>
      <div className='content-1'>
        <Fade left>
          <LeftSliceDiv/>
        </Fade>
      </div>
      <div className='content-2'>
        <ParagraphContentPanel/>
      </div>
    </div>
    <footer>
        <Footer/>
      </footer>
    </div>
  )
}
}

export default Home