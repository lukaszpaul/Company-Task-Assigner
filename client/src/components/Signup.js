// File: /src/components/Signup.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SignupContainer, AuthText, EmailInput, EmailText, PasswordInput, PasswordText, SubmitButton, OptionDrop, CompanyText } from '../styles/AuthElements';
import { SignUpUser, checkIfEmailExists } from '../firebaseConfig';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleSignUp = async () => {
    if (!email || !password) {
      setError('Please enter both an email and a password.');
      return;
    }

    const emailExists = await checkIfEmailExists(email);
    if (emailExists) {
      setError('Email already exists, please use a different email address.');
      return;
    } // <--- emailExists() function ends here

    try {
      await SignUpUser(email, password);
      navigate('/login');
    } catch (error) {
      console.error(error);
      setError('Error occurred while signing up. Please try again later.');
    }

  }; // <--- handSignUp() function ends here

  return (
    <SignupContainer>
      <AuthText>Sign Up</AuthText>

      <EmailText>Email: </EmailText>
      <EmailInput
        value={email}
        placeholder="youremail@example.com"
        type="email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <PasswordText>Password:</PasswordText>
      <PasswordInput
        value={password}
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <CompanyText>Company / Student</CompanyText>
      <OptionDrop name="id">
        <select name="ddlselect">
          <option>Choose Type</option>
          <option value="company">Company</option>
          <option value="student">Student</option>
        </select>
      </OptionDrop>

      {error && <div style={{ color: 'red' }}>{error}</div>}

      <SubmitButton onClick={handleSignUp}>Register</SubmitButton>
    </SignupContainer>
  );
} // <--- SignUp() function ends here

export default SignUp;








// import React, {useState} from 'react'
// import {useNavigate} from 'react-router-dom';
// import {SignupContainer, AuthText, EmailInput, EmailText, PasswordInput, PasswordText, SubmitButton, OptionDrop, CompanyText}  from '../styles/AuthElements'
// import { SignUpUser, checkIfEmailExists } from '../firebaseConfig';

// function SignUp () {

//   const[email, setEmail] = useState("");
//   const[password, setPassword] = useState("");

//   const navigate = useNavigate();

//   return (
//         <SignupContainer>
        
//                <AuthText>Sign Up</AuthText> 
               
//                 <EmailText>Email: </EmailText>
//                  <EmailInput
//                   value={email}
//                   placeholder="youremail@example.com"
//                   type="email"
//                   onChange={(e) => setEmail(e.target.value)} />
                

//                  <PasswordText>Password:</PasswordText>
//                  <PasswordInput
//                   value={password}
//                   type="password"
//                   onChange={(e) => setPassword(e.target.value)} />
                
//                 <CompanyText>Company / Student</CompanyText>
//                 <OptionDrop name='id'>
//                     <select name='ddlselect'>
//                         <option>Choose Type</option>
//                         <option value="company">Company</option>
//                         <option value="student">Student</option>
//                     </select>
//                 </OptionDrop>

//                 <SubmitButton onClick={async () => {
//                   await SignUpUser(email, password);
//                   navigate('/login');
//                 }}>
//                   Register
//                 </SubmitButton>
            
//         </SignupContainer>
//   )
// } // <--- SignUp() function ends here

// export default SignUp;