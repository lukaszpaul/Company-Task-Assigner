import React from 'react'
import { LandingLogo, LogoContainer } from '../styles/AuthElements';
import LogoImage2 from '../assets/pictask.png'

function Landing() {
  return (
    <>
        <LogoContainer> 
          <LandingLogo src={LogoImage2}></LandingLogo>
       </LogoContainer>
    </>
  )
}

export default Landing