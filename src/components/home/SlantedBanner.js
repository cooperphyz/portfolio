import React from 'react'
import backgroundImage from '../../img/3187989.jpg'
import SlantDivider from '../miscellaneous/SlantDivider';
import ParticleEnv from './ParticleEnv';
import './SlantedBanner.css';

const SlantedBanner = () => {
  return (
    <div className='slantedbanner'>
      <div className='banner-top'>
        <h1 className='banner-top-heading'>Gatlin Cooper</h1>
        <h2 className='banner-top-subheading'>Web Application Developer</h2>
        <div className='particles'>
          <ParticleEnv/>
        </div>
        <img src={backgroundImage}alt="bg"></img>
      </div>
    </div>
  )
}

export default SlantedBanner