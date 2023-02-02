import React from 'react'
import {AuthContainer, AuthText, EmailInput, EmailText, PasswordInput, PasswordText, SubmitButton, OptionDrop, CompanyText}  from '../styles/AuthElements'


function Login() {

  return (
    <AuthContainer>
          
               <AuthText>Login</AuthText> 
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

                <SubmitButton>Sign In</SubmitButton>
            
        </AuthContainer>
  )
}

export default Login;