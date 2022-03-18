import React from 'react'
import backgroundImage from '../../img/3187989.jpg'
import ParticleEnv from './ParticleEnv';
import './SlantedBanner.css';

const SlantedBanner = () => {
  return (
    <div className='slantedbanner'>
      <div className='banner-top'>
        <h1>Slanted Banner</h1>
        <ParticleEnv/>
        <img src={backgroundImage}alt="bg"></img>
      </div>
      <div className='content'>
        <p>Name Jeff</p>
      </div>
    </div>
  )
}

export default SlantedBanner