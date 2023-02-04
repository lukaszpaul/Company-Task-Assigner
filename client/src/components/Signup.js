import React, { useEffect } from 'react'
import { AuthContainer, AuthText, EmailInput, EmailText, PasswordInput, PasswordText, SubmitButton, OptionDrop, CompanyText, SubmitButton2}  from '../styles/AuthElements'
import { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { app } from '../firebase-config';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate 
} from "react-router-dom";

export const useAuthToken = () => {
  const [authToken, setAuthToken] = useState(null);

  return authToken;
};


function SignUp() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')

  const navigate = useNavigate();

  useEffect(() => {
    let authToken = sessionStorage.getItem('Auth Token')

    if (authToken) {
      navigate('/companyportal')
    }
  }, [])


  const handleAction = () => {
    const authentication = getAuth();
    
    createUserWithEmailAndPassword(authentication, email, password)
      .then((response) => {
        navigate('/companyportal')
        sessionStorage.setItem("Auth Token", response._tokenResponse.refreshToken)
      })
  }



  return (
        <AuthContainer>
          
               <AuthText>Sign Up</AuthText> 
                <EmailText>Email: </EmailText>
                 <EmailInput id='email' onChange={(e) => setEmail(e.target.value)}></EmailInput>

                 <PasswordText>Password:</PasswordText>
                 <PasswordInput id='password' type= "password" onChange={(e) => setPassword(e.target.value)}></PasswordInput>
          
                <SubmitButton2 onClick={handleAction}>Register</SubmitButton2>
            
        </AuthContainer>
  )
}

export default SignUp;