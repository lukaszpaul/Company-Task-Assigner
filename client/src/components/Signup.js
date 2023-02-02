import React, {useState, useEffect} from 'react'
import {SignupContainer, SignupText, EmailInput, EmailText, PasswordInput, PasswordText, SubmitButton}  from '../styles/Signup.style'
import fire from '../Firebase'

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