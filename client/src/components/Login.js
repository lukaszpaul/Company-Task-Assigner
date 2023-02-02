import React from 'react'
import {AuthContainer, AuthText, EmailInput, EmailText, PasswordInput, PasswordText, SubmitButton2, OptionDrop, CompanyText}  from '../styles/AuthElements'


function Login() {

  return (
    <AuthContainer>
          
               <AuthText>Login</AuthText> 
                <EmailText>Email: </EmailText>
                 <EmailInput></EmailInput>

                 <PasswordText>Password:</PasswordText>
                 <PasswordInput></PasswordInput>
                
                

                <SubmitButton2>Sign In</SubmitButton2>
            
        </AuthContainer>
  )
}

export default Login;