import React from 'react'
import SlantDivider from '../miscellaneous/SlantDivider';
import SlantDividerRight from '../miscellaneous/SlantDividerRight';
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
    </div>
  )
}

export default Home