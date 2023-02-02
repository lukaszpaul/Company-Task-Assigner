import React from 'react'
import {SignupContainer, AuthContainer, AuthText, EmailInput, EmailText, PasswordInput, PasswordText, SubmitButton, OptionDrop, CompanyText}  from '../styles/AuthElements'

function SignUp() {
  return (
        <SignupContainer>
          
               <AuthText>Sign Up</AuthText> 
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

export default SignUp;