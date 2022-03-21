import React from 'react'
import LeftSliceDiv from '../miscellaneous/LeftSliceDiv';
import SlantDividerDown from '../miscellaneous/SlantDividerDown';
import SlantedBanner from './SlantedBanner';
import './Home.css';

const Home = () => {
  return (
    <div>
      <SlantedBanner/>
      <div className='top-divider-banner'>
        <SlantDividerDown/>
      </div>
      <div className='content-1'>
        <LeftSliceDiv/>
      </div>
    </div>
  )
}

export default Home