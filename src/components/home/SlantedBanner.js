import React from 'react'
import backgroundImage from '../../img/3187989.jpg'
import ParticleEnv from './ParticleEnv';
import './SlantedBanner.css';
import { Col, Row } from 'react-bootstrap';

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
      <div className='content-text'>
      <Row>
        <Col>
          <h1>Hello, my name is Gatlin Cooper</h1>
          <p>I'm currently a Senior-year student at OSU Cascades. </p>
          <p>I love working with front-end web application development frameworks, particularly React.js and Ruby on Rails.</p>
          <p>Feel free to browse the various tabs to learn more about me, my projects, and my academics.</p>
        </Col>
        <Col>
        <div className='content-links'>
          <p>Boogas</p>
        </div>
        </Col> 
      </Row>
      </div>
      <div className='content'/>
      <div className='content-lower'/>
    </div>
  )
}

export default SlantedBanner