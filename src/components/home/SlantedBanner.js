import React from 'react'
import backgroundImage from '../../img/3187989.jpg'
import { Parallax } from 'react-parallax';
import ParticleEnv from './ParticleEnv';
import './SlantedBanner.css';

const SlantedBanner = () => {
  return (
    <div className='slantedbanner'>
        <Parallax blur={0} bgImage={backgroundImage} bgImageAlt="bg" strength={500}
        bgImageSizes={1}>
                <div className='banner-top'>
        <h1 className='banner-top-heading'>Gatlin Cooper</h1>
        <h2 className='banner-top-subheading'>Web Application Developer</h2>
        <div className='particles'>
          <ParticleEnv/>
          </div>
        </div>
        </Parallax>
      </div>
  )
}

export default SlantedBanner