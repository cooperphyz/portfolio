import React from 'react'
import backgroundImage from '../../img/1741531.jpg'
import { Parallax } from 'react-parallax';
import ParticleEnv from '../particle/ParticleEnv';

import './SlantedBanner.css';

const SlantedBanner = (props) => {
  return (
    <div className='slantedbanner'>
        <Parallax blur={0} bgImage={backgroundImage} bgImageAlt="bg" strength={500}
        bgImageSizes={1}>
        <div className='banner-top'>
          <h1 className='banner-top-heading'>{props.heading}</h1>
          <h2 className='banner-top-subheading'>{props.subheading}</h2>
          <div className='button-container'>
            {props.icon}
          </div>
          <div className='particles'>
            <ParticleEnv/>
          </div>
        </div>
        </Parallax>
      </div>
  )
}

export default SlantedBanner