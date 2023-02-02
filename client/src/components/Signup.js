import React from 'react'
import {SignupContainer, SignupText, EmailInput, EmailText, PasswordInput, PasswordText, SubmitButton, OptionDrop, CompanyText}  from '../styles/Signup.style'

function Signup() {
  return (
        <SignupContainer>
          
               <SignupText>Sign Up</SignupText> 
                <EmailText>Email: </EmailText>
                 <EmailInput></EmailInput>

                 <PasswordText>Password:</PasswordText>
                 <PasswordInput></PasswordInput>
                
                <CompanyText>Company / Student</CompanyText>
                <OptionDrop name='id'>
                    <select name='ddlselect'>
                        <option>Choose Type</option>
                        <option value="company">Company</option>
                        <option value="student">Student</option>
                    </select>
                </OptionDrop>

                <SubmitButton>Register</SubmitButton>
            
        </SignupContainer>
  )
}

export default Signup;