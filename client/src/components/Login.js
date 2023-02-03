// File: /src/components/Login.js

import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom';
import {AuthContainer, AuthText, EmailInput, EmailText, PasswordInput, PasswordText, SubmitButton2}  from '../styles/AuthElements'
import { SignInUser } from '../firebaseConfig';

function Login() {

  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");

  const navigate = useNavigate();

  return (
    <AuthContainer>
          
               <AuthText>Login</AuthText> 

                <EmailText>Email: </EmailText>
                 <EmailInput
                  value={email}
                  placeholder="youremail@exmaple.com"
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}/>
                
                 <PasswordText>Password:</PasswordText>
                 <PasswordInput
                  value={password}
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}/>
                
                <SubmitButton2 onClick={() => {
                  SignInUser(email, password);
                  navigate('/studentportal')
                }}  // <--- onClick() ends here
                >  
                  Sign In
                </SubmitButton2>
            
        </AuthContainer>
  )
} // <--- Login() function ends here

export default Login;