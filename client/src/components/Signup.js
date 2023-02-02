import React from 'react'
import {SignupContainer, SignupText, EmailInput, EmailText, PasswordInput, PasswordText, SubmitButton}  from '../styles/Signup.style'

function Signup() {
  return (
    
        <SignupContainer>

          
               <SignupText>Sign Up</SignupText> 
                <EmailText>Email: </EmailText>
                 <EmailInput></EmailInput>

                 <PasswordText>Password:</PasswordText>
                 <PasswordInput></PasswordInput>
                

                <SubmitButton>Register</SubmitButton>
            
           
        </SignupContainer>
       
    
  )
}

export default Signup