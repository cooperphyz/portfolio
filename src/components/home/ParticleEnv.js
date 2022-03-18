import React from 'react'
import Particles from "react-tsparticles";
import StarfieldAnimation from 'react-starfield-animation'

const ParticleEnv = () => {
    return (
      <StarfieldAnimation
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%'
      }}
    />
    );
}

export default ParticleEnv