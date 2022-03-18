import React from 'react'
import backgroundImage from '../../img/3187989.jpg'
import ParticleEnv from './ParticleEnv';
import './SlantedBanner.css';

const SlantedBanner = () => {
  return (
    <div className='slantedbanner'>
      <div className='banner-top'>
        <h1 className='banner-top-heading'>G Cooper</h1>
        <div className='particles'>
          <ParticleEnv/>
        </div>
        <img src={backgroundImage}alt="bg"></img>
      </div>
      <div className='diagonal-box'>
        <div className='content'>
          <p>Name Jeff</p>
        </div>
      </div>
    </div>
  )
}

export default SlantedBanner