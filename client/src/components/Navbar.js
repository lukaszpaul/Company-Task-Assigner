import React, { useEffect } from 'react'
import {NavbarContainer, LeftContainer, RightContainer, 
    NavbarExtendedContainer, NavbarInnerContainer, NavbarLinkContainer,
     NavbarLink, NavbarLinkRight, Logo, LogoutButton, NavbarLinkPortal} from '../styles/Navbar.style'
import LogoImage from '../assets/taskmate-1.png'
import { useState } from 'react';
import { getAuth, signInWithEmailAndPassword} from 'firebase/auth'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    useNavigate 
  } from "react-router-dom";
  import { useAuthToken } from './Signup';


function Navbar() {
    const authToken = useAuthToken();
    let navigate = useNavigate();
    const [authTokenState, setAuthToken] = useState(null);

//sets authTokenState
  useEffect(() => {
    let authToken = sessionStorage.getItem('Auth Token');
  
    if (authToken) {
      setAuthToken(true);
    } else {
      setAuthToken(false);
    }
  }, [authToken]);

  
  useEffect(() => {
    let authToken = sessionStorage.getItem('Auth Token')
    console.log(authToken)
    if (authToken) {
        navigate('/portal')
    }

    if (!authToken) {
        navigate('/login')
    }
  }, [authTokenState]);
  
  //Logs out
  const handleLogout = () => {
    sessionStorage.removeItem('Auth Token');
    setAuthToken(false);
    navigate('/login')
  }


  return (
    
  <>
   <NavbarContainer>
        <NavbarInnerContainer>

            <LeftContainer>
                <NavbarLinkContainer>

                   <NavbarLink to="/">
                    <Logo src={LogoImage}></Logo>
                    </NavbarLink>

                        {authTokenState && (
                            <NavbarLinkPortal to='/companyportal'>Company Portal</NavbarLinkPortal>
                        )}
                    
                    
                    </NavbarLinkContainer>
            </LeftContainer>

            <RightContainer>
                
                <NavbarLinkContainer> 
                {!authTokenState && (
                <>
                  <NavbarLinkRight to="/signup">Sign Up</NavbarLinkRight>
                  <NavbarLinkRight to="/login">Login</NavbarLinkRight>
                </>
              )}

              {authTokenState && (
                <>
                 <LogoutButton onClick={handleLogout}>Log out</LogoutButton>
                </>
              )}
                </NavbarLinkContainer>
            </RightContainer>

        </NavbarInnerContainer>

        <NavbarExtendedContainer></NavbarExtendedContainer>

   </NavbarContainer>
</>
  )
}

export default React.memo(Navbar);


