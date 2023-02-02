import React from 'react'
import {NavbarContainer, LeftContainer, RightContainer, 
    NavbarExtendedContainer, NavbarInnerContainer, NavbarLinkContainer,
     NavbarLink, NavbarLinkRight, Logo, NavbarLinkPortal} from '../styles/Navbar.style'
import LogoImage from '../assets/taskmate-1.png'

function Navbar() {
  return (
    
  <>
   <NavbarContainer>
        <NavbarInnerContainer>

            <LeftContainer>
                <NavbarLinkContainer>

                   <NavbarLink to="/">
                    <Logo src={LogoImage}></Logo>
                    </NavbarLink>

                    <NavbarLinkPortal to="/companyportal">Company Portal</NavbarLinkPortal>
                    <NavbarLinkPortal to="/studentportal">Student Portal</NavbarLinkPortal>
                    </NavbarLinkContainer>
            </LeftContainer>

            <RightContainer>
                <NavbarLinkContainer> 
                    <NavbarLinkRight to="/signup">Sign Up</NavbarLinkRight>
                    <NavbarLinkRight to="/login">Login</NavbarLinkRight>
                </NavbarLinkContainer>
            </RightContainer>

        </NavbarInnerContainer>

        <NavbarExtendedContainer></NavbarExtendedContainer>

   </NavbarContainer>
</>
  )
}

export default Navbar