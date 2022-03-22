import React from 'react'
import LeftSliceDiv from '../miscellaneous/LeftSliceDiv';
import SlantDividerDown from '../miscellaneous/SlantDividerDown';
import SlantedBanner from './SlantedBanner';
import Footer from '../footer/Footer';
import './Home.css';
import ParagraphContentPanel from '../miscellaneous/ParagraphContentPanel';

const Home = () => {
  return (
    <div className='encompass-home'>
    <div className='home-container'>
      <SlantedBanner/>
      <div className='top-divider-banner'>
        <SlantDividerDown/>
      </div>
      <div className='content-1'>
        <LeftSliceDiv/>
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

export default Home