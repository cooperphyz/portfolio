import React from 'react'
import backgroundImage from '../../img/1741531.jpg'
import { Parallax } from 'react-parallax';
import ParticleEnv from './ParticleEnv';
import ButtonMain from '../miscellaneous/ButtonMain';
import './SlantedBanner.css';
import { BsFillArrowRightSquareFill } from "react-icons/bs"

const SlantedBanner = () => {
  return (
    <div className='slantedbanner'>
        <Parallax blur={0} bgImage={backgroundImage} bgImageAlt="bg" strength={500}
        bgImageSizes={1}>
        <div className='banner-top'>
          <h1 className='banner-top-heading'>Gatlin Cooper</h1>
          <h2 className='banner-top-subheading'>Web Application Developer</h2>
          <div className='button-container'>
            <ButtonMain hreflink="/projects" buttonlabel="View my Work" icon={<BsFillArrowRightSquareFill color={"white"} className={"button-icon"}/>}/>
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