import React, { useEffect } from 'react'
import {AuthContainer, AuthText, EmailInput, EmailText, PasswordInput, PasswordText, SubmitButton2, OptionDrop, CompanyText}  from '../styles/AuthElements'
import { getAuth, signInWithEmailAndPassword} from 'firebase/auth'
import { app } from '../firebase-config';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate 
} from "react-router-dom";
import { useState } from 'react';


function Login() {

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
    signInWithEmailAndPassword(authentication, email, password)
      .then((response) => {
        navigate('/companyportal')
        sessionStorage.setItem("Auth Token", response._tokenResponse.refreshToken)
      })
  }

  return (
    <AuthContainer>
          
               <AuthText>Login</AuthText> 
                <EmailText>Email: </EmailText>
                <EmailInput id='email' onChange={(e) => setEmail(e.target.value)}></EmailInput>

                 <PasswordText>Password:</PasswordText>
                 <PasswordInput id='password' type= "password" onChange={(e) => setPassword(e.target.value)}></PasswordInput>

                <SubmitButton2 onClick={handleAction}>Sign In</SubmitButton2>
            
        </AuthContainer>
  )
}

export default Login;