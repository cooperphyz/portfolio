import React from 'react'
import SlantDivider from '../miscellaneous/SlantDivider';
import SlantedBanner from './SlantedBanner';
import './Home.css';

const Home = () => {
  return (
    <div>
      <SlantedBanner/>
      <div className='top-divider-banner'>
        <SlantDivider
        heading={'Hello, my name is Gatlin Cooper'}
        par1={"I'm currently a Senior-year student at OSU Cascades."}
        par2={"I love working with front-end web application development frameworks, particularly React.js and Ruby on Rails."}
        par3={"Feel free to browse the various tabs to learn more about me, my projects, and my academics."}/>
       </div>
       <div className='second-divider-banner'>
        <SlantDivider
        heading={'Hello, my name is Gatlin Cooper'}
        par1={"I'm currently a Senior-year student at OSU Cascades."}
        par2={"I love working with front-end web application development frameworks, particularly React.js and Ruby on Rails."}
        par3={"Feel free to browse the various tabs to learn more about me, my projects, and my academics."}/>
       </div>
    </div>
  )
}

export default Home